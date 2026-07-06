import React, { useState } from 'react';
import { TESTIMONIALS, BLOG_POSTS } from '../data';
import { Star, Quote, Calendar, Clock, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SocialProofsSection() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[activeTestimonialIdx];

  return (
    <div className="bg-white">
      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32 bg-gold-50/20 border-t border-b border-gold-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-gold-100/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-gold-100/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 block mb-3">
              Endorsements
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal-900 tracking-wide">
              Client Testimonials
            </h2>
            <div className="w-12 h-[2px] bg-gold-500 mx-auto mt-4"></div>
          </div>

          {/* Carousel Layout */}
          <div className="bg-white p-8 md:p-16 rounded-sm border border-gold-100 shadow-md relative">
            {/* Quote icon watermark */}
            <div className="absolute top-6 left-6 text-gold-100 pointer-events-none">
              <Quote className="w-12 h-12 transform rotate-180 opacity-40" />
            </div>

            <div className="space-y-6 text-center">
              {/* Star Rating */}
              <div className="flex items-center justify-center space-x-1 text-gold-500">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-serif text-lg md:text-xl text-charcoal-900 leading-relaxed max-w-3xl mx-auto font-medium">
                "{activeTestimonial.quote}"
              </p>

              {/* Divider */}
              <div className="w-10 h-[1px] bg-gold-200 mx-auto my-6"></div>

              {/* Client Info */}
              <div>
                <h4 className="font-serif text-base font-bold text-charcoal-900">
                  {activeTestimonial.name}
                </h4>
                <p className="text-xs text-gray-400 font-sans tracking-wide mt-1">
                  {activeTestimonial.role}
                </p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gold-600 mt-0.5">
                  {activeTestimonial.location}, India
                </p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="absolute left-4 right-4 md:left-8 md:right-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button
                onClick={handlePrevTestimonial}
                className="p-2 bg-gold-50 border border-gold-100 hover:bg-gold-500 text-charcoal-900 hover:text-white rounded-full shadow-sm transition-all pointer-events-auto cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="p-2 bg-gold-50 border border-gold-100 hover:bg-gold-500 text-charcoal-900 hover:text-white rounded-full shadow-sm transition-all pointer-events-auto cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bullet Indicators */}
          <div className="flex justify-center space-x-2.5 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonialIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeTestimonialIdx === idx ? 'bg-gold-500 w-6' : 'bg-gold-200 hover:bg-gold-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 block mb-3">
                Insights
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-charcoal-900 tracking-wide">
                Architectural Journal
              </h2>
              <div className="w-12 h-[2px] bg-gold-500 mt-4"></div>
            </div>
            <p className="text-xs md:text-sm text-gray-500 max-w-sm tracking-wide leading-relaxed font-sans">
              Articles and studies by Ar. Nirmal Kaushik on structural engineering, modern Vastu alignments, and building passive thermal comfort under Indian climates.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-gold-50/20 rounded-sm overflow-hidden border border-gold-100/60 hover:border-gold-500/30 hover:shadow-lg transition-all duration-500 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-charcoal-900/80 backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider text-gold-500 border border-gold-500/20 rounded-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-[10px] text-gray-400 font-mono">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-500" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-gold-500" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl text-charcoal-900 group-hover:text-gold-600 transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed font-sans">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer read link */}
                <div className="px-6 pb-6 pt-4 border-t border-gold-100/30 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-400">Written by Ar. Nirmal Kaushik</span>
                  <span className="flex items-center space-x-1 text-xs font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
