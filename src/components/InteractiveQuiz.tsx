import React, { useState } from 'react';
import {
  ChevronRight,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  Headset,
  ArrowRight
} from 'lucide-react';
import { QuizState } from '../types';

interface InteractiveQuizProps {
  onSelectRegister: (pkgId: string) => void;
  onOpenConsultation: () => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  onSelectRegister,
  onOpenConsultation
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [quizState, setQuizState] = useState<QuizState>({
    step1Usage: null,
    step2Call: null,
    step3App: null,
    step4Budget: null
  });
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleStep1 = (val: 'low' | 'medium' | 'high') => {
    setQuizState((prev) => ({ ...prev, step1Usage: val }));
    setCurrentStep(2);
  };

  const handleStep2 = (val: 'low_call' | 'med_call' | 'high_call') => {
    setQuizState((prev) => ({ ...prev, step2Call: val }));
    setCurrentStep(3);
  };

  const handleStep3 = (val: 'app_ai' | 'app_mytv' | 'app_speed') => {
    setQuizState((prev) => ({ ...prev, step3App: val }));
    setCurrentStep(4);
  };

  const handleStep4 = (val: 'under150' | '150-250' | 'over250') => {
    setQuizState((prev) => ({ ...prev, step4Budget: val }));
    setIsFinished(true);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setQuizState({
      step1Usage: null,
      step2Call: null,
      step3App: null,
      step4Budget: null
    });
    setIsFinished(false);
  };

  // Determine top recommendations
  const getRecommendations = () => {
    if (quizState.step4Budget === 'under150') {
      if (quizState.step2Call === 'low_call') {
        return [
          {
            id: 'YOLO100M',
            rank: 'ĐỀ XUẤT SỐ 1',
            name: 'YOLO100M',
            price: '100.000đ',
            details: '• 1GB/ngày (30GB/tháng)\n• Miễn phí data TikTok, YouTube\n• Tiết kiệm tối đa chi phí'
          },
          {
            id: 'VD130',
            rank: 'ĐỀ XUẤT SỐ 2',
            name: 'VD130',
            price: '130.000đ',
            details: '• 2GB/ngày (60GB/tháng)\n• 1.500p nội mạng + 80p ngoại mạng\n• Cân bằng nghe gọi & mạng'
          }
        ];
      }
      return [
        {
          id: 'VD130',
          rank: 'ĐỀ XUẤT SỐ 1',
          name: 'VD130',
          price: '130.000đ',
          details: '• 2GB/ngày (60GB/tháng)\n• 1.500p nội mạng + 80p ngoại mạng\n• Cân bằng nghe gọi & data'
        },
        {
          id: 'YOLO125G',
          rank: 'ĐỀ XUẤT SỐ 2',
          name: 'YOLO125G',
          price: '125.000đ',
          details: '• 2.5GB/ngày (75GB/tháng)\n• Tối ưu độ trễ game Liên Quân/PUBG\n• Tốc độ 5G ổn định'
        }
      ];
    } else if (quizState.step4Budget === 'over250' || quizState.step1Usage === 'high') {
      return [
        {
          id: 'VIP249',
          rank: 'ĐỀ XUẤT SỐ 1',
          name: 'VIP249',
          price: '249.000đ',
          details: '• 10GB/ngày (300GB/tháng)\n• 2.000p nội mạng + 300p ngoại mạng\n• Miễn phí MyTV Mobile'
        },
        {
          id: 'VIP499',
          rank: 'ĐỀ XUẤT SỐ 2',
          name: 'VIP499',
          price: '499.000đ',
          details: '• 500GB/tháng siêu tốc\n• 4.000p nội mạng + 600p ngoại mạng\n• Tặng MultiSIM cho Apple Watch'
        }
      ];
    } else {
      // 150-250k
      if (quizState.step3App === 'app_mytv') {
        return [
          {
            id: 'D159V',
            rank: 'ĐỀ XUẤT SỐ 1',
            name: 'D159V',
            price: '159.000đ',
            details: '• 6GB/ngày (180GB/tháng)\n• 1.500p nội mạng + 200p ngoại mạng\n• Tặng tài khoản MyTV OTT 180+ kênh'
          },
          {
            id: 'VIP199',
            rank: 'ĐỀ XUẤT SỐ 2',
            name: 'VIP199',
            price: '199.000đ',
            details: '• 8GB/ngày (240GB/tháng)\n• 2.000p nội mạng + 250p ngoại mạng\n• MyTV Mobile 4K độc quyền'
          }
        ];
      }
      return [
        {
          id: 'GENAI155',
          rank: 'ĐỀ XUẤT SỐ 1',
          name: 'GENAI155',
          price: '155.000đ',
          details: '• 3GB/ngày (90GB/tháng)\n• 1.500p nội mạng + 100p ngoại mạng\n• Free vnGenAI AI & TikTok'
        },
        {
          id: 'VIP199',
          rank: 'ĐỀ XUẤT SỐ 2',
          name: 'VIP199',
          price: '199.000đ',
          details: '• 8GB/ngày (240GB/tháng)\n• 2.000p nội mạng + 250p ngoại mạng\n• Kết nối băng thông VIP ưu tiên'
        }
      ];
    }
  };

