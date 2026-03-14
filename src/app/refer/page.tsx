'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Users, ArrowRight } from 'lucide-react';

export default function ReferPage() {
  const [referrerEmail, setReferrerEmail] = useState('');
  const [friendEmail, setFriendEmail] = useState('');
  const [friendName, setFriendName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to API endpoint
      const res = await fetch('/api/refer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          referrerEmail,
          friendEmail,
          friendName,
          timestamp: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Referral error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Referral Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thanks for spreading the word. We&apos;ll reach out to {friendName || 'your friend'} and 
            make sure you both get credit when our referral program launches.
          </p>
          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
            >
              Back to Home
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setFriendEmail('');
                setFriendName('');
              }}
              className="block w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg transition-colors"
            >
              Refer Another Coach
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
            <Users className="w-4 h-4" />
            Coaches Helping Coaches
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Know a Coach Who&apos;d Love This?
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We&apos;re building a referral program to reward coaches who spread the word. 
            Get them in early — we&apos;ll take care of you both.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={referrerEmail}
                onChange={(e) => setReferrerEmail(e.target.value)}
                placeholder="you@school.edu"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-gray-500 text-sm mt-1">So we can credit you when rewards launch</p>
            </div>

            <hr className="border-gray-200" />

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Friend&apos;s Name
              </label>
              <input
                type="text"
                value={friendName}
                onChange={(e) => setFriendName(e.target.value)}
                placeholder="Coach Smith"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Friend&apos;s Email
              </label>
              <input
                type="email"
                value={friendEmail}
                onChange={(e) => setFriendEmail(e.target.value)}
                placeholder="friend@school.edu"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading ? 'Submitting...' : 'Submit Referral'}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            We&apos;ll send them a friendly intro. No spam, ever.
          </p>
        </div>
      </div>
    </div>
  );
}
