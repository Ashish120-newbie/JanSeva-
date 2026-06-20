import { Link } from 'react-router-dom';
import {
  Shield,
  Zap,
  Eye,
  Clock,
  MessageSquare,
  BarChart3,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Bot,
  Globe,
  Lock,
} from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Analysis',
    description: 'Smart categorization and priority assessment using advanced AI to route complaints efficiently.',
  },
  {
    icon: FileSearch,
    title: 'Real-Time Tracking',
    description: 'Track your complaints through every stage with live updates and estimated resolution times.',
  },
  {
    icon: MessageSquare,
    title: 'AI Assistant',
    description: '24/7 AI chatbot to help citizens file complaints and find relevant government schemes.',
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description: 'Full visibility into complaint handling with public dashboards and performance metrics.',
  },
  {
    icon: Clock,
    title: 'Faster Resolution',
    description: 'Reduced average resolution time through intelligent routing and automated follow-ups.',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'End-to-end encryption and secure data handling with citizen privacy protection.',
  },
];

const stats = [
  { value: '50,000+', label: 'Complaints Resolved' },
  { value: '98.5%', label: 'Citizen Satisfaction' },
  { value: '45%', label: 'Faster Resolution' },
  { value: '24/7', label: 'AI Support Available' },
];

export function LandingPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Powered by Advanced AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              One Platform. Smarter Governance.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Better Citizen Experience.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              An AI-powered unified citizen services platform that simplifies grievance management,
              improves transparency, and enables faster government response through intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/analytics"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <BarChart3 className="w-5 h-5" />
                View Analytics
              </Link>
            </div>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-2xl overflow-hidden">
              <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Complaints', value: '1,324', color: 'blue' },
                    { label: 'Active', value: '168', color: 'amber' },
                    { label: 'Resolved', value: '1,156', color: 'green' },
                    { label: 'Pending', value: '23', color: 'red' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      <p className="text-sm text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need for Better Governance
            </h2>
            <p className="text-lg text-slate-600">
              JanSeva brings cutting-edge AI technology to citizen services, making government more
              responsive, transparent, and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600">
              File a complaint in minutes and track it to resolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'File Your Complaint',
                description: 'Describe your issue and let AI auto-categorize and prioritize it instantly.',
                icon: FileSearch,
              },
              {
                step: '02',
                title: 'AI Routes to Department',
                description: 'Smart automation assigns your complaint to the right department and officer.',
                icon: Bot,
              },
              {
                step: '03',
                title: 'Track & Get Updates',
                description: 'Monitor progress in real-time with estimated resolution times and alerts.',
                icon: Eye,
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-8xl font-bold text-blue-100 absolute -top-8 -left-4">
                    {step.step}
                  </div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials/Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Citizens & Government
            </h2>
            <p className="text-lg text-slate-600">
              Join thousands of citizens who have resolved their grievances through JanSeva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "My pothole complaint was resolved in just 3 days. The real-time tracking kept me informed throughout.",
                author: "Amit Sharma",
                role: "Citizen, Delhi",
              },
              {
                quote: "The AI assistant helped me discover 3 government schemes I was eligible for. Highly recommended!",
                author: "Priya Verma",
                role: "Student, Mumbai",
              },
              {
                quote: "As a government officer, this platform has made complaint management so much more efficient.",
                author: "Rajesh Kumar",
                role: "Municipal Officer",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience Better Governance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of citizens who are already benefiting from JanSeva's intelligent platform.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold shadow-lg hover:bg-blue-50 transition-colors"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
