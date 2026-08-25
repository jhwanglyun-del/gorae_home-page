import React from 'react';
import { BRAND_INFO } from '../data/mockData';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {

  return (
    <footer style={{
      backgroundColor: 'var(--brand-dark)',
      color: '#E8DED1',
      padding: '4rem 0 2rem 0',
      borderTop: '4px solid var(--brand-primary)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(235, 227, 215, 0.15)'
        }}>
          {/* Brand & Naver Place */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#FFFFFF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3px' }}>
                <img src="/images/logo.png" alt="수제햄 고래부대찌개 로고" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>


              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>
                  수제햄 고래부대찌개
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#D97706' }}>Handmade Ham Budae-jjigae</p>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#C8BCAE', marginBottom: '1.25rem' }}>
              100% 무방부제 국산 돼지고기로 직접 만드는 프리미엄 수제햄과 상황버섯·표고버섯으로 우려낸 깊고 깔끔한 육수의 완벽한 조화.

            </p>
            {/* Naver Place Link Button */}
            <a
              href={BRAND_INFO.naverPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                backgroundColor: '#03C75A',
                color: '#FFFFFF',
                fontSize: '0.85rem',
                padding: '0.55rem 1rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: 700
              }}
            >
              <span>네이버 플레이스 공식 지도 보기</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Store Info */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1rem', borderLeft: '3px solid var(--brand-primary)', paddingLeft: '0.5rem' }}>
              매장 안내
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} style={{ color: '#D97706', shrink: 0, marginTop: '2px' }} />
                <span>{BRAND_INFO.address}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} style={{ color: '#D97706' }} />
                <span>전화: {BRAND_INFO.phone}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Clock size={18} style={{ color: '#D97706', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div>영업시간: {BRAND_INFO.businessHours}</div>
                  {BRAND_INFO.breakTime && (
                    <div style={{ color: '#F87171', fontWeight: 600, marginTop: '0.2rem' }}>
                      브레이크타임: {BRAND_INFO.breakTime}
                    </div>
                  )}
                </div>
              </li>

            </ul>
          </div>

          {/* Customer Service & Information */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1rem', borderLeft: '3px solid var(--brand-primary)', paddingLeft: '0.5rem' }}>
              고객 서비스
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#C8BCAE', marginBottom: '1rem' }}>
              단체 예약 문의 및 제휴 문의는 대표번호 또는 네이버 예약을 이용해 주시기 바랍니다.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#A09385'
        }}>
          <div>
            © 2026 수제햄 고래부대찌개. All rights reserved. 본 사이트는 공식 브랜드 홈페이지입니다.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href={BRAND_INFO.naverPlaceUrl} target="_blank" rel="noreferrer" style={{ color: '#A09385', textDecoration: 'underline' }}>
              네이버 스마트플레이스
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
