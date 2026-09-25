import React from 'react';
import logoImg from '../assets/images/center of excellence logo.png';

interface OfficialLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  className = '',
  size = 56,
  showText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Center of Excellence Logo Image */}
      <img
        src={logoImg}
        alt="Center of Excellence, Kotri Official Logo"
        style={{
          width: typeof size === 'number' ? `${size}px` : size,
          height: 'auto',
          maxHeight: typeof size === 'number' ? `${Math.round(size * 1.25)}px` : size
        }}
        className="object-contain select-none shrink-0 drop-shadow-md rounded-sm"
      />

      {/* Optional Wordmark Display */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight font-heading">
            CENTER OF EXCELLENCE
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#d4af37] uppercase">
            KOTRI <span className="text-neutral-400 font-normal">· (Old name: TTC Kotri)</span>
          </span>
        </div>
      )}
    </div>
  );
};
