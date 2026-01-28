import React from 'react';
import { Star, MoreHorizontal, ArrowUp, ArrowDown } from 'lucide-react';
import { getCoinLogo } from '../utils/coinUtils';
interface Asset {
  id: number;
  rank: number;
  name: string;
  ticker: string;
  price: string;
  change: number;
  marketCap: string;
  isFavorite?: boolean;
  iconColor: string;
}
const assets: Asset[] = [
{
  id: 1,
  rank: 1,
  name: 'Bitcoin',
  ticker: 'BTC',
  price: '$55,666.87',
  change: 2.7,
  marketCap: '$98.6B',
  iconColor: 'bg-orange-500'
},
{
  id: 2,
  rank: 2,
  name: 'Ethereum',
  ticker: 'ETH',
  price: '$2,721.17',
  change: 1.9,
  marketCap: '$80.2B',
  iconColor: 'bg-purple-600'
},
{
  id: 3,
  rank: 3,
  name: 'Dogecoin',
  ticker: 'DOGE',
  price: '$0.2118',
  change: -5.2,
  marketCap: '$69.1B',
  iconColor: 'bg-yellow-500'
},
{
  id: 4,
  rank: 4,
  name: 'Tether',
  ticker: 'USDT',
  price: '$1.009',
  change: 1.3,
  marketCap: '$64.9B',
  iconColor: 'bg-teal-500'
},
{
  id: 5,
  rank: 5,
  name: 'Ripple',
  ticker: 'XRP',
  price: '$3.68',
  change: 2.3,
  marketCap: '$50.2B',
  iconColor: 'bg-gray-100'
},
{
  id: 6,
  rank: 6,
  name: 'USDC',
  ticker: 'USDC',
  price: '$0.9998',
  change: -1.8,
  marketCap: '$59.9B',
  iconColor: 'bg-blue-500'
},
{
  id: 7,
  rank: 7,
  name: 'BNB',
  ticker: 'BNB',
  price: '$612.68',
  change: 0.7,
  marketCap: '$47.1B',
  iconColor: 'bg-yellow-400'
},
{
  id: 8,
  rank: 8,
  name: 'Cardano',
  ticker: 'ADA',
  price: '$0.6849',
  change: -0.4,
  marketCap: '$41.1B',
  isFavorite: true,
  iconColor: 'bg-[#0033ad]'
},
{
  id: 9,
  rank: 9,
  name: 'TRON',
  ticker: 'TRX',
  price: '$0.2430',
  change: -2.0,
  marketCap: '$38.9B',
  iconColor: 'bg-red-500'
},
{
  id: 10,
  rank: 10,
  name: 'Chainlink',
  ticker: 'LINK',
  price: '$15.27',
  change: 0.8,
  marketCap: '$30.7B',
  iconColor: 'bg-blue-600'
},
{
  id: 11,
  rank: 11,
  name: 'Litecoin',
  ticker: 'LTC',
  price: '$114.32',
  change: -0.2,
  marketCap: '$29.9B',
  iconColor: 'bg-gray-400'
},
{
  id: 12,
  rank: 12,
  name: 'Dai',
  ticker: 'DAI',
  price: '$0.9997',
  change: 1.6,
  marketCap: '$22.8B',
  iconColor: 'bg-yellow-600'
},
{
  id: 13,
  rank: 13,
  name: 'Uniswap',
  ticker: 'UNI',
  price: '$8.80',
  change: 1.3,
  marketCap: '$16.2B',
  iconColor: 'bg-pink-500'
}];

export function WatchlistTable() {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-[#1e2433] bg-white dark:bg-[#0a0e1a] transition-colors duration-300">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-100 dark:bg-[#141824] text-xs font-medium text-slate-600 dark:text-slate-500 border-b border-slate-200 dark:border-[#1e2433]">
            <th className="px-6 py-4 w-16 text-center">#</th>
            <th className="px-6 py-4">Cryptocurrency</th>
            <th className="px-6 py-4 text-right">Price</th>
            <th className="px-6 py-4 text-right">Change</th>
            <th className="px-6 py-4 text-right">Market Cap</th>
            <th className="px-6 py-4 w-16"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-[#1e2433]">
          {assets.map((asset) =>
          <tr
            key={asset.id}
            className={`group transition-all duration-200 hover:bg-slate-100 dark:hover:bg-[#141824] hover:shadow-lg ${asset.ticker === 'ADA' ? 'bg-[#0033ad]/5 dark:bg-[#0033ad]/5' : ''}`}>

              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-2">
                  <Star
                  className={`w-4 h-4 cursor-pointer transition-colors ${asset.isFavorite ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600 hover:text-yellow-400'}`} />

                  <span className="text-slate-500 text-sm font-medium w-4">
                    {asset.rank}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  {getCoinLogo(asset.ticker) ? (
                    <img
                      src={getCoinLogo(asset.ticker)!}
                      alt={asset.name}
                      className="w-8 h-8 rounded-full shadow-lg"
                    />
                  ) : (
                    <div
                      className={`w-8 h-8 rounded-full ${asset.iconColor} flex items-center justify-center text-white font-bold text-[10px] shadow-lg`}>
                      {asset.ticker[0]}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#0033ad] transition-colors">
                      {asset.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      {asset.ticker}
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="text-sm font-medium text-slate-900 dark:text-slate-300">
                  {asset.price}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className={`inline-flex items-center gap-1 text-sm font-medium ${asset.change >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                  {asset.change >= 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {Math.abs(asset.change)}%
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="text-sm font-medium text-slate-900 dark:text-slate-300">
                  {asset.marketCap}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-3 py-1.5 text-xs font-medium text-white bg-[#0033ad] hover:bg-[#0044cc] rounded-lg transition-colors shadow-sm">
                    Trade
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium text-[#0033ad] dark:text-[#3b82f6] bg-[#0033ad]/10 dark:bg-[#3b82f6]/10 hover:bg-[#0033ad]/20 dark:hover:bg-[#3b82f6]/20 rounded-lg transition-colors">
                    Stake
                  </button>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>);
}
