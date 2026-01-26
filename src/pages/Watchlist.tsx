import React from 'react';
import { WatchlistHeader } from '../components/WatchlistHeader';
import { WatchlistTable } from '../components/WatchlistTable';

export function Watchlist() {
  return (
    <div className="space-y-6">
      <WatchlistHeader />
      <WatchlistTable />
    </div>
  );
}
