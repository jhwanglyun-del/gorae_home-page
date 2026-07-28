// 수제햄 고래부대찌개 Mock Data

export const BRAND_INFO = {
  name: "수제햄 고래부대찌개",
  tagline: "100% 무방부제 국산 돼지고기로 직접 만드는 명품 부대찌개",
  naverPlaceUrl: "https://naver.me/FNmGfZuO",
  phone: "031-123-4567",
  address: "경기도 용인시 기흥구 흥덕2로 75 1층 (수제햄 고래부대찌개)",
  businessHours: "매일 11:00 ~ 21:30 (라스트오더 20:50, 브레이크타임 15:00 ~ 17:00)",
  features: [
    { title: "100% 무방부제 국산 수제햄", desc: "국산 돈육만을 사용하여 아질산나트륨 등 인공방부제 없이 건강하게 만듭니다." },
    { title: "깊고 진한 24시간 사골육수", desc: "매일 직접 우려내는 사골육수의 깊은 맛과 수제햄의 감칠맛이 조화를 이룹니다." },
    { title: "고래급 푸짐함과 정성", desc: "넉넉한 수제햄 양과 아낌없는 사리 서비스로 고객 한 분 한 분을 대접합니다." }
  ]
};

export const MENU_ITEMS = [
  {
    id: 1,
    name: "수제햄 꽃부대찌개",
    category: "부대찌개",
    price: 13000,
    isPopular: true,
    desc: "화려하게 피어난 5가지 프리미엄 수제햄과 깊은 사골육수가 어우러진 시그니처 대표 메뉴",
    image: "/images/hero.png",
    spicyLevel: 2,
    ingredients: ["수제 꽃햄", "수제 수제비햄", "국산 돈육 소세지", "특제 다대기", "사골육수", "치즈"]
  },
  {
    id: 2,
    name: "고래 부대찌개",
    category: "부대찌개",
    price: 11000,
    isPopular: true,
    desc: "고래부대찌개만의 아낌없는 푸짐함! 클래식 수제햄과 김치의 시원칼칼한 깔끔함",
    image: "/images/hero.png",
    spicyLevel: 2,
    ingredients: ["클래식 수제햄", "대파", "팽이버섯", "숙성 김치", "특제육수"]
  },
  {
    id: 3,
    name: "수제햄 모듬 구이",
    category: "안주/구이",
    price: 28000,
    isPopular: false,
    desc: "갓 구워낸 수제햄의 바삭함과 육즙이 폭발하는 별미 철판 구이 요리",
    image: "/images/ham.png",
    spicyLevel: 1,
    ingredients: ["수제 모듬햄 4종", "파채", "구운 구운버섯", "수제 와사비 소스"]
  },
  {
    id: 4,
    name: "수제 떡갈비 / 만두 사리",
    category: "사리류",
    price: 6000,
    isPopular: false,
    desc: "부대찌개의 풍미를 더욱 깊게 만들어주는 100% 수제 떡갈비 추가 사리",
    image: "/images/ham.png",
    spicyLevel: 0,
    ingredients: ["수제 떡갈비 2pcs", "손만두 4pcs"]
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "김태희 님",
    rating: 5,
    date: "2026.07.24",
    comment: "수제햄이라 자극적이지 않고 짜지 않아서 아이들과 먹기 너무 좋았어요! 국물이 깔끔하고 사골의 깊은 맛이 감동입니다.",
    menu: "수제햄 꽃부대찌개"
  },
  {
    id: 2,
    name: "박준서 님",
    rating: 5,
    date: "2026.07.22",
    comment: "부대찌개 매니아인데 단연 1등입니다. 햄 양이 정말 고래만큼 푸짐하고 라면사리와 밥이 무한이라 가성비 최고예요.",
    menu: "고래 부대찌개"
  },
  {
    id: 3,
    name: "이수진 님",
    rating: 5,
    date: "2026.07.19",
    comment: "매장 분위기도 정갈하고 따뜻하며 직원의 친절한 설명이 인상깊었습니다. 부대찌개 다 먹고 모듬구이 꼭 드세요!",
    menu: "수제햄 모듬 구이"
  }
];

// Admin Mock Data
export const ADMIN_STATS = {
  totalCustomers: 12480,
  newCustomersToday: 38,
  cumulativeRevenue: 485900000, // 4억 8천 5백만원
  monthlyRevenue: 52400000,
  totalTransactions: 28450,
  avgOrderValue: 24500,
  totalPointsIssued: 4820000,
  customerRetentionRate: "78.4%"
};

