/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { content, ui } from '@/content/content'
import { articles } from '@/content/blog'
import { blogVisual, infosImage, motifImage, publicImage, smallCardIcons, stepIcons } from '@/content/images'
import { Markdown } from './Markdown'
import { AvisSlider, Faq, PublicsTabs } from './ui'

const { infos, nav } = content
const tel = `tel:${infos.phone.replace(/\s/g, '')}`

/** Bouton sombre « Appeler » du template (libellé qui défile au survol) */
function CallButton({ dark }: { dark?: boolean }) {
  const label = `${ui.call} ${infos.phone}`
  return (
    <a href={tel} className={(dark ? 'dark-button' : 'hero-button') + ' w-inline-block'}>
      <img src="/img/design/vector.svg" alt="" className={dark ? 'icon-05' : 'button-icon-02'} />
      <div className="button-title-wrap">
        <p className={dark ? 'button-title-white' : 'button-title'}>{label}</p>
        <p className={dark ? 'button-title-white' : 'button-title'} aria-hidden="true">{label}</p>
      </div>
    </a>
  )
}

/** Bouton RDV (lien unique BOOKING_HREF) */
function RdvButton({ label = nav.rdvLabel }: { label?: string }) {
  return (
    <a href={infos.bookingHref} className="hero-button w-inline-block">
      <img src="/img/design/vector-4f6c6.svg" alt="" className="button-icon-02" />
      <div className="button-title-wrap">
        <p className="button-title">{label}</p>
        <p className="button-title" aria-hidden="true">{label}</p>
      </div>
    </a>
  )
}

