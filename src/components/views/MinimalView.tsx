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
  CheckCircle2
} from 'lucide-react';
import { PageId, Product, ProtocolDetail } from '../../types';
import { PRODUCTS, PROTOCOLS, LAB_SIMULATIONS } from '../../data/mockData';
import { SwipeableProductCard } from '../SwipeableProductCard';
import { SwipeableCarousel } from '../SwipeableCarousel';

interface MinimalViewProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onAddToCart: (product: Product) => void;
  onOpenProtocol: (protocol: ProtocolDetail) => void;
}

export const MinimalView: React.FC<MinimalViewProps> = ({
  activePage,
  onNavigate,
  onAddToCart,
  onOpenProtocol,
}) => {
  const [simulationDays, setSimulationDays] = useState<7 | 14 | 30>(7);
  const [catalogFilter, setCatalogFilter] = useState<'all' | 'hydrating' | 'barrier' | 'clarity' | 'renewal'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const currentSim = LAB_SIMULATIONS[simulationDays];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (catalogFilter === 'all') return true;
    return p.category === catalogFilter;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  const FAQS = [
    {
      q: 'What distinguishes DERMIQT reductionist formulations?',
      a: 'We eliminate synthetic emulsifiers, stabilizing texturizers, and fragrance compounds. Every single ingredient serves an active biological purpose directly targeted at cellular stratum corneum health.',
    },
    {
      q: 'How does cold micro-emulsification benefit sensitive skin?',
      a: 'Traditional emulsification relies on high heat which degrades delicate botanical fatty acids. Cold shearing preserves living lipids intact, ensuring biocompatibility without cutaneous inflammation.',
    },
    {
      q: 'Can these products be combined with prescriptive dermatology?',
      a: 'Yes. DERMIQT formulas maintain physiological pH (5.4) and support the acid mantle, making them exceptional companions alongside tretinoin, azelaic acid, or post-peel recovery.',
    },
    {
      q: 'How are clinical cohort studies conducted?',
      a: 'All trials are conducted across 30-day double-blinded cohorts measuring transepidermal water loss (TEWL) and barrier lipid recovery using non-invasive corneometry.',
    },
  ];

  return (
    <div className="text-stone-900 font-sans min-h-screen">
      {/* Top Minimal Moving Announcement Bar */}
      <div className="bg-stone-100 text-stone-800 py-2.5 overflow-hidden border-b border-stone-200 select-none font-mono text-xs">
        <div className="animate-marquee-ltr flex items-center gap-12 tracking-wider">
          <div className="flex items-center gap-6 whitespace-nowrap shrink-0">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-stone-500" />
              Care Beyond Boundaries · Spring Botanical Formulations 2026
            </span>
            <span className="text-stone-400">·</span>
            <span className="font-semibold text-stone-950">
              Complimentary Global Delivery on Orders over ₹2,500
            </span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-600">
              100% Organic &amp; Cold Micro-Emulsified
            </span>
          </div>

          <div className="flex items-center gap-6 whitespace-nowrap shrink-0">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-stone-500" />
              Care Beyond Boundaries · Spring Botanical Formulations 2026
            </span>
            <span className="text-stone-400">·</span>
            <span className="font-semibold text-stone-950">
              Complimentary Global Delivery on Orders over ₹2,500
            </span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-600">
              100% Organic &amp; Cold Micro-Emulsified
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Minimal Home */}
        {activePage === 'home' && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* Minimal Hero */}
            <div className="py-8 border-b border-stone-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs uppercase tracking-widest text-stone-400 font-mono">
                    DERMATOLOGICAL PURITY · DERMIQT ATELIER
                  </span>

                  <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-stone-950 leading-[1.05]">
                    Care Beyond Boundaries:{' '}
                    <span className="italic font-normal text-stone-500">
                      Form follows cellular biology.
                    </span>
                  </h1>

                  <p className="text-stone-600 text-sm max-w-xl leading-relaxed font-light">
                    A reductionist approach to skincare. We compound pure botanical actives with precision biotechnology to restore natural dermal equilibrium. No fillers, no synthetic fragrances, no twelve-step routines.
                  </p>

                  <div className="grid grid-cols-3 gap-6 pt-4 border-t border-stone-200">
                    <div>
                      <span className="text-3xl font-light text-stone-950">100%</span>
                      <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">Organic</p>
                    </div>
                    <div>
                      <span className="text-3xl font-light text-stone-950">36h</span>
                      <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">Barrier Retention</p>
                    </div>
                    <div>
                      <span className="text-3xl font-light text-stone-950">29k+</span>
                      <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">Active Rituals</p>
                    </div>
                  </div>
                </div>

                {/* Hero Visual */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-md h-96 overflow-hidden rounded-2xl bg-stone-100 border border-stone-200 group">
                    <img
                      src="/assets/images/hero_man_cleanser.jpg"
                      alt="DERMIQT Cleanser Ritual"
                      className="w-full h-full object-cover object-center filter grayscale-[25%] group-hover:grayscale-0 transition-all duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-stone-200 flex items-center justify-between shadow-sm">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                          Recommended
                        </span>
                        <p className="text-xs font-semibold text-stone-950">Exfoliator Gel Gelée</p>
                        <span className="text-xs font-mono text-stone-700">₹{PRODUCTS[1].price.toLocaleString('en-IN')}</span>
                      </div>
                      <button
                        onClick={() => onAddToCart(PRODUCTS[1])}
                        className="bg-stone-950 hover:bg-stone-800 text-white text-xs px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimal Bento Formulations */}
            <section aria-label="Selected Formulations">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                    Pure Skincare
                  </span>
                  <h2 className="text-3xl font-light text-stone-950 mt-1">
                    Selected Botanical Formulations
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('archive')}
                  className="mt-3 sm:mt-0 text-xs font-mono uppercase tracking-widest flex items-center gap-1.5 text-stone-950 hover:text-stone-500 transition-colors"
                >
                  <span>Complete Catalog ({PRODUCTS.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Sun Dew Serum */}
                <div className="md:col-span-5 border border-stone-200 rounded-2xl p-6 flex flex-col justify-between hover:border-stone-400 transition-colors">
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-widest">
                      Formula #04 · Barrier Repair
                    </span>
                    <h3 className="text-2xl font-light text-stone-950 mt-2">{PRODUCTS[0].name}</h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{PRODUCTS[0].subtitle}</p>
                  </div>

                  <div className="my-6 h-52 bg-stone-50 rounded-xl flex items-center justify-center p-4">
                    <img
                      src={PRODUCTS[0].image}
                      alt={PRODUCTS[0].name}
                      className="w-32 h-44 object-cover rounded-lg shadow-sm"
                    />
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-stone-950">{PRODUCTS[0].name}</p>
                      <span className="text-xs font-mono font-bold text-stone-700">
                        ₹{PRODUCTS[0].price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <button
                      onClick={() => onAddToCart(PRODUCTS[0])}
                      className="bg-stone-950 hover:bg-stone-800 text-white text-xs px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>

                {/* Sub-formulations */}
                <div className="md:col-span-4 border border-stone-200 rounded-2xl p-6 flex flex-col justify-between hover:border-stone-400 transition-colors">
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-widest">
                      Daily Cellular Regimen
                    </span>
                    <h3 className="text-xl font-light text-stone-950 mt-2">Essential Duos</h3>
                  </div>

                  <div className="space-y-4 my-6">
                    <div className="p-4 bg-stone-50 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={PRODUCTS[3].image}
                          alt={PRODUCTS[3].name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-xs font-medium text-stone-950">{PRODUCTS[3].name}</p>
                          <span className="text-xs font-mono text-stone-500">₹{PRODUCTS[3].price.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onAddToCart(PRODUCTS[3])}
                        className="text-xs font-medium text-stone-950 underline hover:text-stone-600"
                      >
                        + Add
                      </button>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={PRODUCTS[4].image}
                          alt={PRODUCTS[4].name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-xs font-medium text-stone-950">{PRODUCTS[4].name}</p>
                          <span className="text-xs font-mono text-stone-500">₹{PRODUCTS[4].price.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onAddToCart(PRODUCTS[4])}
                        className="text-xs font-medium text-stone-950 underline hover:text-stone-600"
                      >
                        + Add
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                    <span className="text-stone-500">Dermatologically Certified</span>
                    <button
                      onClick={() => onOpenProtocol(PROTOCOLS[1])}
                      className="text-stone-950 underline font-medium flex items-center gap-1"
                    >
                      <span>Study 02</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Formulator Note */}
                <div className="md:col-span-3 border border-stone-200 rounded-2xl p-6 flex flex-col justify-between bg-stone-50">
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-widest">
                      Formulator Note
                    </span>
                    <p className="text-sm text-stone-800 leading-relaxed mt-4 font-light italic">
                      &quot;Great skin does not require twelve confusing steps. It requires biological discipline and the right botanical lipids compounded to work in harmony with your natural microbiome.&quot;
                    </p>
                  </div>

                  <div className="pt-6 border-t border-stone-200">
                    <p className="text-xs font-semibold text-stone-950">Dr. Sarah Althaus</p>
                    <span className="text-[11px] text-stone-500 font-mono">Head of Formulation</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Swipeable Carousel */}
            <section aria-label="Curated Formulations Gallery">
              <div className="flex justify-between items-end mb-6 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                    Gallery
                  </span>
                  <h3 className="text-2xl font-light text-stone-950 mt-1">
                    Swipeable Formulation Collection
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
                      className="bg-white text-stone-900 border-stone-200"
                    />
                  </div>
                ))}
              </SwipeableCarousel>
            </section>

            {/* Radiance Story Banner (Minimal Edition) */}
            <section
              aria-label="Radiance Story Banner"
              className="border border-stone-200 rounded-3xl overflow-hidden bg-stone-50 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 h-72 sm:h-96 lg:h-auto min-h-[340px] relative overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Radiant Skin Soul Portrait"
                    className="w-full h-full object-cover object-center filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">
                      Ritual 03 · Cellular Radiance
                    </span>
                    <p className="text-xs text-white font-light mt-0.5">
                      Living botanical actives compounded with respect for cellular integrity.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                      Sacred Self-Care
                    </span>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-950 leading-tight mt-1">
                      Skin glows when the <span className="italic font-normal text-stone-600">soul does</span>
                    </h3>

                    <p className="text-sm text-stone-600 mt-3 leading-relaxed max-w-2xl font-light">
                      Great skin doesn&apos;t come from dozens of complex steps, just the right botanical actives compounded to work in harmony with your cellular microbiome.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                      <div className="flex items-center gap-2 text-stone-950 mb-1">
                        <Leaf className="w-4 h-4 shrink-0 text-stone-700" />
                        <span className="text-xs font-semibold uppercase tracking-wider font-mono">100% Clean</span>
                      </div>
                      <p className="text-[11px] text-stone-500 leading-snug">
                        Cold micro-emulsified plant squalane &amp; rose lipids.
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                      <div className="flex items-center gap-2 text-stone-950 mb-1">
                        <Droplets className="w-4 h-4 shrink-0 text-stone-700" />
                        <span className="text-xs font-semibold uppercase tracking-wider font-mono">36h Lock</span>
                      </div>
                      <p className="text-[11px] text-stone-500 leading-snug">
                        Multi-molecular weights seal deep dermal hydration.
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                      <div className="flex items-center gap-2 text-stone-950 mb-1">
                        <ShieldCheck className="w-4 h-4 shrink-0 text-stone-700" />
                        <span className="text-xs font-semibold uppercase tracking-wider font-mono">pH 5.4</span>
                      </div>
                      <p className="text-[11px] text-stone-500 leading-snug">
                        Preserves natural skin flora &amp; cellular acid mantle.
                      </p>
                    </div>
                  </div>

                  {/* Spotlight Ritual Product */}
                  <div className="bg-white rounded-2xl p-4 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={PRODUCTS[2].image}
                        alt={PRODUCTS[2].name}
                        className="w-14 h-14 rounded-xl object-cover border border-stone-200 shadow-sm shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-stone-950">{PRODUCTS[2].name}</span>
                          <span className="text-[10px] bg-stone-100 text-stone-800 px-1.5 py-0.5 rounded font-mono font-medium">Ritual Pick</span>
                        </div>
                        <p className="text-[11px] text-stone-500">{PRODUCTS[2].subtitle}</p>
                        <div className="flex items-center gap-2 mt-0.5 text-xs">
                          <span className="font-mono font-semibold text-stone-950">₹{PRODUCTS[2].price.toLocaleString('en-IN')}</span>
                          <span className="text-[10px] text-stone-400">★ {PRODUCTS[2].rating} ({PRODUCTS[2].reviewsCount} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onAddToCart(PRODUCTS[2])}
                      className="shrink-0 bg-stone-950 hover:bg-stone-800 text-white text-xs font-medium px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1 border-t border-stone-200">
                    <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-stone-200 text-xs">
                      <Tag className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                      <span className="text-stone-700">
                        Code <strong className="text-stone-950 font-mono">SPRING29</strong> for 29% off
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onNavigate('archive')}
                        className="bg-stone-950 hover:bg-stone-800 text-white font-medium px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all"
                      >
                        Explore Catalog
                      </button>
                      <button
                        onClick={() => onNavigate('philosophy')}
                        className="text-xs uppercase font-mono tracking-widest text-stone-950 underline hover:text-stone-600 transition-colors inline-flex items-center gap-1"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Minimal Hydration Monitor */}
            <section
              aria-label="Hydration Monitor"
              className="border border-stone-200 rounded-3xl p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                    Clinical Telemetry
                  </span>
                  <h3 className="text-2xl font-light text-stone-950 mt-0.5">
                    Hydration &amp; Skin Barrier Recovery Monitor
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-stone-500">Cohort Day:</span>
                  <div className="inline-flex rounded-full bg-stone-100 p-1 border border-stone-200">
                    {([7, 14, 30] as const).map((days) => (
                      <button
                        key={days}
                        onClick={() => setSimulationDays(days)}
                        className={`px-3 py-1 rounded-full font-medium transition-all ${
                          simulationDays === days
                            ? 'bg-stone-950 text-white shadow-sm'
                            : 'text-stone-600 hover:text-stone-950'
                        }`}
                      >
                        {days} Days
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <p className="text-xs text-stone-500 font-mono uppercase">Transepidermal Water Loss</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-light text-stone-950">{currentSim.tewl}</span>
                    <span className="text-xs text-stone-500 font-mono">Optimal</span>
                  </div>
                  <div className="w-full bg-stone-200 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-stone-950 h-full rounded-full transition-all duration-500"
                      style={{ width: `${currentSim.tewlProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <p className="text-xs text-stone-500 font-mono uppercase">Microbiome Lipid Diversity</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-light text-stone-950">{currentSim.lipidDiversity}</span>
                    <span className="text-xs text-stone-500 font-mono">Enriched</span>
                  </div>
                  <div className="w-full bg-stone-200 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-stone-700 h-full rounded-full transition-all duration-500"
                      style={{ width: `${currentSim.lipidProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <p className="text-xs text-stone-500 font-mono uppercase">Cellular Turnover Rate</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-light text-stone-950">{currentSim.cellularTurnover}</span>
                    <span className="text-xs text-stone-500 font-mono">Accelerated</span>
                  </div>
                  <div className="w-full bg-stone-200 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-stone-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${currentSim.cellularProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-stone-50 text-xs font-mono text-stone-600 border border-stone-200">
                Cohort Assessment: {currentSim.clinicalNote}
              </div>
            </section>
          </div>
        )}

        {/* Minimal Solutions */}
        {activePage === 'solutions' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="py-8 border-b border-stone-200">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-mono">
                Clinical Formulations
              </span>
              <h1 className="text-4xl font-light tracking-tight text-stone-950 mt-2">
                Bespoke Treatment Regimens
              </h1>
              <p className="text-xs text-stone-500 mt-2">
                Targeted therapeutic pathways engineered to restore epidermal vitality.
              </p>
            </div>

            <div className="divide-y divide-stone-200">
              {PROTOCOLS.map((proto) => (
                <div key={proto.id} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-widest">{proto.formulaCode}</span>
                    <h3 className="text-xl font-light text-stone-950 mt-1">{proto.title}</h3>
                    <p className="text-xs text-stone-500 mt-1 font-mono">{proto.category} · {proto.studyDuration}</p>
                  </div>
                  <div className="md:col-span-8 space-y-3">
                    <p className="text-xs text-stone-700 leading-relaxed font-light">{proto.description}</p>
                    <p className="text-xs text-stone-500 font-mono">Clinical Outcome: {proto.clinicalOutcome}</p>
                    <button
                      onClick={() => onOpenProtocol(proto)}
                      className="text-stone-950 font-medium underline inline-flex items-center gap-1 text-xs"
                    >
                      <span>Read Documentation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Minimal Archive */}
        {activePage === 'archive' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-stone-200 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-400 font-mono">
                  Archive
                </span>
                <h1 className="text-4xl font-light text-stone-950 mt-1">
                  Active Botanical Formulations
                </h1>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {(['all', 'barrier', 'clarity', 'hydrating', 'renewal'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCatalogFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg uppercase transition-all ${
                      catalogFilter === cat
                        ? 'bg-stone-950 text-white'
                        : 'bg-stone-100 text-stone-600 hover:text-stone-950'
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
                  className="bg-white text-stone-900 border-stone-200"
                />
              ))}
            </div>
          </div>
        )}

        {/* Minimal Philosophy */}
        {activePage === 'philosophy' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-8 items-start">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-mono">The Doctrine</span>
                <h2 className="text-3xl sm:text-4xl font-light text-stone-950 leading-tight">
                  Clarity is a biological obligation in skincare.
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  Founded under the belief that radiant skin does not require twelve confusing steps, DERMIQT unites ancestral ethnobotanical extracts with precision biotechnology. Every lipid, humectant, and bioactive peptide is formulated to preserve natural skin ecology.
                </p>
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono text-stone-600 space-y-1.5">
                  <p>· 100% Organic &amp; Cold Micro-Emulsified</p>
                  <p>· Zero Synthetic Emulsifiers or Fragrance</p>
                  <p>· Physiologically Buffered to pH 5.4</p>
                </div>
              </div>

              {/* Consultation Inquiry */}
              <div className="md:col-span-6 p-6 sm:p-8 bg-stone-50 rounded-2xl border border-stone-200">
                <span className="text-xs font-mono text-stone-400 uppercase">Consultation</span>
                <h3 className="text-xl font-light text-stone-950 mt-1">Inquire with Formulators</h3>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6 text-xs">
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="Elena Rostova"
                      className="w-full bg-white border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:border-stone-950"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="elena@example.com"
                      className="w-full bg-white border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:border-stone-950"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">DERMAL INQUIRY</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your skin goals or formulation questions..."
                      className="w-full bg-white border border-stone-300 rounded-lg px-4 py-2.5 text-stone-900 focus:outline-none focus:border-stone-950"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-stone-950 hover:bg-stone-800 text-white font-medium py-3 rounded-lg transition-colors"
                  >
                    Submit Inquiry
                  </button>
                  {formSubmitted && (
                    <div className="p-3 bg-stone-100 border border-stone-300 rounded-lg text-stone-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-stone-900" />
                      <span>Thank you. Our compounding chemists will review and respond promptly.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* FAQs */}
            <div className="pt-8 border-t border-stone-200 space-y-4">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-mono">
                Frequently Asked Questions
              </span>
              <div className="divide-y divide-stone-200">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="py-4">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left flex justify-between items-center gap-4 py-1"
                    >
                      <span className="text-sm font-medium text-stone-950">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 shrink-0 transition-transform ${
                          openFaq === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <p className="mt-2 text-xs text-stone-600 leading-relaxed font-light pr-8">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t border-stone-200 py-8 text-xs text-stone-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© 2026 DERMIQT Clinical Botanical Laboratories · Geneva · Zurich · New York</span>
          <span>CARE BEYOND BOUNDARIES</span>
        </div>
      </footer>
    </div>
  );
};
