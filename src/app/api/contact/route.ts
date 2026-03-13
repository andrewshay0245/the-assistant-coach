import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy-load to avoid build-time errors when env var is missing
const getResend = () => new Resend(process.env.RESEND_API_KEY || '');

interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.email || !body.name || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await getResend().emails.send({
      from: 'The Assistant Coach <onboarding@resend.dev>',
      to: ['info@theassistantcoach.co'],
      replyTo: body.email,
      subject: `Contact Form: ${body.reason || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Reason:</strong> ${body.reason || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', emailId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
