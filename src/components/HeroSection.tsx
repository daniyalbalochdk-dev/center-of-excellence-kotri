import React from 'react';
import { ArrowRight, MessageCircle, Phone, Play, ShieldCheck, Award, MapPin, Sparkles } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';
import { StevtaLogo } from './StevtaLogo';
import { INSTITUTE_INFO } from '../data/instituteData';

interface HeroSectionProps {
  onOpenWelcomeVideo: () => void;
  onOpenAdmissionModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWelcomeVideo,
  onOpenAdmissionModal
}) => {
  return (
    <section id="home" className="relative pt-32 lg:pt-36 pb-16 lg:pb-24 bg-gradient-to-b from-[#0c2d6b] via-[#092252] to-[#071a40] text-white overflow-hidden">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient Glow Orbs matching Logo Colors (Royal Blue & Amber Gold) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#1852b4]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#d4af37]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Institutional Identification & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Affiliation Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#25d366]" />
                Admissions Open 2026
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#047857]/25 border border-[#047857]/50 text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Affiliated with STEVTA, Sindh
              </span>

              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono text-neutral-300 bg-black/30 border border-white/10">
                Old name: TTC Kotri
              </span>
            </div>

            {/* Main Institutional Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading uppercase leading-[1.08]">
              CENTER OF EXCELLENCE
              <span className="block mt-1 text-[#dc2626] drop-shadow-[0_2px_12px_rgba(220,38,38,0.4)]">
                KOTRI
              </span>
            </h1>

            {/* Official Tagline */}
            <div className="mt-4 flex items-center gap-3">
              <div className="w-1.5 h-10 bg-[#d4af37] rounded-full" />
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#d4af37] tracking-wide font-heading">
                  &ldquo;{INSTITUTE_INFO.tagline}&rdquo;
                </p>
                <p className="font-urdu text-lg text-amber-200 mt-0.5">
                  {INSTITUTE_INFO.urduMotto}
                </p>
              </div>
            </div>

            {/* Supporting Institutional Summary */}
            <p className="mt-5 text-base sm:text-lg text-neutral-200 leading-relaxed font-sans max-w-2xl font-light">
              Official vocational and technical education campus providing certified 1-year and 6-month hands-on training programs in Information Technology, Electrical systems, Machining, Refrigeration (HVAC), Drafting, Fashion Designing, and Chinese Language under Government of Sindh standards.
            </p>

            {/* Key Quick Facts Grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[11px] uppercase font-mono text-[#d4af37] block">Programs</span>
                <span className="text-base font-bold text-white">7 Certified Trades</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[11px] uppercase font-mono text-[#d4af37] block">Power Supply</span>
                <span className="text-base font-bold text-white">24-Hr Express Line</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[11px] uppercase font-mono text-[#d4af37] block">Affiliation</span>
                <span className="text-base font-bold text-emerald-400">Govt. of Sindh</span>
              </div>
            </div>

            {/* CTA Buttons - Derived Brand Palette */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#courses"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#d4af37] hover:bg-[#e5a925] text-[#071a40] text-sm font-extrabold uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <span>View Courses</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenAdmissionModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white hover:bg-neutral-100 text-[#0c2d6b] text-sm font-extrabold uppercase tracking-wider shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply / Contact for Admission</span>
              </button>

              <a
                href={INSTITUTE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-[#25d366] hover:bg-[#20ba5a] text-white text-sm font-bold shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp for Admission</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Building Media & Video Launcher */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Real Campus Building Frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-neutral-900 group">
              <img
                src={INSTITUTE_INFO.buildingImage}
                alt="Center of Excellence, Kotri Campus Building"
                className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a40] via-transparent to-black/30 pointer-events-none" />

              {/* In-image Badges & Campus Caption */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider bg-[#0c2d6b]/85 backdrop-blur-md px-3 py-1 rounded text-white border border-white/20 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#d4af37]" />
                  <span>Kotri Phatak, Kotri</span>
                </span>

                <button
                  onClick={onOpenWelcomeVideo}
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#d4af37] text-[#071a40] text-xs font-bold uppercase tracking-wider hover:bg-[#e5a925] transition-all shadow-md cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Watch Video</span>
                </button>
              </div>

              {/* Building Caption Box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#071a40]/90 border border-white/15 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">
                      Center of Excellence, Kotri
                    </h3>
                    <p className="text-xs text-neutral-300 font-sans mt-0.5">
                      Main Academic & Technical Workshop Campus
                    </p>
                  </div>
                  <OfficialLogo size={42} />
                </div>
              </div>
            </div>

            {/* STEVTA Affiliation Micro Card */}
            <div className="mt-4 p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <StevtaLogo size={36} />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    STEVTA Affiliated
                  </p>
                  <p className="text-[11px] text-neutral-300">
                    Sindh Technical Education & Vocational Training Authority
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#d4af37] font-bold">
                Govt. Recognized
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
