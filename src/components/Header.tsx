import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Dna, Activity } from 'lucide-react';
import { ArchetypeView, PageId } from '../types';

interface HeaderProps {
  currentView: ArchetypeView;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenShop?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  activePage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenShop,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  // Archetype 1: Editorial DERMIQT
  if (currentView === 'editorial') {
    return (
      <header className="sticky top-0 z-40 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#291A14]/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-1.5 rounded-lg border border-[#291A14]/20 text-[#291A14]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={() => handleNavClick('home')}
            >
              <span className="text-2xl font-bold tracking-widest font-sans uppercase text-[#291A14]">
                DERMIQT
              </span>
              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-[#291A14] text-[#FAF6F0] tracking-tighter">
                Est. 2024
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-widest text-[#291A14]/80">
              <button
                onClick={() => handleNavClick('home')}
                className={`transition-colors whitespace-nowrap hover:text-[#291A14] ${
                  activePage === 'home' ? 'font-bold text-[#291A14] underline underline-offset-4 decoration-amber-400 decoration-2' : ''
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('solutions')}
                className={`transition-colors whitespace-nowrap hover:text-[#291A14] ${
                  activePage === 'solutions' ? 'font-bold text-[#291A14] underline underline-offset-4 decoration-amber-400 decoration-2' : ''
                }`}
              >
                Solutions
              </button>
              <button
                onClick={() => handleNavClick('archive')}
                className={`transition-colors whitespace-nowrap hover:text-[#291A14] ${
                  activePage === 'archive' ? 'font-bold text-[#291A14] underline underline-offset-4 decoration-amber-400 decoration-2' : ''
                }`}
              >
                Archive
              </button>
              <button
                onClick={() => handleNavClick('philosophy')}
                className={`transition-colors whitespace-nowrap hover:text-[#291A14] ${
                  activePage === 'philosophy' ? 'font-bold text-[#291A14] underline underline-offset-4 decoration-amber-400 decoration-2' : ''
                }`}
              >
                Philosophy
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] font-serif italic text-[#855845]">
              Botanical Intelligence
            </span>
            <button
              onClick={onOpenCart}
              aria-label="Open Shopping Bag"
              className="relative p-2.5 rounded-full bg-[#FAF6F0] border border-[#291A14]/15 text-[#291A14] hover:bg-stone-200/80 transition-all shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#855845] text-white text-[10px] font-mono flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => handleNavClick('archive')}
              className="bg-[#291A14] hover:bg-black text-[#FAF6F0] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow"
            >
              Order Now
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF6F0] border-b border-[#291A14]/10 px-6 py-4 space-y-3 text-xs uppercase tracking-wider">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left py-1.5 ${activePage === 'home' ? 'font-bold text-[#855845]' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('solutions')}
              className={`block w-full text-left py-1.5 ${activePage === 'solutions' ? 'font-bold text-[#855845]' : ''}`}
            >
              Solutions
            </button>
            <button
              onClick={() => handleNavClick('archive')}
              className={`block w-full text-left py-1.5 ${activePage === 'archive' ? 'font-bold text-[#855845]' : ''}`}
            >
              Archive
            </button>
            <button
              onClick={() => handleNavClick('philosophy')}
              className={`block w-full text-left py-1.5 ${activePage === 'philosophy' ? 'font-bold text-[#855845]' : ''}`}
            >
              Philosophy
            </button>
          </div>
        )}
      </header>
    );
  }

  // Archetype 2: Cyber Futuristic DERMIQT // BIO-LAB
  if (currentView === 'futuristic') {
    return (
      <header className="sticky top-0 z-40 bg-[#070913]/90 backdrop-blur-xl border-b border-cyan-500/20 font-space text-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg border border-cyan-500/40 text-cyan-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Dna className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-wider text-white font-mono">
                DERMIQT<span className="text-cyan-400">//BIO</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-xs uppercase font-mono tracking-widest text-stone-400">
              <button
                onClick={() => handleNavClick('home')}
                className={`hover:text-cyan-400 transition-colors flex items-center gap-1 ${
                  activePage === 'home' ? 'text-cyan-300 font-bold' : ''
                }`}
              >
                <span className="text-cyan-500">//</span> Home
              </button>
              <button
                onClick={() => handleNavClick('solutions')}
                className={`hover:text-cyan-400 transition-colors flex items-center gap-1 ${
                  activePage === 'solutions' ? 'text-cyan-300 font-bold' : ''
                }`}
              >
                <span className="text-cyan-500">//</span> Protocols
              </button>
              <button
                onClick={() => handleNavClick('archive')}
                className={`hover:text-cyan-400 transition-colors flex items-center gap-1 ${
                  activePage === 'archive' ? 'text-cyan-300 font-bold' : ''
                }`}
              >
                <span className="text-cyan-500">//</span> Formulations
              </button>
              <button
                onClick={() => handleNavClick('philosophy')}
                className={`hover:text-cyan-400 transition-colors flex items-center gap-1 ${
                  activePage === 'philosophy' ? 'text-cyan-300 font-bold' : ''
                }`}
              >
                <span className="text-cyan-500">//</span> Bio-Manifesto
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>BIO-EQUILIBRIUM: 99.8%</span>
            </div>
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/40"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 text-black text-[10px] font-bold font-mono flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => handleNavClick('archive')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all border border-cyan-400/30"
            >
              Order Batch
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0F1F] border-b border-cyan-500/30 px-6 py-4 space-y-2 font-mono text-xs uppercase">
            <button onClick={() => handleNavClick('home')} className="block py-1 text-cyan-300">
              // Home Mainframe
            </button>
            <button onClick={() => handleNavClick('solutions')} className="block py-1 text-cyan-300">
              // Clinical Protocols
            </button>
            <button onClick={() => handleNavClick('archive')} className="block py-1 text-cyan-300">
              // Active Formulations
            </button>
            <button onClick={() => handleNavClick('philosophy')} className="block py-1 text-cyan-300">
              // Bio-Manifesto
            </button>
          </div>
        )}
      </header>
    );
  }

  // Archetype 3: Minimal Monolith DERMIQT ATELIER
  if (currentView === 'minimal') {
    return (
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200 font-sans text-stone-900">
        <div className="max-w-6xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-stone-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
              <span className="text-lg font-bold tracking-widest text-stone-950 font-sans uppercase">
                DERMIQT <span className="font-light text-stone-400">ATELIER</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-xs text-stone-600 tracking-normal font-medium">
              <button
                onClick={() => handleNavClick('home')}
                className={`hover:text-stone-950 transition-colors ${
                  activePage === 'home' ? 'text-stone-950 font-bold' : ''
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleNavClick('solutions')}
                className={`hover:text-stone-950 transition-colors ${
                  activePage === 'solutions' ? 'text-stone-950 font-bold' : ''
                }`}
              >
                Regimens
              </button>
              <button
                onClick={() => handleNavClick('archive')}
                className={`hover:text-stone-950 transition-colors ${
                  activePage === 'archive' ? 'text-stone-950 font-bold' : ''
                }`}
              >
                Archive
              </button>
              <button
                onClick={() => handleNavClick('philosophy')}
                className={`hover:text-stone-950 transition-colors ${
                  activePage === 'philosophy' ? 'text-stone-950 font-bold' : ''
                }`}
              >
                Philosophy
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-stone-400 hidden sm:inline">Pure Botanicals</span>
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded text-stone-800 hover:bg-stone-100 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-stone-950 text-white text-[10px] font-mono flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => handleNavClick('archive')}
              className="bg-stone-950 text-white hover:bg-stone-800 px-4 py-2 text-xs font-medium rounded transition-colors"
            >
              Discover
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-50 border-b border-stone-200 px-6 py-4 space-y-2 text-xs">
            <button onClick={() => handleNavClick('home')} className="block py-1 text-left w-full">
              Overview
            </button>
            <button onClick={() => handleNavClick('solutions')} className="block py-1 text-left w-full">
              Regimens
            </button>
            <button onClick={() => handleNavClick('archive')} className="block py-1 text-left w-full">
              Archive
            </button>
            <button onClick={() => handleNavClick('philosophy')} className="block py-1 text-left w-full">
              Philosophy
            </button>
          </div>
        )}
      </header>
    );
  }

