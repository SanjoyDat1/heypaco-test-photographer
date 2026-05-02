'use client'
import * as React from 'react'

/**
 * Floating "Made with HeyPACO" watermark. Only rendered on free-tier sites;
 * Pro users can hide via the dashboard and this component will not be
 * mounted in their build.
 */
export function HeypacoBadge() {
  return (
    <a
      href="https://heypaco.com/?ref=sites"
      target="_blank"
      rel="noopener"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-1.5 text-xs font-medium text-[var(--color-fg)] shadow-sm backdrop-blur transition hover:translate-y-[-1px] hover:shadow"
      aria-label="Made with HeyPACO"
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" aria-hidden />
      Made with <span className="font-semibold">HeyPACO</span>
    </a>
  )
}
