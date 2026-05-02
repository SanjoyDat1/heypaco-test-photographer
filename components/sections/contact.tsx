import type { SiteData } from '@/lib/site-data'
import { Button } from '@/components/ui/button'
import { ContactCta } from '@/components/ui/contact-cta'

export type ContactVariant = 'form' | 'plain' | 'card'

export function Contact({ data, variant }: { data: SiteData; variant: ContactVariant }) {
  const { content, ctaHref } = data

  if (variant === 'card') {
    return (
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-3xl rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-14">
          <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">Contact</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl">{content.ctaText}.</h2>
          <p className="mt-4 text-base text-[var(--color-muted)]">
            Pick the channel that suits you — I read everything.
          </p>
          <ContactCta className="mt-8">Start a conversation →</ContactCta>
        </div>
      </section>
    )
  }

  if (variant === 'form') {
    return (
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">Contact</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl">{content.ctaText}.</h2>
          <form
            action={ctaHref}
            method="get"
            className="mt-8 flex flex-col gap-4"
          >
            <label className="text-sm">
              Your name
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm"
              />
            </label>
            <label className="text-sm">
              Your email
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm"
              />
            </label>
            <label className="text-sm">
              What are you working on?
              <textarea
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm"
              />
            </label>
            <Button type="submit" size="lg" className="mt-2 w-fit">
              Send →
            </Button>
          </form>
          <p className="mt-4 text-xs text-[var(--color-muted)]">
            Form submits open your email client — you&apos;re in control of the reply.
          </p>
        </div>
      </section>
    )
  }

  // plain
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">Contact</p>
        <h2 className="mt-2 font-display text-4xl md:text-5xl">{content.ctaText}.</h2>
        <p className="mt-4 text-lg text-[var(--color-muted)] text-pretty">
          The best way to reach me is to tap the button below or pick one of the channels listed — I&rsquo;ll write back personally.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ContactCta>{content.ctaText}</ContactCta>
          {data.content.socialLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
