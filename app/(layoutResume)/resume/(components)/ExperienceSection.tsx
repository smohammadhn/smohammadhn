import SectionHeading from './SectionHeading'
import ExperienceEntry from './ExperienceEntry'
import { experience } from '../utils/constants'

export default function ExperienceSection() {
  return (
    <section id="resume-experience" className="resume-section">
      <SectionHeading>Most Recent Work Experience</SectionHeading>
      {experience.map((item) => (
        <ExperienceEntry item={item} key={item.company} />
      ))}
    </section>
  )
}
