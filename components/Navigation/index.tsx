'use client'

import './index.scss'

import { AiOutlineHome, AiOutlineUser, AiOutlineArrowUp } from 'react-icons/ai'
import { LiaSuitcaseSolid } from 'react-icons/lia'
import { BsHddStack, BsGrid1X2 } from 'react-icons/bs'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { Tooltip } from '@nextui-org/tooltip'

export default function Aside() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const navLinks = [
    {
      title: 'Introduction',
      href: '#section-introduction',
      icon: <AiOutlineHome />,
    },
    {
      title: 'About',
      href: '#section-about',
      icon: <AiOutlineUser />,
    },
    {
      title: 'Work Experience',
      href: '#section-work-experience',
      icon: <LiaSuitcaseSolid />,
    },
    {
      title: 'Expertise',
      href: '#section-expertise',
      icon: <BsHddStack />,
    },
    {
      title: 'Projects',
      href: '#section-projects',
      icon: <BsGrid1X2 />,
    },
  ]

  return (
    <nav className="navigation">
      <ul>
        {navLinks.map(({ href, icon, title }) => (
          <li key={href}>
            <Tooltip
              content={title}
              closeDelay={0}
              showArrow
              placement="left"
              className="tooltip"
              style={{ height: 'auto' }}
            >
              <Link href={href}>
                <Button size="md" radius="full" isIconOnly variant="light">
                  {icon}
                </Button>
              </Link>
            </Tooltip>
          </li>
        ))}

        <li>
          <Tooltip
            content="Back to top"
            closeDelay={0}
            showArrow
            className="tooltip"
            style={{ height: 'auto' }}
            placement="left"
          >
            <Button
              className="back-to-top"
              isIconOnly
              radius="full"
              variant="light"
              onClick={handleScrollToTop}
              size="md"
            >
              <AiOutlineArrowUp />
            </Button>
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}
