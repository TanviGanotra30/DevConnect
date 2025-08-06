import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import AuthPage from '@/components/AuthPage';
import FeedPage from '@/components/FeedPage';
import ChatPage from '@/components/ChatPage';
import SquadsPage from '@/components/SquadsPage';
import ProfilePage from '@/components/ProfilePage';

const AppLayout: React.FC = () => {
  const { currentPage, isAuthenticated } = useAppContext();

  const renderPage = () => {
    if (!isAuthenticated && currentPage !== 'auth') {
      return <LandingPage />;
    }

    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'auth':
        return <AuthPage />;
      case 'feed':
        return <FeedPage />;
      case 'chat':
        return <ChatPage />;
      case 'squads':
        return <SquadsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
};

export default AppLayout;