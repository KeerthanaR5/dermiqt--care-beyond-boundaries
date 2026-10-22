import React, { useState } from 'react';
import {
  Zap,
  Dna,
  Activity,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Plus,
  Droplets,
  Leaf,
  Tag,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { PageId, Product, ProtocolDetail } from '../../types';
import { PRODUCTS, PROTOCOLS, LAB_SIMULATIONS } from '../../data/mockData';
import { SwipeableProductCard } from '../SwipeableProductCard';
import { SwipeableCarousel } from '../SwipeableCarousel';

interface FuturisticViewProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onAddToCart: (product: Product) => void;
  onOpenProtocol: (protocol: ProtocolDetail) => void;
}

export const FuturisticView: React.FC<FuturisticViewProps> = ({
  activePage,
  onNavigate,
  onAddToCart,
  onOpenProtocol,
}) => {
  const [simulationDays, setSimulationDays] = useState<7 | 14 | 30>(7);
  const [catalogFilter, setCatalogFilter] = useState<'all' | 'hydrating' | 'barrier' | 'clarity' | 'renewal'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [packetSent, setPacketSent] = useState(false);

  const currentSim = LAB_SIMULATIONS[simulationDays];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (catalogFilter === 'all') return true;
    return p.category === catalogFilter;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPacketSent(true);
    setTimeout(() => setPacketSent(false), 4000);
  };

  const FAQS = [
    {
      q: 'How does DERMIQT achieve 0.8ms cutaneous absorption latency?',
      a: 'Through cold micro-emulsification, botanical lipids are sheared down to nano-droplets identical to human sebum, allowing immediate penetration into the intercellular lipid matrix without surface tackiness.',
    },
    {
      q: 'Why does the formulation stabilize skin pH at 5.4?',
      a: 'The acid mantle thrives at pH 4.5–5.5. Our fermented rice bio-actives and botanical hydrosols buffer cellular acidity to prevent opportunistic bacterial colonization and trans-epidermal water loss.',
    },
    {
      q: 'Are any synthetic preservatives or petrochemicals utilized?',
      a: 'Zero synthetic preservatives. We employ biomimetic fermented peptides and plant-derived antimicrobial glycols that preserve cellular bio-activity while maintaining complete dermatological purity.',
    },
    {
      q: 'How do the 7, 14, and 30-day simulation cycles correspond to skin biology?',
      a: 'Day 7 initiates lipid restoration; Day 14 accelerates cellular desquamation; Day 30 completes full epidermal turnover with +92% stratum corneum barrier reinforcement.',
    },
  ];

  return (
    <div className="text-stone-200 font-space min-h-screen">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-900 h-1 w-full animate-pulse"></div>

      {/* Cyber Ticker Bar */}
      <div className="bg-[#0B0F1F] text-cyan-300 py-2.5 overflow-hidden border-b border-cyan-500/20 select-none font-mono text-xs">
        <div className="animate-marquee-ltr flex items-center gap-12 tracking-wider">
          <div className="flex items-center gap-6 whitespace-nowrap shrink-0">
            <span className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              CARE BEYOND BOUNDARIES // MOLECULAR BOTANICAL SYNTHESIS 2026
            </span>
            <span className="text-cyan-500">·</span>
            <span className="text-purple-300">COMPLIMENTARY LOGISTICS OVER ₹2,500</span>
            <span className="text-cyan-500">·</span>
            <span className="text-emerald-400">NON-THERMAL MICRO-EMULSIFICATION NOMINAL</span>
          </div>
          <div className="flex items-center gap-6 whitespace-nowrap shrink-0">
            <span className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              CARE BEYOND BOUNDARIES // MOLECULAR BOTANICAL SYNTHESIS 2026
            </span>
            <span className="text-cyan-500">·</span>
            <span className="text-purple-300">COMPLIMENTARY LOGISTICS OVER ₹2,500</span>
            <span className="text-cyan-500">·</span>
            <span className="text-emerald-400">NON-THERMAL MICRO-EMULSIFICATION NOMINAL</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Cyber Home */}
        {activePage === 'home' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Cyber Hero */}
            <div className="relative rounded-3xl overflow-hidden p-6 sm:p-12 border border-cyan-500/30 bg-gradient-to-b from-[#0E1326] to-[#070913] glass-border-glow shadow-2xl">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
                    <Dna className="w-3.5 h-3.5 text-cyan-400" />
                    <span>CELLULAR BIOTECH · NEXT-GEN DERMAL SYNTHESIS</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight font-space">
                    Care Beyond <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                      Boundaries
                    </span>
                  </h1>

                  <p className="text-stone-300 text-sm max-w-xl leading-relaxed">
                    Precision cellular botany compounded with non-thermal micro-emulsification. Zero synthetic fillers, zero endocrine disruptors — engineered for stratum corneum resilience.
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                      <span className="text-2xl font-bold text-cyan-300 font-mono">100%</span>
                      <p className="text-[10px] text-stone-400 uppercase font-mono mt-0.5">Bio-Clean</p>
                    </div>
                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                      <span className="text-2xl font-bold text-white font-mono">36h</span>
                      <p className="text-[10px] text-stone-400 uppercase font-mono mt-0.5">Lipid Lock</p>
                    </div>
                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                      <span className="text-2xl font-bold text-purple-300 font-mono">29k+</span>
                      <p className="text-[10px] text-stone-400 uppercase font-mono mt-0.5">Active Cohorts</p>
                    </div>
                  </div>
                </div>

                {/* Center Hero Portal */}
                <div className="lg:col-span-4 flex justify-center relative">
                  <div className="relative w-64 sm:w-72 h-80 sm:h-96 overflow-hidden rounded-[130px] border-2 border-cyan-400/40 shadow-2xl bg-[#090D1A] group cursor-pointer hover:border-cyan-300 transition-all duration-500">
                    <img
                      src="/assets/images/hero_man_cleanser.jpg"
                      alt="DERMIQT Cleanser Ritual"
                      className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-108 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent flex flex-col justify-end p-6 text-center">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                        DERMAL TELEMETRY
                      </span>
                      <p className="text-xs text-stone-300 font-mono mt-0.5">
                        Living Botanical Bio-Actives
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate('archive')}
                      className="absolute top-1/2 left-3 -translate-y-1/2 w-16 h-16 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold font-mono text-xs uppercase flex items-center justify-center shadow-lg shadow-cyan-500/40 hover:scale-110 active:scale-95 transition-all"
                    >
                      Shop<br />Now
                    </button>
                  </div>
                </div>

                {/* Right Highlights Column */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="glass-card p-5 rounded-2xl border border-cyan-500/30">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                      SYNTHESIS LOG
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">
                      Cutaneous Lipid Equilibrium
                    </h3>
                    <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                      Bio-identical ceramides and plant squalane absorb in 0.8ms without disrupting natural flora.
                    </p>
                  </div>

                  <div className="glass-card p-4 rounded-2xl border border-cyan-500/40 flex items-center justify-between">
                    <div className="min-w-0 pr-2">
                      <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                        Quick Order
                      </span>
                      <p className="text-xs font-bold text-white truncate">
                        Exfoliator Gel Gelée
                      </p>
                      <span className="text-xs font-mono text-cyan-300 font-bold">
                        ₹{PRODUCTS[1].price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <button
                      onClick={() => onAddToCart(PRODUCTS[1])}
                      className="shrink-0 bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs px-3.5 py-2 rounded-xl transition-all flex items-center gap-1 shadow-md shadow-cyan-500/20 active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Skincare Telemetry Grid */}
            <section aria-label="Biotech Bento Grid">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                    // ACTIVE FORMULATIONS
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold font-space text-white mt-1">
                    Precision Botany · Molecular Purity
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('archive')}
                  className="mt-3 sm:mt-0 text-xs font-mono uppercase tracking-widest flex items-center gap-1.5 text-cyan-300 hover:text-white transition-all"
                >
                  <span>See Catalog ({PRODUCTS.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Sun Dew Serum */}
                <div className="md:col-span-4 glass-card p-6 rounded-3xl border border-cyan-500/30 flex flex-col justify-between hover:border-cyan-400/60 transition-all duration-300">
                  <div>
                    <span className="px-2.5 py-1 rounded bg-cyan-950 text-[10px] font-mono text-cyan-300 font-bold uppercase border border-cyan-500/40">
                      Formula #04 · Barrier
                    </span>
                    <h3 className="text-xl font-bold text-white mt-3">{PRODUCTS[0].name}</h3>
                    <p className="text-xs text-stone-400 mt-2 leading-relaxed">{PRODUCTS[0].subtitle}</p>
                  </div>

                  <div className="my-6 h-48 bg-[#090D1A] rounded-2xl border border-cyan-500/20 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={PRODUCTS[0].image}
                      alt={PRODUCTS[0].name}
                      className="w-32 h-44 object-cover rounded-xl shadow-lg"
                    />
                    <span className="absolute bottom-3 left-3 bg-cyan-400 text-black text-[10px] font-mono font-bold px-2.5 py-1 rounded">
                      92% Lipid Retention
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">{PRODUCTS[0].name}</p>
                      <span className="font-mono text-cyan-300 text-xs font-bold">
                        ₹{PRODUCTS[0].price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <button
                      onClick={() => onAddToCart(PRODUCTS[0])}
                      className="bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-mono font-bold px-4 py-2 rounded-xl transition-all shadow-md active:scale-95"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>

                {/* Dual Sub-Nodes */}
                <div className="md:col-span-5 glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">Daily Cytoprotective Nodes</h3>
                    <span className="text-xs font-mono text-cyan-400 uppercase">Dual-Action</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-6">
                    <div className="p-4 rounded-2xl bg-[#090D1A] border border-white/10 flex flex-col items-center text-center">
                      <img
                        src={PRODUCTS[3].image}
                        alt={PRODUCTS[3].name}
                        className="w-16 h-16 rounded-xl object-cover mb-2"
                      />
                      <p className="text-xs font-bold text-white">{PRODUCTS[3].name}</p>
                      <p className="text-[10px] text-stone-400 font-mono mt-0.5">Activated Charcoal</p>
                      <button
                        onClick={() => onAddToCart(PRODUCTS[3])}
                        className="mt-2 text-[10px] font-mono text-cyan-400 font-bold hover:underline"
                      >
                        + ₹{PRODUCTS[3].price.toLocaleString('en-IN')}
                      </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090D1A] border border-white/10 flex flex-col items-center text-center">
                      <img
                        src={PRODUCTS[4].image}
                        alt={PRODUCTS[4].name}
                        className="w-16 h-16 rounded-xl object-cover mb-2"
                      />
                      <p className="text-xs font-bold text-white">{PRODUCTS[4].name}</p>
                      <p className="text-[10px] text-stone-400 font-mono mt-0.5">Prebiotic Peptides</p>
                      <button
                        onClick={() => onAddToCart(PRODUCTS[4])}
                        className="mt-2 text-[10px] font-mono text-cyan-400 font-bold hover:underline"
                      >
                        + ₹{PRODUCTS[4].price.toLocaleString('en-IN')}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-3 border-t border-white/10 font-mono">
                    <span className="text-stone-400">Microbiome Certified</span>
                    <button
                      onClick={() => onOpenProtocol(PROTOCOLS[1])}
                      className="text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Read Telemetry</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Formulator Quote */}
                <div className="md:col-span-3 glass-card p-6 rounded-3xl border border-cyan-500/20 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center font-mono text-sm text-cyan-300 font-bold mb-4">
                      SA
                    </div>
                    <p className="font-mono text-xs text-stone-300 leading-relaxed italic">
                      &quot;Skin equilibrium is governed by cellular ecology, not by twelve redundant synthetic chemicals.&quot;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold text-white">Dr. Sarah Althaus</h4>
                    <p className="text-[10px] font-mono text-cyan-400">Lead Biochemical Compounder</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Swipeable Carousel */}
            <section aria-label="Curated Formulations Gallery">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold font-space text-white">
                    Curated Bio-Active Formulations
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 uppercase">
                    // Swipeable Telemetry Cards
                  </span>
                </div>
              </div>
              <SwipeableCarousel>
                {PRODUCTS.map((product) => (
                  <div key={product.id} className="w-80 shrink-0">
                    <SwipeableProductCard
                      product={product}
                      onAddToCart={onAddToCart}
                      onOpenProtocol={() => {
                        const proto = PROTOCOLS.find((p) => p.id === product.id) || PROTOCOLS[0];
                        onOpenProtocol(proto);
                      }}
                      className="bg-[#0E1326] text-white border-cyan-500/30"
                    />
                  </div>
                ))}
              </SwipeableCarousel>
            </section>

            {/* Radiance Story Banner (Cyber Dark Edition) */}
            <section
              aria-label="Cyber Radiance Banner"
              className="bg-gradient-to-r from-[#0E1326] via-[#101733] to-[#070913] text-white rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 h-72 sm:h-96 lg:h-auto min-h-[340px] relative overflow-hidden bg-[#090D1A]">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Radiant Skin Soul Portrait"
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                      // SACRED SELF-CARE · RITUAL 03
                    </span>
                    <p className="text-xs text-stone-300 font-mono mt-0.5">
                      Living plant extracts compounded at molecular scale
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-[11px] font-mono uppercase tracking-widest text-cyan-300 border border-cyan-500/40 mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Cellular Regeneration Protocol</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white leading-tight">
                      Skin glows when the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">soul does</span>
                    </h3>

                    <p className="text-sm text-stone-300 mt-3 leading-relaxed max-w-2xl font-sans">
                      Great skin doesn&apos;t come from dozens of complex steps, just the right botanical actives compounded to work in harmony with your cellular microbiome.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="glass-card p-3.5 rounded-2xl border border-cyan-500/20">
                      <div className="flex items-center gap-2 text-cyan-400 mb-1">
                        <Leaf className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider font-mono">Bio-Clean</span>
                      </div>
                      <p className="text-[11px] text-stone-300 leading-snug font-mono">
                        Cold micro-emulsified plant squalane &amp; rose lipids.
                      </p>
                    </div>

                    <div className="glass-card p-3.5 rounded-2xl border border-cyan-500/20">
                      <div className="flex items-center gap-2 text-cyan-400 mb-1">
                        <Droplets className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider font-mono">36h Lock</span>
                      </div>
                      <p className="text-[11px] text-stone-300 leading-snug font-mono">
                        Multi-molecular weights seal deep dermal hydration.
                      </p>
                    </div>

                    <div className="glass-card p-3.5 rounded-2xl border border-cyan-500/20">
                      <div className="flex items-center gap-2 text-cyan-400 mb-1">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider font-mono">pH 5.4</span>
                      </div>
                      <p className="text-[11px] text-stone-300 leading-snug font-mono">
                        Preserves natural skin flora &amp; acid mantle.
                      </p>
                    </div>
                  </div>

                  {/* Spotlight Ritual Product */}
                  <div className="glass-card rounded-2xl p-4 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={PRODUCTS[2].image}
                        alt={PRODUCTS[2].name}
                        className="w-14 h-14 rounded-xl object-cover border border-cyan-500/30 shadow-md shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">{PRODUCTS[2].name}</span>
                          <span className="text-[10px] bg-cyan-400 text-black font-bold px-1.5 py-0.5 rounded font-mono">Ritual Staple</span>
                        </div>
                        <p className="text-[11px] text-stone-400">{PRODUCTS[2].subtitle}</p>
                        <div className="flex items-center gap-2 mt-0.5 font-mono text-xs">
                          <span className="font-bold text-cyan-300">₹{PRODUCTS[2].price.toLocaleString('en-IN')}</span>
                          <span className="text-[10px] text-stone-400">★ {PRODUCTS[2].rating} ({PRODUCTS[2].reviewsCount} cohorts)</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onAddToCart(PRODUCTS[2])}
                      className="shrink-0 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-mono font-bold px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/30 active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1 border-t border-white/10">
                    <div className="flex items-center gap-2 bg-cyan-950/60 px-3.5 py-2 rounded-xl border border-cyan-500/30 font-mono text-xs">
                      <Tag className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-stone-300">
                        Code <strong className="text-cyan-300">SPRING29</strong> for 29% off
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onNavigate('archive')}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all active:scale-95"
                      >
                        Explore Catalog
                      </button>
                      <button
                        onClick={() => onNavigate('philosophy')}
                        className="text-xs uppercase font-mono tracking-widest text-cyan-300 underline hover:text-white transition-all inline-flex items-center gap-1"
                      >
                        <span>Bio-Manifesto</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Hydration Monitor */}
            <section
              aria-label="Clinical Telemetry Lab"
              className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                    // CLINICAL TELEMETRY
                  </span>
                  <h3 className="text-2xl font-bold font-space text-white">
                    Hydration &amp; Skin Barrier Recovery Monitor
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-xs text-stone-400">Cohort Day:</span>
                  <div className="inline-flex rounded-full bg-[#0E1326] p-1 text-xs border border-cyan-500/20">
                    {([7, 14, 30] as const).map((days) => (
                      <button
                        key={days}
                        onClick={() => setSimulationDays(days)}
                        className={`px-3 py-1 rounded-full font-bold transition-all ${
                          simulationDays === days
                            ? 'bg-cyan-500 text-black shadow'
                            : 'text-stone-400 hover:text-white'
                        }`}
                      >
                        {days} Days
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div className="bg-[#0E1326] p-5 rounded-2xl border border-cyan-500/20">
                  <p className="text-xs text-stone-400 font-mono uppercase">Transepidermal Water Loss</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-bold text-white font-mono">{currentSim.tewl}</span>
                    <span className="text-xs text-cyan-400 font-mono">Optimal</span>
                  </div>
                  <div className="w-full bg-cyan-950/60 h-2 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${currentSim.tewlProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#0E1326] p-5 rounded-2xl border border-cyan-500/20">
                  <p className="text-xs text-stone-400 font-mono uppercase">Microbiome Lipid Diversity</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-bold text-white font-mono">{currentSim.lipidDiversity}</span>
                    <span className="text-xs text-purple-400 font-mono">Enriched</span>
                  </div>
                  <div className="w-full bg-cyan-950/60 h-2 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${currentSim.lipidProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#0E1326] p-5 rounded-2xl border border-cyan-500/20">
                  <p className="text-xs text-stone-400 font-mono uppercase">Cellular Turnover Rate</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-bold text-white font-mono">{currentSim.cellularTurnover}</span>
                    <span className="text-xs text-sky-400 font-mono">Accelerated</span>
                  </div>
                  <div className="w-full bg-cyan-950/60 h-2 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-sky-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${currentSim.cellularProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#0E1326] text-xs font-mono text-cyan-300 border border-cyan-500/20">
                // {simulationDays}-Day Cohort Telemetry: {currentSim.clinicalNote}
              </div>
            </section>
          </div>
        )}

        {/* Cyber Solutions */}
        {activePage === 'solutions' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="py-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                // MOLECULAR BIO-PROTOCOLS
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mt-1 font-space">
                Bespoke Clinical Regimens
              </h1>
              <p className="text-xs text-stone-400 mt-2 font-mono">
                Prescribed cellular interventions engineered for multi-pathway cutaneous repair.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROTOCOLS.map((proto, idx) => (
                <div key={proto.id} className="glass-card p-6 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase">{proto.formulaCode}</span>
                      <span className="text-[10px] font-mono text-purple-300 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30">
                        {proto.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{proto.title}</h3>
                    <p className="text-xs text-stone-300 mt-2 leading-relaxed">{proto.description}</p>
                    <div className="p-3 bg-[#0B0F1F] rounded-xl border border-white/10 mt-4 text-[11px] font-mono text-cyan-300">
                      Outcome: {proto.clinicalOutcome}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                    <span className="text-stone-400">{proto.studyDuration}</span>
                    <button
                      onClick={() => onOpenProtocol(proto)}
                      className="text-cyan-400 hover:text-white underline flex items-center gap-1 font-bold"
                    >
                      <span>Access Protocol</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cyber Archive */}
        {activePage === 'archive' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  // FORMULATION REPOSITORY
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold text-white font-space mt-1">
                  Active Clinical Formulations
                </h1>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {(['all', 'barrier', 'clarity', 'hydrating', 'renewal'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCatalogFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl uppercase transition-all ${
                      catalogFilter === cat
                        ? 'bg-cyan-500 text-black font-bold'
                        : 'bg-[#0E1326] text-stone-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <SwipeableProductCard
                  key={prod.id}
                  product={prod}
                  onAddToCart={onAddToCart}
                  onOpenProtocol={() => {
                    const match = PROTOCOLS.find((p) => p.id === prod.id) || PROTOCOLS[0];
                    onOpenProtocol(match);
                  }}
                  className="bg-[#0E1326] text-white border-cyan-500/30"
                />
              ))}
            </div>
          </div>
        )}

        {/* Cyber Philosophy */}
        {activePage === 'philosophy' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  // THE BIO-ECOLOGY MANIFESTO
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold font-space text-white leading-tight">
                  Care Beyond Boundaries: <br />
                  <span className="text-cyan-400">The Post-Synthetic Doctrine</span>
                </h1>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Founded under the conviction that radiant skin does not require twelve conflicting synthetic chemicals, DERMIQT unites ancestral ethnobotanical extracts with precision biotechnology. Every lipid, humectant, and bioactive peptide is formulated to preserve natural skin ecology.
                </p>
                <div className="p-4 rounded-2xl bg-[#0E1326] border border-cyan-500/20 font-mono text-xs text-stone-400 space-y-2">
                  <p>✔ Cold Micro-Emulsification at 18°C</p>
                  <p>✔ Zero Endocrine Disruptors or Petrochemical Polymers</p>
                  <p>✔ Stratum Corneum Lipid-Identical Fatty Acid Ratios</p>
                </div>
              </div>

              {/* Consultation / Contact */}
              <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/30">
                <span className="text-xs font-mono text-cyan-400">// CONSULTATION DISPATCH</span>
                <h3 className="text-xl font-bold text-white mt-1">Connect with Formulation Chemists</h3>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6 font-mono text-xs">
                  <div>
                    <label className="block text-stone-400 mb-1">CLIENT IDENTITY</label>
                    <input
                      type="text"
                      required
                      placeholder="Elena Rostova"
                      className="w-full bg-[#0B0F1F] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 mb-1">SECURE TRANSMISSION EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="elena@example.com"
                      className="w-full bg-[#0B0F1F] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 mb-1">SKIN CONCERN / NOTES</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Specify barrier restoration goals or active sensitivity profile..."
                      className="w-full bg-[#0B0F1F] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
                  >
                    Transmit Consultation Request
                  </button>
                  {packetSent && (
                    <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Transmission confirmed. Our compounding chemists will respond within 4 hours.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* FAQs */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                // CLINICAL INQUIRIES &amp; FAQ
              </span>
              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-white/5"
                    >
                      <span className="font-bold text-sm text-white font-mono">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${
                          openFaq === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 text-xs text-stone-300 leading-relaxed font-sans border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 bg-[#0B0F1F] border-t border-cyan-500/20 py-8 font-mono text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>// DERMIQT CLINICAL BIOTECHNOLOGY LABORATORIES · ALL DERMAL ENCLAVES NOMINAL</span>
          <span className="text-cyan-400">STATUS: ACTIVE COMPONENT INTEGRITY 100%</span>
        </div>
      </footer>
    </div>
  );
};
