import React from 'react';
import {
  SlidersHorizontal,
  Rocket,
  Tv,
  Gamepad2,
  BrainCircuit,
  Headset,
  ArrowRight
} from 'lucide-react';

interface PillarsSectionProps {
  onLearnMore: (topic: string) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onLearnMore }) => {
  const pillars = [
    {
      id: 'data-flex',
      icon: SlidersHorizontal,
      title: 'Data Linh Hoạt',
      desc: 'Nhiều lựa chọn gói cước từ 1GB/ngày cơ bản đến 10GB/ngày cực đại, đáp ứng chính xác dung lượng tiêu thụ thực tế của bạn.',
      cta: 'Khám phá gói Data',
      actionKey: 'data'
    },
    {
      id: 'speed-5g',
      icon: Rocket,
      title: 'Kết Nối Tốc Độ Cao 5G',
      desc: 'Trải nghiệm mạng 5G phủ sóng đa băng tần trên 63 tỉnh thành, tải phim 4K trong chớp mắt với độ trễ siêu thấp.',
      cta: 'Xem bản đồ phủ sóng',
      actionKey: 'vip'
    },
    {
      id: 'entertainment',
      icon: Tv,
      title: 'Giải Trí Trên Di Động',
      desc: 'Thoải mái tận hưởng truyền hình MyTV Mobile, miễn cước data TikTok, YouTube và kho phim bom tấn không giới hạn.',
      cta: 'Gói tích hợp MyTV',
      actionKey: 'mytv'
    },
    {
      id: 'gaming',
      icon: Gamepad2,
      title: 'Data Cho Gaming',
      desc: 'Được định tuyến qua máy chủ máy ảo ưu tiên, giảm thiểu hiện tượng lag giật và giữ ping ổn định khi leo rank cùng đồng đội.',
      cta: 'Gói Game tối ưu',
      actionKey: 'gaming'
    },
    {
      id: 'vngenai',
      icon: BrainCircuit,
      title: 'AI & Công Nghệ vnGenAI',
      desc: 'Tiên phong tích hợp đặc quyền sử dụng mô hình trí tuệ nhân tạo thế hệ mới vnGenAI, hỗ trợ soạn thảo, dịch thuật và sáng tạo nội dung.',
      cta: 'Tìm hiểu gói GENAI155',
      actionKey: 'genai'
    },
    {
      id: 'support-247',
      icon: Headset,
      title: 'Tư Vấn Hỗ Trợ 24/7',
      desc: 'Tổng đài viên chuyên nghiệp 18001091 và VNPT Bình Mỹ luôn sẵn sàng hỗ trợ kích hoạt eSIM, đăng ký gói cước và giải quyết mọi thắc mắc trong 5 phút.',
      cta: 'Gọi ngay 18001091',
      actionKey: 'call'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-16 w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="font-bold text-[13px] text-[#004e9f] uppercase tracking-wider mb-2">
          HỆ SINH THÁI VIỄN THÔNG SỐ 1
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight">
          Đặc Quyền Dẫn Đầu Cùng VinaPhone 5G
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#414753] mt-3 leading-relaxed">
          Hạ tầng mạng viễn thông quốc gia bảo đảm trải nghiệm kết nối mượt mà cho mọi tác vụ công việc và giải trí.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-100 hover:border-[#004e9f]/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#eaedff] group-hover:bg-[#004e9f] flex items-center justify-center mb-5 text-[#004e9f] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-[19px] font-bold text-[#131b2e] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-[14px] text-[#414753] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onLearnMore(pillar.actionKey)}
                  className="flex items-center gap-2 text-[#004e9f] font-bold text-[13px] hover:text-[#003875] group-hover:translate-x-1 transition-all"
                >
                  <span>{pillar.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
