import * as React from 'react'
import { cn } from '@/lib/utils'

/** Small labeled link used in the footer and nav. */
export function IconLink({
  href,
  label,
  className,
  children,
}: {
  href: string
  label: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]',
        className,
      )}
    >
      {children ?? label}
    </a>
  )
}
