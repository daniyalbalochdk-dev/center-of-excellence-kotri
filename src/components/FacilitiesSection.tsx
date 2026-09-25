import React from 'react';
import { Monitor, Laptop, Cpu, Wrench, Zap, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FACILITIES, COURSES } from '../data/instituteData';

export const FacilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-[#0c2d6b]" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#0c2d6b]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#0c2d6b]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#0c2d6b]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#92640b]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#047857]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#0c2d6b]" />;
    }
  };

  const ditCourse = COURSES.find(c => c.id === 'dit');

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white text-[#0f172a] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0c2d6b] uppercase mb-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#d4af37]" />
            <span>Campus Infrastructure</span>
            <span className="text-slate-300">/</span>
            <span>Educational Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0c2d6b] font-heading uppercase">
            Campus Facilities & Training Labs
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans">
            Center of Excellence, Kotri is purpose-built to provide certified, reliable, and uninterrupted vocational education with modern lab systems.
          </p>
        </div>

        {/* Media Showcase: Dual DIT Computer Labs (Boys & Girls) */}
        {ditCourse && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* DIT Lab Boys */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={ditCourse.media.primary}
                  alt="DIT Computer Lab - Boys"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a40]/90 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] bg-[#0c2d6b] px-2.5 py-0.5 rounded border border-[#d4af37]/30">
                    Real Institute Media
                  </span>
                  <h4 className="text-lg font-bold font-heading mt-1">
                    Modern DIT Computer Lab — Boys Practical Session
                  </h4>
                  <p className="text-xs text-neutral-300 font-sans">
                    Individual PC workstations, high-speed typing and software instruction.
                  </p>
                </div>
              </div>
            </div>

            {/* DIT Lab Girls */}
            {ditCourse.media.secondary && (
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md group">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={ditCourse.media.secondary}
                    alt="DIT Computer Lab - Girls"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a40]/90 via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] bg-[#0c2d6b] px-2.5 py-0.5 rounded border border-[#d4af37]/30">
                      Real Institute Media
                    </span>
                    <h4 className="text-lg font-bold font-heading mt-1">
                      Modern DIT Computer Lab — Girls Practical Session
                    </h4>
                    <p className="text-xs text-neutral-300 font-sans">
                      Dedicated female learning environment with supervised IT instruction.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 6 Official Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 card-shadow-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    {getIcon(fac.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0c2d6b] bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    {fac.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0c2d6b] font-heading">
                  {fac.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  {fac.subtitle}
                </p>

                <p className="text-sm text-slate-600 font-sans mt-3 leading-relaxed">
                  {fac.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Campus Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
