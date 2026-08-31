// 수제햄 고래부대찌개 Mock Data

export const BRAND_INFO = {
  name: "수제햄 고래부대찌개",
  tagline: "100% 무방부제 국산 돼지고기로 직접 만드는 명품 부대찌개",
  naverPlaceUrl: "https://naver.me/FNmGfZuO",
  phone: "0507-1496-0148",

  address: "충북 청주시 청원구 오창읍 중심상업2로 13 (수제햄 고래부대찌개 오창본점)",
  businessHours: "매일 10:30 ~ 21:20",
  breakTime: "16:00 ~ 17:00",


  features: [
    { title: "100% 무방부제 국산 수제햄", desc: "3무 1저의 고집을 지킵니다. 무방부제 무색소 무전분 저염식을 고집하며 국내산 한돈 100%로 고집스럽게 만듭니다." },
    { title: "상황버섯 & 표고버섯 육수", desc: "상황버섯과 표고버섯을 넣고 우려낸 깊고 깔끔한 육수의 감칠맛이 조화를 이룹니다." },
    { title: "고래급 푸짐함과 정성", desc: "넉넉한 수제햄 양과 아낌없는 사리 서비스로 고객 한 분 한 분을 대접합니다." }
  ]
};

export const MENU_ITEMS = [
  // 1. 추천 세트 (고래의 추천/한상/나눔상/동행상)
  {
    id: 101,
    name: "전갈비 한상 (4인)",
    category: "추천 세트",
    price: 73000,
    servingSize: "(4인분)",
    isPopular: true,
    badgeText: "인기 히트",
    desc: "고래의 최고급 전골과 수제 떡갈비를 한 번에! 4인 모임에 가장 푸짐하고 완벽한 프리미엄 한상입니다. (소고기햄이 우러난 진한 국물과 단짠 떡갈비의 조화가 미쳤습니다!)",
    image: "/images/jeongalbi_hansang_4p.jpg",
    spicyLevel: 2,
    ingredients: ["소고기햄 대왕전골 3인", "수제 떡갈비스테이크 2개", "상황·표고 육수", "라면사리·밥 무한"]
  },
  {
    id: 102,
    name: "실속 꽃갈비 나눔상 (3인)",
    category: "추천 세트",
    price: 48000,
    servingSize: "(3인분)",
    isPopular: true,
    badgeText: "인기 히트",
    desc: "3인 방문 시 단골 주문 1위! 화려한 꽃부대찌개에 수제 떡갈비와 별미 계란후라이까지 더한 가성비 끝판왕 세트입니다.",
    image: "/images/nanumsang_3p.jpg",
    spicyLevel: 2,
    ingredients: ["고래정통 꽃부대찌개 3인", "수제 떡갈비스테이크 1개", "계란후라이 2개", "라면사리·밥 무한"]
  },
  {
    id: 103,
    name: "꽃갈비 동행상 (2인)",
    category: "추천 세트",
    price: 34000,
    servingSize: "(2인분)",
    isPopular: true,
    badgeText: "인기 히트",
    desc: "2인 테이블 단골 주문 1위! 고래의 시그니처 정통꽃부대찌개와 육즙 가득 수제 떡갈비를 완벽한 밸런스로 즐겨보세요.",
    image: "/images/flower_tteokgalbi_set_new.jpg",
    spicyLevel: 2,
    ingredients: ["고래정통 꽃부대찌개 2인", "수제 떡갈비스테이크 1개", "라면사리·밥 무한"]
  },
  {
    id: 104,
    name: "꽃갈비 한상 (4인)",
    category: "추천 세트",
    price: 68000,
    servingSize: "(4인분)",
    isPopular: false,
    desc: "4인 테이블 단골 주문 1위! 화려한 시그니처 정통꽃부대찌개와 수제 떡갈비의 환상적인 궁합을 즐겨보세요.",
    image: "/images/flower_hansang_4p.jpg",
    spicyLevel: 2,
    ingredients: ["고래정통 꽃부대찌개 4인", "수제 떡갈비스테이크 2개", "라면사리·밥 무한"]
  },
  {
    id: 106,
    name: "전갈비 나눔상 3인(대왕꽃전골2 + 떡갈비스테이크2 )",
    category: "추천 세트",
    price: 58000,
    servingSize: "(3인분)",
    isPopular: true,
    badgeText: "인기 히트",
    desc: "진한 소고기햄 대왕꽃전골 2인에 수제 떡갈비스테이크 2개를 더해 3인이 든든하게! 고기 풍미를 꼭 잡은 프리미엄 세트입니다.",
    image: "/images/jeongalbi_nanumsang_3p.png",
    spicyLevel: 2,
    ingredients: ["소고기햄 대왕꽃전골 2인", "수제 떡갈비스테이크 2개", "라면사리·밥 무한"]
  },
  {
    id: 107,
    name: "전갈비 동행상 (2인)",
    category: "추천 세트",
    price: 48000,
    servingSize: "(2인분)",
    isPopular: false,
    desc: "최고급 소고기햄 대왕꽃전골 2인에 육즙 가득 수제 떡갈비까지! 두 분이서 오붓하고 특별하게 즐기는 2인 세트입니다.",
    image: "/images/jeongalbi_donghaeng_2p.png",
    spicyLevel: 2,
    ingredients: ["소고기햄 대왕꽃전골 2인", "수제 떡갈비스테이크 1개", "라면사리·밥 무한"]
  },

  // 2. 부대전골/단품 (고래의 본상)
  {
    id: 1,
    name: "고래정통 꽃부대찌개",
    category: "부대전골/단품",
    price: 13000,
    servingSize: "(1인분)",
    isPopular: true,
    badgeText: "베스트 대표메뉴",
    desc: "처음 오셨다면 무조건 이거! 단골들이 항상 찾는 고래의 진짜 기본(시그니처)입니다.",
    image: "/images/gorae_signature_flower.png",
    spicyLevel: 2,
    ingredients: ["수제 꽃햄", "수제 수제비햄", "국산 돈육 소세지", "특제 다대기", "버섯 특제육수", "치즈"]
  },
  {
    id: 201,
    name: "고래 동충하초 꽃부대찌개",
    category: "부대전골/단품",
    price: 17000,
    servingSize: "(1인분)",
    isPopular: true,
    badgeText: "인기 히트",
    desc: "귀한 동충하초가 듬뿍! 부대찌개를 완벽한 보양식으로 끌어올린 명품 찌개입니다.",
    image: "/images/dongchunghacho_budaejjigae.png",
    spicyLevel: 2,
    ingredients: ["귀한 동충하초", "수제 꽃햄", "수제비햄", "상황·표고 육수"]
  },
  {
    id: 202,
    name: "고래 흑마늘 꽃부대찌개",
    category: "부대전골/단품",
    price: 15000,
    servingSize: "(1인분)",
    isPopular: false,
    desc: "숙성 흑마늘이 품은 깊고 진한 국물! 지친 몸에 활력을 채워주는 든든한 보양 별미입니다.",
    image: "/images/black_garlic_budaejjigae.png",
    spicyLevel: 2,
    ingredients: ["숙성 흑마늘", "수제 꽃햄", "국산 돈육 소세지", "버섯 특제육수"]
  },
  {
    id: 203,
    name: "고래부대찌개 (실속형)",
    category: "부대전골/단품",
    price: 11000,
    servingSize: "(1인분)",
    isPopular: false,
    desc: "가볍게 드시기 좋은 실속형 메뉴입니다. (풍성한 햄과 베이컨, 물만두 등 화려한 토핑을 원하시면 정통꽃부대찌개를 추천합니다!)",
    image: "/images/gorae_budaejjigae_basic.png",
    spicyLevel: 2,
    ingredients: ["수제 클래식햄", "대파", "팽이버섯", "숙성 김치", "특제육수"]
  },
  {
    id: 2,
    name: "고래 소고기햄 대왕꽃전골 (4인)",
    category: "부대전골/단품",
    price: 65000,
    servingSize: "(4인분)",
    isPopular: true,
    badgeText: "인기 히트",
    desc: "일반 햄이 아닙니다! 귀한 [소고기햄]을 빈틈없이 가득 채운 압도적인 프리미엄 전골! (가족 모임, 단체 회식에 가장 완벽하고 푸짐한 선택입니다)",
    image: "/images/gorae_beef_daewang_jeongol.png",
    spicyLevel: 2,
    ingredients: ["귀한 소고기햄", "수제 꽃햄", "동충하초", "흑마늘", "상황버섯·표고버섯", "특제 명품육수"]
  },
  {
    id: 204,
    name: "고래 소고기햄 대왕꽃전골 (3인)",
    category: "부대전골/단품",
    price: 55000,
    servingSize: "(3인분)",
    isPopular: false,
    desc: "고래가 가장 자신 있게 내놓는 편안함! 진한 육수와 소고기햄의 미친 풍미를 경험해 보세요. (3인이 고기로 배를 채울 수 있는 넉넉한 양입니다)",
    image: "/images/gorae_beef_daewang_jeongol.png",
    spicyLevel: 2,
    ingredients: ["귀한 소고기햄", "수제 꽃햄", "동충하초", "흑마늘", "상황버섯·표고버섯"]
  },
  {
    id: 205,
    name: "고래 소고기햄 대왕꽃전골 (2인)",
    category: "부대전골/단품",
    price: 40000,
    servingSize: "(2인분)",
    isPopular: false,
    desc: "수제 소고기햄을 아낌없이 듬뿍! 두 분이서 오붓하고 특별하게 즐기는 최고급 전골입니다.",
    image: "/images/gorae_beef_daewang_jeongol.png",
    spicyLevel: 2,
    ingredients: ["귀한 소고기햄", "수제 꽃햄", "상황버섯·표고버섯", "특제 명품육수"]
  },

  // 3. 소불고기
  {
    id: 3,
    name: "고래대왕꽃소불고기 (4인/고기1,000g)",
    category: "소불고기",
    price: 58000,
    servingSize: "(4인분/고기1KG)",
    isPopular: true,
    badgeText: "인기 히트",
    desc: "밥별도/ 산더미 소불고기와 진한 보양육수가 어우러진 고래만의 특별한 꽃소불고기",
    image: "/images/flower_bulgogi.jpg",
    spicyLevel: 1,
    ingredients: ["산더미 소불고기(1,000g)", "수제 꽃햄", "신선 숙주·파채", "상황·표고 보양육수"]
  },
  {
    id: 301,
    name: "고래대왕꽃소불고기 (3인/고기700g)",
    category: "소불고기",
    price: 45000,
    servingSize: "(3인분/고기700g)",
    isPopular: false,
    desc: "밥별도/ 산더미 소불고기와 진한 보양육수가 어우러진 고래만의 특별한 꽃소불고기",
    image: "/images/flower_bulgogi.jpg",
    spicyLevel: 1,
    ingredients: ["산더미 소불고기(700g)", "수제 꽃햄", "신선 숙주·파채", "상황·표고 보양육수"]
  },
  {
    id: 302,
    name: "고래대왕꽃소불고기 (2인/고기500g)",
    category: "소불고기",
    price: 35000,
    servingSize: "(2인분/고기500g)",
    isPopular: false,
    desc: "밥별도/ 산더미 소불고기와 진한 보양육수가 어우러진 고래만의 특별한 꽃소불고기",
    image: "/images/flower_bulgogi.jpg",
    spicyLevel: 1,
    ingredients: ["산더미 소불고기(500g)", "수제 꽃햄", "신선 숙주·파채", "상황·표고 보양육수"]
  },

  // 4. 포장 이벤트
  {
    id: 401,
    name: "[포장] 꽃부대 2+1 (채널추가)",
    category: "포장 이벤트",
    price: 26000,
    servingSize: "(포장 3인분)",
    isPopular: true,
    badgeText: "인기 히트",
    desc: "고래부대찌개의 진한 맛을 집에서도 넉넉하게! 매장에서 드시는 맛 그대로, 집에서도 간편하게 즐기실 수 있도록 육수와 신선한 재료를 넉넉히 담았습니다.",
    image: "/images/takeout_event_2plus1.png",
    spicyLevel: 2,
    ingredients: ["꽃부대 2인분 결제 시 + 1인분 증정", "육수 2팩", "라면사리", "설명서 동봉"]
  },

  // 5. 사이드 별미 (고래의 별미)
  {
    id: 4,
    name: "수제떡갈비스테이크",
    category: "사이드 별미",
    price: 10000,
    servingSize: "(1인분)",
    isPopular: true,
    badgeText: "인기 히트",
    desc: "부대찌개와 최고의 짝꿍! 남녀노소 누구나 좋아하는 1등 별미 / 100% 두툼한 국산 수제 떡갈비에 계란후라이와 특제 데리야끼 소스를 얹었습니다.",
    image: "/images/tteokgalbi.jpg",
    spicyLevel: 0,
    ingredients: ["100% 국산 수제 떡갈비", "계란후라이", "그릴 파프리카", "특제 데리야끼 소스"]
  },
  {
    id: 502,
    name: "고래그릴부어스트 스테이크",
    category: "사이드 별미",
    price: 6500,
    servingSize: "(1인분)",
    isPopular: false,
    desc: "고래가 직접 만든 수제 소시지를 노릇하게 구워낸 프리미엄 사이드 메뉴입니다. 겉은 바삭하고 속은 촉촉한 그릴부어스트에 머스터드의 산뜻한 풍미를 더해 부대찌개와 함께 곁들이기 좋은 고래더담음 별미입니다.",
    image: "/images/grill_bratwurst.png",
    spicyLevel: 0,
    ingredients: ["수제 그릴부어스트 소세지", "특제 머스터드 소스", "로즈마리 가니쉬"]
  },
  {
    id: 503,
    name: "어린이 든든세트 (계란+김가루+밥)",
    category: "사이드 별미",
    price: 3000,
    servingSize: "(어린이용)",
    isPopular: false,
    desc: "아이들이 가장 좋아해요! 매운 부대찌개를 못 먹는 우리 아이들을 위한 든든한 한 끼! (김가루에 쓱쓱 비벼주세요)",
    image: "/images/kids_meal_set.png",
    spicyLevel: 0,
    ingredients: ["계란후라이", "바삭 김가루", "고소한 흰쌀밥"]
  },

  // 6. 추가 사리 (고래의 더담음)
  {
    id: 601,
    name: "명품 소고기햄 사리",
    category: "추가 사리",
    price: 12000,
    desc: "일반 햄과는 차원이 다른 극강의 고기 풍미! 국물의 품격을 완전히 바꿔놓는 최고급 사리입니다.",
    image: "/images/sari_beef_ham.png",
    spicyLevel: 0,
    ingredients: ["프리미엄 소고기햄"]
  },
  {
    id: 602,
    name: "고래보양 버섯모듬사리",
    category: "추가 사리",
    price: 10000,
    desc: "동충하초와 삼색은이버섯, 표고·느타리를 담은 고래만의 보양 버섯 사리",
    image: "/images/sari_mushroom.png",
    spicyLevel: 0,
    ingredients: ["동충하초", "삼색은이버섯", "표고버섯", "느타리버섯"]
  },
  {
    id: 603,
    name: "귀한 동충하초 사리",
    category: "추가 사리",
    price: 10000,
    desc: "부대찌개를 완벽한 보양식으로 업그레이드! 건강과 깊은 맛을 동시에 챙기는 귀한 버섯입니다.",
    image: "/images/sari_dongchunghacho.jpg",
    spicyLevel: 0,
    ingredients: ["귀한 동충하초"]
  },
  {
    id: 604,
    name: "모듬 사리 (햄+소시지)",
    category: "추가 사리",
    price: 8000,
    desc: "고기 러버들을 위한 탁월한 선택! 진하고 깊은 고기 육수의 끝판왕을 원 없이 즐겨보세요.",
    image: "/images/sari_assorted.png",
    spicyLevel: 0,
    ingredients: ["수제 햄", "수제 소시지"]
  },
  {
    id: 605,
    name: "시그니처 꽃베이컨",
    category: "추가 사리",
    price: 7000,
    desc: "고래부대의 진짜 매력! 예쁜 비주얼은 물론 국물에 녹아든 베이컨의 깊은 감칠맛이 일품입니다.",
    image: "/images/sari_bacon.png",
    spicyLevel: 0,
    ingredients: ["프리미엄 꽃베이컨"]
  },
  {
    id: 606,
    name: "수제 햄 추가",
    category: "추가 사리",
    price: 6000,
    desc: "기본에 충실하고 싶다면? 고래만의 맛있는 수제 햄으로 찌개를 더 팍 채워보세요.",
    image: "/images/sari_ham.png",
    spicyLevel: 0,
    ingredients: ["수제 햄"]
  },
  {
    id: 607,
    name: "수제 소시지 추가",
    category: "추가 사리",
    price: 6000,
    desc: "기본에 충실하고 싶다면? 고래만의 맛있는 수제 소시지로 찌개를 더 팍 채워보세요.",
    image: "/images/sari_sausage.png",
    spicyLevel: 0,
    ingredients: ["수제 소시지"]
  },
  {
    id: 608,
    name: "알찬 물만두 (15개)",
    category: "추가 사리",
    price: 3000,
    desc: "한 입에 쏙! 촉촉한 물만두가 부대찌개 골라 먹는 재미를 두 배로 올려줍니다.",
    image: "/images/sari_dumpling.png",
    spicyLevel: 0,
    ingredients: ["물만두 15개"]
  },
  {
    id: 609,
    name: "버섯 (표고, 느타리)",
    category: "추가 사리",
    price: 3000,
    desc: "고기 육수에 버섯의 향긋함이 더해지면 국물이 훨씬 시원하고 깔끔해집니다.",
    image: "/images/sari_mushroom.png",
    spicyLevel: 0,
    ingredients: ["표고버섯", "느타리버섯"]
  },
  {
    id: 610,
    name: "쫄깃 당면",
    category: "추가 사리",
    price: 2000,
    desc: "무료 라면사리와는 차원이 다른 매력! 진한 육수를 팍 빨아들인 쫄깃한 별미입니다.",
    image: "/images/sari_glass_noodle.png",
    spicyLevel: 0,
    ingredients: ["당면 사리"]
  },
  {
    id: 611,
    name: "쫀득한 떡",
    category: "추가 사리",
    price: 2000,
    desc: "햄을 더 드리기 위해 뺐던 바로 그 떡! 쫀득한 떡 사리가 아쉬우셨다면 추가해 보세요.",
    image: "/images/sari_rice_cake.png",
    spicyLevel: 0,
    ingredients: ["떡 사리"]
  },
  {
    id: 612,
    name: "고소한 치즈",
    category: "추가 사리",
    price: 1000,
    desc: "얼큰한 국물을 훨씬 더 부드럽고 진하게 만들어 주는 마법의 한 장!",
    image: "/images/sari_cheese.png",
    spicyLevel: 0,
    ingredients: ["체다 치즈 1장"]
  },
  {
    id: 613,
    name: "계란후라이",
    category: "추가 사리",
    price: 1000,
    desc: "진한 부대찌개 국물에 밥과 함께 쓱쓱 비벼 먹을 때 절대 빠질 수 없는 필수템!",
    image: "/images/sari_fried_egg.png",
    spicyLevel: 0,
    ingredients: ["계란후라이 1개"]
  },

  // 7. 음료 및 주류
  {
    id: 701,
    name: "코카콜라 (355ml)",
    category: "음료 및 주류",
    price: 2000,
    desc: "얼큰하고 진한 부대찌개와 환상 궁합! 톡 쏘는 청량감의 오리지널 코카콜라",
    image: "/images/beverage_coke.png",
    spicyLevel: 0
  },
  {
    id: 702,
    name: "코카콜라 제로 (355ml)",
    category: "음료 및 주류",
    price: 2000,
    desc: "부담 없는 칼로리로 가볍고 깔끔하게 즐기는 제로 코카콜라",
    image: "/images/beverage_coke_zero.png",
    spicyLevel: 0
  },
  {
    id: 703,
    name: "칠성사이다 (355ml)",
    category: "음료 및 주류",
    price: 2000,
    desc: "맑고 깨끗한 맛! 식사 후 입안을 상쾌하게 정돈해 주는 칠성사이다",
    image: "/images/beverage_chilsung.png",
    spicyLevel: 0
  },
  {
    id: 704,
    name: "환타 파인애플 (355ml)",
    category: "음료 및 주류",
    price: 2000,
    desc: "달콤 상큼한 파인애플 향이 매력적인 인기 탄산음료",
    image: "/images/beverage_fanta.png",
    spicyLevel: 0
  },
  {
    id: 705,
    name: "씨그램 탄산수 (355ml)",
    category: "음료 및 주류",
    price: 2000,
    desc: "당류 걱정 없이 깨끗하고 강렬한 탄산의 청량감",
    image: "/images/beverage_sparkling.png",
    spicyLevel: 0
  },
  {
    id: 801,
    name: "참이슬 후레쉬",
    category: "음료 및 주류",
    price: 5000,
    desc: "깨끗하고 부드러운 대한민국 대표 소주",
    image: "/images/liquor_chamisul.png",
    spicyLevel: 0
  },
  {
    id: 802,
    name: "진로 이즈 백",
    category: "음료 및 주류",
    price: 5000,
    desc: "초깔끔한 맛과 부드러운 목넘김의 원조 소주",
    image: "/images/liquor_jinro.png",
    spicyLevel: 0
  },
  {
    id: 803,
    name: "처음처럼",
    category: "음료 및 주류",
    price: 5000,
    desc: "대관령 기슭 암반수로 만들어 부드러운 소주",
    image: "/images/liquor_chumchurum.png",
    spicyLevel: 0
  },
  {
    id: 804,
    name: "시원한 청풍 (C1)",
    category: "음료 및 주류",
    price: 5000,
    desc: "충북 청주 지역의 맑고 깨끗한 시원 소주",
    image: "/images/liquor_c1.png",
    spicyLevel: 0
  },
  {
    id: 805,
    name: "카스 프레시 (Cass)",
    category: "음료 및 주류",
    price: 5000,
    desc: "생맥주의 신선함과 극강의 청량감을 자랑하는 국민 맥주",
    image: "/images/liquor_cass.png",
    spicyLevel: 0
  },
  {
    id: 806,
    name: "테라 (Terra)",
    category: "음료 및 주류",
    price: 5000,
    desc: "청정 라거 100% 리얼 탄산의 시원한 맥주",
    image: "/images/liquor_terra.png",
    spicyLevel: 0
  }




];

