import * as React from 'react'
import { cn } from '@/lib/utils'

export const Separator = ({
  className,
  orientation = 'horizontal',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { orientation?: 'horizontal' | 'vertical' }) => (
  <div
    role="separator"
    className={cn(
      'bg-[var(--color-border)]',
      orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
      className,
    )}
    {...props}
  />
)
