import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log the full body to see Resend's format
    console.log('Full webhook body:', JSON.stringify(body, null, 2));

    // Resend sends inbound email data - check for different possible formats
    const { from, to, subject, html, text, data } = body;

    // Resend might nest the email data in a 'data' object
    const emailData = data || body;
    const fromEmail = emailData.from || from;
    const toEmail = emailData.to || to;
    const emailSubject = emailData.subject || subject;
    const emailHtml = emailData.html || html;
    const emailText = emailData.text || text;

    console.log('Parsed email:', { from: fromEmail, to: toEmail, subject: emailSubject });

    // Forward the email to andrew.shay02@gmail.com
    const { data: sendData, error } = await resend.emails.send({
      from: 'The Assistant Coach <hello@send.theassistantcoach.co>',
      to: ['andrew.shay02@gmail.com'],
      replyTo: fromEmail,
      subject: `[Forwarded] ${emailSubject || 'No Subject'}`,
      html: emailHtml || `
        <p><strong>Forwarded email from:</strong> ${fromEmail}</p>
        <p><strong>Original To:</strong> ${toEmail}</p>
        <p><strong>Subject:</strong> ${emailSubject || 'No Subject'}</p>
        <hr>
        <p>${emailText || 'No content'}</p>
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
