import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { QuickBar } from './components/QuickBar';
import { PillarsSection } from './components/PillarsSection';
import { UserIntentSelector } from './components/UserIntentSelector';
import { PackageCatalog } from './components/PackageCatalog';
import { M2MIoTSection } from './components/M2MIoTSection';
import { ComparisonSection } from './components/ComparisonSection';
import { MetricsCounter } from './components/MetricsCounter';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { FaqSection } from './components/FaqSection';
import { RegistrationForm } from './components/RegistrationForm';
import { PackageDetailModal } from './components/PackageDetailModal';
import { FloatingHotline } from './components/FloatingHotline';
import { Footer } from './components/Footer';
import { ALL_PACKAGES } from './data/packagesData';
import { PackageCategory, PackageItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('trang-chu');
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>('integrated');
  const [compareList, setCompareList] = useState<string[]>(['GENAI155', 'VIP249', 'D159V']);
  const [detailModalPkg, setDetailModalPkg] = useState<PackageItem | null>(null);
  const [preselectedPackageId, setPreselectedPackageId] = useState<string>('GENAI155');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavSelect = (path: string) => {
    setActiveTab(path);
    if (path === 'trang-chu') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === 'goi-cuoc-tich-hop') {
      setSelectedCategory('integrated');
      scrollToSection('goi-cuoc');
    } else if (path === 'goi-vip-5g') {
      setSelectedCategory('vip');
      scrollToSection('goi-cuoc');
    } else if (path === 'goi-data-sieu-toc') {
      setSelectedCategory('data');
      scrollToSection('goi-cuoc');
    } else if (path === 'doanh-nghiep-iot') {
      setSelectedCategory('b2b');
      scrollToSection('doanh-nghiep-iot');
    } else if (path === 'so-sanh-goi') {
      scrollToSection('so-sanh-goi');
    } else if (path === 'tro-giup') {
      scrollToSection('faq');
    }
  };

  const handleQuickFilter = (type: string) => {
    if (type === 'data') {
      setSelectedCategory('data');
      scrollToSection('goi-cuoc');
    } else if (type === 'call') {
      setSelectedCategory('integrated');
      scrollToSection('goi-cuoc');
    } else if (type === '5g') {
      setSelectedCategory('vip');
      scrollToSection('goi-cuoc');
    } else if (type === 'mytv' || type === 'gaming' || type === 'ai') {
      setSelectedCategory('integrated');
      scrollToSection('goi-cuoc');
    }
  };

  const handleSelectIntent = (intent: string) => {
    if (intent === 'data') {
      setSelectedCategory('data');
    } else if (intent === 'call') {
      setSelectedCategory('integrated');
    } else if (intent === 'vip' || intent === 'family') {
      setSelectedCategory('vip');
    } else if (intent === 'b2b') {
      setSelectedCategory('b2b');
    } else {
      setSelectedCategory('integrated');
    }
    scrollToSection('goi-cuoc');
  };

  const handleToggleCompare = (pkgId: string) => {
    if (compareList.includes(pkgId)) {
      setCompareList(compareList.filter((id) => id !== pkgId));
    } else {
      if (compareList.length >= 3) {
        alert('Bạn chỉ có thể so sánh tối đa 3 gói cước cùng lúc. Vui lòng bấm "Xóa so sánh" nếu muốn chọn lại.');
        return;
      }
      setCompareList([...compareList, pkgId]);
    }
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  const handleRemoveFromCompare = (pkgId: string) => {
    setCompareList(compareList.filter((id) => id !== pkgId));
  };

  const handleAddPackageToCompare = (pkgId: string) => {
    if (compareList.length < 3 && !compareList.includes(pkgId)) {
      setCompareList([...compareList, pkgId]);
    }
  };

  const handleSelectRegister = (pkgId: string) => {
    setPreselectedPackageId(pkgId);
    scrollToSection('form-dang-ky');
  };

  const handleOpenConsultation = () => {
    scrollToSection('form-dang-ky');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e]">
      {/* Fixed Sticky Header */}
      <Navbar
        activeTab={activeTab}
        onSelectNav={handleNavSelect}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Banner with 5G Waves and Badges */}
        <HeroBanner
          onExplorePackages={() => scrollToSection('goi-cuoc')}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Quick Filter Bar */}
        <QuickBar onQuickFilter={handleQuickFilter} />

        {/* 6 Feature Pillars */}
        <PillarsSection
          onLearnMore={(actionKey) => {
            if (actionKey === 'data') setSelectedCategory('data');
            else if (actionKey === 'vip') setSelectedCategory('vip');
            else if (actionKey === 'call') setSelectedCategory('integrated');
            scrollToSection('goi-cuoc');
          }}
        />

        {/* User Intent Selector */}
        <UserIntentSelector onSelectIntent={handleSelectIntent} />

        {/* Package Catalog */}
        <PackageCatalog
          packages={ALL_PACKAGES}
          compareList={compareList}
          onToggleCompare={handleToggleCompare}
          onViewDetail={(pkg) => setDetailModalPkg(pkg)}
          onSelectRegister={handleSelectRegister}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />

        {/* M2M & IoT Ecosystem Section */}
        <M2MIoTSection
          onSelectRegister={handleSelectRegister}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Dynamic Comparison Matrix */}
        <ComparisonSection
          compareList={compareList}
          packages={ALL_PACKAGES}
          onClearCompare={handleClearCompare}
          onRemoveFromCompare={handleRemoveFromCompare}
          onSelectRegister={handleSelectRegister}
          onAddPackageToCompare={handleAddPackageToCompare}
        />

        {/* Real Metrics Counter */}
        <MetricsCounter />

        {/* Interactive 4-Step Quiz */}
        <InteractiveQuiz
          onSelectRegister={handleSelectRegister}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Registration & Consultation Form */}
        <RegistrationForm preselectedPackageId={preselectedPackageId} />
      </main>

      {/* Fixed Floating Support Contacts & Mobile Dock */}
      <FloatingHotline onRegisterClick={() => scrollToSection('form-dang-ky')} />

      {/* Footer */}
      <Footer onNavClick={handleNavSelect} />

      {/* Package Detail Modal */}
      <PackageDetailModal
        pkg={detailModalPkg}
        onClose={() => setDetailModalPkg(null)}
        onSelectRegister={handleSelectRegister}
      />
    </div>
  );
}
