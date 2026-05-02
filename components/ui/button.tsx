import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-primary-dark)]',
        outline:
          'border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-surface)]',
        ghost: 'hover:bg-[var(--color-surface)]',
        link: 'text-[var(--color-primary)] underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-11 px-5',
        lg: 'h-14 px-7 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    /**
     * When true, the button renders its single child as the root element
     * (cloning it with the button's classes + props) instead of emitting
     * its own <button>. Same contract as shadcn's `asChild` — useful for
     * wrapping <a> tags so they get button styling without nesting.
     */
    asChild?: boolean
  }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className)
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{
        className?: string
      }>
      return React.cloneElement(child, {
        ...props,
        ref,
        className: cn(classes, child.props.className),
      } as React.HTMLAttributes<HTMLElement> & { ref: typeof ref })
    }
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  },
)
Button.displayName = 'Button'