  const recommendations = getRecommendations();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 w-full" id="quiz-section">
      <div className="bg-gradient-to-br from-[#004e9f] to-[#0066cc] text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Background glow circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="font-bold text-[12px] sm:text-[13px] text-[#b6ebff] uppercase tracking-wider">
            CÔNG CỤ ĐỀ XUẤT THÔNG MINH
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold mt-2 mb-4">
            Tìm Gói Cước Phù Hợp Trong 30 Giây
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#dfe8ff] mb-8 leading-relaxed">
            Trả lời 4 câu hỏi đơn giản để trợ lý thuật toán gợi ý gói cước tối ưu chi phí nhất cho thuê bao của bạn.
          </p>

          {/* Quiz Card */}
          <div className="bg-white text-[#131b2e] rounded-2xl p-6 md:p-8 shadow-xl text-left">
            {!isFinished ? (
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                  <span className="font-bold text-[13px] text-[#004e9f]">
                    BƯỚC {currentStep}/4:{' '}
                    {currentStep === 1 && 'DUNG LƯỢNG DATA HÀNG NGÀY'}
                    {currentStep === 2 && 'NHU CẦU THOẠI & ĐÀM THOẠI'}
                    {currentStep === 3 && 'DỊCH VỤ SỐ & TIỆN ÍCH'}
                    {currentStep === 4 && 'NGÂN SÁCH MỖI THÁNG'}
                  </span>
                  <span className="text-[12px] font-semibold text-[#727784]">
                    {currentStep * 25}% Hoàn thành
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-[#eaedff] rounded-full mb-6 overflow-hidden">
                  <div
                    className="h-full bg-[#004e9f] rounded-full transition-all duration-300"
                    style={{ width: `${currentStep * 25}%` }}
                  />
                </div>

                {/* Question 1 */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#131b2e] mb-4">
                      Bạn thường xuyên sử dụng mạng 4G/5G như thế nào?
                    </h3>
                    <div className="space-y-3">
                      <button
                        type="button"
                        onClick={() => handleStep1('low')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">Nhu cầu cơ bản</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Chỉ lướt báo, check email, nhận tin nhắn Zalo nhẹ nhàng (1-2GB/ngày)
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStep1('medium')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">Nhu cầu vừa phải</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Xem video YouTube, lướt TikTok, họp online thường xuyên (3-6GB/ngày)
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStep1('high')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">Cường độ cao liên tục</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Phát livestream, tải file dung lượng lớn, phát Hotspot cả ngày (8-10GB/ngày)
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Question 2 */}
                {currentStep === 2 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#131b2e] mb-4">
                      Tần suất gọi điện thoại di động thông thường của bạn?
                    </h3>
                    <div className="space-y-3">
                      <button
                        type="button"
                        onClick={() => handleStep2('low_call')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">Ít khi gọi thoại</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Chủ yếu liên lạc qua Zalo, Messenger, chỉ cần nhiều Data
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStep2('med_call')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">Gọi vừa phải</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Khoảng 500 – 1.000 phút thoại mỗi tháng cho người thân
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStep2('high_call')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">Gọi liên tục / Bán hàng</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Cần trên 1.500 phút nội mạng &amp; nhiều phút gọi ngoại mạng
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Question 3 */}
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#131b2e] mb-4">
                      Bạn quan tâm nhất đến quyền lợi dịch vụ đi kèm nào?
                    </h3>
                    <div className="space-y-3">
                      <button
                        type="button"
                        onClick={() => handleStep3('app_ai')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">🤖 vnGenAI &amp; Mạng Xã Hội</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Tích hợp tài khoản trí tuệ nhân tạo và lướt TikTok/YouTube tẹt ga
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStep3('app_mytv')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">📺 Truyền hình MyTV Mobile</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Xem 180+ kênh truyền hình, phim rạp, thể thao bản quyền
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStep3('app_speed')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">⚡ Tối đa tốc độ Data thuần túy</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Tập trung băng thông 5G lớn nhất có thể không bóp giới hạn
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Question 4 */}
                {currentStep === 4 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#131b2e] mb-4">
                      Mức cước hàng tháng dự kiến bạn muốn chi trả?
                    </h3>
                    <div className="space-y-3">
                      <button
                        type="button"
                        onClick={() => handleStep4('under150')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">Dưới 150.000đ / tháng</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Tiết kiệm, gói phổ thông thông minh
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStep4('150-250')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">Từ 150.000đ – 250.000đ / tháng</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Đầy đủ quyền lợi đỉnh cao, dung lượng thoải mái
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStep4('over250')}
                        className="w-full p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#004e9f] hover:text-white transition-all text-left flex items-center justify-between group cursor-pointer shadow-xs"
                      >
                        <div>
                          <p className="font-bold text-[15px]">Trên 250.000đ / tháng</p>
                          <p className="text-[12px] sm:text-[13px] text-[#414753] group-hover:text-[#dfe8ff] mt-0.5">
                            Gói VIP cao cấp, MultiSIM, quyền lợi VIP doanh nhân
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Quiz Result Screen */
              <div className="text-center py-2">
                <div className="w-14 h-14 rounded-full bg-[#eaedff] text-[#004e9f] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#131b2e]">
                  Gói Cước Hoàn Hảo Dành Cho Bạn
                </h3>
                <p className="text-[14px] text-[#414753] max-w-lg mx-auto mt-1 mb-6">
                  Dựa trên câu trả lời của bạn, đây là 2 gói cước tối ưu nhất cả về dung lượng và chi phí:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-6">
                  {recommendations.map((rec) => (
                    <div
                      key={rec.id}
                      className="p-5 rounded-2xl bg-[#f2f3ff] border border-slate-200/80 flex flex-col justify-between shadow-sm"
                    >
                      <div>
                        <span className="text-[11px] font-bold text-[#004e9f] uppercase tracking-wider">
                          {rec.rank}
                        </span>
                        <h4 className="text-xl font-black text-[#131b2e] mt-0.5">
                          {rec.name}
                        </h4>
                        <p className="text-lg font-bold text-[#004e9f] mt-1">
                          {rec.price}
                          <span className="text-xs font-normal text-[#727784]"> / tháng</span>
                        </p>
                        <div className="text-[13px] text-[#414753] mt-2.5 whitespace-pre-line leading-relaxed">
                          {rec.details}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectRegister(rec.id)}
                        className="mt-4 w-full py-2.5 rounded-full bg-[#004e9f] hover:bg-[#0066cc] text-white font-bold text-[13px] text-center shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        Đăng Ký Gói Này
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full bg-[#eaedff] hover:bg-[#e2e7ff] text-[#131b2e] font-bold text-[13px] flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Làm Lại Trắc Nghiệm</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 rounded-full bg-[#c2330c] hover:bg-[#9b2100] text-white font-bold text-[13px] shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Headset className="w-4 h-4" />
                    <span>Tư Vấn Thêm Cùng Chuyên Viên</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
