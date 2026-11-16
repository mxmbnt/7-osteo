/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { articles, formatDate } from '@/content/blog'
import { blogVisual } from '@/content/images'

export const metadata = { title: 'Blog' }

/* Liste des articles — cartes « blog-card » du template, grille centrée ; titre + extrait + date */
export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="hero-effect">
          <h1 className="hero-section-title">Blog</h1>
        </div>
      </section>
      <section className="blog-section page-section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="section-effect">
            {articles.length === 0 ? (
              <p className="section-subtitle center">Aucun article pour le moment.</p>
            ) : (
              <div className="blog-cards-3 blog-list-grid">
                {articles.map((a, i) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="blog-card w-inline-block">
                    <div className="blog-image-wrapper">
                      <img src={blogVisual(a.title, i)} alt="" className="blog-image" />
                    </div>
                    <div className="blog-content-wrap">
                      <p className="blog-card-date">{formatDate(a.date)}</p>
                      <p className="blog-card-title">{a.title}</p>
                      <p className="blog-card-subtitle">{a.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
