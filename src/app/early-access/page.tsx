'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Sparkles, Users, Trophy, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'First Access',
    description: 'Be among the first to use our tools before public launch.',
  },
  {
    icon: Users,
    title: 'Shape the Product',
    description: 'Your feedback directly influences features and improvements.',
  },
  {
    icon: Trophy,
    title: 'Founding Member Pricing',
    description: 'Lock in special early adopter rates for life.',
  },
];

const coachingLevels = [
  { value: 'youth', label: 'Youth (U12 and under)' },
  { value: 'middle_school', label: 'Middle School' },
  { value: 'high_school', label: 'High School' },
  { value: 'club', label: 'Club / Travel' },
  { value: 'college', label: 'College' },
  { value: 'professional', label: 'Professional / MLL / PLL' },
];

const teamSizes = [
  { value: '1-15', label: '1-15 players' },
  { value: '16-25', label: '16-25 players' },
  { value: '26-40', label: '26-40 players' },
  { value: '40+', label: '40+ players' },
];

export default function EarlyAccessPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    coachingLevel: '',
    teamSize: '',
    interests: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInterestToggle = (interest: string) => {
    setFormState((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-12 max-w-lg text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            You&apos;re on the list!
          </h1>
          <p className="text-gray-600 mb-6">
            Thanks for joining our early access program. We&apos;ll be in touch soon with
            exclusive updates and your invitation to try The Assistant Coach.
          </p>
          <Link
            href="/"
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Limited Early Access
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join the Waitlist
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Be among the first coaches to experience smart practice planning,
                shot tracking, and game statistics. Early access members get founding
                member pricing locked in forever.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="bg-blue-700/50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                      <p className="text-blue-200">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h2 className="text-2xl font-bold mb-6">Get Early Access</h2>
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
                    placeholder="Coach Smith"
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
                    placeholder="coach@team.com"
                  />
                </div>

                <div>
                  <label htmlFor="coachingLevel" className="block text-sm font-medium text-gray-700 mb-2">
                    Coaching Level
                  </label>
                  <select
                    id="coachingLevel"
                    required
                    value={formState.coachingLevel}
                    onChange={(e) => setFormState({ ...formState, coachingLevel: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value="">Select your level</option>
                    {coachingLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    required
                    value={formState.teamSize}
                    onChange={(e) => setFormState({ ...formState, teamSize: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value="">Select team size</option>
                    {teamSizes.map((size) => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Products you&apos;re interested in
                  </label>
                  <div className="space-y-2">
                    {['Practice Planner', 'Shot Tracker', 'StatPro'].map((product) => (
                      <label key={product} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formState.interests.includes(product)}
                          onChange={() => handleInterestToggle(product)}
                          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        />
                        <span className="text-gray-700">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  No spam, ever. We&apos;ll only email you about The Assistant Coach.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
