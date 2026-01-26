import React from 'react';
import { ArrowLeftRight } from 'lucide-react';

export function Trading() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">Trading Interface</h2>
      <div className="bg-[#141824] rounded-xl p-8 border border-[#1e2433] shadow-lg flex flex-col items-center justify-center min-h-[400px]">
        <ArrowLeftRight className="w-16 h-16 text-[#0033ad] mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">DEX Aggregator</h3>
        <p className="text-slate-400 text-center max-w-md">
          Connect your wallet to swap tokens across the best liquidity pools on Cardano.
        </p>
        <button className="mt-6 px-6 py-2 bg-[#0033ad] hover:bg-[#0044cc] text-white rounded-lg font-medium transition-colors">
          Connect Wallet to Trade
        </button>
      </div>
    </div>
  );
}
