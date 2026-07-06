import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data';
import { 
  MessageSquare, 
  Compass, 
  Layers, 
  FileText, 
  Hammer, 
  CheckCircle2,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function InteractiveProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Map icon strings to Lucide components
  const iconMap: Record<string, any> = {
    MessageSquare,
    Compass,
    Layers,
    FileText,
    Hammer,
    CheckCircle2
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-gold-50/50 relative overflow-hidden">
      {/* Structural background lines overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(90deg, #12141C 1px, transparent 1px), linear-gradient(#12141C 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 block mb-3">
            Our Method
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal-900 tracking-wide">
            The Design Process
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-4"></div>
          <p className="text-xs md:text-sm text-gray-500 mt-6 tracking-wide leading-relaxed font-sans">
            Six disciplined stages of planning, coordination, and creative craftsmanship that transform raw ideas into timeless structures.
          </p>
        </div>

        {/* Stepper Timeline Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComp = iconMap[step.iconName] || Compass;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 md:p-6 text-center border rounded-sm transition-all duration-300 relative group cursor-pointer ${
                  isActive
                    ? 'bg-white border-gold-500 shadow-md ring-1 ring-gold-500/20'
                    : 'bg-white/40 border-gold-100 hover:border-gold-300 hover:bg-white/80'
                }`}
              >
                {/* Step Number in Background */}
                <div className={`absolute top-2 right-3 font-mono text-xs font-semibold select-none ${
                  isActive ? 'text-gold-500' : 'text-gray-300 group-hover:text-gold-400'
                }`}>
                  {step.number}
                </div>

                {/* Step Icon */}
                <div className={`mx-auto w-10 h-10 rounded-sm flex items-center justify-center mb-3 transition-colors ${
                  isActive ? 'bg-gold-500 text-charcoal-900' : 'bg-gold-100/40 text-gold-600 group-hover:bg-gold-100 group-hover:text-gold-700'
                }`}>
                  <IconComp className="w-5 h-5 stroke-[1.5]" />
                </div>

                <div className={`text-xs uppercase tracking-wider font-bold ${
                  isActive ? 'text-charcoal-900' : 'text-gray-500 group-hover:text-charcoal-800'
                }`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Panel */}
        <div className="bg-white p-8 md:p-12 rounded-sm border border-gold-100 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[250px] transition-all duration-500">
          
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-sm font-semibold px-2.5 py-0.5 bg-gold-100 text-gold-700 rounded-sm">
                Stage {PROCESS_STEPS[activeStep].number}
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-xs uppercase tracking-widest font-semibold text-gold-600">Architectural Workflow</span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3.5xl text-charcoal-900 font-semibold tracking-wide">
              {PROCESS_STEPS[activeStep].title}
            </h3>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans max-w-2xl">
              {PROCESS_STEPS[activeStep].description}
            </p>

            <div className="pt-4 flex items-center space-x-4">
              <span className="text-xs text-gray-400 font-sans">Click on any stepper block to preview other execution stages.</span>
            </div>
          </div>

          <div className="md:col-span-4 bg-gold-50/50 p-6 rounded-sm border border-gold-100/50 space-y-4 text-center">
            <div className="mx-auto w-12 h-12 bg-white rounded-full border border-gold-200 flex items-center justify-center text-gold-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-sm font-bold text-charcoal-900 uppercase tracking-widest">Execution Guarantee</h4>
            <p className="text-xs text-gray-500 font-sans">
              Every stage is managed under strict timeline checkpoints led directly by Ar. Nirmal Kaushik.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
