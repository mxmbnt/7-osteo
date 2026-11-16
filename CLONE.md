# 7-osteo — Thomas Bernard, ostéopathe (template Webflow « Presma », licence achetée)

Praticien, adresse et avis **fictifs** : à remplacer avant mise en ligne.
Conforme à `PROCESS-SITE-TEMPLATE-OSTEO.md` : un seul praticien, **une seule page**
(+ `/blog`, `/blog/[slug]`, `/mentions-legales`, `/confidentialite`).

## Démarrer
```bash
npm install && npm run dev
```

## Contenu (tout est piloté par des données)
- `src/content/content.ts` — toutes les sections du PROCESS §2 + `BOOKING_HREF` (lien RDV unique)
- `src/content/schema.ts` — modèle + limites de caractères : **le build échoue** si un texte dépasse
- `src/content/blog.ts`, `src/content/legal.ts`, `src/content/images.ts` (repli par mots-clés)

## Page unique — ancres
`accueil` · `a-propos` · `deroulement` · `publics` · `motifs` · `tarifs` · `avis` · `blog` · `faq` · `infos` · `contact`
Correspondance avec le template : À propos = section « Our vision » ; Déroulement = « How it works » ;
Publics = onglets « Experience the difference » ; Motifs = mosaïque de services (répétée par 4) ;
Tarifs = cartes de prix ; Avis = carrousel ; Infos = section « Reliable » + carte ; Contact = section contact.

## Interactions (sans GSAP, sans webflow.js)
- React + `useState` : menu mobile, onglets, carrousel d'avis, FAQ, formulaire (`src/components/ui.tsx`, `chrome.tsx`)
- IntersectionObserver : fondus d'apparition, titre révélé lettre par lettre (`src/components/Interactions.tsx`)
- CSS : survols (libellés qui défilent, flèches, zooms), transitions

## Images (≈ 470 Ko, WebP ≤ 900 px)
- `public/img/client/` : logo carré, photo du hero, photo du praticien
- `public/img/design/` : icônes et visuels génériques (intérieurs) choisis parmi les moins « nettoyage de moquette »
  du template — à remplacer par des visuels ostéo si possible.

## À savoir
- Police des titres « Stack Sans Text » chargée depuis Google Fonts (absente de next/font).
- Formulaire de contact : endpoint à brancher (`// TEMPLATE:`).
- Le portrait du praticien est le seul portrait disponible dans le template (homme) : d'où un praticien.
