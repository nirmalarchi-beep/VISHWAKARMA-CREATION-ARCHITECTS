import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, CheckCircle2, Copy, Sparkles, Send, MapPin, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  selectedCategory: string;
}

export default function ContactSection({ selectedCategory }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Architecture',
    budget: '50 Lakhs - 1 Crore',
    message: ''
  });

  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync category selection from external portfolio clicks
  useEffect(() => {
    if (selectedCategory) {
      setFormData(prev => ({ ...prev, category: selectedCategory }));
    }
  }, [selectedCategory]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vishwakarmacreationarchitects@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      return;
    }
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      category: 'Architecture',
      budget: '50 Lakhs - 1 Crore',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal-900 text-white relative overflow-hidden">
      {/* Structural visual grid elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 block mb-3">
            Let's Build Something Extraordinary
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-gold-100 tracking-wide">
            Begin Your Spatial Journey
          </h2>
          <div className="w-12 h-[2px] bg-gold-500 mt-4"></div>
          <p className="text-xs md:text-sm text-gold-100/50 mt-6 tracking-wide leading-relaxed font-sans max-w-xl">
            Every masterwork begins with an initial conversation. Fill out our custom consultancy request form, or contact Ar. Nirmal Kaushik directly via phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            
            {/* Quick Card */}
            <div className="p-8 bg-charcoal-950 border border-gold-500/15 rounded-sm space-y-6">
              <span className="font-serif text-lg font-bold text-gold-500 block border-b border-gold-500/10 pb-4">
                Vishwakarma Creation Architects
              </span>
              
              <div className="space-y-5">
                {/* Principal */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-sm mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gold-500/50 tracking-wider block">Principal Architect</span>
                    <span className="text-sm font-semibold font-serif text-gold-100">Ar. Nirmal Kaushik (M.Arch., B.Arch.)</span>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-sm mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gold-500/50 tracking-wider block">Direct Mobile</span>
                    <a href="tel:+918630249768" className="text-sm font-semibold font-mono text-gold-100 hover:text-gold-500 transition-colors">
                      +91 86302 49768
                    </a>
                  </div>
                </div>

                {/* Email with copy button */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-sm mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-gold-500/50 tracking-wider block">Official Email</span>
                    <div className="flex items-center justify-between gap-2 mt-1">
                      <a href="mailto:vishwakarmacreationarchitects@gmail.com" className="text-xs font-mono text-gold-100 hover:text-gold-500 transition-colors truncate block max-w-[200px] sm:max-w-none">
                        vishwakarmacreationarchitects@gmail.com
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 text-gold-500/70 hover:text-gold-500 hover:bg-gold-500/5 rounded-sm transition-all cursor-pointer flex-shrink-0"
                        title="Copy email to clipboard"
                      >
                        {isCopied ? <span className="text-[10px] font-bold text-green-500">Copied</span> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-sm mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gold-500/50 tracking-wider block">Consultation Hours</span>
                    <span className="text-xs text-gold-100/80">Monday – Saturday: 10:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote of the firm */}
            <div className="border-l-2 border-gold-500/30 pl-6 space-y-2">
              <p className="font-serif italic text-gold-100/70 text-sm">
                "Where creativity meets functionality, and every design becomes a timeless masterpiece."
              </p>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gold-500 block">
                Motto: Designing Today. Inspiring Tomorrow.
              </span>
            </div>

          </div>

          {/* Right Column: Dynamic Form Block */}
          <div className="lg:col-span-7">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 bg-charcoal-950 p-6 md:p-10 border border-gold-500/10 rounded-sm shadow-xl">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-500 block mb-1">
                  Online Space Consultation
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-gold-100 mb-6">
                  Project Inquiry Sheet
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gold-100/50">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sanjeev Goel"
                      className="w-full bg-charcoal-900 border border-gold-500/15 focus:border-gold-500 p-3 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold-500/20 text-gold-100 placeholder:text-gray-600 font-sans transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gold-100/50">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-charcoal-900 border border-gold-500/15 focus:border-gold-500 p-3 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold-500/20 text-gold-100 placeholder:text-gray-600 font-sans transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gold-100/50">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@domain.com"
                      className="w-full bg-charcoal-900 border border-gold-500/15 focus:border-gold-500 p-3 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold-500/20 text-gold-100 placeholder:text-gray-600 font-sans transition-all"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gold-100/50">Service Required</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-charcoal-900 border border-gold-500/15 focus:border-gold-500 p-3 rounded-sm text-sm focus:outline-none text-gold-100 font-sans transition-all cursor-pointer"
                    >
                      <option value="Architecture">Architecture Consultancy</option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Planning & Consultancy">Master Planning & Landscape</option>
                      <option value="Digital Design">3D Visualization & BIM</option>
                    </select>
                  </div>
                </div>

                {/* Budget Tier */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold-100/50">Estimated Budget Range (INR)</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-charcoal-900 border border-gold-500/15 focus:border-gold-500 p-3 rounded-sm text-sm focus:outline-none text-gold-100 font-sans transition-all cursor-pointer"
                  >
                    <option value="Under 25 Lakhs">Under 25 Lakhs</option>
                    <option value="25 Lakhs - 50 Lakhs">25 Lakhs - 50 Lakhs</option>
                    <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
                    <option value="1 Crore +">1 Crore +</option>
                  </select>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gold-100/50">Project Brief & Site Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your spatial vision, plot dimensions, and execution expectations..."
                    className="w-full bg-charcoal-900 border border-gold-500/15 focus:border-gold-500 p-3 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold-500/20 text-gold-100 placeholder:text-gray-600 font-sans transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 text-xs font-bold uppercase tracking-widest bg-gold-500 text-charcoal-900 rounded-sm hover:bg-gold-600 active:scale-95 transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-lg shadow-gold-500/5"
                >
                  <Send className="w-3.5 h-3.5 stroke-[2]" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            ) : (
              /* Success Blueprint Receipt Page */
              <div className="bg-charcoal-950 p-8 md:p-12 border-2 border-dashed border-gold-500/30 rounded-sm text-center relative overflow-hidden space-y-8 animate-fade-in">
                
                {/* Decorative blueprint grids */}
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none"
                     style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

                <div className="w-16 h-16 bg-gold-500 text-charcoal-900 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-gold-500/10">
                  <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-500">Inquiry Authenticated</span>
                  <h3 className="font-serif text-3xl text-gold-100">
                    Submission Confirmed
                  </h3>
                  <div className="w-10 h-[1.5px] bg-gold-500 mx-auto" />
                </div>

                <div className="p-6 bg-charcoal-900/60 border border-gold-500/10 rounded-sm max-w-xl mx-auto text-left space-y-4">
                  <div className="text-xs text-gold-100/40 uppercase font-bold tracking-widest border-b border-gold-500/10 pb-2">
                    Client Copy Receipt
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-gold-100/40 block">NAME:</span>
                      <span className="font-semibold text-gold-100 font-sans">{formData.name}</span>
                    </div>
                    <div>
                      <span className="text-gold-100/40 block">CONTACT TELEPHONE:</span>
                      <span className="font-mono font-semibold text-gold-100">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-gold-100/40 block">SERVICE CATEGORY:</span>
                      <span className="font-semibold text-gold-100 font-sans uppercase tracking-wide">{formData.category}</span>
                    </div>
                    <div>
                      <span className="text-gold-100/40 block">ESTIMATED INVESTMENT:</span>
                      <span className="font-semibold text-gold-100 font-sans text-gold-500">{formData.budget}</span>
                    </div>
                  </div>

                  {formData.message && (
                    <div className="pt-2 border-t border-gold-500/5">
                      <span className="text-gold-100/40 text-[10px] block uppercase tracking-wider">PROJECT BRIEF SUMMARY:</span>
                      <p className="text-xs italic text-gold-100/80 leading-relaxed mt-1 font-serif">
                        "{formData.message}"
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-sm text-gold-100/70 max-w-md mx-auto leading-relaxed font-sans">
                  Thank you, <strong>{formData.name}</strong>! Your architectural query sheet has been securely logged on Ar. Nirmal Kaushik's private dashboard. Our technical team is compiling initial feasibility data and will phone you back at <strong>{formData.phone}</strong> within 24 business hours.
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 border border-gold-500/20 hover:border-gold-500 text-gold-500 hover:text-white rounded-sm text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer inline-flex items-center space-x-2"
                  >
                    <span>Send Another Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
