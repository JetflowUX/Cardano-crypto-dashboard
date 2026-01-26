import React from 'react';
export function SentimentWidget() {
  return (
    <div className="bg-[#141824] rounded-xl p-5 border border-[#1e2433] shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-300">
          Market Sentiment
        </h3>
        <div className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#10b981]/10 text-[#10b981]">
          Greed
        </div>
      </div>

      <div className="relative flex items-center justify-center py-2">
        {/* Gauge Background */}
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-[#ef4444] via-yellow-500 to-[#10b981]" />
        </div>

        {/* Indicator */}
        <div
          className="absolute w-4 h-4 bg-white border-2 border-[#141824] rounded-full shadow-lg transform -translate-y-1/2 top-1/2"
          style={{
            left: '75%'
          }} />

      </div>

      <div className="flex justify-between mt-2 text-xs text-slate-500">
        <span>Fear</span>
        <span className="text-white font-bold text-lg">75</span>
        <span>Greed</span>
      </div>

      <p className="text-[10px] text-slate-500 text-center mt-2">
        Cardano ecosystem sentiment is bullish today.
      </p>
    </div>);

}