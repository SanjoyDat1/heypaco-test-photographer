import type { SiteData } from '@/lib/site-data'
import { Button } from '@/components/ui/button'
import { ContactCta } from '@/components/ui/contact-cta'

export type HeroVariant =
  | 'editorial-serif'
  | 'brutalist-mono'
  | 'cinematic-fullbleed'
  | 'asymmetric-grid'
  | 'typographic-only'
  | 'split-duo'
  | 'centered-quiet'
  | 'manifesto'
  | 'terminal'
  | 'card-stack'
  | 'gallery-grid'
  | 'big-number-stats'

function Headline({ text, tone }: { text: string; tone?: string }) {
  const t = (tone || '').toLowerCase()
  // Minimal / technical / dark_tech: render flat. No emphasis rule on every
  // headline — let the typeface and color system carry the weight.
  if (t === 'minimal' || t === 'technical' || t === 'dark_tech' || t === 'dark-tech') {
    return <>{text}</>
  }
  const words = text.split(/\s+/)
  if (words.length < 3) {
    return <>{text}</>
  }
  const mid = Math.max(2, Math.floor(words.length * 0.6))
  const first = words.slice(0, mid).join(' ')
  const rest = words.slice(mid).join(' ')
  // Bold: split, but the accent is a color change only — not italic.
  if (t === 'bold') {
    return (
      <span>
        {first}{' '}
        <span className="text-[var(--color-primary)]">{rest}</span>
      </span>
    )
  }
  // Warm / formal / editorial: keep the italic tail that gives serif vibes
  // their characteristic finish.
  return (
    <span>
      {first}{' '}
      <em className="folio-drift italic text-[var(--color-primary)] motif-underline">{rest}</em>
    </span>
  )
}

