import React, { useState } from 'react';
import { MATERIAL_PALETTES } from '../data/portfolioData';

export const MaterialPaletteExplorer: React.FC = () => {
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>(MATERIAL_PALETTES[0].id);

  const activePalette = MATERIAL_PALETTES.find(p => p.id === selectedPaletteId) || MATERIAL_PALETTES[0];

  return (
    <section className="py-20 bg-[#F5F1E9] text-[#221E1A] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#745633] font-semibold mb-3">
              Sensory Architecture
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1612]">
              Tactile Materials & Finishes
            </h2>
          </div>
          <p className="text-sm text-[#5C5449] max-w-md font-light leading-relaxed">
            We exclusively curate certified architectural stones, fluted hardwoods, 
            and breathable plaster finishes engineered for the Lahore climate.
          </p>
        </div>

        {/* Palette Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
          {MATERIAL_PALETTES.map((palette) => {
            const isSelected = palette.id === selectedPaletteId;
            return (
              <button
                key={palette.id}
                onClick={() => setSelectedPaletteId(palette.id)}
                className={`px-4 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-sm border transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-xs ${
                  isSelected
                    ? 'bg-[#745633] border-[#745633] text-[#FAF7F2]'
                    : 'bg-white border-[#DDD5C7] text-[#5C5449] hover:border-[#745633] hover:text-[#1A1612]'
                }`}
              >
                {palette.name}
              </button>
            );
          })}
        </div>

        {/* Active Palette Display */}
        <div className="bg-white border border-[#E5DFD5] p-6 sm:p-8 rounded-sm shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E5DFD5] mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#745633] font-semibold">
                {activePalette.vibe}
              </span>
              <h3 className="font-serif text-2xl text-[#1A1612] font-semibold mt-1">
                {activePalette.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5C5449] max-w-lg font-light">
              {activePalette.description}
            </p>
          </div>

          {/* Swatches Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {activePalette.swatches.map((swatch, idx) => (
              <div
                key={idx}
                className="group p-4 bg-[#FAF7F2] border border-[#E0D7C9] rounded-sm transition-all hover:border-[#745633]"
              >
                {/* Visual Swatch Block */}
                <div
                  className="w-full h-24 sm:h-28 rounded-sm mb-3 border border-[#D5CCBC] shadow-inner"
                  style={{ backgroundColor: swatch.color }}
                />
                <div className="text-xs font-semibold text-[#1A1612] group-hover:text-[#745633] transition-colors">
                  {swatch.name}
                </div>
                <div className="text-[11px] text-[#7A7163] mt-0.5 font-light">
                  {swatch.texture}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
