import SectionHeading from './SectionHeading'
import ProjectEntry from './ProjectEntry'
import { projects } from '../utils/constants'

export default function SelectedProjectsSection() {
  const totalProjects = projects.length
  const visibleProjects = projects.filter((item) => item.visible)

  return (
    <section id="resume-selected-projects" className="resume-section">
      <SectionHeading>
        Selected Projects ({visibleProjects.length} / {totalProjects})
      </SectionHeading>
      {visibleProjects.map((item) => (
        <ProjectEntry item={item} key={item.name} />
      ))}
    </section>
  )
}
