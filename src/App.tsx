import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionScheduleSection } from './components/AdmissionScheduleSection';
import { AffiliationSection } from './components/AffiliationSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WelcomeVideoModal } from './components/WelcomeVideoModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { AdmissionModal } from './components/AdmissionModal';
import { Course, INSTITUTE_INFO } from './data/instituteData';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  // Show welcome video first when visitor opens the website
  const [showWelcomeVideo, setShowWelcomeVideo] = useState<boolean>(() => {
    // Only check sessionStorage to avoid annoying users on internal page interactions
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('coe_kotri_seen_welcome');
      return !hasSeen;
    }
    return true;
  });

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [preselectedCourseForAdmission, setPreselectedCourseForAdmission] = useState<string | undefined>(undefined);

  const handleCloseWelcome = () => {
    setShowWelcomeVideo(false);
    sessionStorage.setItem('coe_kotri_seen_welcome', 'true');
  };

  const handleOpenWelcome = () => {
    setShowWelcomeVideo(true);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setIsDetailModalOpen(true);
  };

  const handleOpenAdmission = (courseName?: string) => {
    setPreselectedCourseForAdmission(courseName);
    setIsAdmissionModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#0c2d6b] selection:text-white flex flex-col font-sans">
      {/* 1. Welcome Video (First Experience on open) */}
      <WelcomeVideoModal
        isOpen={showWelcomeVideo}
        onClose={handleCloseWelcome}
      />

      {/* 2. Top Navigation Bar */}
      <Navbar
        onOpenWelcomeVideo={handleOpenWelcome}
        onOpenAdmissionModal={handleOpenAdmission}
      />

      {/* Main Website Flow */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection
          onOpenWelcomeVideo={handleOpenWelcome}
          onOpenAdmissionModal={handleOpenAdmission}
        />

        {/* 4. About Center of Excellence */}
        <AboutSection />

        {/* 5. Courses Section */}
        <CoursesSection
          onSelectCourse={handleSelectCourse}
          onOpenAdmissionModal={handleOpenAdmission}
        />

        {/* 6. Facilities Section */}
        <FacilitiesSection />

        {/* 7. Admission Schedule Section */}
        <AdmissionScheduleSection
          onOpenAdmissionModal={handleOpenAdmission}
        />

        {/* 8. Affiliation (STEVTA & Govt. of Sindh) */}
        <AffiliationSection />

        {/* 9. Location & Interactive Map Section */}
        <LocationSection />

        {/* 10. Contact & Admission CTA Section */}
        <ContactSection
          onOpenAdmissionModal={handleOpenAdmission}
        />
      </main>

      {/* 11. Footer */}
      <Footer
        onOpenWelcomeVideo={handleOpenWelcome}
        onOpenAdmissionModal={handleOpenAdmission}
      />

      {/* Modals */}
      <CourseDetailModal
        course={selectedCourse}
        isOpen={isDetailModalOpen}
        onClose={() => {
          setIsDetailModalOpen(false);
          setSelectedCourse(null);
        }}
        onApply={(courseName) => handleOpenAdmission(courseName)}
      />

      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
        preselectedCourse={preselectedCourseForAdmission}
      />

      {/* Floating Instant Action Buttons (Mobile & Desktop) */}
      <aside aria-label="Direct Admission Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        <a
          href={INSTITUTE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto p-3.5 rounded-full bg-[#25d366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white"
          aria-label="WhatsApp for Admission"
          title="WhatsApp for Admission"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <a
          href={`tel:${INSTITUTE_INFO.phone}`}
          className="pointer-events-auto sm:hidden p-3 rounded-full bg-[#0c2d6b] text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white"
          aria-label="Call Helpline"
          title="Call Now"
        >
          <Phone className="w-5 h-5 text-[#d4af37]" />
        </a>
      </aside>
    </div>
  );
}
