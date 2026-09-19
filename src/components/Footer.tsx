import React from 'react';
import {
  ShieldCheck,
  Building,
  MapPin,
  PhoneCall,
  Headset,
  Mail
} from 'lucide-react';

interface FooterProps {
  onNavClick: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="w-full bg-[#f2f3ff] pt-16 pb-20 md:pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-200/80">
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="VinaPhone 5G Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wne_qJsBPl_1N0GA2g3BYGjqvvQqAzuLvXxxzaABo9eHraaym7_QUUe4ru9GAUezV6Qqee2wUsJHY8mCPoq_WwM0ZWgkqFMMqE5L6vxDuOu7VmSnNwGl-M9NvJLfAHGvAy1QO-Y7qM_lJUbYyJqT3PTZPCdODQk0E1u1_HdGnYyPKnE-CjtkttYvBZZcdsD5vs8Ah4OH6CL14zWzXMpQkPweq2HjVf0b4hlWDAKUYwAiXGOPlKH6Wz_Jo"
              />
              <span className="font-extrabold text-[19px] text-[#004e9f]">
                VinaPhone 5G
              </span>
            </div>
            <p className="text-[13px] text-[#414753] leading-relaxed">
              <strong>VNPT Bình Mỹ</strong> – Đơn vị cung cấp dịch vụ viễn thông, di động VinaPhone 5G, Internet cáp quang &amp; giải pháp số hàng đầu trên địa bàn huyện Bình Lục và khu vực lân cận.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#004e9f] font-semibold text-[11px] border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#004e9f]" />
              <span>Chứng nhận Tiêu chuẩn Viễn thông Quốc gia</span>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-[16px] text-[#131b2e] mb-4">
              Gói Cước &amp; Dịch Vụ
            </h3>
            <ul className="space-y-2.5 text-[13px] text-[#414753]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('goi-vip-5g')}
                  className="hover:text-[#004e9f] transition-colors text-left"
                >
                  Gói Cước VIP 5G Max Data
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('goi-cuoc-tich-hop')}
                  className="hover:text-[#004e9f] transition-colors text-left"
                >
                  Gói Tích Hợp Internet &amp; Di Động
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('goi-data-sieu-toc')}
                  className="hover:text-[#004e9f] transition-colors text-left"
                >
                  Đổi SIM 5G &amp; Đăng Ký eSIM
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('doanh-nghiep-iot')}
                  className="hover:text-[#004e9f] transition-colors text-left"
                >
                  Giải Pháp IoT &amp; Doanh Nghiệp
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-[16px] text-[#131b2e] mb-4">
              Hỗ Trợ Khách Hàng
            </h3>
            <ul className="space-y-2.5 text-[13px] text-[#414753]">
              <li>
                <a href="#form-dang-ky" className="hover:text-[#004e9f] transition-colors">
                  Tra cứu cước &amp; Nạp tiền
                </a>
              </li>
              <li>
                <a href="#goi-cuoc" className="hover:text-[#004e9f] transition-colors">
                  Bản đồ phủ sóng 5G VNPT
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#004e9f] transition-colors">
                  Chính sách bảo mật &amp; Điều khoản
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#004e9f] transition-colors">
                  Câu hỏi thường gặp (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-[16px] text-[#131b2e] mb-4">
              Thông Tin Liên Hệ
            </h3>
            <div className="space-y-3 text-[13px] text-[#414753]">
              <div className="flex items-start gap-2.5">
                <Building className="w-5 h-5 text-[#004e9f] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#131b2e]">Đơn vị: VNPT Bình Mỹ</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#004e9f] shrink-0 mt-0.5" />
                <p>774 Trần Hưng Đạo, Bình Mỹ, Ninh Bình</p>
              </div>

              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-5 h-5 text-[#c2330c] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#131b2e]">Hotline / Điện thoại:</p>
                  <a
                    href="tel:02263862555"
                    className="text-[#c2330c] font-bold text-[17px] hover:underline"
                  >
                    02263.862.555
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Headset className="w-5 h-5 text-[#004e9f] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#131b2e]">Tổng đài VinaPhone chính thức:</p>
                  <a
                    href="tel:18001091"
                    className="text-[#004e9f] font-bold text-[16px] hover:underline"
                  >
                    1800 1091
                  </a>{' '}
                  <span className="text-xs text-slate-500">(24/7 Miễn phí)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-5 h-5 text-[#004e9f] shrink-0 mt-0.5" />
                <a
                  href="mailto:vnptbinhmy@gmail.com"
                  className="hover:text-[#004e9f] transition-colors"
                >
                  vnptbinhmy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#727784]">
          <p>
            © 2025 VNPT Bình Mỹ – Chi nhánh Tổng Công ty Dịch vụ Viễn thông (VNPT-VinaPhone). Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-6 font-semibold">
            <a href="#faq" className="hover:text-[#004e9f] transition-colors">
              Quy chế hoạt động
            </a>
            <a href="#faq" className="hover:text-[#004e9f] transition-colors">
              Bảo mật thông tin
            </a>
            <a href="#form-dang-ky" className="hover:text-[#004e9f] transition-colors">
              Liên hệ hợp tác
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
