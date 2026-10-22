import React from 'react';
import { Layers } from 'lucide-react';
import { ArchetypeView } from '../types';

interface FloatingViewSwitcherProps {
  currentView: ArchetypeView;
  onSelectView: (view: ArchetypeView) => void;
  onOpenModal: () => void;
}

const VIEWS: { id: ArchetypeView; label: string; dotClass: string }[] = [
  { id: 'editorial', label: 'Editorial', dotClass: 'bg-[#855845]' },
  { id: 'futuristic', label: 'Cyber', dotClass: 'bg-[#38BDF8]' },
  { id: 'minimal', label: 'Minimal', dotClass: 'bg-stone-300 border border-stone-500' },
  { id: 'creative', label: 'Creative', dotClass: 'bg-[#D8FF3E]' },
];

export const FloatingViewSwitcher: React.FC<FloatingViewSwitcherProps> = ({
  currentView,
  onSelectView,
  onOpenModal,
}) => {
  return (
    <aside
      aria-label="Design Archetype Switcher"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md bg-stone-900/95 backdrop-blur-xl text-white rounded-full p-1.5 shadow-2xl border border-white/20 flex items-center justify-between transition-all duration-300 hover:border-white/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center pl-3 pr-2 gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <div className="text-left hidden sm:block">
          <p className="text-[10px] text-stone-300 uppercase tracking-widest font-mono font-bold select-none">
            DESIGN VIEW
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 bg-black/50 p-1 rounded-full border border-white/10">
        {VIEWS.map(({ id, label, dotClass }) => {
          const isActive = currentView === id;
          return (
            <button
              key={id}
              onClick={() => onSelectView(id)}
              className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 hover:scale-105 active:scale-95 ${
                isActive
                  ? 'bg-white text-stone-950 font-semibold shadow-md scale-105'
                  : 'text-stone-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${dotClass}`}></span>
              <span className="text-[11px]">{label}</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={onOpenModal}
        aria-label="Open detailed view comparator"
        className="p-2 text-stone-300 hover:text-white hover:bg-white/15 hover:scale-110 active:scale-95 rounded-full transition-all ml-1"
      >
        <Layers className="w-4 h-4" />
      </button>
    </aside>
  );
};
