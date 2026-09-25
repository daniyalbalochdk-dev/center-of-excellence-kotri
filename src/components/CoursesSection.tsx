import React, { useState } from 'react';
import { Clock, Users, Calendar, Banknote, ArrowUpRight, MessageCircle, Phone, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { COURSES, Course, INSTITUTE_INFO } from '../data/instituteData';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onOpenAdmissionModal: (courseName?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourse,
  onOpenAdmissionModal
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Digital & IT', 'Industrial Technical', 'Specialized Trade', 'Languages'];

  const filteredCourses = filterCategory === 'All'
    ? COURSES
    : COURSES.filter((c) => c.category === filterCategory);

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#f8fafc] text-[#0f172a] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0c2d6b] uppercase mb-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#dc2626]" />
              <span>Certified Technical Education</span>
              <span className="text-slate-300">/</span>
              <span>7 Programs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0c2d6b] font-heading uppercase">
              Vocational & Technical Courses
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans max-w-2xl">
              Practical technical training programs accredited under Sindh Technical Education & Vocational Training Authority (STEVTA), Government of Sindh.
            </p>
          </div>

          {/* Admission Contact Hotline Indicator */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm shrink-0">
            <div className="w-10 h-10 rounded-lg bg-[#0c2d6b] text-[#d4af37] flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Admission Inquiries
              </p>
              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="text-sm font-bold text-[#0c2d6b] hover:text-[#1852b4] font-mono"
              >
                {INSTITUTE_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#0c2d6b] text-white shadow-md shadow-blue-950/20'
                  : 'bg-white text-slate-600 hover:text-[#0c2d6b] border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat} {cat === 'All' ? `(${COURSES.length})` : ''}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden card-shadow card-shadow-hover flex flex-col justify-between"
            >
              {/* Card Top: Media Image */}
              <div>
                <div
                  className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => onSelectCourse(course)}
                >
                  <img
                    src={course.media.primary}
                    alt={course.media.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a40]/90 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-[#0c2d6b]/90 text-white border border-white/20 backdrop-blur-md">
                      {course.code}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/90 text-[#0c2d6b] backdrop-blur-md shadow-sm">
                      {course.duration}
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] font-mono text-[#d4af37] truncate">
                      {course.media.caption}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  {/* Category Tag */}
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#047857] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {course.category}
                  </span>

                  {/* Course Title */}
                  <h3
                    onClick={() => onSelectCourse(course)}
                    className="text-lg sm:text-xl font-bold text-[#0c2d6b] font-heading mt-2 group-hover:text-[#1852b4] transition-colors cursor-pointer leading-snug"
                  >
                    {course.name}
                  </h3>

                  {/* Parameters Grid */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs border-y border-slate-100 py-3">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Eligibility</span>
                      <span className="font-semibold text-slate-800">{course.eligibility}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Shift(s)</span>
                      <span className="font-semibold text-slate-800">{course.shifts}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Admission Fee</span>
                      <span className="font-bold text-[#92640b] font-mono">
                        PKR {course.admissionFee.toLocaleString()}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Admission Period</span>
                      <span className="font-medium text-slate-700 truncate block" title={course.admissionPeriod}>
                        {course.admissionPeriod.split('|')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Brief Description */}
                  <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-100/60 mt-2">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="text-xs font-bold text-[#0c2d6b] hover:text-[#1852b4] flex items-center gap-1 group/btn cursor-pointer py-1"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>

                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://wa.me/923153705414?text=Assalam-o-Alaikum,%20I%20am%20inquiring%20about%20admission%20for%20${encodeURIComponent(course.name)}%20at%20Center%20of%20Excellence,%20Kotri.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                    title="WhatsApp Inquiry for this course"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onOpenAdmissionModal(course.name)}
                    className="px-3.5 py-2 rounded-lg bg-[#0c2d6b] hover:bg-[#1852b4] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    Apply Inquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
