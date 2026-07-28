import React, { useState } from 'react';
import { UserCheck, Shield, Menu as MenuIcon, X, LogIn, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function Header({ currentPath, onNavigate, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '브랜드 소개', href: '#story' },
    { label: '대표 메뉴', href: '#menu' },
    { label: '매장 & 예약', href: '#store' },
    { label: '고객 후기', href: '#reviews' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (currentPath !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(250, 246, 240, 0.94)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('/')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            backgroundColor: 'var(--brand-primary)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            boxShadow: '0 4px 10px rgba(184, 58, 36, 0.3)'
          }}>
            🐋
          </div>
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--brand-dark)', letterSpacing: '-0.5px' }}>
              수제햄 고래부대찌개
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--brand-primary)', marginTop: '-2px' }}>
              Handmade Ham & Soup
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        {currentPath === '/' && (
          <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Auth Button */}
          <button
            onClick={() => onOpenAuth('login')}
            className="btn btn-outline"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              borderRadius: '20px'
            }}
          >
            <LogIn size={15} />
            <span>로그인 / 회원가입</span>
          </button>

          {/* Admin Page Link Button */}
          {currentPath === '/admin' ? (
            <button
              onClick={() => onNavigate('/')}
              className="btn btn-primary"
              style={{
                padding: '0.5rem 1.1rem',
                fontSize: '0.85rem',
                borderRadius: '20px'
              }}
            >
              홈페이지로 돌아가기
            </button>
          ) : (
            <button
              onClick={() => onNavigate('/admin')}
              className="btn btn-dark"
              style={{
                padding: '0.5rem 1.1rem',
                fontSize: '0.85rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--brand-dark)'
              }}
            >
              <Shield size={15} color="#E09B3D" />
              <span>관리자페이지</span>
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', color: 'var(--brand-dark)' }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
}
