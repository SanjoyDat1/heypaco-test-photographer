/**
 * Single source of truth for every piece of content on this site.
 *
 * To change your bio, add a new project, or swap the CTA — edit this
 * file. Save, commit, push — Netlify handles the rest.
 *
 * Design tokens (colors, fonts, spacing) live in `styles/globals.css`.
 */

export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  impact?: string
  mediaUrl?: string | null
}

export type Stat = { label: string; value: string }

export type SkillGroup = { category: string; items: string[] }

export type SocialLink = { label: string; href: string }

export type GalleryItem = { url: string; alt: string; caption?: string | null }

export type EducationEntry = {
  school: string
  degree?: string | null
  field?: string | null
  dates?: string | null
}

export type CredentialEntry = {
  kind: 'certification' | 'publication'
  name: string
  issuer?: string | null
  year?: string | null
}

export type SiteData = {
  persona: { name: string; firstName: string; slug: string; tone?: string | null }
  role: string
  ctaHref: string
  palette: string
  typography: string
  hero: string
  motif: string
  animation: string
  content: {
    headline: string
    subheadline: string
    bio: string
    ctaText: string
    ctaEmail: string | null
    /**
     * Base64-encoded, +7-char-shifted ctaEmail used by the ContactModal
     * so the plain address never appears in static HTML. Decoded client-
     * side after the user clicks the CTA. Kept optional so older sites
     * regenerated before this field existed still type-check.
     */
    ctaEmailEnc?: string | null
    avatarUrl: string
    location: string | null
    availability: string | null
    stats: Stat[]
    heroMediaUrl?: string | null
    gallery?: GalleryItem[]
    projects: Project[]
    skills: SkillGroup[]
    socialLinks: SocialLink[]
    education?: EducationEntry[]
    credentials?: CredentialEntry[]
    footerTagline: string
    metaTitle: string
    metaDescription: string
    sectionCopy?: {
      workEyebrow?: string
      workTitle?: string
      aboutEyebrow?: string
      aboutTitle?: string
      statsEyebrow?: string
      statsTitle?: string
      galleryEyebrow?: string
      galleryTitle?: string
      ctaHeadline?: string
      ctaSubline?: string
    }
  }
}

export const siteData: SiteData = {
  persona: {
    name: "Test Photographer",
    firstName: "Test",
    slug: "test-photographer",
    tone: "warm",
  },
  role: "Wedding photographer",
  ctaHref: "/about.html#contact",
  palette: "notebook-warm",
  typography: "lora-work-sans",
  hero: "centered-quiet",
  motif: "hand-underline",
  animation: "restrained",
  content: {
    headline: "Wedding photographer exploring new ways to share work",
    subheadline: "Testing HeyPACO to see how it can help photographers build their online presence.",
    bio: "Testing HeyPACO to see how it can help photographers build their online presence.\n\nI work as a wedding photographer and I've spent time on the kind of work that shows up in the projects below.",
    ctaText: "Get in touch",
    ctaEmail: null,
    avatarUrl: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22480%22%20height%3D%22480%22%20viewBox%3D%220%200%20480%20480%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231f2f25%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237eaa86%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22grain%22%3E%0A%20%20%20%20%20%20%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.85%22%20numOctaves%3D%222%22%20seed%3D%223%22%2F%3E%0A%20%20%20%20%20%20%3CfeColorMatrix%20values%3D%220%200%200%200%201%20%200%200%200%200%201%20%200%200%200%200%201%20%200%200%200%200.06%200%22%2F%3E%0A%20%20%20%20%20%20%3CfeComposite%20in%3D%22SourceGraphic%22%20operator%3D%22in%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22480%22%20height%3D%22480%22%20fill%3D%22url(%23g)%22%2F%3E%0A%20%20%3Crect%20width%3D%22480%22%20height%3D%22480%22%20fill%3D%22url(%23g)%22%20filter%3D%22url(%23grain)%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Georgia%2C%20'Times%20New%20Roman'%2C%20serif%22%0A%20%20%20%20%20%20%20%20font-style%3D%22italic%22%20font-weight%3D%22500%22%20font-size%3D%22192%22%0A%20%20%20%20%20%20%20%20fill%3D%22rgba(255%2C253%2C247%2C0.96)%22%20text-anchor%3D%22middle%22%0A%20%20%20%20%20%20%20%20dominant-baseline%3D%22central%22%20letter-spacing%3D%22-2%22%3E%0A%20%20%20%20TP%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    location: null,
    availability: null,
    stats: [],
    heroMediaUrl: null,
    gallery: [
      {
        url: "https://storage.googleapis.com/folio-90305.firebasestorage.app/users/btqXiSrobwTAhwisPttzfXd78UE2/quiz-uploads/gallery/c24e2bd6-9556-48a3-a8cf-50253b85b1b0.webp",
        alt: "Test Photographer — gallery image 1",
      },
      {
        url: "https://storage.googleapis.com/folio-90305.firebasestorage.app/users/btqXiSrobwTAhwisPttzfXd78UE2/quiz-uploads/gallery/b4fa7870-9359-4a32-9b21-cce029e98405.jpg",
        alt: "Test Photographer — gallery image 2",
      },
      {
        url: "https://storage.googleapis.com/folio-90305.firebasestorage.app/users/btqXiSrobwTAhwisPttzfXd78UE2/quiz-uploads/gallery/57d59dd0-aa5b-4d97-ac8e-f276345d4c57.jpg",
        alt: "Test Photographer — gallery image 3",
      },
      {
        url: "https://storage.googleapis.com/folio-90305.firebasestorage.app/users/btqXiSrobwTAhwisPttzfXd78UE2/quiz-uploads/gallery/9ec14a2a-109f-440c-a28d-9e87821c8111.jpg",
        alt: "Test Photographer — gallery image 4",
      },
    ],
    projects: [
      {
        title: "Recent work",
        description: "Currently building a wedding photography portfolio and testing tools to showcase work online.\n\nCoverage: teset",
        tags: [
          "natural_light",
          "wedding_events",
        ],
      },
    ],
    skills: [
      {
        category: "What I do well",
        items: [
          "natural_light",
          "wedding_events",
        ],
      },
    ],
    socialLinks: [],
    footerTagline: "Wedding photographer",
    metaTitle: "Test Photographer — Wedding photographer",
    metaDescription: "Testing HeyPACO to see how it can help photographers build their online presence.",
    sectionCopy: null,
    ctaEmailEnc: null,
  },
}

export function projectSlugs(projects: Project[]): string[] {
  const seen = new Set<string>()
  return projects.map((p) => {
    let base = p.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 40) || 'project'
    let slug = base
    let i = 2
    while (seen.has(slug)) slug = `${base}-${i++}`
    seen.add(slug)
    return slug
  })
}
