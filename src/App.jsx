import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import HomePage from './pages/HomePage';
import { supabase } from './lib/supabase';

// Lazy loading secondary routes for optimal initial bundle performance
const AdminPage = lazy(() => import('./pages/AdminPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));

// Fallback spinner for page transitions
const PageLoader = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 600,
    color: 'var(--brand-primary)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <span>🐋</span>
      <span>페이지를 불러오는 중입니다...</span>
    </div>
  </div>
);

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalInitialTab, setAuthModalInitialTab] = useState('login');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);

    // Initial Supabase Session Check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Real-time Auth State Change Listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener('popstate', handlePopState);
      subscription.unsubscribe();
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuth = (tab = 'login') => {
    if (tab === 'signup') {
      navigateTo('/signup');
    } else {
      setAuthModalInitialTab(tab);
      setAuthModalOpen(true);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header
        currentPath={currentPath}
        user={user}
        onNavigate={navigateTo}
        onOpenAuth={handleOpenAuth}
        onSignOut={handleSignOut}
      />

      {/* Main Content Router with Suspense Code Splitting */}
      <div style={{ flex: 1 }}>
        <Suspense fallback={<PageLoader />}>
          {currentPath === '/admin' ? (
            <AdminPage onNavigate={navigateTo} />
          ) : currentPath === '/signup' ? (
            <SignupPage onNavigate={navigateTo} onOpenAuth={handleOpenAuth} />
          ) : (
            <HomePage onOpenAuth={handleOpenAuth} />
          )}
        </Suspense>
      </div>

      {/* Footer */}
      {currentPath !== '/admin' && (
        <Footer />
      )}


      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onNavigate={navigateTo}
        initialTab={authModalInitialTab}
      />
    </div>
  );
}
