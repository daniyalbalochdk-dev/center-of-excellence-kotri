import React from 'react';

interface StevtaLogoProps {
  className?: string;
  size?: number | string;
  showAffiliationText?: boolean;
}

export const StevtaLogo: React.FC<StevtaLogoProps> = ({
  className = '',
  size = 54,
  showAffiliationText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official STEVTA Forest Green Logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 select-none"
        aria-label="Sindh Technical Education & Vocational Training Authority (STEVTA)"
      >
        <defs>
          <linearGradient id="stevtaGreen" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>

        {/* Map Silhouette & Protective Palm Arc */}
        <path
          d="M 40,140 C 25,120 18,90 28,60 C 38,30 65,18 95,20 C 130,22 170,40 180,80 C 185,100 175,130 155,145 C 130,165 70,165 40,140 Z"
          fill="none"
          stroke="#047857"
          strokeWidth="6"
        />

        {/* Radiating Educational Rays */}
        <g stroke="#047857" strokeWidth="2.5">
          <line x1="100" y1="88" x2="60" y2="60" />
          <line x1="100" y1="88" x2="80" y2="50" />
          <line x1="100" y1="88" x2="100" y2="45" />
          <line x1="100" y1="88" x2="120" y2="50" />
          <line x1="100" y1="88" x2="140" y2="60" />
        </g>

        {/* Open Book Emblem */}
        <path
          d="M 68,96 Q 100,88 100,94 Q 100,88 132,96 L 132,118 Q 100,110 100,116 Q 100,110 68,118 Z"
          fill="#047857"
        />

        {/* Vocational Trade Icon Badges */}
        {/* 1. Laptop / IT */}
        <circle cx="68" cy="55" r="14" fill="#047857" />
        <rect x="61" y="49" width="14" height="9" rx="1" fill="#ffffff" />
        <rect x="59" y="59" width="18" height="2" rx="0.5" fill="#ffffff" />

        {/* 2. Sewing Machine / Fashion */}
        <circle cx="100" cy="38" r="14" fill="#047857" />
        <path d="M 94,36 H 106 V 43 H 94 Z M 97,32 H 105" stroke="#ffffff" strokeWidth="1.5" fill="none" />

        {/* 3. House / Drafting & Civil */}
        <circle cx="132" cy="55" r="14" fill="#047857" />
        <path d="M 126,59 L 132,50 L 138,59 V 62 H 126 Z" fill="#ffffff" />

        {/* 4. Wrench & Gear / Mechanical */}
        <circle cx="152" cy="88" r="13" fill="#047857" />
        <path d="M 148,84 L 156,92 M 156,84 L 148,92" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

        {/* 5. Electrical / Electronics */}
        <circle cx="146" cy="122" r="13" fill="#047857" />
        <path d="M 146,116 L 142,122 H 148 L 144,128" stroke="#ffffff" strokeWidth="1.8" fill="none" />

        {/* 6. Precision Machining */}
        <circle cx="48" cy="88" r="13" fill="#047857" />
        <circle cx="48" cy="88" r="5" stroke="#ffffff" strokeWidth="2" fill="none" />

        {/* 7. Crafting */}
        <circle cx="54" cy="122" r="13" fill="#047857" />
        <rect x="49" y="117" width="10" height="10" stroke="#ffffff" strokeWidth="1.5" fill="none" />

        {/* SINDH TEVTA Text */}
        <text
          x="100"
          y="172"
          textAnchor="middle"
          fill="#047857"
          fontSize="19"
          fontWeight="900"
          fontFamily="'Outfit', sans-serif"
          letterSpacing="2.5"
        >
          SINDH
        </text>
        <text
          x="100"
          y="192"
          textAnchor="middle"
          fill="#047857"
          fontSize="22"
          fontWeight="900"
          fontFamily="'Outfit', sans-serif"
          letterSpacing="4"
        >
          TEVTA
        </text>
      </svg>

      {showAffiliationText && (
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-[#047857] leading-tight">
            Affiliated with STEVTA
          </span>
          <span className="text-[11px] text-neutral-500 font-medium">
            Sindh Technical Education & Vocational Training Authority · Govt. of Sindh
          </span>
        </div>
      )}
    </div>
  );
};