export const REVIEWS = [
  {
    id: 1,
    name: "김태희 님",
    rating: 5,
    date: "2026.07.24",
    comment: "수제햄이라 자극적이지 않고 짜지 않아서 아이들과 먹기 너무 좋았어요! 버섯 육수의 깔끔하고 깊은 맛이 감동입니다.",
    menu: "고래정통 꽃부대찌개"
  },
  {
    id: 2,
    name: "박준서 님",
    rating: 5,
    date: "2026.07.22",
    comment: "부대찌개 매니아인데 단연 1등입니다. 햄 양이 정말 고래만큼 푸짐하고 라면사리와 밥이 무한이라 가성비 최고예요.",
    menu: "소고기햄대왕꽃부대전골"
  },

  {
    id: 3,
    name: "이수진 님",
    rating: 5,
    date: "2026.07.19",
    comment: "매장 분위기도 정갈하고 따뜻하며 직원의 친절한 설명이 인상깊었습니다. 부대전골 다 먹고 대왕꽃 소불고기 꼭 드세요!",
    menu: "고래 대왕꽃 소불고기"
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
  { menu: "고래정통 꽃부대찌개", share: 48, revenue: 25100000, color: "#B83A24" },
  { menu: "소고기햄대왕꽃부대전골", share: 32, revenue: 16700000, color: "#D97706" },

  { menu: "고래 대왕꽃 소불고기", share: 12, revenue: 6300000, color: "#4A170F" },

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
