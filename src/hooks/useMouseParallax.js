import { useState, useEffect } from 'react';

export const useMouseParallax = (intensity = 1) => {
  const [coords, setCoords] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalize coords from -1 to 1
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = (e.clientY / innerHeight) * 2 - 1;

      // Calculate tilt angles (rotateX depends on Y mouse offset, rotateY depends on X offset)
      const rotateX = -normY * 6 * intensity;
      const rotateY = normX * 8 * intensity;

      animationFrameId = requestAnimationFrame(() => {
        setCoords({
          x: normX * 20 * intensity,
          y: normY * 15 * intensity,
          rotateX,
          rotateY
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return coords;
};
