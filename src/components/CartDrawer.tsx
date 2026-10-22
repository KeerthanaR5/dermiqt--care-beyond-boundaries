import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((rawSubtotal * discountPercent) / 100);
  const subtotal = rawSubtotal - discountAmount;
  const freeShippingThreshold = 2500;
  const shipping = subtotal >= freeShippingThreshold || items.length === 0 ? 0 : 199;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const estimatedTax = subtotal > 0 ? Math.round(subtotal * 0.05) : 0;
  const grandTotal = subtotal + shipping + estimatedTax;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'SPRING29' || clean === 'RADIANT29') {
      setDiscountPercent(29);
      setPromoMessage('29% Spring Botanical discount applied!');
    } else if (clean === 'ORGANIC15') {
      setDiscountPercent(15);
      setPromoMessage('15% Organic Formulation discount applied!');
    } else {
      setPromoMessage('Invalid coupon code. Try SPRING29 for 29% off.');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderConfirmed(true);
    }, 1200);
  };

  const handleFinish = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
    >
      <div className="w-full max-w-md bg-[#FAF6F0] text-[#291A14] h-full shadow-2xl flex flex-col justify-between border-l border-[#291A14]/15">
        
        {/* Header */}
        <div className="p-5 border-b border-[#291A14]/10 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#855845]" />
            <h2 id="cart-title" className="text-lg font-bold font-sans tracking-tight">
              Botanical Shopping Bag
            </h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#291A14] text-[#FAF6F0]">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 rounded-full hover:bg-stone-100 text-[#291A14] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter with Rupee formatting */}
        <div className="px-5 py-3 bg-[#EFE8DE] border-b border-[#291A14]/10 text-xs">
          <div className="flex justify-between items-center mb-1.5 font-medium">
            <span>
              {remainingForFreeShipping === 0
                ? '🎉 You unlocked Complimentary Worldwide Shipping!'
                : `Add ₹${remainingForFreeShipping.toLocaleString('en-IN')} more for Free Shipping`}
            </span>
            <span className="font-mono text-[11px] font-bold">{progressToFreeShipping}%</span>
          </div>
          <div className="w-full bg-white/70 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#855845] h-full rounded-full transition-all duration-500"
              style={{ width: `${progressToFreeShipping}%` }}
            ></div>
          </div>
        </div>

        {/* Items Scroll Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {orderConfirmed ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#291A14]">
                Order Confirmed!
              </h3>
              <p className="text-xs text-[#291A14]/70 leading-relaxed max-w-xs">
                Your botanical formulations have been queued for fresh compounding in our laboratory. Tracking details will be dispatched to your email.
              </p>
              <div className="p-3 bg-white rounded-xl border border-[#291A14]/10 text-xs font-mono w-full">
                Order Reference: #DMQ-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <button
                onClick={handleFinish}
                className="w-full bg-[#291A14] text-[#FAF6F0] py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
              >
                Return to Formulations
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DE] flex items-center justify-center text-[#855845]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h3 className="text-lg font-medium text-[#291A14]">Your bag is empty</h3>
              <p className="text-xs text-[#291A14]/60 max-w-xs">
                Explore our botanical serums, lipid creams, and active enzymes to build your personalized skin ritual.
              </p>
              <button
                onClick={onClose}
                className="mt-3 bg-[#EAB308] text-[#291A14] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d9a406]"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white p-3.5 rounded-2xl border border-[#291A14]/10 shadow-sm flex gap-3.5 items-center hover:border-amber-300/60 transition-colors"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      item.product.id === 'exfoliator-gel'
                        ? 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-16 h-16 rounded-xl object-cover bg-[#FAF6F0] shrink-0 border border-[#291A14]/5"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xs font-bold text-[#291A14] truncate">
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      aria-label={`Remove ${item.product.name}`}
                      className="text-stone-400 hover:text-red-600 transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-[#291A14]/60 truncate font-serif italic">
                    {item.product.subtitle}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-mono font-bold text-[#291A14]">
                      ₹{item.product.price.toLocaleString('en-IN')}
                    </span>
                    <div className="inline-flex items-center gap-2 bg-[#FAF6F0] border border-[#291A14]/15 rounded-full px-2 py-0.5 text-xs font-mono">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="hover:text-black p-0.5"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-semibold px-1">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="hover:text-black p-0.5"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Actions & Totals with Rupee formatting */}
        {items.length > 0 && !orderConfirmed && (
          <div className="p-5 border-t border-[#291A14]/15 bg-white space-y-3.5">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo Code (e.g. SPRING29)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-[#FAF6F0] border border-[#291A14]/20 rounded-xl px-3 py-1.5 text-xs uppercase font-mono placeholder:normal-case placeholder:font-sans focus:outline-none focus:border-[#855845]"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-[#291A14] text-[#FAF6F0] rounded-xl text-xs font-semibold hover:bg-black transition-colors"
              >
                Apply
              </button>
            </form>
            {promoMessage && (
              <p
                className={`text-[11px] font-medium ${
                  discountPercent > 0 ? 'text-emerald-700' : 'text-amber-800'
                }`}
              >
                {promoMessage}
              </p>
            )}

            {/* Price Calculations in Rupees */}
            <div className="space-y-1.5 text-xs text-[#291A14]/80 pt-1">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-mono">₹{rawSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Botanical Promo ({discountPercent}%)</span>
                  <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-mono">
                  {shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (GST 5%)</span>
                <span className="font-mono">₹{estimatedTax.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#291A14] pt-2 border-t border-[#291A14]/10">
                <span>Estimated Total</span>
                <span className="font-mono text-base">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-[#EAB308] hover:bg-[#d9a406] text-[#291A14] font-bold py-3 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              {isCheckingOut ? (
                <span>Compounding Order...</span>
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#291A14]/60 font-mono text-center pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Complimentary 30-Day Dermal Satisfaction Guarantee</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
