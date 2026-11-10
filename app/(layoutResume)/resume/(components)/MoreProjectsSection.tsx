import SectionHeading from './SectionHeading'
import ProjectEntry from './ProjectEntry'
import { moreProjects } from '../utils/constants'

export default function MoreProjectsSection() {
  return (
    <section id="resume-more-projects" className="resume-section">
      <SectionHeading>More Projects</SectionHeading>
      {moreProjects.map((item) => (
        <ProjectEntry item={item} key={item.name} />
      ))}
    </section>
  )
}
