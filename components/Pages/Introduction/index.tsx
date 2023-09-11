import './index.scss'

import { Tooltip } from '@nextui-org/tooltip'
import Link from 'next/link'
import SectionStarterBadge from '@/components/SectionStarterBadge'

import { AiOutlineHome } from 'react-icons/ai'
import { BsArrowDownShort } from 'react-icons/bs'

import moment from 'moment'

interface Props {
  bottomSpacer?: boolean
}

export default function Introduction(props: Props) {
  const dateMyProgrammingStarted = moment('2019-01-01')
  const yearDifference = moment().diff(dateMyProgrammingStarted, 'years')

  return (
    <section
      id="section-introduction"
      className={props.bottomSpacer ? 'bottom-spacer' : ''}
    >
      <SectionStarterBadge
        text="introduction"
        icon={<AiOutlineHome />}
        bottomSpacer
      />

      <p className="introduction__title">
        Say Hi from <span className="font-color-accent">Mohammad</span>,
        <br />
        Full-stack Software Developer
      </p>

      <p className="introduction__subtitle font-color-secondary font-size-tiny">
        Give me your design, I&apos;ll transform it into code.
        <br />
        Just like that! 🫰
      </p>

      <Link
        href="#section-projects"
        className="introduction__floating-btn--container"
      >
        <button className="introduction__floating-btn">
          <span className="center-icon">
            <BsArrowDownShort size={30} />
          </span>

          <svg className="curved" viewBox="30 35 140 130">
            <path
              fill="transparent"
              id="curve"
              d="
            M 50, 100
            a 50,50 0 1,1 100,0
            a 50,50 0 1,1 -100,0
          "
            />
            <text width="500">
              <textPath href="#curve">
                MY PROJECTS &nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp; MY PROJECTS
                &nbsp;&nbsp; .
              </textPath>
            </text>
          </svg>
        </button>
      </Link>

      <ul className="introduction__stats">
        <li>
          <Tooltip
            content="Since early 2019"
            closeDelay={0}
            showArrow
            className="tooltip"
            style={{ height: 'auto' }}
          >
            <span className="font-color-accent">{yearDifference}+</span>
          </Tooltip>

          <span className="font-color-secondary font-size-tiny">
            YEARS OF
            <br />
            EXPERIENCE
          </span>
        </li>

        <li>
          <span className="font-color-accent">15+</span>
          <span className="font-color-secondary font-size-tiny">
            PROJECTS COMPLETED
            <br />
            /IN PROGRESS
          </span>
        </li>
      </ul>
    </section>
  )
}
