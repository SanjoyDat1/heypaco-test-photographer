import type { SiteData } from '@/lib/site-data'

export type AboutVariant = 'longform' | 'timeline' | 'split'

export function About({ data, variant }: { data: SiteData; variant: AboutVariant }) {
  const { content, persona } = data
  const paragraphs = content.bio.split(/\n\s*\n/).filter(Boolean)

  const aboutEyebrow = content.sectionCopy?.aboutEyebrow?.trim() || 'About'
  const aboutTitle = content.sectionCopy?.aboutTitle?.trim()

  if (variant === 'split') {
    return (
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">{aboutEyebrow}</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">{aboutTitle || persona.firstName}</h2>
            {content.location ? (
              <p className="mt-4 text-sm text-[var(--color-muted)]">Based in {content.location}</p>
            ) : null}
          </div>
          <div className="md:col-span-2 space-y-5 text-lg text-[var(--color-fg)]/90 text-pretty">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'timeline') {
    return (
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">{aboutEyebrow}</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">{aboutTitle || `Who ${persona.firstName} is`}</h2>
          <ol className="mt-12 space-y-8 border-l border-[var(--color-border)] pl-8">
            {paragraphs.map((p, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-10 top-2 inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <p className="text-lg text-[var(--color-fg)]/90 text-pretty">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    )
  }

  // longform
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">{aboutEyebrow}</p>
        <h2 className="mt-2 font-display text-4xl md:text-6xl">{aboutTitle || persona.firstName}</h2>
        <div className="mt-10 space-y-6 text-lg text-[var(--color-fg)]/90 text-pretty leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
