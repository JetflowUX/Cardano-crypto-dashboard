import React from 'react';
import { Plus, Search, Filter, ArrowUpDown, MoreHorizontal } from 'lucide-react';
export function WatchlistHeader() {
  const stats = [
  {
    label: 'Watchlist Assets',
    value: '127'
  },
  {
    label: 'Exchanges',
    value: '848'
  },
  {
    label: 'Insight',
    value: '241'
  },
  {
    label: '24h Volume',
    value: '$1,004.90M'
  },
  {
    label: 'Dominance',
    value: 'BTC 55.9%'
  },
  {
    label: 'Fear & Greed',
    value: '88/100'
  }];

  return (
    <div className="space-y-8 mb-8">
      {/* Market Cap Hero */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium text-slate-400 mb-1">
            Global Market Cap
          </h2>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              $2.48T
            </span>
            <span className="text-sm font-medium text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full">
              +12.7% Last 24 hours
            </span>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#0a0e1a] rounded-lg font-semibold text-sm hover:bg-slate-200 transition-colors shadow-lg shadow-white/5">
          <Plus className="w-4 h-4" />
          <span>New Asset</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-6 border-y border-slate-200 dark:border-[#1e2433]">
        {stats.map((stat, index) =>
        <div
          key={index}
          className={`flex flex-col ${index !== 0 ? 'lg:border-l border-slate-200 dark:border-[#1e2433] lg:pl-6' : ''}`}>

            <span className="text-xs text-slate-500 mb-1">{stat.label}</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
              {stat.value}
            </span>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search assets..."
            className="w-full h-10 pl-10 pr-4 bg-slate-100 dark:bg-[#141824] border border-slate-200 dark:border-[#1e2433] rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-[#0033ad] focus:ring-1 focus:ring-[#0033ad] transition-all" />

        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-[#141824] border border-slate-200 dark:border-[#1e2433] rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 transition-all">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-[#141824] border border-slate-200 dark:border-[#1e2433] rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 transition-all">
            <ArrowUpDown className="w-4 h-4" />
            <span>Sort</span>
          </button>
          <button className="p-2 bg-slate-100 dark:bg-[#141824] border border-slate-200 dark:border-[#1e2433] rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 transition-all" aria-label="More actions">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>);

}
