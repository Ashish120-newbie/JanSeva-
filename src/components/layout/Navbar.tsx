import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  LayoutDashboard,
  FileText,
  MessageSquare,
  Menu,
  X,
  Shield,
  Phone as PhoneIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/', icon: Home, hash: undefined },
  { name: 'Services', path: '/#services', icon: FileText, hash: 'services' },
  { name: 'AI Assistant', path: '/#assistant', icon: MessageSquare, hash: 'assistant' },
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, hash: undefined },
  { name: 'About', path: '/#about', icon: Shield, hash: 'about' },
  { name: 'Contact', path: '/#contact', icon: PhoneIcon, hash: 'contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const scrollToHash = (hash: string) => {
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent,
    path: string,
    hash: string | undefined
  ) => {
    if (!hash) return;

    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      // Need to navigate to home first, then scroll after render
      isNavigatingRef.current = true;
      navigate('/');
      // Wait for the landing page to mount, then scroll
      setTimeout(() => {
        scrollToHash(hash);
        isNavigatingRef.current = false;
      }, 300);
    } else {
      // Already on home — just scroll
      scrollToHash(hash);
      // Update URL hash without triggering a navigation jump
      window.history.replaceState(null, '', `/#${hash}`);
    }
  };

  const isActive = (path: string, hash?: string) => {
    if (hash) {
      return location.pathname === '/' && location.hash === `#${hash}`;
    }
    return location.pathname === path && !location.hash;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              JanSeva
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path, item.hash)}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer',
                    isActive(item.path, item.hash)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 rounded-lg shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              <Shield className="w-4 h-4" />
              Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 animate-slide-up">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path, item.hash)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer',
                    isActive(item.path, item.hash)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-200">
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 rounded-lg"
              >
                <Shield className="w-4 h-4" />
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
