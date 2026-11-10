import type { ProjectItem } from '../utils/types'

export default function ProjectEntry({ item }: { item: ProjectItem }) {
  return (
    <article className="resume-entry">
      <div className="resume-entry__head">
        <h3 className="resume-entry__title">{item.name}</h3>
        {item.link && (
          <a
            className="resume-entry__period"
            href={`https://${item.link}`}
            target="_blank"
          >
            {item.link}
          </a>
        )}
      </div>
      <p className="resume-entry__summary">{item.summary}</p>
      <p className="resume-entry__stack">{item.stack.join(' · ')}</p>
    </article>
  )
}
