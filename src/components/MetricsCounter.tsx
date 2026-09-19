import React from 'react';
import { LayoutGrid, Gauge, ArrowLeftRight, Headphones } from 'lucide-react';

export const MetricsCounter: React.FC = () => {
  const metrics = [
    {
      icon: LayoutGrid,
      stat: '50+',
      title: 'Nhiều Lựa Chọn Đa Dạng',
      subtitle: 'Từ cơ bản đến gói Max Data'
    },
    {
      icon: Gauge,
      stat: '10GB',
      title: 'Data Cao Nhiều Mức',
      subtitle: 'Tốc độ cực đại chuẩn 5G'
    },
    {
      icon: ArrowLeftRight,
      stat: '100%',
      title: 'Linh Hoạt Trả Trước & Sau',
      subtitle: 'Đổi gói online tức thì'
    },
    {
      icon: Headphones,
      stat: '24/7',
      title: 'Tư Vấn Chuyên Nghiệp',
      subtitle: 'Tổng đài 18001091 miễn phí'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        {metrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f2f3ff] text-[#004e9f] flex items-center justify-center mb-3">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-3xl sm:text-4xl font-black text-[#131b2e] tracking-tight">
                {item.stat}
              </h4>
              <p className="font-bold text-[13px] text-[#414753] uppercase mt-1">
                {item.title}
              </p>
              <p className="text-[12px] text-[#727784] mt-0.5">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
