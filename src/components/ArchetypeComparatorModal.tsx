import React from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { ArchetypeView } from '../types';

interface ArchetypeComparatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: ArchetypeView;
  onSelectView: (view: ArchetypeView) => void;
}

const ARCHETYPES: Array<{
  id: ArchetypeView;
  tag: string;
  name: string;
  themeStyle: string;
  palette: string[];
  bgPreview: string;
  borderPreview: string;
}> = [
  {
    id: 'editorial',
    tag: 'Editorial Bento',
    name: 'Premium Editorial',
    themeStyle: 'Warm chocolate, cream & terracotta, organic oval hero cut, editorial typography, asymmetric bento grid.',
    palette: ['#3A2820', '#FAF6F0', '#F5E4DB', '#EAB308'],
    bgPreview: 'bg-[#291A14]/90 text-[#FAF6F0]',
    borderPreview: 'border-amber-600/60 hover:border-amber-400',
  },
  {
    id: 'futuristic',
    tag: 'Cyber Bio-Labs',
    name: 'Futuristic Cyber Dark',
    themeStyle: 'Obsidian dark backgrounds, cyan neon borders, molecular biotechnology telemetry, and glassmorphic panels.',
    palette: ['#070913', '#38BDF8', '#A855F7', '#06B6D4'],
    bgPreview: 'bg-[#070913] text-white',
    borderPreview: 'border-stone-700 hover:border-cyan-400',
  },
  {
    id: 'minimal',
    tag: 'Swiss Atelier',
    name: 'Minimal Monolith',
    themeStyle: 'Pristine whitespace, disciplined hairline dividers, reductionist typography, and pure dermatological clarity.',
    palette: ['#FFFFFF', '#111827', '#6C757D', '#E9ECEF'],
    bgPreview: 'bg-white text-stone-900',
    borderPreview: 'border-stone-300 hover:border-black',
  },
  {
    id: 'creative',
    tag: 'Neo-Brutalist',
    name: 'Creative Brutalism',
    themeStyle: 'Vibrant lime, electric cobalt, thick black borders, playful stickers, kinetic typography, and radical energy.',
    palette: ['#D8FF3E', '#0055FF', '#FF4D4D', '#121212'],
    bgPreview: 'bg-[#FFFBF2] text-stone-900',
    borderPreview: 'border-2 border-black hover:scale-[1.01]',
  },
];

export const ArchetypeComparatorModal: React.FC<ArchetypeComparatorModalProps> = ({
  isOpen,
  onClose,
  currentView,
  onSelectView,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="comparator-modal-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="bg-stone-900 border border-stone-800 w-full max-w-3xl rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div>
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
              Design Systems
            </span>
            <h2 id="comparator-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              Select UI Archetype
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-stone-400 mt-3 mb-6 leading-relaxed">
          Switch between four completely distinct design archetypes, color palettes, and typographic scales sharing the same product catalog and shopping cart:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ARCHETYPES.map((arch) => {
            const isSelected = currentView === arch.id;
            return (
              <div
                key={arch.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  onSelectView(arch.id);
                  onClose();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectView(arch.id);
                    onClose();
                  }
                }}
                className={`cursor-pointer rounded-2xl p-5 border transition-all text-left group relative ${arch.bgPreview} ${arch.borderPreview} ${
                  isSelected ? 'ring-2 ring-white/60 shadow-xl' : 'opacity-90 hover:opacity-100'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-4 right-4 bg-emerald-500 text-white rounded-full p-1 shadow-md">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                )}

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[10px] uppercase font-mono rounded bg-white/10 text-white/90">
                    {arch.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight">{arch.name}</h3>
                <p className="text-xs opacity-80 mt-1 leading-snug">{arch.themeStyle}</p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {arch.palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-4 h-4 rounded-full border border-black/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {isSelected ? 'Active' : 'Switch'} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
