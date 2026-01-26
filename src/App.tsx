import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { TrendingWidget } from './components/TrendingWidget';
import { GainersWidget } from './components/GainersWidget';
import { SentimentWidget } from './components/SentimentWidget';
import { StakingPoolsWidget } from './components/StakingPoolsWidget';
import { PortfolioSummary } from './components/PortfolioSummary';
import { useTheme } from './hooks/useTheme';

// Pages
import { Dashboard } from './pages/Dashboard';
import { Watchlist } from './pages/Watchlist';
import { Trading } from './pages/Trading';
import { Staking } from './pages/Staking';
import { Portfolio } from './pages/Portfolio';
import { Settings } from './pages/Settings';

export function App() {
  // Initialize theme
  useTheme();

  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'watchlist':
        return <Watchlist />;
      case 'trading':
        return <Trading />;
      case 'staking':
        return <Staking />;
      case 'portfolio':
        return <Portfolio />;
      case 'settings':
        return <Settings />;
      default:
        return <Watchlist />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-300 font-sans selection:bg-[#0033ad] selection:text-white">
      <Sidebar activeTab={activeTab} onNavigate={setActiveTab} />
      <TopNav />

      <main className="pl-[72px] pt-[72px] min-h-screen">
        <div className="max-w-[1600px] mx-auto p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {renderContent()}
          </div>

          {/* Right Sidebar Widgets - Hide on Dashboard since it has its own layout */}
          {activeTab !== 'dashboard' && (
            <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-6 hidden lg:block">
              <PortfolioSummary />
              <TrendingWidget />
              <GainersWidget />
              <SentimentWidget />
              <StakingPoolsWidget />
            </aside>
          )}
        </div>
      </main>
    </div>);
}