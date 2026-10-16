import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

interface QuickActionBarProps {
  onOpenBooking: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick actions"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-md bg-[#FAF7F2]/95 backdrop-blur-md border border-[#DDD5C7] shadow-2xl rounded-full p-1.5 flex items-center justify-between gap-1 text-xs text-[#1A1612] animate-fadeIn"
    >
      <a
        href="tel:+923029722626"
        className="flex-1 py-2 px-3 text-center rounded-full hover:bg-white text-[#4F463B] hover:text-[#1A1612] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0"
      >
        <Phone className="w-3.5 h-3.5 text-[#745633]" />
        <span className="font-mono text-[11px] font-semibold">+92 302 9722626</span>
      </a>

      <a
        href="https://wa.me/923029722626"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 px-3 rounded-full hover:bg-white text-[#25D366] transition-colors flex items-center justify-center gap-1 whitespace-nowrap shrink-0"
        title="WhatsApp Direct"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span className="text-[11px] font-medium hidden sm:inline">WhatsApp</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="py-2 px-4 rounded-full bg-[#745633] text-[#FAF7F2] font-semibold text-[11px] uppercase tracking-wider hover:bg-[#5E4426] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
      >
        Book Consult
      </button>
    </aside>
  );
};
