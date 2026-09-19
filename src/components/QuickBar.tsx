import React from 'react';
import {
  Signal,
  PhoneCall,
  Zap,
  Tv,
  Gamepad2,
  Sparkles
} from 'lucide-react';

interface QuickBarProps {
  onQuickFilter: (type: string) => void;
}

export const QuickBar: React.FC<QuickBarProps> = ({ onQuickFilter }) => {
  const items = [
    {
      id: 'data',
      title: 'DATA CAO',
      desc: 'Đến 10GB/ngày',
      icon: Signal,
      color: 'text-[#004e9f]'
    },
    {
      id: 'call',
      title: 'GỌI NHIỀU',
      desc: 'Miễn phí thoại',
      icon: PhoneCall,
      color: 'text-[#004e9f]'
    },
    {
      id: '5g',
      title: 'KẾT NỐI 5G',
      desc: 'Tốc độ Gbps',
      icon: Zap,
      color: 'text-[#004e9f]'
    },
    {
      id: 'mytv',
      title: 'MYTV',
      desc: '180+ Kênh HD',
      icon: Tv,
      color: 'text-[#004e9f]'
    },
    {
      id: 'gaming',
      title: 'GAMING',
      desc: 'Ưu tiên băng thông',
      icon: Gamepad2,
      color: 'text-[#004e9f]'
    },
    {
      id: 'ai',
      title: 'vnGenAI',
      desc: 'Trợ lý độc quyền',
      icon: Sparkles,
      color: 'text-[#004e9f]'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full -mt-10 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 md:p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              id={`quick-filter-${item.id}`}
              onClick={() => onQuickFilter(item.id)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left group shadow-xs hover:shadow-md cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-[#e2e7ff] group-hover:bg-[#0066cc] flex items-center justify-center shrink-0 transition-colors">
                <Icon className={`w-5 h-5 ${item.color} group-hover:text-white transition-colors`} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-[13px] leading-tight truncate">{item.title}</p>
                <p className="text-[11px] text-[#414753] group-hover:text-[#dfe8ff] truncate">
                  {item.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
