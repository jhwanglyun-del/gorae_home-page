import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';

import { supabase } from '../lib/supabase';

export default function SignupPage({ onNavigate, onOpenAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Agreements state
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketingSms: false,
    marketingEmail: false,
    marketingKakao: false
  });

  // Modal preview for terms
  const [activeTermsModal, setActiveTermsModal] = useState(null); // 'terms' | 'privacy' | null

  // UI state
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Validation functions
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordLengthValid = password.length >= 8;
  const isPasswordSpecialValid = /[!@#$%^&*(),.?":{}|<>]/?.test(password) ?? false;
  const isPasswordValid = isPasswordLengthValid && isPasswordSpecialValid;
  const isPasswordMatch = password.length > 0 && password === confirmPassword;
  const isNameValid = name.trim().length >= 2;
  const isPhoneValid = phone.replace(/[^0-9]/g, '').length >= 10;
  const isRequiredAgreementsChecked = agreements.terms && agreements.privacy;

  const isFormValid = isEmailValid && isPasswordValid && isPasswordMatch && isNameValid && isPhoneValid && isRequiredAgreementsChecked;

  // Hyphen Auto Formatting for Phone Number
  const handlePhoneChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, '').slice(0, 11);
    let formatted = raw;
    if (raw.length > 3 && raw.length <= 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
    } else if (raw.length > 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7)}`;
    }
    setPhone(formatted);
  };

  // Check all / Uncheck all terms
  const isAllAgreed = 
    agreements.terms && 
    agreements.privacy && 
    agreements.marketingSms && 
    agreements.marketingEmail && 
    agreements.marketingKakao;

  const handleToggleAllAgreed = () => {
    const nextState = !isAllAgreed;
    setAgreements({
      terms: nextState,
      privacy: nextState,
      marketingSms: nextState,
      marketingEmail: nextState,
      marketingKakao: nextState
    });
  };

  const handleSingleAgreementChange = (key) => {
    setAgreements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            phone: phone,
            marketing_agreed: agreements.marketingSms || agreements.marketingEmail || agreements.marketingKakao
          }
        }
      });

      if (error) throw error;

      // Supabase returns user with empty identities if user already exists
      if (data?.user && data?.user?.identities && data?.user?.identities.length === 0) {
        setErrorMsg('이미 가입되어 있는 이메일 주소입니다. 로그인 링크를 눌러 로그인해 주세요!');
        return;
      }

      setSuccessMsg(`'${name}' 님, 성공적으로 회원가입이 완료되었습니다! 로그인 창으로 이동합니다.`);
      setTimeout(() => {
        if (onOpenAuth) {
          onOpenAuth('login');
        } else if (onNavigate) {
          onNavigate('/');
        }
      }, 2000);
    } catch (err) {
      let friendlyError = err.message || '회원가입 처리 중 오류가 발생했습니다.';
      if (friendlyError.includes('User already registered') || friendlyError.includes('already exists')) {
        friendlyError = '이미 가입되어 있는 이메일 주소입니다. 로그인 링크를 눌러 로그인해 주세요!';
      } else if (friendlyError.includes('rate limit') || friendlyError.includes('rate_limit')) {
        friendlyError = '이메일 발송 제한을 초과했습니다. 설정을 즉시 이메일 자동 승인(Auto-confirm) 모드로 변경하였으니, [회원가입하기] 버튼을 다시 눌러주세요!';
      }

      setErrorMsg(friendlyError);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div style={{
      minHeight: 'calc(100vh - 76px)',
      backgroundColor: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2.5rem 1rem'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '540px',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-light)',
        overflow: 'hidden',
        animation: 'fadeIn 0.3s ease'
      }}>
        {/* Card Header */}
        <div style={{
          backgroundColor: 'var(--brand-dark)',
          color: '#FFFFFF',
          padding: '2rem 2rem 1.75rem',
          position: 'relative'
        }}>
          <button
            onClick={() => onNavigate && onNavigate('/')}
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.875rem',
              marginBottom: '1.25rem',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
            onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
          >
            <ArrowLeft size={18} />
            <span>홈으로 돌아가기</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '58px',
              height: '58px',
              borderRadius: '14px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3px',
              boxShadow: '0 4px 14px rgba(255, 88, 93, 0.3)',
              border: '1px solid rgba(255, 88, 93, 0.2)'
            }}>
              <img src="/images/logo.png" alt="로고" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>


            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
                회원가입
              </h2>
              <p style={{ fontSize: '0.85rem', opacity: 0.85, marginTop: '2px' }}>
                수제햄 고래부대찌개의 특별한 멤버십 혜택을 누려보세요.
              </p>
            </div>
          </div>
        </div>

        {/* Notice Badge */}
        <div style={{
          padding: '0.75rem 2rem',
          backgroundColor: 'var(--brand-light)',
          borderBottom: '1px solid #F3D5CC',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.825rem',
          color: 'var(--brand-primary)',
          fontWeight: 500
        }}>
          <ShieldCheck size={16} />
          <span>안전하게 Supabase 백엔드 데이터베이스로 보호됩니다.</span>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          
          {/* Error Message */}
          {errorMsg && (
            <div style={{
              backgroundColor: '#FEE2E2',
              color: '#991B1B',
              padding: '0.85rem 1rem',
              borderRadius: '10px',
              fontSize: '0.875rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid #FCA5A5'
            }}>
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Success Message */}
          {successMsg && (
            <div style={{
              backgroundColor: '#DCFCE7',
              color: '#15803D',
              padding: '0.85rem 1rem',
              borderRadius: '10px',
              fontSize: '0.875rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid #86EFAC'
            }}>
              <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Section: Input Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            
            {/* 1. Email Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                이메일 주소 <span style={{ color: 'var(--brand-primary)' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="email"
                  required
                  placeholder="example@gorae.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.6rem',
                    borderRadius: '10px',
                    border: email.length > 0 && !isEmailValid ? '1.5px solid #EF4444' : '1px solid var(--border-medium)',
                    fontSize: '0.925rem',
                    outline: 'none',
                    backgroundColor: 'var(--bg-surface)',
                    transition: 'border-color 0.2s'
                  }}
                />
              </div>
              {email.length > 0 && !isEmailValid && (
                <span style={{ fontSize: '0.775rem', color: '#EF4444', marginTop: '0.35rem', display: 'block' }}>
                  올바른 이메일 형식을 입력해 주세요 (예: user@example.com)
                </span>
              )}
            </div>

            {/* 2. Password Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                비밀번호 <span style={{ color: 'var(--brand-primary)' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="8자 이상, 특수문자 포함"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 2.6rem 0.75rem 2.6rem',
                    borderRadius: '10px',
                    border: password.length > 0 && !isPasswordValid ? '1.5px solid #EF4444' : '1px solid var(--border-medium)',
                    fontSize: '0.925rem',
                    outline: 'none',
                    backgroundColor: 'var(--bg-surface)',
                    transition: 'border-color 0.2s'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-secondary)',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Password conditions indicators */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.4rem', fontSize: '0.775rem' }}>
                <span style={{ color: isPasswordLengthValid ? '#16A34A' : 'var(--text-muted)', fontWeight: isPasswordLengthValid ? 600 : 400 }}>
                  {isPasswordLengthValid ? '✓ 8자 이상' : '• 8자 이상'}
                </span>
                <span style={{ color: isPasswordSpecialValid ? '#16A34A' : 'var(--text-muted)', fontWeight: isPasswordSpecialValid ? 600 : 400 }}>
                  {isPasswordSpecialValid ? '✓ 특수문자 포함(!@#$%^&*)' : '• 특수문자 포함(!@#$%^&*)'}
                </span>
              </div>
            </div>

            {/* 3. Confirm Password Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                비밀번호 확인 <span style={{ color: 'var(--brand-primary)' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  placeholder="비밀번호 다시 입력"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 2.6rem 0.75rem 2.6rem',
                    borderRadius: '10px',
                    border: confirmPassword.length > 0 && !isPasswordMatch ? '1.5px solid #EF4444' : '1px solid var(--border-medium)',
                    fontSize: '0.925rem',
                    outline: 'none',
                    backgroundColor: 'var(--bg-surface)',
                    transition: 'border-color 0.2s'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-secondary)',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title={showConfirmPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {confirmPassword.length > 0 && (
                <span style={{ fontSize: '0.775rem', marginTop: '0.35rem', display: 'block', color: isPasswordMatch ? '#16A34A' : '#EF4444', fontWeight: 500 }}>
                  {isPasswordMatch ? '✓ 비밀번호가 일치합니다.' : '✕ 비밀번호가 일치하지 않습니다.'}
                </span>
              )}
            </div>

            {/* 4. Name Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                이름 (닉네임) <span style={{ color: 'var(--brand-primary)' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  required
                  placeholder="홍길동"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.6rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.925rem',
                    outline: 'none',
                    backgroundColor: 'var(--bg-surface)'
                  }}
                />
              </div>
            </div>

            {/* 5. Phone Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                휴대폰 번호 <span style={{ color: 'var(--brand-primary)' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <Phone size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  value={phone}
                  onChange={handlePhoneChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.6rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.925rem',
                    outline: 'none',
                    backgroundColor: 'var(--bg-surface)'
                  }}
                />
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'block' }}>
                * 숫자만 입력하시면 자동으로 하이픈(-)이 생성됩니다.
              </span>
            </div>

          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', margin: '0.5rem 0' }} />

          {/* Section: Terms & Agreements */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              약관 동의
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              backgroundColor: 'var(--bg-primary)',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid var(--border-light)'
            }}>

              {/* 1. All Agree Checkbox */}
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.925rem',
                color: 'var(--brand-dark)',
                paddingBottom: '0.65rem',
                borderBottom: '1px solid var(--border-medium)'
              }}>
                <input
                  type="checkbox"
                  checked={isAllAgreed}
                  onChange={handleToggleAllAgreed}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--brand-primary)', cursor: 'pointer' }}
                />
                <span>전체 동의하기</span>
              </label>

              {/* 2. Required: Terms of Service */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.875rem' }}>
                  <input
                    type="checkbox"
                    checked={agreements.terms}
                    onChange={() => handleSingleAgreementChange('terms')}
                    style={{ width: '16px', height: '16px', accentColor: 'var(--brand-primary)', cursor: 'pointer' }}
                  />
                  <span><strong style={{ color: 'var(--brand-primary)' }}>[필수]</strong> 이용약관 동의</span>
                </label>
                <button
                  type="button"
                  onClick={() => setActiveTermsModal('terms')}
                  style={{ fontSize: '0.775rem', color: 'var(--text-muted)', textDecoration: 'underline' }}
                >
                  내용보기
                </button>
              </div>

              {/* 3. Required: Privacy Policy */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.875rem' }}>
                  <input
                    type="checkbox"
                    checked={agreements.privacy}
                    onChange={() => handleSingleAgreementChange('privacy')}
                    style={{ width: '16px', height: '16px', accentColor: 'var(--brand-primary)', cursor: 'pointer' }}
                  />
                  <span><strong style={{ color: 'var(--brand-primary)' }}>[필수]</strong> 개인정보 수집 및 이용 동의</span>
                </label>
                <button
                  type="button"
                  onClick={() => setActiveTermsModal('privacy')}
                  style={{ fontSize: '0.775rem', color: 'var(--text-muted)', textDecoration: 'underline' }}
                >
                  내용보기
                </button>
              </div>

              {/* 4. Optional: Marketing Info */}
              <div style={{ marginTop: '0.25rem', paddingTop: '0.5rem', borderTop: '1px stroke var(--border-light)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>[선택]</span> 마케팅 정보 수신 동의
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.825rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={agreements.marketingSms}
                      onChange={() => handleSingleAgreementChange('marketingSms')}
                      style={{ accentColor: 'var(--brand-primary)' }}
                    />
                    <span>SMS</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={agreements.marketingEmail}
                      onChange={() => handleSingleAgreementChange('marketingEmail')}
                      style={{ accentColor: 'var(--brand-primary)' }}
                    />
                    <span>이메일</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={agreements.marketingKakao}
                      onChange={() => handleSingleAgreementChange('marketingKakao')}
                      style={{ accentColor: 'var(--brand-primary)' }}
                    />
                    <span>카카오 알림톡</span>
                  </label>
                </div>
              </div>

            </div>
          </div>

          {/* Section: Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || loading}
            style={{
              width: '100%',
              padding: '0.95rem',
              borderRadius: '12px',
              backgroundColor: isFormValid ? 'var(--brand-primary)' : 'var(--border-medium)',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 700,
              marginTop: '0.5rem',
              cursor: isFormValid && !loading ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              boxShadow: isFormValid ? '0 4px 14px rgba(255, 88, 93, 0.35)' : 'none'
            }}
          >
            {loading ? '회원가입 처리 중...' : '회원가입하기'}
          </button>

          {/* Login Page Redirect Link */}
          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              이미 계정이 있으신가요?{' '}
            </span>
            <button
              type="button"
              onClick={() => onOpenAuth ? onOpenAuth('login') : (onNavigate && onNavigate('/'))}
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              로그인
            </button>
          </div>

        </form>
      </div>

      {/* Terms Preview Modal */}
      {activeTermsModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1100,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            maxWidth: '480px',
            width: '100%',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>
              {activeTermsModal === 'terms' ? '이용약관 동의 [필수]' : '개인정보 수집 및 이용 동의 [필수]'}
            </h3>
            <div style={{
              maxHeight: '240px',
              overflowY: 'auto',
              fontSize: '0.825rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              backgroundColor: 'var(--bg-primary)',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1rem'
            }}>
              {activeTermsModal === 'terms' ? (
                <>
                  제1조 (목적) 본 약관은 수제햄 고래부대찌개 서비스 이용 조건 및 절차를 규정합니다.<br/><br/>
                  제2조 (회원의 의무) 회원은 본 사이트에서 제공하는 서비스를 정당하게 이용해야 하며 타인의 정보를 도용해서는 안 됩니다.<br/><br/>
                  제3조 (서비스 변경 및 중단) 회사는 정기 점검 등 필요한 경우 서비스를 일시 중단할 수 있습니다.
                </>
              ) : (
                <>
                  1. 수집 항목: 이름, 이메일 주소, 비밀번호, 휴대폰 번호<br/><br/>
                  2. 수집 및 이용 목적: 회원 가입 의사 확인, 본인 식별, 서비스 제공 및 예약 관리<br/><br/>
                  3. 보유 및 이용 기간: 회원 탈퇴 시까지 (관계 법령에 따라 보존 필요 시 해당 기간 보관)
                </>
              )}
            </div>
            <button
              onClick={() => setActiveTermsModal(null)}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.65rem' }}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
