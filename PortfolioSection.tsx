import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { X, MapPin, Calendar, Layout, User, ArrowUpRight, Plus } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProjectForContact: (category: string) => void;
}

export default function PortfolioSection({ onSelectProjectForContact }: PortfolioSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'Architecture', 'Interior Design', 'Planning & Consultancy', 'Digital Design'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  const handleProjectInquire = (project: Project) => {
    setSelectedProject(null);
    onSelectProjectForContact(project.category);
    
    // Smooth scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 block mb-3">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal-900 tracking-wide">
              Featured Creations
            </h2>
            <div className="w-12 h-[2px] bg-gold-500 mt-4"></div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 max-w-sm tracking-wide leading-relaxed font-sans">
            A selective showcase of luxury residences, high-performing corporate landmarks, and customized retail interiors executed with precision since 2013.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12 pb-4 border-b border-gold-100">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-gold-500 text-charcoal-900 font-bold shadow-sm'
                  : 'bg-gold-50/50 hover:bg-gold-100/70 text-gray-600 hover:text-charcoal-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-gold-50/30 rounded-sm overflow-hidden border border-gold-100/50 hover:border-gold-500/30 hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Thumbnail with Overlay */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/95 text-charcoal-900 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <Plus className="w-5 h-5 text-gold-600" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-charcoal-900/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-gold-500 border border-gold-500/20 rounded-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  <span>{project.location}</span>
                </div>
                <h3 className="font-serif text-xl text-charcoal-900 group-hover:text-gold-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 font-sans line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-3 border-t border-gold-100/30 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-gold-600 uppercase tracking-widest">
                    {project.subCategory}
                  </span>
                  <span className="flex items-center space-x-1 text-xs font-semibold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                    <span>View Detail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-gold-200 rounded-sm">
            <p className="text-sm text-gray-500 font-sans">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Detailed Modal Window */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-900/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-sm w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gold-200/50 shadow-2xl animate-fade-in relative">
            
            {/* Sticky Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-charcoal-900/90 text-white hover:text-gold-500 hover:bg-black rounded-full shadow-md transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Wide Banner */}
            <div className="relative h-[250px] md:h-[400px]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:left-12 right-6">
                <span className="px-3.5 py-1 bg-gold-500 text-charcoal-900 text-xs font-bold uppercase tracking-wider rounded-sm mb-3.5 inline-block">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-white font-semibold">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Content Details */}
            <div className="p-6 md:p-12 space-y-8">
              
              {/* Metadata Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gold-50 rounded-sm border border-gold-100">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gold-600 uppercase tracking-wider block">Location</span>
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-charcoal-900">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gold-600 uppercase tracking-wider block">Project Year</span>
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-charcoal-900">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    <span>{selectedProject.year}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gold-600 uppercase tracking-wider block">Super Area</span>
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-charcoal-900">
                    <Layout className="w-3.5 h-3.5 text-gold-500" />
                    <span className="font-mono">{selectedProject.area}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gold-600 uppercase tracking-wider block">Client</span>
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-charcoal-900">
                    <User className="w-3.5 h-3.5 text-gold-500" />
                    <span>{selectedProject.client}</span>
                  </div>
                </div>
              </div>

              {/* Split Description & Tech Specs */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Description */}
                <div className="md:col-span-7 space-y-4">
                  <h4 className="font-serif text-lg font-semibold text-charcoal-900 uppercase tracking-[0.1em]">
                    Architectural Summary
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technical Systems */}
                <div className="md:col-span-5 space-y-4">
                  <h4 className="font-serif text-lg font-semibold text-charcoal-900 uppercase tracking-[0.1em]">
                    Technical Specifications
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-700 font-sans">
                    {selectedProject.specs.map((spec, index) => (
                      <li key={index} className="flex items-start space-x-2.5">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action and Disclaimer */}
              <div className="pt-8 border-t border-gold-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-400 font-sans">
                  * Note: Real design specifications vary based on local municipal codes.
                </span>
                <button
                  onClick={() => handleProjectInquire(selectedProject)}
                  className="px-6 py-3 bg-charcoal-900 hover:bg-gold-500 active:scale-95 text-white hover:text-charcoal-900 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-md cursor-pointer"
                >
                  Inquire About This Design
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
