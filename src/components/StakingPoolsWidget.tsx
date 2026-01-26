import React from 'react';
import { Layers } from 'lucide-react';
const pools = [
{
  id: 1,
  name: 'ADAFrog',
  ticker: 'FROG',
  apy: '3.8%',
  saturation: '85%'
},
{
  id: 2,
  name: 'Bloom',
  ticker: 'BLOOM',
  apy: '3.5%',
  saturation: '92%'
},
{
  id: 3,
  name: 'CardanoCafe',
  ticker: 'CAFE',
  apy: '3.2%',
  saturation: '45%'
}];

export function StakingPoolsWidget() {
  return (
    <div className="bg-[#141824] rounded-xl p-5 border border-[#1e2433] shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-300">
          Top Staking Pools
        </h3>
        <button className="text-xs text-[#0033ad] hover:text-[#0055ff]">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {pools.map((pool) =>
        <div
          key={pool.id}
          className="flex items-center justify-between p-3 rounded-lg bg-[#0a0e1a]/50 border border-[#1e2433] hover:border-[#0033ad]/30 transition-colors">

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0033ad]/10 flex items-center justify-center text-[#0033ad]">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-white flex items-center gap-2">
                  {pool.name}
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    {pool.ticker}
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  Sat: {pool.saturation}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-[#10b981]">{pool.apy}</div>
              <div className="text-[10px] text-slate-600">APY</div>
            </div>
          </div>
        )}
      </div>

      <button className="w-full mt-4 py-2 rounded-lg bg-[#0033ad]/10 text-[#0033ad] text-xs font-medium hover:bg-[#0033ad]/20 transition-colors">
        Stake ADA
      </button>
    </div>);

}