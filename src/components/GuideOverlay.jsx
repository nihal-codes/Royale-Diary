import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MousePointer, ZoomIn, Layers, FlipHorizontal, Keyboard } from 'lucide-react';

export const GuideOverlay = ({ isOpen = false, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-xl rounded-3xl border-2 border-amber-400/80 bg-stone-950 p-6 shadow-[0_0_60px_rgba(234,179,8,0.3)] text-amber-100 space-y-6 pointer-events-auto"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-4">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">
                CASINO LOBBY GUIDE
              </span>
              <h2 className="font-cinzel text-lg font-bold text-amber-300">
                HOW TO EXPLORE THE ROYALE DIARY
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-stone-900 border border-amber-500/40 text-amber-300 hover:text-amber-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Guide Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-stone-900/80 border border-amber-500/20 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                <ZoomIn className="w-4 h-4" />
              </div>
              <h4 className="font-cinzel text-xs font-bold text-amber-200 uppercase">
                1. Select a Player (Week)
              </h4>
              <p className="text-xs text-amber-100/80 leading-relaxed font-sans">
                Hover over any of the 4 players around the table (Week 1 to Week 4) and click to zoom the camera in.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/80 border border-amber-500/20 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="font-cinzel text-xs font-bold text-amber-200 uppercase">
                2. Poker Card Fan
              </h4>
              <p className="text-xs text-amber-100/80 leading-relaxed font-sans">
                The 6 cards will spread out into an authentic poker fan. Hover over any card to lift it and bring it closer.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/80 border border-amber-500/20 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-300">
                <FlipHorizontal className="w-4 h-4" />
              </div>
              <h4 className="font-cinzel text-xs font-bold text-amber-200 uppercase">
                3. 3D Card Flip
              </h4>
              <p className="text-xs text-amber-100/80 leading-relaxed font-sans">
                Click a card to perform a 3D flip animation revealing the training log, tech chips, and code snippets.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/80 border border-amber-500/20 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/50 flex items-center justify-center text-purple-300">
                <Keyboard className="w-4 h-4" />
              </div>
              <h4 className="font-cinzel text-xs font-bold text-amber-200 uppercase">
                4. Keyboard Controls
              </h4>
              <p className="text-xs text-amber-100/80 leading-relaxed font-sans">
                Press <code className="px-1 py-0.5 rounded bg-stone-800 border border-amber-500/40 text-amber-300 font-mono text-[10px]">ESC</code> anytime to flip back or return to table view.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl bg-linear-to-r from-amber-500 via-amber-600 to-amber-500 text-stone-950 font-cinzel font-black text-xs tracking-widest uppercase hover:brightness-110 transition-all shadow-lg cursor-pointer"
          >
            ENTER THE CASINO ROOM
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
