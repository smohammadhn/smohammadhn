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
            <dd className="resume-expertise__skills">
              {group.highlights.join(', ')}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
