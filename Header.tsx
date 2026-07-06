import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
  isMobileOnly?: boolean;
}

export default function Header({ onNavClick, activeSection, isMobileOnly = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Principal Architect', id: 'architect' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Design Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  if (isMobileOnly) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-charcoal-900 hover:text-gold-500 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {isMobileMenuOpen && (
          <div className="fixed top-[57px] left-0 right-0 bottom-0 bg-white border-t border-charcoal-100 z-50 overflow-y-auto animate-fade-in px-6 py-8 space-y-6 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-left text-xs font-mono uppercase tracking-[0.2em] py-2 transition-colors hover:text-gold-500 ${
                  activeSection === item.id ? 'text-charcoal-900 font-bold' : 'text-charcoal-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] bg-charcoal-100" />
            <div className="space-y-4 pt-2">
              <a
                href="tel:+918630249768"
                className="flex items-center space-x-3 text-xs text-charcoal-300 hover:text-gold-500 transition-colors font-mono tracking-wider"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                <span>+91 86302 49768</span>
              </a>
              <a
                href="mailto:vishwakarmacreationarchitects@gmail.com"
                className="flex items-center space-x-3 text-xs text-charcoal-300 hover:text-gold-500 transition-colors font-mono tracking-wider break-all"
              >
                <Mail className="w-4 h-4 text-gold-500" />
                <span>vishwakarmacreationarchitects@gmail.com</span>
              </a>
              <button
                onClick={() => handleItemClick('contact')}
                className="w-full py-3.5 text-center text-[10px] font-mono uppercase tracking-widest font-bold bg-charcoal-900 text-white transition-colors hover:bg-gold-500 hover:text-charcoal-900"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-charcoal-100 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Elegant Logo */}
        <button
          onClick={() => handleItemClick('home')}
          className="flex flex-col items-start justify-center group text-left cursor-pointer"
        >
          <div className="flex items-baseline space-x-1.5">
            <span className="font-serif text-2xl font-bold tracking-widest text-charcoal-900 group-hover:text-gold-500 transition-colors">
              VCA
            </span>
            <span className="w-1 h-1 rounded-full bg-gold-500"></span>
          </div>
          <span className="font-sans text-[9px] tracking-[0.3em] font-medium uppercase text-charcoal-300 group-hover:text-gold-500 transition-colors">
            Vishwakarma Creation Architects
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`text-[10px] uppercase tracking-widest font-mono transition-all duration-300 relative py-1 cursor-pointer hover:text-gold-500 ${
                activeSection === item.id ? 'text-charcoal-900 font-bold' : 'text-charcoal-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-500" />
              )}
            </button>
          ))}
        </nav>

        {/* Quick Contact & Action */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="tel:+918630249768"
            className="flex items-center space-x-2 text-xs tracking-wider text-charcoal-300 hover:text-gold-500 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-mono">+91 86302 49768</span>
          </a>
          <button
            onClick={() => handleItemClick('contact')}
            className="px-5 py-2 text-[10px] uppercase tracking-widest font-bold bg-charcoal-900 hover:bg-gold-500 text-white hover:text-charcoal-900 rounded-sm transition-all cursor-pointer"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-charcoal-900 hover:text-gold-500 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-charcoal-100 shadow-xl overflow-hidden animate-fade-in">
          <div className="px-6 py-8 space-y-6 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-left text-xs uppercase font-mono tracking-widest py-1 transition-colors hover:text-gold-500 ${
                  activeSection === item.id ? 'text-charcoal-900 font-bold' : 'text-charcoal-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] bg-charcoal-100" />
            <div className="space-y-4">
              <a
                href="tel:+918630249768"
                className="flex items-center space-x-3 text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                <span className="font-mono">+91 86302 49768</span>
              </a>
              <a
                href="mailto:vishwakarmacreationarchitects@gmail.com"
                className="flex items-center space-x-3 text-sm text-charcoal-300 hover:text-gold-500 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-500" />
                <span className="font-mono">vishwakarmacreationarchitects@gmail.com</span>
              </a>
              <button
                onClick={() => handleItemClick('contact')}
                className="w-full py-3 text-center text-xs uppercase font-mono tracking-widest font-bold bg-charcoal-900 text-white rounded-sm transition-colors hover:bg-gold-500 hover:text-charcoal-900 block"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
