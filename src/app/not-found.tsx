import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <h1 className="hero-section-title">Page introuvable</h1>
      </section>
      <section className="page-section">
        <div className="page-narrow" style={{ textAlign: 'center' }}>
          <p className="section-subtitle">La page que vous cherchez n’existe pas ou a été déplacée.</p>
          <Link href="/" className="normal-button w-inline-block" style={{ display: 'inline-flex', marginTop: 24 }}>
            <p className="button-title-v2">Retour à l’accueil</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
