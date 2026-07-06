import React from 'react';
import { IMAGES } from '../data';
import { 
  Building, 
  Armchair, 
  Home, 
  Building2, 
  Leaf, 
  Map, 
  Box, 
  Construction 
} from 'lucide-react';

export default function ArchitectSection() {
  const expertiseItems = [
    { label: 'ARCHITECTURAL DESIGN', icon: Building },
    { label: 'INTERIOR DESIGN', icon: Armchair },
    { label: 'RESIDENTIAL & LUXURY HOMES', icon: Home },
    { label: 'COMMERCIAL & INSTITUTIONAL PROJECTS', icon: Building2 },
    { label: 'SUSTAINABLE ARCHITECTURE', icon: Leaf },
    { label: 'URBAN PLANNING', icon: Map },
    { label: '3D VISUALIZATION & BIM', icon: Box },
    { label: 'PROJECT MANAGEMENT & SITE SUPERVISION', icon: Construction },
  ];

  return (
    <section id="architect" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Elegant Typographic Design Creed Panel */}
          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="absolute inset-0 border border-gold-500/30 translate-x-4 translate-y-4 rounded-sm pointer-events-none -z-0"></div>
            <div className="relative z-10 bg-charcoal-900 text-white p-8 md:p-12 border border-gold-500/20 rounded-sm overflow-hidden flex flex-col justify-between min-h-[380px] shadow-xl">
              {/* Decorative architectural background lines */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                   style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              
              <div className="space-y-6 relative z-10">
                <span className="font-mono text-[10px] text-gold-500 uppercase tracking-widest block">// DESIGN CREED</span>
                <div className="w-8 h-[1px] bg-gold-500"></div>
                <p className="font-serif text-2xl md:text-3xl italic text-gold-100 font-medium leading-relaxed">
                  "Architecture is not merely about constructing buildings; it is about creating spaces that inspire people and enrich lives."
                </p>
              </div>

              <div className="border-t border-gold-500/10 pt-6 mt-6 relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-gold-500/50 block font-bold">OUR MOTTO</span>
                  <span className="font-serif text-sm text-gold-500 font-semibold mt-0.5 block">Designing Today. Inspiring Tomorrow.</span>
                </div>
                <div className="font-serif text-3xl font-extrabold text-gold-500/10 select-none">VCA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
                <span>MEET OUR PRINCIPAL ARCHITECT</span>
                <span className="flex-1 h-[1px] bg-gold-200"></span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 leading-tight">
                Ar. Nirmal Kaushik
              </h2>
              <div className="font-serif text-xl md:text-2xl text-gold-600 tracking-wide">
                M.Arch., B.Arch.
              </div>
              <div className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-charcoal-900/60 pt-1">
                FOUNDER & PRINCIPAL ARCHITECT
              </div>
            </div>

            <div className="w-16 h-[2.5px] bg-gold-500"></div>

            <div className="space-y-5 text-sm md:text-base text-gray-600 leading-relaxed font-sans">
              <p>
                Ar. Nirmal Kaushik founded <strong>Vishwakarma Creation Architects</strong> in <strong>2013</strong> with a vision to create architecture that is innovative, sustainable, and meaningful. With extensive professional experience and advanced academic qualifications, he specializes in architectural design, interior design, urban planning, and project management.
              </p>
              <p>
                His philosophy is simple—every project should reflect the client's aspirations while embracing functionality, aesthetics, and environmental responsibility. His meticulous attention to detail and commitment to excellence have enabled the firm to successfully deliver a diverse portfolio of residential, commercial, institutional, healthcare, hospitality, and mixed-use developments.
              </p>
            </div>

            {/* Professional Highlights instead of duplicate quote block */}
            <div className="bg-gold-50/50 border border-gold-100 p-6 rounded-sm space-y-4">
              <h4 className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gold-600 block">
                PROFESSIONAL FOCUS AREAS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-gray-700 font-sans">
                <div className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                  <span>Advanced Spatial Planning</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                  <span>Sustainable & Passive Solar Design</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                  <span>Technical BIM Coordination</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                  <span>Custom Luxury Residential Interiors</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Areas of Expertise (exactly like the mockup) */}
        <div className="pt-16 border-t border-gold-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <span className="w-8 h-[1px] bg-gold-500/30"></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gold-600">
                AREAS OF EXPERTISE
              </span>
              <span className="w-8 h-[1px] bg-gold-500/30"></span>
            </div>
            <div className="w-3 h-3 border border-gold-500/50 rounded-full mx-auto bg-white flex items-center justify-center">
              <div className="w-1 h-1 bg-gold-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
            {expertiseItems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center text-center p-4 group transition-all duration-300 hover:bg-gold-50/50 rounded-sm border border-transparent hover:border-gold-100"
                >
                  <div className="p-3.5 bg-white border border-gold-200/50 rounded-sm text-gold-600 mb-4 group-hover:bg-gold-500 group-hover:text-charcoal-900 group-hover:border-gold-500 shadow-sm transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.25]" />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold tracking-wider text-charcoal-900 max-w-[150px] leading-relaxed uppercase">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
