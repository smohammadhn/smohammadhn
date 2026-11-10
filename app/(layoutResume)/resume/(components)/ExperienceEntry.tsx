import type { ExperienceItem } from '../utils/types'

export default function ExperienceEntry({ item }: { item: ExperienceItem }) {
  return (
    <article className="resume-entry">
      <div className="resume-entry__head">
        <h3 className="resume-entry__title">
          {item.role}
          <span className="resume-entry__company"> · {item.company}</span>
        </h3>
        <span className="resume-entry__period">{item.period}</span>
      </div>
      <p className="resume-entry__meta">{item.engagement}</p>

      {item.summary && <p className="resume-entry__summary">{item.summary}</p>}

      {item.highlights && (
        <ul className="resume-entry__list">
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
