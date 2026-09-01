import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Clock, GitCommit, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { weeks } from '../data/diaryData';

export const OverviewModal = ({ isOpen = false, onClose, onSelectWeek }) => {
  if (!isOpen) return null;

  const totalCards = 24;
  const totalHours = weeks.reduce(
    (acc, w) => acc + w.cards.reduce((cAcc, c) => cAcc + (c.stats?.hours || 0), 0),
    0
  );
  const totalCommits = "40+";
  const totalLines = "11500+";

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
          className="relative w-full max-w-2xl rounded-3xl border-2 border-amber-400/80 bg-stone-950 p-6 shadow-[0_0_80px_rgba(234,179,8,0.3)] text-amber-100 space-y-6 max-h-[90vh] overflow-y-auto pointer-events-auto"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-4">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">
                HIGH STAKES ANALYTICS
              </span>
              <h2 className="font-cinzel text-lg font-bold text-amber-300">
                TRAINING DIARY DASHBOARD
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-stone-900 border border-amber-500/40 text-amber-300 hover:text-amber-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Core Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-amber-500/30 text-center">
              <Sparkles className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="text-[9px] font-mono text-amber-300/70 block">CARDS DEALT</span>
              <span className="font-cinzel font-bold text-amber-100 text-lg">{totalCards} Days</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-amber-500/30 text-center">
              <Clock className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <span className="text-[9px] font-mono text-amber-300/70 block">TOTAL HOURS</span>
              <span className="font-cinzel font-bold text-amber-100 text-lg">{totalHours} Hrs</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-amber-500/30 text-center">
              <GitCommit className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <span className="text-[9px] font-mono text-amber-300/70 block">GIT COMMITS</span>
              <span className="font-cinzel font-bold text-emerald-300 text-lg">{totalCommits}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-amber-500/30 text-center">
              <Code2 className="w-4 h-4 text-blue-400 mx-auto mb-1" />
              <span className="text-[9px] font-mono text-amber-300/70 block">LINES OF CODE</span>
              <span className="font-cinzel font-bold text-blue-300 text-lg">+{totalLines}</span>
            </div>
          </div>

          {/* Week Breakdown list */}
          <div>
            <h3 className="font-cinzel text-xs font-bold text-amber-400 uppercase mb-3">
              Weekly Player Hands
            </h3>

            <div className="space-y-3">
              {weeks.map((w) => (
                <div
                  key={w.week}
                  onClick={() => {
                    onSelectWeek(w.week);
                    onClose();
                  }}
                  className="p-4 rounded-2xl bg-stone-900/80 hover:bg-emerald-950/60 border border-amber-500/30 hover:border-emerald-400/60 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-stone-950 border border-amber-400/50 flex items-center justify-center font-cinzel font-bold text-amber-400 text-xs shadow-inner">
                      W{w.week}
                    </div>
                    <div>
                      <h4 className="font-cinzel text-xs font-bold text-amber-100 group-hover:text-emerald-300 transition-colors">
                        {w.title}
                      </h4>
                      <p className="text-[10px] font-mono text-amber-200/60 line-clamp-1">
                        {w.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="text-right pl-3 flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      6 CARDS
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
