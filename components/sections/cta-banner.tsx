import type { SiteData } from '@/lib/site-data'
import { ContactCta } from '@/components/ui/contact-cta'

export type CtaBannerVariant = 'inline' | 'fullbleed'

export function CtaBanner({ data, variant }: { data: SiteData; variant: CtaBannerVariant }) {
  const { content } = data
  const headline = content.sectionCopy?.ctaHeadline?.trim() || 'Get in touch'
  const subline = content.sectionCopy?.ctaSubline?.trim() || 'Say hello — I reply within a day or two.'

  if (variant === 'fullbleed') {
    return (
      <section className="bg-[var(--color-fg)] px-6 py-24 md:px-12 md:py-32 text-[var(--color-bg)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-3xl md:text-5xl text-balance">
            {headline}
          </h2>
          <ContactCta variant="outline" className="border-[var(--color-bg)] text-[var(--color-bg)] hover:bg-[var(--color-bg)] hover:text-[var(--color-fg)]">{content.ctaText}</ContactCta>
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 border-t border-[var(--color-border)] pt-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl md:text-3xl">{headline}</h2>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {subline}
          </p>
        </div>
        <ContactCta>{content.ctaText} →</ContactCta>
      </div>
    </section>
  )
}
