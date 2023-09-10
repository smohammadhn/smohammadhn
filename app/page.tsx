import './page.scss'

import Expertise from '@/components/Pages/Expertise'
import Introduction from '@/components/Pages/Introduction'
import About from '@/components/Pages/About'
import WorkExperience from '@/components/Pages/WorkExperience'
import Projects from '@/components/Pages/Projects'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="landing">
      <main>
        <Introduction bottomSpacer />
        <About bottomSpacer />
        <WorkExperience bottomSpacer />
        <Expertise bottomSpacer />
        <Projects />
      </main>

      <Navigation />
    </div>
  )
}
