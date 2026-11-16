'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { content, ui } from '@/content/content'

const { nav, aPropos, infos, footer } = content
const tel = `tel:${infos.phone.replace(/\s/g, '')}`

function useAnchor() {
  const pathname = usePathname()
  return (href: string) => (href.startsWith('#') && pathname !== '/' ? '/' + href : href)
}

/** Navbar (chrome) — logo carré + nom (= À propos) + ancres + téléphone + bouton RDV ; menu mobile useState */
export function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const anchor = useAnchor()
  useEffect(() => setOpen(false), [pathname])

  const menu = (
    <nav role="navigation" className="nav-menu-wrapper w-nav-menu" {...(open ? { 'data-nav-menu-open': '' } : {})}>
      <div className="nav-menu _02">
        <div className="menu-item">
          <ul role="list" className="nav-menu-block w-list-unstyled">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={anchor(l.href)} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <Link href="/blog" className="nav-link">Blog</Link>
            </li>
          </ul>
          <div className="header-button-wrapper">
            <div className="line" />
            <a href={tel} className="link-block w-inline-block">
              <img src="/img/design/call-02.svg" alt="" className="menu-button-icon" />
              <div className="login-button-title-wrap">
                <p className="login-button">{infos.phone}</p>
                <p className="login-button" aria-hidden="true">{infos.phone}</p>
              </div>
            </a>
            <a href={infos.bookingHref} className="menu-button-02 w-inline-block">
              <p className="button-title-03">{nav.rdvLabel}</p>
              <div className="button-hero-icon">
                <img src="/img/design/button-icon.svg" alt="" className="hero-button-icon" />
                <img src="/img/design/button-icon.svg" alt="" className="hero-button-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )

  return (
    <div className="navbar w-nav" role="banner" data-collapse="medium" data-animation="default">
      <div className="w-layout-blockcontainer menu-container w-container">
        <div className="navbar-wrapper">
          <Link href="/" className="navbar-brand w-nav-brand nav-identity">
            <img src={nav.logo} alt="" className="nav-logo-square" />
            <span className="nav-name">{aPropos.name}</span>
          </Link>
          {!open && menu}
          <button type="button" className={'menu-button w-nav-button' + (open ? ' w--open' : '')} onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
            <img src="/img/design/menu--v2.webp" alt="" className="menu-icon" />
            <img src="/img/design/2085957-200.webp" alt="" className="x-icon" />
          </button>
        </div>
      </div>
      {open && (
        <div className="w-nav-overlay" style={{ display: 'block', height: '100vh' }}>
          {menu}
        </div>
      )}
    </div>
  )
}

const ICONS = {
  instagram: 'M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.6a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8zm5.4-9.9a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z',
  facebook: 'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V13h2.7v8h3.3z',
  linkedin: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z',
}

/** Footer (chrome) — logo + nom, colonnes Pages / Informations / Coordonnées, réseaux, email, mention Omela */
export function Footer() {
  const anchor = useAnchor()
  const socials = Object.entries(footer.socials).filter(([, u]) => u) as [keyof typeof ICONS, string][]
  return (
    <footer className="footer-section">
      <div className="main-container">
        <div className="footer-section-content-wrapper">
          <div className="footer-top-content">
            <div className="footer-logo">
              <Link href="/" className="w-inline-block nav-identity">
                <img src={nav.logo} alt="" className="nav-logo-square" />
                <span className="nav-name">{aPropos.name}</span>
              </Link>
            </div>
            <div className="footer-menus">
              <div className="footer-links-list-01">
                <p className="link-title">{ui.footerPages}</p>
                <div className="list">
                  {nav.links.map((l) => (
                    <a key={l.href} href={anchor(l.href)} className="footer-item">{l.label}</a>
                  ))}
                  <Link href="/blog" className="footer-item">Blog</Link>
                </div>
              </div>
              <div className="footer-links-list-02">
                <p className="link-title">{ui.footerContact}</p>
                <div className="list">
                  <a href={anchor('#infos')} className="footer-item">{infos.address}, {infos.zip} {infos.city}</a>
                  <a href={tel} className="footer-item-02">{infos.phone}</a>
                  <a href={`mailto:${infos.email}`} className="footer-item-02">{infos.email}</a>
                </div>
              </div>
              <div className="footer-links-list-03">
                <p className="link-title">{ui.footerInfos}</p>
                <div className="list">
                  <a href={infos.bookingHref} className="footer-item">{nav.rdvLabel}</a>
                  <Link href="/mentions-legales" className="footer-item">{ui.legal}</Link>
                  <Link href="/confidentialite" className="footer-item">{ui.privacy}</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-content-wrapper">
            <div className="footer-bottom-content">
              <div className="bottom-left-content">
                <div className="copy-rigxt-area">
                  <p className="copy-rigxt">© {new Date().getFullYear()} {aPropos.title}.</p>
                  <p className="copy-rigxt">
                    <a href="https://omela.fr" target="_blank" rel="noreferrer" className="powered-by">{ui.madeWith}</a>
                  </p>
                </div>
              </div>
              <div className="social-icon-wrapper">
                {socials.map(([k, url]) => (
                  <a key={k} href={url} target="_blank" rel="noreferrer" className="social-icon w-inline-block" aria-label={k}>
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="twitter-icon">
                      <path d={ICONS[k]} fill="currentColor" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
