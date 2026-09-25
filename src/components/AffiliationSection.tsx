import React from 'react';
import { ShieldCheck, Award, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { StevtaLogo } from './StevtaLogo';
import { OfficialLogo } from './OfficialLogo';
import { INSTITUTE_INFO } from '../data/instituteData';

export const AffiliationSection: React.FC = () => {
  return (
    <section id="affiliation" className="py-20 lg:py-24 bg-white text-[#0f172a] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-950/5 via-slate-50 to-blue-950/5 border border-slate-200 p-8 sm:p-12 overflow-hidden relative">
          {/* Subtle Institutional Watermark */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-12 translate-y-12">
            <StevtaLogo size={360} />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: STEVTA Official Badge Visual */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-md mb-4 inline-block">
                <StevtaLogo size={110} />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#047857]">
                Official Accreditation
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0c2d6b] font-heading mt-1">
                Sindh TEVTA Affiliated
              </h3>
              <p className="text-xs text-slate-500 font-sans mt-1">
                Government of Sindh Technical Education Authority
              </p>
            </div>

            {/* Right: Detailed Affiliation Scope */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#047857]/10 text-[#047857] border border-[#047857]/20">
                <ShieldCheck className="w-4 h-4" />
                <span>Recognized Educational Standard</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-[#0c2d6b] font-heading">
                Accredited Training under Government of Sindh
              </h4>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Center of Excellence, Kotri operates in full affiliation with the <strong>Sindh Technical Education & Vocational Training Authority (STEVTA), Sindh</strong>, an agency of the <strong>Government of Sindh</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                  <span>Curriculum aligned with STEVTA vocational trades</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                  <span>Official examination and certification process</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                  <span>Government-recognized diplomas for employment</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                  <span>Adherence to provincial safety & workshop regulations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
