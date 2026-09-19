import React, { useState, useEffect } from 'react';
import { Truck, CheckCircle2, Phone, Sparkles, Send } from 'lucide-react';
import { ALL_PACKAGES, M2M_IOT_PACKAGES } from '../data/packagesData';

interface RegistrationFormProps {
  preselectedPackageId?: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  preselectedPackageId
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPkg, setSelectedPkg] = useState(preselectedPackageId || 'GENAI155');
  const [need, setNeed] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedPackageId) {
      setSelectedPkg(preselectedPackageId);
    }
  }, [preselectedPackageId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setNeed('');
    setNote('');
    setIsSubmitted(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 w-full" id="form-dang-ky">
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-slate-100 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-bold text-[12px] sm:text-[13px] text-[#004e9f] uppercase tracking-wider">
            KÍCH HOẠT NHANH CHÓNG
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#131b2e] mt-1">
            CHỌN GÓI PHÙ HỢP – ĐĂNG KÝ NGAY
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#414753] mt-2 leading-relaxed">
            Điền thông tin bên dưới để chuyên viên <strong>VNPT Bình Mỹ</strong> hỗ trợ tra cứu ưu đãi, kích hoạt gói cước và giao SIM tận nơi. Hotline hỗ trợ:{' '}
            <a href="tel:02263862555" className="text-[#004e9f] font-bold hover:underline">
              02263.862.555
            </a>{' '}
            | Tổng đài CSKH:{' '}
            <a href="tel:18001091" className="text-[#004e9f] font-bold hover:underline">
              1800 1091
            </a>{' '}
            (24/7).
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 rounded-2xl bg-[#eaedff]/60 border border-[#004e9f]/20 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#004e9f] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-extrabold text-[#131b2e]">
              Đăng ký thông tin thành công!
            </h4>
            <p className="text-[14px] text-[#414753] mt-2 max-w-md mx-auto leading-relaxed">
              Cảm ơn quý khách <strong>{name || 'bạn'}</strong>. Hệ thống VNPT Bình Mỹ đã tiếp nhận yêu cầu đăng ký gói cước <strong>{selectedPkg}</strong> cho số thuê bao <strong>{phone}</strong>. Chuyên viên sẽ liên hệ lại trong ít phút để kích hoạt ngay.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:02263862555"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#c2330c] hover:bg-[#9b2100] text-white font-bold text-[13px] flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi xác nhận ngay: 02263.862.555</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#131b2e] font-bold text-[13px] border border-slate-200"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                className="block font-bold text-[13px] text-[#131b2e] mb-1.5"
                htmlFor="user-name-input"
              >
                Họ và tên của bạn *
              </label>
              <input
                id="user-name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nguyễn Văn A"
                className="w-full h-12 px-4 rounded-xl bg-[#f2f3ff] text-[#131b2e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#004e9f] border border-slate-200"
              />
            </div>

            {/* Phone & Package */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block font-bold text-[13px] text-[#131b2e] mb-1.5"
                  htmlFor="user-phone-input"
                >
                  Số điện thoại VinaPhone *
                </label>
                <input
                  id="user-phone-input"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0912xxxxxx (10 chữ số)"
                  className="w-full h-12 px-4 rounded-xl bg-[#f2f3ff] text-[#131b2e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#004e9f] border border-slate-200"
                />
              </div>

              <div>
                <label
                  className="block font-bold text-[13px] text-[#131b2e] mb-1.5"
                  htmlFor="user-pkg-select"
                >
                  Gói cước quan tâm *
                </label>
                <select
                  id="user-pkg-select"
                  required
                  value={selectedPkg}
                  onChange={(e) => setSelectedPkg(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-[#f2f3ff] text-[#131b2e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#004e9f] border border-slate-200"
                >
                  <optgroup label="--- GÓI CƯỚC DI ĐỘNG 5G ---">
                    {ALL_PACKAGES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.priceFormatted} - {p.dataDaily} {p.dataDailyUnit})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="--- GÓI M2M & IOT VNPT ---">
                    {M2M_IOT_PACKAGES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.price}{p.period} - {p.badge})
                      </option>
                    ))}
                  </optgroup>
                  <option value="tu-van-them">Cần tư vấn gói khác phù hợp hơn</option>
                </select>
              </div>
            </div>

            {/* Need */}
            <div>
              <label
                className="block font-bold text-[13px] text-[#131b2e] mb-1.5"
                htmlFor="user-need-input"
              >
                Nhu cầu sử dụng chính
              </label>
              <input
                id="user-need-input"
                type="text"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                placeholder="VD: Muốn dùng data lướt web nhiều, hay đi công tác ngoại tỉnh, cần eSIM..."
                className="w-full h-12 px-4 rounded-xl bg-[#f2f3ff] text-[#131b2e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#004e9f] border border-slate-200"
              />
            </div>

            {/* Note */}
            <div>
              <label
                className="block font-bold text-[13px] text-[#131b2e] mb-1.5"
                htmlFor="user-note-input"
              >
                Ghi chú hoặc thời gian thuận tiện nhận cuộc gọi
              </label>
              <textarea
                id="user-note-input"
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="VD: Gọi cho tôi vào giờ hành chính, hoặc sau 17h..."
                className="w-full p-3.5 rounded-xl bg-[#f2f3ff] text-[#131b2e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#004e9f] border border-slate-200"
              />
            </div>

            {/* Notice */}
            <div className="p-3.5 rounded-xl bg-[#eaedff] flex items-center gap-2.5 text-[#131b2e] text-[13px]">
              <Truck className="w-5 h-5 text-[#004e9f] shrink-0" />
              <span>
                <strong>VNPT Bình Mỹ</strong> hỗ trợ tư vấn miễn phí, chuyển đổi eSIM và giao SIM vật lý tận nơi trên toàn địa bàn.
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              id="btn-submit-order"
              disabled={loading}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#c2330c] to-[#9b2100] hover:from-[#9b2100] hover:to-[#c2330c] text-white font-bold text-[15px] shadow-xl hover:shadow-[0_0_24px_rgba(255,94,54,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              {loading ? (
                <span>Đang xử lý dữ liệu...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>NHẬN TƯ VẤN & KÍCH HOẠT NGAY</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
