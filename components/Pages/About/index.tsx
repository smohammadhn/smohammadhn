import './index.scss'
import SectionStarterBadge from '@/components/SectionStarterBadge'
import Reveal from '@/components/Reveal'

import { AiOutlineUser } from 'react-icons/ai'

interface Props {
  bottomSpacer?: boolean
}

export default function About(props: Props) {
  return (
    <section
      id="section-about"
      className={props.bottomSpacer ? 'bottom-spacer' : ''}
    >
      <SectionStarterBadge text="about" icon={<AiOutlineUser />} bottomSpacer />

      <p className="section__primary-title">
        Fueling every project with a passionate soul, I craft{' '}
        <span className="font-color-accent">excellence</span>.
      </p>

      <Reveal>
        <p className="about__subtitle font-color-secondary font-size-tiny">
          Result-oriented full-stack developer with 5+ years of professional
          experience with Vue.js / React.js / Node.js / Typescript and
          frameworks on top, such as Nuxt.js, Next.js and Express.js.
          Collaborated in and designed 15+ feature-rich admin panels, websites
          and services used by wide range of customers in the country. Skilled
          in front-end best-practices and concepts including SSR, SEO
          techniques, UI/UX, and performance optimizations.
        </p>
      </Reveal>
    </section>
  )
}
