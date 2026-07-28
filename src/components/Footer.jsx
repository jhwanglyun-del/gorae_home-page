import React from 'react';
import { BRAND_INFO } from '../data/mockData';
import { MapPin, Phone, Clock, ExternalLink, Shield } from 'lucide-react';

export default function Footer({ onNavigate }) {
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
              <span style={{ fontSize: '1.8rem' }}>🐋</span>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>
                  수제햄 고래부대찌개
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#D97706' }}>Handmade Ham Budae-jjigae</p>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#C8BCAE', marginBottom: '1.25rem' }}>
              100% 무방부제 국산 돼지고기로 직접 만드는 프리미엄 수제햄과 24시간 우려낸 깊은 사골육수의 완벽한 조화.
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
                <Clock size={18} style={{ color: '#D97706', shrink: 0, marginTop: '2px' }} />
                <span>영업시간: {BRAND_INFO.businessHours}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links & Admin */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1rem', borderLeft: '3px solid var(--brand-primary)', paddingLeft: '0.5rem' }}>
              관리 서비스
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#C8BCAE', marginBottom: '1rem' }}>
              점주 및 관리자 전용 대시보드에서 매출, 고객, 포인트를 통합 관리하세요.
            </p>
            <button
              onClick={() => onNavigate('/admin')}
              className="btn"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FFFFFF',
                fontSize: '0.85rem',
                padding: '0.6rem 1.1rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Shield size={16} color="#E09B3D" />
              <span>관리자 대시보드 접속 (/admin)</span>
            </button>
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
            <span>|</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('/admin')}>관리자페이지</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
