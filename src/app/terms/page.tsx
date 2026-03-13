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
            <p className="text-gray-700 mb-4">
              The Assistant Coach apps, including all content, features, functionality, designs, user interface, underlying code, algorithms, and documentation, are owned exclusively by The Assistant Coach and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>By using our services, you agree that you will NOT:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Copy, reproduce, or duplicate any portion of the service or its features</li>
              <li>Reverse engineer, decompile, or disassemble the software</li>
              <li>Create derivative works based on the service</li>
              <li>Use the service to develop a competing product</li>
              <li>Remove or alter any proprietary notices or labels</li>
              <li>Share, resell, or redistribute access to the service</li>
            </ul>
            <p className="text-gray-700">
              Violation of these terms may result in immediate termination of your account and legal action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Content</h2>
            <p className="text-gray-700 mb-4">
              You retain ownership of the data you create (practice plans, player rosters, statistics, etc.). By using our service, you grant us a limited license to store, process, and display your content solely to provide the service to you.
            </p>
            <p className="text-gray-700">
              We will not sell your data to third parties or use it for purposes unrelated to providing the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700">
              The Assistant Coach is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700">
              We may update these Terms from time to time. We will notify you of significant changes by email or through the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
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
