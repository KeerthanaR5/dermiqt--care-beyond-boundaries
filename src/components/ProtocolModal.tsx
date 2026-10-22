import React from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Plus } from 'lucide-react';
import { ProtocolDetail, Product } from '../types';

interface ProtocolModalProps {
  protocol: ProtocolDetail | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProtocolModal: React.FC<ProtocolModalProps> = ({
  protocol,
  onClose,
  onAddToCart,
}) => {
  if (!protocol) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="protocol-modal-title"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="bg-[#FAF6F0] text-[#291A14] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#291A14]/15 overflow-y-auto max-h-[90vh]">
        {/* Top Info Header */}
        <div className="flex justify-between items-start pb-4 border-b border-[#291A14]/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#855845] text-white">
                {protocol.formulaCode}
              </span>
              <span className="text-xs text-[#855845] font-serif italic">
                {protocol.subtitle}
              </span>
            </div>
            <h3 id="protocol-modal-title" className="text-2xl font-light font-sans text-[#291A14] mt-1.5">
              {protocol.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close protocol dialog"
            className="p-1.5 rounded-full hover:bg-stone-200 text-[#291A14] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clinical Summary */}
        <div className="py-4 space-y-4 text-xs text-[#291A14]/85 leading-relaxed">
          <p>{protocol.description}</p>

          <div className="grid grid-cols-2 gap-3 p-4 bg-white rounded-2xl border border-[#291A14]/10 shadow-sm">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#855845]">Cohort Assessment</p>
              <p className="font-semibold text-xs mt-0.5">{protocol.studyDuration}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#855845]">Dermal Status</p>
              <p className="font-semibold text-xs text-emerald-800 flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Clinically Validated
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#EFE8DE] rounded-2xl border border-[#291A14]/5 space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#291A14] font-bold">
              Measured Clinical Outcome
            </span>
            <p className="text-xs font-serif italic text-[#291A14]">
              “{protocol.clinicalOutcome}”
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#855845] block mb-2 font-bold">
              Key Bio-Identical Actives
            </span>
            <div className="flex flex-wrap gap-1.5">
              {protocol.keyActives.map((active, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full bg-white border border-[#291A14]/15 text-[11px] font-mono text-[#291A14]"
                >
                  {active}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#855845] block mb-1 font-bold">
              Daily Application Protocol
            </span>
            <p className="text-xs text-[#291A14]/80">{protocol.recommendedUse}</p>
          </div>
        </div>

        {/* Related Product Action */}
        {protocol.relatedProduct && (
          <div className="mt-4 pt-4 border-t border-[#291A14]/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={protocol.relatedProduct.image}
                alt={protocol.relatedProduct.name}
                className="w-12 h-12 rounded-xl object-cover bg-white border border-[#291A14]/10"
              />
              <div>
                <p className="text-xs font-bold text-[#291A14]">{protocol.relatedProduct.name}</p>
                <p className="text-[11px] font-mono text-[#855845]">
                  ₹{protocol.relatedProduct.price.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (protocol.relatedProduct) {
                  onAddToCart(protocol.relatedProduct);
                  onClose();
                }
              }}
              className="bg-[#EAB308] hover:bg-[#d9a406] text-[#291A14] px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Bag</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
