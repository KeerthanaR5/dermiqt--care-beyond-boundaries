import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Product } from '../types';
import exfoliatorGelJar from '../assets/images/exfoliator_gel_jar.jpg';

interface SwipeableProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onOpenProtocol?: () => void;
  className?: string;
}

export const SwipeableProductCard: React.FC<SwipeableProductCardProps> = ({
  product,
  onAddToCart,
  onOpenProtocol,
  className = '',
}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const touchStartX = useRef<number | null>(null);

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;
    if (distance > 35) {
      // Swiped left -> next picture
      setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (distance < -35) {
      // Swiped right -> prev picture
      setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    touchStartX.current = null;
  };

  // Safe fallbacks if any image fails
  const fallbackList = [
    exfoliatorGelJar,
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <div
      className={`bg-[#EFE8DE] rounded-3xl p-5 border border-[#291A14]/10 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 hover:border-[#855845]/40 transition-all duration-300 group ${className}`}
    >
      {/* Swipeable Picture Slider Container */}
      <div
        className="h-56 rounded-2xl overflow-hidden bg-white/80 mb-4 relative select-none cursor-grab active:cursor-grabbing group/pic"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animated Sliding Horizontal Track */}
        <div
          className="flex h-full w-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
        >
          {images.map((imgSrc, idx) => {
            const isFailed = failedImages[idx];
            const displaySrc = isFailed ? fallbackList[idx % fallbackList.length] : imgSrc;
            return (
              <div key={idx} className="w-full h-full shrink-0 relative bg-stone-100">
                <img
                  src={displaySrc}
                  alt={`${product.name} angle ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  onError={() => setFailedImages((prev) => ({ ...prev, [idx]: true }))}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            );
          })}
        </div>

        {/* Product Badge */}
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 z-10 bg-[#FAF6F0]/95 backdrop-blur-sm text-[#291A14] text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold shadow-sm pointer-events-none">
            {product.badge}
          </span>
        )}

        {/* Picture Count Pill on top right */}
        {images.length > 1 && (
          <span className="absolute top-2.5 right-2.5 z-10 bg-black/50 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded-full font-bold pointer-events-none">
            {currentImgIndex + 1} / {images.length}
          </span>
        )}

        {/* Navigation Buttons for Swiping Multiple Images */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all backdrop-blur-sm shadow-md hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 pointer-events-none" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all backdrop-blur-sm shadow-md hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 pointer-events-none" />
            </button>

            {/* Pagination Dots for Direct Slide Selection */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {images.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  aria-label={`Jump to image ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentImgIndex
                      ? 'bg-amber-300 w-3.5'
                      : 'bg-white/60 hover:bg-white w-1.5'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Details */}
      <div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#855845] font-semibold">
          {product.categoryLabel}
        </span>
        <h4 className="text-base font-bold text-[#291A14] mt-0.5 group-hover:text-[#855845] transition-colors">
          {product.name}
        </h4>
        <p className="text-xs text-[#291A14]/70 mt-1 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Bottom Action & Price in Rupees */}
      <div className="mt-4 pt-3.5 border-t border-[#291A14]/10 flex items-center justify-between">
        <div>
          <span className="font-mono font-bold text-base text-[#291A14]">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <span className="block text-[10px] text-[#291A14]/60 font-mono">
            {product.volume}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onOpenProtocol && (
            <button
              type="button"
              onClick={onOpenProtocol}
              className="px-2.5 py-1 text-[11px] font-semibold text-[#855845] hover:text-[#291A14] hover:underline transition-colors"
            >
              Protocol
            </button>
          )}
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 rounded-full bg-[#291A14] hover:bg-black hover:scale-105 active:scale-95 text-[#FAF6F0] text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
