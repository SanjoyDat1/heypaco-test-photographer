import type { SiteData } from '@/lib/site-data'
import { Badge } from '@/components/ui/badge'

export type ProjectsVariant = 'masonry' | 'list' | 'carousel' | 'editorial-index'

export function Projects({ data, variant, limit }: { data: SiteData; variant: ProjectsVariant; limit?: number }) {
  const projects = typeof limit === 'number' ? data.content.projects.slice(0, limit) : data.content.projects

  if (!projects.length) {
    return (
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl">More work is on the way.</h2>
          <p className="mt-4 text-[var(--color-muted)]">Check back soon.</p>
        </div>
      </section>
    )
  }

  if (variant === 'list') {
    return (
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <header className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-5xl">
              {data.content.sectionCopy?.workTitle?.trim() || 'Selected work'}
            </h2>
            <a href="/work" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]">
              All projects →
            </a>
          </header>
          <ul className="divide-y divide-[var(--color-border)]">
            {projects.map((p) => (
              <li key={p.title} className="folio-lift grid grid-cols-12 items-start gap-6 py-8">
                <div className="col-span-12 md:col-span-8">
                  <h3 className="font-display text-2xl md:text-3xl">
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener" className="hover:text-[var(--color-primary)]">
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="mt-2 text-base text-[var(--color-muted)] text-pretty">
                    {p.description}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 flex flex-wrap gap-2 md:justify-end md:pt-3">
                  {p.tags.slice(0, 4).map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  if (variant === 'editorial-index') {
    return (
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <header className="mb-16">
            <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">
              {data.content.sectionCopy?.workEyebrow?.trim() || 'Index of work'}
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">
              {data.content.sectionCopy?.workTitle?.trim() || 'Selected work'}
            </h2>
          </header>
          <div className="space-y-16">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="folio-lift grid grid-cols-12 gap-6 border-t border-[var(--color-border)] pt-8"
              >
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-display text-3xl italic md:text-4xl">
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener" className="hover:text-[var(--color-primary)]">
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  {p.impact ? (
                    <p className="mt-3 font-mono text-sm text-[var(--color-primary)]">
                      {p.impact}
                    </p>
                  ) : null}
                </div>
                <div className="col-span-12 md:col-span-8">
                  {p.mediaUrl ? (
                    <div className="mb-6 aspect-[16/9] overflow-hidden rounded-md bg-[var(--color-surface)]">
                      <img
                        src={p.mediaUrl}
                        alt={p.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <p className="text-lg text-[var(--color-fg)]/90 text-pretty">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'carousel') {
    return (
      <section className="py-20">
        <div className="px-6 md:px-12">
          <header className="mb-10 mx-auto max-w-6xl">
            <h2 className="font-display text-3xl md:text-5xl">
              {data.content.sectionCopy?.workTitle?.trim() || 'Recent work'}
            </h2>
          </header>
        </div>
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 md:px-12">
          {projects.map((p) => (
            <article
              key={p.title}
              className="folio-lift snap-start shrink-0 w-[85vw] max-w-[480px] rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              {p.mediaUrl ? (
                <div className="mb-4 aspect-[4/3] overflow-hidden rounded-md">
                  <img src={p.mediaUrl} alt={p.title} className="h-full w-full object-cover" />
                </div>
              ) : null}
              <h3 className="font-display text-2xl">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener" className="hover:text-[var(--color-primary)]">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </div>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--color-primary)] hover:underline">
                  View project →
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    )
  }

  // Default → masonry
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl md:text-5xl">
            {data.content.sectionCopy?.workTitle?.trim() || 'Recent work'}
          </h2>
          <a href="/work" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]">
            All projects →
          </a>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="folio-lift group flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:shadow-md"
            >
              {p.mediaUrl ? (
                <div className="mb-4 aspect-[4/3] overflow-hidden rounded-md">
                  <img src={p.mediaUrl} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              ) : (
                <div className="mb-4 flex aspect-[4/3] items-end justify-start rounded-md p-4" style={{ background: 'color-mix(in srgb, var(--color-primary) 12%, var(--color-surface))' }}>
                  <span className="font-display text-xl text-[var(--color-fg)]">
                    {p.title}
                  </span>
                </div>
              )}
              <h3 className="font-display text-xl">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)] text-pretty">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </div>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--color-primary)] hover:underline"
                >
                  {/^https?:\/\/(www\.)?github\.com\//i.test(p.link)
                    ? 'View repo on GitHub →'
                    : 'View project →'}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
