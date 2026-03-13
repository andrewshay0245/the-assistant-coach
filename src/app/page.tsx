import Link from 'next/link';
import {
  Clipboard,
  Target,
  BarChart3,
  Sparkles,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

// Football emoji icon component
const FootballIcon = ({ className }: { className?: string }) => (
  <span className={className} style={{ fontSize: '1.75rem', lineHeight: 1 }}>🏈</span>
);
// Mockups removed - using live product links instead

const products = [
  {
    name: 'Football Practice Planner',
    description: 'Football is different. So is our football practice planner. Position-specific drills, game week templates, load tracking, and print-ready schedules.',
    icon: FootballIcon,
    color: 'bg-green-700',
    features: ['Game week templates', 'Position group tracking', 'Load management'],
    href: 'https://football.theassistantcoach.co',
    status: 'new',
    isEmoji: true,
  },
  {
    name: 'Practice Planner',
    description: 'Plan and organize lacrosse practices with ease. Build practice schedules and keep your team on track.',
    icon: Clipboard,
    color: 'bg-blue-600',
    features: ['Practice scheduling', 'Drill organization', 'Print-ready plans'],
    href: 'https://planner.theassistantcoach.co',
    status: 'live',
  },
  {
    name: 'StatPro',
    description: 'Comprehensive statistics for practice and games. Track everything from ground balls to turnovers with easy-to-use interfaces.',
    icon: BarChart3,
    color: 'bg-amber-600',
    features: ['Live tracking', 'Team comparisons', 'PDF reports'],
    href: 'https://gamestat.theassistantcoach.co',
    status: 'live',
  },
  {
    name: 'Shot Tracker',
    description: 'Track every shot with precision. Analyze shot patterns, calculate expected goals (xG), and identify scoring opportunities.',
    icon: Target,
    color: 'bg-emerald-600',
    features: ['xG model', 'Heat maps', 'Player analytics'],
    href: 'https://shottracker.theassistantcoach.co',
    status: 'coming',
  },
];

const features = [
  {
    title: 'Smart Coaching Tools',
    description: 'Intelligent features that help you make better decisions faster.',
    icon: Sparkles,
  },
  {
    title: 'Save Hours Every Week',
    description: 'Stop spending hours on spreadsheets. Get organized in minutes.',
    icon: Clock,
  },
  {
    title: 'Built for All Levels',
    description: 'From youth programs to college teams, tools that scale with you.',
    icon: Users,
  },
  {
    title: 'Track Progress Over Time',
    description: 'See player and team development with historical data analysis.',
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    quote: "Finally, tools that understand what coaches actually need. The practice planner alone saves me hours every week.",
    author: "Head Coach",
    team: "D1 Program",
  },
  {
    quote: "The shot tracking data helped us identify patterns we never would have seen otherwise. Game changer.",
    author: "Assistant Coach",
    team: "High School Varsity",
  },
  {
    quote: "Simple enough for parent volunteers, powerful enough for serious programs. Perfect for our club.",
    author: "Director",
    team: "Youth Club",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a1628] text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Lacrosse Coaching Tools
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your{' '}
              <span className="text-blue-300">
                Coaching Assistant
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Practice planning, shot tracking, and game statistics — all in one suite.
              Tools designed by coaches, for coaches at every level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/features"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
        {/* Clean line transition to white */}
      </section>

      {/* Products Overview */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Four Powerful Tools, One Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run better practices, track performance, and elevate your program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className={`${product.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  {'isEmoji' in product && product.isEmoji ? (
                    <product.icon />
                  ) : (
                    <product.icon className="w-7 h-7 text-white" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  {product.name}
                  {product.status === 'new' && (
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                      NEW
                    </span>
                  )}
                  {product.status === 'coming' && (
                    <span className="bg-gray-400 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                      COMING SOON
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href={product.href}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white ${product.color} hover:opacity-90 transition-opacity`}
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Coaches Love Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with coaches in mind, designed to make your job easier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Coaches
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join coaches at every level who are elevating their programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <p className="text-gray-700 text-lg mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.team}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Coaching?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Try any of our tools free and see the difference for yourself.
          </p>
          <Link
            href="#products"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
