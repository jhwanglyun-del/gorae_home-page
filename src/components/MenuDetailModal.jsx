import React from 'react';
import { X, Flame, Sparkles, ShoppingBag } from 'lucide-react';

export default function MenuDetailModal({ item, onClose, onOrder }) {
  if (!item) return null;

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
        maxWidth: '520px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        border: '1px solid var(--border-light)',
        animation: 'fadeIn 0.3s ease'
      }}>
        {/* Image Banner */}
        <div style={{ position: 'relative', height: '220px', backgroundColor: '#F4ECE1' }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
          {item.isPopular && (
            <span style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              backgroundColor: 'var(--brand-primary)',
              color: '#FFFFFF',
              padding: '0.3rem 0.8rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <Sparkles size={14} /> 대표 추천 메뉴
            </span>
          )}
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>{item.name}</h3>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
              {item.price.toLocaleString()}원
            </span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>
            {item.desc}
          </p>

          {/* Spicy Level */}
          {item.spicyLevel > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.875rem' }}>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>맵기 정도:</span>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(3)].map((_, i) => (
                  <Flame
                    key={i}
                    size={18}
                    fill={i < item.spicyLevel ? '#B83A24' : 'none'}
                    color={i < item.spicyLevel ? '#B83A24' : '#D6C9B8'}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Ingredients list */}
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            padding: '1rem',
            borderRadius: '10px',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: '0.5rem' }}>
              주요 정성 재료
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {item.ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              onOrder(item);
              onClose();
            }}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem', display: 'flex', gap: '0.5rem' }}
          >
            <ShoppingBag size={18} />
            <span>테이블 예약 및 주문 문의하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
