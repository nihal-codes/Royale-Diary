import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Play, FastForward } from 'lucide-react';

export const DealerTray = ({
  isDealing = false,
  onSkipDealing,
  onReplayDealing
}) => {
  return (
    <div className="absolute top-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-auto">
      {/* Dealer Shoe Box Visual */}
      <div className="relative group cursor-pointer">
        {/* Glow halo */}
        <div className="absolute -inset-2 bg-linear-to-r from-amber-500/20 via-emerald-500/30 to-amber-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />

        <div className="relative px-6 py-2.5 rounded-xl border border-amber-500/40 bg-stone-950/90 backdrop-blur-xl shadow-2xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-amber-400">
            <Layers className="w-4 h-4 animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-xs font-bold text-amber-300 tracking-wider">
                DEALER SHOE
              </span>
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                24 CARDS
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400/80 block">
              {isDealing ? 'DEALING HIGH STAKES HANDS...' : 'CASINO DECK READY'}
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 ml-2">
            {isDealing ? (
              <button
                onClick={onSkipDealing}
                className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 text-[10px] font-mono font-semibold flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
              >
                <FastForward className="w-3 h-3 text-amber-400" />
                SKIP
              </button>
            ) : (
              <button
                onClick={onReplayDealing}
                className="px-2.5 py-1 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 text-[10px] font-mono font-semibold flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
              >
                <Play className="w-3 h-3 text-emerald-400" />
                RE-DEAL
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
