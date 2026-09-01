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
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left: Branding & Current Navigation State */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl border-2 border-amber-400/80 bg-stone-950 flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            <span className="font-cinzel text-xl font-black text-amber-400">RD</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-cinzel text-sm sm:text-base font-extrabold tracking-widest text-amber-100 uppercase">
                THE ROYALE DIARY
              </h1>
              
            </div>
            <p className="text-[10px] font-mono text-emerald-400/90 tracking-wider">
              {selectedWeek ? `SELECTED: WEEK ${selectedWeek}` : 'CASINO TABLE   • 4 WEEKS / 24 CARDS'}
            </p>
          </div>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-2">
          {/* Return to Table Button (if week selected) */}
          {selectedWeek && (
            <button
              onClick={() => { playChip(); onResetView(); }}
              className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/60 text-amber-200 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              TABLE VIEW
            </button>
          )}

          {/* Stats Overview Button */}
          <button
            onClick={() => { playChip(); onOpenOverview(); }}
            className="px-3 py-1.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-amber-500/40 text-amber-300 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">HIGH STAKES</span> STATS
          </button>

          {/* Guide Overlay Button */}
          <button
            onClick={() => { playChip(); onOpenGuide(); }}
            className="p-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-amber-500/40 text-amber-300 transition-all shadow-lg active:scale-95 cursor-pointer"
            title="How to Play / Controls Guide"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
          </button>

          {/* Royal Background Music Toggle (Slow Elegant Pulse, no fast spinning) */}
          <button
            onClick={() => { playChip(); toggleMusic(); }}
            className={`p-2 rounded-xl border transition-all shadow-lg active:scale-95 cursor-pointer ${
              isMusicPlaying && !isMuted
                ? 'bg-amber-500/20 border-amber-400/60 text-amber-300 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
                : 'bg-stone-950 border-stone-800 text-stone-500'
            }`}
            title={isMusicPlaying ? 'Mute Royal Background Music' : 'Play Royal Background Music'}
          >
            {isMusicPlaying && !isMuted ? (
              <Music className="w-4 h-4 text-amber-400 animate-pulse transition-opacity duration-1000" />
            ) : (
              <Music2 className="w-4 h-4" />
            )}
          </button>

          {/* Master Sound FX Toggle */}
          <button
            onClick={toggleMute}
            className={`p-2 rounded-xl border transition-all shadow-lg active:scale-95 cursor-pointer ${
              isMuted
                ? 'bg-stone-950 border-red-500/40 text-red-400'
                : 'bg-stone-900/90 border-emerald-500/40 text-emerald-400'
            }`}
            title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
          </button>
        </div>
      </div>
    </header>
  );
};
