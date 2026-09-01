import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../context/AudioContext';
import { useIsMobile } from '../hooks/useIsMobile';

export const PlayingCard = ({
  card,
  isFlipped = false,
  isSelected = false,
  isHovered = false,
  onClick,
  onHoverStart,
  onHoverEnd,
  style = {},
  className = '',
  fanAngle = 0
}) => {
  const { playHover, playFlip } = useAudio();
  const isMobile = useIsMobile();

  const handleCardClick = (e) => {
    e.stopPropagation();
    playFlip();
    if (onClick) onClick(card);
  };

  const handleMouseEnter = () => {
    playHover();
    if (onHoverStart) onHoverStart(card);
  };

  const suitColor = card.suit === '♥' || card.suit === '♦' ? 'text-amber-400' : 'text-emerald-400';

  const cardWidth = isMobile ? '120px' : '185px';
  const cardHeight = isMobile ? '172px' : '265px';

  return (
    <div
      className={`relative cursor-pointer select-none perspective-1000 ${className}`}
      style={{
        width: cardWidth,
        height: cardHeight,
        ...style
      }}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onHoverEnd}
    >
      {/* 3D Rotating Wrapper */}
      <motion.div
        className="w-full h-full relative transform-style-3d shadow-2xl rounded-xl md:rounded-2xl"
        animate={{
          rotateY: isFlipped ? 180 : 0
        }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ==================== CARD BACK (100% Solid Opaque Dark Stone/Felt) ==================== */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl backface-hidden overflow-hidden border-2 border-amber-500/70 shadow-[0_15px_35px_rgba(0,0,0,0.95)] bg-[#0a0e0c] opacity-100"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2) 0%, rgba(5, 15, 10, 1) 75%),
              repeating-linear-gradient(45deg, rgba(234, 179, 8, 0.05) 0, rgba(234, 179, 8, 0.05) 1px, transparent 0, transparent 10px)
            `
          }}
        >
          {/* Outer Brass Trim */}
          <div className="absolute inset-1 md:inset-1.5 rounded-lg md:rounded-xl border border-amber-500/40 pointer-events-none" />
          <div className="absolute inset-2 md:inset-3 rounded-md md:rounded-lg border border-amber-400/25 pointer-events-none" />

          {/* Center Royal Seal */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 md:p-4 bg-[#0a0e0c]/90">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-amber-400/80 flex items-center justify-center bg-stone-950 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              <span className="font-cinzel text-sm md:text-2xl font-black text-amber-400 tracking-widest">
                RD
              </span>
            </div>
            <span className="mt-1.5 md:mt-3 font-cinzel text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] text-amber-300/80 uppercase">
              Royale Diary
            </span>
            <span className="text-[7px] md:text-[9px] font-mono text-emerald-400 mt-0.5 md:mt-1">
              DAY {card.day < 10 ? `0${card.day}` : card.day}
            </span>
          </div>

          {/* Corner Suits */}
          <div className="absolute top-1.5 left-2 md:top-2.5 md:left-3 text-[10px] md:text-xs text-amber-400/70 font-cinzel">♠</div>
          <div className="absolute top-1.5 right-2 md:top-2.5 md:right-3 text-[10px] md:text-xs text-amber-400/70 font-cinzel">♦</div>
          <div className="absolute bottom-1.5 left-2 md:bottom-2.5 md:left-3 text-[10px] md:text-xs text-amber-400/70 font-cinzel">♣</div>
          <div className="absolute bottom-1.5 right-2 md:bottom-2.5 md:right-3 text-[10px] md:text-xs text-amber-400/70 font-cinzel">♥</div>
        </div>

        {/* ==================== CARD FRONT (100% Solid Opaque Dark Velvet/Stone) ==================== */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl backface-hidden rotate-y-180 overflow-hidden border-2 border-amber-400/90 shadow-[0_20px_50px_rgba(0,0,0,0.98)] bg-[#0d120f] opacity-100 p-2 md:p-4 flex flex-col justify-between"
        >
          {/* Metallic Inner Border */}
          <div className="absolute inset-1 md:inset-1.5 rounded-lg md:rounded-xl border border-amber-500/50 pointer-events-none" />

          {/* Top Corner Pip */}
          <div className="flex justify-between items-start z-10 bg-[#0d120f]/95 rounded-t-lg">
            <div className="flex flex-col items-center">
              <span className="font-cinzel font-extrabold text-sm md:text-xl text-amber-300 leading-none">
                {card.rank}
              </span>
              <span className={`text-xs md:text-base leading-none ${suitColor}`}>
                {card.suit}
              </span>
            </div>
            <div className="text-right">
              <span className="inline-block px-1.5 py-0.5 rounded-full text-[7px] md:text-[9px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/50">
                DAY {card.day < 10 ? `0${card.day}` : card.day}
              </span>
            </div>
          </div>

          {/* Center Main Content Preview (Solid Background to prevent text bleeding) */}
          <div className="my-auto text-center px-0.5 z-10 bg-[#0d120f] py-1 md:py-2 rounded-lg">
            <span className="text-[7px] md:text-[10px] font-mono tracking-widest text-amber-400/90 uppercase block mb-0.5 md:mb-1 font-semibold">
              {card.category}
            </span>
            <h4 className="font-cinzel text-[9px] md:text-xs font-bold text-amber-100 line-clamp-2 leading-tight">
              {card.title}
            </h4>

            {/* Tech Badge Chips */}
            <div className="flex flex-wrap justify-center gap-0.5 md:gap-1 mt-1 md:mt-2.5">
              {card.technologies.slice(0, 2).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[6px] md:text-[8px] font-mono px-1 py-0.25 md:px-1.5 md:py-0.5 rounded bg-stone-900 text-amber-200 border border-amber-500/40 font-semibold"
                >
                  {tech}
                </span>
              ))}
              {card.technologies.length > 2 && (
                <span className="text-[6px] md:text-[8px] font-mono text-amber-400/80 font-bold">
                  +{card.technologies.length - 2}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Corner Pip (Inverted) */}
          <div className="flex justify-between items-end z-10 rotate-180 bg-[#0d120f]/95 rounded-t-lg">
            <div className="flex flex-col items-center">
              <span className="font-cinzel font-extrabold text-sm md:text-xl text-amber-300 leading-none">
                {card.rank}
              </span>
              <span className={`text-xs md:text-base leading-none ${suitColor}`}>
                {card.suit}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[6px] md:text-[8px] font-mono text-amber-400/80 uppercase font-bold">
                ROYALE
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
