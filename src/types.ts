export type PackageCategory = 'integrated' | 'vip' | 'data' | 'b2b' | 'iot' | 'all';

export interface PackageItem {
  id: string;
  name: string;
  category: PackageCategory;
  categoryLabel: string;
  badge?: string;
  badgeType?: 'ai' | 'hot' | 'movie' | 'vip' | 'gaming' | 'savings' | 'enterprise' | 'iot';
  price: number; // in thousands (e.g. 155 = 155.000đ)
  priceFormatted: string;
  period: string; // e.g. "30 ngày" or "tháng" or "12 tháng"
  dataDaily: string; // e.g. "3GB", "10GB", "500GB"
  dataDailyUnit: string; // "/ngày" or "/tháng"
  dataMonthlyTotal: string; // e.g. "90GB/tháng"
  onNetVoice: string;
  offNetVoice: string;
  sms?: string;
  myTv?: string;
  featuredPerks: string[];
  apps: string[]; // ['genai', 'tiktok', 'mytv', 'gaming', 'multisim']
  description: string;
  dailyNum: number; // for numeric filter
  isIot?: boolean;
}

export interface CompareItem {
  name: string;
  price: string;
  data: string;
  onnet: string;
  offnet: string;
  mytv: string;
  perk: string;
}

export interface QuizState {
  step1Usage: 'low' | 'medium' | 'high' | null;
  step2Call: 'low_call' | 'med_call' | 'high_call' | null;
  step3App: 'app_ai' | 'app_mytv' | 'app_speed' | null;
  step4Budget: 'under150' | '150-250' | 'over250' | null;
}
