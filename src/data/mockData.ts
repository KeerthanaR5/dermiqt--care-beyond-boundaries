import { Product, LabSimulationData, ProtocolDetail } from '../types';
import exfoliatorGelJar from '../assets/images/exfoliator_gel_jar.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'sun-dew-serum',
    name: 'Sun Dew Serum',
    subtitle: 'Formula #04 · Botanical Radiance & Barrier Lipid',
    category: 'barrier',
    categoryLabel: 'Barrier Repair',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Powered by cold-pressed squalane, wild rose geranium seed oils, and lipid-soluble ascorbate. Restores cutaneous elasticity while locking in lipid barrier moisture for 36 hours.',
    ingredients: ['Cold-Pressed Plant Squalane', 'Pelargonium Graveolens Oil', 'THD Ascorbate (5%)', 'Organic Jojoba Wax Esters', 'Tocopherol Acetate'],
    volume: '30 ml / 1.0 fl.oz',
    rating: 4.95,
    reviewsCount: 342,
    badge: 'Pure Skincare',
    highlightNotes: 'Clinical trial demonstrated +92% stratum corneum lipid retention.'
  },
  {
    id: 'exfoliator-gel',
    name: 'Exfoliator Gel Gelée',
    subtitle: 'Enzymatic Resurfacing & Fermented Rice Bio-active',
    category: 'clarity',
    categoryLabel: 'Cellular Clarity',
    price: 1850,
    image: exfoliatorGelJar,
    images: [
      exfoliatorGelJar,
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Non-abrasive enzymatic peel infused with fermented organic rice water, papaya papain, and micronized colloidal oat colloids for luminous, smooth epidermal renewal.',
    ingredients: ['Fermented Oryza Sativa Water', 'Carica Papaya Enzyme', 'Colloidal Avena Sativa Oat', 'Hyaluronic Acid Multi-Weight', 'Willow Bark Extract'],
    volume: '50 ml / 1.7 fl.oz',
    rating: 4.92,
    reviewsCount: 288,
    badge: 'Quick Order Favorite',
    highlightNotes: '100% gentle on sensitive acid-mantle skin profiles.'
  },
  {
    id: 'rose-geranium',
    name: 'Rose Geranium Dermal Dew',
    subtitle: 'Dual-Action Botanical Infusion & Acid Mantle Balancer',
    category: 'hydrating',
    categoryLabel: 'Hydration',
    price: 1650,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Fresh-distilled rose geranium hydrosol blended with Tasmanian mountain berry antioxidants and meadowfoam seed oil for instant moisture replenishment.',
    ingredients: ['Organic Rose Geranium Hydrosol', 'Tasmanian Pepperberry Extract', 'Meadowfoam Seed Oil', 'Glycerin (Plant-Derived)', 'Sodium PCA'],
    volume: '60 ml / 2.0 fl.oz',
    rating: 4.88,
    reviewsCount: 194,
    badge: 'Study 01 Cohort',
    highlightNotes: 'Stabilizes skin surface pH at ideal 5.4 in under 60 seconds.'
  },
  {
    id: 'cold-pressed-soap',
    name: 'Cold-Pressed Charcoal Soap',
    subtitle: 'Activated Carbon & French Montmorillonite Bar',
    category: 'clarity',
    categoryLabel: 'Purifying',
    price: 850,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Saponified cold-processed bar cured for 6 weeks with bamboo-activated charcoal, French green clay, and cold-pressed olive squalene.',
    ingredients: ['Saponified Olive & Coconut Lipids', 'Activated Bamboo Carbon', 'Montmorillonite Green Clay', 'Tea Tree Melaleuca Leaf Oil', 'Shea Butter'],
    volume: '140 g / 4.9 oz',
    rating: 4.86,
    reviewsCount: 142,
    badge: 'Lumière Collection',
    highlightNotes: 'Draws excess sebaceous residue without stripping skin moisture.'
  },
  {
    id: 'biotic-creme-gelee',
    name: 'Biotic Crème Gelée',
    subtitle: 'Prebiotic Micro-Peptides & Biomimetic Ceramides',
    category: 'renewal',
    categoryLabel: 'Bio-Renewal',
    price: 2850,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A cloud-weight gel-cream combining oat beta-glucan, bifida ferment lysate, and ceramide complex 1, 3, 6-II to foster a resilient microbial ecosystem.',
    ingredients: ['Bifida Ferment Lysate', 'Ceramides NP/AP/EOP', 'Oat Beta-Glucan', 'Phytosphingosine', 'Centella Asiatica Leaf Extract'],
    volume: '50 ml / 1.7 fl.oz',
    rating: 4.97,
    reviewsCount: 420,
    badge: 'Clinical Favorite',
    highlightNotes: 'Reduces redness index by 44% in under 7 days of daily ritual.'
  },
  {
    id: 'kaolin-clay-mask',
    name: 'French Kaolin Clay Biomass',
    subtitle: 'Mineral Purity Mask with Tasmanian Pepperberry',
    category: 'clarity',
    categoryLabel: 'Mineral Detox',
    price: 1950,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-refined kaolinite infused with organic lavender water, zinc PCA, and chamomile bisabolol to balance sebum synthesis.',
    ingredients: ['French Kaolin Clay', 'Zinc PCA', 'Organic Chamomile Hydrosol', 'Bisabolol', 'Spirulina Maxima Extract'],
    volume: '75 ml / 2.5 fl.oz',
    rating: 4.89,
    reviewsCount: 167,
    badge: 'Study 03 Cohort',
    highlightNotes: 'Proven to minimize visible follicular congestion by 38%.'
  },
  {
    id: 'rapid-wrinkle-repair',
    name: 'Nocturnal Peptide Elixir',
    subtitle: 'Phyto-Retinol Bakuchiol & Copper Tripeptide-1',
    category: 'renewal',
    categoryLabel: 'Cellular Renewal',
    price: 3450,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-potency night restructuring fluid uniting botanical bakuchiol with copper peptides to support collagen synthesis without retinoid sensitivity.',
    ingredients: ['Bakuchiol (1.5%)', 'GHK-Cu Copper Tripeptide-1', 'Rosehip Seed Co2 Extract', 'Evening Primrose Lipid', 'Ubiquinone CoQ10'],
    volume: '30 ml / 1.0 fl.oz',
    rating: 4.96,
    reviewsCount: 310,
    badge: 'Night Ritual',
    highlightNotes: 'Visible improvement in fine dermal lines documented within 14 days.'
  },
  {
    id: 'sun-beauty-oil',
    name: 'Sun Beauty Golden Oil',
    subtitle: 'Cold-Pressed Marula, Sea Buckthorn & Jojoba',
    category: 'hydrating',
    categoryLabel: 'Lipid Replenishment',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Rich amber botanical lipid drops packed with carotenoids and omega 3, 6, 9 to provide a luminous natural sunlit glow.',
    ingredients: ['Virgin Sclerocarya Birrea (Marula) Seed Oil', 'Hippophae Rhamnoides (Sea Buckthorn) Fruit Oil', 'Simmondsia Chinensis Seed Oil', 'Sweet Almond Lipid'],
    volume: '30 ml / 1.0 fl.oz',
    rating: 4.91,
    reviewsCount: 228,
    badge: 'Summer Sun Favorite',
    highlightNotes: 'High carotenoid concentration creates an instant healthy sunlit sheen.'
  }
];

