import React, { useState } from 'react';
import { UserCheck, Menu as MenuIcon, X, LogIn, LogOut } from 'lucide-react';


const NAV_LINKS = [
  { label: '브랜드 소개', href: '#story' },
  { label: '대표 메뉴', href: '#menu' },
  { label: '매장 & 예약', href: '#store' },
  { label: '고객 후기', href: '#reviews' },
];

export default function Header({ currentPath, user, onNavigate, onOpenAuth, onSignOut }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = NAV_LINKS;


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

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || '회원';

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
            width: '54px',
            height: '54px',
            borderRadius: '14px',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3px',
            boxShadow: '0 4px 12px rgba(255, 88, 93, 0.25)',
            border: '1px solid rgba(255, 88, 93, 0.2)'
          }}>
            <img src="/images/logo.png" alt="수제햄 고래부대찌개 로고" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
          {/* User Auth State (Logged In vs Logged Out) */}
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* Logged in User Identity Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--brand-light)',
                color: 'var(--brand-primary)',
                padding: '0.4rem 0.85rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 700,
                border: '1px solid #F3D5CC'
              }}>
                <UserCheck size={16} />
                <span>{userName} 님</span>
              </div>

              {/* Logout Button */}
              <button
                onClick={onSignOut}
                className="btn btn-outline"
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.85rem',
                  borderRadius: '20px',
                  color: '#DC2626',
                  borderColor: '#FCA5A5',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <LogOut size={15} />
                <span>로그아웃</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => onOpenAuth('login')}
              className="btn btn-outline"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.85rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
          >
            <LogIn size={15} />
            <span>로그인 / 회원가입</span>
          </button>
          )}


          {/* Admin Page Link Button - only show back button when already on /admin */}
          {currentPath === '/admin' && (
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
