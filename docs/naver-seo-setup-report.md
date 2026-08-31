# [SEO 설정 내역서] 네이버 서치어드바이저 및 검색엔진 최적화 기본 설정 (2026-08-31)

## 1. 개요
`feature/naver-seo-setup` 브랜치에서 네이버 검색엔진(네이버 서치어드바이저) 등록 및 원활한 웹 페이지 색인 수집을 위한 필수 기본 기술 설정을 완료하였습니다.

---

## 2. 세부 작업 내역

### 🤖 1) robots.txt 생성 (`public/robots.txt`)
- 네이버 전용 크롤링 로봇(`Yeti`) 및 전체 검색 로봇(`*`)에 대해 사이트 페이지 수집(`Allow: /`)을 명시적 허용.
- 관리자 페이지(`Disallow: /admin`)는 보안 및 검색 품질을 위해 크롤링 색인 제외 처리.
- 사이트맵 파일 위치(`Sitemap: https://www.goraebudae.com/sitemap.xml`) 선언.

### 🗺️ 2) sitemap.xml 생성 (`public/sitemap.xml`)
- 검색엔진이 주요 페이지를 빠짐없이 크롤링할 수 있도록 표준 XML 사이트맵 규격 준수.
- 메인 홈(`/`, priority 1.0, daily) 및 회원가입 페이지(`/signup`, priority 0.8, monthly) 등록.

### 🏷️ 3) index.html 메타 태그 보강 및 소유확인
- **네이버 사이트 소유확인 메타태그**: `<meta name="naver-site-verification" content="f40ac5d7ac880841e0d717fbd959990c77942faf" />` 삽입 완료.
- **네이버 소유확인 파일**: `public/naver7726f209e52653bd82cea0dd296711a7.html` 생성 완료.
- **Canonical 태그**: `<link rel="canonical" href="https://gorae-home-page.vercel.app/" />` 추가로 중복 콘텐츠 방지 및 대표 URL 지정.
- **Robots 메타태그**: `<meta name="robots" content="index,follow" />` 명시.
- **기존 정보 온전 유지**: 기존 `title` 및 `description` 100% 유지.
- **Open Graph 메타태그 추가**:
  - `og:type`: `website`
  - `og:site_name`: `수제햄 고래부대찌개`
  - `og:title`, `og:description`, `og:url`, `og:image` (`/images/hero.png`), `og:locale` (`ko_KR`)
  - 네이버 블로그/카페 공유 및 카카오톡 링크 공유 시 고화질 대표 썸네일과 설명 카드가 깔끔하게 노출되도록 보강.
- **Twitter Card 메타태그**: `summary_large_image` 규격 적용.

---

## 3. 무변경 및 안전성 검증
- 디자인 및 UI 레이아웃, 기존 사용자 인터랙션 및 모든 기능 100% 무변경 유지.
- `oxlint`: 0 warnings, 0 errors 통과.
- `vite build`: 1836개 모듈 정상 트랜스폼 및 번들링 성공 (`dist/robots.txt`, `dist/sitemap.xml` 정상 포함 확인).
