import * as React from 'react'
import { cn } from '@/lib/utils'

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'outline' | 'accent'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const base =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors'
  const styles: Record<NonNullable<BadgeProps['variant']>, string> = {
    default: 'bg-[var(--color-surface)] text-[var(--color-fg)] border border-[var(--color-border)]',
    outline: 'border border-[var(--color-border)] text-[var(--color-muted)]',
    accent: 'bg-[var(--color-primary)] text-[var(--color-bg)]',
  }
  return <span className={cn(base, styles[variant], className)} {...props} />
}
