import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck, ArrowUp, ExternalLink } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';
import { StevtaLogo } from './StevtaLogo';
import { INSTITUTE_INFO, COURSES } from '../data/instituteData';

interface FooterProps {
  onOpenWelcomeVideo: () => void;
  onOpenAdmissionModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenWelcomeVideo,
  onOpenAdmissionModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071a40] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Official Logo, Name, Motto & Affiliation (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <OfficialLogo size={60} />
              <div>
                <h3 className="text-lg sm:text-xl font-black font-heading tracking-tight text-white leading-tight">
                  CENTER OF EXCELLENCE
                </h3>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d4af37]">
                  KOTRI <span className="text-neutral-400 font-normal">· (Old name: TTC Kotri)</span>
                </p>
              </div>
            </div>

            <p className="text-sm font-bold text-[#d4af37] font-heading tracking-wide italic">
              &ldquo;{INSTITUTE_INFO.tagline}&rdquo;
            </p>
            <p className="font-urdu text-base text-amber-200">
              {INSTITUTE_INFO.urduMotto}
            </p>

            <p className="text-xs text-neutral-300 font-sans leading-relaxed max-w-sm">
              Official technical and vocational education campus empowering students with certified practical expertise under Government of Sindh standards.
            </p>

            {/* STEVTA Affiliation Badge */}
            <div className="pt-2 flex items-center gap-3">
              <StevtaLogo size={42} />
              <div className="text-xs text-neutral-300">
                <span className="font-bold text-white block">Affiliated with STEVTA, Sindh</span>
                <span className="text-[11px] text-neutral-400">Government of Sindh Authority</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#d4af37]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 font-sans">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Center of Excellence</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Courses & Trades</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Campus Facilities</a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">Admission Schedule</a>
              </li>
              <li>
                <a href="#affiliation" className="hover:text-white transition-colors">STEVTA Affiliation</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location & Map</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Admissions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#d4af37]">
              Campus Contact & Address
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">{INSTITUTE_INFO.address.full}</span>
                  <span className="text-xs text-neutral-400">({INSTITUTE_INFO.address.note})</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-neutral-400 block font-mono">Call / WhatsApp Helpline</span>
                  <a
                    href={`tel:${INSTITUTE_INFO.phone}`}
                    className="text-base font-bold font-mono text-white hover:text-[#d4af37] transition-colors"
                  >
                    {INSTITUTE_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons in Footer */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={INSTITUTE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenWelcomeVideo}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
              >
                Replay Intro Video
              </button>

              <button
                onClick={onOpenAdmissionModal}
                className="px-4 py-2 rounded-lg bg-[#d4af37] hover:bg-[#e5a925] text-[#071a40] text-xs font-extrabold uppercase tracking-wider transition-all"
              >
                Apply Online
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Accreditations Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-sans">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Center of Excellence, Kotri. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Affiliated with STEVTA, Sindh · Government of Sindh</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
