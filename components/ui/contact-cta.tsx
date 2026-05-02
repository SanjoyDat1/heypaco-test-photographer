'use client'

import * as React from 'react'
import { siteData } from '@/lib/site-data'

function decodeEmail(enc: string | null | undefined): string | null {
  if (!enc) return null
  try {
    const raw = atob(enc)
    let out = ''
    for (let i = 0; i < raw.length; i++) {
      out += String.fromCharCode(raw.charCodeAt(i) - 7)
    }
    return out
  } catch {
    return null
  }
}

export function ContactCta({
  children,
  className,
  variant = 'primary',
  size = 'lg',
}: {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}) {
  const [open, setOpen] = React.useState(false)
  const lastClick = React.useRef(0)

  const handleOpen = () => {
    const now = Date.now()
    if (now - lastClick.current < 500) return
    lastClick.current = now
    setOpen(true)
  }

  const base =
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2'
  const sizes: Record<string, string> = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-11 px-5 text-sm',
    lg: 'h-14 px-7 text-base',
  }
  const variants: Record<string, string> = {
    primary: 'bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-primary-dark)]',
    outline: 'border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-surface)]',
    ghost: 'hover:bg-[var(--color-surface)]',
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={(className ? className + ' ' : '') + base + ' ' + sizes[size] + ' ' + variants[variant]}
      >
        {children}
      </button>
      {open ? <ContactModal onClose={() => setOpen(false)} /> : null}
    </>
  )
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = React.useState<string | null>(null)
  const [copied, setCopied] = React.useState(false)
  const dialogRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setEmail(decodeEmail(siteData.content.ctaEmailEnc ?? null))
  }, [])

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const copyEmail = async () => {
    if (!email) return
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* noop */
    }
  }

  const socialLinks = siteData.content.socialLinks ?? []
  const { persona } = siteData

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-md rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md p-1.5 text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
          Let&rsquo;s collaborate
        </p>
        <h2
          id="contact-modal-title"
          className="mt-2 font-display text-2xl md:text-3xl text-[var(--color-fg)]"
        >
          Reach out to {persona.firstName}
        </h2>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Pick whichever channel suits you best. I reply within a day or two.
        </p>

        <div style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, overflow: 'hidden' }} aria-hidden>
          <label>
            Your website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="mt-6 space-y-3">
          {email ? (
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                Email
              </p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={'mailto:' + email}
                  rel="noopener noreferrer"
                  className="flex-1 truncate text-base font-medium text-[var(--color-fg)] hover:text-[var(--color-primary)]"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="shrink-0 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-xs font-medium text-[var(--color-fg)] hover:bg-[var(--color-surface)]"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          ) : null}

          {socialLinks.length > 0 ? (
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                Elsewhere
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {socialLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-[var(--color-fg)] hover:bg-[var(--color-bg)]"
                    >
                      <span>{l.label}</span>
                      <span aria-hidden className="text-[var(--color-muted)]">
                        &rarr;
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <p className="mt-5 text-[11px] text-[var(--color-muted)]">
          Contact details are protected against automated scrapers.
        </p>
      </div>
    </div>
  )
}
