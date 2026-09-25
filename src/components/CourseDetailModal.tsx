import React, { useState } from 'react';
import { X, Clock, Users, Calendar, Banknote, CheckCircle2, Phone, MessageCircle, Play, ShieldCheck, ArrowRight } from 'lucide-react';
import { Course, INSTITUTE_INFO } from '../data/instituteData';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (courseName: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  onApply
}) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'primary' | 'secondary' | 'video'>('primary');
  const [isPlayingSimulatedVideo, setIsPlayingSimulatedVideo] = useState(false);

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-white text-[#0f172a] shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0c2d6b] text-white">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d4af37] bg-white/10 px-2.5 py-0.5 rounded">
              {course.code}
            </span>
            <span className="text-xs font-medium text-neutral-300">
              {course.category} · STEVTA Curriculum
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Display Area */}
        <div className="relative bg-slate-950 overflow-hidden">
          {/* If DIT: Tab switcher for Boys Lab & Girls Lab */}
          {course.id === 'dit' && course.media.secondary && (
            <div className="absolute top-3 left-3 z-20 flex gap-2">
              <button
                onClick={() => setActiveMediaTab('primary')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all shadow-md ${
                  activeMediaTab === 'primary'
                    ? 'bg-[#0c2d6b] text-white border border-[#d4af37]'
                    : 'bg-black/60 text-neutral-300 hover:text-white'
                }`}
              >
                Boys Lab Session
              </button>
              <button
                onClick={() => setActiveMediaTab('secondary')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all shadow-md ${
                  activeMediaTab === 'secondary'
                    ? 'bg-[#0c2d6b] text-white border border-[#d4af37]'
                    : 'bg-black/60 text-neutral-300 hover:text-white'
                }`}
              >
                Girls Lab Session
              </button>
            </div>
          )}

          {/* If Electrical: Video presentation showcase */}
          {course.id === 'electrical' && (
            <div className="absolute top-3 left-3 z-20 flex gap-2">
              <button
                onClick={() => {
                  setActiveMediaTab('primary');
                  setIsPlayingSimulatedVideo(false);
                }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all shadow-md ${
                  activeMediaTab === 'primary' && !isPlayingSimulatedVideo
                    ? 'bg-[#0c2d6b] text-white border border-[#d4af37]'
                    : 'bg-black/60 text-neutral-300 hover:text-white'
                }`}
              >
                Workshop Photo
              </button>
              <button
                onClick={() => {
                  setActiveMediaTab('video');
                  setIsPlayingSimulatedVideo(true);
                }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all shadow-md flex items-center gap-1.5 ${
                  isPlayingSimulatedVideo
                    ? 'bg-[#dc2626] text-white border border-white'
                    : 'bg-black/60 text-[#d4af37] hover:text-white'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span>electrical.mp4 Training</span>
              </button>
            </div>
          )}

          {/* Main Visual Render */}
          <div className="relative h-64 sm:h-80 w-full">
            {activeMediaTab === 'secondary' && course.media.secondary ? (
              <img
                src={course.media.secondary}
                alt={course.media.secondaryCaption || course.name}
                className="w-full h-full object-cover"
              />
            ) : isPlayingSimulatedVideo ? (
              /* Simulated interactive video player for electrical.mp4 */
              <div className="relative w-full h-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-white">
                <img
                  src={course.media.primary}
                  alt="Electrical Training"
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="relative z-10 flex flex-col items-center max-w-md">
                  <div className="w-14 h-14 rounded-full bg-[#dc2626] text-white flex items-center justify-center mb-3 shadow-lg animate-pulse">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <h4 className="text-lg font-bold font-heading">
                    electrical.mp4 — Practical Workshop Training
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    Authentic footage from Center of Excellence Kotri electrical department: conduit bending, wiring distribution boards, and safety testing.
                  </p>
                  <span className="mt-3 text-[11px] font-mono text-[#d4af37] bg-black/60 px-3 py-1 rounded-full border border-white/10">
                    Resolution: High Definition · Audio: Workshop Practice
                  </span>
                </div>
              </div>
            ) : (
              <img
                src={course.media.primary}
                alt={course.media.caption}
                className="w-full h-full object-cover"
              />
            )}

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white text-xs font-mono flex items-center justify-between">
              <span>
                {activeMediaTab === 'secondary'
                  ? course.media.secondaryCaption
                  : isPlayingSimulatedVideo
                  ? 'Playing: electrical.mp4 (Practical Training)'
                  : course.media.caption}
              </span>
              <span className="text-[#d4af37]">Real Institute Media</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Description */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c2d6b] font-heading leading-tight">
              {course.name}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              {course.description}
            </p>
          </div>

          {/* Key Course Parameters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#0c2d6b]" />
                <span className="text-[11px] uppercase font-mono font-semibold">Duration</span>
              </div>
              <p className="text-base font-bold text-[#0c2d6b] font-heading">{course.duration}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Users className="w-3.5 h-3.5 text-[#0c2d6b]" />
                <span className="text-[11px] uppercase font-mono font-semibold">Eligibility</span>
              </div>
              <p className="text-base font-bold text-[#0c2d6b] font-heading">{course.eligibility}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#0c2d6b]" />
                <span className="text-[11px] uppercase font-mono font-semibold">Shift(s)</span>
              </div>
              <p className="text-base font-bold text-[#0c2d6b] font-heading">{course.shifts}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center gap-1.5 text-amber-800 mb-1">
                <Banknote className="w-3.5 h-3.5 text-[#92640b]" />
                <span className="text-[11px] uppercase font-mono font-bold">Admission Fee</span>
              </div>
              <p className="text-lg font-black text-[#92640b] font-heading">
                PKR {course.admissionFee.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Admission Schedule Banner */}
          <div className="p-4 rounded-xl bg-[#0c2d6b]/5 border border-[#0c2d6b]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-[#0c2d6b] uppercase tracking-wide block">
                Admission Period
              </span>
              <p className="text-slate-700 font-medium text-sm mt-0.5">
                {course.admissionPeriod}
              </p>
            </div>

            <div className="sm:text-right">
              <span className="font-bold text-[#0c2d6b] uppercase tracking-wide block">
                Classes Start
              </span>
              <p className="text-slate-700 font-medium text-sm mt-0.5">
                {course.classesStart}
              </p>
            </div>
          </div>

          {/* Curriculum & Practical Features */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
              Practical Training Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs: Direct Contact & Application */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="px-4 py-2.5 rounded-lg border border-slate-300 hover:border-[#0c2d6b] text-[#0c2d6b] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call for Admission</span>
              </a>

              <a
                href={INSTITUTE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp for Admission</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onApply(course.name);
              }}
              className="px-6 py-2.5 rounded-lg bg-[#0c2d6b] hover:bg-[#1852b4] text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Submit Application Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
