import React from 'react';
import { useAudio } from '../context/AudioContext';
import { Volume2, VolumeX, RotateCcw, BarChart3, HelpCircle, Music, Music2 } from 'lucide-react';

export const Header = ({
  selectedWeek,
  onResetView,
  onOpenOverview,
  onOpenGuide
}) => {
  const { isMuted, toggleMute, isMusicPlaying, toggleMusic, playChip } = useAudio();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-2 py-2 sm:px-4 sm:py-3 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto gap-2">
        
        {/* Left: Branding & Current Navigation State */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl border-2 border-amber-400/80 bg-stone-950 flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            <span className="font-cinzel text-base sm:text-xl font-black text-amber-400">RD</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-cinzel text-xs sm:text-base font-extrabold tracking-wider sm:tracking-widest text-amber-100 uppercase">
                THE ROYALE DIARY
              </h1>
            </div>
            <p className="text-[9px] sm:text-[10px] font-mono text-emerald-400/90 tracking-wider">
              {selectedWeek ? `WEEK ${selectedWeek}` : '4 WEEKS / 24 CARDS'}
            </p>
          </div>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Return to Table Button (if week selected) */}
          {selectedWeek && (
            <button
              onClick={() => { playChip(); onResetView(); }}
              className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/60 text-amber-200 text-[10px] sm:text-xs font-mono font-semibold flex items-center gap-1 sm:gap-1.5 transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              <span className="hidden xs:inline">TABLE</span> VIEW
            </button>
          )}

          {/* Stats Overview Button */}
          <button
            onClick={() => { playChip(); onOpenOverview(); }}
            className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-amber-500/40 text-amber-300 text-[10px] sm:text-xs font-mono font-semibold flex items-center gap-1 sm:gap-1.5 transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <BarChart3 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">HIGH STAKES</span> STATS
          </button>

          {/* Guide Overlay Button */}
          <button
            onClick={() => { playChip(); onOpenGuide(); }}
            className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-amber-500/40 text-amber-300 transition-all shadow-lg active:scale-95 cursor-pointer"
            title="How to Play / Controls Guide"
          >
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
          </button>

          {/* Royal Background Music Toggle */}
          <button
            onClick={() => { playChip(); toggleMusic(); }}
            className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl border transition-all shadow-lg active:scale-95 cursor-pointer ${
              isMusicPlaying && !isMuted
                ? 'bg-amber-500/20 border-amber-400/60 text-amber-300 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
                : 'bg-stone-950 border-stone-800 text-stone-500'
            }`}
            title={isMusicPlaying ? 'Mute Royal Background Music' : 'Play Royal Background Music'}
          >
            {isMusicPlaying && !isMuted ? (
              <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse transition-opacity duration-1000" />
            ) : (
              <Music2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            )}
          </button>

          {/* Master Sound FX Toggle */}
          <button
            onClick={toggleMute}
            className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl border transition-all shadow-lg active:scale-95 cursor-pointer ${
              isMuted
                ? 'bg-stone-950 border-red-500/40 text-red-400'
                : 'bg-stone-900/90 border-emerald-500/40 text-emerald-400'
            }`}
            title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />}
          </button>
        </div>
      </div>
    </header>
  );
};
