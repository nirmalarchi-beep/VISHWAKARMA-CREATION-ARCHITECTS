import React from 'react';
import { Award, CheckCircle2, Eye, Target, ShieldCheck } from 'lucide-react';
import { CORE_VALUES, WHY_CHOOSE_US } from '../data';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gold-50 overflow-hidden relative">
      {/* Decorative architectural grid overlay in the background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#B5945B 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 block mb-3">
            Since 2013
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal-900 mb-6 leading-tight">
            Designing Spaces.<br />Creating Timeless Architecture.
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mb-8"></div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans">
            Founded in <strong>2013</strong>, <strong>Vishwakarma Creation Architects</strong> is a leading architectural and interior design consultancy committed to delivering innovative, sustainable, and aesthetically inspiring spaces. We specialize in transforming ideas into functional, elegant, and enduring architectural solutions that enhance the way people live, work, and interact with their environment.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-28">
          {/* Vision */}
          <div className="bg-white p-8 md:p-12 rounded-sm border border-gold-100 shadow-sm relative group hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-50/50 rounded-bl-full flex items-start justify-end p-4 text-gold-500/20 group-hover:text-gold-500/30 transition-colors pointer-events-none">
              <Eye className="w-10 h-10" />
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gold-100/50 rounded-sm text-gold-600">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal-900 font-semibold tracking-wide">
                Our Vision
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              To become one of India's most trusted architectural practices by delivering innovative, sustainable, and timeless design solutions that positively impact communities and improve the built environment.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 md:p-12 rounded-sm border border-gold-100 shadow-sm relative group hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-50/50 rounded-bl-full flex items-start justify-end p-4 text-gold-500/20 group-hover:text-gold-500/30 transition-colors pointer-events-none">
              <Target className="w-10 h-10" />
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gold-100/50 rounded-sm text-gold-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal-900 font-semibold tracking-wide">
                Our Mission
              </h3>
            </div>
            <ul className="space-y-3.5 text-sm text-gray-600 font-sans">
              {[
                'Create architecture that combines creativity with functionality.',
                'Deliver innovative and sustainable design solutions.',
                'Build lasting relationships through trust and transparency.',
                'Ensure excellence in every stage of design and execution.',
                'Exceed client expectations through quality, professionalism, and timely delivery.'
              ].map((bullet, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose Us & Key Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 md:mb-28">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 block">
              Our Value Proposition
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal-900 leading-tight">
              Why Choose Vishwakarma Creation Architects?
            </h3>
            <div className="w-12 h-[2px] bg-gold-500"></div>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              With over a decade of design history and custom site executions, our firm balances architectural brilliance, rigid technical blueprints, and highly personalized client satisfaction.
            </p>
            <div className="pt-4 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <span className="w-10 h-10 rounded-full border-2 border-white bg-gold-500 flex items-center justify-center text-[10px] font-bold text-charcoal-900 font-mono">10+</span>
                <span className="w-10 h-10 rounded-full border-2 border-white bg-charcoal-900 flex items-center justify-center text-[10px] font-bold text-gold-500 font-mono">YRS</span>
              </div>
              <div className="text-xs font-medium text-gray-500 tracking-wide font-sans">
                Active practice and site execution since 2013
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-sm border border-gold-100 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {WHY_CHOOSE_US.map((point, index) => (
                <div key={index} className="flex items-start space-x-3.5 group">
                  <div className="p-1 bg-gold-50 rounded-sm text-gold-600 group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-colors duration-300 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-700 font-sans group-hover:text-charcoal-900 transition-colors duration-200 leading-tight">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 block mb-2">
              Our Foundation
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-charcoal-900 tracking-wide">
              The Principles That Guide Us
            </h3>
            <div className="w-12 h-[1px] bg-gold-200 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-sm border border-gold-100 hover:border-gold-500/50 hover:shadow-md transition-all duration-300 text-center group"
              >
                <span className="font-mono text-xs font-semibold text-gold-500/40 group-hover:text-gold-500 transition-colors block mb-3">
                  // 0{idx + 1}
                </span>
                <h4 className="font-serif text-lg font-semibold text-charcoal-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
