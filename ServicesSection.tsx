import React, { useState } from 'react';
import { SERVICES } from '../data';
import { 
  Building, 
  Armchair, 
  MapPin, 
  Layers, 
  ChevronRight, 
  ArrowUpRight 
} from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'interior' | 'planning' | 'digital'>('architecture');

  const tabMeta = {
    architecture: { icon: Building, label: 'Architecture', color: 'bg-gold-500' },
    interior: { icon: Armchair, label: 'Interior Design', color: 'bg-gold-500' },
    planning: { icon: MapPin, label: 'Planning & Consultancy', color: 'bg-gold-500' },
    digital: { icon: Layers, label: 'Digital Design', color: 'bg-gold-500' },
  };

  const activeService = SERVICES[activeTab];

  return (
    <section id="services" className="py-24 md:py-32 bg-gold-950 text-white relative overflow-hidden">
      {/* Abstract geometric background lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="10%" x2="100%" y2="90%" stroke="white" strokeWidth="1" />
          <line x1="100%" y1="10%" x2="0" y2="90%" stroke="white" strokeWidth="1" />
          <circle cx="50%" cy="50%" r="30%" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 block mb-3">
            What We Do
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Our Architectural Services
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto"></div>
          <p className="text-xs md:text-sm text-gold-100/60 mt-6 tracking-wide font-sans">
            A comprehensive, end-to-end design consultancy transforming visions into coordinated, flawless spatial realities.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-4 space-y-4">
            {(Object.keys(SERVICES) as Array<keyof typeof SERVICES>).map((key) => {
              const TabIcon = tabMeta[key].icon;
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-6 flex items-center justify-between border rounded-sm transition-all duration-300 group cursor-pointer ${
                    isSelected
                      ? 'bg-gold-500 border-gold-500 text-charcoal-900 shadow-lg shadow-gold-500/10'
                      : 'bg-transparent border-gold-500/20 text-white hover:border-gold-500/50 hover:bg-gold-500/5'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-sm transition-colors ${
                      isSelected ? 'bg-charcoal-900/10 text-charcoal-900' : 'bg-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:text-charcoal-900'
                    }`}>
                      <TabIcon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="text-xs md:text-sm font-semibold tracking-widest uppercase">
                      {tabMeta[key].label}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                    isSelected ? 'translate-x-1 text-charcoal-900' : 'text-gold-500 group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab Content */}
          <div className="lg:col-span-8 bg-charcoal-900/40 border border-gold-500/10 p-8 md:p-12 rounded-sm backdrop-blur-sm min-h-[450px] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-gold-500 uppercase tracking-widest">// Category Detail</span>
                <h3 className="font-serif text-2xl md:text-3xl text-gold-100 font-medium">
                  {activeService.title}
                </h3>
              </div>

              <p className="text-sm md:text-base text-gold-100/70 leading-relaxed font-sans max-w-3xl">
                {activeService.description}
              </p>

              <div className="h-[1px] bg-gold-500/10 my-8" />

              <div>
                <h4 className="font-serif text-sm font-semibold text-gold-500 uppercase tracking-[0.2em] mb-4">
                  Scope of Expertise:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {activeService.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gold-100/80 group-hover:text-gold-500 transition-colors duration-200 font-sans">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Consultation CTA inside card */}
            <div className="mt-12 pt-6 border-t border-gold-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-gold-100/50 font-sans">
                Have an active site or planning a new structure? Let's discuss details.
              </p>
              <a
                href="#contact"
                className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-gold-500 hover:text-white transition-colors group cursor-pointer"
              >
                <span>Discuss {activeService.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
