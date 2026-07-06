/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Calendar, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Compass, 
  ArrowUp 
} from 'lucide-react';

import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ArchitectSection from './components/ArchitectSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import InteractiveProcessSection from './components/InteractiveProcessSection';
import SocialProofsSection from './components/SocialProofsSection';
import ContactSection from './components/ContactSection';
import { IMAGES } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategoryForForm, setSelectedCategoryForForm] = useState('');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Monitor scroll for Scroll-to-Top and Active Section highlight
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);

      const sections = ['home', 'about', 'architect', 'services', 'portfolio', 'process', 'testimonials', 'blog', 'contact'];
      let currentSection = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the middle of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectInquireSelect = (category: string) => {
    setSelectedCategoryForForm(category);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen text-charcoal-900 selection:bg-charcoal-900 selection:text-white font-sans antialiased">
      
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Sidebar (Desktop Only) */}
        <aside className="hidden lg:flex flex-col justify-between w-[280px] h-screen sticky top-0 border-r border-charcoal-100 p-8 bg-white z-30 flex-shrink-0">
          <div>
            <button
              onClick={() => handleNavClick('home')}
              className="group text-left mb-16 block focus:outline-none cursor-pointer"
            >
              <div className="flex items-baseline space-x-1">
                <h1 className="font-serif text-3xl font-extrabold tracking-widest text-charcoal-900 group-hover:text-gold-500 transition-colors">VCA</h1>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              </div>
              <span className="font-mono text-[9px] tracking-[0.22em] font-bold uppercase text-charcoal-300 block mt-1.5">
                Vishwakarma Creation Architects
              </span>
            </button>

            <nav className="flex flex-col space-y-5">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Principal Architect', id: 'architect' },
                { label: 'Our Services', id: 'services' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Our Process', id: 'process' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Insights Blog', id: 'blog' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-[10px] tracking-[0.25em] uppercase font-mono transition-all duration-300 relative py-1 focus:outline-none cursor-pointer hover:text-gold-500 ${
                    activeSection === item.id ? 'text-charcoal-900 font-bold' : 'text-charcoal-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold-500" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="border-t border-charcoal-100 pt-6">
            <span className="font-mono text-[9px] text-charcoal-300 tracking-[0.2em] block uppercase leading-relaxed">
              © 2026 VCA <br />
              <span className="text-gold-500/70 font-semibold">EST. 2013</span>
            </span>
          </div>
        </aside>

        {/* Mobile Navigation Header */}
        <div className="lg:hidden sticky top-0 left-0 right-0 z-40 bg-white border-b border-charcoal-100 py-3.5 px-6 flex items-center justify-between">
          <button onClick={() => handleNavClick('home')} className="text-left cursor-pointer">
            <div className="flex items-baseline space-x-1">
              <h1 className="font-serif text-xl font-bold tracking-widest text-charcoal-900">VCA</h1>
              <span className="w-1 h-1 rounded-full bg-gold-500"></span>
            </div>
            <span className="font-mono text-[7.5px] tracking-[0.18em] font-medium uppercase text-charcoal-300 block">
              Vishwakarma Creation Architects
            </span>
          </button>
          <Header onNavClick={handleNavClick} activeSection={activeSection} isMobileOnly={true} />
        </div>

        {/* Main Scrollable Content Area */}
        <main className="flex-1 min-w-0 bg-white">
          
          {/* Hero Section */}
          <section id="home" className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-white text-charcoal-900 border-b border-charcoal-100 px-6 md:px-16 py-16 lg:py-24">
            
            {/* Background elements */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0 opacity-[0.04] lg:opacity-[0.08] select-none pointer-events-none">
              <img
                src={IMAGES.defaultHero}
                alt="Architectural lines blueprint representation"
                className="w-full h-full object-cover scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="max-w-4xl w-full relative z-10 space-y-8 lg:space-y-12">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center space-x-2 text-charcoal-300"
                >
                  <span className="font-mono text-[9px] md:text-xs font-bold uppercase tracking-[0.3em]">
                    // ESTABLISHED 2013 // ARCHITECTURAL OFFICE
                  </span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-charcoal-900 font-normal leading-[1.05]"
                >
                  Designing <br />
                  Today. <br />
                  <span className="italic text-charcoal-300 font-light">Inspiring Tomorrow.</span>
                </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xs md:text-sm text-charcoal-300 font-mono tracking-[0.15em] max-w-xl uppercase leading-relaxed"
              >
                VISHWAKARMA CREATION ARCHITECTS // REVOLUTIONIZING SPATIAL DESIGN WITH PURE MODERNIST PRINCIPLES, UNCOMPROMISING DETAIL, AND STRUCTURAL INTEGRITY.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
              >
                <button
                  onClick={() => handleNavClick('portfolio')}
                  className="px-8 py-4 bg-charcoal-900 hover:bg-gold-500 text-white hover:text-charcoal-900 font-mono text-[10px] uppercase tracking-widest font-bold transition-all duration-300 border border-charcoal-900 hover:border-gold-500 cursor-pointer text-center"
                >
                  Explore Portfolio
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="px-8 py-4 border border-charcoal-200 hover:border-charcoal-900 text-charcoal-900 font-mono text-[10px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer text-center bg-transparent"
                >
                  Consult Our Office
                </button>
              </motion.div>

              {/* Minimal specs grid */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="grid grid-cols-3 gap-6 pt-12 border-t border-charcoal-100 max-w-xl"
              >
                <div>
                  <span className="font-mono text-xl md:text-2xl font-bold text-charcoal-900 block">2013</span>
                  <span className="font-mono text-[9px] text-charcoal-300 uppercase tracking-widest block mt-1">FOUNDED IN</span>
                </div>
                <div>
                  <span className="font-mono text-xl md:text-2xl font-bold text-charcoal-900 block">150+</span>
                  <span className="font-mono text-[9px] text-charcoal-300 uppercase tracking-widest block mt-1">SITES COMPLETED</span>
                </div>
                <div>
                  <span className="font-mono text-xl md:text-2xl font-bold text-charcoal-900 block">100%</span>
                  <span className="font-mono text-[9px] text-charcoal-300 uppercase tracking-widest block mt-1">CLIENT DELIVERY</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Assembly of Modular Sections */}
          <AboutSection />
          <ArchitectSection />
          <ServicesSection />
          <PortfolioSection onSelectProjectForContact={handleProjectInquireSelect} />
          <InteractiveProcessSection />
          <SocialProofsSection />
          <ContactSection selectedCategory={selectedCategoryForForm} />

          {/* Footer Section */}
          <footer className="bg-charcoal-900 text-white border-t border-charcoal-800 py-16 px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              
              {/* Logo Brand info */}
              <div className="md:col-span-4 space-y-5">
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-baseline space-x-1">
                    <span className="font-serif text-2xl font-extrabold tracking-widest text-gold-500">
                      VCA
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                  </div>
                  <span className="font-sans text-[9px] tracking-[0.25em] font-medium uppercase text-gold-100/70 mt-1">
                    Vishwakarma Creation Architects
                  </span>
                </div>
                <p className="text-xs text-gold-100/40 leading-relaxed font-sans max-w-sm">
                  Leading architectural, interior design, and project planning consultancy led by Ar. Nirmal Kaushik. Transforming spatial ideas into high-end structural realities since 2013.
                </p>
                <div className="text-[10px] font-mono uppercase tracking-widest font-bold text-gold-500">
                  Motto: "Designing Today. Inspiring Tomorrow."
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-4 space-y-4">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold">
                  Corporate Sections
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {[
                    { label: 'Home', id: 'home' },
                    { label: 'About Us', id: 'about' },
                    { label: 'Principal Architect', id: 'architect' },
                    { label: 'Our Services', id: 'services' },
                    { label: 'Portfolio', id: 'portfolio' },
                    { label: 'Our Process', id: 'process' },
                    { label: 'Testimonials', id: 'testimonials' },
                    { label: 'Insights Blog', id: 'blog' },
                  ].map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className="text-xs text-gold-100/50 hover:text-gold-500 text-left transition-colors font-sans py-0.5 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact coordinates info */}
              <div className="md:col-span-4 space-y-4">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold">
                  Corporate Headquarters
                </h4>
                <ul className="space-y-3.5 text-xs text-gold-100/50 font-sans">
                  <li className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>Hapur, Uttar Pradesh, India</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <a href="tel:+918630249768" className="hover:text-gold-500 transition-colors font-mono">
                      +91 86302 49768
                    </a>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                    <a href="mailto:vishwakarmacreationarchitects@gmail.com" className="hover:text-gold-500 transition-colors font-mono break-all">
                      vishwakarmacreationarchitects@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            {/* Core copyright */}
            <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between text-[10px] text-gold-100/30 uppercase tracking-widest gap-4">
              <div>
                © {new Date().getFullYear()} Vishwakarma Creation Architects. All Rights Reserved.
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-serif italic text-gold-500/40 font-semibold">Established in 2013</span>
              </div>
            </div>
          </footer>

        </main>

      </div>

      {/* Floating Scroll To Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-charcoal-900 hover:bg-gold-500 text-white hover:text-charcoal-900 rounded-sm shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border border-charcoal-800"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}
