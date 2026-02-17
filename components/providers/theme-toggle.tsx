'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(next)}
      className="focus-ring inline-flex h-11 min-w-11 items-center justify-center rounded-md border border-border bg-surface px-3 text-text"
      type="button"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
