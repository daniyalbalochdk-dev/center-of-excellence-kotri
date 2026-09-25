import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Mail, ArrowRight, UserCheck } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';
import { INSTITUTE_INFO } from '../data/instituteData';

interface ContactSectionProps {
  onOpenAdmissionModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenAdmissionModal
}) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-[#0f172a] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c2d6b] via-[#092252] to-[#071a40] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1852b4]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-[#d4af37]">
                <span>Official Admissions Office</span>
                <span className="text-white/40">·</span>
                <span>Session 2026</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading uppercase leading-tight">
                Secure Your Admission at Center of Excellence, Kotri
              </h2>

              <p className="text-base sm:text-lg text-neutral-200 font-sans leading-relaxed max-w-xl font-light">
                Take the decisive step toward certified vocational and technical qualifications. Speak directly with our admissions desk or send a message via WhatsApp.
              </p>

              {/* Direct Admission Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${INSTITUTE_INFO.phone}`}
                  className="px-6 py-3.5 rounded-xl bg-[#d4af37] hover:bg-[#e5a925] text-[#071a40] text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#071a40]" />
                  <span>Call Now: {INSTITUTE_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={INSTITUTE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp for Admission</span>
                </a>

                <button
                  onClick={onOpenAdmissionModal}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-[#0c2d6b] text-xs font-black uppercase tracking-wider shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Online Inquiry Form</span>
                </button>
              </div>
            </div>

            {/* Right Information Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <OfficialLogo size={52} />
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">
                      Center of Excellence, Kotri
                    </h3>
                    <p className="text-xs text-[#d4af37] font-mono">
                      (Old name: TTC Kotri)
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm font-sans text-neutral-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-heading">Campus Address:</strong>
                      <span>{INSTITUTE_INFO.address.full}</span>
                      <span className="block text-[11px] text-neutral-400 mt-0.5">
                        {INSTITUTE_INFO.address.note}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-heading">Helpline / WhatsApp:</strong>
                      <span className="font-mono text-white text-base font-bold">
                        {INSTITUTE_INFO.phoneDisplay}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-heading">Accreditation:</strong>
                      <span>{INSTITUTE_INFO.affiliation}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[11px] font-mono text-neutral-400">
                    Visit during office hours for in-person campus verification and counseling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
