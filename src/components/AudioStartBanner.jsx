import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../context/AudioContext';
import { Volume2, Sparkles } from 'lucide-react';

export const AudioStartBanner = () => {
  const { isAudioUnlocked, resumeAudio } = useAudio();

  if (isAudioUnlocked) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto cursor-pointer"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={resumeAudio}
      >
        <div className="px-5 py-2.5 rounded-2xl bg-stone-950/90 border border-amber-400/80 shadow-[0_0_30px_rgba(234,179,8,0.4)] backdrop-blur-xl flex items-center gap-3 text-amber-200 hover:scale-105 transition-transform">
          <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
            <Volume2 className="w-4 h-4 animate-bounce" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold tracking-wider text-amber-300 block">
              ENABLE CASINO AUDIO
            </span>
            <span className="text-[10px] font-mono text-emerald-400">
              CLICK ANYWHERE TO UNLOCK DEALING & CARD SOUNDS
            </span>
          </div>
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin ml-1" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
