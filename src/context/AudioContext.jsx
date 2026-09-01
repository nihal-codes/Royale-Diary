import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundEngine } from '../utils/soundSynth';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  useEffect(() => {
    const unlockAudio = () => {
      soundEngine.resume().then(() => {
        if (soundEngine.ctx && soundEngine.ctx.state === 'running') {
          setIsAudioUnlocked(true);
          // Start background music automatically upon first unlock
          if (isMusicPlaying && !isMuted) {
            soundEngine.startRoyalMusic();
          }
        }
      });
    };

    window.addEventListener('click', unlockAudio, { once: false });
    window.addEventListener('keydown', unlockAudio, { once: false });
    window.addEventListener('pointerdown', unlockAudio, { once: false });

    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
      window.removeEventListener('pointerdown', unlockAudio);
    };
  }, [isMusicPlaying, isMuted]);

  const toggleMute = () => {
    const nextMute = soundEngine.toggleMute();
    setIsMuted(nextMute);
  };

  const toggleMusic = () => {
    const nextMusicState = soundEngine.toggleRoyalMusic();
    setIsMusicPlaying(nextMusicState);
  };

  const resumeAudio = () => {
    return soundEngine.resume().then(() => {
      if (soundEngine.ctx && soundEngine.ctx.state === 'running') {
        setIsAudioUnlocked(true);
        if (isMusicPlaying && !isMuted) {
          soundEngine.startRoyalMusic();
        }
      }
    });
  };

  const playDeal = () => { resumeAudio(); soundEngine.playCardDeal(); };
  const playFlip = () => { resumeAudio(); soundEngine.playCardFlip(); };
  const playHover = () => { resumeAudio(); soundEngine.playCardHover(); };
  const playChip = () => { resumeAudio(); soundEngine.playChipClick(); };
  const playShuffle = () => { resumeAudio(); soundEngine.playShuffle(); };
  const playZoom = () => { resumeAudio(); soundEngine.playCameraZoom(); };

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        isAudioUnlocked,
        isMusicPlaying,
        toggleMute,
        toggleMusic,
        resumeAudio,
        playDeal,
        playFlip,
        playHover,
        playChip,
        playShuffle,
        playZoom
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
