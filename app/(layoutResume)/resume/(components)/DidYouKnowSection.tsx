import SectionHeading from './SectionHeading'
import { didYouKnow } from '../utils/constants'

export default function DidYouKnowSection() {
  return (
    <section id="resume-did-you-know" className="resume-section">
      <SectionHeading>Did You Know</SectionHeading>
      <ul className="resume-entry__list">
        {didYouKnow.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </section>
  )
}
