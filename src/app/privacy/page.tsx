import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | The Assistant Coach',
  description: 'Privacy Policy for The Assistant Coach apps and services.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              When you use The Assistant Coach apps (Practice Planner, Shot Tracker, GameStat, or Football Planner), we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Account information (email, name) when you sign up</li>
              <li>Practice plans, game statistics, and player data you create</li>
              <li>Usage data to improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Send you important updates about your account</li>
              <li>Improve and develop new features</li>
              <li>Respond to your support requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
            <p className="text-gray-700">
              We take reasonable measures to protect your information. Your data is stored securely and we use industry-standard encryption for data in transit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, contact us at{' '}
              <a href="mailto:support@theassistantcoach.co" className="text-blue-600 hover:underline">
                support@theassistantcoach.co
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
