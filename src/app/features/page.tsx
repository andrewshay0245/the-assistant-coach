import Link from 'next/link';
import {
  Clipboard,
  Target,
  BarChart3,
  Sparkles,
  Zap,
  FileText,
  Users,
  PieChart,
  TrendingUp,
  Timer,
  ArrowRight,
} from 'lucide-react';

const products = [
  {
    id: 'practice-planner',
    name: 'Practice Planner',
    tagline: 'Smart Practice Design',
    description: 'Stop spending hours planning practices. Generate customized drills and practice plans based on your team\'s needs, skill level, and available time.',
    icon: Clipboard,
    color: 'blue',
    features: [
      {
        title: 'Drill Generator',
        description: 'Get randomized drills based on field size, player count, and coaching constraints.',
        icon: Sparkles,
      },
      {
        title: 'Practice Templates',
        description: 'Pre-built practice structures for different focuses: offense, defense, transition, conditioning.',
        icon: FileText,
      },
      {
        title: 'Skill Progressions',
        description: 'Age-appropriate drill progressions that build skills systematically over time.',
        icon: TrendingUp,
      },
      {
        title: 'Time Management',
        description: 'Automatically allocate time across drills to fit your available practice window.',
        icon: Timer,
      },
    ],
  },
  {
    id: 'shot-tracker',
    name: 'Shot Tracker',
    tagline: 'Advanced Shot Analytics',
    description: 'Track every shot with precision location data. Understand shooting patterns, calculate expected goals, and identify the best scoring opportunities.',
    icon: Target,
    color: 'emerald',
    features: [
      {
        title: 'xG Model',
        description: 'Expected Goals calculation based on shot location, angle, and distance from the cage.',
        icon: PieChart,
      },
      {
        title: 'Heat Maps',
        description: 'Visual shot distribution maps showing where your team is most dangerous.',
        icon: Zap,
      },
      {
        title: 'Player Analytics',
        description: 'Individual player shot profiles with shooting percentage by zone.',
        icon: Users,
      },
      {
        title: 'PDF Reports',
        description: 'Generate professional reports to share with players, parents, and staff.',
        icon: FileText,
      },
    ],
  },
  {
    id: 'gamestat',
    name: 'StatPro',
    tagline: 'Complete Practice & Game Statistics',
    description: 'Comprehensive real-time stat tracking for practice and games. From face-offs to clears, ground balls to turnovers — capture every stat that matters.',
    icon: BarChart3,
    color: 'amber',
    features: [
      {
        title: 'Live Tracking',
        description: 'Easy-to-use interface for real-time stat entry during games.',
        icon: Timer,
      },
      {
        title: 'Team Comparisons',
        description: 'Head-to-head stat comparisons to identify strengths and weaknesses.',
        icon: Users,
      },
      {
        title: 'Season Analytics',
        description: 'Track trends across the season to measure team improvement.',
        icon: TrendingUp,
      },
      {
        title: 'Export & Share',
        description: 'Export stats to PDF or share directly with your coaching staff.',
        icon: FileText,
      },
    ],
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-600',
    bgLight: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
    gradient: 'from-blue-600 to-blue-800',
  },
  emerald: {
    bg: 'bg-emerald-600',
    bgLight: 'bg-emerald-100',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    gradient: 'from-emerald-600 to-emerald-800',
  },
  amber: {
    bg: 'bg-amber-600',
    bgLight: 'bg-amber-100',
    text: 'text-amber-600',
    border: 'border-amber-200',
    gradient: 'from-amber-600 to-amber-800',
  },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for Every Coach
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three integrated tools designed to help you plan better practices,
            track performance, and elevate your program.
          </p>
        </div>
      </section>

      {/* Products Detail Sections */}
      {products.map((product, index) => {
        const colors = colorClasses[product.color as keyof typeof colorClasses];
        const isEven = index % 2 === 0;

        return (
          <section
            key={product.id}
            id={product.id}
            className={`py-24 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Product Header */}
              <div className="text-center mb-16">
                <div className={`${colors.bg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <product.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h2>
                <p className={`text-lg font-semibold ${colors.text} mb-4`}>
                  {product.tagline}
                </p>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {product.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {product.features.map((feature) => (
                  <div
                    key={feature.title}
                    className={`bg-white p-8 rounded-2xl border ${colors.border} hover:shadow-lg transition-shadow`}
                  >
                    <div className={`${colors.bgLight} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
        );
      })}

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Better Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each tool is powerful on its own, but together they create a complete coaching ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-blue-600 mb-2">3x</div>
              <p className="text-gray-600">More efficient practice planning</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-emerald-600 mb-2">100%</div>
              <p className="text-gray-600">Shot data accuracy</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-amber-600 mb-2">50+</div>
              <p className="text-gray-600">Statistics tracked per game</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Coaching?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the early access program and be among the first to use these powerful tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/early-access"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
