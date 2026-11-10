import type { ProjectItem } from '../utils/types'

export default function ProjectEntry({ item }: { item: ProjectItem }) {
  return (
    <article className="resume-entry resume-project">
      <div className="resume-entry__head">
        <h3 className="resume-entry__title">{item.name}</h3>
        {item.period && !item.link && (
          <span className="resume-entry__period">{item.period}</span>
        )}
        {item.link && (
          <a
            className="resume-entry__period"
            href={`https://${item.link}`}
            target="_blank"
          >
            {item.period ? `${item.period} · ` : ''}
            {item.link}
          </a>
        )}
      </div>
      {item.summary && <p className="resume-entry__summary">{item.summary}</p>}
    </article>
  )
}
