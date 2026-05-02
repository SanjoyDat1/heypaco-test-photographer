import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import { Work_Sans } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { Nav } from '@/components/sections/nav'
import { Footer } from '@/components/sections/footer'
import { HeypacoBadge } from '@/components/ui/heypaco-badge'
import { siteData } from '@/lib/site-data'

const displayFont = Lora({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const bodyFont = Work_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const monoFont = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: "Test Photographer — Wedding photographer",
  description: "Testing HeyPACO to see how it can help photographers build their online presence.",
  openGraph: {
    title: "Test Photographer — Wedding photographer",
    description: "Testing HeyPACO to see how it can help photographers build their online presence.",
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-folio-anim="restrained"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>
        <Nav data={siteData} />
        <main>{children}</main>
        <Footer data={siteData} />
        <HeypacoBadge />
      </body>
    </html>
  )
}
