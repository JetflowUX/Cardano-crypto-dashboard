import React from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import { getCoinLogo } from '../utils/coinUtils';
const trendingAssets = [
{
  id: 1,
  name: 'Tether',
  symbol: 'USDT',
  price: '$1.00',
  change: '+40.7%',
  views: '45K'
},
{
  id: 2,
  name: 'Dogecoin',
  symbol: 'DOGE',
  price: '$0.21',
  change: '+24.3%',
  views: '32K'
},
{
  id: 3,
  name: 'Bitcoin',
  symbol: 'BTC',
  price: '$55,666',
  change: '+14.0%',
  views: '28K'
}];

export function TrendingWidget() {
  return (
    <div className="bg-[#141824] rounded-xl p-5 border border-[#1e2433] shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-300">Trending</h3>
        <span className="text-xs text-slate-500">24h views</span>
      </div>

      <div className="space-y-3">
        {trendingAssets.map((asset) =>
        <div
          key={asset.id}
          className="group flex items-center justify-between p-3 rounded-lg bg-[#0a0e1a]/50 border border-[#1e2433] hover:border-[#0033ad]/50 hover:bg-[#0033ad]/5 transition-all cursor-pointer">

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
                <div className="text-sm font-medium text-white group-hover:text-[#0033ad] transition-colors">
                  {asset.name}
                </div>
                <div className="text-xs text-slate-500">{asset.price}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-[#10b981] flex items-center justify-end gap-1">
                {asset.change}
                <ArrowUpRight className="w-3 h-3" />
              </div>
              <div className="text-[10px] text-slate-600">
                {asset.views} views
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);

}