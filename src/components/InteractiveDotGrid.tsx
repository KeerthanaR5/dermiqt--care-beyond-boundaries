import React, { useEffect, useRef } from 'react';
import { ArchetypeView } from '../types';

interface InteractiveDotGridProps {
  currentView: ArchetypeView;
}

const THEME_DOT_COLORS: Record<ArchetypeView, { base: string; bold: string }> = {
  editorial: {
    base: 'rgba(41, 26, 20, 0.14)',
    bold: 'rgba(41, 26, 20, 0.92)',
  },
  futuristic: {
    base: 'rgba(56, 189, 248, 0.16)',
    bold: 'rgba(56, 189, 248, 0.95)',
  },
  minimal: {
    base: 'rgba(0, 0, 0, 0.12)',
    bold: 'rgba(0, 0, 0, 0.92)',
  },
  creative: {
    base: 'rgba(18, 18, 18, 0.15)',
    bold: 'rgba(18, 18, 18, 0.96)',
  },
};

export const InteractiveDotGrid: React.FC<InteractiveDotGridProps> = ({ currentView }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    const updatePosition = () => {
      // Smooth lerp for buttery motion
      currentX += (targetX - currentX) * 0.35;
      currentY += (targetY - currentY) * 0.35;

      if (container) {
        container.style.setProperty('--mouse-x', `${currentX.toFixed(1)}px`);
        container.style.setProperty('--mouse-y', `${currentY.toFixed(1)}px`);
      }

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        rafRef.current = requestAnimationFrame(updatePosition);
      } else {
        rafRef.current = null;
      }
    };

    const handlePointerLeave = () => {
      targetX = -1000;
      targetY = -1000;
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const colors = THEME_DOT_COLORS[currentView];

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={
        {
          '--mouse-x': '-1000px',
          '--mouse-y': '-1000px',
        } as React.CSSProperties
      }
    >
      {/* Base Faint Dot Grid */}
      <div
        className="absolute inset-0 transition-colors duration-300"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.base} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Bold Spotlight Dot Grid (magnifies & darkens dots around cursor) */}
      <div
        className="absolute inset-0 transition-colors duration-300"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.bold} 2px, transparent 2px)`,
          backgroundSize: '24px 24px',
          WebkitMaskImage:
            'radial-gradient(circle 220px at var(--mouse-x) var(--mouse-y), black 0%, rgba(0, 0, 0, 0.45) 45%, transparent 100%)',
          maskImage:
            'radial-gradient(circle 220px at var(--mouse-x) var(--mouse-y), black 0%, rgba(0, 0, 0, 0.45) 45%, transparent 100%)',
        }}
      />
    </div>
  );
};
