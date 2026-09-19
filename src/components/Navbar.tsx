import React, { useState } from 'react';
import { Phone, User, Menu, X, Wifi } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onSelectNav: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectNav,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Trang chủ', path: 'trang-chu' },
    { label: 'Gói Cước Tích Hợp', path: 'goi-cuoc-tich-hop' },
    { label: 'Gói VIP 5G', path: 'goi-vip-5g' },
    { label: 'Gói Data Siêu Tốc', path: 'goi-data-sieu-toc' },
    { label: 'Doanh Nghiệp & IoT', path: 'doanh-nghiep-iot' },
    { label: 'So Sánh Gói', path: 'so-sanh-goi' },
    { label: 'Trợ Giúp', path: 'tro-giup' }
  ];

  const handleNavClick = (path: string) => {
    onSelectNav(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf8ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.05)] border-b border-[#004e9f]/10 transition-all">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('trang-chu')}
          className="flex items-center gap-3 text-left focus:outline-none group"
          id="btn-nav-logo"
        >
          <img
            alt="VinaPhone 5G Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Wne_qJsBPl_1N0GA2g3BYGjqvvQqAzuLvXxxzaABo9eHraaym7_QUUe4ru9GAUezV6Qqee2wUsJHY8mCPoq_WwM0ZWgkqFMMqE5L6vxDuOu7VmSnNwGl-M9NvJLfAHGvAy1QO-Y7qM_lJUbYyJqT3PTZPCdODQk0E1u1_HdGnYyPKnE-CjtkttYvBZZcdsD5vs8Ah4OH6CL14zWzXMpQkPweq2HjVf0b4hlWDAKUYwAiXGOPlKH6Wz_Jo"
          />
          <div className="flex flex-col">
            <span className="font-bold text-[19px] tracking-tight text-[#004e9f] hidden sm:inline-block leading-tight">
              VinaPhone 5G
            </span>
            <span className="text-[10px] font-semibold text-[#00677f] uppercase tracking-wider hidden sm:inline-block">
              VNPT Bình Mỹ
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeTab === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                id={`nav-link-${link.path}`}
                className={`px-3.5 py-2 font-bold text-[14px] rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0066cc] text-white shadow-sm'
                    : 'text-[#414753] hover:text-[#131b2e] hover:bg-[#eaedff]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            id="header-call-cta"
            className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#c2330c] text-white font-bold text-[13px] shadow-[0_0_20px_rgba(255,94,54,0.3)] hover:bg-[#9b2100] hover:scale-105 active:scale-95 transition-all"
            href="tel:02263862555"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <span className="hidden sm:inline font-bold">VNPT Bình Mỹ: 02263.862.555</span>
            <span className="sm:hidden font-bold">02263.862.555</span>
          </a>

          <button
            onClick={onOpenConsultation}
            id="header-user-btn"
            title="Đăng ký & Tư vấn nhanh"
            className="w-9 h-9 rounded-full bg-[#004e9f] text-white flex items-center justify-center hover:bg-[#003d80] transition-colors shadow-sm"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="xl:hidden p-2 rounded-xl text-[#004e9f] hover:bg-[#eaedff] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#faf8ff] border-t border-[#004e9f]/10 px-6 py-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-bold text-[14px] transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0066cc] text-white'
                      : 'text-[#131b2e] hover:bg-[#eaedff]'
                  }`}
                >
                  <span>{link.label}</span>
                  <Wifi className="w-4 h-4 opacity-70" />
                </button>
              );
            })}
            <div className="pt-4 border-t border-slate-200 mt-2 flex flex-col gap-2">
              <a
                href="tel:02263862555"
                className="w-full text-center py-3 rounded-xl bg-[#c2330c] text-white font-bold text-[14px] shadow-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Gọi VNPT Bình Mỹ: 02263.862.555
              </a>
              <a
                href="tel:18001091"
                className="w-full text-center py-2.5 rounded-xl bg-[#eaedff] text-[#004e9f] font-bold text-[13px]"
              >
                Tổng đài 1800 1091 (Miễn phí 24/7)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
