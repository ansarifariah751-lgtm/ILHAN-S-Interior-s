import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, MapPin, X, Layers, Sparkles } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectProjectForBooking: (project: Project) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectProjectForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'villas', label: 'Villas & Facades' },
    { id: 'living', label: 'Living Salons' },
    { id: 'bedroom', label: 'Master Suites' },
    { id: 'kitchen', label: 'Culinary Lounges' },
    { id: 'executive', label: 'Executive Studies' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#FAF7F2] text-[#221E1A] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#745633] font-semibold mb-3">
              Curated Residential Architecture
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1A1612]">
              Selected Works & Portfolios
            </h2>
          </div>
          <p className="text-sm text-[#5C5449] max-w-md font-light leading-relaxed">
            Each project is an architectural study in natural light, bespoke joinery, 
            and authentic raw materials tailored specifically for Lahore’s finest estates.
          </p>
        </div>

        {/* Category Segmented Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 border-b border-[#E5DFD5]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer rounded-sm ${
                  isActive
                    ? 'bg-[#745633] text-[#FAF7F2] shadow-xs'
                    : 'bg-white text-[#5C5449] border border-[#DDD5C7] hover:border-[#745633] hover:text-[#1A1612]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Minimalist Gallery Slider View */}
        {filteredProjects.length > 0 && currentProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-[#E5DFD5] p-5 sm:p-8 rounded-sm shadow-xs">
            
            {/* Visual Media Showcase with Lightbox Trigger */}
            <div className="lg:col-span-8 relative group overflow-hidden bg-[#EFEBE3] rounded-sm min-h-[380px] sm:min-h-[520px] flex items-center justify-center">
              <img
                src={currentProject.image}
                alt={`${currentProject.title} - ${currentProject.location}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Top Controls Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-xs uppercase tracking-wider text-[#1A1612] bg-[#FAF7F2]/90 backdrop-blur-sm px-3.5 py-1.5 font-medium border border-[#DDD5C7] shadow-xs">
                  {currentProject.categoryLabel}
                </span>

                <button
                  onClick={() => setLightboxProject(currentProject)}
                  className="p-2 text-[#1A1612] bg-[#FAF7F2]/90 hover:bg-[#745633] hover:text-[#FAF7F2] backdrop-blur-sm border border-[#DDD5C7] transition-all cursor-pointer rounded-sm shadow-xs"
                  title="Expand Fullscreen Lightbox"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Slider Prev / Next Overlay Buttons */}
              {filteredProjects.length > 1 && (
                <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 text-[#1A1612] bg-[#FAF7F2]/90 hover:bg-white border border-[#DDD5C7] transition-colors cursor-pointer rounded-sm shadow-xs"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs px-2.5 text-[#423C33] bg-[#FAF7F2]/90 py-2 border border-[#DDD5C7] font-medium">
                    0{currentIndex + 1} / 0{filteredProjects.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-2.5 text-[#1A1612] bg-[#FAF7F2]/90 hover:bg-white border border-[#DDD5C7] transition-colors cursor-pointer rounded-sm shadow-xs"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Project Details Panel */}
            <div className="lg:col-span-4 flex flex-col justify-between pt-2 lg:pt-0">
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-2 text-xs text-[#6B6254] mb-2 font-mono">
                  <span className="flex items-center gap-1 text-[#745633] font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    {currentProject.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{currentProject.area}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentProject.year}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1612] mb-3 leading-snug">
                  {currentProject.title}
                </h3>

                <p className="text-sm text-[#4F463B] font-light leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Materials Specs */}
                <div className="mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#745633] mb-2 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#745633]" />
                    <span>Curated Materials Palette</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-[#383229]">
                    {currentProject.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="bg-[#F5F1E9] border border-[#E0D7C9] px-2.5 py-1 text-[11px] font-medium rounded-sm"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architectural Features */}
                <div className="space-y-1.5 mb-8">
                  {currentProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#52493D]">
                      <span className="text-[#745633] mt-0.5">✦</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E5DFD5] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onSelectProjectForBooking(currentProject)}
                  className="flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#745633] hover:bg-[#5E4426] transition-all rounded-sm text-center cursor-pointer shadow-xs"
                >
                  Consult on this Design
                </button>
                <button
                  onClick={() => setLightboxProject(currentProject)}
                  className="py-3 px-4 text-xs font-medium tracking-wider text-[#221E1A] bg-[#F5F1E9] hover:bg-[#EDE7DC] border border-[#DDD5C7] transition-all rounded-sm text-center cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Minimalist Thumbnail Drawer */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4">
          {filteredProjects.map((p, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={p.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative group h-20 sm:h-24 overflow-hidden rounded-sm border transition-all cursor-pointer text-left shadow-xs ${
                  isSelected
                    ? 'border-[#745633] ring-2 ring-[#745633]'
                    : 'border-[#DDD5C7] opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-1.5 left-2 right-2 truncate text-[10px] uppercase font-semibold tracking-wider text-white">
                  {p.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#FAF7F2] border border-[#DDD5C7] rounded-sm overflow-hidden shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5DFD5] bg-[#F3EFE8]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#745633] font-semibold">
                  {lightboxProject.categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A1612] font-semibold">
                  {lightboxProject.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxProject(null)}
                className="p-2 text-[#5C5449] hover:text-[#1A1612] transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FAF7F2]">
              <div className="lg:col-span-8 overflow-hidden rounded-sm bg-[#EFEBE3] border border-[#DDD5C7]">
                <img
                  src={lightboxProject.image}
                  alt={lightboxProject.title}
                  className="w-full max-h-[65vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[#6B6254] font-mono mb-3">
                    {lightboxProject.location} · {lightboxProject.area} · {lightboxProject.year}
                  </div>
                  <p className="text-sm text-[#4F463B] font-light leading-relaxed mb-6">
                    {lightboxProject.description}
                  </p>

                  <h4 className="text-xs uppercase tracking-wider text-[#1A1612] font-semibold mb-2">
                    Materials & Specifications
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#52493D] mb-6">
                    {lightboxProject.materials.map((m, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#745633]" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs uppercase tracking-wider text-[#1A1612] font-semibold mb-2">
                    Architectural Invariants
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#52493D] mb-6">
                    {lightboxProject.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#745633] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E5DFD5]">
                  <button
                    onClick={() => {
                      const proj = lightboxProject;
                      setLightboxProject(null);
                      onSelectProjectForBooking(proj);
                    }}
                    className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#745633] hover:bg-[#5E4426] transition-colors rounded-sm cursor-pointer shadow-xs"
                  >
                    Request Consultation For This Aesthetic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
