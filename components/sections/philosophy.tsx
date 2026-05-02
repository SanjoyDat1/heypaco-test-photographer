import type { SiteData } from '@/lib/site-data'

export type PhilosophyVariant = 'pull-quote' | 'eyebrow-block'

export function Philosophy({ data, variant }: { data: SiteData; variant: PhilosophyVariant }) {
  const text = data.content.subheadline

  if (variant === 'pull-quote') {
    return (
      <section className="px-6 py-24 md:px-12">
        <blockquote className="mx-auto max-w-4xl">
          <p className="motif-quote font-display text-3xl italic leading-[1.3] md:text-5xl text-balance">
            {text}
          </p>
          <footer className="mt-6 text-sm uppercase tracking-widest text-[var(--color-muted)]">
            — {data.persona.name}
          </footer>
        </blockquote>
      </section>
    )
  }

  return (
    <section className="border-y border-[var(--color-border)] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">Philosophy</p>
        <p className="mt-4 font-display text-2xl leading-relaxed md:text-4xl text-balance">{text}</p>
      </div>
    </section>
  )
}
