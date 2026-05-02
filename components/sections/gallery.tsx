import type { SiteData } from '@/lib/site-data'

export type GalleryVariant = 'grid' | 'strip'

export function Gallery({ data, variant }: { data: SiteData; variant: GalleryVariant }) {
  const items = data.content.gallery ?? []
  if (!items.length) return null
  const title = data.content.sectionCopy?.galleryTitle?.trim() || 'Selected frames'
  const eyebrow = data.content.sectionCopy?.galleryEyebrow?.trim()

  if (variant === 'strip') {
    return (
      <section className="py-16">
        <div className="px-6 md:px-12 mb-6">
          <div className="mx-auto max-w-6xl">
            {eyebrow ? (
              <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">{eyebrow}</p>
            ) : null}
            <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
          </div>
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 md:px-12">
          {items.map((g, i) => (
            <figure key={i} className="snap-start shrink-0 w-[70vw] max-w-[520px]">
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-[var(--color-surface)]">
                <img src={g.url} alt={g.alt || ''} className="h-full w-full object-cover" />
              </div>
              {g.caption ? (
                <figcaption className="mt-2 text-sm text-[var(--color-muted)]">{g.caption}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 font-display text-3xl md:text-5xl">{title}</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((g, i) => (
            <figure key={i} className="break-inside-avoid">
              <div className="aspect-square overflow-hidden rounded-md bg-[var(--color-surface)]">
                <img src={g.url} alt={g.alt || ''} className="h-full w-full object-cover" />
              </div>
              {g.caption ? (
                <figcaption className="mt-2 text-sm text-[var(--color-muted)]">{g.caption}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
