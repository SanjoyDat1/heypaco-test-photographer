import type { SiteData } from '@/lib/site-data'

export function Footer({ data }: { data: SiteData }) {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg">{data.persona.name}</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{data.content.footerTagline}</p>
        </div>
        <ul className="flex flex-wrap gap-5 text-sm">
          {data.content.socialLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener" className="text-[var(--color-muted)] hover:text-[var(--color-fg)]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-[var(--color-muted)]">
        © {new Date().getFullYear()} {data.persona.name}. All rights reserved.
      </p>
    </footer>
  )
}
