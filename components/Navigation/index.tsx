'use client'

import './index.scss'

import { AiOutlineHome, AiOutlineUser, AiOutlineArrowUp } from 'react-icons/ai'
import { LiaSuitcaseSolid } from 'react-icons/lia'
import { BsHddStack, BsGrid1X2 } from 'react-icons/bs'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { useEffect, useState } from 'react'

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
      href: '#section-introduction',
      icon: <AiOutlineHome />,
    },
    {
      href: '#section-about',
      icon: <AiOutlineUser />,
    },
    {
      href: '#section-work-experience',
      icon: <LiaSuitcaseSolid />,
    },
    {
      href: '#section-expertise',
      icon: <BsHddStack />,
    },
    {
      href: '#section-projects',
      icon: <BsGrid1X2 />,
    },
  ]

  return (
    <nav className="navigation">
      <ul>
        {navLinks.map(({ href, icon }) => (
          <li key={href}>
            <Link href={href}>
              <Button size={iconSize} radius="full" isIconOnly variant="light">
                {icon}
              </Button>
            </Link>
          </li>
        ))}
      </ul>

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
    </nav>
  )
}
