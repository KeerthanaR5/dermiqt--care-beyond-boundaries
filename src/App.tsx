import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ArchetypeView, PageId, Product, CartItem, ProtocolDetail } from './types';
import { Header } from './components/Header';
import { FloatingViewSwitcher } from './components/FloatingViewSwitcher';
import { ArchetypeComparatorModal } from './components/ArchetypeComparatorModal';
import { CartDrawer } from './components/CartDrawer';
import { ProtocolModal } from './components/ProtocolModal';
import { EditorialView } from './components/views/EditorialView';
import { FuturisticView } from './components/views/FuturisticView';
import { MinimalView } from './components/views/MinimalView';
import { CreativeView } from './components/views/CreativeView';
import { InteractiveDotGrid } from './components/InteractiveDotGrid';
import { PRODUCTS } from './data/mockData';

const THEME_CONFIG: Record<ArchetypeView, { bg: string; text: string }> = {
  editorial: { bg: '#FAF6F0', text: '#291A14' },
  futuristic: { bg: '#070913', text: '#E2E8F0' },
  minimal: { bg: '#FFFFFF', text: '#111827' },
  creative: { bg: '#FFFBF2', text: '#121212' },
};

const VALID_VIEWS: ArchetypeView[] = ['editorial', 'futuristic', 'minimal', 'creative'];
const VALID_PAGES: PageId[] = ['home', 'solutions', 'archive', 'philosophy'];

export default function App() {
  const [activeView, setActiveView] = useState<ArchetypeView>(() => {
    const saved = localStorage.getItem('dermiqt_view') || localStorage.getItem('aura_preferred_view');
    return saved && VALID_VIEWS.includes(saved as ArchetypeView)
      ? (saved as ArchetypeView)
      : 'editorial';
  });

  const [activePage, setActivePage] = useState<PageId>(() => {
    const saved = localStorage.getItem('dermiqt_page') || localStorage.getItem('aura_active_page');
    return saved && VALID_PAGES.includes(saved as PageId)
      ? (saved as PageId)
      : 'home';
  });

  // Cart starts completely empty until customer adds items
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('dermiqt_cart');
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return [];

      return parsed.reduce<CartItem[]>((items, entry) => {
        const id = entry?.product?.id;
        const qty = entry?.quantity;
        if (typeof id === 'string' && typeof qty === 'number' && qty > 0) {
          const product = PRODUCTS.find((p) => p.id === id);
          if (product) {
            items.push({ product, quantity: Math.floor(qty) });
          }
        }
        return items;
      }, []);
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isComparatorModalOpen, setIsComparatorModalOpen] = useState(false);
  const [activeProtocol, setActiveProtocol] = useState<ProtocolDetail | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelectView = (view: ArchetypeView) => {
    setActiveView(view);
    localStorage.setItem('dermiqt_view', view);
    showToast(`Switched to ${view.toUpperCase()} design system`);
  };

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    localStorage.setItem('dermiqt_page', page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    localStorage.setItem('dermiqt_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const theme = THEME_CONFIG[activeView];
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
  }, [activeView]);

  const showToast = (message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastMessage(message);
    toastTimer.current = setTimeout(() => {
      setToastMessage(null);
      toastTimer.current = null;
    }, 2800);
  };

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const match = prev.find((item) => item.product.id === product.id);
      if (match) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to shopping bag`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const next = item.quantity + delta;
            return next > 0 ? { ...item, quantity: next } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from shopping bag');
  };

  const handleClearCart = () => setCart([]);

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen relative pb-36 sm:pb-44 transition-colors duration-300">
      {/* Interactive Cursor Spotlight Dot Grid */}
      <InteractiveDotGrid currentView={activeView} />

      <div className="relative z-10">
        <Header
          currentView={activeView}
          activePage={activePage}
          onNavigate={handleNavigate}
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenShop={() => handleNavigate('archive')}
        />

        {activeView === 'editorial' && (
          <EditorialView
            activePage={activePage}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenProtocol={setActiveProtocol}
          />
        )}

        {activeView === 'futuristic' && (
          <FuturisticView
            activePage={activePage}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenProtocol={setActiveProtocol}
          />
        )}

        {activeView === 'minimal' && (
          <MinimalView
            activePage={activePage}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenProtocol={setActiveProtocol}
          />
        )}

        {activeView === 'creative' && (
          <CreativeView
            activePage={activePage}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenProtocol={setActiveProtocol}
          />
        )}
      </div>

      <FloatingViewSwitcher
        currentView={activeView}
        onSelectView={handleSelectView}
        onOpenModal={() => setIsComparatorModalOpen(true)}
      />

      <ArchetypeComparatorModal
        isOpen={isComparatorModalOpen}
        onClose={() => setIsComparatorModalOpen(false)}
        currentView={activeView}
        onSelectView={handleSelectView}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ProtocolModal
        protocol={activeProtocol}
        onClose={() => setActiveProtocol(null)}
        onAddToCart={handleAddToCart}
      />

      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#291A14] text-[#FAF6F0] px-4 py-2.5 rounded-2xl shadow-2xl border border-white/20 text-xs flex items-center gap-2 animate-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
