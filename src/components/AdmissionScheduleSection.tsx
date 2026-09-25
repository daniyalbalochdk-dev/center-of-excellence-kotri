import React from 'react';
import { Calendar, Clock, Banknote, ArrowRight, MessageCircle, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { ADMISSION_CYCLES, INSTITUTE_INFO } from '../data/instituteData';

interface AdmissionScheduleSectionProps {
  onOpenAdmissionModal: (courseName?: string) => void;
}

export const AdmissionScheduleSection: React.FC<AdmissionScheduleSectionProps> = ({
  onOpenAdmissionModal
}) => {
  return (
    <section id="admissions" className="py-20 lg:py-28 bg-[#0c2d6b] text-white relative overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#d4af37] uppercase mb-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#d4af37]" />
              <span>Academic Calendar</span>
              <span className="text-white/30">/</span>
              <span>Admissions Schedule</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-heading uppercase">
              Official Admission Cycles
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
              Standardized admission windows and academic batch commencement dates for DIT and 6-month technical programs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenAdmissionModal()}
              className="px-6 py-3 rounded-lg bg-[#d4af37] hover:bg-[#e5a925] text-[#071a40] text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Apply for Current Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Admission Schedule Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: DIT Annual Program */}
          <div className="rounded-2xl bg-white/10 border border-white/15 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37] bg-black/40 px-3 py-1 rounded border border-[#d4af37]/30">
                  Annual 1-Year Diploma
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Boys & Girls Eligible
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                Diploma in Information Technology (DIT)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 mb-6">
                1-Year professional IT certification with morning & evening shifts.
              </p>

              {/* Timeline Container */}
              <div className="space-y-4 border-l-2 border-[#d4af37] pl-4 sm:pl-6 my-6">
                <div className="relative">
                  <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#d4af37] border-2 border-[#0c2d6b]" />
                  <span className="text-[11px] font-mono uppercase text-[#d4af37] font-bold">
                    Admission Period
                  </span>
                  <p className="text-lg font-bold text-white mt-0.5">
                    1 June – 31 July
                  </p>
                  <p className="text-xs text-neutral-300">
                    Admission forms and document verification accepted every year.
                  </p>
                </div>

                <div className="relative pt-2">
                  <div className="absolute -left-[23px] sm:-left-[31px] top-3 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0c2d6b]" />
                  <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold">
                    Classes Start
                  </span>
                  <p className="text-lg font-bold text-white mt-0.5">
                    1 August
                  </p>
                  <p className="text-xs text-neutral-300">
                    Academic session orientation and regular lab practicals begin.
                  </p>
                </div>
              </div>

              {/* Fee and shifts summary */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase font-mono">Admission Fee</span>
                  <span className="text-base font-extrabold text-[#d4af37] font-mono">PKR 10,000</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase font-mono">Shifts Available</span>
                  <span className="text-base font-bold text-white">Morning & Evening</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-3 pt-4 border-t border-white/10">
              <span className="text-xs text-neutral-300 font-sans">
                Seats allocated per STEVTA guidelines.
              </span>
              <button
                onClick={() => onOpenAdmissionModal('Diploma in Information Technology (DIT)')}
                className="px-4 py-2 rounded-lg bg-white text-[#0c2d6b] hover:bg-neutral-100 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire for DIT
              </button>
            </div>
          </div>

          {/* Card 2: 6-Month Technical & Language Courses */}
          <div className="rounded-2xl bg-white/10 border border-white/15 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37] bg-black/40 px-3 py-1 rounded border border-[#d4af37]/30">
                  Bi-Annual 6-Month Programs
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-400/20 text-blue-300 border border-blue-400/40">
                  Two Annual Intakes
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                Chinese Language & Technical Trades
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 mb-6">
                Electrical, Machinist, AC Technician, Fashion Designing, Junior Draftsman, and Chinese Language.
              </p>

              {/* Two Distinct Periods */}
              <div className="space-y-4 border-l-2 border-white/30 pl-4 sm:pl-6 my-6">
                {/* Period 1: Winter */}
                <div className="relative">
                  <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-[#0c2d6b]" />
                  <span className="text-[11px] font-mono uppercase text-amber-300 font-bold">
                    Admission Period 1 (Winter Batch)
                  </span>
                  <p className="text-lg font-bold text-white mt-0.5">
                    1 December – 31 December
                  </p>
                  <p className="text-xs text-neutral-300">
                    Classes start immediately after the December admission period.
                  </p>
                </div>

                {/* Period 2: Summer */}
                <div className="relative pt-2">
                  <div className="absolute -left-[23px] sm:-left-[31px] top-3 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#0c2d6b]" />
                  <span className="text-[11px] font-mono uppercase text-cyan-300 font-bold">
                    Admission Period 2 (Summer Batch)
                  </span>
                  <p className="text-lg font-bold text-white mt-0.5">
                    1 June – 31 July
                  </p>
                  <p className="text-xs text-neutral-300">
                    Classes start immediately after the July admission period.
                  </p>
                </div>
              </div>

              {/* Fee breakdown */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase font-mono">6-Month Technical Fee</span>
                  <span className="text-base font-extrabold text-[#d4af37] font-mono">PKR 2,000</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase font-mono">Chinese Language Fee</span>
                  <span className="text-base font-extrabold text-[#d4af37] font-mono">PKR 15,000</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-3 pt-4 border-t border-white/10">
              <span className="text-xs text-neutral-300 font-sans">
                Direct helpline: {INSTITUTE_INFO.phoneDisplay}
              </span>
              <button
                onClick={() => onOpenAdmissionModal('6-Month Technical Courses')}
                className="px-4 py-2 rounded-lg bg-white text-[#0c2d6b] hover:bg-neutral-100 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire for 6-Month
              </button>
            </div>
          </div>
        </div>

        {/* Important Admission Notice Note */}
        <div className="mt-10 p-4 rounded-xl bg-white/5 border border-white/15 flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
          <AlertCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Admissions Notice:</strong> Prospective students are advised to submit their registration during the designated windows (1 June – 31 July for DIT and Cycle 2; 1 Dec – 31 Dec for Cycle 1). Contact the admissions office directly via phone or WhatsApp at <strong>{INSTITUTE_INFO.phoneDisplay}</strong> for verification requirements.
          </p>
        </div>
      </div>
    </section>
  );
};
