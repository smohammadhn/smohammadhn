import SectionHeading from './SectionHeading'
import ProjectEntry from './ProjectEntry'
import { selectedProjects } from '../utils/constants'

export default function SelectedProjectsSection() {
  return (
    <section id="resume-selected-projects" className="resume-section">
      <SectionHeading>Selected Projects</SectionHeading>
      {selectedProjects.map((item) => (
        <ProjectEntry item={item} key={item.name} />
      ))}
    </section>
  )
}
