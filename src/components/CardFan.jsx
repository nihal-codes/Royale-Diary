import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayingCard } from './PlayingCard';
import { useIsMobile } from '../hooks/useIsMobile';

export const CardFan = ({
  cards = [],
  selectedCardId = null,
  onCardSelect,
  className = ''
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [returningIndex, setReturningIndex] = useState(null);
  const isMobile = useIsMobile();

  // Fan geometry calculation
  const total = cards.length;
  const maxAngle = isMobile ? 14 : 20;
  const angleStep = total > 1 ? maxAngle / (total - 1) : 0;
  const startAngle = -maxAngle / 2;

  // Base horizontal spacing between cards in the fan
  const cardSpacing = isMobile ? 36 : 82;

  const handleHoverEnd = (index) => {
    setHoveredIndex((prev) => (prev === index ? null : prev));
    setReturningIndex(index);
    // Keep zIndex elevated while the card animates smoothly back to resting y=0
    setTimeout(() => {
      setReturningIndex((prev) => (prev === index ? null : prev));
    }, 520);
  };

  return (
    <div className="relative flex items-center justify-center h-60 md:h-85 w-full perspective-1000">
      <div className="relative flex items-center justify-center transform-style-3d">
        {cards.map((card, index) => {
          const isHovered = hoveredIndex === index;
          const isReturning = returningIndex === index;
          const isSelected = selectedCardId === card.day;

          // Natural poker fan radial math
          const rawAngle = startAngle + index * angleStep;
          const currentAngle = isHovered ? 0 : rawAngle;
          const arcOffset = Math.pow(index - (total - 1) / 2, 2) * (isMobile ? 2 : 3);

          // Dynamic Push-Away Gap Math
          let pushX = 0;
          if (hoveredIndex !== null && !isHovered) {
            const basePush = isMobile ? 18 : 55;
            const extraPush = isMobile ? 5 : 14;
            if (index < hoveredIndex) {
              pushX = -basePush - (hoveredIndex - index - 1) * extraPush;
            } else if (index > hoveredIndex) {
              pushX = basePush + (index - hoveredIndex - 1) * extraPush;
            }
          }

          const baseX = (index - (total - 1) / 2) * cardSpacing;
          const targetX = baseX + pushX;

          // 3D Z-axis elevation
          const targetZ = isHovered ? (isMobile ? 20 : 90) : (index * 4);
          // Keep zIndex elevated during both hover and return animation to prevent layer clipping
          const activeZIndex = isHovered || isReturning ? 60 : index + 10;

          return (
            <motion.div
              key={card.day}
              className="absolute origin-bottom center pointer-events-auto transform-style-3d will-change-transform"
              initial={{ opacity: 0, y: 80, scale: 0.6 }}
              animate={{
                opacity: 1,
                x: targetX,
                y: isHovered ? (isMobile ? -25 : -50) : arcOffset,
                z: targetZ,
                rotate: currentAngle,
                scale: isHovered ? 1.08 : (hoveredIndex !== null ? 0.92 : 1),
                zIndex: activeZIndex
              }}
              transition={{
                duration: isMobile ? 0.25 : 0.5,
                ease: isMobile ? 'easeOut' : [0.16, 1, 0.3, 1]
              }}
              style={{
                transformOrigin: 'bottom center'
              }}
            >
              <PlayingCard
                card={card}
                isFlipped={isSelected}
                isSelected={isSelected}
                isHovered={isHovered}
                fanAngle={currentAngle}
                onClick={() => onCardSelect(card)}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => handleHoverEnd(index)}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
