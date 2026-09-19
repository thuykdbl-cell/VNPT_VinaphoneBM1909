import React from 'react';
import {
  X,
  Zap,
  Phone,
  PhoneForwarded,
  Tv,
  BadgeCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { PackageItem } from '../types';

interface PackageDetailModalProps {
  pkg: PackageItem | null;
  onClose: () => void;
  onSelectRegister: (pkgId: string) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  onSelectRegister
}) => {
  if (!pkg) return null;

  const handleRegister = () => {
    onSelectRegister(pkg.id);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Đóng chi tiết"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-left">
          <span className="text-[11px] font-bold text-[#004e9f] uppercase tracking-wider">
            CHI TIẾT QUYỀN LỢI GÓI
          </span>
          <div className="flex items-center gap-2 mt-1">
            <h3 className="text-2xl sm:text-3xl font-black text-[#131b2e]">
              {pkg.name}
            </h3>
            {pkg.badge && (
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#eaedff] text-[#004e9f]">
                {pkg.badge}
              </span>
            )}
          </div>

          <p className="text-xl font-black text-[#004e9f] mt-1">
            {pkg.priceFormatted}{' '}
            <span className="text-xs font-normal text-slate-500">/ {pkg.period}</span>
          </p>

          <p className="text-[14px] text-[#414753] mt-2 mb-6 leading-relaxed">
            {pkg.description}
          </p>

          {/* Specs List */}
          <div className="space-y-3 bg-[#f2f3ff] p-4 sm:p-5 rounded-2xl mb-6">
            <div className="flex items-start gap-2.5">
              <Zap className="w-5 h-5 text-[#004e9f] shrink-0 mt-0.5" />
              <div className="text-[13px] sm:text-[14px] text-[#131b2e]">
                <strong>Dung lượng:</strong> {pkg.dataDaily} {pkg.dataDailyUnit} ({pkg.dataMonthlyTotal})
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-5 h-5 text-[#004e9f] shrink-0 mt-0.5" />
              <div className="text-[13px] sm:text-[14px] text-[#131b2e]">
                <strong>Thoại nội mạng:</strong> {pkg.onNetVoice}
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <PhoneForwarded className="w-5 h-5 text-[#004e9f] shrink-0 mt-0.5" />
              <div className="text-[13px] sm:text-[14px] text-[#131b2e]">
                <strong>Thoại ngoại mạng:</strong> {pkg.offNetVoice}
              </div>
            </div>

            {pkg.sms && (
              <div className="flex items-start gap-2.5">
                <Calendar className="w-5 h-5 text-[#004e9f] shrink-0 mt-0.5" />
                <div className="text-[13px] sm:text-[14px] text-[#131b2e]">
                  <strong>Tin nhắn SMS:</strong> {pkg.sms}
                </div>
              </div>
            )}

            <div className="flex items-start gap-2.5">
              <Tv className="w-5 h-5 text-[#004e9f] shrink-0 mt-0.5" />
              <div className="text-[13px] sm:text-[14px] text-[#131b2e]">
                <strong>Truyền hình MyTV:</strong> {pkg.myTv || 'Không kèm'}
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <BadgeCheck className="w-5 h-5 text-[#004e9f] shrink-0 mt-0.5" />
              <div className="text-[13px] sm:text-[14px] text-[#131b2e]">
                <strong>Tiện ích nổi bật:</strong>{' '}
                {pkg.featuredPerks.slice(3).join(', ') || 'Kết nối siêu tốc 5G'}
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-full bg-[#eaedff] hover:bg-[#e2e7ff] text-[#131b2e] font-bold text-[14px] transition-colors cursor-pointer"
            >
              Đóng lại
            </button>
            <button
              type="button"
              onClick={handleRegister}
              className="flex-1 py-3 rounded-full bg-[#004e9f] hover:bg-[#0066cc] text-white font-bold text-[14px] shadow-md transition-all cursor-pointer"
            >
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
