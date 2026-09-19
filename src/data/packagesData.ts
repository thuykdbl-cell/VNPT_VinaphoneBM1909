import { PackageItem } from '../types';

export const ALL_PACKAGES: PackageItem[] = [
  {
    id: 'GENAI155',
    name: 'GENAI155',
    category: 'integrated',
    categoryLabel: 'GÓI TÍCH HỢP AI',
    badge: '🤖 AI ĐỘT PHÁ',
    badgeType: 'ai',
    price: 155,
    priceFormatted: '155.000đ',
    period: '30 ngày',
    dataDaily: '3GB',
    dataDailyUnit: '/ngày',
    dataMonthlyTotal: '90GB/tháng (tốc độ cao 5G)',
    onNetVoice: '1.500 phút gọi nội mạng VinaPhone',
    offNetVoice: '100 phút gọi ngoại mạng thả ga',
    myTv: 'Không kèm',
    featuredPerks: [
      '90GB/tháng (tốc độ cao 5G)',
      '1.500 phút gọi nội mạng VinaPhone',
      '100 phút gọi ngoại mạng thả ga',
      'Tích hợp đặc quyền trợ lý thông minh vnGenAI',
      'Miễn phí 100% Data lướt TikTok không giới hạn'
    ],
    apps: ['genai', 'tiktok'],
    description: 'Gói cước đột phá thế hệ mới tích hợp bản quyền trợ lý trí tuệ nhân tạo vnGenAI của VNPT, phục vụ tối đa học tập, sáng tạo nội dung và giải trí di động.',
    dailyNum: 3
  },
  {
    id: 'VD130',
    name: 'VD130',
    category: 'integrated',
    categoryLabel: 'GÓI TÍCH HỢP QUỐC DÂN',
    badge: '🔥 ĐƯỢC QUAN TÂM',
    badgeType: 'hot',
    price: 130,
    priceFormatted: '130.000đ',
    period: '30 ngày',
    dataDaily: '2GB',
    dataDailyUnit: '/ngày',
    dataMonthlyTotal: '60GB/tháng kết nối 4G/5G mượt mà',
    onNetVoice: '1.500 phút nội mạng VinaPhone',
    offNetVoice: '80 phút gọi ngoại mạng tất cả các mạng',
    myTv: 'Không kèm',
    featuredPerks: [
      '60GB/tháng kết nối 4G/5G mượt mà',
      '1.500 phút nội mạng VinaPhone',
      '80 phút gọi ngoại mạng tất cả các mạng',
      'Tự động gia hạn khi có đủ số dư tài khoản'
    ],
    apps: [],
    description: 'Gói cước tích hợp quốc dân được ưa chuộng nhất, tỷ lệ chi phí trên lợi ích tối ưu, đáp ứng trọn vẹn cả nghe gọi và lướt mạng mỗi ngày.',
    dailyNum: 2
  },
  {
    id: 'D159V',
    name: 'D159V',
    category: 'integrated',
    categoryLabel: 'DATA KHỦNG & MYTV',
    badge: '🎬 GIẢI TRÍ & DATA',
    badgeType: 'movie',
    price: 159,
    priceFormatted: '159.000đ',
    period: '30 ngày',
    dataDaily: '6GB',
    dataDailyUnit: '/ngày',
    dataMonthlyTotal: '180GB/tháng Data tốc độ cao',
    onNetVoice: 'Nội mạng ≤30p/cuộc (tối đa 1.500 phút)',
    offNetVoice: '200 phút gọi ngoại mạng siêu nhiều',
    sms: '200 SMS nội mạng VinaPhone',
    myTv: 'Miễn phí xem truyền hình MyTV OTT chuẩn',
    featuredPerks: [
      '180GB/tháng Data tốc độ cao',
      'Nội mạng ≤30p/cuộc (tối đa 1.500 phút)',
      '200 phút gọi ngoại mạng siêu nhiều',
      '200 SMS nội mạng VinaPhone',
      'Miễn phí xem truyền hình MyTV OTT chuẩn'
    ],
    apps: ['mytv'],
    description: 'Gói giải trí số toàn diện cho gia đình và cá nhân với dung lượng lên đến 6GB/ngày, kèm 180+ kênh truyền hình MyTV trên smartphone.',
    dailyNum: 6
  },
  {
    id: 'VIP199',
    name: 'VIP199',
    category: 'vip',
    categoryLabel: 'HẠNG VIP CAO CẤP',
    badge: '⭐ GÓI VIP ĐẲNG CẤP',
    badgeType: 'vip',
    price: 199,
    priceFormatted: '199.000đ',
    period: '30 ngày',
    dataDaily: '8GB',
    dataDailyUnit: '/ngày',
    dataMonthlyTotal: '240GB/tháng trải nghiệm tốc độ không giới hạn',
    onNetVoice: '2.000 phút gọi nội mạng VinaPhone',
    offNetVoice: '250 phút ngoại mạng chất lượng cao',
    myTv: 'Gói MyTV Mobile độc quyền xem phim 4K',
    featuredPerks: [
      '240GB/tháng trải nghiệm tốc độ không giới hạn',
      '2.000 phút gọi nội mạng VinaPhone',
      '250 phút ngoại mạng chất lượng cao',
      'Gói MyTV Mobile độc quyền xem phim 4K'
    ],
    apps: ['mytv'],
    description: 'Đặc quyền kết nối thượng lưu với 8GB/ngày, đường truyền 5G ưu tiên và hạn mức đàm thoại thoải mái cho công việc.',
    dailyNum: 8
  },
  {
    id: 'VIP249',
    name: 'VIP249',
    category: 'vip',
    categoryLabel: 'HẠNG VIP DOANH NHÂN',
    badge: '⭐ VIP DATA KHỦNG',
    badgeType: 'vip',
    price: 249,
    priceFormatted: '249.000đ',
    period: '30 ngày',
    dataDaily: '10GB',
    dataDailyUnit: '/ngày',
    dataMonthlyTotal: '300GB/tháng Data 5G tốc độ tối đa',
    onNetVoice: '2.000 phút nội mạng VinaPhone',
    offNetVoice: '300 phút ngoại mạng đàm thoại kinh doanh',
    myTv: 'Tặng tài khoản MyTV Mobile',
    featuredPerks: [
      '300GB/tháng Data 5G tốc độ tối đa',
      '2.000 phút nội mạng VinaPhone',
      '300 phút ngoại mạng đàm thoại kinh doanh',
      'Miễn phí trọn đời Data các ứng dụng theo gói'
    ],
    apps: ['mytv'],
    description: 'Gói cước dành cho doanh nhân và nhà quản lý với 10GB/ngày (300GB/tháng), phát Wi-Fi Hotspot cho cả nhóm làm việc không lo gián đoạn.',
    dailyNum: 10
  },
  {
    id: 'VIP499',
    name: 'VIP499',
    category: 'vip',
    categoryLabel: 'HẠNG SIÊU VIP MAX SPECS',
    badge: '⭐ SIÊU VIP 5G',
    badgeType: 'vip',
    price: 499,
    priceFormatted: '499.000đ',
    period: '30 ngày',
    dataDaily: '500GB',
    dataDailyUnit: '/tháng',
    dataMonthlyTotal: '500GB Data siêu tốc dùng chung không bóp băng thông',
    onNetVoice: '4.000 phút gọi nội mạng không giới hạn',
    offNetVoice: '600 phút gọi ngoại mạng tất cả tổng đài',
    myTv: 'MyTV VIP đa màn hình',
    featuredPerks: [
      '500GB Data siêu tốc dùng chung không bóp băng thông',
      '4.000 phút gọi nội mạng không giới hạn',
      '600 phút gọi ngoại mạng tất cả tổng đài',
      'Tặng kèm MultiSIM miễn phí gắn Apple Watch / iPad'
    ],
    apps: ['mytv', 'multisim'],
    description: 'Đỉnh cao viễn thông 5G với 500GB/tháng data không giới hạn tốc độ, kèm thẻ MultiSIM miễn phí chia sẻ cho đồng hồ thông minh và máy tính bảng.',
    dailyNum: 16.6
  },
  {
    id: 'YOLO100M',
    name: 'YOLO100M',
    category: 'data',
    categoryLabel: 'DATA GIÁ SIÊU TIẾT KIỆM',
    badge: '💰 GIÁ TỐT',
    badgeType: 'savings',
    price: 100,
    priceFormatted: '100.000đ',
    period: '30 ngày',
    dataDaily: '1GB',
    dataDailyUnit: '/ngày',
    dataMonthlyTotal: '30GB/tháng tốc độ cao 5G',
    onNetVoice: 'Không kèm',
    offNetVoice: 'Không kèm',
    myTv: 'Không kèm',
    featuredPerks: [
      '30GB/tháng tốc độ cao 5G',
      'Miễn phí hoàn toàn Data ứng dụng TikTok & YouTube',
      'Lướt web, Facebook, Zalo mượt mà cả ngày'
    ],
    apps: ['tiktok'],
    description: 'Chỉ 100K/tháng, lướt video ngắn TikTok và xem YouTube hoàn toàn miễn phí cước data, phù hợp với giới trẻ và học sinh sinh viên.',
    dailyNum: 1
  },
  {
    id: 'YOLO125G',
    name: 'YOLO125G',
    category: 'data',
    categoryLabel: 'GÓI TỐI ƯU GAME THỦ',
    badge: '🎮 GAMING PRO',
    badgeType: 'gaming',
    price: 125,
    priceFormatted: '125.000đ',
    period: '30 ngày',
    dataDaily: '2.5GB',
    dataDailyUnit: '/ngày',
    dataMonthlyTotal: '75GB/tháng tốc độ cao 5G',
    onNetVoice: 'Không kèm',
    offNetVoice: 'Không kèm',
    myTv: 'Không kèm',
    featuredPerks: [
      '75GB/tháng tốc độ cao 5G',
      'Tối ưu độ trễ thấp dành riêng cho Liên Quân, Free Fire, PUBG',
      'Miễn phí 100% data khi chơi các game đối tác'
    ],
    apps: ['gaming'],
    description: 'Định tuyến ưu tiên qua máy chủ tốc độ cao, giữ ping ổn định và giảm thiểu giật lag khi chơi game online di động cường độ cao.',
    dailyNum: 2.5
  },
  {
    id: 'Office199',
    name: 'Office199',
    category: 'b2b',
    categoryLabel: 'GIẢI PHÁP VĂN PHÒNG SỐ',
    badge: '🏢 DOANH NGHIỆP',
    badgeType: 'enterprise',
    price: 199,
    priceFormatted: '199.000đ',
    period: 'tháng',
    dataDaily: '5GB',
    dataDailyUnit: '/ngày',
    dataMonthlyTotal: '150GB Data 5G doanh nghiệp bảo mật cao',
    onNetVoice: 'Miễn phí 100% gọi nội nhóm doanh nghiệp',
    offNetVoice: '200 phút ngoại mạng & xuất hóa đơn VAT điện tử',
    myTv: 'Không kèm',
    featuredPerks: [
      '150GB Data 5G doanh nghiệp bảo mật cao',
      'Miễn phí 100% gọi nội nhóm doanh nghiệp',
      '200 phút ngoại mạng & xuất hóa đơn VAT điện tử'
    ],
    apps: [],
    description: 'Gói cước dành riêng cho cán bộ nhân viên công ty, miễn cước gọi nội bộ, có hóa đơn điện tử khấu trừ thuế hợp lệ cho doanh nghiệp.',
    dailyNum: 5
  }
];

