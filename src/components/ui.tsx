'use client'
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'

/** Onglets « Ce qui fait la différence » du template, utilisés pour les publics (useState + fondu CSS) */
export function PublicsTabs({ items }: { items: { title: string; desc: string; image: string }[] }) {
  const [active, setActive] = useState(0)
  return (
    <div className="tabs w-tabs">
      <div className="tabs-menu w-tab-menu" role="tablist">
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={'tab-link-tab-1 w-inline-block w-tab-link' + (i === active ? ' w--current' : '')}
            onClick={() => setActive(i)}
          >
            <div className="tab-item">
              <p className="tab-title">
                {i + 1}. {it.title}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="tabs-content w-tab-content">
        {items.map((it, i) => (
          <div key={i} role="tabpanel" className={'tab-pane-tab-1 w-tab-pane publics-pane' + (i === active ? ' w--tab-active' : '')}>
            <div className="tab-image-wrapper">
              <img src={it.image} alt="" className="tab-image" />
              <div className="tab-content-card">
                <p className="tab-content">{it.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Carrousel d'avis (w-slider du template) : flèches, puces, défilement auto 3 s, transitions CSS */
export function AvisSlider({ items }: { items: { author: string; text: string; rating: number }[] }) {
  const [index, setIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const slides = useRef<(HTMLDivElement | null)[]>([])
  const n = items.length
  const go = (i: number) => setIndex((i + n) % n)

  useEffect(() => {
    const first = slides.current[0]
    const cur = slides.current[index]
    if (first && cur) setOffset(cur.offsetLeft - first.offsetLeft)
  }, [index])

  useEffect(() => {
    const t = window.setInterval(() => setIndex((i) => (i + 1) % n), 4000)
    return () => window.clearInterval(t)
  }, [n, index])

  const initials = (s: string) =>
    s
      .split(/\s+/)
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()

  return (
    <div className="testimonial-slider">
      <div className="slider-2 w-slider" aria-roledescription="carousel">
        <div className="w-slider-mask">
          {items.map((it, i) => (
            <div
              key={i}
              ref={(el) => {
                slides.current[i] = el
              }}
              className="testimonial-slide w-slide"
              style={{ transform: `translateX(${-offset}px)`, transition: 'transform 500ms ease' }}
              aria-hidden={i !== index}
            >
              <div className="testimonial-card avis-card">
                <div className="testimonial-card-content">
                  <div className="testimonial-card-top-content">
                    <div className="star-reting _02" aria-label={`${it.rating} sur 5`}>
                      {Array.from({ length: it.rating }).map((_, k) => (
                        <img key={k} src="/img/design/icon-1-.svg" alt="" className="star" />
                      ))}
                    </div>
                    <p className="testimonial-text">{it.text}</p>
                  </div>
                  <div className="testimonial-bottom-content">
                    <div className="profile">
                      <div className="profile-image avis-initials" aria-hidden="true">{initials(it.author)}</div>
                      <div className="testimonial-content">
                        <p className="testimonial-name">{it.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button type="button" className="left-arrow-2 w-slider-arrow-left" onClick={() => go(index - 1)} aria-label="Avis précédent">
          <img src="/img/design/chevron-left.svg" alt="" />
        </button>
        <button type="button" className="left-arrow-03 w-slider-arrow-right" onClick={() => go(index + 1)} aria-label="Avis suivant">
          <img src="/img/design/chevron-left-1-.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

/** FAQ du template (faq-item) : hauteur animée en CSS, icône qui pivote */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="faq-wrapper">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={'faq-item' + (isOpen ? ' is-open' : '')}>
            <button type="button" className="question-wrap" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              <p className="question">{it.q}</p>
              <div className="faq-icon-wrap">
                <img src="/img/design/cheveron-down.svg" alt="" className="faq-icon _02" />
              </div>
            </button>
            <div className="faq-content-wrap">
              <div>
                <p className="faq-content">{it.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
