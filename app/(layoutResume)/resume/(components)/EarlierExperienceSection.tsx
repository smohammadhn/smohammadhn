import SectionHeading from './SectionHeading'
import ExperienceEntry from './ExperienceEntry'
import { earlierExperience } from '../utils/constants'

export default function EarlierExperienceSection() {
  return (
    <section id="resume-earlier-experience" className="resume-section">
      <SectionHeading>Earlier Experience</SectionHeading>
      {earlierExperience.map((item) => (
        <ExperienceEntry item={item} key={item.company} />
      ))}
    </section>
  )
}
