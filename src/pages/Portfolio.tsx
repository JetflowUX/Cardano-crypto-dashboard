import React from 'react';
import { PortfolioSummary } from '../components/PortfolioSummary';

export function Portfolio() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">My Portfolio</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PortfolioSummary />
         <div className="bg-white dark:bg-[#141824] rounded-xl p-5 border border-slate-200 dark:border-[#1e2433] shadow-lg transition-colors duration-300">
           <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">Asset Distribution</h3>
           <div className="h-40 flex items-center justify-center text-slate-600 dark:text-slate-500 text-xs">
             Chart Placeholder
           </div>
        </div>
      </div>
    </div>
  );
}
