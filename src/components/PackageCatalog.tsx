import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  Scale,
  Check,
  Flame,
  Star,
  Wifi,
  Building2,
  Globe2,
  SlidersHorizontal,
  Bot,
  Zap,
  Film,
  Crown,
  Gamepad2,
  DollarSign
} from 'lucide-react';
import { PackageCategory, PackageItem } from '../types';

interface PackageCatalogProps {
  packages: PackageItem[];
  compareList: string[];
  onToggleCompare: (pkgId: string) => void;
  onViewDetail: (pkg: PackageItem) => void;
  onSelectRegister: (pkgId: string) => void;
  selectedCategory: PackageCategory;
  onCategoryChange: (category: PackageCategory) => void;
}

export const PackageCatalog: React.FC<PackageCatalogProps> = ({
  packages,
  compareList,
  onToggleCompare,
  onViewDetail,
  onSelectRegister,
  selectedCategory,
  onCategoryChange
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [dataFilter, setDataFilter] = useState('all');
  const [appFilter, setAppFilter] = useState('all');

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      // Search
      const matchesSearch =
        !searchQuery ||
        pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.featuredPerks.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category
      const matchesCategory =
        searchQuery.trim().length > 0 ||
        selectedCategory === 'all' ||
        pkg.category === selectedCategory;

      // Price
      let matchesPrice = true;
      if (priceFilter === 'under100') matchesPrice = pkg.price < 100;
      else if (priceFilter === '100-150') matchesPrice = pkg.price >= 100 && pkg.price <= 150;
      else if (priceFilter === '150-250') matchesPrice = pkg.price > 150 && pkg.price <= 250;
      else if (priceFilter === '250-500') matchesPrice = pkg.price > 250 && pkg.price <= 500;
      else if (priceFilter === 'over500') matchesPrice = pkg.price > 500;

      // Data
      let matchesData = true;
      if (dataFilter === '1gb') matchesData = pkg.dailyNum === 1;
      else if (dataFilter === '2gb') matchesData = pkg.dailyNum >= 2 && pkg.dailyNum < 3;
      else if (dataFilter === '3gb') matchesData = pkg.dailyNum >= 3 && pkg.dailyNum <= 5;
      else if (dataFilter === '6gb-plus') matchesData = pkg.dailyNum >= 6 && pkg.dailyNum <= 10;
      else if (dataFilter === 'month') matchesData = pkg.dataDailyUnit.includes('tháng') || pkg.dailyNum > 10;

      // App
      let matchesApp = true;
      if (appFilter !== 'all') {
        matchesApp = pkg.apps.includes(appFilter);
      }

      return matchesSearch && matchesCategory && matchesPrice && matchesData && matchesApp;
    });
  }, [packages, searchQuery, selectedCategory, priceFilter, dataFilter, appFilter]);

  const categories: { id: PackageCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'integrated', label: '🔥 Gói Tích Hợp (Data + Thoại)', icon: <Flame className="w-4 h-4" /> },
    { id: 'vip', label: '⭐ Gói VIP 5G (Max Băng Thông)', icon: <Star className="w-4 h-4" /> },
    { id: 'data', label: '📶 Gói Data Siêu Tốc (YOLO, 5G, U-Series)', icon: <Wifi className="w-4 h-4" /> },
    { id: 'b2b', label: '🏢 Gói Doanh Nghiệp (Office & SME)', icon: <Building2 className="w-4 h-4" /> },
    { id: 'iot', label: '🌐 Gói M2M / IoT (Smart Devices & Doanh Nghiệp)', icon: <Globe2 className="w-4 h-4" /> }
  ];

  const getBadgeStyle = (badgeType?: string) => {
    switch (badgeType) {
      case 'ai':
        return 'bg-[#00d2ff] text-[#00566a]';
      case 'hot':
        return 'bg-[#ffdad2] text-[#8a1d00]';
      case 'movie':
        return 'bg-[#d7e3ff] text-[#004e9f]';
      case 'vip':
        return 'bg-[#004e9f] text-white';
      case 'gaming':
        return 'bg-[#00677f] text-white';
      case 'savings':
        return 'bg-[#e2e7ff] text-[#131b2e]';
      case 'enterprise':
        return 'bg-[#0066cc] text-white';
      default:
        return 'bg-[#e2e7ff] text-[#004e9f]';
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 w-full" id="goi-cuoc">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <p className="font-bold text-[13px] text-[#004e9f] uppercase tracking-wider mb-2">
            BẢNG GIÁ NIÊM YẾT CHÍNH HÃNG
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131b2e]">
            Danh Mục Gói Cước Di Động 5G
          </h2>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            id="package-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm gói cước (VD: VIP249, GENAI, D159V...)"
            className="w-full h-12 pl-11 pr-4 rounded-xl bg-white text-[#131b2e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#004e9f] shadow-sm border border-slate-200 placeholder:text-slate-400"
          />
          <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-[#727784]" />
        </div>
      </div>

      {/* Smart Multi-Criteria Filter Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-100 mb-10 space-y-4">
        {/* Row 1: Mức giá */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 sm:gap-3">
          <span className="font-bold text-[13px] text-[#414753] w-28 shrink-0">Mức giá:</span>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Tất cả giá' },
              { id: 'under100', label: 'Dưới 100K' },
              { id: '100-150', label: '100K – 150K' },
              { id: '150-250', label: '150K – 250K' },
              { id: '250-500', label: '250K – 500K' },
              { id: 'over500', label: 'Trên 500K' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setPriceFilter(p.id)}
                type="button"
                className={`px-3.5 py-1.5 rounded-full font-bold text-[12px] transition-colors cursor-pointer ${
                  priceFilter === p.id
                    ? 'bg-[#004e9f] text-white shadow-xs'
                    : 'bg-[#eaedff] text-[#131b2e] hover:bg-[#e2e7ff]'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Dung lượng Data */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 sm:gap-3">
          <span className="font-bold text-[13px] text-[#414753] w-28 shrink-0">Data / ngày:</span>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Tất cả Data' },
              { id: '1gb', label: '1GB / ngày' },
              { id: '2gb', label: '2GB / ngày' },
              { id: '3gb', label: '3GB – 5GB / ngày' },
              { id: '6gb-plus', label: '6GB – 10GB / ngày' },
              { id: 'month', label: 'Data Khủng Theo Tháng' }
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setDataFilter(d.id)}
                type="button"
                className={`px-3.5 py-1.5 rounded-full font-bold text-[12px] transition-colors cursor-pointer ${
                  dataFilter === d.id
                    ? 'bg-[#004e9f] text-white shadow-xs'
                    : 'bg-[#eaedff] text-[#131b2e] hover:bg-[#e2e7ff]'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Ứng dụng đi kèm */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 sm:gap-3">
          <span className="font-bold text-[13px] text-[#414753] w-28 shrink-0">Ứng dụng đi kèm:</span>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 'mytv', label: 'MyTV OTT' },
              { id: 'tiktok', label: 'TikTok & YouTube' },
              { id: 'gaming', label: 'Gói Game' },
              { id: 'genai', label: 'vnGenAI Trợ lý' }
            ].map((a) => (
              <button
                key={a.id}
                onClick={() => setAppFilter(a.id)}
                type="button"
                className={`px-3.5 py-1.5 rounded-full font-bold text-[12px] transition-colors cursor-pointer ${
                  appFilter === a.id
                    ? 'bg-[#004e9f] text-white shadow-xs'
                    : 'bg-[#eaedff] text-[#131b2e] hover:bg-[#e2e7ff]'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar scroll-smooth">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              id={`cat-tab-${cat.id}`}
              type="button"
              className={`px-5 py-3 rounded-full font-bold text-[13px] sm:text-[14px] whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#004e9f] text-white shadow-md'
                  : 'bg-[#f2f3ff] hover:bg-[#eaedff] text-[#131b2e]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Package Cards Grid */}
      {filteredPackages.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
          <SlidersHorizontal className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-[#131b2e]">Không tìm thấy gói cước phù hợp</h3>
          <p className="text-slate-500 text-sm mt-1 mb-6">
            Thử đặt lại bộ lọc hoặc điều chỉnh từ khóa tìm kiếm của bạn.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setPriceFilter('all');
              setDataFilter('all');
              setAppFilter('all');
              onCategoryChange('integrated');
            }}
            className="px-5 py-2.5 rounded-full bg-[#004e9f] text-white text-sm font-bold shadow-sm"
          >
            Đặt lại tất cả bộ lọc
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="packages-grid">
          {filteredPackages.map((pkg) => {
            const isCompared = compareList.includes(pkg.id);
            return (
              <div
                key={pkg.id}
                id={`card-pkg-${pkg.id}`}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between relative overflow-hidden border border-slate-100 group"
              >
                {/* Badge if present */}
                {pkg.badge && (
                  <div
                    className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 shadow-xs ${getBadgeStyle(
                      pkg.badgeType
                    )}`}
                  >
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <span className="font-bold text-[11px] text-[#004e9f] uppercase tracking-wider">
                    {pkg.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#131b2e] mt-1">
                    {pkg.name}
                  </h3>

                  {/* Price & Data Box */}
                  <div className="my-4 p-4 rounded-2xl bg-[#f2f3ff] flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl font-black text-[#004e9f]">
                        {pkg.dataDaily}
                      </span>
                      <span className="text-[12px] font-semibold text-[#414753] ml-1">
                        {pkg.dataDailyUnit}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-[#131b2e]">
                        {pkg.priceFormatted}
                      </span>
                      <p className="text-[12px] text-[#414753]">/ {pkg.period}</p>
                    </div>
                  </div>

                  {/* Feature Perks */}
                  <ul className="space-y-2.5 text-[13px] text-[#414753]">
                    {pkg.featuredPerks.map((perk, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#004e9f] shrink-0 mt-0.5" />
                        <span className="leading-snug">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      id={`btn-detail-${pkg.id}`}
                      onClick={() => onViewDetail(pkg)}
                      className="flex-1 py-2.5 rounded-full bg-[#eaedff] hover:bg-[#e2e7ff] text-[#131b2e] font-bold text-[13px] text-center transition-colors cursor-pointer"
                    >
                      Chi Tiết
                    </button>
                    <button
                      type="button"
                      id={`btn-register-${pkg.id}`}
                      onClick={() => onSelectRegister(pkg.id)}
                      className="flex-1 py-2.5 rounded-full bg-[#004e9f] hover:bg-[#0066cc] text-white font-bold text-[13px] text-center transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      Đăng Ký Ngay
                    </button>
                  </div>

                  {/* Toggle Compare Button */}
                  <button
                    type="button"
                    id={`btn-compare-${pkg.id}`}
                    onClick={() => onToggleCompare(pkg.id)}
                    className={`w-full py-1.5 font-semibold text-[12px] transition-colors flex items-center justify-center gap-1.5 rounded-lg cursor-pointer ${
                      isCompared
                        ? 'text-[#004e9f] bg-[#eaedff]/60 font-bold'
                        : 'text-[#414753] hover:text-[#004e9f]'
                    }`}
                  >
                    {isCompared ? (
                      <>
                        <Check className="w-4 h-4 text-[#004e9f]" />
                        <span>Đã thêm vào so sánh</span>
                      </>
                    ) : (
                      <>
                        <Scale className="w-4 h-4" />
                        <span>Thêm vào so sánh</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
