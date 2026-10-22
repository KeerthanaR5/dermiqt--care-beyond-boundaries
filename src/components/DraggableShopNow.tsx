import React, { useState, useRef, useEffect } from 'react';

interface DraggableShopNowProps {
  onShopClick: () => void;
  className?: string;
}

export const DraggableShopNow: React.FC<DraggableShopNowProps> = ({
  onShopClick,
  className = '',
}) => {
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const initialOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const activePointerIdRef = useRef<number | null>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    // Only primary button (left click or touch)
    if (e.button !== 0) return;
    
    setIsPointerDown(true);
    setHasMoved(false);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    initialOffsetRef.current = { ...offset };
    activePointerIdRef.current = e.pointerId;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture fails
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!isPointerDown) return;

    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    if (Math.hypot(dx, dy) > 4) {
      setHasMoved(true);
    }

    setOffset({
      x: initialOffsetRef.current.x + dx,
      y: initialOffsetRef.current.y + dy,
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!isPointerDown) return;

    setIsPointerDown(false);

    if (activePointerIdRef.current !== null) {
      try {
        e.currentTarget.releasePointerCapture(activePointerIdRef.current);
      } catch {
        // Ignore
      }
      activePointerIdRef.current = null;
    }

    // If it was a click/tap without dragging, navigate to shop
    if (!hasMoved) {
      onShopClick();
    }
  };

  const handlePointerCancel = () => {
    setIsPointerDown(false);
    activePointerIdRef.current = null;
  };

  return (
    <button
      type="button"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        touchAction: 'none',
        userSelect: 'none',
      }}
      title="Click to Shop, or Drag me anywhere on the website!"
      aria-label="Shop Now (Draggable anywhere on website)"
      className={`z-50 select-none w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-[#EAB308] hover:bg-amber-300 text-[#291A14] font-extrabold text-[10px] sm:text-[11px] leading-tight uppercase flex flex-col items-center justify-center text-center shadow-xl hover:shadow-2xl transition-transform duration-150 outline-none focus:outline-none border-none p-0 ${
        isPointerDown
          ? 'cursor-grabbing scale-105 shadow-2xl'
          : 'cursor-grab hover:scale-105'
      } ${className}`}
    >
      <span>Shop</span>
      <span>Now</span>
    </button>
  );
};
