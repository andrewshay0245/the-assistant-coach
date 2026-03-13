import Link from 'next/link';
import { CheckCircle, Clock, ArrowRight, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    description: 'Perfect for youth coaches getting started with organized practices.',
    features: [
      'Practice Planner (Basic)',
      '1 Team',
      '2 Coaches per team',
      '25 Players per team',
      '5 AI-generated drills/month',
      '1 Season of history',
    ],
  },
  {
    name: 'Pro',
    description: 'For serious coaches who want shot analytics and deeper insights.',
    features: [
      'Practice Planner (Full)',
      'Shot Tracker (Basic)',
      '3 Teams',
      '5 Coaches per team',
      '50 Players per team',
      '25 AI-generated drills/month',
      '10 Analysis reports/month',
      '10 PDF exports/month',
      '3 Seasons of history',
    ],
    highlighted: true,
  },
  {
    name: 'Elite',
    description: 'Complete suite for programs that demand the best tools available.',
    features: [
      'Practice Planner (Full)',
      'Shot Tracker (Full)',
      'GameStat',
      'Unlimited Teams',
      '15 Coaches per team',
      'Unlimited Players',
      'Unlimited AI drills',
      '50 Analysis reports/month',
      'Unlimited PDF exports',
      'Unlimited history',
    ],
  },
];

const faqs = [
  {
    question: 'When will pricing be available?',
    answer: 'We\'re currently in beta and working on finalizing our pricing. Join our early access list to be notified when we launch and get exclusive early adopter pricing.',
  },
  {
    question: 'Will there be a free tier?',
    answer: 'We\'re exploring options for a free tier with limited features. Beta users will get extended access to all features.',
  },
  {
    question: 'Do you offer team or organization discounts?',
    answer: 'Yes, we\'ll offer discounts for clubs and organizations with multiple teams. Contact us for more information.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Your data is yours. You can export everything before canceling, and we retain data for 90 days in case you return.',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Pricing Coming Soon
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're finalizing our plans. Join the beta to lock in early adopter pricing.
          </p>
        </div>
      </section>

      {/* Pricing Cards - Greyed Out */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-2xl p-8 opacity-75 ${
                  tier.highlighted
                    ? 'ring-2 ring-gray-300 shadow-lg relative'
                    : 'border border-gray-200'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gray-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                    <span className="text-4xl font-bold text-gray-400">
                      $--
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Pricing coming soon
                  </p>
                </div>

                <div
                  className="block w-full text-center py-3 rounded-lg font-semibold mb-8 bg-gray-200 text-gray-500 cursor-not-allowed"
                >
                  Coming Soon
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want Early Access?
          </h2>
          <p className="text-gray-600 mb-6">
            Join our beta program to try all features free and lock in exclusive early adopter pricing when we launch.
          </p>
          <Link
            href="/early-access"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            Join the Beta
            <ArrowRight className="w-5 h-5" />
          </Link>
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
            Join the beta and start building better practices — free during early access.
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
