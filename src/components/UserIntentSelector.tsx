import React from 'react';
import {
  Signal,
  PhoneCall,
  Film,
  Gamepad2,
  Sparkles,
  Users,
  Building2
} from 'lucide-react';

interface UserIntentSelectorProps {
  onSelectIntent: (intent: string) => void;
}

export const UserIntentSelector: React.FC<UserIntentSelectorProps> = ({ onSelectIntent }) => {
  const intents = [
    { id: 'data', label: 'DATA NHIỀU', icon: Signal },
    { id: 'call', label: 'GỌI NHIỀU', icon: PhoneCall },
    { id: 'movie', label: 'XEM PHIM & TV', icon: Film },
    { id: 'gaming', label: 'CHƠI GAME', icon: Gamepad2 },
    { id: 'ai', label: 'CÔNG NGHỆ AI', icon: Sparkles },
    { id: 'family', label: 'GIA ĐÌNH', icon: Users },
    { id: 'b2b', label: 'DOANH NGHIỆP', icon: Building2 }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 w-full">
      <div className="bg-[#e2e7ff] rounded-3xl p-6 sm:p-8 lg:p-12 text-center border border-[#004e9f]/10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] mb-3">
          BẠN ĐANG CẦN GÌ CHO CHIẾC ĐIỆN THOẠI?
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#414753] max-w-2xl mx-auto mb-8">
          Bấm chọn đúng nhu cầu chính để hệ thống lọc ra ngay gói cước tiết kiệm và phù hợp nhất dành riêng cho bạn
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {intents.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                id={`intent-btn-${item.id}`}
                onClick={() => onSelectIntent(item.id)}
                type="button"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white hover:bg-[#004e9f] hover:text-white transition-all shadow-sm hover:shadow-lg border border-slate-100 group cursor-pointer active:scale-95"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f2f3ff] group-hover:bg-white/20 flex items-center justify-center mb-2 text-[#004e9f] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-[12px] sm:text-[13px] text-center tracking-wide group-hover:text-white text-[#131b2e]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
