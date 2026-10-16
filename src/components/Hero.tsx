import React, { useEffect, useState } from 'react';
import { ArrowDown, MapPin, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#FAF7F2]">
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform scale-105"
        style={{
          transform: `translate3d(0, ${scrollY * 0.28}px, 0)`,
        }}
      >
        <img
          src="/src/assets/images/hero_luxury_living_1792153019880.jpg"
          alt="Luxury modern villa interior living space in Lahore with travertine walls and courtyard garden"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Measured Light/Beige Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-[#FAF7F2]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/75 to-transparent" />
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#745633_1px,transparent_1px)] [background-size:32px_32px] opacity-5" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Subtle Editorial Kicker (No Pill Enclosure) */}
          <div className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest text-[#745633] mb-4 font-semibold">
            <span>Interior Designers & Architects</span>
            <span aria-hidden="true">·</span>
            <span>Lahore, Pakistan</span>
          </div>

          {/* Refined Display Headline with text-wrap: balance */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1A1612] leading-[1.08] mb-6 [text-wrap:balance]">
            Curating Timeless Spaces <br className="hidden sm:inline" />
            Across <span className="italic font-light text-[#745633]">Lahore</span>
          </h1>

          {/* Lead Copy with measure 65-75ch */}
          <p className="text-base sm:text-lg text-[#4F463B] leading-relaxed max-w-2xl mb-8 font-light">
            From expansive 2-Kanal minimalist villas in DHA Phase 6 to bespoke apartment 
            refinements in Model Town and Gulberg. We fuse architectural rigor, 
            monolithic travertine, and tailored comfort to elevate modern Pakistani living.
          </p>

          {/* Interactive Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#745633] hover:bg-[#5E4426] transition-all rounded-sm shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Consultation</span>
            </button>

            <a
              href="#portfolio"
              className="px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider text-[#221E1A] hover:text-black bg-white/90 hover:bg-white border border-[#DDD5C7] transition-all rounded-sm shadow-xs cursor-pointer"
            >
              Explore Portfolios
            </a>

            <a
              href="https://wa.me/923029722626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#745633] hover:text-[#5E4426] font-medium px-3 py-3 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Studio Address Notice */}
          <div className="mt-10 pt-6 border-t border-[#E5DFD5] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#6B6254]">
            <span className="flex items-center gap-1.5 text-[#3D362C] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#745633]" />
              Zainab Tower, M 59 Model Town Link Rd, Lahore
            </span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>Open 24 Hours</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>Plus Code: F899+X5</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full flex justify-between items-end text-xs text-[#7A7163]">
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-[#C9BEAE]" />
          <span className="tracking-widest uppercase text-[11px] font-medium text-[#5C5449]">Bespoke Residential & Commercial</span>
        </div>
        <a
          href="#portfolio"
          className="flex items-center gap-2 text-[#5C5449] hover:text-[#1A1612] transition-colors py-1 font-medium"
          aria-label="Scroll down to portfolio"
        >
          <span className="text-[11px] uppercase tracking-wider hidden sm:inline">Explore Works</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#745633]" />
        </a>
      </div>
    </section>
  );
};
