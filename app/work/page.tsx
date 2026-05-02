import type { Metadata } from 'next'
import { siteData } from '@/lib/site-data'
import { Projects, type ProjectsVariant } from '@/components/sections/projects'
import { CtaBanner, type CtaBannerVariant } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: "Work · Test Photographer",
  description: "Selected projects by Test Photographer.",
}

export default function WorkPage() {
  return (
    <>
      <div className="folio-reveal" style={{ animationDelay: '0ms' }}>
        <section className="border-b border-[var(--color-border)] px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-widest text-[var(--color-muted)]">
              {siteData.content.sectionCopy?.workEyebrow || 'Work'}
            </p>
            <h1 className="mt-2 font-display text-5xl md:text-7xl">
              {siteData.content.sectionCopy?.workTitle || 'Selected projects'}
            </h1>
          </div>
        </section>
      </div>
      
            <div className="folio-reveal" style={{ animationDelay: '75ms' }}>
              <Projects data={siteData} variant="editorial-index" />
            </div>
            <div className="folio-reveal" style={{ animationDelay: '150ms' }}>
              <CtaBanner data={siteData} variant="inline" />
            </div>
          
    </>
  )
}
