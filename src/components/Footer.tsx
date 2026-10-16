import React from 'react';
import { ArrowUp, MapPin, Phone, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFEBE3] text-[#4F463B] border-t border-[#DDD5C7] pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#DDD5C7]">
          
          {/* Brand & Editorial Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl tracking-wider text-[#1A1612] font-semibold block">
              ILHAN'S INTERIORS
            </span>
            <p className="text-xs text-[#5C5449] font-light max-w-sm leading-relaxed">
              Interior Designer in Lahore · Architects in Lahore. Specializing in high-end 
              residential villas, bespoke apartment transformations, and commercial spatial architecture.
            </p>
            <div className="pt-2 text-xs text-[#383229] space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#745633]" />
                <span>Zainab Tower, M 59 Model Town Link Rd, Lahore, 54000</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#745633]" />
                <span className="font-mono tabular-nums font-semibold">+92 302 9722626</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#745633]" />
                <span>Open 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#1A1612] font-semibold">
              Explore Practice
            </div>
            <ul className="space-y-2 text-xs text-[#4F463B]">
              <li>
                <a href="#portfolio" className="hover:text-[#745633] transition-colors">Residential Portfolios</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#745633] transition-colors">Before & After Transformations</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#745633] transition-colors">Scope & Cost Estimator</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#745633] transition-colors">4.6★ Google Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#745633] transition-colors">Studio & Location</a>
              </li>
            </ul>
          </div>

          {/* Lahore Regions & Trust */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#1A1612] font-semibold">
              Primary Practice Areas
            </div>
            <p className="text-xs text-[#6B6254] leading-relaxed">
              Defence Housing Authority (DHA Phases 1–8) · Model Town (All Blocks) · Gulberg II & III · 
              Bahria Town & Orchard · Lake City · Valencia · Cantt Lahore.
            </p>
            <div className="pt-3">
              <span className="inline-block text-[11px] text-[#745633] font-semibold font-mono border border-[#DDD5C7] px-2.5 py-1 bg-[#FAF7F2] rounded-xs shadow-2xs">
                Plus Code: F899+X5 Lahore, Pakistan
              </span>
            </div>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7163]">
          <div>
            © {new Date().getFullYear()} ILHAN'S Interior's. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Architectural Integrity & Craft</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#5C5449] hover:text-[#1A1612] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#745633]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
