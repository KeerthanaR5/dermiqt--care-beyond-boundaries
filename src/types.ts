export type ArchetypeView = 'editorial' | 'futuristic' | 'minimal' | 'creative';

export type PageId = 'home' | 'solutions' | 'archive' | 'philosophy';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'hydrating' | 'barrier' | 'clarity' | 'renewal';
  categoryLabel: string;
  price: number; // in Rupees (₹)
  image: string;
  images: string[]; // swipeable alternate pictures
  description: string;
  ingredients: string[];
  volume: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  highlightNotes?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface LabSimulationData {
  days: 7 | 14 | 30;
  tewl: string;
  tewlProgress: number;
  lipidDiversity: string;
  lipidProgress: number;
  cellularTurnover: string;
  cellularProgress: number;
  clinicalNote: string;
}

export interface ProtocolDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  formulaCode: string;
  description: string;
  studyDuration: string;
  clinicalOutcome: string;
  keyActives: string[];
  contraindications: string;
  recommendedUse: string;
  relatedProduct?: Product;
}
