import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Plus,
  Droplets,
  Leaf,
  ShieldCheck,
  Tag,
  ChevronDown,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { PageId, Product, ProtocolDetail } from '../../types';
import { PRODUCTS, PROTOCOLS, LAB_SIMULATIONS } from '../../data/mockData';
import { SwipeableProductCard } from '../SwipeableProductCard';
import { SwipeableCarousel } from '../SwipeableCarousel';

interface CreativeViewProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onAddToCart: (product: Product) => void;
  onOpenProtocol: (protocol: ProtocolDetail) => void;
}

export const CreativeView: React.FC<CreativeViewProps> = ({
  activePage,
  onNavigate,
  onAddToCart,
  onOpenProtocol,
}) => {
  const [simulationDays, setSimulationDays] = useState<7 | 14 | 30>(7);
  const [catalogFilter, setCatalogFilter] = useState<'all' | 'hydrating' | 'barrier' | 'clarity' | 'renewal'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const currentSim = LAB_SIMULATIONS[simulationDays];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (catalogFilter === 'all') return true;
    return p.category === catalogFilter;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const FAQS = [
    {
      q: 'Why do you hate 12-step skincare routines?',
      a: 'Because layering 12 chemical formulas causes ingredient clash, disrupts your skin microbiome, and wastes your money. Our cold micro-emulsified formulas do in 2 steps what bloated routines fail to do in 12.',
    },
    {
      q: 'Are these actually 100% natural, or is it greenwashing?',
      a: '100% real cold-pressed squalane, wild rose geranium, fermented organic rice, and montmorillonite clay. Zero synthetic emulsifiers, zero silicones, zero fillers. Check the ingredient lists on every jar.',
    },
    {
      q: 'Will this make sensitive skin freak out?',
      a: 'Nope. Every formula is physiologically buffered to pH 5.4 to match your skin acid mantle. We test on real humans with compromised barriers, not test tubes.',
    },
    {
      q: 'How fast will I see results?',
      a: 'Hydration jump happens within 60 seconds. Stratum corneum barrier restoration locks in by Day 7. Full epidermal clarity hits by Day 30.',
    },
  ];

  return (
    <div className="text-[#121212] font-syne min-h-screen">
      {/* Brutalist Marquee Ticker */}
      <div className="bg-[#D8FF3E] text-black py-2.5 overflow-hidden border-b-4 border-black select-none font-extrabold text-xs uppercase tracking-wider">
        <div className="animate-marquee-ltr flex items-center gap-12">
          <div className="flex items-center gap-6 whitespace-nowrap shrink-0">
            <span>⚡ CARE BEYOND BOUNDARIES</span>
            <span>★ SPRING BOTANICAL DROPS 2026</span>
            <span>⚡ FREE WORLDWIDE SHIPPING OVER ₹2,500</span>
            <span>★ ZERO BS FILLERS · 100% ORGANIC</span>
          </div>
          <div className="flex items-center gap-6 whitespace-nowrap shrink-0">
            <span>⚡ CARE BEYOND BOUNDARIES</span>
            <span>★ SPRING BOTANICAL DROPS 2026</span>
            <span>⚡ FREE WORLDWIDE SHIPPING OVER ₹2,500</span>
            <span>★ ZERO BS FILLERS · 100% ORGANIC</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Creative Home */}
        {activePage === 'home' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Brutalist Hero */}
            <div className="border-4 border-black p-6 sm:p-12 bg-white brutalist-shadow relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="inline-block bg-[#D8FF3E] text-black border-2 border-black font-mono font-bold text-xs uppercase px-3 py-1 brutalist-shadow">
                    ⚡ RADICAL BOTANICALS
                  </span>

                  <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-[0.95]">
                    Ditch The <span className="bg-[#D8FF3E] px-2 border-2 border-black">12-Step Myth.</span> <br />
                    Skincare That <span className="text-[#0055FF]">Actually Works.</span>
                  </h1>

                  <p className="text-base sm:text-lg font-medium text-stone-800 max-w-xl leading-relaxed">
                    Why drown your face in twenty confusing bottles? DERMIQT packs cold-pressed wild botanicals and micro-lipids into ultra-potent formulas that get you glowing in seconds.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="px-3 py-1.5 bg-yellow-300 border-2 border-black font-mono text-xs font-bold uppercase brutalist-shadow">
                      ★ 100% Clean
                    </span>
                    <span className="px-3 py-1.5 bg-pink-300 border-2 border-black font-mono text-xs font-bold uppercase brutalist-shadow">
                      ⚡ 36h Lipid Lock
                    </span>
                    <span className="px-3 py-1.5 bg-cyan-300 border-2 border-black font-mono text-xs font-bold uppercase brutalist-shadow">
                      🔥 29k+ Glowing Faces
                    </span>
                  </div>
                </div>

                {/* Hero Visual */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-md h-96 border-4 border-black bg-[#D8FF3E] brutalist-shadow overflow-hidden group">
                    <img
                      src="/assets/images/hero_man_cleanser.jpg"
                      alt="DERMIQT Hero Cleanser"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white border-2 border-black p-3 brutalist-shadow flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase bg-[#D8FF3E] px-1.5 py-0.5 border border-black">
                          HOT DROP
                        </span>
                        <p className="text-xs font-extrabold uppercase mt-1">Exfoliator Gel Gelée</p>
                        <span className="text-xs font-mono font-bold text-[#0055FF]">₹{PRODUCTS[1].price.toLocaleString('en-IN')}</span>
                      </div>
                      <button
                        onClick={() => onAddToCart(PRODUCTS[1])}
                        className="bg-[#0055FF] text-white border-2 border-black px-4 py-2 font-bold text-xs uppercase brutalist-shadow brutalist-shadow-hover transition-all"
                      >
                        Grab
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brutalist Bento Formulations */}
            <section aria-label="Brutalist Formulations Bento">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-4 border-b-4 border-black gap-2">
                <div>
                  <span className="text-xs font-mono font-bold uppercase bg-pink-300 px-2 py-0.5 border-2 border-black">
                    PURE BOTANICALS
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold uppercase mt-2">
                    Potent Botanical Drops
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('archive')}
                  className="bg-[#D8FF3E] border-2 border-black px-4 py-2 font-extrabold text-xs uppercase brutalist-shadow brutalist-shadow-hover transition-all flex items-center gap-1.5"
                >
                  <span>See All ({PRODUCTS.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Sun Dew Serum */}
                <div className="md:col-span-5 border-4 border-black bg-white p-6 brutalist-shadow flex flex-col justify-between">
                  <div>
                    <span className="bg-yellow-300 border-2 border-black px-2 py-0.5 text-xs font-mono font-bold uppercase">
                      Formula #04 · Barrier Repair
                    </span>
                    <h3 className="text-2xl font-extrabold uppercase mt-3">{PRODUCTS[0].name}</h3>
                    <p className="text-xs font-medium text-stone-700 mt-2 leading-relaxed">{PRODUCTS[0].subtitle}</p>
                  </div>

                  <div className="my-6 h-52 bg-[#FFFBF2] border-2 border-black flex items-center justify-center p-4 relative overflow-hidden">
                    <img
                      src={PRODUCTS[0].image}
                      alt={PRODUCTS[0].name}
                      className="w-32 h-44 object-cover border-2 border-black shadow"
                    />
                    <span className="absolute top-2 right-2 bg-pink-400 text-black border border-black text-[10px] font-mono font-extrabold px-2 py-0.5">
                      92% Lipid Lock
                    </span>
                  </div>

                  <div className="pt-4 border-t-2 border-black flex items-center justify-between">
                    <div>
                      <p className="text-xs font-extrabold uppercase">{PRODUCTS[0].name}</p>
                      <span className="font-mono text-sm font-extrabold text-[#0055FF]">
                        ₹{PRODUCTS[0].price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <button
                      onClick={() => onAddToCart(PRODUCTS[0])}
                      className="bg-[#D8FF3E] border-2 border-black px-4 py-2 font-extrabold text-xs uppercase brutalist-shadow brutalist-shadow-hover transition-all"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>

                {/* Sub Duos */}
                <div className="md:col-span-4 border-4 border-black bg-yellow-200 p-6 brutalist-shadow flex flex-col justify-between">
                  <div>
                    <span className="bg-white border-2 border-black px-2 py-0.5 text-xs font-mono font-bold uppercase">
                      Daily Power Duos
                    </span>
                    <h3 className="text-2xl font-extrabold uppercase mt-2">Zero-Filler Essentials</h3>
                  </div>

                  <div className="space-y-4 my-6">
                    <div className="bg-white border-2 border-black p-3.5 brutalist-shadow flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={PRODUCTS[3].image}
                          alt={PRODUCTS[3].name}
                          className="w-12 h-12 object-cover border border-black"
                        />
                        <div>
                          <p className="text-xs font-extrabold uppercase">{PRODUCTS[3].name}</p>
                          <span className="text-xs font-mono font-bold text-[#0055FF]">₹{PRODUCTS[3].price.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onAddToCart(PRODUCTS[3])}
                        className="bg-[#D8FF3E] border border-black px-3 py-1 font-bold text-xs uppercase hover:bg-yellow-300"
                      >
                        + Grab
                      </button>
                    </div>

                    <div className="bg-white border-2 border-black p-3.5 brutalist-shadow flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={PRODUCTS[4].image}
                          alt={PRODUCTS[4].name}
                          className="w-12 h-12 object-cover border border-black"
                        />
                        <div>
                          <p className="text-xs font-extrabold uppercase">{PRODUCTS[4].name}</p>
                          <span className="text-xs font-mono font-bold text-[#0055FF]">₹{PRODUCTS[4].price.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onAddToCart(PRODUCTS[4])}
                        className="bg-[#D8FF3E] border border-black px-3 py-1 font-bold text-xs uppercase hover:bg-yellow-300"
                      >
                        + Grab
                      </button>
                    </div>
                  </div>

                  <div className="pt-3 border-t-2 border-black flex items-center justify-between text-xs font-mono font-bold">
                    <span>Clinical Bio-actives</span>
                    <button
                      onClick={() => onOpenProtocol(PROTOCOLS[1])}
                      className="underline flex items-center gap-1"
                    >
                      <span>Study Specs</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Formulator Card */}
                <div className="md:col-span-3 border-4 border-black bg-pink-300 p-6 brutalist-shadow flex flex-col justify-between">
                  <div>
                    <span className="bg-black text-white px-2 py-0.5 text-[10px] font-mono font-bold uppercase">
                      NO BS DOCTRINE
                    </span>
                    <p className="text-base font-extrabold leading-snug mt-4">
                      &quot;Stop suffocating your skin in 12 synthetic layers. Feed your cellular microbiome cold-pressed living lipids and let your natural barrier do its job.&quot;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-black">
                    <p className="text-xs font-extrabold uppercase">Dr. Sarah Althaus</p>
                    <span className="text-[10px] font-mono font-bold">Head of Formulation</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Swipeable Carousel */}
            <section aria-label="Curated Formulations Gallery">
              <div className="flex justify-between items-end mb-6 pb-4 border-b-4 border-black">
                <div>
                  <span className="text-xs font-mono font-bold uppercase bg-lime-300 px-2 py-0.5 border-2 border-black">
                    THE COLLECTION
                  </span>
                  <h3 className="text-3xl font-extrabold uppercase mt-2">
                    Swipeable Product Gallery
                  </h3>
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
                      className="border-4 border-black bg-white brutalist-shadow"
                    />
                  </div>
                ))}
              </SwipeableCarousel>
            </section>

            {/* Radiance Story Banner (Creative Brutalist Edition) */}
            <section
              aria-label="Radiance Story Banner"
              className="border-4 border-black bg-[#FFE500] p-6 sm:p-10 brutalist-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 h-72 sm:h-96 lg:h-auto min-h-[340px] relative overflow-hidden border-4 border-black bg-white brutalist-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Radiant Skin Soul Portrait"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black text-white p-2 text-center text-xs font-mono font-bold uppercase border-2 border-black">
                    ⚡ SACRED SELF-CARE · RITUAL 03
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="bg-black text-[#D8FF3E] px-3 py-1 font-mono text-xs font-bold uppercase border-2 border-black">
                      ★ RADIANCE MANIFESTO
                    </span>

                    <h3 className="text-3xl sm:text-5xl font-extrabold uppercase leading-tight mt-3">
                      Skin glows when the <br /><span className="bg-white px-2 border-2 border-black">soul does</span>
                    </h3>

                    <p className="text-sm sm:text-base font-bold text-stone-900 mt-3 leading-relaxed max-w-2xl">
                      Great skin doesn&apos;t come from dozens of complex steps, just the right botanical actives compounded to work in harmony with your cellular microbiome.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white border-2 border-black p-3 brutalist-shadow">
                      <div className="flex items-center gap-1.5 font-extrabold text-xs uppercase mb-1">
                        <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>100% Clean</span>
                      </div>
                      <p className="text-[11px] font-medium text-stone-700">Cold-microemulsified squalane &amp; rose lipids.</p>
                    </div>

                    <div className="bg-white border-2 border-black p-3 brutalist-shadow">
                      <div className="flex items-center gap-1.5 font-extrabold text-xs uppercase mb-1">
                        <Droplets className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>36h Lock</span>
                      </div>
                      <p className="text-[11px] font-medium text-stone-700">Multi-molecular weights seal deep dermal moisture.</p>
                    </div>

                    <div className="bg-white border-2 border-black p-3 brutalist-shadow">
                      <div className="flex items-center gap-1.5 font-extrabold text-xs uppercase mb-1">
                        <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>pH 5.4</span>
                      </div>
                      <p className="text-[11px] font-medium text-stone-700">Preserves natural skin flora &amp; acid mantle.</p>
                    </div>
                  </div>

                  {/* Spotlight Ritual Product */}
                  <div className="bg-white border-2 border-black p-4 brutalist-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={PRODUCTS[2].image}
                        alt={PRODUCTS[2].name}
                        className="w-14 h-14 object-cover border-2 border-black shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-extrabold uppercase">{PRODUCTS[2].name}</span>
                          <span className="text-[10px] bg-[#D8FF3E] px-1.5 py-0.5 border border-black font-mono font-bold">RITUAL PICK</span>
                        </div>
                        <p className="text-[11px] font-medium text-stone-600">{PRODUCTS[2].subtitle}</p>
                        <div className="flex items-center gap-2 mt-0.5 text-xs font-mono font-bold">
                          <span className="text-[#0055FF]">₹{PRODUCTS[2].price.toLocaleString('en-IN')}</span>
                          <span className="text-stone-500">★ {PRODUCTS[2].rating} ({PRODUCTS[2].reviewsCount} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onAddToCart(PRODUCTS[2])}
                      className="shrink-0 bg-[#D8FF3E] hover:bg-lime-200 border-2 border-black font-extrabold text-xs uppercase px-5 py-2.5 brutalist-shadow brutalist-shadow-hover transition-all flex items-center justify-center gap-1"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Grab Now</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t-2 border-black">
                    <div className="bg-white border-2 border-black px-4 py-2 font-mono text-xs font-bold brutalist-shadow">
                      COUPON: <span className="bg-[#D8FF3E] px-1">SPRING29</span> FOR 29% OFF
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onNavigate('archive')}
                        className="bg-[#0055FF] text-white border-2 border-black px-6 py-2.5 font-extrabold text-xs uppercase brutalist-shadow brutalist-shadow-hover transition-all"
                      >
                        EXPLORE DROPS
                      </button>
                      <button
                        onClick={() => onNavigate('philosophy')}
                        className="bg-white text-black border-2 border-black px-4 py-2.5 font-extrabold text-xs uppercase brutalist-shadow brutalist-shadow-hover transition-all flex items-center gap-1"
                      >
                        <span>MANIFESTO</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Brutalist Hydration Monitor */}
            <section
              aria-label="Hydration Monitor"
              className="border-4 border-black bg-white p-6 sm:p-8 brutalist-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b-4 border-black gap-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase bg-pink-300 px-2 py-0.5 border-2 border-black">
                    CLINICAL METRICS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase mt-2">
                    Hydration &amp; Skin Barrier Recovery Monitor
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs font-bold">
                  <span>COHORT:</span>
                  <div className="inline-flex border-2 border-black bg-[#FFFBF2] p-1">
                    {([7, 14, 30] as const).map((days) => (
                      <button
                        key={days}
                        onClick={() => setSimulationDays(days)}
                        className={`px-3 py-1 font-extrabold uppercase transition-all ${
                          simulationDays === days
                            ? 'bg-[#D8FF3E] border border-black'
                            : 'text-stone-700 hover:bg-yellow-200'
                        }`}
                      >
                        {days} Days
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div className="p-5 border-2 border-black bg-[#FFFBF2] brutalist-shadow">
                  <p className="text-xs font-mono font-bold uppercase text-stone-600">Transepidermal Water Loss</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-extrabold">{currentSim.tewl}</span>
                    <span className="text-xs font-bold bg-[#D8FF3E] px-1.5 py-0.5 border border-black font-mono">OPTIMAL</span>
                  </div>
                  <div className="w-full bg-white h-3 border-2 border-black mt-3 overflow-hidden">
                    <div
                      className="bg-[#0055FF] h-full transition-all duration-500"
                      style={{ width: `${currentSim.tewlProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="p-5 border-2 border-black bg-[#FFFBF2] brutalist-shadow">
                  <p className="text-xs font-mono font-bold uppercase text-stone-600">Microbiome Lipid Diversity</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-extrabold">{currentSim.lipidDiversity}</span>
                    <span className="text-xs font-bold bg-pink-300 px-1.5 py-0.5 border border-black font-mono">ENRICHED</span>
                  </div>
                  <div className="w-full bg-white h-3 border-2 border-black mt-3 overflow-hidden">
                    <div
                      className="bg-pink-500 h-full transition-all duration-500"
                      style={{ width: `${currentSim.lipidProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="p-5 border-2 border-black bg-[#FFFBF2] brutalist-shadow">
                  <p className="text-xs font-mono font-bold uppercase text-stone-600">Cellular Turnover Rate</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-extrabold">{currentSim.cellularTurnover}</span>
                    <span className="text-xs font-bold bg-yellow-300 px-1.5 py-0.5 border border-black font-mono">ACCELERATED</span>
                  </div>
                  <div className="w-full bg-white h-3 border-2 border-black mt-3 overflow-hidden">
                    <div
                      className="bg-[#D8FF3E] h-full transition-all duration-500"
                      style={{ width: `${currentSim.cellularProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 border-2 border-black bg-yellow-100 font-mono text-xs font-bold">
                ⚡ {simulationDays}-DAY COHORT REPORT: {currentSim.clinicalNote}
              </div>
            </section>
          </div>
        )}

        {/* Creative Solutions */}
        {activePage === 'solutions' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="border-4 border-black bg-yellow-300 p-8 brutalist-shadow">
              <span className="bg-black text-white px-2 py-0.5 text-xs font-mono font-bold uppercase">
                CLINICAL PROTOCOLS
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold uppercase mt-2">Radical Skin Regimens</h1>
              <p className="text-xs font-bold font-mono uppercase mt-2">
                Every formula is compounded to target cellular restoration without unnecessary fillers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROTOCOLS.map((proto) => (
                <div key={proto.id} className="border-4 border-black bg-white p-6 brutalist-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-[#D8FF3E] border-2 border-black px-2 py-0.5 font-mono text-xs font-bold uppercase">
                        {proto.formulaCode}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase">{proto.category}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold uppercase mt-2">{proto.title}</h3>
                    <p className="text-xs font-medium text-stone-700 mt-2 leading-relaxed">{proto.description}</p>
                    <div className="p-3 bg-pink-100 border-2 border-black mt-4 font-mono text-xs font-bold">
                      Outcome: {proto.clinicalOutcome}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-black flex justify-between items-center font-mono text-xs font-bold">
                    <span>{proto.studyDuration}</span>
                    <button
                      onClick={() => onOpenProtocol(proto)}
                      className="bg-black text-white px-4 py-2 uppercase hover:bg-stone-800 flex items-center gap-1"
                    >
                      <span>View Protocol</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Creative Archive */}
        {activePage === 'archive' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b-4 border-black gap-4">
              <div>
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono font-bold uppercase">
                  THE ARCHIVE
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold uppercase mt-2">
                  All Botanical Drops
                </h1>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
                {(['all', 'barrier', 'clarity', 'hydrating', 'renewal'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCatalogFilter(cat)}
                    className={`px-3.5 py-1.5 uppercase border-2 border-black transition-all ${
                      catalogFilter === cat
                        ? 'bg-[#D8FF3E] brutalist-shadow'
                        : 'bg-white text-stone-800 hover:bg-yellow-200'
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
                  className="border-4 border-black bg-white brutalist-shadow"
                />
              ))}
            </div>
          </div>
        )}

        {/* Creative Philosophy */}
        {activePage === 'philosophy' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 border-4 border-black bg-white p-8 brutalist-shadow space-y-4">
                <span className="bg-pink-400 text-black border-2 border-black font-mono font-bold text-xs uppercase px-3 py-1">
                  THE MANIFESTO
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold uppercase leading-tight">
                  Care Beyond Boundaries: <br />
                  <span className="bg-[#D8FF3E] px-2 border-2 border-black">The Anti-BS Skincare</span>
                </h2>
                <p className="text-base font-medium text-stone-800 leading-relaxed">
                  Founded under the belief that radiant skin does not require twelve confusing steps, DERMIQT unites ancestral ethnobotanical extracts with precision biotechnology. Every lipid, humectant, and bioactive peptide is formulated to preserve natural skin ecology.
                </p>
                <div className="p-4 bg-yellow-200 border-2 border-black font-mono text-xs font-bold space-y-1.5">
                  <p>✔ 100% Organic &amp; Cold Micro-Emulsified</p>
                  <p>✔ Zero Endocrine Disruptors or Synthetic Fillers</p>
                  <p>✔ Natural Physiological Acid Mantle Balance (pH 5.4)</p>
                </div>
              </div>

              {/* Consultation Booking Form */}
              <div className="lg:col-span-6 border-4 border-black bg-yellow-300 p-8 brutalist-shadow">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono font-bold uppercase">
                  TALK TO CHEMISTS
                </span>
                <h3 className="text-2xl font-extrabold uppercase mt-2">Book a Skin Consultation</h3>
                <p className="text-xs font-bold text-stone-800 mt-1">
                  We respond faster than your morning espresso kicks in.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="Elena Rostova"
                      className="w-full bg-white border-2 border-black p-3 font-mono text-xs focus:outline-none focus:bg-pink-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase mb-1">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="elena@example.com"
                      className="w-full bg-white border-2 border-black p-3 font-mono text-xs focus:outline-none focus:bg-pink-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase mb-1">SKIN GOALS / QUESTIONS</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your current barrier, sensitivity, or skin goals..."
                      className="w-full bg-white border-2 border-black p-3 font-mono text-xs focus:outline-none focus:bg-pink-100"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-stone-800 border-2 border-black py-3.5 font-extrabold uppercase text-xs brutalist-shadow transition-all"
                  >
                    SEND MESSAGE →
                  </button>
                  {submitted && (
                    <div className="p-3 bg-white border-2 border-black font-mono text-xs font-bold text-emerald-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Message received! Our compounding chemists will be in touch shortly.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* FAQs */}
            <div className="border-4 border-black bg-white p-6 sm:p-8 brutalist-shadow space-y-4">
              <span className="bg-[#D8FF3E] border-2 border-black px-2 py-0.5 text-xs font-mono font-bold uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <div className="space-y-3 mt-4">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="border-2 border-black bg-[#FFFBF2]">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 text-left flex justify-between items-center gap-4 hover:bg-yellow-200 transition-colors"
                    >
                      <span className="font-extrabold text-sm uppercase">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 pt-0 text-xs font-medium text-stone-800 border-t border-black bg-white">
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

      <footer className="mt-16 bg-[#121212] text-white border-t-4 border-black py-8 font-mono text-xs font-bold">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© 2026 DERMIQT CLINICAL BOTANICAL LABORATORIES · RADICAL SKINCARE WITHOUT BOUNDARIES</span>
          <span className="bg-[#D8FF3E] text-black px-2 py-0.5 border border-white">CARE BEYOND BOUNDARIES</span>
        </div>
      </footer>
    </div>
  );
};
