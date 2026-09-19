import React from 'react';
import {
  Wifi,
  Bot,
  Gamepad2,
  Tv,
  PlayCircle,
  Headphones,
  Flame,
  ArrowRight
} from 'lucide-react';

interface HeroBannerProps {
  onExplorePackages: () => void;
  onOpenConsultation: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExplorePackages,
  onOpenConsultation
}) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-[#004e9f] via-[#0066cc] to-[#faf8ff] text-white">
      {/* Decorative 5G Network Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg
          className="w-full h-full object-cover"
          fill="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="720"
            cy="400"
            r="250"
            stroke="currentColor"
            strokeDasharray="8 8"
            strokeWidth="1.5"
            className="animate-spin"
            style={{ animationDuration: '60s' }}
          />
          <circle
            cx="720"
            cy="400"
            r="450"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <circle
            cx="720"
            cy="400"
            r="650"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <path
            d="M-100 650 C 300 500, 600 750, 1500 550"
            stroke="#00d2ff"
            strokeOpacity="0.6"
            strokeWidth="2.5"
          />
          <path
            d="M-100 520 C 400 420, 800 680, 1600 480"
            stroke="#b6ebff"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Network 5G Live Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md shadow-md mb-8 border border-white/20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d2ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00d2ff]"></span>
          </span>
          <span className="font-bold text-[12px] sm:text-[13px] uppercase tracking-wider text-[#b6ebff]">
            MẠNG 5G TỐC ĐỘ SIÊU KHỦNG - PHỦ SÓNG TOÀN QUỐC
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl max-w-5xl mb-6 font-extrabold tracking-tight leading-tight sm:leading-none">
          CHỌN ĐÚNG GÓI CƯỚC
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b6ebff] via-white to-[#00d2ff] drop-shadow-sm">
            KẾT NỐI TRỌN MỌI NHU CẦU
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-[15px] sm:text-[18px] max-w-3xl text-[#dfe8ff] mb-10 font-normal leading-relaxed">
          Data tốc độ cao • Thoại thả ga • 5G siêu tốc • Giải trí MyTV 4K • Trợ lý AI vnGenAI • Chơi Game Low-Ping
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-12">
          <button
            id="hero-btn-explore"
            onClick={onExplorePackages}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#c2330c] to-[#9b2100] text-white font-bold text-[15px] text-center shadow-xl hover:shadow-[0_0_30px_rgba(255,94,54,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Flame className="w-5 h-5" />
            <span>KHÁM PHÁ GÓI CƯỚC</span>
          </button>

          <button
            id="hero-btn-consult"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-[15px] text-center border border-white/20 shadow-md hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Headphones className="w-5 h-5 text-[#b6ebff]" />
            <span>TƯ VẤN NGAY</span>
            <ArrowRight className="w-4 h-4 text-[#b6ebff]" />
          </button>
        </div>

        {/* Tech Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[13px] font-semibold">
            <Wifi className="w-4 h-4 text-[#b6ebff]" />
            <span>5G Ultra Speed</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[13px] font-semibold">
            <Bot className="w-4 h-4 text-[#b6ebff]" />
            <span>Trợ lý vnGenAI</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[13px] font-semibold">
            <Gamepad2 className="w-4 h-4 text-[#b6ebff]" />
            <span>Low Ping Gaming</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[13px] font-semibold">
            <Tv className="w-4 h-4 text-[#b6ebff]" />
            <span>MyTV 4K OTT</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[13px] font-semibold">
            <PlayCircle className="w-4 h-4 text-[#b6ebff]" />
            <span>Free Data YouTube & TikTok</span>
          </div>
        </div>
      </div>
    </section>
  );
};
