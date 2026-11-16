/**
 * Articles de blog (fictifs). Sur Omela, ils sont générés et publiés automatiquement :
 * titre + extrait + date + corps (pas d'image d'article — PROCESS §2). L'auteur est le praticien (À propos).
 * Les visuels des cartes viennent du repli générique par mots-clés (src/content/images.ts).
 */
export type Article = {
  slug: string
  title: string
  excerpt: string
  date: string // ISO
  body: string // Markdown simple : paragraphes, ## titres, ### sous-titres, - listes, > citation
}

export const articles: Article[] = [
  {
    slug: 'mal-de-dos-au-bureau',
    title: '7 réflexes simples pour ménager son dos au bureau',
    excerpt: 'Écran, chaise, pauses : quelques ajustements faciles pour un quotidien plus confortable devant l’ordinateur.',
    date: '2026-10-28',
    body: `Nous passons souvent plus de sept heures par jour assis. Sans chercher la posture « parfaite », quelques réflexes simples peuvent rendre ces heures plus confortables.

## Pourquoi la position assise prolongée fatigue le dos

Rester longtemps dans la même position limite les mouvements naturels de la colonne et des hanches. Ce n'est pas tant la posture qui pose problème que **l'immobilité**. Le meilleur réflexe reste donc de bouger régulièrement.

### Les ajustements à essayer

Quelques repères pour votre poste de travail :

- Le haut de l'écran à hauteur des yeux
- Les pieds à plat, les genoux à hauteur des hanches
- Une pause de deux minutes toutes les heures

> Chaque personne est différente : si une gêne persiste ou s'intensifie, parlez-en à votre médecin ou à votre ostéopathe.`,
  },
  {
    slug: 'bouger-avec-une-lombalgie',
    title: 'Lombalgie : pourquoi rester en mouvement est souvent conseillé',
    excerpt: 'Les recommandations actuelles encouragent à rester actif. On vous explique pourquoi, et avec quelles précautions.',
    date: '2026-10-14',
    body: `Les recommandations de santé publique invitent aujourd'hui à **rester actif** lors d'un épisode de lombalgie commune, plutôt qu'à rester alité.

## Ce que dit l'ostéopathe

La marche, à un rythme confortable, est souvent une bonne alliée. L'idée est de reprendre progressivement vos activités habituelles, sans forcer.

### Quand consulter un médecin

Certains signes nécessitent un avis médical rapide : douleur après une chute, fièvre, fourmillements ou perte de force dans les jambes.

> L'ostéopathie intervient en complément du suivi médical, jamais à sa place.`,
  },
  {
    slug: 'genou-du-coureur',
    title: 'Course à pied : bien reprendre après une pause',
    excerpt: 'Volume, terrain, chaussures : nos repères pour une reprise progressive et sereine.',
    date: '2026-09-30',
    body: `Après quelques semaines sans courir, l'envie de retrouver son niveau d'avant est forte. La clé reste la **progressivité**.

## Augmenter doucement le volume

Une règle souvent citée : ne pas augmenter son volume hebdomadaire de plus de 10 % d'une semaine à l'autre.

### Écouter les signaux du corps

Une gêne inhabituelle qui persiste mérite d'être signalée à un professionnel de santé.`,
  },
  {
    slug: 'colonne-en-bonne-sante',
    title: '5 habitudes pour garder un dos mobile',
    excerpt: 'Mobilité, respiration, sommeil : des habitudes simples à intégrer à votre routine.',
    date: '2026-09-12',
    body: `Un dos mobile est un dos qui bouge souvent, dans toutes les directions. Voici cinq habitudes faciles à adopter.

## Nos cinq habitudes

- Marcher chaque jour
- Varier les positions
- Respirer amplement
- Dormir suffisamment
- S'étirer en douceur le soir`,
  },
  {
    slug: 'nerf-sciatique',
    title: 'Sciatique : comprendre avant d’agir',
    excerpt: 'Qu’appelle-t-on sciatique, et quand faut-il consulter ? Les repères essentiels.',
    date: '2026-08-27',
    body: `Le terme « sciatique » désigne une douleur qui suit le trajet du nerf sciatique, de la fesse vers la jambe.

## Consulter en premier lieu son médecin

Le diagnostic relève du médecin. L'ostéopathe peut ensuite intervenir en complément, avec son accord.`,
  },
  {
    slug: 'osteopathie-et-nourrisson',
    title: 'Ostéopathie et nourrisson : comment se passe une séance ?',
    excerpt: 'Durée, déroulement, précautions : tout ce qu’il faut savoir avant la première consultation de bébé.',
    date: '2026-08-05',
    body: `La séance de bébé se déroule toujours en présence d'un parent, dans un climat calme.

## Le déroulement

Après un échange sur la grossesse, la naissance et les premières semaines, l'ostéopathe observe bébé puis utilise des techniques très douces.`,
  },
  {
    slug: 'portes-ouvertes',
    title: 'Portes ouvertes au cabinet le 6 décembre',
    excerpt: 'Venez découvrir le cabinet, rencontrer votre ostéopathe et poser toutes vos questions sur l’ostéopathie.',
    date: '2026-07-18',
    body: `Le samedi 6 décembre, de 10 h à 13 h, je vous accueille au cabinet pour une matinée d'échanges autour de l'ostéopathie.

## Au programme

- Visite du cabinet
- Présentation de mon approche
- Temps de questions-réponses`,
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}
