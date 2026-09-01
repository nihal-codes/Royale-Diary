import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../context/AudioContext';
import { Sparkles, ChevronRight } from 'lucide-react';

export const PlayerPosition = ({
  weekData,
  position, // 'top' | 'right' | 'bottom' | 'left'
  isSelected = false,
  isDimmed = false,
  isIntroDealing = false,
  onSelectPlayer
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { playHover, playZoom } = useAudio();

  const handlePlayerClick = (e) => {
    e.stopPropagation();
    if (isIntroDealing) return;
    playZoom();
    onSelectPlayer(weekData.week);
  };

  const handleMouseEnter = () => {
    if (isIntroDealing) return;
    playHover();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Position-specific layout configs around the table:
  // All 4 player spots place the Week Tag ABOVE the cards (flex-col items-center)
  const positionStyles = {
    top: 'top-4 left-1/2 -translate-x-1/2 flex-col items-center text-center',
    right: 'top-1/2 right-12 -translate-y-1/2 flex-col items-center text-center',
    bottom: 'bottom-6 left-1/2 -translate-x-1/2 flex-col items-center text-center',
    left: 'top-1/2 left-12 -translate-y-1/2 flex-col items-center text-center'
  };

  return (
    <motion.div
      className={`absolute z-20 ${positionStyles[position]} will-change-transform flex flex-col items-center justify-center`}
      animate={{
        scale: isIntroDealing ? 0.85 : isSelected ? 1.05 : isHovered ? 1.03 : 1,
        opacity: isIntroDealing ? 0 : isDimmed ? 0.25 : 1
      }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] // Silky smooth royal transition
      }}
      onClick={handlePlayerClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Player Week Badge Header (Centered ABOVE the cards) */}
      <div
        className={`cursor-pointer mb-2.5 px-4 py-2 rounded-xl border backdrop-blur-md transition-all duration-500 ease-out flex items-center justify-center ${
          isSelected
            ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow-[0_0_30px_rgba(234,179,8,0.4)]'
            : isHovered
            ? 'bg-emerald-950/90 border-emerald-400/80 text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.35)]'
            : 'bg-stone-900/85 border-amber-500/30 text-amber-100/80 shadow-lg'
        }`}
      >
        <div className="flex items-center justify-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-stone-950 border border-amber-400/50 flex items-center justify-center font-cinzel font-bold text-amber-400 text-xs shadow-inner">
            W{weekData.week}
          </div>
          <div className="text-center">
            <h3 className="font-cinzel text-xs font-bold tracking-wider uppercase text-amber-200 flex items-center justify-center gap-1.5">
              <span>WEEK {weekData.week}</span>
              {isSelected && <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />}
            </h3>
            <span className="text-[10px] font-mono text-emerald-400/80 block font-semibold">
              6 HAND CARDS • {weekData.cards.length} DAYS LOGGED
            </span>
          </div>

          <ChevronRight
            className={`w-4 h-4 transition-transform duration-500 ease-out ${
              isHovered || isSelected ? 'translate-x-1 text-amber-400' : 'text-amber-500/50'
            }`}
          />
        </div>
      </div>

      {/* Stacked Cards Pile (Centered directly BELOW the week tag) */}
      <div className="relative cursor-pointer h-32.5 w-45 flex items-center justify-center pointer-events-auto">
        {weekData.cards.map((card, idx) => {
          const offset = (idx - 2.5) * 12;
          const rot = (idx - 2.5) * 4.5;

          return (
            <motion.div
              key={card.day}
              className="absolute shadow-xl will-change-transform"
              style={{
                width: '85px',
                height: '120px'
              }}
              animate={{
                x: isHovered ? offset * 1.15 : offset,
                rotate: isHovered ? rot * 1.3 : rot,
                y: isHovered ? -Math.abs(rot) * 0.4 - 4 : 0,
                zIndex: idx
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] // Royal smooth ease
              }}
            >
              <div className="w-full h-full rounded-lg border border-amber-500/50 bg-linear-to-br from-stone-900 via-zinc-950 to-emerald-950 p-1 flex flex-col justify-between shadow-2xl overflow-hidden">
                <div className="inset-1 border border-amber-400/20 rounded-md h-full w-full flex flex-col items-center justify-center">
                  <span className="font-cinzel text-[10px] font-black text-amber-400/80">
                    ♠
                  </span>
                  <span className="text-[8px] font-mono text-emerald-400/70">
                    D{card.day}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
