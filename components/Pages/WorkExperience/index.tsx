import './index.scss'
import SectionStarterBadge from '@/components/SectionStarterBadge'
import SkillBadge from '@/components/SkillBadge'
import { LiaSuitcaseSolid } from 'react-icons/lia'

interface Props {
  bottomSpacer?: boolean
}

export default function WorkExperience(props: Props) {
  return (
    <section className={props.bottomSpacer ? 'bottom-spacer' : ''}>
      <SectionStarterBadge
        text="WORK EXPERIENCE"
        icon={<LiaSuitcaseSolid />}
        bottomSpacer
      />

      <p className="section__primary-title" style={{ marginBottom: '4rem' }}>
        My Work <span className="font-color-accent">Experience</span>
      </p>

      <div className="work-experience-container">
        {/* <!-- bazarkhodro --> */}
        <div className="work-exp">
          <div className="work-exp--icon" />
          <div className="work-exp--timespan font-color-secondary">
            Sep. 2021 - present (~2 yrs.)
          </div>

          <h3 className="work-exp--title">Lead Front-end Developer</h3>
          <p className="work-exp--company font-color-secondary">
            at Bazarkhodro
          </p>
        </div>

        {/* <!-- Ryca --> */}
        <div className="work-exp">
          <div className="work-exp--icon" />
          <div className="work-exp--timespan font-color-secondary">
            Jun. 2021 - Sep. 2021 (4 mos.)
          </div>

          <h3 className="work-exp--title">Front-end Developer </h3>
          <p className="work-exp--company font-color-secondary">at Ryca</p>
        </div>

        {/* <!-- freelance --> */}
        <div className="work-exp">
          <div className="work-exp--icon" />
          <div className="work-exp--timespan font-color-secondary">
            Feb 2020 - Jun. 2021 (~1.5 yr.)
          </div>

          <h3 className="work-exp--title">Freelance Front-end Developer</h3>
          <p className="work-exp--company font-color-secondary">Freelance</p>
        </div>
      </div>
    </section>
  )
}
