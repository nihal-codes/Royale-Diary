import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

export const CasinoTable = ({
  children,
  mouseCoords,
  zoomLevel = 1,
  className = ''
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-2000 overflow-hidden">
      {/* 3D Parallax Tilt Table Container */}
      <motion.div
        className="relative w-[96vw] md:w-[92vw] max-w-7xl h-[82vh] md:h-[78vh] max-h-187.5 rounded-[48px] md:rounded-[180px] p-2 md:p-6 table-parallax-smooth"
        style={{
          transform: `rotateX(${ (isMobile ? 4 : 18) + mouseCoords.rotateX * 0.4}deg) rotateY(${mouseCoords.rotateY * 0.4}deg) scale(${zoomLevel})`
        }}
      >
        {/* Outer Wooden Border Rim */}
        <div className="absolute inset-0 rounded-[48px] md:rounded-[180px] wood-rim pointer-events-none z-0" />

        {/* Outer Brass Padding Gap */}
        <div className="absolute inset-1.5 md:inset-3 rounded-[42px] md:rounded-[168px] gold-inlay pointer-events-none z-0" />

        {/* Inner Green Felt Surface */}
        <div className="relative w-full h-full rounded-[36px] md:rounded-[156px] poker-felt border border-emerald-500/20 overflow-hidden shadow-2xl flex items-center justify-center z-10">

          {/* Subtle Table Gold Foil Logo / Ring Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
            <div className="w-64 h-36 md:w-125 md:h-70 rounded-full border-2 border-amber-400/60 flex items-center justify-center">
              <div className="w-52 h-28 md:w-105 md:h-55 rounded-full border border-amber-400/40 flex flex-col items-center justify-center text-center p-2 md:p-4">
                <span className="font-cinzel text-xl md:text-3xl font-black text-amber-300 tracking-[0.2em] md:tracking-[0.3em] uppercase">
                  ROYALE DIARY
                </span>
                <span className="font-cinzel text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] text-emerald-400 mt-1 md:mt-2 uppercase">
                  HIGH STAKES TRAINING ROOM
                </span>
              </div>
            </div>
          </div>

          {/* Center Table Spotlight Highlight */}
          <div
            className="absolute w-72 h-44 md:w-150 md:h-87.5 rounded-full pointer-events-none blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(254,240,138,0.4) 0%, rgba(16,185,129,0.3) 60%, transparent 100%)'
            }}
          />

          {/* Table Children (Players, Cards, Tray) */}
          <div className="relative w-full h-full z-20">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
