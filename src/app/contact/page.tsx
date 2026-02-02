'use client';

import { useState } from 'react';
import { Mail, MessageSquare, CheckCircle } from 'lucide-react';

const contactReasons = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Support Question' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'enterprise', label: 'Enterprise / Organization Pricing' },
  { value: 'feedback', label: 'Product Feedback' },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // For now, just simulate a submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24">
        <div className="bg-white rounded-2xl p-12 max-w-lg text-center shadow-lg">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Message Sent!
          </h1>
          <p className="text-gray-600 mb-6">
            Thanks for reaching out. We&apos;ll get back to you within 24-48 hours.
          </p>
          <a
            href="/"
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question, feedback, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;re here to help and answer any questions you might have.
                We look forward to hearing from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:hello@theassistantcoach.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      hello@theassistantcoach.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Looking for support?
                </h3>
                <p className="text-gray-600 text-sm">
                  If you&apos;re an existing user and need help, select &quot;Support Question&quot;
                  from the dropdown and include your account email so we can assist you faster.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    required
                    value={formState.reason}
                    onChange={(e) => setFormState({ ...formState, reason: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value="">Select a reason</option>
                    {contactReasons.map((reason) => (
                      <option key={reason.value} value={reason.value}>
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
