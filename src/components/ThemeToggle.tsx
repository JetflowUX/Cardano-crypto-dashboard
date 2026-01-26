import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center p-2 rounded-lg transition-all duration-300 hover:bg-white/10 text-slate-400 hover:text-white"
      aria-label="Toggle theme">

      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-full h-full transition-all duration-300 transform ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`} />

        <Moon
          className={`absolute inset-0 w-full h-full transition-all duration-300 transform ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`} />

      </div>
    </button>);

}