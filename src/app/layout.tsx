import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Nav } from '@/components/chrome'
import { Interactions } from '@/components/Interactions'
import { PRE_HIDE } from '@/components/ix-rules'
import { content } from '@/content/content'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const { aPropos, infos, hero } = content

export const metadata: Metadata = {
  title: { default: `${aPropos.title} à ${infos.city}`, template: `%s — ${aPropos.name}` },
  description: hero.subheadline,
  icons: { icon: content.nav.logo },
}

/* Comme Webflow (html.w-mod-js), les éléments animés sont masqués avant l'exécution du JS */
const PRE_HIDE_CSS = `html.ix-js :is(${PRE_HIDE.join(', ')}) { visibility: hidden; }`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Stack Sans Text n'est pas encore proposée par next/font : chargée depuis Google Fonts */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Text:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('ix-js')" }} />
        <style dangerouslySetInnerHTML={{ __html: PRE_HIDE_CSS }} />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Interactions />
      </body>
    </html>
  )
}