export const M2M_IOT_PACKAGES = [
  {
    id: 'M2M10',
    name: 'M2M10',
    title: 'GÓI CẢM BIẾN & ĐO XA',
    badge: 'SMART METER',
    data: '50MB',
    period: '/ tháng',
    price: '10.000đ',
    perks: [
      '50 SMS nội mạng truyền tin cậy',
      'Hỗ trợ IP Tĩnh (Private APN)',
      'Dành cho cảm biến quan trắc, đồng hồ điện nước'
    ],
    desc: 'Giải pháp siêu tiết kiệm chỉ 10K/tháng dành cho các thiết bị telemetry truyền số liệu định kỳ.'
  },
  {
    id: 'M2M25',
    name: 'M2M25',
    title: 'GIÁM SÁT HÀNH TRÌNH',
    badge: 'GPS TRACKING',
    data: '250MB',
    period: '/ tháng',
    price: '25.000đ',
    perks: [
      '100 SMS nội mạng gửi tọa độ GPS',
      'Cơ chế chống trôi cước thông minh',
      'Định vị xe máy, ô tô, hộp đen, nút SOS'
    ],
    desc: 'Tối ưu cho các hộp đen định vị GPS phương tiện giao thông, bảo hiểm và ứng dụng cứu nạn.'
  },
  {
    id: 'M2M50',
    name: 'M2M50',
    title: 'THANH TOÁN & ĐỒNG HỒ',
    badge: 'POS & WATCH',
    data: '1GB',
    period: '/ tháng',
    price: '50.000đ',
    perks: [
      '200 SMS nội mạng xác thực OTP',
      'Miễn phí data ứng dụng quản lý thiết bị',
      'Máy POS thanh toán, Smartwatch định vị trẻ em'
    ],
    desc: 'Được thiết kế cho máy quẹt thẻ POS ngân hàng, máy bán hàng tự động và đồng hồ thông minh trẻ em.'
  },
  {
    id: 'M2M100',
    name: 'M2M100',
    title: 'TRẠM IOT CAO CẤP',
    badge: 'ĐÀM THOẠI 2 CHIỀU',
    data: '3GB',
    period: '/ tháng',
    price: '100.000đ',
    perks: [
      '500 SMS + 50 phút gọi thoại 2 chiều',
      'Ưu tiên băng thông trạm thu phát dữ liệu',
      'Hệ thống giám sát cứu hộ, đàm thoại từ xa'
    ],
    desc: 'Trang bị cả thoại và data dung lượng cao cho các trạm quan trắc tự động có tính năng đàm thoại khẩn cấp.'
  },
  {
    id: 'CAM50',
    name: 'CAM50',
    title: 'GIÁM SÁT CÔNG TRÌNH',
    badge: 'CAMERA AN NINH',
    data: '2GB/ngày',
    period: '/ 30 ngày',
    price: '50.000đ',
    perks: [
      '60GB/tháng data truyền hình ảnh',
      'Miễn phí 100% data Cloud Camera VNPT',
      'Camera 4G/5G nông trại, bãi xe, kho bãi'
    ],
    desc: 'Dành riêng cho camera an ninh 4G không dây ở công trình, vườn trại, ao hồ không có sẵn cáp quang.'
  },
  {
    id: 'CAM100',
    name: 'CAM100',
    title: 'GIÁM SÁT GIAO THÔNG',
    badge: 'CAMERA FULL HD',
    data: '4GB/ngày',
    period: '/ 30 ngày',
    price: '100.000đ',
    perks: [
      '120GB/tháng stream video 2K/Full HD',
      'Miễn phí Cloud lưu trữ video sự kiện 3 ngày',
      'Camera giao thông, an ninh tòa nhà, khu dân cư'
    ],
    desc: 'Dung lượng cực lớn 4GB/ngày phục vụ camera trực tuyến độ phân giải 2K liên tục ngày đêm.'
  },
  {
    id: 'IOT_YEAR',
    name: 'IOT_YEAR',
    title: 'CHU KỲ DÀI 1 NĂM',
    badge: 'LOGISTICS 12T',
    data: '1GB/tháng',
    period: '/ 12 tháng',
    price: '300.000đ',
    perks: [
      'Chỉ 25.000đ/tháng, không lo nạp định kỳ',
      'Duy trì trạng thái kết nối SIM 365 ngày',
      'Dành cho đội xe container, logistics diện rộng'
    ],
    desc: 'Trả trước 1 lần dùng cả năm 365 ngày không lo bị khóa một chiều hay quên nạp tiền.'
  },
  {
    id: 'ESIM_M2M',
    name: 'E-SIM M2M',
    title: 'GIẢI PHÁP PHẦN CỨNG',
    badge: 'ENTERPRISE CMP',
    data: 'MFF2 chip',
    period: 'theo quy mô',
    price: 'Báo Giá Riêng',
    perks: [
      'Hàn bo mạch công nghiệp, chịu nhiệt -40°C đến 105°C',
      'Tích hợp nền tảng quản lý tập trung CMP',
      'Chống rung sốc, phục vụ xe điện, nhà máy số'
    ],
    desc: 'Module eSIM dạng chip hàn trực tiếp vào bo mạch điện tử, chống bụi ẩm và nhiệt độ khắc nghiệt.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Tôi chủ yếu dùng mạng Internet di động thì nên đăng ký gói nào?',
    answer: 'Nếu bạn ưu tiên Data lướt web tốc độ cao mà ít gọi thoại, các gói như YOLO100M (100K/tháng, 1GB/ngày kèm miễn phí TikTok, YouTube), YOLO125G (125K/tháng, 2.5GB/ngày tối ưu ping game) hoặc các gói U-Series như U150 là lựa chọn tiết kiệm nhất.'
  },
  {
    question: 'Tôi muốn gói vừa có Data lớn vừa có nhiều phút gọi thoại miễn phí?',
    answer: 'Bạn nên chọn nhóm Gói Tích Hợp như VD130 (2GB/ngày + 1.500p nội mạng + 80p ngoại mạng), D159V (6GB/ngày + 1.500p nội mạng + 200p ngoại mạng + 200 SMS + MyTV) hoặc VIP249 (10GB/ngày + 2.000p nội mạng + 300p ngoại mạng) để tiết kiệm đến 60% so với cước thông thường.'
  },
  {
    question: 'Gói cước nào có tích hợp độc quyền trợ lý trí tuệ nhân tạo vnGenAI?',
    answer: 'Gói GENAI155 (155.000đ/tháng) là gói cước tiên phong cung cấp 3GB/ngày, 1.500 phút nội mạng, 100 phút ngoại mạng, miễn phí trọn vẹn data TikTok và đặc quyền sử dụng miễn phí trợ lý trí tuệ nhân tạo thế hệ mới vnGenAI do Tập đoàn VNPT phát triển.'
  },
  {
    question: 'Thuê bao trả trước và trả sau có đăng ký được giống nhau không?',
    answer: 'Đa số các gói như VD130, GENAI155, D159V và các gói VIP đều hỗ trợ cho cả thuê bao di động trả trước và trả sau đủ điều kiện. Bạn có thể để lại số điện thoại ở Form bên dưới để hệ thống tra cứu tự động xem SIM của mình được hưởng ưu đãi gói nào.'
  },
  {
    question: 'Hết dung lượng Data tốc độ cao trong ngày thì hệ thống xử lý ra sao?',
    answer: 'Tùy theo quy định từng gói cước, khi dùng hết Data trong ngày, hệ thống sẽ tạm ngắt kết nối internet để tránh phát sinh cước phụ ngoài ý muốn của khách hàng và sẽ tự động làm mới dung lượng data tốc độ cao vào 00h00 ngày kế tiếp.'
  },
  {
    question: 'VinaPhone có hỗ trợ eSIM và các công nghệ VoLTE / VoWiFi không?',
    answer: 'Có. Tất cả thuê bao VinaPhone 4G/5G đều được hỗ trợ kích hoạt eSIM online nhanh chóng cũng như bật tính năng cuộc gọi chất lượng HD qua mạng 4G/5G (VoLTE) và qua mạng WiFi (VoWiFi) hoàn toàn miễn phí.'
  },
  {
    question: 'VinaPhone có cung cấp gói cước riêng cho thiết bị định vị, M2M và IoT không?',
    answer: 'Có, VinaPhone và Tập đoàn VNPT cung cấp hệ sinh thái M2M & IoT chuyên biệt toàn diện: từ gói cước siêu tiết kiệm cho cảm biến thông minh (M2M10: 10K/tháng), định vị GPS hành trình (M2M25: 25K/tháng), máy POS quẹt thẻ & đồng hồ trẻ em (M2M50: 50K/tháng), cho tới camera giám sát công trình (CAM50 / CAM100) và gói trả trước 1 năm không cần nạp tiền (IOT_YEAR). Ngoài ra, VNPT cung cấp nền tảng quản lý SIM CMP (Connectivity Management Platform) giúp doanh nghiệp tra cứu lưu lượng, khóa/mở SIM hàng loạt và cấu hình IP tĩnh (Private APN) bảo mật tuyệt đối.'
  }
];
