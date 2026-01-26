import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Wallet, CreditCard, Bitcoin, DollarSign, TrendingUp, Activity, Wifi } from 'lucide-react';
import { WatchlistTable } from '../components/WatchlistTable';

// Mock Data for Chart
const data = [
  { name: '3Mar', uv: 4000 },
  { name: '4Mar', uv: 3000 },
  { name: '5Mar', uv: 2000 },
  { name: '6Mar', uv: 2780 },
  { name: '7Mar', uv: 1890 },
  { name: '8Mar', uv: 2390 },
  { name: '9Mar', uv: 3490 },
  { name: '10Mar', uv: 2000 },
  { name: '11Mar', uv: 4000 },
];

const transactions = [
  { id: 1, name: 'Bitcoin', type: 'Buy', amount: '$5,642', date: 'Today, 15:20 PM', icon: Bitcoin, color: 'bg-orange-500' },
  { id: 2, name: 'Ethereum', type: 'Received', amount: '+0.245 ETH', date: 'Today, 10:20 AM', icon: Activity, color: 'bg-blue-500' },
  { id: 3, name: 'Polkadot', type: 'Buy', amount: '$3,100', date: 'Today, 9:20 AM', icon:  DollarSign, color: 'bg-pink-500' },
  { id: 4, name: 'Cardano', type: 'Received', amount: '$3,612', date: 'Yesterday, 17:20 PM', icon: Wallet, color: 'bg-blue-600' },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="xl:col-span-8 space-y-8">
          
          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Total Balance */}
            <div className="bg-[#141824] p-6 rounded-2xl border border-[#1e2433] relative overflow-hidden group hover:border-[#0033ad]/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-[#10b981]" />
                </div>
                <span className="text-slate-400 text-sm font-medium">Total Balance</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">$176,026.3</h3>
              <div className="h-1 w-full bg-[#1e2433] rounded-full overflow-hidden">
                <div className="h-full bg-[#10b981] w-[70%]" />
              </div>
            </div>

            {/* Card 2: Trading Account */}
            <div className="bg-[#141824] p-6 rounded-2xl border border-[#1e2433] relative overflow-hidden group hover:border-[#3b82f6]/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <span className="text-slate-400 text-sm font-medium">Trading Account</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">$100,002.9</h3>
              <div className="h-1 w-full bg-[#1e2433] rounded-full overflow-hidden">
                <div className="h-full bg-[#3b82f6] w-[50%]" />
              </div>
            </div>

            {/* Card 3: Margin Account */}
            <div className="bg-[#141824] p-6 rounded-2xl border border-[#1e2433] relative overflow-hidden group hover:border-[#f59e0b]/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <span className="text-slate-400 text-sm font-medium">Margin Account</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">$12,052.7</h3>
              <div className="h-1 w-full bg-[#1e2433] rounded-full overflow-hidden">
                <div className="h-full bg-[#f59e0b] w-[30%]" />
              </div>
            </div>
          </div>

          {/* Trade Statistics Chart */}
          <div className="bg-[#141824] p-6 rounded-2xl border border-[#1e2433]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-white">Trade Statistics</h3>
              <div className="flex gap-2">
                {['1H', '1D', '1W', '1M', '1Y'].map((period) => (
                  <button key={period} className={`px-3 py-1 text-xs rounded-lg ${period === '1W' ? 'bg-[#0033ad] text-white' : 'text-slate-400 hover:bg-[#1e2433]'}`}>
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e2433" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                  <YAxis stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#141824', border: '1px solid #1e2433', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="uv" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Watchlist Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-lg font-bold text-white">Watchlist</h3>
              <button className="text-sm text-[#0033ad] font-medium hover:text-[#0044cc]">View All</button>
            </div>
            <WatchlistTable />
          </div>

        </div>

        {/* Right Column (Widgets) */}
        <div className="xl:col-span-4 space-y-8">
          
          {/* Credit Cards Section */}
          <div className="space-y-4">
            {/* Red/Pink Card */}
            <div className="w-full aspect-[1.586] rounded-2xl bg-gradient-to-br from-[#ff4b1f] to-[#ff9068] p-6 relative overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="relative z-10 flex flex-col justify-between h-full text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs opacity-80 mb-1">Current Balance</p>
                    <h3 className="text-2xl font-bold">$4,570,80</h3>
                  </div>
                  <CreditCard className="w-8 h-8 opacity-80" />
                </div>
                <div className="flex justify-between items-end">
                  <p className="font-mono opacity-80 text-sm">5294 **** **** 12/24</p>
                  <div className="flex flex-col items-end">
                    <div className="w-8 h-5 bg-white/20 rounded-sm mb-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Purple/Blue Card */}
            <div className="w-full aspect-[1.586] rounded-2xl bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] p-6 relative overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="relative z-10 flex flex-col justify-between h-full text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs opacity-80 mb-1">Current Balance</p>
                    <h3 className="text-2xl font-bold">$5,750,20</h3>
                  </div>
                  <CreditCard className="w-8 h-8 opacity-80" />
                </div>
                <div className="flex justify-between items-end">
                  <p className="font-mono opacity-80 text-sm">5282 **** **** 09/25</p>
                  <div className="flex flex-col items-end">
                    <div className="w-8 h-5 bg-white/20 rounded-sm mb-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Last Transactions */}
          <div className="bg-[#141824] p-6 rounded-2xl border border-[#1e2433]">
            <h3 className="text-lg font-bold text-white mb-6">Last Transaction</h3>
            <div className="space-y-6">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full ${tx.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <tx.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{tx.name}</h4>
                      <p className="text-xs text-slate-500">{tx.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${tx.amount.startsWith('+') ? 'text-[#10b981]' : 'text-white'}`}>
                      {tx.amount}
                    </p>
                    <p className="text-xs text-slate-500">{tx.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 rounded-xl border border-[#1e2433] text-sm font-medium text-slate-400 hover:text-white hover:bg-[#1e2433] transition-colors">
              View All Transactions
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}