export function Hero({ data, variant: requestedVariant }: { data: SiteData; variant: HeroVariant }) {
  const { content, persona } = data
  // Guardrail: the 'terminal' variant is only legible for a dark_tech voice.
  // Any other persona who lands on it gets bumped to editorial-serif (the
  // default branch) so the prompt literally has to say "dark tech" to opt
  // into that hero shape.
  const tone = (persona.tone ?? '').toLowerCase()
  const variant: HeroVariant =
    requestedVariant === 'terminal' && tone !== 'dark_tech' && tone !== 'dark-tech'
      ? 'editorial-serif'
      : requestedVariant

  if (variant === 'brutalist-mono' || variant === 'terminal') {
    return (
      <section className="border-b-2 border-[var(--color-fg)] px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
            {variant === 'terminal' ? (
              <>
                <span className="text-[var(--color-primary)]">$</span> whoami · {persona.name}
              </>
            ) : (
              <>
                {persona.name} · {data.role}
              </>
            )}
          </p>
          <h1 className="font-mono text-4xl font-bold uppercase leading-[1.1] tracking-tight md:text-7xl">
            {content.headline}
          </h1>
          <p className="mt-8 max-w-2xl font-mono text-base text-[var(--color-muted)] md:text-lg">
            {content.subheadline}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <ContactCta>{content.ctaText}</ContactCta>
            <Button asChild size="lg" variant="outline">
              <a href="/work">See the work →</a>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'cinematic-fullbleed' && content.heroMediaUrl) {
    return (
      <section className="relative min-h-[80vh] overflow-hidden px-6 py-24 md:px-12">
        <img
          src={content.heroMediaUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-end">
          <p className="mb-4 text-sm uppercase tracking-widest text-[var(--color-muted)]">
            {persona.firstName} · {data.role}
          </p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-8xl text-balance">
            <Headline text={content.headline} tone={persona.tone ?? undefined} />
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[var(--color-fg)]/90 text-pretty">
            {content.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ContactCta>{content.ctaText}</ContactCta>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'split-duo') {
    return (
      <section className="grid min-h-[80vh] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 md:px-16">
          <p className="mb-4 text-sm uppercase tracking-widest text-[var(--color-muted)]">
            {data.role}
          </p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl text-balance">
            <Headline text={content.headline} tone={persona.tone ?? undefined} />
          </h1>
          <p className="mt-8 max-w-xl text-lg text-[var(--color-muted)] text-pretty">
            {content.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ContactCta>{content.ctaText}</ContactCta>
            <Button asChild size="lg" variant="outline">
              <a href="/work">See the work</a>
            </Button>
          </div>
        </div>
        <div className="relative bg-[var(--color-surface)]">
          {content.heroMediaUrl ? (
            <img
              src={content.heroMediaUrl}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : content.avatarUrl ? (
            <img
              src={content.avatarUrl}
              alt={persona.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              className="h-full w-full"
              style={{ background: 'var(--color-surface)' }}
              aria-hidden="true"
            />
          )}
        </div>
      </section>
    )
  }

  if (variant === 'centered-quiet') {
    return (
      <section className="px-6 py-32 md:py-40 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[var(--color-muted)]">
            {data.role}
          </p>
          <h1 className="font-display text-4xl leading-[1.1] md:text-6xl text-balance">
            {content.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-[var(--color-muted)] text-pretty md:text-lg">
            {content.subheadline}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <ContactCta>{content.ctaText}</ContactCta>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'manifesto') {
    return (
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-widest text-[var(--color-muted)]">
            {persona.name} — {data.role}
          </p>
          <h1 className="font-display text-4xl italic leading-[1.2] md:text-6xl text-balance motif-quote">
            {content.headline}
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-[var(--color-muted)] text-pretty">
            {content.subheadline}
          </p>
        </div>
      </section>
    )
  }

  if (variant === 'typographic-only') {
    return (
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-5xl leading-[0.95] tracking-tighter text-balance md:text-[9rem]">
            <Headline text={content.headline} tone={persona.tone ?? undefined} />
          </h1>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <p className="text-lg text-[var(--color-muted)] text-pretty">{content.subheadline}</p>
            <div className="flex flex-wrap items-end gap-4 md:justify-end">
              <ContactCta>{content.ctaText}</ContactCta>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'asymmetric-grid') {
    return (
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="mb-4 text-sm uppercase tracking-widest text-[var(--color-muted)]">
              {persona.name}
            </p>
            <h1 className="font-display text-5xl leading-[1.05] md:text-8xl text-balance">
              <Headline text={content.headline} tone={persona.tone ?? undefined} />
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-8 flex flex-col justify-end">
            <p className="text-base text-[var(--color-muted)] text-pretty">{content.subheadline}</p>
            <ContactCta className="mt-8 w-fit">{content.ctaText}</ContactCta>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'card-stack') {
    return (
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-[var(--color-muted)]">{data.role}</p>
            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl text-balance">
              <Headline text={content.headline} tone={persona.tone ?? undefined} />
            </h1>
            <p className="mt-8 max-w-xl text-lg text-[var(--color-muted)] text-pretty">
              {content.subheadline}
            </p>
            <ContactCta className="mt-10">{content.ctaText}</ContactCta>
          </div>
          <div className="relative h-[420px]">
            {content.projects.slice(0, 3).map((p, i) => (
              <div
                key={p.title}
                className="absolute left-0 top-0 h-[320px] w-[320px] rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-md"
                style={{
                  transform: `translate(${i * 36}px, ${i * 28}px) rotate(${(i - 1) * 3}deg)`,
                  zIndex: 3 - i,
                }}
              >
                <h3 className="font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'gallery-grid') {
    return (
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="mb-4 text-sm uppercase tracking-widest text-[var(--color-muted)]">
                {data.role}
              </p>
              <h1 className="font-display text-4xl leading-[1.1] md:text-6xl text-balance">
                <Headline text={content.headline} tone={persona.tone ?? undefined} />
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)] text-pretty">
                {content.subheadline}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {content.projects.slice(0, 4).map((p) => (
                <div
                  key={p.title}
                  className="aspect-square overflow-hidden rounded-md bg-[var(--color-surface)]"
                >
                  {p.mediaUrl ? (
                    <img src={p.mediaUrl} alt={p.title} className="h-full w-full object-cover" />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{ background: 'color-mix(in srgb, var(--color-primary) 10%, var(--color-surface))' }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'big-number-stats' && content.stats.length) {
    return (
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-[var(--color-muted)]">{data.role}</p>
              <h1 className="font-display text-5xl leading-[1.05] md:text-7xl text-balance">
                <Headline text={content.headline} tone={persona.tone ?? undefined} />
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {content.stats.slice(0, 4).map((s) => (
                <div key={s.label} className="border-t border-[var(--color-border)] pt-4">
                  <div className="font-display text-4xl md:text-5xl">{s.value}</div>
                  <div className="mt-1 text-sm text-[var(--color-muted)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-12 max-w-2xl text-lg text-[var(--color-muted)] text-pretty">
            {content.subheadline}
          </p>
          <ContactCta className="mt-8">{content.ctaText}</ContactCta>
        </div>
      </section>
    )
  }

  // Default → editorial-serif
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-widest text-[var(--color-muted)]">
          {persona.name} · {data.role}
        </p>
        <h1 className="font-display text-5xl leading-[1.05] md:text-8xl text-balance">
          <Headline text={content.headline} tone={persona.tone ?? undefined} />
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[var(--color-muted)] text-pretty">
          {content.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ContactCta>{content.ctaText}</ContactCta>
          <Button asChild size="lg" variant="outline">
            <a href="/work">See the work →</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
