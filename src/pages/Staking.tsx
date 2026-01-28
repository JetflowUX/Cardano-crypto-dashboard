import { StakingOverview } from '../components/StakingOverview';
import { StakingPoolsWidget } from '../components/StakingPoolsWidget';

export function Staking() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Staking Center</h2>
      <StakingOverview />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StakingPoolsWidget />
        {/* Placeholder for more staking content */}
        <div className="bg-white dark:bg-[#141824] rounded-xl p-5 border border-slate-200 dark:border-[#1e2433] shadow-lg transition-colors duration-300">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Staking History</h3>
          <div className="text-slate-500 text-sm text-center py-8">No recent staking activity</div>
        </div>
      </div>
    </div>
  );
}
