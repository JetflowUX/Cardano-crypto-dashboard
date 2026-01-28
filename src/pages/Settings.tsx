import { ThemeToggle } from '../components/ThemeToggle';

export function Settings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Settings</h2>
      <div className="bg-white dark:bg-[#141824] rounded-xl p-6 border border-slate-200 dark:border-[#1e2433] shadow-lg space-y-6 transition-colors duration-300">

        <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-[#1e2433]">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Appearance</h3>
            <p className="text-xs text-slate-500">Customize the look and feel of the dashboard</p>
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-[#1e2433]">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Notifications</h3>
            <p className="text-xs text-slate-500">Manage your alert preferences</p>
          </div>
          <button className="text-xs text-[#0033ad] hover:underline transition-colors duration-300">Configure</button>
        </div>

        <div className="flex items-center justify-between py-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Security</h3>
            <p className="text-xs text-slate-500">Manage connected wallets and permissions</p>
          </div>
          <button className="text-xs text-[#0033ad] hover:underline transition-colors duration-300">Manage</button>
        </div>

      </div>
    </div>
  );
}
