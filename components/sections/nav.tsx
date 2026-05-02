import type { SiteData } from '@/lib/site-data'
import { ContactCta } from '@/components/ui/contact-cta'

export function Nav({ data }: { data: SiteData }) {
  const { persona } = data
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="/" className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" aria-hidden />
          <span className="font-display text-base font-semibold">{persona.name}</span>
        </a>
        <ul className="flex items-center gap-6 text-sm">
          <li><a href="/" className="hover:text-[var(--color-primary)]">Home</a></li>
          <li><a href="/work" className="hover:text-[var(--color-primary)]">Work</a></li>
          <li><a href="/about" className="hover:text-[var(--color-primary)]">About</a></li>
          <li>
            <ContactCta size="sm" className="inline-flex items-center rounded-md bg-[var(--color-primary)] px-3 py-1.5 text-xs font-medium text-[var(--color-bg)] hover:bg-[var(--color-primary-dark)]">{data.content.ctaText}</ContactCta>
          </li>
        </ul>
      </nav>
    </header>
  )
}
