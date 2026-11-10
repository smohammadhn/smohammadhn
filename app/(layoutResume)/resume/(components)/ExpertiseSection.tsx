import SectionHeading from './SectionHeading'
import { skillGroups } from '../utils/constants'

export default function ExpertiseSection() {
  return (
    <section id="resume-expertise" className="resume-section">
      <SectionHeading>Technical Expertise</SectionHeading>
      <dl className="resume-expertise">
        {skillGroups.map((group) => (
          <div className="resume-expertise__row" key={group.label}>
            <dt className="resume-expertise__label">{group.label}</dt>
            <dd className="resume-expertise__body">
              <div className="resume-expertise__copy">
                {group.highlights.map((highlight) => (
                  <p className="resume-expertise__highlight" key={highlight}>
                    {highlight}
                  </p>
                ))}
                {group.note && (
                  <p className="resume-expertise__note">{group.note}</p>
                )}
              </div>
              <p className="resume-expertise__stack">
                {group.stack.join(' · ')}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
