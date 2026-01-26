import React from 'react';
import { Layers, TrendingUp, Award, Zap } from 'lucide-react';

export function StakingOverview() {
  return (
    <div className="bg-gradient-to-br from-[#141824] to-[#0a0e1a] rounded-2xl p-6 border border-[#1e2433] shadow-xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#0033ad]/10">
              <Layers className="w-5 h-5 text-[#0033ad]" />
            </div>
            Staking Overview
          </h2>
          <p className="text-sm text-slate-400 mt-1 ml-11">Track your network participation</p>
        </div>
        <span className="text-xs font-medium text-[#10b981] bg-[#10b981]/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-[#10b981]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          Active Staking
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Staked */}
        <div className="group relative p-6 rounded-2xl bg-[#0a0e1a] border border-[#1e2433] hover:border-[#0033ad]/50 transition-all duration-300 shadow-lg hover:shadow-[#0033ad]/5">
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Zap className="w-6 h-6 text-[#0033ad]" />
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#0033ad]/10 text-[#0033ad]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-slate-400 text-sm font-medium mb-1">Total Staked</div>
              <div className="text-2xl font-bold text-white tracking-tight">125,450<span className="text-lg text-slate-500">.00</span></div>
              <div className="text-xs text-slate-500 mt-2 font-mono">≈ $85,920.80</div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-[#1e2433] flex items-center justify-between">
            <span className="text-xs text-slate-400">Next Reward</span>
            <span className="text-xs font-medium text-white">Epoch 482</span>
          </div>
        </div>

        {/* Rewards Earned */}
        <div className="group relative p-6 rounded-2xl bg-[#0a0e1a] border border-[#1e2433] hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/5">
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Award className="w-6 h-6 text-purple-500" />
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-slate-400 text-sm font-medium mb-1">Lifetime Rewards</div>
              <div className="text-2xl font-bold text-white tracking-tight">+1,240<span className="text-lg text-slate-500">.50</span></div>
              <div className="text-xs text-[#10b981] mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +45.20 last epoch
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#1e2433] w-full bg-[#1e2433]/30 h-1.5 rounded-full overflow-hidden">
             <div className="bg-purple-500 h-full rounded-full w-[75%]" />
          </div>
        </div>

        {/* Current APY */}
        <div className="group relative p-6 rounded-2xl bg-[#0a0e1a] border border-[#1e2433] hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/5">
          <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <TrendingUp className="w-6 h-6 text-cyan-500" />
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-slate-400 text-sm font-medium mb-1">Average ROS</div>
              <div className="text-2xl font-bold text-white tracking-tight">4.25%</div>
              <div className="text-xs text-slate-500 mt-2">Annualized yield</div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#1e2433] flex items-center justify-between">
            <span className="text-xs text-slate-400">Performance</span>
            <span className="text-xs font-medium text-cyan-400">Top 5%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
