import './page.scss'

import HeaderSection from './(components)/HeaderSection'
import ProfileSection from './(components)/ProfileSection'
import ExpertiseSection from './(components)/ExpertiseSection'
import ExperienceSection from './(components)/ExperienceSection'
import SelectedProjectsSection from './(components)/SelectedProjectsSection'
import MoreProjectsSection from './(components)/MoreProjectsSection'
import EarlierExperienceSection from './(components)/EarlierExperienceSection'
import DidYouKnowSection from './(components)/DidYouKnowSection'

// Page composition: reorder, move or remove sections here
export default function ResumePage() {
  return (
    <main className="resume">
      {/* Page 1: everything a recruiter needs in a quick scan */}
      <div className="resume__page">
        {/* Name, title and contact links */}
        <HeaderSection />

        {/* Two-sentence positioning statement */}
        <ProfileSection />

        {/* Technologies grouped by area, no ratings */}
        <ExpertiseSection />

        {/* Current Canadian engagements */}
        <ExperienceSection />

        {/* Strongest projects, each showing a different engineering strength */}
        <SelectedProjectsSection />
      </div>

      {/* Page 2: optional depth for interested readers */}
      <div className="resume__page">
        {/* Remaining projects that didn't fit page one */}
        <MoreProjectsSection />

        {/* Pre-2023 roles, kept compact */}
        <EarlierExperienceSection />

        {/* Short personal facts as a closing note */}
        <DidYouKnowSection />
      </div>
    </main>
  )
}
