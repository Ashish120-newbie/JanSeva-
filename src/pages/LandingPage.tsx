import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Bot,
  ArrowRight,
  FileText,
  Search,
  MessageSquare,
  BarChart3,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  Users,
  Lock,
  Loader2,
  Star,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: FileText,
    title: 'File a Complaint',
    description:
      'Submit grievances with smart AI categorization and automatic department routing.',
    href: '/file-complaint',
  },
  {
    icon: Search,
    title: 'Track Complaints',
    description:
      'Monitor real-time status across every stage from submission to resolution.',
    href: '/track',
  },
  {
    icon: MessageSquare,
    title: 'AI Assistant',
    description:
      'A 24/7 chatbot that guides you through services, schemes, and documentation.',
    href: '/assistant',
  },
  {
    icon: BarChart3,
    title: 'Public Analytics',
    description:
      'Transparent dashboards showing resolution performance and department metrics.',
    href: '/analytics',
  },
];

const trustBadges = [
  { icon: Lock, label: 'Secure & Encrypted' },
  { icon: Clock, label: '24/7 Available' },
  { icon: Users, label: '50,000+ Citizens' },
  { icon: CheckCircle2, label: 'Govt Verified' },
];

const steps = [
  {
    number: '01',
    title: 'Submit Your Complaint',
    description:
      'Describe your issue in plain language. No need to know which department handles it.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'AI Routes & Prioritizes',
    description:
      'The assistant categorizes, sets priority, and assigns it to the right department instantly.',
    icon: Bot,
  },
  {
    number: '03',
    title: 'Track to Resolution',
    description:
      'Follow live status updates and get notified when your issue is resolved.',
    icon: Search,
  },
];

const samplePrompts = [
  'How do I file a complaint?',
  'Track my complaint CVC2024001',
  'What schemes am I eligible for?',
  'Documents for a birth certificate?',
];

const mockReplies: Record<string, string> = {
  'How do I file a complaint?':
    'To file a complaint: go to "File Complaint" from the navigation, fill in the title and description, select a category, add your location and contact number, then submit. AI auto-categorizes and routes it to the right department.',
  'Track my complaint CVC2024001':
    'Complaint CVC2024001 — "Broken Street Lights in Sector 15" — is currently under review by the Electricity Department. Officer Rajesh Kumar is on the case.',
  'What schemes am I eligible for?':
    'Based on common eligibility, you may qualify for: National Scholarship Portal, PM-KISAN Samman Nidhi, Ayushman Bharat, and Pradhan Mantri Awas Yojana. Visit the Schemes page for full details.',
  'Documents for a birth certificate?':
    'For a birth certificate you typically need: hospital discharge summary, parents\' Aadhaar, proof of address, and an affidavit if filed after 21 days. Processing takes 7-15 days.',
};

interface ChatMessage {
  id: number;
  role: 'user' | 'bot';
  text: string;
}

export function LandingPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      role: 'bot',
      text: 'Hello! I\'m JanSeva Assistant. I can help you file complaints, track status, find government schemes, and answer service questions. Try a prompt below.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendPrompt = (prompt: string) => {
    if (!prompt.trim() || isTyping) return;
    const userMsg: ChatMessage = { id: Date.now(), role: 'user', text: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply =
        mockReplies[prompt] ??
        'I can help with filing complaints, tracking, schemes, and document requirements. Could you provide a bit more detail about what you need?';
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'bot', text: reply },
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Citizen Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Smarter Governance.{' '}
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Better Citizen Experience.
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                One unified platform to file, track, and resolve grievances. AI
                categorizes and routes complaints to the right department —
                fast, transparent, and accessible to every citizen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/assistant"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
                >
                  <Bot className="w-5 h-5 text-blue-600" />
                  Try the Assistant
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <badge.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-xs font-medium text-slate-700">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chatbot Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-blue-600/10 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-sky-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-md shadow-blue-600/30">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">
                        JanSeva Assistant
                      </p>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Online • Ready to help
                      </p>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </div>

                <div className="h-[340px] overflow-y-auto p-5 space-y-4 bg-slate-50/50">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={cn(
                        'flex gap-2.5 animate-fade-in',
                        msg.role === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      {msg.role === 'bot' && (
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div
                        className={cn(
                          'max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                          msg.role === 'user'
                            ? 'bg-blue-600 text-white rounded-br-md'
                            : 'bg-white border border-slate-200 text-slate-700 rounded-bl-md shadow-sm'
                        )}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-2.5 animate-fade-in">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-4 py-3 border-t border-slate-100 bg-white">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {samplePrompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => sendPrompt(prompt)}
                        disabled={isTyping}
                        className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 disabled:opacity-50 transition-colors border border-blue-100"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') sendPrompt(input);
                      }}
                      placeholder="Ask me anything..."
                      className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <button
                      onClick={() => sendPrompt(input)}
                      disabled={!input.trim() || isTyping}
                      aria-label="Send message"
                      className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 transition-colors flex-shrink-0"
                    >
                      {isTyping ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '50,000+', label: 'Complaints Resolved' },
              { value: '98.5%', label: 'Citizen Satisfaction' },
              { value: '45%', label: 'Faster Resolution' },
              { value: '24/7', label: 'AI Support Available' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-slate-600 mt-1 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              One Platform, Every Service
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to engage with government services, in one
              clean, intuitive interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                  Open
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600">
              File a complaint in minutes and track it to resolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-blue-100 rounded-2xl" />
                  <div className="absolute text-5xl font-bold text-blue-200 -z-0">
                    {step.number}
                  </div>
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-600/30">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Citizens & Government
            </h2>
            <p className="text-lg text-slate-600">
              Join thousands who have resolved their grievances through JanSeva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'My pothole complaint was resolved in 3 days. Real-time tracking kept me informed the whole way.',
                author: 'Amit Sharma',
                role: 'Citizen, Delhi',
              },
              {
                quote:
                  'The AI assistant helped me discover 3 government schemes I was eligible for. Highly recommended!',
                author: 'Priya Verma',
                role: 'Student, Mumbai',
              },
              {
                quote:
                  'As an officer, this platform has made complaint management so much more efficient.',
                author: 'Rajesh Kumar',
                role: 'Municipal Officer',
              },
            ].map((t) => (
              <div
                key={t.author}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center text-white font-medium">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{t.author}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-white/90 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience Better Governance?
          </h2>
          <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
            Join thousands of citizens already benefiting from JanSeva's
            intelligent platform.
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
