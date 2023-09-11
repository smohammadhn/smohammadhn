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

  const workExperienceList = [
    {
      slug: 'Bazarkhodro',
      duration: `Sep. 2021 - present (~ ${bazarkhodroToPresent} yrs.)`,
      role: 'Lead Front-end Developer',
      companyName: 'at Bazarkhodro',
    },
    {
      slug: 'Ryca',
      duration: `Jun. 2021 - Sep. 2021 (4 mos.)`,
      role: 'Front-end Developer',
      companyName: 'at Ryca',
    },
    {
      slug: 'Freelance',
      duration: `Feb 2019 - Jun. 2021 (~ 2.5 yrs.)`,
      role: 'Freelance Front-end Developer',
      companyName: 'Freelance',
    },
  ]

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
        {workExperienceList.map((item) => (
          <div className="work-exp" key={item.slug}>
            <div className="work-exp--icon" />
            <Reveal>
              <div className="work-exp--timespan font-color-secondary font-size-tiny">
                {item.duration}
              </div>
            </Reveal>

            <Reveal>
              <h3 className="work-exp--title">{item.role}</h3>
            </Reveal>

            <Reveal>
              <p className="work-exp--company font-color-secondary font-size-tiny">
                {item.companyName}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
