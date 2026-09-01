// Web Audio API Synthesizer for Casino Sound Effects & Royal Background Music
// Zero external assets required - 100% reliable synthesized audio

class CasinoAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isInitialized = false;

    // Background Music State
    this.isMusicPlaying = false;
    this.musicTimer = null;
    this.activeNodes = [];
    this.musicGain = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch((err) => console.warn('Audio resume pending user gesture', err));
      }
      return;
    }
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.isInitialized = true;
    } catch (e) {
      console.warn("Web Audio API not supported in this environment.", e);
    }
  }

  resume() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      return this.ctx.resume();
    }
    return Promise.resolve();
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (muted) {
      this.pauseRoyalMusic();
    } else if (this.isMusicPlaying) {
      this.startRoyalMusic();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.pauseRoyalMusic();
    }
    return this.isMuted;
  }

  // ==================== ROYAL BACKGROUND MUSIC SYNTHESIZER ====================
  // Synthesizes a soothing, luxurious casino VIP lounge chord progression with soft pads and harp arpeggios
  startRoyalMusic() {
    if (this.isMuted) return;
    this.resume();
    if (!this.ctx) return;

    if (this.isMusicPlaying && this.musicTimer) return;
    this.isMusicPlaying = true;

    // Chords progression (Frequencies in Hz for Cmaj9, Am9, Fmaj7, G11)
    const chords = [
      [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9 (C, E, G, B, D)
      [220.00, 261.63, 329.63, 392.00, 493.88], // Am9   (A, C, E, G, B)
      [174.61, 261.63, 329.63, 349.23, 440.00], // Fmaj7 (F, C, E, F, A)
      [196.00, 246.94, 293.66, 349.23, 440.00]  // G11   (G, B, D, F, A)
    ];

    let chordIndex = 0;

    const playChordStep = () => {
      if (!this.isMusicPlaying || this.isMuted || !this.ctx || this.ctx.state !== 'running') return;

      const now = this.ctx.currentTime;
      const currentChord = chords[chordIndex];

      // Warm Pad Synth Filter
      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, now);
      masterGain.gain.linearRampToValueAtTime(0.08, now + 1.2); // Smooth fade in
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + 3.8); // Smooth fade out

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);

      // Play soft sine oscillators for pad chord
      currentChord.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        osc.connect(filter);
        osc.start(now);
        osc.stop(now + 4.0);
      });

      filter.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      // Gentle Harp Arpeggio Notes
      currentChord.forEach((freq, idx) => {
        setTimeout(() => {
          if (!this.isMusicPlaying || this.isMuted || !this.ctx) return;
          const noteNow = this.ctx.currentTime;
          const harpOsc = this.ctx.createOscillator();
          const harpGain = this.ctx.createGain();

          harpOsc.type = 'triangle';
          harpOsc.frequency.setValueAtTime(freq * 2, noteNow); // Octave higher

          harpGain.gain.setValueAtTime(0.02, noteNow);
          harpGain.gain.exponentialRampToValueAtTime(0.0001, noteNow + 1.2);

          harpOsc.connect(harpGain);
          harpGain.connect(this.ctx.destination);

          harpOsc.start(noteNow);
          harpOsc.stop(noteNow + 1.2);
        }, idx * 300);
      });

      chordIndex = (chordIndex + 1) % chords.length;
    };

    playChordStep();
    this.musicTimer = setInterval(playChordStep, 4000); // Loop every 4 seconds
  }

  pauseRoyalMusic() {
    this.isMusicPlaying = false;
    if (this.musicTimer) {
      clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
  }

  toggleRoyalMusic() {
    if (this.isMusicPlaying) {
      this.pauseRoyalMusic();
    } else {
      this.startRoyalMusic();
    }
    return this.isMusicPlaying;
  }

  // ==================== SOUND EFFECTS ====================

  // 1. Card Deal Sound (Friction slide + snap)
  playCardDeal() {
    if (this.isMuted) return;
    this.resume();
    if (!this.ctx || this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;

    const bufferSize = Math.floor(this.ctx.sampleRate * 0.12);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + 0.1);
    filter.Q.setValueAtTime(3, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(now);
    noise.stop(now + 0.12);

    const snapOsc = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(1200, now + 0.02);
    snapOsc.frequency.exponentialRampToValueAtTime(200, now + 0.08);

    snapGain.gain.setValueAtTime(0.2, now + 0.02);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    snapOsc.connect(snapGain);
    snapGain.connect(this.ctx.destination);

    snapOsc.start(now + 0.02);
    snapOsc.stop(now + 0.08);
  }

  // 2. Card Flip Sound
  playCardFlip() {
    if (this.isMuted) return;
    this.resume();
    if (!this.ctx || this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.2);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.22);
  }

  // 3. Card Hover Tick
  playCardHover() {
    if (this.isMuted) return;
    this.resume();
    if (!this.ctx || this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // 4. Casino Chip Click
  playChipClick() {
    if (this.isMuted) return;
    this.resume();
    if (!this.ctx || this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(2200, now);
    osc.frequency.exponentialRampToValueAtTime(1400, now + 0.06);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  // 5. Deck Shuffle
  playShuffle() {
    if (this.isMuted) return;
    this.resume();
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        this.playCardDeal();
      }, i * 50);
    }
  }

  // 6. Camera Zoom
  playCameraZoom() {
    if (this.isMuted) return;
    this.resume();
    if (!this.ctx || this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(100, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.35);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }
}

export const soundEngine = new CasinoAudioEngine();
