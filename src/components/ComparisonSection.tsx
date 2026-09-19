import React from 'react';
import { RotateCcw, CheckCircle, Plus } from 'lucide-react';
import { PackageItem } from '../types';

interface ComparisonSectionProps {
  compareList: string[];
  packages: PackageItem[];
  onClearCompare: () => void;
  onRemoveFromCompare: (pkgId: string) => void;
  onSelectRegister: (pkgId: string) => void;
  onAddPackageToCompare: (pkgId: string) => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  compareList,
  packages,
  onClearCompare,
  onRemoveFromCompare,
  onSelectRegister,
  onAddPackageToCompare
}) => {
  // Ensure we display up to 3 slots
  const selectedPackages = compareList
    .map((id) => packages.find((p) => p.id === id))
    .filter(Boolean) as PackageItem[];

  const slots = [0, 1, 2].map((index) => selectedPackages[index] || null);

  const availablePackagesToAdd = packages.filter((p) => !compareList.includes(p.id));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 w-full" id="so-sanh-goi">
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-100">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 gap-4 border-b border-slate-100">
          <div>
            <span className="font-bold text-[12px] sm:text-[13px] text-[#004e9f] uppercase tracking-wider">
              CÔNG CỤ SO SÁNH GÓI THÔNG MINH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] mt-1">
              So Sánh Trực Quan Các Gói Cước
            </h2>
            <p className="text-[14px] text-[#414753] mt-1">
              Chọn tối đa 3 gói cước từ danh sách phía trên để phân tích chi tiết và đối chiếu thông số
            </p>
          </div>

          <div className="flex items-center gap-3">
            {compareList.length > 0 && (
              <button
                type="button"
                id="btn-clear-compare"
                onClick={onClearCompare}
                className="px-4 py-2 rounded-full bg-[#f2f3ff] hover:bg-[#eaedff] text-[#131b2e] font-bold text-[13px] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Xóa so sánh</span>
              </button>
            )}
          </div>
        </div>

        {/* Comparative Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left text-[14px] border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-[#f2f3ff] rounded-2xl">
                <th className="p-4 font-bold text-[#414753] rounded-l-2xl w-1/4">
                  Tiêu chí so sánh
                </th>
                {slots.map((pkg, idx) => (
                  <th
                    key={idx}
                    className={`p-4 font-extrabold text-[17px] text-[#004e9f] w-1/4 ${
                      idx === 2 ? 'rounded-r-2xl' : ''
                    }`}
                  >
                    {pkg ? (
                      <div className="flex items-center justify-between">
                        <span>{pkg.name}</span>
                        <button
                          type="button"
                          onClick={() => onRemoveFromCompare(pkg.id)}
                          className="text-slate-400 hover:text-red-500 text-xs font-normal"
                          title="Gỡ khỏi so sánh"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <div className="text-slate-400 font-normal text-sm flex items-center gap-1">
                        <span>Ô trống #{idx + 1}</span>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Row: Giá cước */}
              <tr className="hover:bg-[#f2f3ff]/50 transition-colors">
                <td className="p-4 font-semibold text-[#414753]">Giá cước niêm yết</td>
                {slots.map((pkg, idx) => (
                  <td key={idx} className="p-4 font-bold text-[#131b2e]">
                    {pkg ? `${pkg.priceFormatted} / ${pkg.period}` : '-'}
                  </td>
                ))}
              </tr>

              {/* Row: Dung lượng Data */}
              <tr className="hover:bg-[#f2f3ff]/50 transition-colors">
                <td className="p-4 font-semibold text-[#414753]">Dung lượng Data/ngày</td>
                {slots.map((pkg, idx) => (
                  <td key={idx} className="p-4 font-bold text-[#004e9f]">
                    {pkg ? `${pkg.dataDaily} ${pkg.dataDailyUnit} (${pkg.dataMonthlyTotal})` : '-'}
                  </td>
                ))}
              </tr>

              {/* Row: Thoại nội mạng */}
              <tr className="hover:bg-[#f2f3ff]/50 transition-colors">
                <td className="p-4 font-semibold text-[#414753]">Thoại nội mạng VinaPhone</td>
                {slots.map((pkg, idx) => (
                  <td key={idx} className="p-4 text-[#131b2e]">
                    {pkg ? pkg.onNetVoice : '-'}
                  </td>
                ))}
              </tr>

              {/* Row: Thoại ngoại mạng */}
              <tr className="hover:bg-[#f2f3ff]/50 transition-colors">
                <td className="p-4 font-semibold text-[#414753]">Thoại ngoại mạng</td>
                {slots.map((pkg, idx) => (
                  <td key={idx} className="p-4 text-[#131b2e]">
                    {pkg ? pkg.offNetVoice : '-'}
                  </td>
                ))}
              </tr>

              {/* Row: MyTV */}
              <tr className="hover:bg-[#f2f3ff]/50 transition-colors">
                <td className="p-4 font-semibold text-[#414753]">Truyền hình MyTV OTT</td>
                {slots.map((pkg, idx) => (
                  <td
                    key={idx}
                    className={`p-4 ${pkg?.myTv && !pkg.myTv.includes('Không kèm') ? 'font-bold text-[#004e9f]' : 'text-[#131b2e]'}`}
                  >
                    {pkg ? pkg.myTv || 'Không kèm' : '-'}
                  </td>
                ))}
              </tr>

              {/* Row: Quyền lợi nổi bật */}
              <tr className="hover:bg-[#f2f3ff]/50 transition-colors">
                <td className="p-4 font-semibold text-[#414753]">Quyền lợi ứng dụng nổi bật</td>
                {slots.map((pkg, idx) => (
                  <td key={idx} className="p-4 text-[#131b2e]">
                    {pkg ? (
                      <span className="text-[13px] leading-tight block">
                        {pkg.featuredPerks[pkg.featuredPerks.length - 1] || 'Tốc độ cao 5G'}
                      </span>
                    ) : (
                      '-'
                    )}
                  </td>
                ))}
              </tr>

              {/* Row: Action */}
              <tr>
                <td className="p-4 font-semibold text-[#414753]">Hành động</td>
                {slots.map((pkg, idx) => (
                  <td key={idx} className="p-4">
                    {pkg ? (
                      <button
                        type="button"
                        id={`btn-cmp-reg-${pkg.id}`}
                        onClick={() => onSelectRegister(pkg.id)}
                        className="px-4 py-2 rounded-full bg-[#004e9f] hover:bg-[#0066cc] text-white font-bold text-[12px] shadow-sm transition-all cursor-pointer"
                      >
                        Đăng ký ngay
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        {availablePackagesToAdd.length > 0 && (
                          <select
                            onChange={(e) => {
                              if (e.target.value) {
                                onAddPackageToCompare(e.target.value);
                                e.target.value = '';
                              }
                            }}
                            className="text-[12px] py-1.5 px-2.5 rounded-lg border border-slate-200 bg-white text-[#131b2e]"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              + Thêm gói so sánh
                            </option>
                            {availablePackagesToAdd.map((p) => (
                              <option key={p.id} value={p.id}>
                                {p.name} ({p.priceFormatted})
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
