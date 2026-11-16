/**
 * Assets de design génériques (défauts du template) — PROCESS §5.
 * Contenus client (logo, photos) : /img/client, via les champs du contenu.
 * Chaque image optionnelle a un repli générique choisi par mots-clés du titre.
 */
const D = '/img/design/'

const pick = (rules: [RegExp, string][], fallback: string[], title: string, i: number) =>
  rules.find(([re]) => re.test(title))?.[1] ?? fallback[i % fallback.length]

export const stepIcons = [D + 'frame-1-.svg', D + 'frame-1--9f2f4.svg', D + 'frame.svg']
export const smallCardIcons = [D + 'frame-052e6.svg', D + 'frame-cc718.svg']

const photos = [D + 'interieur-1.webp', D + 'interieur-2.webp', D + 'detente.webp', D + 'interieur-3.webp', D + 'quotidien.webp', D + 'interieur-4.webp']

export function motifImage(title: string, i: number, image?: string) {
  if (image) return image
  return pick(
    [
      [/stress|tension|sommeil/i, D + 'detente.webp'],
      [/enfant|nourrisson|bébé|grossesse/i, D + 'quotidien.webp'],
      [/dos|lomb|nuque|épaule/i, D + 'interieur-1.webp'],
      [/sport|course/i, D + 'interieur-4.webp'],
    ],
    photos,
    title,
    i,
  )
}

export function publicImage(title: string, i: number, image?: string) {
  if (image) return image
  return pick(
    [
      [/adulte|actif|bureau/i, D + 'detente.webp'],
      [/enceinte|grossesse|maman|enfant|bébé/i, D + 'quotidien.webp'],
      [/senior|âgé/i, D + 'interieur-3.webp'],
      [/sport/i, D + 'interieur-4.webp'],
    ],
    photos,
    title,
    i,
  )
}

/** Visuels des cartes de blog : pas d'image d'article au PROCESS -> repli générique par mots-clés */
export function blogVisual(title: string, i: number) {
  return pick(
    [
      [/dos|bureau|posture|lomb/i, D + 'detente.webp'],
      [/bébé|nourrisson|grossesse/i, D + 'quotidien.webp'],
      [/course|sport|reprise/i, D + 'interieur-4.webp'],
    ],
    [D + 'interieur-1.webp', D + 'interieur-2.webp', D + 'interieur-3.webp'],
    title,
    i,
  )
}

export const infosImage = D + 'interieur-2.webp'
