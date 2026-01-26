import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export function Settings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
      <div className="bg-[#141824] rounded-xl p-6 border border-[#1e2433] shadow-lg space-y-6">
        
        <div className="flex items-center justify-between py-4 border-b border-[#1e2433]">
           <div>
             <h3 className="text-sm font-semibold text-white">Appearance</h3>
             <p className="text-xs text-slate-500">Customize the look and feel of the dashboard</p>
           </div>
           <ThemeToggle />
        </div>

        <div className="flex items-center justify-between py-4 border-b border-[#1e2433]">
           <div>
             <h3 className="text-sm font-semibold text-white">Notifications</h3>
             <p className="text-xs text-slate-500">Manage your alert preferences</p>
           </div>
           <button className="text-xs text-[#0033ad] hover:underline">Configure</button>
        </div>

        <div className="flex items-center justify-between py-4">
           <div>
             <h3 className="text-sm font-semibold text-white">Security</h3>
             <p className="text-xs text-slate-500">Manage connected wallets and permissions</p>
           </div>
           <button className="text-xs text-[#0033ad] hover:underline">Manage</button>
        </div>

      </div>
    </div>
  );
}
