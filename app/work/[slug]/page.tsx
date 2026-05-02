import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { siteData, projectSlugs } from '@/lib/site-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ContactCta } from '@/components/ui/contact-cta'

export function generateStaticParams() {
  return projectSlugs(siteData.content.projects).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const slugs = projectSlugs(siteData.content.projects)
  const idx = slugs.indexOf(slug)
  if (idx < 0) return {}
  const p = siteData.content.projects[idx]
  return {
    title: `${p.title} · ${siteData.persona.name}`,
    description: p.description.slice(0, 160),
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const slugs = projectSlugs(siteData.content.projects)
  const idx = slugs.indexOf(slug)
  if (idx < 0) notFound()
  const project = siteData.content.projects[idx]

  return (
    <>
      <div className="folio-reveal" style={{ animationDelay: '0ms' }}>
        <section className="px-6 py-16 md:px-12 md:py-24 bg-[var(--color-surface)]">
          <div className="mx-auto max-w-4xl">
            <a href="/work" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]">
              ← All work
            </a>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              {project.title}
            </h1>
            {project.impact ? (
              <p className="mt-6 font-mono text-sm text-[var(--color-primary)]">{project.impact}</p>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </div>

      {project.mediaUrl ? (
        <div className="folio-reveal" style={{ animationDelay: '75ms' }}>
          <section className="px-6 pb-12 md:px-12">
            <div className="mx-auto max-w-6xl aspect-[16/9] overflow-hidden rounded-2xl bg-[var(--color-surface)]">
              <img src={project.mediaUrl} alt={project.title} className="h-full w-full object-cover" />
            </div>
          </section>
        </div>
      ) : null}

      <div className="folio-reveal" style={{ animationDelay: '150ms' }}>
        <section className="px-6 pb-20 md:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-[var(--color-fg)]/90 text-pretty">
              {project.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {project.link ? (
                <Button asChild size="lg">
                  <a href={project.link} target="_blank" rel="noopener">
                    Visit project →
                  </a>
                </Button>
              ) : null}
              <ContactCta variant="outline">Get in touch</ContactCta>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
