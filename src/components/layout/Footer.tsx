import { Link } from 'react-router-dom';
import {
  Shield,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">JanSeva</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Empowering citizens with AI-driven governance solutions for a transparent and efficient democracy.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-slate-400 hover:text-white text-sm transition-colors">Dashboard</Link></li>
              <li><Link to="/file-complaint" className="text-slate-400 hover:text-white text-sm transition-colors">File Complaint</Link></li>
              <li><Link to="/track" className="text-slate-400 hover:text-white text-sm transition-colors">Track Complaint</Link></li>
              <li><Link to="/schemes" className="text-slate-400 hover:text-white text-sm transition-colors">Government Schemes</Link></li>
              <li><Link to="/analytics" className="text-slate-400 hover:text-white text-sm transition-colors">Analytics</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">FAQs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Report an Issue</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Data Protection</a></li>
            </ul>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@janseva.gov.in</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 JanSeva. All rights reserved. Made with care for the citizens of India.
          </p>
        </div>
      </div>
    </footer>
  );
}
