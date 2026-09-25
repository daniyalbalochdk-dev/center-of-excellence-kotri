import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Phone, MessageCircle, Clock, Building2, CheckCircle2 } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

export const LocationSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Address-based Google Maps destination query as strictly instructed by prompt
  const destinationQuery = encodeURIComponent(INSTITUTE_INFO.mapQuery);
  const embedUrl = `https://maps.google.com/maps?q=${destinationQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationQuery}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${destinationQuery}`;

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#f8fafc] text-[#0f172a] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0c2d6b] uppercase mb-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#dc2626]" />
              <span>Campus Navigation</span>
              <span className="text-slate-300">/</span>
              <span>Visit Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0c2d6b] font-heading uppercase">
              Our Location & Directions
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans max-w-2xl">
              Visit the official campus of Center of Excellence, Kotri located near Kotri Phatak on TB Sanitorium Road.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#0c2d6b] hover:bg-[#1852b4] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
            >
              <Navigation className="w-4 h-4 text-[#d4af37]" />
              <span>Get Directions</span>
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-[#0c2d6b] text-[#0c2d6b] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Map & Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Address Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 card-shadow space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#dc2626]">
                  Official Campus Address
                </span>
                <h3 className="text-2xl font-black text-[#0c2d6b] font-heading mt-1">
                  CENTER OF EXCELLENCE, KOTRI
                </h3>
                <p className="text-xs font-semibold text-slate-500 font-mono mt-0.5">
                  Old name: TTC Kotri
                </p>
              </div>

              {/* Exact Address Lines */}
              <div className="space-y-3 border-y border-slate-100 py-4 text-sm font-sans">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#0c2d6b]/10 text-[#0c2d6b] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">Street & Junction</span>
                    <p className="font-semibold text-slate-800">
                      TB Sanitorium Road, Kotri Phatak, Kotri
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Prominently located along TB Sanitorium Road, accessible via main Kotri thoroughfare.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-700 shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">Historical Designation</span>
                    <p className="font-semibold text-slate-800">
                      Formerly known as TTC Kotri (Technical Training Center)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">Admissions Helpline</span>
                    <p className="font-bold font-mono text-[#0c2d6b]">
                      {INSTITUTE_INFO.phoneDisplay}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Assistance Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold text-[#0c2d6b] uppercase font-mono mb-1">
                  Need Assistance Finding the Campus?
                </p>
                <p className="text-xs text-slate-600 mb-3">
                  Our admissions office is ready to provide live landmark directions over phone or WhatsApp.
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${INSTITUTE_INFO.phone}`}
                    className="flex-1 py-2 rounded-lg bg-[#0c2d6b] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors hover:bg-[#1852b4]"
                  >
                    Call Helpline
                  </a>
                  <a
                    href={INSTITUTE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-lg bg-[#25d366] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors hover:bg-[#20ba5a]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Google Map */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 card-shadow bg-slate-100 h-[420px] sm:h-[480px]">
              {/* Animated Location Pin Overlay Badge */}
              <div className="absolute top-4 left-4 z-20 p-3 rounded-xl bg-[#0c2d6b]/95 text-white border border-white/20 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-[#dc2626] animate-ping absolute inset-0" />
                  <div className="w-4 h-4 rounded-full bg-[#dc2626] border-2 border-white relative z-10 flex items-center justify-center" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase font-heading text-[#d4af37]">
                    CENTER OF EXCELLENCE, KOTRI
                  </p>
                  <p className="text-[11px] text-neutral-300 font-sans">
                    TB Sanitorium Road, Kotri Phatak
                  </p>
                </div>
              </div>

              {/* Real Interactive Google Map Embed */}
              <iframe
                title="Center of Excellence Kotri Location Map"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
                className="w-full h-full"
              />

              {/* Bottom Quick Bar */}
              <div className="absolute bottom-3 right-3 z-20 flex gap-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white text-[#0c2d6b] text-xs font-bold shadow-md hover:bg-slate-50 transition-colors flex items-center gap-1 border border-slate-200"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Navigate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
