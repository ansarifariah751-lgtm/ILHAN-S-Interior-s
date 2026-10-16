import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, Navigation, MessageSquare, ChevronDown } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Turnkey Residential Interior',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do you provide complete turnkey execution or only design drawings?',
      a: 'We provide full end-to-end turnkey architectural & interior execution. This encompasses concept sketches, 3D photorealistic renderings, structural revisions, MEP drawings, stone & timber procurement, and dedicated site supervision until final handover.'
    },
    {
      q: 'Where is your studio located and can we visit in person?',
      a: 'Our central studio is at Zainab Tower, M 59 Model Town Link Rd, Muhammadpura, Lahore (Plus code: F899+X5). You are welcome to visit our studio by booking an appointment, or walk in anytime — we are open 24 hours for client consultations.'
    },
    {
      q: 'Do you work on villas outside Model Town (e.g. DHA, Gulberg, Bahria)?',
      a: 'Yes, the majority of our portfolio spans DHA Phases 1 through 8, Gulberg II & III, Bahria Orchard, Lake City, and Model Town. We have specialized on-site site supervisors across all major societies in Lahore.'
    },
    {
      q: 'How does ILHAN’S ensure affordable luxury without compromising quality?',
      a: 'Through direct partnerships with primary quarry suppliers (honed travertine, Statuario, onyx) and in-house bespoke cabinetry joiners, we eliminate middleman markups. As highlighted in client reviews, this allows us to deliver international luxury at competitive pricing.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const whatsappInquiryUrl = `https://wa.me/923029722626?text=${encodeURIComponent(
    `Hello ILHAN'S Interiors! I'm reaching out regarding ${formState.serviceInterest}.\n\nName: ${formState.name}\nPhone: ${formState.phone}\nMessage: ${formState.message || 'I would like to discuss my interior design project in Lahore.'}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#F5F1E9] text-[#221E1A] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#745633] font-semibold mb-3">
              Direct Inquiries & Studio
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1612]">
              Connect With Our Studio
            </h2>
          </div>
          <p className="text-sm text-[#5C5449] max-w-md font-light leading-relaxed">
            Located on Model Town Link Road. Reach our architectural partners directly 
            to initiate your residential or commercial transformation.
          </p>
        </div>

        {/* Contact Grid: Details + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Left: Studio Information & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E5DFD5] p-6 sm:p-8 rounded-sm shadow-xs">
              <h3 className="font-serif text-2xl text-[#1A1612] font-semibold mb-6">
                Studio Headquarters
              </h3>

              <div className="space-y-6 text-sm text-[#4F463B]">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#FAF7F2] border border-[#DDD5C7] text-[#745633] rounded-sm shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#1A1612] font-semibold mb-1">
                      Lahore Address
                    </div>
                    <p className="font-light leading-relaxed">
                      Zainab Tower, M 59 Model Town Link Rd, <br />
                      Muhammadpura, Lahore, 54000, Pakistan
                    </p>
                    <div className="text-xs text-[#7A7163] mt-1 font-mono">
                      Plus Code: <span className="text-[#745633] font-semibold">F899+X5 Lahore, Pakistan</span>
                    </div>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#FAF7F2] border border-[#DDD5C7] text-[#745633] rounded-sm shrink-0 mt-0.5 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#1A1612] font-semibold mb-1">
                      Direct Telephone & WhatsApp
                    </div>
                    <a
                      href="tel:+923029722626"
                      className="text-base text-[#1A1612] hover:text-[#745633] font-mono font-semibold transition-colors block"
                    >
                      +92 302 9722626
                    </a>
                    <span className="text-xs text-[#7A7163]">Available 24 hours for consultations</span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#FAF7F2] border border-[#DDD5C7] text-[#745633] rounded-sm shrink-0 mt-0.5 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#1A1612] font-semibold mb-1">
                      Operating Hours
                    </div>
                    <p className="font-medium text-[#1A1612]">
                      Open 24 Hours
                    </p>
                    <span className="text-xs text-[#7A7163]">Client appointments scheduled 7 days a week</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#E5DFD5] flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Zainab+Tower+Model+Town+Link+Rd+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#1A1612] bg-[#FAF7F2] border border-[#DDD5C7] hover:bg-white transition-colors rounded-sm inline-flex items-center gap-2 shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#745633]" />
                  <span>Get Directions</span>
                </a>
                <a
                  href="https://wa.me/923029722626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-sm inline-flex items-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Interactive Location Visual Map Card */}
            <div className="bg-white border border-[#E5DFD5] p-4 rounded-sm overflow-hidden shadow-xs">
              <div className="relative h-48 w-full bg-[#FAF7F2] rounded-sm flex items-center justify-center overflow-hidden border border-[#DDD5C7]">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#745633_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
                <div className="relative text-center z-10 px-4">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#745633] text-[#745633] flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-semibold text-[#1A1612]">Zainab Tower, M 59</div>
                  <div className="text-[11px] text-[#7A7163]">Model Town Link Rd, Lahore</div>
                  <a
                    href="https://maps.google.com/?q=Zainab+Tower+Model+Town+Link+Rd+Lahore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-[11px] uppercase tracking-wider text-[#745633] font-semibold hover:underline"
                  >
                    Open Live Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#E5DFD5] p-6 sm:p-8 rounded-sm shadow-xs">
            <h3 className="font-serif text-2xl text-[#1A1612] font-semibold mb-2">
              Send an Architectural Inquiry
            </h3>
            <p className="text-xs text-[#6B6254] mb-8 font-light">
              Submit your property details below. Our senior design team responds within 2 business hours.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-[#FAF7F2] border border-[#745633] rounded-sm text-center">
                <CheckCircle2 className="w-12 h-12 text-[#745633] mx-auto mb-3" />
                <h4 className="font-serif text-2xl text-[#1A1612] font-semibold mb-2">Inquiry Successfully Dispatched</h4>
                <p className="text-xs sm:text-sm text-[#4F463B] font-light max-w-md mx-auto mb-6">
                  Thank you for reaching out to ILHAN’S Interior's. We have cataloged your project inquiry and will contact you directly at <strong className="text-[#1A1612]">{formState.phone}</strong>.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] rounded-sm inline-flex items-center gap-2 shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: '',
                        phone: '',
                        email: '',
                        serviceInterest: 'Turnkey Residential Interior',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs uppercase tracking-wider text-[#1A1612] bg-[#FAF7F2] border border-[#DDD5C7] hover:bg-white rounded-sm"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Shehryar Khan"
                      className="w-full bg-[#FAF7F2] border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full bg-[#FAF7F2] border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="client@example.com"
                      className="w-full bg-[#FAF7F2] border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold">
                      Primary Service Interest
                    </label>
                    <select
                      value={formState.serviceInterest}
                      onChange={(e) => setFormState({ ...formState, serviceInterest: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                    >
                      <option value="Turnkey Residential Interior">Turnkey Residential Interior</option>
                      <option value="Architectural Villa Construction">Architectural Villa Construction</option>
                      <option value="Living Salon & Drawing Room Redesign">Living Salon & Drawing Room Redesign</option>
                      <option value="Master Bedroom Suite Renovation">Master Bedroom Suite Renovation</option>
                      <option value="Imported Kitchen & Joinery Architecture">Imported Kitchen & Joinery Architecture</option>
                      <option value="Corporate Executive Office Architecture">Corporate Executive Office Architecture</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] mb-1.5 font-semibold">
                    Message & Property Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your property in Lahore (e.g., 1 Kanal villa in DHA Phase 6, raw structure completion, timeline)..."
                    className="w-full bg-[#FAF7F2] border border-[#DDD5C7] px-3.5 py-2.5 text-xs text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-[#7A7163]">
                    Confidentiality guaranteed · Direct senior architect review
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#745633] hover:bg-[#5E4426] transition-colors rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-[#E5DFD5]">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#745633] font-semibold">
              Common Questions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1612] font-semibold mt-1">
              Architectural Practice Invariants
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E5DFD5] rounded-sm overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2] transition-colors"
                  >
                    <span className="text-sm font-semibold text-[#1A1612]">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#745633] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#4F463B] font-light leading-relaxed border-t border-[#E5DFD5] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
