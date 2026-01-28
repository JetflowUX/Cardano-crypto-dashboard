import React from 'react';
import { Bell, ChevronDown, Wallet, Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
export function TopNav() {
  return (
    <header className="fixed top-0 left-[72px] right-0 h-[72px] bg-white/80 dark:bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-slate-200 dark:border-[#1e2433] flex items-center justify-between px-8 z-40 transition-colors duration-300">
      {/* Left: Title */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          Dashboard
        </h1>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-12 hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-slate-500 group-focus-within:text-[#0033ad] transition-colors" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-slate-100 dark:bg-[#141824] border border-slate-200 dark:border-[#1e2433] text-slate-900 dark:text-slate-300 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#0033ad]/50 focus:ring-1 focus:ring-[#0033ad]/50 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-600"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6">
        {/* Network Indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#141824] border border-slate-200 dark:border-[#1e2433]">
          <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
            Cardano Mainnet
          </span>
        </div>

        {/* Connect Wallet Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0033ad] hover:bg-[#0044cc] text-white rounded-lg font-medium text-sm transition-all shadow-[0_0_20px_rgba(0,51,173,0.3)] hover:shadow-[0_0_25px_rgba(0,51,173,0.5)] hover:scale-105 active:scale-95">
          <Wallet className="w-4 h-4" />
          <span>Connect Wallet</span>
        </button>

        <div className="h-8 w-[1px] bg-slate-200 dark:bg-[#1e2433]" />

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <button title="Notifications" className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#ef4444] rounded-full border-2 border-white dark:border-[#0a0e1a]" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 pl-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#141824] transition-colors p-1 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 border-2 border-slate-200 dark:border-[#1e2433] group-hover:border-[#0033ad] transition-colors overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Robert" alt="User" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors hidden sm:block">Robert Downey</span>
          <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
        </button>
      </div>
    </header>);
}