import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../context/AudioContext';

export const DealingCardAnimation = ({
  isDealing = false,
  onDealingComplete
}) => {
  const { playDeal } = useAudio();
  const [dealtCards, setDealtCards] = useState([]);

  // Player position targets around table from CENTER (0, 0)
  const playerTargets = [
    { week: 1, pos: 'top', x: 0, y: -190, rot: 0 },
    { week: 2, pos: 'right', x: 330, y: 0, rot: 90 },
    { week: 3, pos: 'bottom', x: 0, y: 190, rot: 180 },
    { week: 4, pos: 'left', x: -330, y: 0, rot: -90 }
  ];

  useEffect(() => {
    if (!isDealing) {
      setDealtCards([]);
      return;
    }

    setDealtCards([]);
    let cardCount = 0;
    const totalCards = 24;

    const interval = setInterval(() => {
      if (cardCount >= totalCards) {
        clearInterval(interval);
        setTimeout(() => {
          if (onDealingComplete) onDealingComplete();
        }, 800);
        return;
      }

      // Round-robin player index: 0 (W1 Top), 1 (W2 Right), 2 (W3 Bottom), 3 (W4 Left)
      const playerIndex = cardCount % 4;
      const cardInHand = Math.floor(cardCount / 4);
      const target = playerTargets[playerIndex];

      const stackOffset = (cardInHand - 2.5) * 8;

      setDealtCards((prev) => [
        ...prev,
        {
          id: cardCount,
          playerIndex,
          targetX: target.x + (target.pos === 'right' || target.pos === 'left' ? 0 : stackOffset),
          targetY: target.y + (target.pos === 'top' || target.pos === 'bottom' ? 0 : stackOffset),
          targetRot: target.rot + (cardInHand - 2.5) * 3
        }
      ]);

      playDeal();
      cardCount++;
    }, 140); // Elegant, majestic royal deal speed (140ms interval)

    return () => clearInterval(interval);
  }, [isDealing]);

  if (!isDealing) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-40 flex items-center justify-center">
      {/* Center Deck Box graphic at (0, 0) */}
      <div className="absolute w-24 h-32 rounded-xl border-2 border-amber-400/80 bg-stone-950 p-1.5 shadow-[0_0_50px_rgba(234,179,8,0.5)] z-10 flex flex-col items-center justify-center">
        <div className="w-full h-full rounded-lg border border-amber-500/40 bg-linear-to-br from-emerald-950 to-stone-900 flex flex-col items-center justify-center text-center">
          <span className="font-cinzel text-amber-400 text-lg font-black tracking-widest">♠</span>
          <span className="text-[8px] font-mono text-emerald-300 font-bold uppercase mt-1">
            DEALER DECK
          </span>
        </div>
      </div>

      {/* Flying Cards Spawning from CENTER (0,0) Outward with smooth royal flight physics */}
      {dealtCards.map((card) => (
        <motion.div
          key={card.id}
          className="absolute shadow-2xl rounded-lg border-2 border-amber-400/70 bg-linear-to-br from-stone-900 via-zinc-950 to-emerald-950 p-1 overflow-hidden z-20"
          style={{
            width: '85px',
            height: '120px'
          }}
          initial={{
            x: 0,
            y: 0,
            scale: 0.25,
            rotate: 0,
            opacity: 0
          }}
          animate={{
            x: card.targetX,
            y: card.targetY,
            scale: 1,
            rotate: card.targetRot,
            opacity: 1
          }}
          transition={{
            duration: 0.75, // Smooth elegant flight duration
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {/* Card Back Graphic */}
          <div className="w-full h-full rounded border border-amber-400/30 flex flex-col items-center justify-center bg-stone-900/90">
            <span className="font-cinzel text-amber-400 text-xs font-extrabold">♠</span>
            <span className="text-[7px] font-mono text-emerald-400">ROYALE</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
