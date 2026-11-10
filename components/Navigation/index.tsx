'use client'

import './index.scss'

import { AiOutlineHome, AiOutlineUser, AiOutlineArrowUp } from 'react-icons/ai'
import { LiaSuitcaseSolid } from 'react-icons/lia'
import { BsHddStack, BsGrid1X2 } from 'react-icons/bs'
import Link from 'next/link'
import { Button, Tooltip } from '@heroui/react'

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
            <Tooltip delay={0} closeDelay={0}>
              <Tooltip.Trigger>
                <Link href={href}>
                  <Button
                    size="md"
                    isIconOnly
                    variant="ghost"
                    aria-label={title}
                    className="rounded-full"
                  >
                    {icon}
                  </Button>
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Content placement="left" className="tooltip">
                <Tooltip.Arrow />
                {title}
              </Tooltip.Content>
            </Tooltip>
          </li>
        ))}

        <li>
          <Tooltip delay={0} closeDelay={0}>
            <Tooltip.Trigger>
              <Button
                className="back-to-top rounded-full"
                isIconOnly
                variant="ghost"
                onPress={handleScrollToTop}
                size="md"
                aria-label="Back to top"
              >
                <AiOutlineArrowUp />
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content placement="left" className="tooltip">
              <Tooltip.Arrow />
              Back to top
            </Tooltip.Content>
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}
