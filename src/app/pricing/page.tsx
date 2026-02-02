import Link from 'next/link';
import { CheckCircle, X, ArrowRight, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 15,
    yearlyPrice: 150,
    description: 'Perfect for youth coaches getting started with organized practices.',
    features: {
      practicePlanner: 'basic',
      shotTracker: false,
      gameStat: false,
      teams: 1,
      coachesPerTeam: 2,
      playersPerTeam: 25,
      aiDrillsPerMonth: 5,
      aiAnalysisPerMonth: 0,
      pdfExportsPerMonth: 0,
      seasonsHistory: 1,
    },
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 39,
    yearlyPrice: 390,
    description: 'For serious coaches who want shot analytics and deeper insights.',
    features: {
      practicePlanner: 'full',
      shotTracker: 'basic',
      gameStat: false,
      teams: 3,
      coachesPerTeam: 5,
      playersPerTeam: 50,
      aiDrillsPerMonth: 25,
      aiAnalysisPerMonth: 10,
      pdfExportsPerMonth: 10,
      seasonsHistory: 3,
    },
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Elite',
    price: 79,
    yearlyPrice: 790,
    description: 'Complete suite for programs that demand the best tools available.',
    features: {
      practicePlanner: 'full',
      shotTracker: 'full',
      gameStat: 'full',
      teams: -1,
      coachesPerTeam: 15,
      playersPerTeam: -1,
      aiDrillsPerMonth: -1,
      aiAnalysisPerMonth: 50,
      pdfExportsPerMonth: -1,
      seasonsHistory: -1,
    },
    cta: 'Get Started',
    highlighted: false,
  },
];

const featureLabels = {
  practicePlanner: 'Practice Planner',
  shotTracker: 'Shot Tracker',
  gameStat: 'StatPro',
  teams: 'Teams',
  coachesPerTeam: 'Coaches per team',
  playersPerTeam: 'Players per team',
  aiDrillsPerMonth: 'Drills / month',
  aiAnalysisPerMonth: 'Analysis reports / month',
  pdfExportsPerMonth: 'PDF exports / month',
  seasonsHistory: 'Seasons of history',
};

function formatFeatureValue(key: string, value: string | number | boolean): string {
  if (typeof value === 'boolean') return value ? 'Included' : 'Not included';
  if (typeof value === 'string') {
    if (value === 'basic') return 'Basic';
    if (value === 'full') return 'Full';
    return value;
  }
  if (value === -1) return 'Unlimited';
  if (value === 0) return '—';
  return value.toString();
}

const faqs = [
  {
    question: 'What\'s included in each plan?',
    answer: 'Each plan includes access to different features. Check the plan details above for specific features included in each tier.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely. Upgrade or downgrade anytime. Changes take effect at your next billing cycle.',
  },
  {
    question: 'Do you offer team or organization discounts?',
    answer: 'Yes, we offer discounts for clubs and organizations with multiple teams. Contact us for custom pricing.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Your data is yours. You can export everything before canceling, and we retain data for 90 days in case you return.',
  },
  {
    question: 'Is there a contract or commitment?',
    answer: 'No contracts. Pay monthly or save with annual billing. Cancel anytime.',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your program.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'ring-2 ring-blue-600 shadow-xl relative'
                    : 'border border-gray-200'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900">
                      ${tier.price}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    or ${tier.yearlyPrice}/year (save ${tier.price * 12 - tier.yearlyPrice})
                  </p>
                </div>

                <Link
                  href="/early-access"
                  className={`block w-full text-center py-3 rounded-lg font-semibold mb-8 transition-colors ${
                    tier.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </Link>

                <div className="space-y-4">
                  {Object.entries(tier.features).map(([key, value]) => {
                    const isIncluded = value !== false && value !== 0;
                    return (
                      <div key={key} className="flex items-center gap-3">
                        {isIncluded ? (
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={isIncluded ? 'text-gray-700' : 'text-gray-400'}>
                          {featureLabels[key as keyof typeof featureLabels]}:{' '}
                          <span className="font-medium">
                            {formatFeatureValue(key, value)}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Feature
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className="text-center py-4 px-4 font-semibold text-gray-900"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(featureLabels).map(([key, label]) => (
                  <tr key={key} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{label}</td>
                    {tiers.map((tier) => {
                      const value = tier.features[key as keyof typeof tier.features];
                      const isIncluded = value !== false && value !== 0;
                      return (
                        <td
                          key={tier.name}
                          className={`text-center py-4 px-4 ${
                            isIncluded ? 'text-gray-900' : 'text-gray-400'
                          }`}
                        >
                          {formatFeatureValue(key, value)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-blue-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            No credit card required. Cancel anytime.
          </p>
          <Link
            href="/early-access"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
