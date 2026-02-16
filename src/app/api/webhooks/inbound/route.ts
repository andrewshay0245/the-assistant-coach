import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log('Webhook received:', body.type);

    // Resend webhook format: { type: "email.received", data: { email_id, from, to, subject, ... } }
    if (body.type !== 'email.received' || !body.data) {
      console.error('Invalid webhook format:', body);
      return NextResponse.json({ error: 'Invalid webhook' }, { status: 400 });
    }

    const { email_id, from, to, subject } = body.data;
    console.log('Email received:', { email_id, from, to, subject });

    // Fetch the full email content from Resend API
    const emailResponse = await fetch(`https://api.resend.com/emails/${email_id}`, {
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
    });

    if (!emailResponse.ok) {
      console.error('Failed to fetch email:', await emailResponse.text());
      return NextResponse.json({ error: 'Failed to fetch email' }, { status: 500 });
    }

    const emailContent = await emailResponse.json();
    console.log('Email content fetched:', { has_html: !!emailContent.html, has_text: !!emailContent.text });

    // Forward the email to andrew.shay02@gmail.com
    const { data: sendData, error } = await resend.emails.send({
      from: 'The Assistant Coach <hello@send.theassistantcoach.co>',
      to: ['andrew.shay02@gmail.com'],
      replyTo: from,
      subject: `[Forwarded] ${subject || 'No Subject'}`,
      html: emailContent.html || `
        <p><strong>Forwarded email from:</strong> ${from}</p>
        <p><strong>Original To:</strong> ${Array.isArray(to) ? to.join(', ') : to}</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <hr>
        <p>${emailContent.text || 'No content'}</p>
      `,
    });

    if (error) {
      console.error('Error forwarding email:', error);
      return NextResponse.json(
        { error: 'Failed to forward email' },
        { status: 500 }
      );
    }

    console.log('Email forwarded successfully:', sendData?.id);
    return NextResponse.json({ success: true, emailId: sendData?.id });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}
