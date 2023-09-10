import './index.scss'
import SectionStarterBadge from '@/components/SectionStarterBadge'
import { LiaSuitcaseSolid } from 'react-icons/lia'

import moment from 'moment'
import Reveal from '@/components/Reveal'

interface Props {
  bottomSpacer?: boolean
}

export default function WorkExperience(props: Props) {
  const BazarkhodroStartDate = moment('2021-09-01')
  const bazarkhodroToPresent = moment().diff(BazarkhodroStartDate, 'years')

  return (
    <section
      id="section-work-experience"
      className={props.bottomSpacer ? 'bottom-spacer' : ''}
    >
      <SectionStarterBadge
        text="work-experience"
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
            Sep. 2021 - present (~ {bazarkhodroToPresent} yrs.)
          </div>

          <Reveal>
            <h3 className="work-exp--title">Lead Front-end Developer</h3>
          </Reveal>

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

          <Reveal>
            <h3 className="work-exp--title">Front-end Developer </h3>
          </Reveal>

          <p className="work-exp--company font-color-secondary">at Ryca</p>
        </div>

        {/* <!-- freelance --> */}
        <div className="work-exp">
          <div className="work-exp--icon" />
          <div className="work-exp--timespan font-color-secondary">
            Feb 2019 - Jun. 2021 (~ 2.5 yrs.)
          </div>

          <Reveal>
            <h3 className="work-exp--title">Freelance Front-end Developer</h3>
          </Reveal>
          <p className="work-exp--company font-color-secondary">Freelance</p>
        </div>
      </div>
    </section>
  )
}
