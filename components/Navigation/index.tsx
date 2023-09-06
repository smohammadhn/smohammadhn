import './index.scss'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { LiaSuitcaseSolid } from 'react-icons/lia'
import { BsHddStack, BsGrid1X2 } from 'react-icons/bs'
import Link from 'next/link'
import { Button } from '@nextui-org/button'

export default function Aside() {
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
              <Button radius="full" isIconOnly variant="light">
                {icon}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