/* ───────────── accueil ───────────── */
export function Hero() {
  const h = content.hero
  return (
    <section id="accueil" className="hero-section bg" style={{ backgroundImage: `url("${h.photo}")` }}>
      <div className="bg-shape-02" />
      <div className="bg-shape" />
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="hero-effect">
          <div className="hero-section-content-wrapper gap-275">
            <div className="hero-section-title-wrapper _w-612">
              <h1 className="hero-title white">{h.headline}</h1>
              <p className="hero-subtitle-osteo">{h.subheadline}</p>
              <a href={h.cta.href} className="hero-button w-inline-block">
                <img src="/img/design/vector-4f6c6.svg" alt="" className="button-icon-02" />
                <div className="button-title-wrap">
                  <p className="button-title">{h.cta.label}</p>
                  <p className="button-title" aria-hidden="true">{h.cta.label}</p>
                </div>
              </a>
            </div>
            <div className="hero-label-wrapper">
              <a href="#deroulement" className="scroll-button">
                <p className="scroll-text">{ui.scroll}</p>
                <img src="/img/design/arrow-down-double.svg" alt="" className="hero-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── a-propos : section « Our vision » de la page About ───────────── */
export function APropos() {
  const a = content.aPropos
  return (
    <section id="a-propos" className="our-vision-section">
      <div className="main-container">
        <div className="section-effect">
          <div className="section-content-wrapper gap---70">
            <div className="vision-image-wrapper">
              <img src={a.photo} alt={a.name} className="vision-image" />
            </div>
            <div className="vision-left-content">
              <div className="vision-top-content">
                <div className="vision-title-wrap">
                  <div className="tage-line">
                    <p className="tage-line-text">{ui.aProposLabel}</p>
                  </div>
                  <h2 className="section-title">{a.title}</h2>
                  <Markdown className="section-subtitle apropos-bio" source={a.bio} />
                </div>
                <a href={infos.bookingHref} className="normal-button w-inline-block">
                  <img src="/img/design/vector-4f6c6.svg" alt="" className="vector" />
                  <p className="button-title-v2">{nav.rdvLabel}</p>
                </a>
              </div>
              {a.badges.length > 0 && (
                <div className="vision-bottom-content">
                  <div className="our-vision-card">
                    <p className="our-vision-title">{ui.badgesTitle}</p>
                  </div>
                  <div className="list-item-wrapper">
                    {a.badges.map((b) => (
                      <div key={b} className="list-item">
                        <img src="/img/design/vector-2800c.svg" alt="" className="vector" />
                        <p className="list-text">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── deroulement : cartes « How it works » ───────────── */
export function Deroulement() {
  const d = content.deroulement
  return (
    <section id="deroulement" className="how-it-works-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="section-effect">
          <div className="section-content-wrapper gap-72">
            <div className="section-title-wrapper center">
              <h2 className="section-title center section-title-center">{d.title}</h2>
              <p className="section-subtitle center _485">{d.intro}</p>
            </div>
            <div className="how-it-works-card-wrapper deroulement-cards">
              {d.steps.map((s, i) => (
                <div key={i} className="how-it-works-card">
                  <img src={stepIcons[i % stepIcons.length]} alt="" className="how-it-work-icon" />
                  <div className="how-it-works-card-content">
                    <p className="how-it-works-card-title">{s.title}</p>
                    <p className="how-it-works-title">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── publics : onglets illustrés ───────────── */
export function Publics() {
  const p = content.publics
  return (
    <section id="publics" className="experience-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="section-effect">
          <div className="section-content-wrapper left">
            <div className="section-title-wrapper">
              <h2 className="section-title v2">{p.title}</h2>
              <p className="section-subtitle publics-intro">{p.intro}</p>
            </div>
            <PublicsTabs items={p.items.map((it, i) => ({ ...it, image: publicImage(it.title, i, it.image) }))} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── motifs : mosaïque du template, répétée par groupes de 4 ───────────── */
function BigCard({ title, desc, image, v2 }: { title: string; desc: string; image: string; v2?: boolean }) {
  return (
    <div className={v2 ? 'service-card-v2 motif-card' : 'service-card motif-card'}>
      <div className={'service-card-image-wrapper ' + (v2 ? 'v2' : 'v3')}>
        <img src={image} alt="" className={v2 ? 'service-card-image-v2' : 'service-card-image'} />
      </div>
      <div className={'service-card-content-wrapper' + (v2 ? ' v2' : '')}>
        <div className="service-card-content">
          <p className="service-card-title">{title}</p>
          <p className="service-subtitle">{desc}</p>
        </div>
      </div>
    </div>
  )
}
function SmallCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="service-card-v4 motif-card">
      <img src={icon} alt="" className="service-card-icon" />
      <div className="service-card-content-wrapper-v3">
        <div className="service-card-content">
          <p className="service-card-title">{title}</p>
          <p className="service-subtitle">{desc}</p>
        </div>
      </div>
    </div>
  )
}
export function Motifs() {
  const m = content.motifs
  const groups: (typeof m.items)[] = []
  for (let i = 0; i < m.items.length; i += 4) groups.push(m.items.slice(i, i + 4))
  let k = 0
  return (
    <section id="motifs" className="services-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="section-effect">
          <div className="section-content-wrapper gap-72">
            <div className="services-section-title-wrap">
              <div>
                <h2 className="section-title _540">{ui.motifsTitle}</h2>
                <p className="section-subtitle motifs-intro">{m.intro}</p>
              </div>
              <CallButton dark />
            </div>
            {groups.map((g, gi) => {
              const items = g.map((it) => ({ ...it, idx: k++ }))
              // Groupe incomplet (< 4) : cartes illustrées côte à côte
              if (items.length < 4)
                return (
                  <div key={gi} className="motifs-rest">
                    {items.map((it) => (
                      <BigCard key={it.idx} v2 title={it.title} desc={it.desc} image={motifImage(it.title, it.idx, it.image)} />
                    ))}
                  </div>
                )
              const [a, b, c, d] = items
              return (
                <div key={gi} className="service-card-wrapper v2">
                  <div className="service-card-left">
                    <BigCard title={a.title} desc={a.desc} image={motifImage(a.title, a.idx, a.image)} />
                    <div className="service-card-v3-wrap">
                      <div className="collection-list-5">
                        {[b, c].map((it, j) => (
                          <SmallCard key={j} title={it.title} desc={it.desc} icon={smallCardIcons[j % smallCardIcons.length]} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="collection-list-wrapper-2">
                    <BigCard v2 title={d.title} desc={d.desc} image={motifImage(d.title, d.idx, d.image)} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── tarifs : cartes de prix du template ───────────── */
export function Tarifs() {
  const t = content.tarifs
  return (
    <section id="tarifs" className="pricing-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="section-effect">
          <div className="section-content-wrapper left">
            <div className="section-title-wrapper">
              <h2 className="section-title">{ui.tarifsTitle}</h2>
              <p className="section-subtitle">{t.intro}</p>
            </div>
            <div className="price-card-wrapper tarifs-cards">
              {t.lines.map((l) => (
                <div key={l.label} className="price-card">
                  <div className="price-top-card">
                    <div className="price-top-content">
                      <p className="price-card-label">{l.label}</p>
                      <div className="price-wrap">
                        <h3 className="price">{l.price}</h3>
                        <p className="per-month">{ui.perSession}</p>
                      </div>
                    </div>
                    {l.note && <p className="price-subtitle">{l.note}</p>}
                  </div>
                  <div className="price-bottom-content-wrapper">
                    <a href={infos.bookingHref} className="price-button w-inline-block">
                      <p className="price-button-title">{nav.rdvLabel}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="our-vision-card tarifs-rembourse">
              <p className="our-vision-title">{ui.remboursementTitle}</p>
              <p className="our-vision-subtitle">{t.remboursement}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── avis : carrousel ───────────── */
export function Avis() {
  const a = content.avis
  if (!a.items.length) return null
  return (
    <section id="avis" className="testimonials-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="section-effect">
          <div className="section-content-wrapper gap-72">
            <div className="section-title-wrapper _w---520">
              <h2 className="section-title white center">{ui.avisTitle}</h2>
              <p className="section-subtitle white center">{a.intro}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-effect">
        <AvisSlider items={a.items} />
      </div>
    </section>
  )
}

/* ───────────── blog : 3 derniers articles (titre + extrait + date) ───────────── */
export function Blog() {
  const list = articles.slice(0, 3)
  if (!list.length) return null
  const fmt = (iso: string) => new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  return (
    <section id="blog" className="blog-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="section-effect">
          <div className="section-content-wrapper gap-72">
            <div className="section-title-wrapper _w-800">
              <h2 className="section-title center _02">{ui.blogTitle}</h2>
              <p className="section-subtitle center">{content.blog.intro}</p>
            </div>
            <div className="blog-card-wrapper">
              <div className="collection-list-3 blog-cards-3">
                {list.map((a, i) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="blog-card w-inline-block">
                    <div className="blog-image-wrapper">
                      <img src={blogVisual(a.title, i)} alt="" className="blog-image" />
                    </div>
                    <div className="blog-content-wrap">
                      <p className="blog-card-date">{fmt(a.date)}</p>
                      <p className="blog-card-title">{a.title}</p>
                      <p className="blog-card-subtitle">{a.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="center-button">
              <Link href="/blog" className="normal-button w-inline-block">
                <img src="/img/design/vector-4f6c6.svg" alt="" className="vector" />
                <p className="button-title-v2">{ui.blogAll}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── faq ───────────── */
export function FaqSection() {
  return (
    <section id="faq" className="faq-section padding">
      <div className="main-container">
        <div className="section-effect">
          <div className="section-content-wrapper gap---100">
            <div className="faq-section-wrapper">
              <div className="faq-section-title-wrapper">
                <h2 className="section-title faq">{ui.faqTitle}</h2>
              </div>
              <Faq items={content.faq.items} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── infos : section « Reliable » + carte ───────────── */
export function Infos() {
  const i = infos
  return (
    <section id="infos" className="reliable-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="section-effect">
          <div className="section-content-wrapper v3">
            <img src={infosImage} alt="" className="reliable-section-image" />
            <div className="reliable-section-content">
              <div className="section-title-wrapper">
                <h2 className="section-title">{ui.infosTitle}</h2>
                <p className="section-subtitle _02">
                  {i.address}, {i.zip} {i.city}
                  <br />
                  <a href={tel} className="infos-link">{i.phone}</a> · <a href={`mailto:${i.email}`} className="infos-link">{i.email}</a>
                </p>
              </div>
              <div className="list-card-wrapper">
                {i.hours.length > 0 && (
                  <div className="list-card">
                    <div className="icon-wrap">
                      <img src="/img/design/benefit-icon.svg" alt="" className="icon-04" />
                    </div>
                    <div className="list-card-content">
                      <p className="list-card-title">{ui.hoursTitle}</p>
                      <ul className="infos-hours" role="list">
                        {i.hours.map((h) => (
                          <li key={h.day}>
                            <span>{h.day}</span>
                            <span>{h.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                <div className="list-card">
                  <div className="icon-wrap">
                    <img src="/img/design/benefit-icon-1-.svg" alt="" className="icon-04" />
                  </div>
                  <div className="list-card-content">
                    <p className="list-card-title">{ui.accessTitle}</p>
                    <p className="list-card-subtitle">{i.access}</p>
                  </div>
                </div>
              </div>
              <RdvButton />
            </div>
          </div>
          <div className="view-on-map-image infos-map">
            <iframe
              title={ui.mapTitle}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${i.address}, ${i.zip} ${i.city}`)}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── contact : section contact du template ───────────── */
export function Contact() {
  return (
    <section id="contact" className="contact-section padding">
      <div className="main-container">
        <div className="section-effect">
          <div className="section-content-wrapper gap---100">
            <div className="contact-section-wrapper">
              <div className="contact-section-left-content">
                <div className="contact-section-content">
                  <div className="contact-section-title-wrapper">
                    <h2 className="section-title">{ui.contactTitle}</h2>
                    <p className="section-subtitle">{content.contact.intro}</p>
                  </div>
                  <div className="contact-link-wrap">
                    <a href={tel} className="contact-link w-inline-block">
                      <img src="/img/design/phone-call-01.svg" alt="" className="coll-icon" />
                      <div className="link-text">{infos.phone}</div>
                    </a>
                    <a href={`mailto:${infos.email}`} className="contact-link w-inline-block">
                      <img src="/img/design/mail-01.svg" alt="" className="coll-icon" />
                      <div className="link-text">{infos.email}</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-cta">
                <a href={infos.bookingHref} className="dark-button w-inline-block">
                  <img src="/img/design/vector-4f6c6.svg" alt="" className="icon-05" />
                  <div className="button-title-wrap">
                    <p className="button-title-white">{nav.rdvLabel}</p>
                    <p className="button-title-white" aria-hidden="true">{nav.rdvLabel}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