export const LAB_SIMULATIONS: Record<number, LabSimulationData> = {
  7: {
    days: 7,
    tewl: '-34.8%',
    tewlProgress: 72,
    lipidDiversity: '+92.4%',
    lipidProgress: 88,
    cellularTurnover: '1.8x',
    cellularProgress: 75,
    clinicalNote: 'Stratum corneum micro-cracks sealed; intercellular lipid matrix begins rapid self-reparative stabilization.'
  },
  14: {
    days: 14,
    tewl: '-51.2%',
    tewlProgress: 85,
    lipidDiversity: '+144.0%',
    lipidProgress: 94,
    cellularTurnover: '2.4x',
    cellularProgress: 88,
    clinicalNote: 'Microbiome flora achieves equilibrium; barrier lipid thickness measured +40% above baseline.'
  },
  30: {
    days: 30,
    tewl: '-78.6%',
    tewlProgress: 97,
    lipidDiversity: '+210.5%',
    lipidProgress: 100,
    cellularTurnover: '3.1x',
    cellularProgress: 96,
    clinicalNote: 'Optimal cellular homeostasis achieved. Skin barrier demonstrates maximum resilience against atmospheric stressors.'
  }
};

export const PROTOCOLS: ProtocolDetail[] = [
  {
    id: 'protocol-01',
    title: 'Rose Geranium Dermal Dew Protocol',
    subtitle: 'Clinical Study #01 · Hydration Recalibration',
    category: 'Hydration & Micro-Circulation',
    formulaCode: 'DERM-HYD-01',
    description: 'A multi-fractional botanical infusion engineered to replenish the stratum corneum with bio-identical polysaccharides and low-molecular humectants.',
    studyDuration: '48-Hour Continuous Sensor Monitoring',
    clinicalOutcome: '98% retention of moisture reservoirs with 0% trans-epidermal irritation in 120 subjects.',
    keyActives: ['Fresh Pelargonium Hydrosol', 'Tasmanian Pepperberry Extract', 'High-Purity Oat Beta-Glucan'],
    contraindications: 'None. Safe for reactive and allergy-prone skin profiles.',
    recommendedUse: 'Apply 3-4 drops morning and night immediately following lukewarm cleansing.',
    relatedProduct: PRODUCTS[2]
  },
  {
    id: 'protocol-02',
    title: 'Exfoliator Gel Biomass Protocol',
    subtitle: 'Clinical Study #02 · Enzymatic Stratum Corneum Resurfacing',
    category: 'Cellular Clarity & Renewal',
    formulaCode: 'DERM-EXF-02',
    description: 'Gentle bio-ferment enzymatic peeling jelly designed for sensitive skin unable to tolerate aggressive glycolic or salicylic acids.',
    studyDuration: '14-Day Cohort Protocol',
    clinicalOutcome: 'Smoother skin topography in 96% of participants with zero inflammatory erythema.',
    keyActives: ['Fermented Rice Broth Bio-active', 'Papain Enzyme Extract', 'Micro-Colloidal Oat'],
    contraindications: 'Do not combine simultaneously with prescriptive retinoids on same evening.',
    recommendedUse: 'Massage gently over dry cleansed face for 60 seconds twice weekly; rinse with cool water.',
    relatedProduct: PRODUCTS[1]
  },
  {
    id: 'protocol-03',
    title: 'French Kaolin Mineral Clay Protocol',
    subtitle: 'Clinical Study #03 · Sebaceous Balance & Acid Mantle pH',
    category: 'Purifying & Sebum Regulation',
    formulaCode: 'DERM-PUR-03',
    description: 'Micronized kaolinite compounded with physiological zinc PCA and soothing azulene to purify pores while preserving microbial flora.',
    studyDuration: '21-Day Dermatological Evaluation',
    clinicalOutcome: '38% decrease in congested sebaceous filaments while keeping natural acid mantle at pH 5.5.',
    keyActives: ['French Kaolinite Clay', 'Zinc PCA Bio-Salt', 'Chamomile Bisabolol'],
    contraindications: 'Avoid leaving on until brittle dry; rinse when still slightly supple.',
    recommendedUse: 'Apply an even layer over T-zone or congested areas once or twice weekly for 10 minutes.',
    relatedProduct: PRODUCTS[5]
  }
];
