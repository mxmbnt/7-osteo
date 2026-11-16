/**
 * Modèle de contenu = sections Omela (PROCESS-SITE-TEMPLATE-OSTEO.md §2).
 * Chaque champ a la limite du schéma Zod côté Omela ; `validateContent()` est appelé au build :
 * un texte trop long ou une liste hors bornes fait échouer la compilation (comme la validation au portage).
 */

export type Cta = { label: string; href: string }

export type SiteContent = {
  /** Navbar (chrome) — le nom affiché est celui de la section À propos (PROCESS §6) */
  nav: { logo: string; links: { label: string; href: string }[]; rdvLabel: string }
  hero: { headline: string; subheadline: string; cta: Cta; photo: string }
  deroulement: { title: string; intro: string; steps: { title: string; desc: string }[] }
  publics: { title: string; intro: string; items: { title: string; desc: string; image?: string }[] }
  motifs: { intro: string; items: { title: string; desc: string; image?: string }[] }
  aPropos: { name: string; title: string; bio: string; photo: string; badges: string[] }
  tarifs: { intro: string; lines: { label: string; price: string; note?: string }[]; remboursement: string }
  avis: { intro: string; items: { author: string; text: string; rating: number }[] }
  blog: { intro: string }
  faq: { items: { q: string; a: string }[] }
  infos: {
    address: string
    zip: string
    city: string
    phone: string
    email: string
    hours: { day: string; value: string }[]
    access: string
    bookingHref: string
  }
  contact: { intro: string }
  footer: { socials: { instagram?: string; facebook?: string; linkedin?: string } }
}

type Rule = [path: string, value: string | undefined, max: number]

export function validateContent(c: SiteContent) {
  const errors: string[] = []
  const len = (r: Rule) => {
    if (r[1] !== undefined && r[1].length > r[2]) errors.push(`${r[0]} : ${r[1].length} car. (max ${r[2]})`)
  }
  const count = (path: string, n: number, min: number, max: number) => {
    if (n < min || n > max) errors.push(`${path} : ${n} élément(s) (attendu ${min}–${max})`)
  }
  len(['nav.rdvLabel', c.nav.rdvLabel, 40])
  len(['hero.headline', c.hero.headline, 120])
  len(['hero.subheadline', c.hero.subheadline, 300])
  len(['hero.cta.label', c.hero.cta.label, 60])
  len(['deroulement.title', c.deroulement.title, 120])
  len(['deroulement.intro', c.deroulement.intro, 600])
  count('deroulement.steps', c.deroulement.steps.length, 1, 8)
  c.deroulement.steps.forEach((s, i) => {
    len([`deroulement.steps[${i}].title`, s.title, 100])
    len([`deroulement.steps[${i}].desc`, s.desc, 600])
  })
  len(['publics.title', c.publics.title, 120])
  len(['publics.intro', c.publics.intro, 1000])
  count('publics.items', c.publics.items.length, 1, 6)
  c.publics.items.forEach((p, i) => {
    len([`publics.items[${i}].title`, p.title, 100])
    len([`publics.items[${i}].desc`, p.desc, 1200])
  })
  len(['motifs.intro', c.motifs.intro, 600])
  count('motifs.items', c.motifs.items.length, 1, 12)
  c.motifs.items.forEach((m, i) => {
    len([`motifs.items[${i}].title`, m.title, 100])
    len([`motifs.items[${i}].desc`, m.desc, 500])
  })
  len(['aPropos.title', c.aPropos.title, 120])
  len(['aPropos.bio', c.aPropos.bio, 4000])
  count('aPropos.badges', c.aPropos.badges.length, 0, 15)
  c.aPropos.badges.forEach((b, i) => len([`aPropos.badges[${i}]`, b, 200]))
  len(['tarifs.intro', c.tarifs.intro, 600])
  count('tarifs.lines', c.tarifs.lines.length, 1, 12)
  c.tarifs.lines.forEach((l, i) => {
    len([`tarifs.lines[${i}].label`, l.label, 120])
    len([`tarifs.lines[${i}].price`, l.price, 40])
    len([`tarifs.lines[${i}].note`, l.note, 200])
  })
  len(['tarifs.remboursement', c.tarifs.remboursement, 1000])
  len(['avis.intro', c.avis.intro, 400])
  count('avis.items', c.avis.items.length, 0, 12)
  c.avis.items.forEach((a, i) => {
    len([`avis.items[${i}].author`, a.author, 80])
    len([`avis.items[${i}].text`, a.text, 800])
    if (a.rating < 1 || a.rating > 5) errors.push(`avis.items[${i}].rating hors 1–5`)
  })
  len(['blog.intro', c.blog.intro, 400])
  count('faq.items', c.faq.items.length, 1, 15)
  c.faq.items.forEach((f, i) => {
    len([`faq.items[${i}].q`, f.q, 200])
    len([`faq.items[${i}].a`, f.a, 1500])
  })
  count('infos.hours', c.infos.hours.length, 0, 7)
  len(['infos.access', c.infos.access, 500])
  len(['contact.intro', c.contact.intro, 400])
  if (errors.length) throw new Error('Contenu hors limites Omela :\n- ' + errors.join('\n- '))
  return c
}
