'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const next = isDark ? 'light' : 'dark';

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(next)}
      className={cn(
        'focus-ring inline-flex h-11 min-w-11 items-center justify-center rounded-md border border-border bg-surface px-3 text-text',
        className,
      )}
      type="button"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
