import { siteData } from '@/lib/site-data'
import { Hero, type HeroVariant } from '@/components/sections/hero'
import { Gallery, type GalleryVariant } from '@/components/sections/gallery'
import { Projects, type ProjectsVariant } from '@/components/sections/projects'
import { CtaBanner, type CtaBannerVariant } from '@/components/sections/cta-banner'

export default function HomePage() {
  return (
    <>
          <div className="folio-reveal" style={{ animationDelay: '0ms' }}>
            <Hero data={siteData} variant="centered-quiet" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '75ms' }}>
            <Gallery data={siteData} variant="grid" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '150ms' }}>
            <Projects data={siteData} variant="editorial-index" limit={4} />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '225ms' }}>
            <CtaBanner data={siteData} variant="fullbleed" />
          </div>
        </>
  )
}
