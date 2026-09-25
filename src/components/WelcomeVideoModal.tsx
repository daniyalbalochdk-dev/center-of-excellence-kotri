import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, ArrowRight, Play, RotateCcw } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';
import { StevtaLogo } from './StevtaLogo';

interface WelcomeVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WelcomeVideoModal: React.FC<WelcomeVideoModalProps> = ({
  isOpen,
  onClose
}) => {
  const [phase, setPhase] = useState<'intro_trails' | 'title_kotri' | 'tagline' | 'logo_reveal'>('intro_trails');
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Play delicate audio chime on user interaction
  const playChime = (freq: number) => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.3);
    } catch {
      // AudioContext not allowed or not supported
    }
  };

  // Timeline sequence matching the welcome.mp4 video uploaded by user
  useEffect(() => {
    if (!isOpen) return;

    setPhase('intro_trails');
    setProgress(0);

    const startTime = Date.now();
    const totalDuration = 7500; // 7.5 seconds cinematic sequence

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(pct);

      if (elapsed < 2000) {
        setPhase('intro_trails');
      } else if (elapsed < 4200) {
        setPhase('title_kotri');
      } else if (elapsed < 5800) {
        setPhase('tagline');
      } else {
        setPhase('logo_reveal');
      }

      if (elapsed >= totalDuration) {
        clearInterval(progressInterval);
        onClose();
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isOpen, onClose]);

  // Canvas 3D particle light streaks matching the exact welcome.mp4 video
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle streaks and 3D floating blue/gold geometric glass slabs
    interface Particle {
      x: number;
      y: number;
      z: number;
      speed: number;
      color: string;
      size: number;
      length: number;
    }

    const particles: Particle[] = Array.from({ length: 85 }, () => ({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 1.5,
      z: Math.random() * 1000 + 100,
      speed: Math.random() * 15 + 10,
      color: Math.random() > 0.4 ? '#d4af37' : '#38bdf8',
      size: Math.random() * 2 + 1,
      length: Math.random() * 60 + 20
    }));

    // Floating metallic plates (from the video)
    interface Plate {
      x: number;
      y: number;
      z: number;
      w: number;
      h: number;
      speed: number;
      rotX: number;
      rotY: number;
    }

    const plates: Plate[] = Array.from({ length: 18 }, () => ({
      x: (Math.random() - 0.5) * width * 1.2,
      y: (Math.random() - 0.5) * height * 1.2,
      z: Math.random() * 800 + 200,
      w: Math.random() * 120 + 60,
      h: Math.random() * 80 + 40,
      speed: Math.random() * 4 + 2,
      rotX: Math.random() * 0.4,
      rotY: Math.random() * 0.4
    }));

    const render = () => {
      // Deep Royal Blue canvas fill with subtle motion trail
      ctx.fillStyle = 'rgba(7, 26, 64, 0.35)';
      ctx.fillRect(0, 0, width, height);

      const fov = 400;
      const cx = width / 2;
      const cy = height / 2;

      // Draw light particles / speed lines
      particles.forEach((p) => {
        p.z -= p.speed;
        if (p.z <= 10) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        const scale = fov / p.z;
        const sx = cx + p.x * scale;
        const sy = cy + p.y * scale;

        // Tail calculation
        const tailZ = p.z + p.length;
        const tailScale = fov / tailZ;
        const tx = cx + p.x * tailScale;
        const ty = cy + p.y * tailScale;

        ctx.strokeStyle = p.color;
        ctx.lineWidth = Math.max(0.5, p.size * scale);
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(sx, sy);
        ctx.stroke();

        // Tip glow
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.8, p.size * scale * 0.8), 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw floating 3D glass & metallic perspective panels
      plates.forEach((plate) => {
        plate.z -= plate.speed;
        if (plate.z <= 20) plate.z = 900;

        const scale = fov / plate.z;
        const sx = cx + plate.x * scale;
        const sy = cy + plate.y * scale;
        const pw = plate.w * scale;
        const ph = plate.h * scale;

        ctx.save();
        ctx.translate(sx, sy);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = 1;
        ctx.fillStyle = 'rgba(12, 45, 107, 0.35)';
        ctx.strokeRect(-pw / 2, -ph / 2, pw, ph);
        ctx.fillRect(-pw / 2, -ph / 2, pw, ph);

        // Gold highlight border
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
        ctx.beginPath();
        ctx.moveTo(-pw / 2, -ph / 2);
        ctx.lineTo(pw / 2, -ph / 2);
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071a40] overflow-hidden select-none">
        {/* Dynamic 3D Perspective Canvas matching welcome.mp4 */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Ambient Radial Spotlight and Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#071a40]/60 to-[#030d22]/90 pointer-events-none" />

        {/* Top Control Bar: Audio & Skip Button */}
        <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-widest text-[#d4af37] uppercase bg-[#0c2d6b]/80 border border-[#d4af37]/40 px-3 py-1 rounded-full backdrop-blur-md">
              Official Welcome Presentation
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                const nextMuted = !isMuted;
                setIsMuted(nextMuted);
                if (!nextMuted) playChime(587.33); // D5 chime
              }}
              className="p-2.5 rounded-full border border-white/20 bg-black/40 hover:bg-black/70 text-white/80 hover:text-white transition-all backdrop-blur-md"
              title={isMuted ? 'Turn Sound On' : 'Mute Sound'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#d4af37]" />}
            </button>

            {/* Skip / Continue to Website Button */}
            <button
              onClick={() => {
                playChime(659.25);
                onClose();
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d4af37] hover:bg-[#e5a925] text-[#071a40] text-xs font-bold uppercase tracking-wider shadow-lg shadow-black/40 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
            >
              <span>Skip / Continue to Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Stage: Phased Dynamic Visual Experience */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[460px]">
          {phase === 'intro_trails' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full border-2 border-[#d4af37] animate-ping opacity-30 absolute inset-0" />
                <OfficialLogo size={96} />
              </div>
              <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#38bdf8] mb-2">
                Government of Sindh · STEVTA
              </p>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-wider font-heading uppercase">
                Welcome to
              </h2>
            </motion.div>
          )}

          {phase === 'title_kotri' && (
            <motion.div
              key="title"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              {/* Rotating orbital ring from the video */}
              <div className="relative flex items-center justify-center mb-4">
                <div className="absolute w-[280px] sm:w-[420px] h-[70px] border border-[#d4af37]/60 rounded-[100%] rotate-[-12deg] shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-pulse" />
                <h1 className="text-3xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-[#cbd5e1] tracking-tight leading-tight uppercase font-heading drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">
                  CENTER OF EXCELLENCE
                </h1>
              </div>

              <div className="flex items-center gap-3 mt-1">
                <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
                <span className="text-3xl sm:text-5xl font-black text-[#dc2626] tracking-[0.25em] font-heading drop-shadow-[0_2px_8px_rgba(220,38,38,0.5)]">
                  KOTRI
                </span>
                <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
              </div>

              <p className="text-xs sm:text-sm font-sans text-neutral-300 mt-4 tracking-widest uppercase">
                (Old name: TTC Kotri)
              </p>
            </motion.div>
          )}

          {phase === 'tagline' && (
            <motion.div
              key="tagline"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37] mb-3">
                Official Institutional Motto
              </span>

              <h2 className="text-2xl sm:text-5xl font-black text-white tracking-wide uppercase font-heading leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
                &ldquo;Skills is the Key to Success&rdquo;
              </h2>

              <p className="font-urdu text-xl sm:text-2xl text-[#fde047] mt-3">
                محنت میں عظمت
              </p>

              <p className="text-xs sm:text-sm font-sans text-neutral-300 max-w-lg mt-4 leading-relaxed">
                Empowering the youth with certified technical, industrial, and IT vocational training under Sindh TEVTA standards.
              </p>
            </motion.div>
          )}

          {phase === 'logo_reveal' && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <OfficialLogo size={120} />
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-4 font-heading">
                CENTER OF EXCELLENCE, KOTRI
              </h3>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-semibold text-[#047857] bg-white px-3 py-0.5 rounded-full">
                  Affiliated with STEVTA
                </span>
                <span className="text-xs text-neutral-300">Government of Sindh</span>
              </div>

              <button
                onClick={() => {
                  playChime(659.25);
                  onClose();
                }}
                className="mt-6 px-8 py-3 rounded-full bg-[#d4af37] hover:bg-[#e5a925] text-[#071a40] text-sm font-bold uppercase tracking-wider shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Enter Campus Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>

        {/* Bottom Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/40">
          <div
            className="h-full bg-gradient-to-r from-[#1852b4] via-[#d4af37] to-[#dc2626] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </AnimatePresence>
  );
};
