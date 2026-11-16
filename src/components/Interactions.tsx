'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { REVEALS } from './ix-rules'

/**
 * Animations IX3 du template Presma, sans GSAP : IntersectionObserver + transitions CSS.
 *  - fondus d'apparition (chargement / défilement)
 *  - titres centrés révélés lettre par lettre au défilement (opacité 40 % -> 100 %)
 * (onglets, carrousel, FAQ, menu : composants React dans ui.tsx / chrome.tsx)
 */
function reveals() {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        ;(e.target as HTMLElement).style.opacity = '1'
        io.unobserve(e.target)
      }
    },
    { rootMargin: '0px 0px -5% 0px' },
  )
  for (const r of REVEALS) {
    document.querySelectorAll<HTMLElement>(r.sel).forEach((el) => {
      el.style.opacity = '0'
      el.style.visibility = 'visible'
      el.style.transition = 'opacity .8s linear'
      if (r.on === 'load') requestAnimationFrame(() => requestAnimationFrame(() => (el.style.opacity = '1')))
      else io.observe(el)
    })
  }
  return () => io.disconnect()
}

function charScrub() {
  const groups = Array.from(document.querySelectorAll<HTMLElement>('.section-title-center')).map((el) => {
    el.style.visibility = 'visible'
    if (!el.dataset.split) {
      const text = el.textContent || ''
      el.textContent = ''
      for (const word of text.split(/(\s+)/)) {
        if (/^\s+$/.test(word)) {
          el.appendChild(document.createTextNode(word))
          continue
        }
        const w = document.createElement('span')
        w.style.display = 'inline-block'
        for (const ch of word) {
          const c = document.createElement('span')
          c.className = 'ix-char'
          c.textContent = ch
          w.appendChild(c)
        }
        el.appendChild(w)
      }
      el.setAttribute('aria-label', text)
      el.dataset.split = '1'
    }
    return Array.from(el.querySelectorAll<HTMLElement>('.ix-char')).map((c) => ({ c, el }))
  })
  const update = () => {
    const vh = window.innerHeight
    for (const chars of groups) {
      if (!chars.length) continue
      const top = chars[0].el.getBoundingClientRect().top
      const p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.6)))
      const n = chars.length
      chars.forEach(({ c }, i) => {
        const local = Math.min(1, Math.max(0, p * (n + 6) - i) / 6)
        c.style.opacity = String(0.4 + 0.6 * local)
      })
    }
  }
  update()
  window.addEventListener('scroll', update, { passive: true })
  return () => window.removeEventListener('scroll', update)
}

export function Interactions() {
  const pathname = usePathname()
  useEffect(() => {
    const offs = [reveals(), charScrub()]
    return () => offs.forEach((f) => f())
  }, [pathname])
  return null
}
