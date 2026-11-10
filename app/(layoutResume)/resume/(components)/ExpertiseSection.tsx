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
              <ul className="resume-expertise__highlights">
                {group.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
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
