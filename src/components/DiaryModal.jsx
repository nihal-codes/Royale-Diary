import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../context/AudioContext';
import {
  X,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  Layers,
  Diamond
} from 'lucide-react';

export const DiaryModal = ({
  card,
  isOpen = false,
  onClose,
  onPrevDay,
  onNextDay,
  hasPrev = false,
  hasNext = false
}) => {
  const { playFlip } = useAudio();

  // Keyboard listener for Escape & Arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onPrevDay();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNextDay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasPrev, hasNext, onClose, onPrevDay, onNextDay]);

  if (!isOpen || !card) return null;

  const suitColor = card.suit === '♥' || card.suit === '♦' ? 'text-amber-400' : 'text-emerald-400';

  return (
    <AnimatePresence>
      {/* Backdrop overlay */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Modal Container formatted like a massive Royal Playing Card */}
        <motion.div
          className="relative w-full max-w-2xl rounded-3xl border-2 border-amber-400/80 bg-stone-950 shadow-[0_0_80px_rgba(234,179,8,0.35)] overflow-hidden flex flex-col pointer-events-auto"
          initial={{ scale: 0.88, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.88, y: 40, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Outer Brass Metallic Accent Frame */}
          <div className="absolute inset-2 rounded-2xl border border-amber-500/30 pointer-events-none" />

          {/* Modal Header Bar */}
          <div className="relative px-4 py-3 sm:px-6 sm:py-4 border-b border-amber-500/30 bg-linear-to-r from-stone-900 via-zinc-900 to-emerald-950/80 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              {/* Corner Suit Badge */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-stone-950 border border-amber-400/60 flex items-center justify-center font-cinzel font-black text-amber-300 text-sm sm:text-lg shadow-inner shrink-0">
                {card.rank}{card.suit}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="px-1.5 py-0.25 sm:px-2 sm:py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    DAY {card.day < 10 ? `0${card.day}` : card.day} OF 24
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400/80 uppercase truncate">
                    {card.category}
                  </span>
                </div>
                <h2 className="font-cinzel text-sm sm:text-lg font-bold text-amber-100 line-clamp-1 mt-0.5">
                  {card.title}
                </h2>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-stone-900 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:text-amber-100 transition-all cursor-pointer shrink-0"
              title="Close (Esc)"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-3 sm:p-6 overflow-y-auto space-y-3 sm:space-y-5 text-sm text-amber-100/90 max-h-[58vh] sm:max-h-[68vh]">
            
            {/* Executive Summary */}
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-stone-900/90 border border-amber-500/30">
              <h4 className="font-cinzel text-[11px] sm:text-xs font-bold text-amber-400 uppercase mb-1 sm:mb-1.5 flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" /> Executive Summary
              </h4>
              <p className="leading-relaxed text-amber-50/90 font-sans text-xs sm:text-sm">
                {card.summary}
              </p>
            </div>

            {/* Clean Bulleted Points Section */}
            {card.bulletPoints && card.bulletPoints.length > 0 && (
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-2 sm:space-y-2.5">
                <h4 className="font-cinzel text-[11px] sm:text-xs font-bold text-emerald-300 uppercase mb-1 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> Training Key Points & Logged Highlights
                </h4>
                <ul className="space-y-1.5 sm:space-y-2 font-sans text-xs sm:text-sm text-emerald-50/90">
                  {card.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <Diamond className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0 mt-0.5 fill-amber-400/30" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Learned (Casino Chip Badges) */}
            <div>
              <h4 className="font-cinzel text-[11px] sm:text-xs font-bold text-amber-400 uppercase mb-2 sm:mb-2.5 flex items-center gap-1.5 sm:gap-2">
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> Mastered Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {card.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl bg-linear-to-r from-emerald-950 to-stone-900 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] sm:text-xs shadow-md flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Time Logged Metric ONLY */}
            {card.stats?.hours && (
              <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/80 border border-amber-500/20 text-center flex items-center justify-center gap-2 sm:gap-3">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-[10px] sm:text-xs font-mono text-amber-300/80 uppercase">TIME LOGGED:</span>
                <span className="font-cinzel font-extrabold text-amber-100 text-xs sm:text-sm">{card.stats.hours} Hours</span>
              </div>
            )}
          </div>

          {/* Modal Footer Controls */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 border-t border-amber-500/30 bg-stone-900/80 flex items-center justify-end">
            <div className="flex items-center gap-2">
              <button
                disabled={!hasPrev}
                onClick={onPrevDay}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border text-[10px] sm:text-xs font-mono font-semibold flex items-center gap-1 sm:gap-1.5 transition-all ${
                  hasPrev
                    ? 'bg-stone-800 hover:bg-amber-500/20 border-amber-500/40 text-amber-200 cursor-pointer'
                    : 'bg-stone-950 border-stone-800 text-stone-600 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> PREV DAY
              </button>
              <button
                disabled={!hasNext}
                onClick={onNextDay}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border text-[10px] sm:text-xs font-mono font-semibold flex items-center gap-1 sm:gap-1.5 transition-all ${
                  hasNext
                    ? 'bg-stone-800 hover:bg-amber-500/20 border-amber-500/40 text-amber-200 cursor-pointer'
                    : 'bg-stone-950 border-stone-800 text-stone-600 cursor-not-allowed opacity-50'
                }`}
              >
                NEXT DAY <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
