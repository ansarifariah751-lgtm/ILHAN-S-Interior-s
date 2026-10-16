import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Google Reviews', href: '#reviews' },
    { label: 'Studio & Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD5] shadow-xs py-3.5'
          : 'bg-gradient-to-b from-[#FAF7F2]/95 via-[#FAF7F2]/75 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg md:text-xl font-serif tracking-wider text-[#1A1612] hover:text-[#745633] transition-colors whitespace-nowrap shrink-0 font-semibold"
        >
          ILHAN'S INTERIORS
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5C5449]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#1A1612] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+923029722626"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#6B6254] hover:text-[#1A1612] transition-colors pr-2"
            title="Call studio directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#745633]" />
            <span className="font-mono tabular-nums font-medium">+92 302 9722626</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#745633] hover:bg-[#5E4426] transition-all rounded-sm shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#423C33] hover:text-black transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E5DFD5] px-6 py-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#423C33]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#745633] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E5DFD5] flex flex-col gap-3">
              <a
                href="tel:+923029722626"
                className="inline-flex items-center gap-2 text-sm text-[#1A1612] py-1"
              >
                <Phone className="w-4 h-4 text-[#745633]" />
                <span className="font-mono tabular-nums font-semibold">+92 302 9722626</span>
                <span className="text-xs text-[#7A7163]">· Open 24 Hours</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#745633] rounded-sm cursor-pointer shadow-sm"
              >
                Book Free Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
