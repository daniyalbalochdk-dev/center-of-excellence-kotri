import React from 'react';
import { ShieldCheck, Award, Zap, CheckCircle2, MapPin, BookOpen, Wrench } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';
import { StevtaLogo } from './StevtaLogo';
import { INSTITUTE_INFO } from '../data/instituteData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white text-[#0f172a] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0c2d6b] uppercase mb-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#d4af37]" />
              <span>Institutional Overview</span>
              <span className="text-slate-300">/</span>
              <span>Center of Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0c2d6b] font-heading uppercase">
              About Center of Excellence, Kotri
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              Center of Excellence, Kotri (formerly known as TTC Kotri) provides practical, technical, and vocational training programs for students seeking market-ready career skills.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
            <div className="flex items-center gap-3">
              <OfficialLogo size={48} />
              <div>
                <p className="text-xs font-bold uppercase text-[#0c2d6b] tracking-wider font-heading">
                  {INSTITUTE_INFO.name}
                </p>
                <p className="text-xs font-mono text-slate-500">
                  {INSTITUTE_INFO.address.note}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Real Campus Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Real Campus Photo with Institutional Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-900 group">
              <img
                src={INSTITUTE_INFO.buildingImage}
                alt="Center of Excellence, Kotri Campus Building"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a40]/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0c2d6b]/95 text-white border border-white/20 backdrop-blur-md">
                <p className="text-xs font-mono uppercase tracking-wider text-[#d4af37]">
                  Official Campus Building
                </p>
                <h4 className="text-lg font-bold font-heading">
                  Centre of Excellence, Kotri
                </h4>
                <p className="text-xs text-neutral-300 font-sans mt-0.5">
                  TB Sanitorium Road, Kotri Phatak, Kotri
                </p>
              </div>
            </div>

            {/* Accent Gold Corner Ornament */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#d4af37]/20 rounded-full blur-xl pointer-events-none" />
          </div>

          {/* Core Institutional Tenets */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed font-sans">
              <p className="text-base sm:text-lg">
                Center of Excellence, Kotri operates under the regulatory standards and curriculum of the <strong className="text-[#0c2d6b]">Sindh Technical Education & Vocational Training Authority (STEVTA)</strong>, Government of Sindh.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Our educational campus is structured specifically around <strong>hands-on practical technical workshops</strong> and <strong>high-performance computer laboratories</strong>, ensuring that students transition seamlessly from learning theoretical foundations to executing real-world technical tasks.
              </p>
            </div>

            {/* Key Institutional Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#0c2d6b]/10 text-[#0c2d6b] flex items-center justify-center mb-2.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#0c2d6b] font-heading">
                  Practical Technical Training
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  Heavy focus on practical workshop drills with safety standards and certified tools.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#047857]/10 text-[#047857] flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#047857] font-heading">
                  STEVTA Sindh Affiliation
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  Official certificates issued in accordance with Government of Sindh vocational boards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 text-[#92640b] flex items-center justify-center mb-2.5">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#92640b] font-heading">
                  24-Hour Express Power Line
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  Air-conditioned classrooms and computer labs supported by uninterrupted electricity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#dc2626]/10 text-[#dc2626] flex items-center justify-center mb-2.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#dc2626] font-heading">
                  Skills is the Key to Success
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  Structured learning pathways for boys and girls to master in-demand technical trades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
