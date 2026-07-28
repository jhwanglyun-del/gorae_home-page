import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalInitialTab, setAuthModalInitialTab] = useState('login');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuth = (tab = 'login') => {
    setAuthModalInitialTab(tab);
    setAuthModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header is shown on both Homepage and Admin Header navigation */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Content Router */}
      <div style={{ flex: 1 }}>
        {currentPath === '/admin' ? (
          <AdminPage onNavigate={navigateTo} />
        ) : (
          <HomePage onOpenAuth={handleOpenAuth} />
        )}
      </div>

      {/* Footer on Homepage */}
      {currentPath !== '/admin' && (
        <Footer onNavigate={navigateTo} />
      )}

      {/* Login & Signup Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialTab={authModalInitialTab}
      />
    </div>
  );
}
