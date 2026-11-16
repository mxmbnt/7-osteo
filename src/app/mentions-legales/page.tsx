import { Markdown } from '@/components/Markdown'
import { legal } from '@/content/legal'

export const metadata = { title: legal.mentions.title }

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <h1 className="hero-section-title">{legal.mentions.title}</h1>
      </section>
      <section className="page-section">
        <div className="page-narrow service-content w-richtext">
          <Markdown source={legal.mentions.body} />
        </div>
      </section>
    </main>
  )
}
