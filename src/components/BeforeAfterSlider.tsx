import React, { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="transformations" className="py-24 bg-[#F5F1E9] text-[#221E1A] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#745633] font-semibold mb-3">
            Spatial Transformation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1612] mb-4">
            The Power of Tailored Architecture
          </h2>
          <p className="text-sm text-[#5C5449] font-light leading-relaxed">
            Drag the divider to witness how our studio turns raw, uninspired floorplans 
            into cohesive, light-filled sanctuaries of calm.
          </p>
        </div>

        {/* Interactive Comparison Canvas */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative w-full max-w-5xl mx-auto h-[380px] sm:h-[540px] select-none overflow-hidden rounded-sm border border-[#DDD5C7] shadow-xl cursor-ew-resize bg-white"
        >
          {/* AFTER (Full Image Background) */}
          <img
            src="/src/assets/images/portfolio_master_suite_1792153019890.jpg"
            alt="ILHAN'S completed master bedroom suite interior"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-5 right-5 z-20 bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#DDD5C7] text-[#745633] text-[11px] uppercase tracking-wider px-3.5 py-1.5 font-semibold rounded-sm shadow-xs">
            Completed: ILHAN'S Architecture
          </div>

          {/* BEFORE (Clipped Image Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-[100vw] max-w-5xl h-full">
              {/* Grayscale/raw tone representation of the space prior to custom fluted millwork & lighting */}
              <img
                src="/src/assets/images/portfolio_master_suite_1792153019890.jpg"
                alt="Original raw shell before renovation"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 sepia-[0.3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#2b2720]/30 mix-blend-multiply" />
            </div>

            <div className="absolute top-5 left-5 z-20 bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#DDD5C7] text-[#5C5449] text-[11px] uppercase tracking-wider px-3.5 py-1.5 font-semibold rounded-sm shadow-xs">
              Before: Raw Layout
            </div>
          </div>

          {/* Vertical Dragger Bar */}
          <div
            className="absolute top-0 bottom-0 z-30 w-1 bg-[#745633] shadow-[0_0_8px_rgba(116,86,51,0.4)]"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#FAF7F2] border-2 border-[#745633] flex items-center justify-center text-[#745633] shadow-md">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Quick Position Snap Controls */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="text-xs text-[#6B6254] font-medium">Slide Presets:</span>
          <button
            onClick={() => setSliderPosition(25)}
            className={`px-3 py-1 text-xs border rounded-sm transition-colors cursor-pointer ${
              sliderPosition === 25 ? 'bg-[#745633] text-[#FAF7F2] border-[#745633]' : 'bg-white border-[#DDD5C7] text-[#5C5449] hover:text-[#1A1612]'
            }`}
          >
            25%
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className={`px-3 py-1 text-xs border rounded-sm transition-colors cursor-pointer ${
              sliderPosition === 50 ? 'bg-[#745633] text-[#FAF7F2] border-[#745633]' : 'bg-white border-[#DDD5C7] text-[#5C5449] hover:text-[#1A1612]'
            }`}
          >
            50% Split
          </button>
          <button
            onClick={() => setSliderPosition(75)}
            className={`px-3 py-1 text-xs border rounded-sm transition-colors cursor-pointer ${
              sliderPosition === 75 ? 'bg-[#745633] text-[#FAF7F2] border-[#745633]' : 'bg-white border-[#DDD5C7] text-[#5C5449] hover:text-[#1A1612]'
            }`}
          >
            75%
          </button>
        </div>

        {/* Client Testimonial Citation Quote */}
        <div className="max-w-2xl mx-auto mt-10 p-5 bg-white border border-[#E5DFD5] rounded-sm text-center shadow-xs">
          <p className="text-xs sm:text-sm italic text-[#423C33] font-serif leading-relaxed mb-2">
            “I wanted to make a few cosmetic changes to my apartment... The transformation was truly impressive — their innovative design techniques made a noticeable difference. Definitely the best interior designer in Lahore!”
          </p>
          <div className="text-xs text-[#745633] font-semibold">
            — A S T R O <span className="text-[#7A7163] font-normal">· Verified Google Review</span>
          </div>
        </div>

      </div>
    </section>
  );
};