  // Archetype 4: Creative Brutalism DERMIQT!
  return (
    <header className="sticky top-0 z-40 bg-[#FFFBF2] border-b-4 border-black font-syne text-[#121212]">
      <div className="max-w-7xl mx-auto px-6 h-20 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border-2 border-black bg-lime-300 brutalist-shadow"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div
            className="cursor-pointer flex items-center gap-2 select-none"
            onClick={() => handleNavClick('home')}
          >
            <span className="text-2xl font-extrabold uppercase tracking-tight bg-lime-300 px-2 py-0.5 border-2 border-black brutalist-shadow">
              DERMIQT!
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:underline ${activePage === 'home' ? 'underline text-purple-700' : ''}`}
            >
              HOME*
            </button>
            <button
              onClick={() => handleNavClick('solutions')}
              className={`hover:underline ${activePage === 'solutions' ? 'underline text-purple-700' : ''}`}
            >
              REGIMENS*
            </button>
            <button
              onClick={() => handleNavClick('archive')}
              className={`hover:underline ${activePage === 'archive' ? 'underline text-purple-700' : ''}`}
            >
              ARCHIVE*
            </button>
            <button
              onClick={() => handleNavClick('philosophy')}
              className={`hover:underline ${activePage === 'philosophy' ? 'underline text-purple-700' : ''}`}
            >
              MANIFESTO*
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="relative p-2.5 border-2 border-black bg-white brutalist-shadow"
          >
            <ShoppingBag className="w-4 h-4 text-black" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-pink-500 text-white font-mono text-xs font-bold flex items-center justify-center border-2 border-black">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => handleNavClick('archive')}
            className="bg-[#0055FF] text-white border-2 border-black px-5 py-2.5 rounded-none font-extrabold uppercase text-xs brutalist-shadow brutalist-shadow-hover transition-all"
          >
            GET GLOWING →
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-lime-200 border-b-4 border-black px-6 py-4 space-y-2 text-sm font-bold uppercase">
          <button onClick={() => handleNavClick('home')} className="block py-1 text-left w-full">
            HOME*
          </button>
          <button onClick={() => handleNavClick('solutions')} className="block py-1 text-left w-full">
            REGIMENS*
          </button>
          <button onClick={() => handleNavClick('archive')} className="block py-1 text-left w-full">
            ARCHIVE*
          </button>
          <button onClick={() => handleNavClick('philosophy')} className="block py-1 text-left w-full">
            MANIFESTO*
          </button>
        </div>
      )}
    </header>
  );
};
