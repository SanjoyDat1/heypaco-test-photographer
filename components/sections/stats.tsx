import type { SiteData } from '@/lib/site-data'

export type StatsVariant = 'row' | 'grid'

export function Stats({ data, variant }: { data: SiteData; variant: StatsVariant }) {
  const { stats, sectionCopy } = data.content
  if (!stats.length) return null
  const eyebrow = sectionCopy?.statsEyebrow?.trim()
  const title = sectionCopy?.statsTitle?.trim()

  if (variant === 'grid') {
    return (
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          {eyebrow || title ? (
            <header className="mb-10">
              {eyebrow ? (
                <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">{eyebrow}</p>
              ) : null}
              {title ? (
                <h2 className="mt-2 font-display text-3xl md:text-5xl">{title}</h2>
              ) : null}
            </header>
          ) : null}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-[var(--color-border)] pt-4">
                <div className="font-display text-3xl md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-[var(--color-muted)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="border-y border-[var(--color-border)] px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex items-baseline gap-3">
            <span className="font-display text-3xl">{s.value}</span>
            <span className="text-sm uppercase tracking-widest text-[var(--color-muted)]">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
