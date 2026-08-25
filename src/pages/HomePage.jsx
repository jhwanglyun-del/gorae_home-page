import React, { useState, useMemo } from 'react';
import { BRAND_INFO, MENU_ITEMS, REVIEWS } from '../data/mockData';
import MenuDetailModal from '../components/MenuDetailModal';
import { 
  Sparkles, ExternalLink, Calendar, Clock, MapPin, 
  ChevronRight, Star, CheckCircle2, Utensils, Award, Users 
} from 'lucide-react';

const CATEGORIES = ['전체', '추천 세트', '부대전골/단품', '소불고기', '포장 이벤트', '사이드 별미', '추가 사리'];





export default function HomePage({ onOpenAuth }) {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [reserveSuccess, setReserveSuccess] = useState(false);
  const [reserveForm, setReserveForm] = useState({
    name: '',
    phone: '',
    date: '2026-07-29',
    time: '18:00',
    guests: '2명',
    note: ''
  });

  const categories = CATEGORIES;

  const filteredItems = useMemo(() => {
    return activeCategory === '전체' 
      ? MENU_ITEMS 
      : MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setReserveSuccess(true);
    setTimeout(() => {
      setReserveSuccess(false);
      setReserveForm({ name: '', phone: '', date: '2026-07-29', time: '18:00', guests: '2명', note: '' });
    }, 4000);
  };


  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* 1. HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '4rem 0 5rem 0',
        background: 'linear-gradient(135deg, #FAF6F0 0%, #F4ECE1 100%)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left Hero Text */}
          <div className="animate-fade-in">
            <div className="badge badge-primary" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} /> 프리미엄 100% 무방부제 국산 수제햄
            </div>
            <h1 style={{
              fontSize: '2.8rem',
              fontWeight: 900,
              lineHeight: '1.25',
              color: 'var(--brand-dark)',
              marginBottom: '1.25rem',
              letterSpacing: '-1px'
            }}>
              정성과 시간이 만든<br />
              <span style={{ color: 'var(--brand-primary)' }}>Premium 수제햄</span><br />
              고래부대찌개
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              직접 조리한 수제햄의 깊은 풍미와 상황버섯·표고버섯으로 우려낸 깊고 깔끔한 육수.<br />
              짜지 않고 담백하여 남녀노소 누구나 감탄하는 고래급 명품 부대찌개를 만나보세요.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="#reserve-form"
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
              >
                <Calendar size={18} />
                <span>테이블 예약하기</span>
              </a>
              <a
                href={BRAND_INFO.naverPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}
              >
                <span>네이버 지도 보기</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Quick Badges */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-medium)'
            }}>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-primary)' }}>100%</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>국산 돈육 수제햄</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--border-medium)' }}></div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-primary)' }}>Healthy</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>상황버섯·표고버섯 우린 깊고 깔끔한 육수</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--border-medium)' }}></div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-primary)' }}>★ 4.9</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>고객 만족도 평가</div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Showcase */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid #FFFFFF',
              position: 'relative'
            }}>
              <img
                src="/images/hero.png"
                alt="수제햄 고래부대찌개 대표 부대찌개"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(44,34,30,0.85), transparent)',
                padding: '1.5rem',
                color: '#FFFFFF'
              }}>
                <div style={{ fontSize: '0.85rem', color: '#E09B3D', fontWeight: 700 }}>SIGNATURE DISH</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>고래정통 꽃부대찌개</div>
              </div>
            </div>

            {/* Floating Tag */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '0.8rem 1.2rem',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <span style={{ fontSize: '1.4rem' }}>🥓</span>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>수제햄 당일 제조</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--brand-dark)' }}>신선한 프리미엄 수제햄</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND STORY SECTION */}
      <section id="story" style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>BRAND STORY</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '1rem' }}>
              왜 수제햄 고래부대찌개일까요?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              일반 시중 햄 대신, 정직한 100% 국산 돼지고기와 최상급 향신료로 마이스터가 직접 만든 수제햄을 고집합니다.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Story Card 1 */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--brand-light)',
                color: 'var(--brand-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}>
                <Award size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--brand-dark)' }}>
                100% 무방부제 국산 수제햄
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                아질산나트륨, 보존제를 전혀 첨가하지 않고 국내산 한돈 100%로 건강하게 스모킹하여 만듭니다.
              </p>
            </div>

            {/* Story Card 2 */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#FEF3C7',
                color: '#B45309',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}>
                <Utensils size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--brand-dark)' }}>
                상황버섯 & 표고버섯 우린 깔끔한 육수
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                인위적인 감칠맛이 아닌, 상황버섯과 표고버섯을 넣고 우려낸 깊고 깔끔한 육수가 찌개의 담백한 끝맛을 책임집니다.
              </p>
            </div>

            {/* Story Card 3 */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#E0F2FE',
                color: '#0369A1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}>
                <Users size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--brand-dark)' }}>
                아낌없는 고래급 푸짐함
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                넉넉한 수제햄 양과 공기밥/라면사리 무한 서비스로 찾아오시는 모든 분께 만족을 선물합니다.
              </p>
            </div>
          </div>

          {/* Image Banner strip */}
          <div style={{
            marginTop: '3.5rem',
            borderRadius: '20px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            backgroundColor: 'var(--bg-surface-warm)',
            border: '1px solid var(--border-medium)'
          }}>
            <img src="/images/ham_artisan.jpg" alt="장인이 직접 만드는 수제햄 과정" style={{ width: '100%', height: '340px', objectFit: 'cover', objectPosition: 'center' }} />


            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '1rem' }}>
                손끝에서 완성되는 명품 수제햄
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                저희 고래부대찌개는 기계식 대량 생산 햄을 거부합니다. 장인의 꼼꼼한 저온 숙성과 참나무 훈연 과정을 통해 만들어낸 오리지널 참맛을 느껴보세요.
              </p>
              <button
                onClick={() => onOpenAuth('signup')}
                className="btn btn-primary"
                style={{ width: 'fit-content', padding: '0.65rem 1.2rem', fontSize: '0.9rem' }}
              >
                단골 회원 혜택 받기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MENU SHOWCASE SECTION */}
      <section id="menu" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>GOURMET MENU</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '1rem' }}>
              수제햄 고래부대찌개 메뉴 라인업
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              정성을 담은 메인 찌개부터 구이, 사리까지 최고급 재료만을 엄선했습니다.
            </p>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: '25px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  backgroundColor: activeCategory === cat ? 'var(--brand-primary)' : '#FFFFFF',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                  border: activeCategory === cat ? '1px solid var(--brand-primary)' : '1px solid var(--border-medium)',
                  boxShadow: activeCategory === cat ? '0 4px 10px rgba(184,58,36,0.2)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '2rem'
          }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => setSelectedMenu(item)}
              >
                <div style={{ position: 'relative', height: '180px', backgroundColor: '#F4ECE1' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {item.isPopular && (
                    <span style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      backgroundColor: item.badgeText === '베스트 대표메뉴' ? 'var(--brand-primary)' : '#D97706',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '12px'
                    }}>
                      {item.badgeText || '인기 히트'}
                    </span>
                  )}

                </div>

                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--brand-secondary)', fontWeight: 600, marginBottom: '0.2rem' }}>
                      {item.category}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '0.4rem' }}>
                      {item.name}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      marginBottom: '1rem'
                    }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-light)'
                  }}>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                      {item.servingSize ? <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, marginRight: '0.3rem' }}>{item.servingSize}</span> : null}
                      {item.price.toLocaleString()}원
                    </span>

                    <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--brand-dark)', display: 'flex', alignItems: 'center' }}>
                      상세보기 <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STORE & RESERVATION SECTION */}
      <section id="store" style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Store Information */}
            <div>
              <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>STORE INFO</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '1.25rem' }}>
                매장 안내 & 오시는 길
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                쾌적하고 정갈한 원목 아늑한 인테리어와 단체석 완비. 가족 모임, 회식, 연인과의 데이트에 최적화되어 있습니다.
              </p>

              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <img src="/images/interior.png" alt="고래부대찌개 매장 내부" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.925rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="#FF585D" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>주소:</strong> {BRAND_INFO.address}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Clock size={20} color="#FF585D" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div><strong>운영시간:</strong> {BRAND_INFO.businessHours}</div>
                    {BRAND_INFO.breakTime && (
                      <div style={{ color: '#E09B3D', fontWeight: 600, marginTop: '0.25rem' }}>
                        <strong>브레이크타임:</strong> {BRAND_INFO.breakTime}
                      </div>
                    )}
                  </div>
                </div>


              </div>

              {/* Naver Place Direct Button */}
              <div style={{ marginTop: '1.75rem' }}>
                <a
                  href={BRAND_INFO.naverPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    backgroundColor: '#03C75A',
                    color: '#FFFFFF',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>네이버 스마트플레이스 예약/길찾기</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Online Reservation Form */}
            <div id="reserve-form" className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-primary)' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '0.5rem' }}>
                실시간 단체/테이블 예약 신청
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                온라인으로 사전 예약하시면 기다림 없이 편안하게 이용하실 수 있습니다.
              </p>

              {reserveSuccess && (
                <div style={{
                  backgroundColor: '#DCFCE7',
                  color: '#15803D',
                  padding: '1rem',
                  borderRadius: '10px',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <CheckCircle2 size={20} />
                  <span>예약 신청이 접수되었습니다! 매장에서 확인 후 안내 문자를 드립니다.</span>
                </div>
              )}

              <form onSubmit={handleReservationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>예약자 성함</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={reserveForm.name}
                    onChange={(e) => setReserveForm({ ...reserveForm, name: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', border: '1px solid var(--border-medium)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>연락처</label>
                  <input
                    type="tel"
                    required
                    placeholder="010-1234-5678"
                    value={reserveForm.phone}
                    onChange={(e) => setReserveForm({ ...reserveForm, phone: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', border: '1px solid var(--border-medium)', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>방문 날짜</label>
                    <input
                      type="date"
                      required
                      value={reserveForm.date}
                      onChange={(e) => setReserveForm({ ...reserveForm, date: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', border: '1px solid var(--border-medium)', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>방문 시간</label>
                    <select
                      value={reserveForm.time}
                      onChange={(e) => setReserveForm({ ...reserveForm, time: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', border: '1px solid var(--border-medium)', outline: 'none' }}
                    >
                      <option>11:30</option>
                      <option>12:00</option>
                      <option>12:30</option>
                      <option>13:00</option>
                      <option>17:30</option>
                      <option>18:00</option>
                      <option>18:30</option>
                      <option>19:00</option>
                      <option>19:30</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>방문 인원</label>
                    <select
                      value={reserveForm.guests}
                      onChange={(e) => setReserveForm({ ...reserveForm, guests: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', border: '1px solid var(--border-medium)', outline: 'none' }}
                    >
                      <option>1명</option>
                      <option>2명</option>
                      <option>3명</option>
                      <option>4명</option>
                      <option>5명 이상 (단체)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>요청사항</label>
                    <input
                      type="text"
                      placeholder="아기의자 등"
                      value={reserveForm.note}
                      onChange={(e) => setReserveForm({ ...reserveForm, note: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem 0.8rem', borderRadius: '8px', border: '1px solid var(--border-medium)', outline: 'none' }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem', fontWeight: 700 }}
                >
                  예약 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS SECTION */}
      <section id="reviews" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-purple" style={{ marginBottom: '0.75rem' }}>REVIEWS & FEEDBACK</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '1rem' }}>
              고객님들이 전하는 진짜 후기
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              네이버 플레이스와 매장 방문 고객들이 남겨주신 솔직한 영수증 리뷰입니다.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.date}</span>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    "{rev.comment}"
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--brand-dark)' }}>{rev.name}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--brand-primary)', fontWeight: 600, backgroundColor: 'var(--brand-light)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>
                    {rev.menu}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Detail Modal */}
      <MenuDetailModal
        item={selectedMenu}
        onClose={() => setSelectedMenu(null)}
        onOrder={() => {
          const reserveEl = document.querySelector('#reserve-form');
          if (reserveEl) reserveEl.scrollIntoView({ behavior: 'smooth' });
        }}

      />

    </div>
  );
}
