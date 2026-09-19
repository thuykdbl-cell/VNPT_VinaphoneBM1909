import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/packagesData';

export const FaqSection: React.FC = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-16 w-full" id="faq">
      <div className="text-center mb-12">
        <p className="font-bold text-[13px] text-[#004e9f] uppercase tracking-wider mb-2">
          HỖ TRỢ GIẢI ĐÁP THẮC MẮC
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131b2e]">
          Câu Hỏi Thường Gặp Khi Đăng Ký
        </h2>
      </div>

      <div className="space-y-3.5">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = expandedIndices.includes(index);
          return (
            <div
              key={index}
              id={`faq-item-${index}`}
              className="bg-white rounded-2xl p-5 shadow-xs border border-slate-100 transition-all hover:border-slate-200"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
              >
                <span className="font-bold text-[15px] sm:text-[16px] text-[#131b2e] leading-snug">
                  {item.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-[#f2f3ff] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#eaedff] text-[#004e9f]' : 'text-[#727784]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="mt-3 pt-3 text-[#414753] text-[14px] leading-relaxed border-t border-slate-100">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
