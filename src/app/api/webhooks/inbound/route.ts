import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Resend sends inbound email data in this format
    const { from, to, subject, html, text } = body;

    console.log('Received inbound email:', { from, to, subject });

    // Forward the email to andrew.shay02@gmail.com
    const { data, error } = await resend.emails.send({
      from: 'The Assistant Coach <hello@send.theassistantcoach.co>',
      to: ['andrew.shay02@gmail.com'],
      replyTo: from,
      subject: `[Forwarded] ${subject || 'No Subject'}`,
      html: html || `
        <p><strong>Forwarded email from:</strong> ${from}</p>
        <p><strong>Original To:</strong> ${to}</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <hr>
        <p>${text || 'No content'}</p>
      `,
    });

    if (error) {
      console.error('Error forwarding email:', error);
      return NextResponse.json(
        { error: 'Failed to forward email' },
        { status: 500 }
      );
    }

    console.log('Email forwarded successfully:', data?.id);
    return NextResponse.json({ success: true, emailId: data?.id });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}
