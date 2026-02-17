import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'border-primary bg-primary px-4 py-2 text-white hover:bg-[var(--color-primary-strong)]',
        secondary: 'border-primary bg-transparent px-4 py-2 text-primary hover:bg-surface-muted',
        ghost: 'border-transparent bg-transparent px-3 py-2 text-text hover:bg-surface-muted',
        danger: 'border-error bg-error px-4 py-2 text-white hover:opacity-90',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}
