import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Play, ShieldCheck } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';
import { StevtaLogo } from './StevtaLogo';
import { INSTITUTE_INFO } from '../data/instituteData';

interface NavbarProps {
  onOpenWelcomeVideo: () => void;
  onOpenAdmissionModal: (courseName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWelcomeVideo,
  onOpenAdmissionModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Affiliation', href: '#affiliation' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Banner: STEVTA Affiliation & Contact */}
      <div className="bg-[#071a40] text-white border-b border-white/10 px-4 sm:px-8 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-300 font-medium">
              Affiliated with STEVTA, Government of Sindh
            </span>
            <span className="hidden md:inline text-neutral-500">|</span>
            <span className="hidden md:inline text-[#d4af37] font-semibold">
              &ldquo;Skills is the Key to Success&rdquo;
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenWelcomeVideo}
              className="flex items-center gap-1.5 text-[#d4af37] hover:text-white transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Welcome Video</span>
            </button>

            <span className="text-neutral-600">|</span>

            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="flex items-center gap-1 text-neutral-200 hover:text-white font-mono"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{INSTITUTE_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`px-4 sm:px-8 py-3 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c2d6b]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10'
            : 'bg-[#0c2d6b] border-b border-white/15'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <OfficialLogo size={48} />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-tight font-heading group-hover:text-amber-200 transition-colors">
                CENTER OF EXCELLENCE
              </span>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-extrabold tracking-widest text-[#d4af37] uppercase">
                  KOTRI
                </span>
                <span className="text-neutral-300 text-[11px]">
                  (Old name: TTC Kotri)
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-[#d4af37] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs: Call & WhatsApp & Admissions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INSTITUTE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/40 text-[#25d366] text-xs font-bold transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenAdmissionModal()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d4af37] hover:bg-[#e5a925] text-[#071a40] text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Apply for Admission</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="p-2 rounded-lg bg-white/10 text-white"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/15 pb-2 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-white/15 flex flex-col gap-2">
              <a
                href={INSTITUTE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25d366] text-white text-xs font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp for Admission (03153705414)</span>
              </a>

              <a
                href={`tel:${INSTITUTE_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 text-white text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Now: 03153705414</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionModal();
                }}
                className="w-full py-2.5 rounded-lg bg-[#d4af37] text-[#071a40] text-xs font-extrabold uppercase tracking-wider"
              >
                Apply / Contact for Admission
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
