import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | The Assistant Coach',
  description: 'Terms of Service for The Assistant Coach apps and services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By using The Assistant Coach apps and services, you agree to these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700">
              The Assistant Coach provides coaching tools including Practice Planner, Shot Tracker, GameStat, and Football Planner. These tools help coaches plan practices, track player statistics, and manage their teams.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us of any unauthorized use</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use the service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the service</li>
              <li>Share account credentials with unauthorized users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Subscriptions and Payments</h2>
            <p className="text-gray-700">
              Paid subscriptions are billed in advance on a monthly or annual basis. You may cancel at any time, and your subscription will remain active until the end of the current billing period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700">
              The Assistant Coach apps, including all content, features, and functionality, are owned by The Assistant Coach and are protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              The Assistant Coach is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700">
              We may update these Terms from time to time. We will notify you of significant changes by email or through the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about these Terms, contact us at{' '}
              <a href="mailto:hello@theassistantcoach.co" className="text-blue-600 hover:underline">
                hello@theassistantcoach.co
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
