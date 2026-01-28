import React from 'react';
import { TrendingUp, PieChart, Wallet, ArrowUpRight } from 'lucide-react';

export function PortfolioSummary() {
  return (
    <div className="bg-white dark:bg-gradient-to-br from-[#141824] to-[#0a0e1a] rounded-2xl p-6 border border-slate-200 dark:border-[#1e2433] shadow-xl hover:shadow-[#0033ad]/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#0033ad]/10">
            <PieChart className="w-4 h-4 text-[#0033ad]" />
          </div>
          Total Balance
        </h3>
        <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors" aria-label="Open portfolio details">
          <ArrowUpRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
        </button>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">$12,458.32</span>
          <span className="text-sm font-medium text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +5.2%
          </span>
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-500 mt-2 flex items-center gap-2">
          <Wallet className="w-3 h-3" />
          ≈ 18,240.5 ADA
        </div>
      </div>

      {/* Asset Allocation Bar */}
      <div className="space-y-4">
        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-2">
          <span>Asset Allocation</span>
          <span>View Details</span>
        </div>
        <div className="flex h-3 w-full rounded-full overflow-hidden bg-slate-200 dark:bg-[#0a0e1a]">
          <div className="w-[65%] bg-gradient-to-r from-[#0033ad] to-[#0055ff]" />
          <div className="w-[20%] bg-purple-500" />
          <div className="w-[10%] bg-cyan-500" />
          <div className="w-[5%] bg-slate-600" />
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100 dark:bg-[#0a0e1a]/50 border border-slate-200 dark:border-[#1e2433]">
            <div className="w-2 h-2 rounded-full bg-[#0033ad]" />
            <span className="text-xs text-slate-700 dark:text-slate-300">ADA</span>
            <span className="text-xs text-slate-600 dark:text-slate-500 ml-auto">65%</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100 dark:bg-[#0a0e1a]/50 border border-slate-200 dark:border-[#1e2433]">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-xs text-slate-700 dark:text-slate-300">SNEK</span>
            <span className="text-xs text-slate-600 dark:text-slate-500 ml-auto">20%</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100 dark:bg-[#0a0e1a]/50 border border-slate-200 dark:border-[#1e2433]">
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
            <span className="text-xs text-slate-700 dark:text-slate-300">MIN</span>
            <span className="text-xs text-slate-600 dark:text-slate-500 ml-auto">10%</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100 dark:bg-[#0a0e1a]/50 border border-slate-200 dark:border-[#1e2433]">
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="text-xs text-slate-700 dark:text-slate-300">Other</span>
            <span className="text-xs text-slate-600 dark:text-slate-500 ml-auto">5%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
