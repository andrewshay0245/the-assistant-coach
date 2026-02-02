import Link from 'next/link';
import { Target, Users, Sparkles, Award, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Built by Coaches',
    description: 'We understand the challenges of coaching because we\'ve lived them. Every feature is designed with real coaching workflows in mind.',
  },
  {
    icon: Users,
    title: 'For Every Level',
    description: 'From youth programs to elite college teams, our tools scale to meet your needs without overwhelming you.',
  },
  {
    icon: Sparkles,
    title: 'Smart Automation',
    description: 'We handle the tedious parts of coaching so you can focus on what matters: developing players.',
  },
  {
    icon: Award,
    title: 'Data-Driven Results',
    description: 'Make better decisions with real insights. Our analytics help you identify what\'s working and what needs attention.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About The Assistant Coach
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We&apos;re building the tools we wish we had when we started coaching.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Coaching lacrosse is rewarding, but it&apos;s also demanding. Between practice
              planning, game prep, stat tracking, and player development, coaches spend
              countless hours on administrative tasks.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mt-4">
              <strong>The Assistant Coach</strong> exists to give coaches those hours back.
              We combine smart automation with intuitive design to handle the busywork,
              so you can spend more time doing what you love: coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Believe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our values guide every feature we build and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-2xl">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              The Assistant Coach started with a simple frustration: there had to be a
              better way to plan practices than scribbling on notepads and hoping you
              remembered everything.
            </p>
            <p className="mt-4">
              We started building tools for ourselves — a drill generator that understood
              coaching philosophy, a shot tracker that actually calculated meaningful
              statistics, and a stat system that didn&apos;t require a PhD to operate.
            </p>
            <p className="mt-4">
              Other coaches noticed. They wanted in. And so The Assistant Coach was born —
              a suite of tools built by coaches who understand that your time is valuable
              and your players deserve the best preparation possible.
            </p>
            <p className="mt-4">
              Today, we&apos;re building the future of lacrosse coaching technology. Whether
              you&apos;re running your first youth practice or preparing for a championship
              game, we&apos;re here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We&apos;re just getting started, and we&apos;d love for you to be part of it.
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
              href="/contact"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
