import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

export const Background = ({ mouseCoords }) => {
  const canvasRef = useRef(null);
  const isMobile = useIsMobile();

  // Subtle floating ambient casino sparkles/dust loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = isMobile ? 12 : 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      speedY: -(Math.random() * 0.3 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2
    }));

    let animId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 179, 8, ${p.alpha})`;
        // Skip expensive shadowBlur filter on mobile for smooth 60fps
        if (!isMobile) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#eab308';
        }
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030605]">
      {/* Dynamic Overhead Spotlight Glow following mouse parallax */}
      <div
        className={`absolute w-225 h-225 rounded-full transition-transform duration-300 ease-out opacity-75 ${
          isMobile ? 'blur-2xl' : 'blur-[120px]'
        }`}
        style={{
          top: '45%',
          left: '50%',
          transform: `translate(-50%, -50%) translate(${mouseCoords.x * 1.5}px, ${mouseCoords.y * 1.5}px)`,
          background: 'radial-gradient(circle, rgba(20, 85, 45, 0.45) 0%, rgba(234, 179, 8, 0.08) 40%, transparent 75%)'
        }}
      />

      {/* Primary Gold Spotlight Cone */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-300 h-150 opacity-20 ${
          isMobile ? 'blur-xl' : 'blur-[90px]'
        }`}
        style={{
          background: 'radial-gradient(ellipse at top, rgba(254, 240, 138, 0.35) 0%, rgba(217, 119, 6, 0.15) 50%, transparent 80%)'
        }}
      />

      {/* Floating Gold Dust Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Luxury Casino Wallpaper Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at 10px 10px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Dark Vignette Frame */}
      <div className={`absolute inset-0 ${isMobile ? 'shadow-[inset_0_0_60px_rgba(0,0,0,0.95)]' : 'shadow-[inset_0_0_180px_rgba(0,0,0,0.95)]'}`} />
    </div>
  );
};
