import type { ExperienceItem } from '../utils/types'

function toSiteHref(siteUrl: string) {
  return /^https?:\/\//.test(siteUrl) ? siteUrl : `https://${siteUrl}`
}

function toSiteLabel(siteUrl: string) {
  return siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

export default function ExperienceEntry({ item }: { item: ExperienceItem }) {
  return (
    <article className="resume-entry">
      <div className="resume-entry__head">
        <h3
          className={
            item.role
              ? 'resume-entry__title'
              : 'resume-entry__title resume-entry__title--company'
          }
        >
          {item.role ? (
            <>
              {item.role}
              <span className="resume-entry__company"> · {item.company}</span>
            </>
          ) : (
            item.company
          )}
          {item.siteUrl && (
            <a
              className="resume-entry__site"
              href={toSiteHref(item.siteUrl)}
              target="_blank"
            >
              {toSiteLabel(item.siteUrl)}
            </a>
          )}
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
