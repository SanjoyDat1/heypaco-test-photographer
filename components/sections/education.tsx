import type { SiteData } from '@/lib/site-data'

export type EducationVariant = 'list'

export function Education({ data, variant: _variant }: { data: SiteData; variant: EducationVariant }) {
  const entries = data.content.education ?? []
  if (entries.length === 0) return null
  const eyebrow = 'Education'
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">Where I studied</h2>
        <ul className="mt-10 divide-y divide-[var(--color-border)]">
          {entries.map((e, i) => (
            <li key={`${e.school}-${i}`} className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline">
              <div className="md:col-span-7">
                <p className="font-display text-xl">{e.school}</p>
                {(e.degree || e.field) && (
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {[e.degree, e.field].filter(Boolean).join(' · ')}
                  </p>
                )}
              </div>
              {e.dates && (
                <p className="text-sm text-[var(--color-muted)] md:col-span-5 md:text-right">{e.dates}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
