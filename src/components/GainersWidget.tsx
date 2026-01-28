import React from 'react';
import { ArrowUp } from 'lucide-react';
import { getCoinLogo } from '../utils/coinUtils';
const gainers = [
{
  id: 1,
  name: 'Bitcoin',
  symbol: 'BTC',
  price: '$55,666',
  change: '+2.64%'
},
{
  id: 2,
  name: 'Ethereum',
  symbol: 'ETH',
  price: '$2,721',
  change: '+2.30%'
},
{
  id: 3,
  name: 'Uniswap',
  symbol: 'UNI',
  price: '$8.80',
  change: '+1.80%'
}];

export function GainersWidget() {
  return (
    <div className="bg-white dark:bg-[#141824] rounded-xl p-5 border border-slate-200 dark:border-[#1e2433] shadow-lg transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Biggest Gainers
        </h3>
        <span className="text-xs text-slate-600 dark:text-slate-500">Top 3</span>
      </div>

      <div className="space-y-3">
        {gainers.map((asset) =>
        <div
          key={asset.id}
          className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-[#0a0e1a]/50 border border-slate-200 dark:border-[#1e2433]">

            <div className="flex items-center gap-3">
              {getCoinLogo(asset.symbol) ? (
                <img
                  src={getCoinLogo(asset.symbol)!}
                  alt={asset.name}
                  className="w-8 h-8 rounded-full shadow-lg"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                  {asset.symbol[0]}
                </div>
              )}
              <div>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  {asset.name}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-500">Current value</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-[#10b981]">
                {asset.change}
              </div>
              <div className="text-[10px] text-slate-700 dark:text-slate-600">Last 24h</div>
            </div>
          </div>
        )}
      </div>
    </div>);

}
