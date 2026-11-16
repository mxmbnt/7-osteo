/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Markdown } from '@/components/Markdown'
import { articles, formatDate, getArticle } from '@/content/blog'
import { content } from '@/content/content'
import { blogVisual } from '@/content/images'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug)
  return a ? { title: a.title, description: a.excerpt } : {}
}

/* Article — mise en page « Blog Details » du template */
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug)
  if (!a) notFound()
  return (
    <main>
      <section className="page-hero">
        <div className="hero-effect">
          <div className="text-label-wrap">
            <Link href="/blog" className="lebel-text-02">Blog</Link>
            <p className="lebel-text">/{formatDate(a.date)}</p>
          </div>
          <h1 className="hero-section-title v2">{a.title}</h1>
        </div>
      </section>
      <section className="blog-details-section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="section-content-wrapper">
            <img src={blogVisual(a.title, articles.indexOf(a))} alt="" className="blog-image-v3" />
            <div className="blog-details-content-wrapper">
              <div className="blog-details-content-wrap">
                <div className="blog-testimonial-card">
                  <div className="blog-testimonial-wrap _02">
                    <div className="blog-testimonial">
                      <img src={content.aPropos.photo} alt="" width={48} height={48} className="blog-author-image" />
                      <div className="blog-testimonial-content">
                        <p className="blog-testimonial-name">{content.aPropos.name}</p>
                        <p className="blog-testimonial-role">{formatDate(a.date)}</p>
                      </div>
                    </div>
                  </div>
                  <p className="blog-testimonial-content-02">{a.excerpt}</p>
                </div>
                <Markdown className="w-richtext" source={a.body} />
                <Link href="/blog" className="service-button-02 w-inline-block">
                  <img src="/img/design/vector-4f6c6.svg" alt="" className="button-icon" />
                  <div className="button-title-02">Tous les articles</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