export const REALTIME_CUSTOMERS = [
  { id: 101, name: "정민우", phone: "010-9876-****", date: "방금 전 (18:52)", tier: "신규", channel: "네이버 예약" },
  { id: 102, name: "강현주", phone: "010-4321-****", date: "5분 전 (18:47)", tier: "골드", channel: "현장 회원등록" },
  { id: 103, name: "최성호", phone: "010-7711-****", date: "12분 전 (18:40)", tier: "VIP", channel: "홈페이지 회원가입" },
  { id: 104, name: "윤아름", phone: "010-5566-****", date: "25분 전 (18:27)", tier: "실버", channel: "네이버 예약" },
  { id: 105, name: "박지성", phone: "010-3344-****", date: "40분 전 (18:12)", tier: "VVIP", channel: "현장 QR등록" }
];

export const TIER_DISTRIBUTION = [
  { tier: "VVIP (100만원 이상)", count: 420, percent: "3.4%", color: "#6B21A8", bg: "#F3E8FF" },
  { tier: "VIP (50만원 이상)", count: 1850, percent: "14.8%", color: "#B45309", bg: "#FEF3C7" },
  { tier: "GOLD (20만원 이상)", count: 3940, percent: "31.6%", color: "#D97706", bg: "#FFFBEB" },
  { tier: "SILVER (10만원 이상)", count: 4120, percent: "33.0%", color: "#0369A1", bg: "#E0F2FE" },
  { tier: "BRONZE (신규/일반)", count: 2150, percent: "17.2%", color: "#665A54", bg: "#F4ECE1" }
];

export const CUSTOMER_LIST = [
  { id: "CST-001", name: "김철수", gender: "남성", age: "30대", tier: "VVIP", frequency: 28, amount: 1420000, points: 71000, lastVisit: "2026-07-28", status: "활성" },
  { id: "CST-002", name: "이영희", gender: "여성", age: "40대", tier: "VIP", frequency: 19, amount: 890000, points: 44500, lastVisit: "2026-07-27", status: "활성" },
  { id: "CST-003", name: "박민수", gender: "남성", age: "20대", tier: "GOLD", frequency: 12, amount: 460000, points: 23000, lastVisit: "2026-07-25", status: "활성" },
  { id: "CST-004", name: "최지혜", gender: "여성", age: "30대", tier: "GOLD", frequency: 10, amount: 380000, points: 19000, lastVisit: "2026-07-20", status: "휴면예정" },
  { id: "CST-005", name: "정다은", gender: "여성", age: "50대", tier: "SILVER", frequency: 6, amount: 190000, points: 9500, lastVisit: "2026-07-18", status: "활성" },
  { id: "CST-006", name: "강동원", gender: "남성", age: "40대", tier: "VVIP", frequency: 34, amount: 2100000, points: 105000, lastVisit: "2026-07-28", status: "활성" },
  { id: "CST-007", name: "한소희", gender: "여성", age: "20대", tier: "BRONZE", frequency: 2, amount: 56000, points: 2800, lastVisit: "2026-07-15", status: "신규" },
  { id: "CST-008", name: "오재성", gender: "남성", age: "50대", tier: "SILVER", frequency: 5, amount: 145000, points: 7250, lastVisit: "2026-07-10", status: "활성" },
  { id: "CST-009", name: "송지은", gender: "여성", age: "30대", tier: "VIP", frequency: 15, amount: 670000, points: 33500, lastVisit: "2026-07-26", status: "활성" },
  { id: "CST-010", name: "임건우", gender: "남성", age: "20대", tier: "BRONZE", frequency: 1, amount: 26000, points: 1300, lastVisit: "2026-07-28", status: "신규" }
];

export const SALES_TREND_WEEKLY = [
  { day: "월 (7/22)", revenue: 3200000, count: 135 },
  { day: "화 (7/23)", revenue: 3800000, count: 152 },
  { day: "수 (7/24)", revenue: 4100000, count: 168 },
  { day: "목 (7/25)", revenue: 4500000, count: 180 },
  { day: "금 (7/26)", revenue: 6200000, count: 245 },
  { day: "토 (7/27)", revenue: 8900000, count: 350 },
  { day: "일 (7/28)", revenue: 7800000, count: 310 }
];

export const MENU_SALES_SHARE = [
  { menu: "수제햄 꽃부대찌개", share: 48, revenue: 25100000, color: "#B83A24" },
  { menu: "고래 부대찌개", share: 32, revenue: 16700000, color: "#D97706" },
  { menu: "수제햄 모듬 구이", share: 12, revenue: 6300000, color: "#4A170F" },
  { menu: "사리 및 음료/주류", share: 8, revenue: 4300000, color: "#9E928A" }
];

export const HOURLY_PEAK_TRAFFIC = [
  { time: "11:00", visitors: 45 },
  { time: "12:00", visitors: 142 }, // Peak Lunch
  { time: "13:00", visitors: 110 },
  { time: "14:00", visitors: 35 },
  { time: "15:00 (Break)", visitors: 5 },
  { time: "17:00", visitors: 50 },
  { time: "18:00", visitors: 125 }, // Peak Dinner
  { time: "19:00", visitors: 160 }, // Peak Dinner Max
  { time: "20:00", visitors: 95 },
  { time: "21:00", visitors: 30 }
];
