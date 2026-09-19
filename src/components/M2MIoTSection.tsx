import React from 'react';
import {
  Router,
  CheckCircle2,
  Headphones,
  Shield,
  Smartphone,
  Car,
  Camera,
  Truck,
  Cpu,
  Radio,
  Clock
} from 'lucide-react';
import { M2M_IOT_PACKAGES } from '../data/packagesData';

interface M2MIoTSectionProps {
  onSelectRegister: (pkgId: string) => void;
  onOpenConsultation: () => void;
}

export const M2MIoTSection: React.FC<M2MIoTSectionProps> = ({
  onSelectRegister,
  onOpenConsultation
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 w-full" id="doanh-nghiep-iot">
      <div className="bg-gradient-to-br from-white to-[#f2f3ff] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-[#00677f]/20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00677f]/10 text-[#00677f] font-bold text-[12px] uppercase tracking-wider mb-3">
              <Router className="w-4 h-4" />
              <span>KẾT NỐI VẠN VẬT THÔNG MINH - VNPT IOT PLATFORM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131b2e]">
              Hệ Sinh Thái Gói Cước M2M &amp; IoT VinaPhone
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#414753] max-w-3xl mt-2 leading-relaxed">
              Chuyên biệt hóa cho thiết bị thông minh, đồng hồ định vị, GPS xe máy/ô tô, camera an ninh 4G/5G, máy POS quẹt thẻ và cảm biến công nghiệp với nền tảng quản lý tập trung CMP tiên tiến.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              id="btn-iot-consult-top"
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-full bg-[#00677f] text-white font-bold text-[13px] shadow-md hover:bg-[#004e9f] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Headphones className="w-4 h-4" />
              <span>Tư Vấn M2M Doanh Nghiệp</span>
            </button>
          </div>
        </div>

        {/* 8 IoT Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {M2M_IOT_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              id={`iot-card-${pkg.id}`}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between border border-slate-200/80 hover:border-[#00677f]/40 relative overflow-hidden group"
            >
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-[#004e9f]/10 text-[#004e9f] px-3 py-1 rounded-bl-xl font-bold text-[11px] uppercase tracking-wider">
                {pkg.badge}
              </div>

              <div>
                <span className="text-[11px] text-[#414753] uppercase font-bold tracking-wider">
                  {pkg.title}
                </span>
                <h3 className="text-xl font-extrabold text-[#131b2e] mt-1">
                  {pkg.name}
                </h3>

                {/* Data & Price */}
                <div className="my-3 p-3 rounded-xl bg-[#f2f3ff] flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-black text-[#004e9f]">{pkg.data}</span>
                    <span className="text-[11px] text-[#414753] ml-1">{pkg.period}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-[#131b2e]">{pkg.price}</span>
                  </div>
                </div>

                {/* Perks */}
                <ul className="space-y-2 text-[12px] text-[#414753] mb-4">
                  {pkg.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00677f] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  id={`btn-reg-iot-${pkg.id}`}
                  onClick={() => onSelectRegister(pkg.id)}
                  className="w-full py-2.5 rounded-full bg-[#eaedff] hover:bg-[#004e9f] hover:text-white text-[#131b2e] font-bold text-[12px] transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  Đăng Ký / Tư Vấn
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
