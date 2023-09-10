'use client'

import './index.scss'

import { AiOutlineHome, AiOutlineUser, AiOutlineArrowUp } from 'react-icons/ai'
import { LiaSuitcaseSolid } from 'react-icons/lia'
import { BsHddStack, BsGrid1X2 } from 'react-icons/bs'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { useEffect, useState } from 'react'
import { Tooltip } from '@nextui-org/tooltip'

export default function Aside() {
  const [iconSize, setIconSize] = useState<'md' | 'sm'>('md')

  useEffect(() => {
    if (window.innerWidth < 900) setIconSize('sm')
  }, [])

  const handleScrollToTop = () => {
    const scrollerContainer = document.getElementById('scroller')
    if (scrollerContainer) scrollerContainer.scrollTo(0, 0)
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
                <Button
                  size={iconSize}
                  radius="full"
                  isIconOnly
                  variant="light"
                >
                  {icon}
                </Button>
              </Link>
            </Tooltip>
          </li>
        ))}
      </ul>

      <Tooltip
        content="Back to top"
        closeDelay={0}
        showArrow
        className="tooltip"
        style={{ height: 'auto' }}
      >
        <Button
          className="back-to-top"
          isIconOnly
          radius="full"
          variant="light"
          onClick={handleScrollToTop}
          size={iconSize}
        >
          <AiOutlineArrowUp />
        </Button>
      </Tooltip>
    </nav>
  )
}
