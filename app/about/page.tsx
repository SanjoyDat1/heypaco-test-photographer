import type { Metadata } from 'next'
import { siteData } from '@/lib/site-data'
import { About, type AboutVariant } from '@/components/sections/about'
import { Skills, type SkillsVariant } from '@/components/sections/skills'
import { Contact, type ContactVariant } from '@/components/sections/contact'

export const metadata: Metadata = {
  title: "About · Test Photographer",
  description: "About Test Photographer. Testing HeyPACO to see how it can help photographers build their online presence.",
}

export default function AboutPage() {
  return (
    <>
          <div className="folio-reveal" style={{ animationDelay: '0ms' }}>
            <About data={siteData} variant="longform" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '75ms' }}>
            <Skills data={siteData} variant="category-list" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '150ms' }}>
            <Contact data={siteData} variant="plain" />
          </div>
        </>
  )
}
