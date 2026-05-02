import type { SiteData } from '@/lib/site-data'

export type CredentialsVariant = 'grid'

export function Credentials({ data, variant: _variant }: { data: SiteData; variant: CredentialsVariant }) {
  const entries = data.content.credentials ?? []
  if (entries.length === 0) return null
  const certs = entries.filter((c) => c.kind === 'certification')
  const pubs = entries.filter((c) => c.kind === 'publication')
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">Credentials</p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">Certifications & publications</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {certs.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Certifications</p>
              <ul className="mt-4 space-y-4">
                {certs.map((c, i) => (
                  <li key={`cert-${i}`} className="border-l border-[var(--color-border)] pl-4">
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-[var(--color-muted)]">
                      {[c.issuer, c.year].filter(Boolean).join(' · ')}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {pubs.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Publications</p>
              <ul className="mt-4 space-y-4">
                {pubs.map((p, i) => (
                  <li key={`pub-${i}`} className="border-l border-[var(--color-border)] pl-4">
                    <p className="font-medium">{p.name}</p>
                    <p className="text-sm text-[var(--color-muted)]">
                      {[p.issuer, p.year].filter(Boolean).join(' · ')}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
