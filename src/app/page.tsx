import { APropos, Avis, Blog, Contact, Deroulement, FaqSection, Hero, Infos, Motifs, Publics, Tarifs } from '@/components/sections'

/* Page unique : uniquement les blocs du PROCESS §2, avec leurs ancres exactes
   (accueil, a-propos, deroulement, publics, motifs, tarifs, avis, blog, faq, infos, contact) */
export default function Home() {
  return (
    <main>
      <Hero />
      <APropos />
      <Deroulement />
      <Publics />
      <Motifs />
      <Tarifs />
      <Avis />
      <Blog />
      <FaqSection />
      <Infos />
      <Contact />
    </main>
  )
}
