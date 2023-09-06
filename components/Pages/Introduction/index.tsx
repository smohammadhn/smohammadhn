import './index.scss'

import Link from 'next/link'
import SectionStarterBadge from '@/components/SectionStarterBadge'

import { AiOutlineHome } from 'react-icons/ai'
import { BsArrowDownShort } from 'react-icons/bs'

interface Props {
  bottomSpacer?: boolean
}

export default function Introduction(props: Props) {
  return (
    <section className={props.bottomSpacer ? 'bottom-spacer' : ''}>
      <SectionStarterBadge
        text="Introduction"
        icon={<AiOutlineHome />}
        bottomSpacer
      />

      <p className="introduction__title">
        Say Hi from <span className="font-color-accent">Mohammad</span>,
        <br />
        FullStack Software Developer
      </p>

      <p className="introduction__subtitle font-color-secondary">
        Give me your design and I&apos;ll transform it into code.
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
          <span className="font-color-accent">5+</span>
          <span className="font-color-secondary">
            YEARS OF
            <br />
            EXPERIENCE
          </span>
        </li>

        <li>
          <span className="font-color-accent">15+</span>
          <span className="font-color-secondary">
            PROJECTS COMPLETED
            <br />
            /IN PROGRESS
          </span>
        </li>
      </ul>
    </section>
  )
}
