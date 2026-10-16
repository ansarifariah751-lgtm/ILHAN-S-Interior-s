import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Video, Building2, MessageSquare } from 'lucide-react';
import { Project } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProject?: Project | null;
  prefilledEstimate?: {
    propertySize: string;
    propertyType: string;
    tier: string;
    estimatedWeeks: string;
    services: string[];
  } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledProject,
  prefilledEstimate,
}) => {
  const [meetingMode, setMeetingMode] = useState<'studio' | 'onsite' | 'virtual'>('studio');
  const [date, setDate] = useState<string>('2026-10-20');
  const [timeSlot, setTimeSlot] = useState<string>('03:00 PM');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyArea: prefilledEstimate?.propertySize || '1 Kanal',
    locationInLahore: 'DHA Phase 6',
    notes: prefilledProject ? `Interested in style from portfolio: ${prefilledProject.title}` : '',
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const timeSlots = [
    '11:00 AM',
    '01:00 PM',
    '03:00 PM',
    '05:00 PM',
    '07:00 PM',
    '09:00 PM (Late Session)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ILHAN'S Interiors team! I would like to confirm my design consultation booking:\n\n` +
    `• Name: ${formData.name}\n` +
    `• Meeting Type: ${meetingMode === 'studio' ? 'In-Studio (Zainab Tower)' : meetingMode === 'onsite' ? 'On-Site Property Visit' : 'Virtual / WhatsApp Video'}\n` +
    `• Date & Time: ${date} at ${timeSlot}\n` +
    `• Property: ${formData.propertyArea} in ${formData.locationInLahore}\n` +
    `${prefilledEstimate ? `• Preferred Aesthetic: ${prefilledEstimate.tier}\n` : ''}` +
    `• Notes: ${formData.notes || 'Looking for architectural & interior consultation'}`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#DDD5C7] rounded-sm overflow-hidden my-auto shadow-2xl animate-fadeIn">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5DFD5] bg-[#F3EFE8]">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#745633] font-semibold">
              ILHAN'S Interior's · Lahore
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A1612] font-semibold">
              Reserve Design Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6B6254] hover:text-[#1A1612] transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#745633] text-[#745633] flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-[#1A1612] font-semibold mb-2">
                Consultation Request Received
              </h4>
              <p className="text-xs sm:text-sm text-[#4F463B] max-w-md mx-auto mb-6 font-light leading-relaxed">
                Thank you, <strong className="text-[#1A1612]">{formData.name}</strong>. Our senior architectural designer has reserved your slot for{' '}
                <strong className="text-[#745633]">{date} at {timeSlot}</strong>.
              </p>

              {/* Booking Summary Box */}
              <div className="bg-white border border-[#DDD5C7] p-4 text-left max-w-md mx-auto mb-6 text-xs text-[#52493D] space-y-2 shadow-xs">
                <div className="flex justify-between">
                  <span>Consultation Format:</span>
                  <span className="text-[#1A1612] font-medium">
                    {meetingMode === 'studio' ? 'Zainab Tower Studio (Model Town Link Rd)' : meetingMode === 'onsite' ? 'On-Site Property Inspection' : 'Virtual Video Meeting'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Location / Project:</span>
                  <span className="text-[#1A1612]">{formData.locationInLahore} ({formData.propertyArea})</span>
                </div>
                <div className="flex justify-between">
                  <span>Direct Studio Line:</span>
                  <span className="text-[#745633] font-mono font-semibold">+92 302 9722626</span>
                </div>
              </div>

              {/* Instant WhatsApp Sync Button */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/923029722626?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-sm inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-6 py-3 text-xs uppercase tracking-wider text-[#1A1612] bg-[#FAF7F2] border border-[#DDD5C7] hover:bg-white transition-colors rounded-sm cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Meeting Mode Tabs */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1A1612] font-semibold mb-2.5">
                  1. Consultation Environment
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setMeetingMode('studio')}
                    className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      meetingMode === 'studio'
                        ? 'border-[#745633] bg-[#F7F4EE] ring-1 ring-[#745633]'
                        : 'border-[#DDD5C7] bg-white text-[#6B6254] hover:border-[#745633]'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-[#745633] mb-1.5" />
                    <div className="text-xs font-semibold text-[#1A1612]">In-Studio</div>
                    <div className="text-[10px] text-[#7A7163] mt-0.5">Zainab Tower, Lahore</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingMode('onsite')}
                    className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      meetingMode === 'onsite'
                        ? 'border-[#745633] bg-[#F7F4EE] ring-1 ring-[#745633]'
                        : 'border-[#DDD5C7] bg-white text-[#6B6254] hover:border-[#745633]'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#745633] mb-1.5" />
                    <div className="text-xs font-semibold text-[#1A1612]">On-Site Visit</div>
                    <div className="text-[10px] text-[#7A7163] mt-0.5">Anywhere in Lahore</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingMode('virtual')}
                    className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      meetingMode === 'virtual'
                        ? 'border-[#745633] bg-[#F7F4EE] ring-1 ring-[#745633]'
                        : 'border-[#DDD5C7] bg-white text-[#6B6254] hover:border-[#745633]'
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#745633] mb-1.5" />
                    <div className="text-xs font-semibold text-[#1A1612]">Virtual Call</div>
                    <div className="text-[10px] text-[#7A7163] mt-0.5">Overseas / WhatsApp</div>
                  </button>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#745633]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#745633]" />
                    <span>Time Window (Open 24 Hours)</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-white border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts} className="bg-white text-[#1A1612]">
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold">
                    Property Footprint
                  </label>
                  <select
                    value={formData.propertyArea}
                    onChange={(e) => setFormData({ ...formData, propertyArea: e.target.value })}
                    className="w-full bg-white border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                  >
                    <option value="5 Marla">5 Marla</option>
                    <option value="10 Marla">10 Marla</option>
                    <option value="1 Kanal">1 Kanal (Default Villa)</option>
                    <option value="2 Kanal">2 Kanal Grand Estate</option>
                    <option value="Penthouse">Luxury Apartment / Penthouse</option>
                    <option value="Commercial">Commercial / Executive Office</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold">
                    Location in Lahore
                  </label>
                  <select
                    value={formData.locationInLahore}
                    onChange={(e) => setFormData({ ...formData, locationInLahore: e.target.value })}
                    className="w-full bg-white border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                  >
                    <option value="DHA Phase 5 / 6 / 7 / 8">DHA Lahore (All Phases)</option>
                    <option value="Model Town / Link Rd">Model Town / Model Town Link Rd</option>
                    <option value="Gulberg II / III">Gulberg II & III</option>
                    <option value="Bahria Town / Orchard">Bahria Town / Bahria Orchard</option>
                    <option value="Lake City / Valencia">Lake City / Valencia</option>
                    <option value="Johar Town / Faisal Town">Johar Town / Faisal Town</option>
                    <option value="Other Area">Other Lahore Area</option>
                  </select>
                </div>
              </div>

              {/* Client Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Asad Chaudhry"
                    className="w-full bg-white border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className="w-full bg-white border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                  />
                </div>
              </div>

              {/* Project Brief or Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold">
                  Project Notes / Requirements
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details such as new grey structure, full interior renovation, drawing room overhaul..."
                  className="w-full bg-white border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-between border-t border-[#E5DFD5]">
                <div className="text-[11px] text-[#7A7163]">
                  Instant confirmation · Direct WhatsApp support
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#745633] hover:bg-[#5E4426] transition-colors rounded-sm cursor-pointer shadow-sm"
                >
                  Confirm Appointment
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
