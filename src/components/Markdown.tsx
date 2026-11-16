import { Fragment, type ReactNode } from 'react'

/** Mini-rendu Markdown sans dépendance : ## / ###, listes « - », > citation, **gras**, paragraphes. */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
  )
}

export function Markdown({ source, className }: { source: string; className?: string }) {
  const blocks = source.trim().split(/\n{2,}/)
  return (
    <div className={className}>
      {blocks.map((b, i) => {
        const lines = b.split('\n')
        if (b.startsWith('### ')) return <h3 key={i}>{inline(b.slice(4))}</h3>
        if (b.startsWith('## ')) return <h2 key={i}>{inline(b.slice(3))}</h2>
        if (b.startsWith('> ')) return <blockquote key={i}>{inline(lines.map((l) => l.replace(/^>\s?/, '')).join(' '))}</blockquote>
        if (lines.every((l) => l.startsWith('- ')))
          return (
            <ul key={i} role="list">
              {lines.map((l, j) => (
                <li key={j}>{inline(l.slice(2))}</li>
              ))}
            </ul>
          )
        if (lines.length > 1 && lines.slice(1).every((l) => l.startsWith('- ')))
          return (
            <Fragment key={i}>
              <p>{inline(lines[0])}</p>
              <ul role="list">
                {lines.slice(1).map((l, j) => (
                  <li key={j}>{inline(l.slice(2))}</li>
                ))}
              </ul>
            </Fragment>
          )
        return <p key={i}>{inline(b)}</p>
      })}
    </div>
  )
}
