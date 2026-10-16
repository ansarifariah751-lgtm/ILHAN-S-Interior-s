import React from 'react';
import { Star, ShieldCheck, Clock, Award } from 'lucide-react';

interface ProofStripProps {
  onOpenReviews: () => void;
}

export const ProofStrip: React.FC<ProofStripProps> = ({ onOpenReviews }) => {
  return (
    <section className="border-y border-[#E5DFD5] bg-[#F3EFE8] text-[#221E1A] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#DDD5C7]">
          
          {/* Stat 1: Google Rating */}
          <button
            onClick={onOpenReviews}
            className="text-left group cursor-pointer pt-4 sm:pt-0 sm:first:pt-0"
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="font-serif text-3xl font-semibold tracking-tight text-[#1A1612] tabular-nums">
                4.6
              </span>
              <div className="flex items-center text-[#D97706]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 fill-current ${i === 4 ? 'opacity-60' : ''}`}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs text-[#5C5449] group-hover:text-[#745633] transition-colors">
              <span className="font-semibold text-[#1A1612]">31 Verified Reviews</span>
              <span className="block text-[11px] text-[#7A7163]">Google Maps · Lahore</span>
            </div>
          </button>

          {/* Stat 2: Residential Projects */}
          <div className="sm:pl-8 pt-4 sm:pt-0">
            <div className="flex items-center gap-2 mb-1.5">
              <Award className="w-5 h-5 text-[#745633]" />
              <span className="font-serif text-3xl font-semibold tracking-tight text-[#1A1612] tabular-nums">
                120+
              </span>
            </div>
            <div className="text-xs text-[#5C5449]">
              <span className="font-semibold text-[#1A1612]">Residences Delivered</span>
              <span className="block text-[11px] text-[#7A7163]">DHA, Model Town & Gulberg</span>
            </div>
          </div>

          {/* Stat 3: Turnkey Architecture */}
          <div className="sm:pl-8 pt-4 sm:pt-0">
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-5 h-5 text-[#745633]" />
              <span className="font-serif text-3xl font-semibold tracking-tight text-[#1A1612]">
                Turnkey
              </span>
            </div>
            <div className="text-xs text-[#5C5449]">
              <span className="font-semibold text-[#1A1612]">Architectural Execution</span>
              <span className="block text-[11px] text-[#7A7163]">From 3D Blueprint to Finish</span>
            </div>
          </div>

          {/* Stat 4: 24 Hours Availability */}
          <div className="sm:pl-8 pt-4 sm:pt-0">
            <div className="flex items-center gap-2 mb-1.5">
              <Clock className="w-5 h-5 text-[#745633]" />
              <span className="font-serif text-3xl font-semibold tracking-tight text-[#1A1612]">
                24/7
              </span>
            </div>
            <div className="text-xs text-[#5C5449]">
              <span className="font-semibold text-[#1A1612]">Studio Consultations</span>
              <span className="block text-[11px] text-[#7A7163]">Zainab Tower Link Rd</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
