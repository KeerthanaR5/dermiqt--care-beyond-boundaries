import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Plus,
  Leaf,
  Droplets,
  ShieldCheck,
  Star,
  Tag
} from 'lucide-react';
import { PageId, Product, ProtocolDetail } from '../../types';
import { PRODUCTS, LAB_SIMULATIONS, PROTOCOLS } from '../../data/mockData';
import { SwipeableProductCard } from '../SwipeableProductCard';
import { SwipeableCarousel } from '../SwipeableCarousel';
import { DraggableShopNow } from '../DraggableShopNow';
import heroManCleanser from '../../assets/images/hero_man_cleanser.jpg';

interface EditorialViewProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onAddToCart: (product: Product) => void;
  onOpenProtocol: (protocol: ProtocolDetail) => void;
}

export const EditorialView: React.FC<EditorialViewProps> = ({
  activePage,
  onNavigate,
  onAddToCart,
  onOpenProtocol,
}) => {
  const [simulationDays, setSimulationDays] = useState<7 | 14 | 30>(7);
  const [catalogFilter, setCatalogFilter] = useState<'all' | 'hydrating' | 'barrier' | 'clarity' | 'renewal'>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentSim = LAB_SIMULATIONS[simulationDays];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (catalogFilter === 'all') return true;
    return p.category === catalogFilter;
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setTimeout(() => setNewsletterSubmitted(false), 4000);
  };

  return (
    <div className="text-[#291A14]">
      {/* Top Announcement Bar */}
      <div className="bg-[#291A14] text-[#FAF6F0] py-2.5 overflow-hidden border-b border-white/10 select-none">
        <div className="animate-marquee-ltr text-xs tracking-wider font-sans uppercase flex items-center gap-12 font-medium">
          {/* Loop strip 1 */}
          <div className="flex items-center gap-6 whitespace-nowrap shrink-0">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Care Beyond Boundaries — Spring Botanical Formulations 2026
            </span>
            <span className="text-amber-300/60 font-bold">·</span>
            <span className="text-amber-300 font-semibold">
              Complimentary Global Shipping on Orders over ₹2,500
            </span>
            <span className="text-amber-300/60 font-bold">·</span>
            <span className="text-emerald-300">
              100% Organic &amp; Cold Micro-Emulsified
            </span>
          </div>

          {/* Loop strip 2 */}
          <div className="flex items-center gap-6 whitespace-nowrap shrink-0">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Care Beyond Boundaries — Spring Botanical Formulations 2026
            </span>
            <span className="text-amber-300/60 font-bold">·</span>
            <span className="text-amber-300 font-semibold">
              Complimentary Global Shipping on Orders over ₹2,500
            </span>
            <span className="text-amber-300/60 font-bold">·</span>
            <span className="text-emerald-300">
              100% Organic &amp; Cold Micro-Emulsified
            </span>
          </div>

          {/* Loop strip 3 */}
          <div className="flex items-center gap-6 whitespace-nowrap shrink-0">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Care Beyond Boundaries — Spring Botanical Formulations 2026
            </span>
            <span className="text-amber-300/60 font-bold">·</span>
            <span className="text-amber-300 font-semibold">
              Complimentary Global Shipping on Orders over ₹2,500
            </span>
            <span className="text-amber-300/60 font-bold">·</span>
            <span className="text-emerald-300">
              100% Organic &amp; Cold Micro-Emulsified
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Home Page */}
        {activePage === 'home' && (
          <div className="space-y-14 animate-in fade-in duration-300">
            {/* HERO BANNER SECTION */}
            <section
              aria-label="Editorial Hero"
              className="bg-[#3A2820] text-[#FAF6F0] rounded-3xl p-6 sm:p-12 overflow-hidden relative shadow-2xl transition-all duration-300 hover:shadow-[0_25px_50px_rgba(41,26,20,0.4)]"
            >
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#855845]/30 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Text Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-serif tracking-wide text-[#F5E4DB] border border-white/10 hover:bg-white/15 hover:scale-105 transition-all duration-200 cursor-pointer">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Care your skin naturally</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-sans font-light tracking-tight leading-[1.08] text-[#FAF6F0]">
                    Care Beyond <br />
                    <span className="font-serif italic font-normal text-amber-300 hover:text-amber-200 transition-colors cursor-default">
                      Boundaries
                    </span>
                  </h1>

                  {/* Avocado / Botanical Mini Pill Badge with Hover */}
                  <div className="flex items-center gap-4 pt-1 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-[#FAF6F0]/10 flex items-center justify-center p-2 border border-white/10 backdrop-blur-sm shadow-inner group-hover:scale-110 group-hover:bg-[#FAF6F0]/20 transition-all duration-300">
                      <div className="w-7 h-7 rounded-full bg-emerald-700/80 border border-emerald-400 flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <Leaf className="w-4 h-4 text-emerald-200" />
                      </div>
                    </div>
                    <div className="text-[11px] leading-tight text-[#FAF6F0]/85 group-hover:text-white transition-colors">
                      <p className="font-bold uppercase tracking-wider text-white">
                        Clear Extra Oil
                      </p>
                      <p>Preserve youthful elasticity daily</p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-6">
                    <div className="hover:scale-105 transition-transform duration-200 cursor-default">
                      <span className="text-3xl font-light text-amber-300 font-sans">100%</span>
                      <p className="text-[11px] uppercase tracking-wider text-[#FAF6F0]/70">
                        Organic Formulation
                      </p>
                    </div>
                    <div className="h-8 w-px bg-white/20"></div>
                    <div className="hover:scale-105 transition-transform duration-200 cursor-default">
                      <span className="text-3xl font-light text-[#FAF6F0] font-sans">29k+</span>
                      <p className="text-[11px] uppercase tracking-wider text-[#FAF6F0]/70">
                        Active Skin Rituals
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Big Oval Hero Graphic with Rotating Stamp Badge - ONLY GIRL IMAGE CHANGED TO REFERENCE MAN */}
                <div className="lg:col-span-4 flex justify-center relative">
                  {/* Rotating Golden Stamp Badge */}
                  <div className="absolute -top-4 -right-2 z-20 w-28 h-28 rounded-full border border-amber-300/40 p-1 flex items-center justify-center text-center animate-spin-slow hover:border-amber-300 transition-colors">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-amber-300 fill-current">
                      <path
                        id="hero-curve"
                        d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                        fill="transparent"
                      />
                      <text className="text-[8.5px] uppercase tracking-widest font-sans font-bold">
                        <textPath href="#hero-curve">
                          Product for Beauty · Skincare Quality ·
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Organic Oval Clip Image Container with Hover zoom */}
                  <div className="relative w-64 sm:w-72 h-80 sm:h-96 overflow-hidden rounded-[140px] border-4 border-[#FAF6F0]/20 shadow-2xl bg-[#543324] group cursor-pointer hover:border-amber-300/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500">
                    <img
                      src={heroManCleanser}
                      alt="Care Beyond Boundaries Cleanser Ritual"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-center group-hover:from-black/85 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                        Dermal Equilibrium
                      </span>
                      <p className="text-xs text-white/90 font-serif italic">
                        Nourished by Clean Botanicals
                      </p>
                    </div>
                  </div>

                  {/* Draggable Shop Now Button - Positioned on hero oval, can be dragged anywhere on website */}
                  <DraggableShopNow
                    onShopClick={() => onNavigate('archive')}
                    className="absolute top-1/2 left-2 sm:left-5 -translate-y-1/2"
                  />
                </div>

                {/* Right Highlights Column */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
                      Natural Growth
                    </span>
                    <h3 className="text-xl font-sans font-medium mt-1 leading-snug text-white">
                      Bold Skin Begins with Balance
                    </h3>
                    <p className="text-xs text-[#FAF6F0]/70 mt-2 leading-relaxed">
                      Natural facial skincare must be present in every everyday beauty regimen.
                    </p>
                  </div>

                  {/* Quick Order Card with Rupee Symbol */}
                  <div className="bg-[#FAF6F0] text-[#291A14] rounded-2xl p-4 flex items-center justify-between shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:border hover:border-amber-400/40 transition-all duration-300">
                    <div className="min-w-0 pr-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#855845] font-bold">
                        Quick Order
                      </span>
                      <p className="text-xs font-bold text-[#291A14] truncate">
                        Exfoliator Gel Gelée
                      </p>
                      <span className="text-xs font-mono font-bold text-[#855845]">
                        ₹{PRODUCTS[1].price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <button
                      onClick={() => onAddToCart(PRODUCTS[1])}
                      className="shrink-0 bg-[#291A14] text-[#FAF6F0] hover:bg-black hover:scale-105 active:scale-95 hover:shadow-md px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* BENTO GRID: PURE SKINCARE ELEVATED NATURALLY */}
            <section aria-label="Pure Skincare Bento Grid">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#291A14]/15">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#855845]">
                    Botanical Archive
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-light font-sans tracking-tight text-[#291A14] mt-1">
                    Pure Skincare{' '}
                    <span className="font-serif italic text-[#855845]">
                      Elevated Naturally
                    </span>
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('archive')}
                  className="mt-3 sm:mt-0 text-xs font-mono uppercase tracking-widest flex items-center gap-1.5 text-[#291A14] hover:text-[#855845] hover:translate-x-1 transition-all duration-200"
                >
                  <span>See Catalog ({PRODUCTS.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 3 Column Bento Layout with Rupee Prices */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Card 1: Ageless Starts With Care (Peach Card) */}
                <div className="md:col-span-4 bg-[#F5E4DB] rounded-3xl p-6 flex flex-col justify-between border border-[#291A14]/10 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#291A14]/10 text-[10px] font-mono uppercase tracking-widest text-[#291A14] font-semibold group-hover:bg-[#291A14] group-hover:text-white transition-colors duration-200">
                      Formula #04
                    </span>
                    <h3 className="text-2xl font-sans font-light mt-4 text-[#291A14] leading-snug">
                      Ageless starts with care
                    </h3>
                    <p className="text-xs text-[#291A14]/70 mt-2 leading-relaxed">
                      Powered by cold-pressed squalane and rose geranium seed oils.
                    </p>
                  </div>

                  {/* Bottle Visual Area with Pure Skincare Badge */}
                  <div className="relative my-6 flex items-center justify-center h-48 bg-[#FAF6F0]/70 rounded-2xl border border-white/60 overflow-hidden shadow-inner group-hover:border-amber-300/40 transition-colors">
                    <img
                      src={PRODUCTS[0].image}
                      alt="Sun Dew Serum Bottle"
                      className="w-32 h-44 object-cover rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#EAB308] text-[#291A14] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md font-sans group-hover:bg-amber-300 transition-colors">
                      Pure Skincare
                    </span>
                  </div>

                  <div className="pt-4 border-t border-[#291A14]/10 flex items-center justify-between text-xs font-semibold">
                    <div>
                      <p className="text-[#291A14] font-bold group-hover:text-[#855845] transition-colors">
                        Sun Dew Serum
                      </p>
                      <span className="font-mono text-[#855845]">
                        ₹{PRODUCTS[0].price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <button
                      onClick={() => onAddToCart(PRODUCTS[0])}
                      className="px-4 py-2 rounded-full bg-[#291A14] text-[#FAF6F0] hover:bg-black hover:scale-105 active:scale-95 text-[11px] font-semibold transition-all duration-200 shadow-sm cursor-pointer"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>

                {/* Card 2: Center Bento (Dual Sub-Cards) */}
                <div className="md:col-span-5 bg-[#EFE8DE] rounded-3xl p-6 flex flex-col justify-between border border-[#291A14]/10 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-sans font-medium text-[#291A14]">
                      Everyday care creates timeless skin
                    </h3>
                    <span className="font-serif italic text-xl text-[#855845]">
                      Lumière
                    </span>
                  </div>

                  {/* 2 Side-by-Side Product Cards with Rupee Symbol */}
                  <div className="grid grid-cols-2 gap-3.5 my-6">
                    <div className="rounded-2xl p-4 bg-[#FAF6F0] flex flex-col items-center justify-center text-center border border-[#291A14]/10 shadow-sm group hover:-translate-y-1 hover:shadow-md hover:bg-white transition-all duration-200 cursor-pointer">
                      <img
                        src={PRODUCTS[3].image}
                        alt="Cold-Pressed Soap"
                        className="w-16 h-16 rounded-xl object-cover mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300"
                      />
                      <p className="text-[11px] font-bold text-[#291A14] group-hover:text-[#855845] transition-colors">
                        Cold-Pressed Soap
                      </p>
                      <p className="text-[9px] text-[#291A14]/60">Activated Charcoal &amp; Clay</p>
                      <button
                        onClick={() => onAddToCart(PRODUCTS[3])}
                        className="mt-2 text-[10px] font-mono text-[#855845] font-bold hover:underline hover:scale-105 transition-transform"
                      >
                        + ₹{PRODUCTS[3].price.toLocaleString('en-IN')}
                      </button>
                    </div>

                    <div className="rounded-2xl p-4 bg-[#FAF6F0] flex flex-col items-center justify-center text-center border border-[#291A14]/10 shadow-sm group hover:-translate-y-1 hover:shadow-md hover:bg-white transition-all duration-200 cursor-pointer">
                      <img
                        src={PRODUCTS[4].image}
                        alt="Biotic Creme Gelée"
                        className="w-16 h-16 rounded-xl object-cover mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300"
                      />
                      <p className="text-[11px] font-bold text-[#291A14] group-hover:text-[#855845] transition-colors">
                        Biotic Creme Gelée
                      </p>
                      <p className="text-[9px] text-[#291A14]/60">Prebiotic Micro-Peptides</p>
                      <button
                        onClick={() => onAddToCart(PRODUCTS[4])}
                        className="mt-2 text-[10px] font-mono text-[#855845] font-bold hover:underline hover:scale-105 transition-transform"
                      >
                        + ₹{PRODUCTS[4].price.toLocaleString('en-IN')}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-[#291A14]/10">
                    <span className="text-[#291A14]/70">Dermatologically Certified Bio-actives</span>
                    <button
                      onClick={() => onOpenProtocol(PROTOCOLS[1])}
                      className="underline font-semibold text-[#855845] hover:text-[#291A14] hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Formulation</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Card 3: Formulator Quote Card */}
                <div className="md:col-span-3 bg-[#3A2820] text-[#FAF6F0] rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-white/5">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-amber-400 text-[#291A14] flex items-center justify-center font-serif text-xl font-bold mb-4 shadow hover:scale-110 transition-transform cursor-pointer">
                      “
                    </div>
                    <p className="font-serif italic text-lg leading-snug text-[#F5E4DB]">
                      “Skin glows when the soul does. Great skin doesn&apos;t come from many products, just the right ones.”
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/10 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-300 flex items-center justify-center text-amber-300 font-bold font-serif group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-[#291A14] transition-all duration-200">
                      SA
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition-colors">
                        Dr. Sarah Althaus
                      </h4>
                      <p className="text-[10px] text-amber-300 font-mono">Head of Formulation</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Curated Carousel */}
            <section aria-label="Curated Botanical Collection">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-[#291A14]/10">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-light text-[#291A14]">
                      Your next favorite right here
                    </h3>
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#855845]/15 text-[#855845] text-[10px] font-mono uppercase font-bold">
                      Swipeable Gallery
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5 text-[11px] font-mono text-[#855845]">
                    {['#RealRadiant', '#Skincare', '#RealPure', '#Beauty'].map((tag, i) => (
                      <span key={i} className="hover:text-[#291A14] hover:underline cursor-pointer transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2 sm:mt-0">
                  <span className="text-xs text-[#855845] font-mono hidden md:inline">
                    ← Swipe cards &amp; pictures →
                  </span>
                  <button
                    onClick={() => onNavigate('archive')}
                    className="text-xs font-mono uppercase underline hover:text-[#855845] hover:translate-x-0.5 transition-transform"
                  >
                    Catalog ({PRODUCTS.length}) →
                  </button>
                </div>
              </div>

              {/* Horizontal Swipeable Carousel with Multi-Angle Swipeable Picture Cards */}
              <SwipeableCarousel>
                {PRODUCTS.map((product) => (
                  <div key={product.id} className="min-w-[300px] sm:min-w-[340px] shrink-0">
                    <SwipeableProductCard
                      product={product}
                      onAddToCart={onAddToCart}
                      onOpenProtocol={() => onOpenProtocol(PROTOCOLS[0])}
                    />
                  </div>
                ))}
              </SwipeableCarousel>
            </section>

            {/* Editorial Radiance Story Banner */}
            <section
              aria-label="Radiance Story Banner"
              className="bg-[#855845] text-[#FAF6F0] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_rgba(133,88,69,0.4)] transition-all duration-300 border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Portrait */}
                <div className="lg:col-span-5 h-72 sm:h-96 lg:h-auto min-h-[340px] relative overflow-hidden bg-[#543324] group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Radiant Skin Soul Portrait"
                    className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                      Natural Ecology · Ritual 03
                    </span>
                    <p className="text-xs text-white/90 font-serif italic mt-0.5">
                      Compounded with living botanical extracts
                    </p>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono uppercase tracking-widest text-amber-300 border border-white/15 mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Sacred Self-Care Ritual</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light text-white leading-tight">
                      Skin glows when the <span className="font-serif italic text-amber-300">soul does</span>
                    </h3>

                    <p className="text-sm text-[#F5E4DB]/85 mt-3 leading-relaxed max-w-2xl">
                      Great skin doesn&apos;t come from dozens of complex steps, just the right botanical actives compounded to work in harmony with your cellular microbiome.
                    </p>
                  </div>

                  {/* 3 Botanical Highlights to fill and balance the card */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10 hover:border-amber-300/40 transition-colors">
                      <div className="flex items-center gap-2 text-amber-300 mb-1">
                        <Leaf className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider font-mono">100% Clean</span>
                      </div>
                      <p className="text-[11px] text-[#FAF6F0]/80 leading-snug">
                        Cold micro-emulsified plant squalane &amp; rose lipids.
                      </p>
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10 hover:border-amber-300/40 transition-colors">
                      <div className="flex items-center gap-2 text-amber-300 mb-1">
                        <Droplets className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider font-mono">36h Lock</span>
                      </div>
                      <p className="text-[11px] text-[#FAF6F0]/80 leading-snug">
                        Multi-molecular weights seal deep dermal hydration.
                      </p>
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10 hover:border-amber-300/40 transition-colors">
                      <div className="flex items-center gap-2 text-amber-300 mb-1">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider font-mono">pH 5.4</span>
                      </div>
                      <p className="text-[11px] text-[#FAF6F0]/80 leading-snug">
                        Preserves natural skin flora and cellular acid mantle.
                      </p>
                    </div>
                  </div>

                  {/* Spotlight Ritual Product & Quick Add */}
                  <div className="bg-[#FAF6F0]/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={PRODUCTS[2].image}
                        alt={PRODUCTS[2].name}
                        className="w-14 h-14 rounded-xl object-cover border border-white/20 shadow-md shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">{PRODUCTS[2].name}</span>
                          <span className="text-[10px] bg-amber-400 text-[#291A14] font-bold px-1.5 py-0.5 rounded font-mono">Ritual Pick</span>
                        </div>
                        <p className="text-[11px] text-[#FAF6F0]/75">{PRODUCTS[2].subtitle}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-mono font-bold text-amber-300">₹{PRODUCTS[2].price.toLocaleString('en-IN')}</span>
                          <span className="text-[10px] text-white/60">★ {PRODUCTS[2].rating} ({PRODUCTS[2].reviewsCount} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onAddToCart(PRODUCTS[2])}
                      className="shrink-0 bg-white hover:bg-amber-100 text-[#291A14] text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>

                  {/* Promo & Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1 border-t border-white/10">
                    <div className="flex items-center gap-2 bg-black/25 px-3.5 py-2 rounded-xl border border-white/10">
                      <Tag className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span className="text-xs text-[#FAF6F0]/90">
                        Use code <strong className="text-amber-300 font-mono">SPRING29</strong> for 29% off
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onNavigate('archive')}
                        className="bg-[#EAB308] hover:bg-amber-300 hover:scale-105 active:scale-95 text-[#291A14] font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-400/30 transition-all duration-200 cursor-pointer"
                      >
                        Explore Catalog
                      </button>
                      <button
                        onClick={() => onNavigate('philosophy')}
                        className="text-xs uppercase font-mono tracking-widest text-[#FAF6F0] underline hover:text-amber-300 hover:translate-x-1 transition-all inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* INTERACTIVE LAB METRIC: HYDRATION & BARRIER MONITOR */}
            <section
              aria-label="Clinical Telemetry Lab"
              className="bg-[#FAF6F0] border border-[#291A14]/15 rounded-3xl p-6 sm:p-8 hover:border-[#855845]/40 transition-colors duration-300 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#291A14]/10 gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#855845] font-bold">
                    Interactive Lab Metric
                  </span>
                  <h3 className="text-2xl font-light text-[#291A14]">
                    Hydration &amp; Skin Barrier Recovery Monitor
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#291A14]/70">Simulation Day:</span>
                  <div className="inline-flex rounded-full bg-[#EFE8DE] p-1 text-xs">
                    {([7, 14, 30] as const).map((days) => (
                      <button
                        key={days}
                        onClick={() => setSimulationDays(days)}
                        className={`px-3 py-1 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                          simulationDays === days
                            ? 'bg-[#291A14] text-[#FAF6F0] shadow-sm'
                            : 'text-[#291A14] hover:text-[#855845] hover:bg-white/40'
                        }`}
                      >
                        {days} Days
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simulated Metrics Grid with Hover Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-5 rounded-2xl border border-[#291A14]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <p className="text-xs text-[#291A14]/60 font-mono uppercase">
                    Transepidermal Water Loss
                  </p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-light text-[#291A14] font-sans">
                      {currentSim.tewl}
                    </span>
                    <span className="text-xs text-emerald-700 font-bold">Optimal</span>
                  </div>
                  <div className="w-full bg-[#EFE8DE] h-2 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-[#855845] h-full rounded-full transition-all duration-500"
                      style={{ width: `${currentSim.tewlProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#291A14]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <p className="text-xs text-[#291A14]/60 font-mono uppercase">
                    Microbiome Lipid Diversity
                  </p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-light text-[#291A14] font-sans">
                      {currentSim.lipidDiversity}
                    </span>
                    <span className="text-xs text-amber-700 font-bold">Enriched</span>
                  </div>
                  <div className="w-full bg-[#EFE8DE] h-2 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-[#EAB308] h-full rounded-full transition-all duration-500"
                      style={{ width: `${currentSim.lipidProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#291A14]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <p className="text-xs text-[#291A14]/60 font-mono uppercase">
                    Cellular Turnover Rate
                  </p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-light text-[#291A14] font-sans">
                      {currentSim.cellularTurnover}
                    </span>
                    <span className="text-xs text-[#855845] font-bold">Accelerated</span>
                  </div>
                  <div className="w-full bg-[#EFE8DE] h-2 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-[#3A2820] h-full rounded-full transition-all duration-500"
                      style={{ width: `${currentSim.cellularProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#EFE8DE] text-xs font-serif italic text-[#291A14] border border-[#291A14]/5 hover:bg-[#e7ded1] transition-colors">
                Note on {simulationDays}-Day Cohort: {currentSim.clinicalNote}
              </div>
            </section>
          </div>
        )}

        {/* Solutions & Regimens */}
        {activePage === 'solutions' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="py-4 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#855845]">
                Clinical Formulations
              </span>
              <h1 className="text-4xl sm:text-5xl font-light font-sans tracking-tight text-[#291A14] mt-2">
                Bespoke Treatments &amp;{' '}
                <span className="font-serif italic text-[#855845]">Regimens</span>
              </h1>
              <p className="text-sm text-[#291A14]/80 mt-3 leading-relaxed">
                Every formula is compounded through cold micro-emulsification. Below are our core therapeutic categories designed for lasting cellular vitality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROTOCOLS.map((protocol, idx) => (
                <div
                  key={protocol.id}
                  className="bg-[#EFE8DE] p-8 rounded-3xl border border-[#291A14]/10 hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#855845]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#291A14] text-white flex items-center justify-center font-mono text-sm font-bold group-hover:bg-[#855845] transition-colors">
                      0{idx + 1}
                    </div>
                    <span className="inline-block mt-3 text-[10px] font-mono uppercase text-[#855845]">
                      {protocol.formulaCode} · {protocol.category}
                    </span>
                    <h3 className="text-2xl font-light mt-1 text-[#291A14] group-hover:text-[#855845] transition-colors">
                      {protocol.title}
                    </h3>
                    <p className="text-xs text-[#291A14]/75 mt-3 leading-relaxed">
                      {protocol.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {protocol.keyActives.map((act, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-white text-[10px] font-mono text-[#291A14] hover:bg-[#291A14] hover:text-white transition-colors cursor-pointer"
                        >
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#291A14]/10 flex justify-between items-center text-xs">
                    <span className="font-bold text-[#291A14]">
                      Protocol Duration: {protocol.studyDuration}
                    </span>
                    <button
                      onClick={() => onOpenProtocol(protocol)}
                      className="underline font-bold text-[#855845] hover:text-[#291A14] hover:translate-x-1 transition-all"
                    >
                      Consult Formulation →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Product Catalog */}
        {activePage === 'archive' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#291A14]/15 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#855845]">
                  Portfolio &amp; Studies
                </span>
                <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[#291A14] mt-1">
                  Clinical Formulations{' '}
                  <span className="font-serif italic text-[#855845]">Archive</span>
                </h1>
                <p className="text-xs text-[#291A14]/70 mt-1">
                  Swipe pictures on any card to view alternate angles, texture, and application shots.
                </p>
              </div>

              {/* Category Filter Chips with Hover Effects */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: `All (${PRODUCTS.length})` },
                  { id: 'hydrating', label: 'Hydration' },
                  { id: 'barrier', label: 'Barrier' },
                  { id: 'clarity', label: 'Clarity' },
                  { id: 'renewal', label: 'Bio-Renewal' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCatalogFilter(cat.id as any)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase transition-all duration-200 hover:scale-105 active:scale-95 ${
                      catalogFilter === cat.id
                        ? 'bg-[#291A14] text-[#FAF6F0] shadow-sm'
                        : 'bg-[#EFE8DE] text-[#291A14] hover:bg-[#291A14] hover:text-[#FAF6F0]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid with Swiping Pictures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <SwipeableProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onOpenProtocol={() => onOpenProtocol(PROTOCOLS[0])}
                />
              ))}
            </div>
          </div>
        )}

        {/* Philosophy & Story */}
        {activePage === 'philosophy' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#855845]">
                  Our Philosophy
                </span>
                <h1 className="text-4xl sm:text-5xl font-light font-sans tracking-tight text-[#291A14]">
                  Care Beyond Boundaries:{' '}
                  <span className="font-serif italic text-[#855845]">
                    Simplicity Meets Biology
                  </span>
                </h1>
                <p className="text-xs text-[#291A14]/80 leading-relaxed">
                  Founded under the belief that radiant skin does not require twelve confusing steps, DERMIQT unites ancestral ethnobotanical extracts with precision biotechnology. Every lipid, humectant, and bioactive peptide is formulated to preserve natural skin ecology.
                </p>

                {/* Team Spotlight with Hover */}
                <div className="pt-4 border-t border-[#291A14]/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#291A14] mb-3">
                    Clinical Advisory Council
                  </h4>
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#EFE8DE] hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-[#3A2820] text-amber-300 font-serif font-bold text-lg flex items-center justify-center border border-[#855845] hover:scale-105 transition-transform">
                      JM
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#291A14]">Julian Moreau, Ph.D.</p>
                      <p className="text-[11px] text-[#291A14]/70">
                        Director of Lipid Chemistry &amp; Bio-Fermentation
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Accordion with Hover */}
                <div className="space-y-3 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#291A14]">
                    Frequently Asked Questions
                  </h4>

                  {[
                    {
                      q: 'Are your formulas suitable for compromised barrier skin?',
                      a: 'Yes. All preparations are formulated without volatile drying alcohols, synthetic fragrances, or harsh sulfates. They undergo rigorous third-party patch testing on sensitive skin types.',
                    },
                    {
                      q: 'What is the shelf life of botanical serums?',
                      a: 'We employ bio-identical radish root ferment and potassium sorbate, yielding 18 months unopened stability and 6 months after initial pump exposure.',
                    },
                    {
                      q: 'What makes DERMIQT 100% organic formulation different?',
                      a: 'We use cold micro-emulsification rather than high-heat compounding, preserving delicate enzymes, carotenoids, and phytonutrients in their biologically active states.',
                    },
                  ].map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-[#EFE8DE] p-4 rounded-2xl cursor-pointer hover:bg-[#e7ded1] hover:shadow-sm transition-all duration-200"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <div className="text-xs font-semibold text-[#291A14] flex justify-between items-center">
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openFaq === idx ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      {openFaq === idx && (
                        <p className="text-xs text-[#291A14]/70 mt-3 leading-relaxed">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Desk Form */}
              <div className="lg:col-span-6 bg-[#3A2820] text-[#FAF6F0] p-8 rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_rgba(41,26,20,0.5)] transition-all duration-300">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
                  Consultation Desk
                </span>
                <h3 className="text-2xl font-light text-white mt-1">
                  Request Formulation Consultation
                </h3>
                <p className="text-xs text-[#FAF6F0]/70 mt-1">
                  Speak directly with our compounding chemists regarding your specific skin goals.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#F5E4DB] mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elena Rostova"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/40 hover:border-amber-400/70 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#F5E4DB] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@example.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/40 hover:border-amber-400/70 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#F5E4DB] mb-1">
                      Primary Skin Focus
                    </label>
                    <select className="w-full bg-[#291A14] border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white hover:border-amber-400/70 focus:outline-none focus:border-amber-400 transition-colors">
                      <option>Barrier Repair &amp; Calming</option>
                      <option>Nocturnal Peptide Renewal</option>
                      <option>Enzymatic Clarity</option>
                      <option>Custom Compounded Batch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#F5E4DB] mb-1">
                      Inquiry Details
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe any current sensitivities or desired ritual notes..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-xs text-white placeholder-white/40 hover:border-amber-400/70 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#EAB308] hover:bg-amber-300 hover:scale-[1.02] active:scale-[0.98] text-[#291A14] font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-amber-400/30"
                  >
                    Submit Formulation Request
                  </button>
                </form>

                {formSubmitted && (
                  <div className="mt-4 p-3 bg-white/10 rounded-xl border border-amber-400/40 text-amber-200 text-xs text-center font-mono">
                    ✓ Thank you. Formulation request received by our clinical compounding desk.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="mt-16 bg-[#291A14] text-[#FAF6F0] py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-4 gap-8 text-xs">
          <div>
            <span
              className="text-xl font-bold tracking-widest uppercase hover:text-amber-300 transition-colors cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              DERMIQT
            </span>
            <p className="text-[#FAF6F0]/60 mt-2 text-[11px] leading-relaxed">
              Care Beyond Boundaries. Clinical botany compounded with respect for cellular integrity.
            </p>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-wider text-amber-300 mb-3">Navigation</h5>
            <ul className="space-y-1.5 text-[#FAF6F0]/70">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white hover:translate-x-0.5 transition-all">
                  Home Rituals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-white hover:translate-x-0.5 transition-all">
                  All Formulations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('archive')} className="hover:text-white hover:translate-x-0.5 transition-all">
                  Clinical Archive
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('philosophy')} className="hover:text-white hover:translate-x-0.5 transition-all">
                  Philosophy &amp; Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-wider text-amber-300 mb-3">Protocols</h5>
            <ul className="space-y-1.5 text-[#FAF6F0]/70">
              <li className="hover:text-white hover:translate-x-0.5 transition-all cursor-pointer">Microbiome Testing</li>
              <li className="hover:text-white hover:translate-x-0.5 transition-all cursor-pointer">Refill Program</li>
              <li className="hover:text-white hover:translate-x-0.5 transition-all cursor-pointer">Batch Certificates</li>
              <li className="hover:text-white hover:translate-x-0.5 transition-all cursor-pointer">Dermatologist Portal</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-wider text-amber-300 mb-3">
              Dispatch Newsletter
            </h5>
            <p className="text-[11px] text-[#FAF6F0]/60 mb-2">
              Receive new seasonal distillations before public release.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                required
                placeholder="Your email"
                className="bg-white/10 px-3 py-1.5 rounded-l-lg text-xs w-full focus:outline-none hover:bg-white/15 focus:bg-white/20 placeholder-white/40 text-white transition-colors"
              />
              <button
                type="submit"
                className="bg-[#EAB308] hover:bg-amber-300 hover:scale-105 active:scale-95 text-[#291A14] px-3 font-bold rounded-r-lg text-xs transition-all duration-200"
              >
                Join
              </button>
            </form>
            {newsletterSubmitted && (
              <p className="text-emerald-400 text-[10px] font-mono mt-1">
                ✓ Enrolled in seasonal dispatch.
              </p>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#FAF6F0]/40 font-mono gap-2">
          <span>© 2026 DERMIQT Clinical Botanical Laboratories.</span>
          <span>Switch designs anytime via bottom toolbar.</span>
        </div>
      </footer>
    </div>
  );
};
