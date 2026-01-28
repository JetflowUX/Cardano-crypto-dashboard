import {
  LayoutDashboard,
  List,
  Layers,
  Settings,
  Hexagon,
  ArrowLeftRight,
  PieChart } from
'lucide-react';

interface SidebarProps {
  activeTab?: string;
  onNavigate: (tab: string) => void;
}

export function Sidebar({ activeTab = 'watchlist', onNavigate }: SidebarProps) {
  const navItems = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard'
  },
  {
    id: 'watchlist',
    icon: List,
    label: 'Watchlist'
  },
  {
    id: 'trading',
    icon: ArrowLeftRight,
    label: 'Trading'
  },
  {
    id: 'staking',
    icon: Layers,
    label: 'Staking'
  },
  {
    id: 'portfolio',
    icon: PieChart,
    label: 'Portfolio'
  },
  {
    id: 'settings',
    icon: Settings,
    label: 'Settings'
  }];

  return (
    <aside className="fixed left-0 top-0 h-full w-[72px] bg-white dark:bg-[#0a0e1a] border-r border-slate-200 dark:border-[#1e2433] flex flex-col items-center py-6 z-50 transition-colors duration-300">
      {/* Logo */}
      <div className="mb-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0033ad] to-[#0055ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,51,173,0.5)]">
          <Hexagon className="w-6 h-6 text-white fill-white" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-6 w-full px-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`group relative flex items-center justify-center w-full h-12 rounded-xl transition-all duration-200 ${isActive ? 'bg-[#0033ad]/10 text-[#0033ad]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'}`}
              title={item.label}>

              {isActive &&
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#0033ad] rounded-r-full" />
              }
              <item.icon
                className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />


              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-2 py-1 bg-white dark:bg-[#141824] text-slate-900 dark:text-white text-xs rounded border border-slate-200 dark:border-[#1e2433] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl">
                {item.label}
              </span>
            </button>);

        })}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-4 mt-auto w-full px-2">
      </div>
    </aside>);

}
