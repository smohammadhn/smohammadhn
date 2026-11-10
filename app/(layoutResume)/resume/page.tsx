import './page.scss'

import HeaderSection from './(components)/HeaderSection'
import ProfileSection from './(components)/ProfileSection'
import ExpertiseSection from './(components)/ExpertiseSection'
import ExperienceSection from './(components)/ExperienceSection'
import SelectedProjectsSection from './(components)/SelectedProjectsSection'
import EarlierExperienceSection from './(components)/EarlierExperienceSection'

// Page composition: reorder, move or remove sections here
export default function ResumePage() {
  return (
    <main className="resume">
      {/* Page 1: everything a recruiter needs in a quick scan */}
      <div className="resume__page resume__page--spread">
        {/* Name, title and contact links */}
        <HeaderSection />

        {/* Two-sentence positioning statement */}
        <ProfileSection />

        {/* Technologies grouped by area, no ratings */}
        <ExpertiseSection />

        {/* Current Canadian engagements */}
        <ExperienceSection />
      </div>

      {/* Page 2: optional depth for interested readers */}
      <div className="resume__page resume__page--spread">
        {/* Projects, selected and the rest, under one heading */}
        <SelectedProjectsSection />

        {/* Pre-2023 roles, kept compact, with a languages line */}
        <EarlierExperienceSection />
      </div>
    </main>
  )
}
