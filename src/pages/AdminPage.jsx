import React, { useState } from 'react';
import { 
  ADMIN_STATS, REALTIME_CUSTOMERS, TIER_DISTRIBUTION, 
  CUSTOMER_LIST, SALES_TREND_WEEKLY, MENU_SALES_SHARE, HOURLY_PEAK_TRAFFIC 
} from '../data/mockData';
import { 
  LayoutDashboard, Users, BarChart3, TrendingUp, DollarSign, 
  ShoppingBag, Award, Filter, Search, Download, RefreshCw, 
  ArrowUpRight, Clock, Plus, Minus, UserCheck, ChevronRight, X, CheckCircle2, Shield, Calendar
} from 'lucide-react';

export default function AdminPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'customers' | 'reports'

  // Customer Filtering state
  const [filterGender, setFilterGender] = useState('전체');
  const [filterAge, setFilterAge] = useState('전체');
  const [filterTier, setFilterTier] = useState('전체');
  const [filterFreq, setFilterFreq] = useState('전체');
  const [filterAmount, setFilterAmount] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('amount_desc');

  // Customer Detail Modal & Point update
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [pointDelta, setPointDelta] = useState(1000);
  const [pointMessage, setPointMessage] = useState('');

  // Report Period & Download State
  const [reportPeriod, setReportPeriod] = useState('monthly');
  const [downloadToast, setDownloadToast] = useState(false);

  // Filter logic for Customer Management
  const filteredCustomers = CUSTOMER_LIST.filter(cst => {
    if (filterGender !== '전체' && cst.gender !== filterGender) return false;
    if (filterAge !== '전체' && cst.age !== filterAge) return false;
    if (filterTier !== '전체' && cst.tier !== filterTier) return false;
    
    if (filterFreq === '1-3회' && (cst.frequency < 1 || cst.frequency > 3)) return false;
    if (filterFreq === '4-10회' && (cst.frequency < 4 || cst.frequency > 10)) return false;
    if (filterFreq === '10회이상' && cst.frequency <= 10) return false;

    if (filterAmount === '10만미만' && cst.amount >= 100000) return false;
    if (filterAmount === '10만-50만' && (cst.amount < 100000 || cst.amount > 500000)) return false;
    if (filterAmount === '50만-100만' && (cst.amount < 500000 || cst.amount > 1000000)) return false;
    if (filterAmount === '100만이상' && cst.amount <= 1000000) return false;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return cst.name.toLowerCase().includes(q) || cst.id.toLowerCase().includes(q);
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'amount_desc') return b.amount - a.amount;
    if (sortBy === 'amount_asc') return a.amount - b.amount;
    if (sortBy === 'freq_desc') return b.frequency - a.frequency;
    if (sortBy === 'points_desc') return b.points - a.points;
    return 0;
  });

  // Handle Point Adjustment
  const handleAdjustPoints = (type) => {
    if (!selectedCustomer) return;
    const delta = type === 'add' ? pointDelta : -pointDelta;
    selectedCustomer.points = Math.max(0, selectedCustomer.points + delta);
    setPointMessage(`${type === 'add' ? '지급' : '차감'} 완료! 현재 포인트: ${selectedCustomer.points.toLocaleString()}pt`);
    setTimeout(() => setPointMessage(''), 2500);
  };

  // Handle Report Export
  const handleExportReport = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3000);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F7F4EF', color: 'var(--text-primary)' }}>

      {/* LEFT SIDEBAR NAVIGATION */}
      <aside style={{
        width: '260px',
        backgroundColor: 'var(--brand-dark)',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-md)',
        zIndex: 10
      }}>
        {/* Sidebar Header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            backgroundColor: 'var(--brand-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem'
          }}>
            🐋
          </div>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>고래부대찌개</div>
            <div style={{ fontSize: '0.75rem', color: '#E09B3D', fontWeight: 600 }}>통합 관리자 센터</div>
          </div>
        </div>

        {/* Sidebar Navigation Tabs */}
        <nav style={{ padding: '1.25rem 0.85rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <button
            onClick={() => setActiveTab('dashboard')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              width: '100%',
              padding: '0.85rem 1.1rem',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.95rem',
              backgroundColor: activeTab === 'dashboard' ? 'var(--brand-primary)' : 'transparent',
              color: activeTab === 'dashboard' ? '#FFFFFF' : '#C8BCAE',
              transition: 'all 0.2s'
            }}
          >
            <LayoutDashboard size={20} />
            <span>대시보드</span>
          </button>

          <button
            onClick={() => setActiveTab('customers')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              width: '100%',
              padding: '0.85rem 1.1rem',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.95rem',
              backgroundColor: activeTab === 'customers' ? 'var(--brand-primary)' : 'transparent',
              color: activeTab === 'customers' ? '#FFFFFF' : '#C8BCAE',
              transition: 'all 0.2s'
            }}
          >
            <Users size={20} />
            <span>고객관리</span>
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              width: '100%',
              padding: '0.85rem 1.1rem',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.95rem',
              backgroundColor: activeTab === 'reports' ? 'var(--brand-primary)' : 'transparent',
              color: activeTab === 'reports' ? '#FFFFFF' : '#C8BCAE',
              transition: 'all 0.2s'
            }}
          >
            <BarChart3 size={20} />
            <span>통계 / 리포트</span>
          </button>
        </nav>

        {/* Sidebar Footer info */}
        <div style={{ padding: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#A09385' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
            <Shield size={14} color="#03C75A" />
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>최고관리자 권한</span>
          </div>
          <div>마지막 동기화: 실시간 연결됨</div>
          <button
            onClick={() => onNavigate('/')}
            className="btn btn-outline"
            style={{
              width: '100%',
              marginTop: '1rem',
              padding: '0.5rem',
              fontSize: '0.8rem',
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderColor: 'rgba(255,255,255,0.2)',
              color: '#FFFFFF'
            }}
          >
            홈페이지로 돌아가기
          </button>
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT AREA */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '2rem 2.5rem' }}>

        {/* Top Header Bar */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          backgroundColor: '#FFFFFF',
          padding: '1.25rem 1.75rem',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-dark)' }}>
              {activeTab === 'dashboard' && '📌 실시간 매장 대시보드'}
              {activeTab === 'customers' && '👥 단골 고객 및 포인트 통합 관리'}
              {activeTab === 'reports' && '📊 매출 & 방문객 통계 리포트'}
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              수제햄 고래부대찌개 실시간 영업 상태를 실시간으로 확인하고 관리합니다.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{
              backgroundColor: 'var(--brand-light)',
              color: 'var(--brand-primary)',
              padding: '0.4rem 0.8rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#03C75A' }}></span>
              영업 중 (11:00~21:30)
            </span>

            <button
              onClick={() => alert('데이터가 최신 상태로 새로고침되었습니다.')}
              className="btn btn-outline"
              style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem' }}
            >
              <RefreshCw size={15} />
              <span>새로고침</span>
            </button>
          </div>
        </header>

        {/* =================================================== */}
        {/* TAB 1: 대시보드 (DASHBOARD) */}
        {/* =================================================== */}
        {activeTab === 'dashboard' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="animate-fade-in">

            {/* 4 Key KPI Metrics Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Card 1 */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 600 }}>전체 고객 수</span>
                  <div style={{ backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)', padding: '0.5rem', borderRadius: '10px' }}>
                    <Users size={20} />
                  </div>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--brand-dark)' }}>
                  {ADMIN_STATS.totalCustomers.toLocaleString()}명
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: '#15803D', marginTop: '0.5rem' }}>
                  <ArrowUpRight size={16} />
                  <span>금일 신규 +{ADMIN_STATS.newCustomersToday}명 가입</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 600 }}>누적 매출액</span>
                  <div style={{ backgroundColor: '#FEF3C7', color: '#B45309', padding: '0.5rem', borderRadius: '10px' }}>
                    <DollarSign size={20} />
                  </div>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--brand-dark)' }}>
                  {(ADMIN_STATS.cumulativeRevenue / 100000000).toFixed(2)}억원
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  이번 달 매출: {(ADMIN_STATS.monthlyRevenue / 10000).toLocaleString()}만원
                </div>
              </div>

              {/* Card 3 */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 600 }}>총 거래 건수</span>
                  <div style={{ backgroundColor: '#E0F2FE', color: '#0369A1', padding: '0.5rem', borderRadius: '10px' }}>
                    <ShoppingBag size={20} />
                  </div>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--brand-dark)' }}>
                  {ADMIN_STATS.totalTransactions.toLocaleString()}건
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  평균 객단가: {ADMIN_STATS.avgOrderValue.toLocaleString()}원
                </div>
              </div>

              {/* Card 4 */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 600 }}>고객 재방문율</span>
                  <div style={{ backgroundColor: '#F3E8FF', color: '#6B21A8', padding: '0.5rem', borderRadius: '10px' }}>
                    <TrendingUp size={20} />
                  </div>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--brand-dark)' }}>
                  {ADMIN_STATS.customerRetentionRate}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#6B21A8', marginTop: '0.5rem', fontWeight: 600 }}>
                  재방문단골 비율 우수
                </div>
              </div>
            </div>

            {/* Dashboard Middle Section: Realtime Customer Feed & Tier Distribution */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Real-time Customer Registration Feed */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-dark)' }}>
                    ⚡ 실시간 고객 등록 현황
                  </h3>
                  <span className="badge badge-green">LIVE</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {REALTIME_CUSTOMERS.map((cust) => (
                    <div
                      key={cust.id}
                      style={{
                        padding: '0.85rem 1rem',
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--border-medium)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          color: 'var(--brand-primary)'
                        }}>
                          {cust.name[0]}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-dark)' }}>
                            {cust.name} ({cust.phone})
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            유입: {cust.channel} • {cust.date}
                          </div>
                        </div>
                      </div>

                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.6rem',
                        borderRadius: '12px',
                        backgroundColor: cust.tier === 'VVIP' ? '#F3E8FF' : cust.tier === 'VIP' ? '#FEF3C7' : '#E0F2FE',
                        color: cust.tier === 'VVIP' ? '#6B21A8' : cust.tier === 'VIP' ? '#B45309' : '#0369A1'
                      }}>
                        {cust.tier}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier Distribution Visual Bar */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '1.25rem' }}>
                  🏅 고객 등급별 분포 현황
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {TIER_DISTRIBUTION.map((item, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                        <span style={{ fontWeight: 700, color: 'var(--brand-dark)' }}>{item.tier}</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{item.count.toLocaleString()}명 ({item.percent})</span>
                      </div>
                      <div style={{ width: '100%', height: '10px', backgroundColor: 'var(--bg-primary)', borderRadius: '5px', overflow: 'hidden' }}>
                        <div style={{
                          width: item.percent,
                          height: '100%',
                          backgroundColor: item.color,
                          borderRadius: '5px',
                          transition: 'width 0.5s ease'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: 'var(--brand-light)',
                  borderRadius: '10px',
                  fontSize: '0.825rem',
                  color: 'var(--brand-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Award size={18} />
                  <span>상위 18% (VVIP/VIP) 고객이 전체 매출의 54%를 견인하고 있습니다.</span>
                </div>
              </div>
            </div>

            {/* Dashboard Lower Section: Weekly Sales Graph & New Customers Table */}
            <div className="card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-dark)' }}>
                    📈 주간 매출 추이 (최근 7일)
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>금/토/일 주말 피크타임 매출 급상승</p>
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                  주간 총 매출: 37,900,000원
                </div>
              </div>

              {/* Custom SVG / HTML Bar Chart */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                height: '200px',
                paddingTop: '20px',
                borderBottom: '2px solid var(--border-medium)',
                gap: '1rem'
              }}>
                {SALES_TREND_WEEKLY.map((st, i) => {
                  const heightPercent = (st.revenue / 10000000) * 100;
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '0.4rem' }}>
                        {(st.revenue / 10000).toLocaleString()}만
                      </div>
                      <div
                        style={{
                          width: '70%',
                          maxWidth: '42px',
                          height: `${heightPercent}%`,
                          backgroundColor: i >= 4 ? 'var(--brand-primary)' : 'var(--brand-secondary)',
                          borderRadius: '8px 8px 0 0',
                          transition: 'height 0.3s ease'
                        }}
                      ></div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
                        {st.day}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* =================================================== */}
        {/* TAB 2: 고객관리 (CUSTOMER MANAGEMENT) */}
        {/* =================================================== */}
        {activeTab === 'customers' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="animate-fade-in">

            {/* Customer Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>조회된 고객 수</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--brand-dark)' }}>
                  {filteredCustomers.length}명 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>(전체 {CUSTOMER_LIST.length}명)</span>
                </div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>조회 고객 누적 매출</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--brand-primary)' }}>
                  {filteredCustomers.reduce((acc, c) => acc + c.amount, 0).toLocaleString()}원
                </div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>조회 고객 총 보유 포인트</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#D97706' }}>
                  {filteredCustomers.reduce((acc, c) => acc + c.points, 0).toLocaleString()} pt
                </div>
              </div>
            </div>

            {/* CUSTOMER MULTI-FILTER BAR */}
            <div className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--brand-dark)', fontWeight: 800 }}>
                <Filter size={18} color="#B83A24" />
                <span>고객 필터링 조건</span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '1rem',
                marginBottom: '1.25rem'
              }}>
                {/* Filter 1: Gender */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>성별</label>
                  <select
                    value={filterGender}
                    onChange={(e) => setFilterGender(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-medium)', fontSize: '0.85rem' }}
                  >
                    <option value="전체">성별 (전체)</option>
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                  </select>
                </div>

                {/* Filter 2: Age */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>연령대</label>
                  <select
                    value={filterAge}
                    onChange={(e) => setFilterAge(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-medium)', fontSize: '0.85rem' }}
                  >
                    <option value="전체">연령대 (전체)</option>
                    <option value="20대">20대</option>
                    <option value="30대">30대</option>
                    <option value="40대">40대</option>
                    <option value="50대">50대 이상</option>
                  </select>
                </div>

                {/* Filter 3: Tier */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>고객 등급</label>
                  <select
                    value={filterTier}
                    onChange={(e) => setFilterTier(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-medium)', fontSize: '0.85rem' }}
                  >
                    <option value="전체">고객등급 (전체)</option>
                    <option value="VVIP">VVIP (100만원 이상)</option>
                    <option value="VIP">VIP (50만원 이상)</option>
                    <option value="GOLD">GOLD (20만원 이상)</option>
                    <option value="SILVER">SILVER (10만원 이상)</option>
                    <option value="BRONZE">BRONZE (일반)</option>
                  </select>
                </div>

                {/* Filter 4: Purchase Frequency */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>구매 빈도</label>
                  <select
                    value={filterFreq}
                    onChange={(e) => setFilterFreq(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-medium)', fontSize: '0.85rem' }}
                  >
                    <option value="전체">구매빈도 (전체)</option>
                    <option value="1-3회">1 ~ 3회</option>
                    <option value="4-10회">4 ~ 10회</option>
                    <option value="10회이상">10회 이상 (골며든 단골)</option>
                  </select>
                </div>

                {/* Filter 5: Purchase Amount */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>구매 금액</label>
                  <select
                    value={filterAmount}
                    onChange={(e) => setFilterAmount(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-medium)', fontSize: '0.85rem' }}
                  >
                    <option value="전체">구매금액 (전체)</option>
                    <option value="10만미만">10만원 미만</option>
                    <option value="10만-50만">10만 ~ 50만원</option>
                    <option value="50만-100만">50만 ~ 100만원</option>
                    <option value="100만이상">100만원 이상</option>
                  </select>
                </div>
              </div>

              {/* Search & Sort Input Row */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
                  <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    placeholder="고객 이름 또는 고객ID 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '100%', padding: '0.55rem 0.55rem 0.55rem 2.2rem', borderRadius: '6px', border: '1px solid var(--border-medium)', fontSize: '0.85rem', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>정렬:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{ padding: '0.55rem', borderRadius: '6px', border: '1px solid var(--border-medium)', fontSize: '0.85rem' }}
                  >
                    <option value="amount_desc">누적구매금액 높은순</option>
                    <option value="amount_asc">누적구매금액 낮은순</option>
                    <option value="freq_desc">방문빈도 많은순</option>
                    <option value="points_desc">보유포인트 많은순</option>
                  </select>

                  <button
                    onClick={() => {
                      setFilterGender('전체');
                      setFilterAge('전체');
                      setFilterTier('전체');
                      setFilterFreq('전체');
                      setFilterAmount('전체');
                      setSearchQuery('');
                      setSortBy('amount_desc');
                    }}
                    className="btn btn-outline"
                    style={{ padding: '0.55rem 0.8rem', fontSize: '0.8rem' }}
                  >
                    필터 초기화
                  </button>
                </div>
              </div>
            </div>

            {/* CUSTOMER TABLE */}
            <div className="card" style={{ padding: '1.5rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-medium)', color: 'var(--text-secondary)' }}>
                    <th style={{ padding: '0.75rem 0.5rem' }}>고객 ID</th>
                    <th style={{ padding: '0.75rem 0.5rem' }}>이름</th>
                    <th style={{ padding: '0.75rem 0.5rem' }}>성별/연령</th>
                    <th style={{ padding: '0.75rem 0.5rem' }}>고객 등급</th>
                    <th style={{ padding: '0.75rem 0.5rem' }}>방문 횟수</th>
                    <th style={{ padding: '0.75rem 0.5rem' }}>누적 구매액</th>
                    <th style={{ padding: '0.75rem 0.5rem' }}>지급 포인트</th>
                    <th style={{ padding: '0.75rem 0.5rem' }}>최근 방문일</th>
                    <th style={{ padding: '0.75rem 0.5rem' }}>상세/관리</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.length === 0 ? (
                    <tr>
                      <td colSpan="9" style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                        필터 조건에 부합하는 고객이 없습니다.
                      </td>
                    </tr>
                  ) : (
                    filteredCustomers.map((cst) => (
                      <tr key={cst.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                        <td style={{ padding: '0.85rem 0.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>{cst.id}</td>
                        <td style={{ padding: '0.85rem 0.5rem', fontWeight: 700, color: 'var(--brand-dark)' }}>{cst.name}</td>
                        <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-secondary)' }}>{cst.gender} / {cst.age}</td>
                        <td style={{ padding: '0.85rem 0.5rem' }}>
                          <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            padding: '0.25rem 0.6rem',
                            borderRadius: '12px',
                            backgroundColor: cst.tier === 'VVIP' ? '#F3E8FF' : cst.tier === 'VIP' ? '#FEF3C7' : cst.tier === 'GOLD' ? '#FFFBEB' : '#E0F2FE',
                            color: cst.tier === 'VVIP' ? '#6B21A8' : cst.tier === 'VIP' ? '#B45309' : cst.tier === 'GOLD' ? '#D97706' : '#0369A1'
                          }}>
                            {cst.tier}
                          </span>
                        </td>
                        <td style={{ padding: '0.85rem 0.5rem', fontWeight: 600 }}>{cst.frequency}회</td>
                        <td style={{ padding: '0.85rem 0.5rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                          {cst.amount.toLocaleString()}원
                        </td>
                        <td style={{ padding: '0.85rem 0.5rem', fontWeight: 700, color: '#D97706' }}>
                          {cst.points.toLocaleString()} pt
                        </td>
                        <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-secondary)' }}>{cst.lastVisit}</td>
                        <td style={{ padding: '0.85rem 0.5rem' }}>
                          <button
                            onClick={() => setSelectedCustomer(cst)}
                            className="btn btn-outline"
                            style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
                          >
                            상세 / 포인트
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* =================================================== */}
        {/* TAB 3: 통계/리포트 (STATISTICS & REPORTS) */}
        {/* =================================================== */}
        {activeTab === 'reports' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="animate-fade-in">

            {/* Controls Bar: Period selector & Export button */}
            <div className="card" style={{ padding: '1.25rem 1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Calendar size={20} color="#B83A24" />
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>리포트 조회 기간:</span>
                <div style={{ display: 'flex', gap: '0.3rem', backgroundColor: 'var(--bg-primary)', padding: '0.25rem', borderRadius: '8px' }}>
                  {['daily', 'weekly', 'monthly', 'yearly'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setReportPeriod(p)}
                      style={{
                        padding: '0.35rem 0.85rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        backgroundColor: reportPeriod === p ? '#FFFFFF' : 'transparent',
                        color: reportPeriod === p ? 'var(--brand-primary)' : 'var(--text-secondary)',
                        boxShadow: reportPeriod === p ? 'var(--shadow-sm)' : 'none'
                      }}
                    >
                      {p === 'daily' && '일간'}
                      {p === 'weekly' && '주간'}
                      {p === 'monthly' && '월간'}
                      {p === 'yearly' && '연간'}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleExportReport}
                className="btn btn-primary"
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', display: 'flex', gap: '0.4rem' }}
              >
                <Download size={16} />
                <span>엑셀/CSV 리포트 다운로드</span>
              </button>
            </div>

            {downloadToast && (
              <div style={{
                backgroundColor: '#DCFCE7',
                color: '#15803D',
                padding: '0.85rem 1.25rem',
                borderRadius: '10px',
                fontSize: '0.875rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                animation: 'fadeIn 0.2s'
              }}>
                <CheckCircle2 size={18} />
                <span>[리포트 내보내기] '수제햄_고래부대찌개_{reportPeriod}_매출리포트.csv' 파일 생성이 완료되었습니다.</span>
              </div>
            )}

            {/* Report Grid 1: Popular Menu Sales Share */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
              
              <div className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '1.25rem' }}>
                  🍲 인기 메뉴별 매출 비중 분석
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  {MENU_SALES_SHARE.map((item, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                        <span style={{ fontWeight: 700, color: 'var(--brand-dark)' }}>{item.menu}</span>
                        <span style={{ fontWeight: 800, color: item.color }}>
                          {item.share}% ({item.revenue.toLocaleString()}원)
                        </span>
                      </div>
                      <div style={{ width: '100%', height: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: '6px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${item.share}%`,
                          height: '100%',
                          backgroundColor: item.color,
                          borderRadius: '6px'
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-surface-warm)',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}>
                  💡 <strong>인사이트:</strong> '수제햄 꽃부대찌개'가 전체 매출의 약 48%를 차지하여 압도적 1위 효자 메뉴로 집계됩니다.
                </div>
              </div>

              {/* Report Grid 2: Peak Time Hourly Visitors */}
              <div className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '1.25rem' }}>
                  ⏰ 시간대별 피크타임 방문/매출 분포
                </h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  height: '180px',
                  paddingTop: '15px',
                  borderBottom: '2px solid var(--border-medium)',
                  gap: '0.4rem'
                }}>
                  {HOURLY_PEAK_TRAFFIC.map((hp, i) => {
                    const hPercent = (hp.visitors / 160) * 100;
                    const isPeak = hp.visitors >= 120;
                    return (
                      <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: isPeak ? 'var(--brand-primary)' : 'var(--text-muted)', marginBottom: '0.2rem' }}>
                          {hp.visitors}
                        </div>
                        <div
                          style={{
                            width: '80%',
                            height: `${hPercent}%`,
                            backgroundColor: isPeak ? 'var(--brand-primary)' : '#D6C9B8',
                            borderRadius: '4px 4px 0 0'
                          }}
                        ></div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.4rem', textAlign: 'center' }}>
                          {hp.time.split(' ')[0]}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', fontSize: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--brand-primary)', borderRadius: '3px' }}></div>
                    <span>피크타임 (12시 점심 / 18~19시 저녁)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Report Grid 3: Customer Retention & Conversion Analysis */}
            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-dark)', marginBottom: '1.25rem' }}>
                🔄 고객 재방문율 및 등급 승급 리포트
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-primary)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>첫 방문 후 30일 이내 재방문율</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--brand-primary)', margin: '0.5rem 0' }}>
                    64.2%
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>동종 외식 업계 평균(42%) 대비 +22.2%p 높음</p>
                </div>

                <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-primary)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>실버 → 골드/VIP 등급 전환율</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#D97706', margin: '0.5rem 0' }}>
                    41.8%
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>수제햄 포인트 적립 제도가 단골 유착에 기여</p>
                </div>

                <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-primary)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>월 평균 회원 포인트 환급 사용액</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#15803D', margin: '0.5rem 0' }}>
                    1,240,000pt
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>포인트 사용으로 인한 재방문 회출액 약 12배 효과</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* CUSTOMER DETAIL & POINTS MODAL */}
      {selectedCustomer && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(44, 34, 30, 0.65)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '500px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            overflow: 'hidden'
          }}>
            <div style={{
              backgroundColor: 'var(--brand-dark)',
              color: '#FFFFFF',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                고객 상세 프로필 & 포인트 관리
              </h3>
              <button onClick={() => { setSelectedCustomer(null); setPointMessage(''); }} style={{ color: '#FFFFFF' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '54px', height: '54px', borderRadius: '50%',
                  backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', fontWeight: 800
                }}>
                  {selectedCustomer.name[0]}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--brand-dark)' }}>
                    {selectedCustomer.name} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>({selectedCustomer.id})</span>
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {selectedCustomer.gender} / {selectedCustomer.age} • 등급: <strong>{selectedCustomer.tier}</strong>
                  </div>
                </div>
              </div>

              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
                padding: '1rem', backgroundColor: 'var(--bg-primary)', borderRadius: '10px',
                marginBottom: '1.5rem', fontSize: '0.875rem'
              }}>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>누적 결제금액</div>
                  <div style={{ fontWeight: 800, color: 'var(--brand-primary)', fontSize: '1.1rem' }}>
                    {selectedCustomer.amount.toLocaleString()}원
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>현재 보유 포인트</div>
                  <div style={{ fontWeight: 800, color: '#D97706', fontSize: '1.1rem' }}>
                    {selectedCustomer.points.toLocaleString()} pt
                  </div>
                </div>
              </div>

              {/* Point Adjustment Control */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: '0.75rem' }}>
                  포인트 수동 지급 / 차감
                </h5>

                {pointMessage && (
                  <div style={{
                    backgroundColor: '#DCFCE7', color: '#15803D', padding: '0.6rem 0.8rem',
                    borderRadius: '6px', fontSize: '0.825rem', fontWeight: 600, marginBottom: '0.75rem'
                  }}>
                    {pointMessage}
                  </div>
                )}

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <input
                    type="number"
                    value={pointDelta}
                    onChange={(e) => setPointDelta(Number(e.target.value))}
                    style={{ width: '120px', padding: '0.55rem', borderRadius: '6px', border: '1px solid var(--border-medium)', outline: 'none' }}
                  />
                  <button
                    onClick={() => handleAdjustPoints('add')}
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem' }}
                  >
                    <Plus size={16} /> 포인트 지급
                  </button>
                  <button
                    onClick={() => handleAdjustPoints('deduct')}
                    className="btn btn-outline"
                    style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem' }}
                  >
                    <Minus size={16} /> 포인트 차감
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
