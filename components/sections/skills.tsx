import type { SiteData } from '@/lib/site-data'
import { Badge } from '@/components/ui/badge'

export type SkillsVariant = 'category-list' | 'chip-cloud'

export function Skills({ data, variant }: { data: SiteData; variant: SkillsVariant }) {
  const { skills } = data.content
  if (!skills.length) return null

  if (variant === 'chip-cloud') {
    const all = skills.flatMap((g) => g.items)
    return (
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">Toolkit</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">What I reach for.</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {all.map((s) => (
              <Badge key={s} variant="outline" className="px-3 py-1 text-sm">
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">Toolkit</p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">What I reach for.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.category} className="border-t border-[var(--color-border)] pt-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                {g.category}
              </h3>
              <ul className="mt-4 space-y-1 text-base">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
