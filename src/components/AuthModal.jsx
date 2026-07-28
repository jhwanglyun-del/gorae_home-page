import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialTab = 'login' }) {
  const [tab, setTab] = useState(initialTab); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tab === 'login') {
      setMessage(`[Supabase 준비 완료] '${email}' 계정으로 로그인 요청이 완료되었습니다.`);
    } else {
      setMessage(`[Supabase 준비 완료] '${name}' 님, 성공적으로 회원가입 신청이 되었습니다!`);
    }
    setTimeout(() => {
      setMessage('');
      onClose();
    }, 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(44, 34, 30, 0.65)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '440px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        border: '1px solid var(--border-light)',
        animation: 'fadeIn 0.3s ease'
      }}>
        {/* Modal Header */}
        <div style={{
          backgroundColor: 'var(--brand-dark)',
          color: '#FFFFFF',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.25rem' }}>🐋</span>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>수제햄 고래부대찌개</h3>
          </div>
          <button 
            onClick={onClose}
            style={{ color: '#FFFFFF', opacity: 0.8, display: 'flex', alignItems: 'center' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-primary)'
        }}>
          <button
            onClick={() => { setTab('login'); setMessage(''); }}
            style={{
              flex: 1,
              padding: '0.85rem',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: tab === 'login' ? 'var(--brand-primary)' : 'var(--text-secondary)',
              borderBottom: tab === 'login' ? '2px solid var(--brand-primary)' : '2px solid transparent',
              backgroundColor: tab === 'login' ? '#FFFFFF' : 'transparent',
              transition: 'all 0.2s'
            }}
          >
            로그인
          </button>
          <button
            onClick={() => { setTab('signup'); setMessage(''); }}
            style={{
              flex: 1,
              padding: '0.85rem',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: tab === 'signup' ? 'var(--brand-primary)' : 'var(--text-secondary)',
              borderBottom: tab === 'signup' ? '2px solid var(--brand-primary)' : '2px solid transparent',
              backgroundColor: tab === 'signup' ? '#FFFFFF' : 'transparent',
              transition: 'all 0.2s'
            }}
          >
            회원가입
          </button>
        </div>

        {/* Notice Badge */}
        <div style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--brand-light)',
          borderBottom: '1px solid #F3D5CC',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.825rem',
          color: 'var(--brand-primary)'
        }}>
          <ShieldCheck size={16} />
          <span>인증 서비스는 추후 Supabase 백엔드로 실제 연동됩니다.</span>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {message && (
            <div style={{
              backgroundColor: '#DCFCE7',
              color: '#15803D',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <CheckCircle2 size={18} />
              <span>{message}</span>
            </div>
          )}

          {tab === 'signup' && (
            <>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>이름</label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.65rem 0.65rem 2.4rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>연락처</label>
                <div style={{ position: 'relative' }}>
                  <Phone size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.65rem 0.65rem 2.4rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>이메일 주소</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="email"
                required
                placeholder="gorae@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.65rem 0.65rem 2.4rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>비밀번호</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.65rem 0.65rem 2.4rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem' }}
          >
            {tab === 'login' ? '로그인하기' : '회원가입하기'}
          </button>
        </form>
      </div>
    </div>
  );
}
