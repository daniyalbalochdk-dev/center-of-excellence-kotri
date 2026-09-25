import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COURSES, INSTITUTE_INFO } from '../data/instituteData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  preselectedCourse
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(preselectedCourse || COURSES[0].name);
  const [shiftPreference, setShiftPreference] = useState('Morning');
  const [gender, setGender] = useState('Male');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setSelectedCourse(preselectedCourse);
    }
  }, [preselectedCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*Center of Excellence, Kotri — Admission Inquiry*%0A%0A*Name:* ${encodeURIComponent(fullName)}%0A*Phone:* ${encodeURIComponent(phoneNumber)}%0A*Course:* ${encodeURIComponent(selectedCourse)}%0A*Shift:* ${encodeURIComponent(shiftPreference)}%0A*Gender:* ${encodeURIComponent(gender)}%0A*Remarks:* ${encodeURIComponent(notes || 'N/A')}`;
    window.open(`https://wa.me/923153705414?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl my-8 rounded-2xl bg-white text-[#0f172a] shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0c2d6b] text-white">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#d4af37]">
              Admissions Portal 2026
            </span>
            <h3 className="text-lg font-bold font-heading">
              Application & Admission Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Success State */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-bold text-[#0c2d6b] font-heading">
              Inquiry Registered Successfully
            </h4>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{fullName}</strong>. Your inquiry for <strong>{selectedCourse}</strong> at Center of Excellence, Kotri has been logged.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-mono space-y-1.5 text-slate-700">
              <p><strong>Candidate:</strong> {fullName}</p>
              <p><strong>Contact:</strong> {phoneNumber}</p>
              <p><strong>Program:</strong> {selectedCourse}</p>
              <p><strong>Shift:</strong> {shiftPreference}</p>
              <p><strong>Location:</strong> TB Sanitorium Road, Kotri Phatak, Kotri</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleSendViaWhatsApp}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Forward to Official WhatsApp</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0c2d6b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1852b4]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Application Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-slate-600 mb-1">
                Candidate Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Muhammad Ali"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0c2d6b] focus:ring-1 focus:ring-[#0c2d6b]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-slate-600 mb-1">
                Active Mobile / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="03XX-XXXXXXX"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0c2d6b] focus:ring-1 focus:ring-[#0c2d6b]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-600 mb-1">
                  Selected Course *
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0c2d6b]"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-600 mb-1">
                  Preferred Shift
                </label>
                <select
                  value={shiftPreference}
                  onChange={(e) => setShiftPreference(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#0c2d6b]"
                >
                  <option value="Morning">Morning Shift</option>
                  <option value="Evening">Evening Shift</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-slate-600 mb-1">
                Gender
              </label>
              <div className="flex gap-4 pt-1">
                <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value)}
                    className="accent-[#0c2d6b]"
                  />
                  <span>Male (Boys)</span>
                </label>
                <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                    className="accent-[#0c2d6b]"
                  />
                  <span>Female (Girls)</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-slate-600 mb-1">
                Questions or Previous Qualifications (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention matriculation, intermediate, or any questions..."
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#0c2d6b]"
              />
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500 font-sans">
                Official Helpline: {INSTITUTE_INFO.phoneDisplay}
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0c2d6b] hover:bg-[#1852b4] text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
