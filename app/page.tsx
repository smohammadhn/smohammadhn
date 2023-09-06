import Expertise from '@/components/Pages/Expertise'
import Introduction from '@/components/Pages/Introduction'
import About from '@/components/Pages/About'
import WorkExperience from '@/components/Pages/WorkExperience'

export default function Home() {
  return (
    <main>
      <Introduction bottomSpacer />
      <About bottomSpacer />
      <WorkExperience bottomSpacer />
      <Expertise />
    </main>
  )
}
