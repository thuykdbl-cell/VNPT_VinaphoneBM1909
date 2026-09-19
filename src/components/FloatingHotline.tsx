import React from 'react';
import { PhoneCall, Headset, MessageCircle, Zap } from 'lucide-react';

interface FloatingHotlineProps {
  onRegisterClick: () => void;
}

export const FloatingHotline: React.FC<FloatingHotlineProps> = ({ onRegisterClick }) => {
  return (
    <>
      {/* Fixed Desktop Floating Dock (Bottom Right) */}
      <aside className="hidden md:flex fixed right-6 bottom-8 z-40 flex-col gap-3">
        {/* VNPT Bình Mỹ */}
        <a
          href="tel:02263862555"
          aria-label="Hotline VNPT Bình Mỹ"
          className="group flex items-center gap-2.5 bg-white text-[#c2330c] shadow-[0_4px_24px_rgba(0,102,204,0.18)] px-4 py-3 rounded-full hover:bg-[#c2330c] hover:text-white transition-all border border-slate-100"
        >
          <div className="w-8 h-8 rounded-full bg-red-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <PhoneCall className="w-4 h-4 animate-pulse" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[11px] font-semibold text-slate-500 group-hover:text-white/90">
              VNPT Bình Mỹ
            </span>
            <span className="text-[13px] font-extrabold whitespace-nowrap">
              02263.862.555
            </span>
          </div>
        </a>

        {/* Tổng đài 18001091 */}
        <a
          href="tel:18001091"
          aria-label="Hotline Tổng đài 18001091"
          className="group flex items-center gap-2.5 bg-white text-[#004e9f] shadow-[0_4px_24px_rgba(0,102,204,0.18)] px-4 py-3 rounded-full hover:bg-[#004e9f] hover:text-white transition-all border border-slate-100"
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <Headset className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[11px] font-semibold text-slate-500 group-hover:text-white/90">
              Tổng đài 24/7
            </span>
            <span className="text-[13px] font-extrabold whitespace-nowrap">
              1800 1091
            </span>
          </div>
        </a>

        {/* Zalo OA */}
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noreferrer"
          aria-label="Zalo Official Account"
          className="group flex items-center gap-2.5 bg-white text-[#00677f] shadow-[0_4px_24px_rgba(0,102,204,0.18)] px-4 py-3 rounded-full hover:bg-[#00677f] hover:text-white transition-all border border-slate-100"
        >
          <div className="w-8 h-8 rounded-full bg-cyan-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[13px] font-bold whitespace-nowrap">
            Zalo OA
          </span>
        </a>
      </aside>

      {/* Fixed Mobile Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-lg shadow-2xl z-40 md:hidden flex items-center justify-around p-2.5 border-t border-slate-200">
        <a
          href="tel:02263862555"
          className="flex flex-col items-center text-[#c2330c] font-bold text-[11px]"
        >
          <PhoneCall className="w-5 h-5 mb-0.5" />
          <span>02263.862.555</span>
        </a>

        <a
          href="tel:18001091"
          className="flex flex-col items-center text-[#004e9f] font-bold text-[11px]"
        >
          <Headset className="w-5 h-5 mb-0.5" />
          <span>1800 1091</span>
        </a>

        <a
          href="https://zalo.me"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center text-[#00677f] font-bold text-[11px]"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span>Zalo OA</span>
        </a>

        <button
          type="button"
          onClick={onRegisterClick}
          className="px-4 py-2 rounded-full bg-[#c2330c] text-white font-bold text-[12px] shadow-sm flex items-center gap-1 cursor-pointer"
        >
          <Zap className="w-4 h-4" />
          <span>Đăng ký</span>
        </button>
      </div>
    </>
  );
};
