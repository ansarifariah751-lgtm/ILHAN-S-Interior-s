import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Clock } from 'lucide-react';

interface CostEstimatorProps {
  onApplyEstimateToBooking: (estimateSummary: {
    propertySize: string;
    propertyType: string;
    tier: string;
    estimatedWeeks: string;
    services: string[];
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onApplyEstimateToBooking }) => {
  const [propertyType, setPropertyType] = useState<string>('villa');
  const [propertySize, setPropertySize] = useState<string>('1-kanal');
  const [aestheticTier, setAestheticTier] = useState<string>('contemporary');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'arch-drawings',
    'turnkey-interior',
    'custom-joinery'
  ]);

  const sizes = [
    { id: '5-marla', label: '5 Marla', sub: '1,125 sq. ft.' },
    { id: '10-marla', label: '10 Marla', sub: '2,250 sq. ft.' },
    { id: '1-kanal', label: '1 Kanal', sub: '4,500 sq. ft. (Most Popular)' },
    { id: '2-kanal', label: '2 Kanal', sub: '9,000 sq. ft. Estate' },
    { id: 'apartment', label: 'Luxury Penthouse', sub: '2,500 - 4,000 sq. ft.' },
  ];

  const services = [
    { id: 'arch-drawings', name: '3D Architectural Blueprints & Renders', timeAdd: 2 },
    { id: 'turnkey-interior', name: 'Turnkey Interior Execution & Finishes', timeAdd: 4 },
    { id: 'custom-joinery', name: 'Bespoke Travertine & Walnut Joinery', timeAdd: 2 },
    { id: 'kitchen-architecture', name: 'Imported Waterfall Kitchen Lounge', timeAdd: 2 },
    { id: 'smart-lighting', name: 'Circadian Cove Lighting & Smart Home', timeAdd: 1 },
    { id: 'courtyard-landscaping', name: 'Courtyard Water Feature & Greenery', timeAdd: 1 },
  ];

  const aesthetics = [
    {
      id: 'contemporary',
      name: 'Travertine Minimalist',
      desc: 'Seamless micro-terrazzo, honed Roman travertine, muted warm taupe walls.',
    },
    {
      id: 'neo-classical',
      name: 'Modern Neo-Classical',
      desc: 'Refined architectural paneling, brass shadowlines, Statuario marble accents.',
    },
    {
      id: 'japandi',
      name: 'Organic Japandi',
      desc: 'Hand-troweled lime plaster, natural white oak louvers, Belgian linens.',
    },
  ];

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  // Calculate timeline
  const baseWeeks = propertySize === '2-kanal' ? 14 : propertySize === '1-kanal' ? 10 : 7;
  const totalWeeks = baseWeeks + selectedServices.length * 1;

  const currentSizeObj = sizes.find(s => s.id === propertySize) || sizes[2];
  const currentTierObj = aesthetics.find(a => a.id === aestheticTier) || aesthetics[0];

  const handleApply = () => {
    onApplyEstimateToBooking({
      propertySize: currentSizeObj.label,
      propertyType: propertyType === 'villa' ? 'Residential Villa' : 'Penthouse / Commercial',
      tier: currentTierObj.name,
      estimatedWeeks: `${totalWeeks - 2} to ${totalWeeks + 2} Weeks`,
      services: selectedServices.map(sid => services.find(s => s.id === sid)?.name || sid)
    });
  };

  return (
    <section id="estimator" className="py-24 bg-[#FAF7F2] text-[#221E1A] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#745633] font-semibold mb-3">
              Transparent Planning
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1612]">
              Project Scope & Timeline Estimator
            </h2>
          </div>
          <p className="text-sm text-[#5C5449] max-w-md font-light leading-relaxed">
            Configure your property specifications in Lahore to preview estimated architectural 
            timelines and bespoke inclusions.
          </p>
        </div>

        {/* Interactive Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-[#E5DFD5] p-6 sm:p-8 rounded-sm shadow-xs">
            
            {/* Step 1: Property Size in Lahore Marla/Kanal */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#1A1612] font-semibold mb-3">
                1. Select Property Footprint
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {sizes.map((s) => {
                  const selected = propertySize === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setPropertySize(s.id)}
                      className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                        selected
                          ? 'border-[#745633] bg-[#F7F4EE] text-[#1A1612] ring-1 ring-[#745633]'
                          : 'border-[#E0D7C9] bg-white text-[#5C5449] hover:border-[#745633]'
                      }`}
                    >
                      <div className="text-sm font-semibold text-[#1A1612]">{s.label}</div>
                      <div className="text-[11px] text-[#7A7163] mt-0.5">{s.sub}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Desired Design Language */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#1A1612] font-semibold mb-3">
                2. Architectural & Interior Aesthetic
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {aesthetics.map((a) => {
                  const selected = aestheticTier === a.id;
                  return (
                    <button
                      key={a.id}
                      onClick={() => setAestheticTier(a.id)}
                      className={`p-3.5 text-left border rounded-sm transition-all cursor-pointer ${
                        selected
                          ? 'border-[#745633] bg-[#F7F4EE] ring-1 ring-[#745633]'
                          : 'border-[#E0D7C9] bg-white hover:border-[#745633]'
                      }`}
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#745633] mb-1">
                        {a.name}
                      </div>
                      <div className="text-xs text-[#52493D] leading-snug font-light">
                        {a.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Scope & Inclusions */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#1A1612] font-semibold mb-3">
                3. Design Scope & Architectural Deliverables
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((svc) => {
                  const checked = selectedServices.includes(svc.id);
                  return (
                    <button
                      key={svc.id}
                      onClick={() => toggleService(svc.id)}
                      className={`flex items-center gap-3 p-3 text-left border rounded-sm transition-all cursor-pointer ${
                        checked
                          ? 'border-[#745633] bg-[#F7F4EE] text-[#1A1612]'
                          : 'border-[#E0D7C9] bg-white text-[#6B6254] hover:border-[#745633]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-sm flex items-center justify-center shrink-0 border ${
                          checked
                            ? 'bg-[#745633] border-[#745633] text-white'
                            : 'border-[#BDB3A3]'
                        }`}
                      >
                        {checked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium leading-tight">{svc.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Calculation Summary Card */}
          <div className="lg:col-span-5 bg-[#F5F1E9] border border-[#DDD5C7] p-6 sm:p-8 rounded-sm sticky top-28 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD5C7] mb-6">
              <span className="text-xs uppercase tracking-widest text-[#745633] font-semibold flex items-center gap-1.5">
                <Calculator className="w-4 h-4" />
                Project Blueprint Summary
              </span>
              <span className="text-[11px] text-[#7A7163] font-mono">Lahore Region</span>
            </div>

            {/* Invariant Highlights */}
            <div className="space-y-4 mb-6 text-xs text-[#4F463B]">
              <div className="flex justify-between items-center py-1 border-b border-[#E0D7C9]">
                <span className="text-[#6B6254]">Scale:</span>
                <span className="font-semibold text-[#1A1612]">{currentSizeObj.label} ({currentSizeObj.sub})</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#E0D7C9]">
                <span className="text-[#6B6254]">Style:</span>
                <span className="font-semibold text-[#745633]">{currentTierObj.name}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#E0D7C9]">
                <span className="text-[#6B6254]">Selected Modules:</span>
                <span className="font-mono text-[#1A1612] tabular-nums font-semibold">{selectedServices.length} Selected</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#E0D7C9]">
                <span className="text-[#6B6254]">Supervision:</span>
                <span className="text-[#1A1612] font-medium">100% Studio Lead Architect</span>
              </div>
            </div>

            {/* Estimated Timeline Display */}
            <div className="p-4 bg-white border border-[#DDD5C7] rounded-sm mb-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-[#745633] uppercase tracking-wider mb-1 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Estimated Architectural Delivery</span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl text-[#1A1612] font-semibold">
                {totalWeeks - 2} – {totalWeeks + 2} <span className="text-sm font-sans text-[#7A7163] font-normal">Weeks</span>
              </div>
              <p className="text-[11px] text-[#6B6254] mt-1 leading-normal font-light">
                Includes schematic design, 3D spatial renders, structural review, material procurement, 
                and final bespoke handover.
              </p>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleApply}
              className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#745633] hover:bg-[#5E4426] transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Book Consultation With This Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-4 text-center">
              <span className="text-[11px] text-[#7A7163]">
                Zero-obligation meeting at our Zainab Tower studio or on-site.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
