import { NavLink } from 'react-router-dom'
import './NavigationMenu.scss'

export default function Test() {
  const navItems = [
    {
      title: 'Who am I?',
      to: '/',
    },
    {
      title: 'what can I do?',
      to: '/whoAmI',
    },
    {
      title: 'Projects',
      to: '/projects',
    },
    {
      title: 'Work Experience',
      html: (
        <>
          Work <br /> Experience
        </>
      ),
      to: '/work-experience',
    },
  ]

  return (
    <ul className="NavigationMenu">
      {navItems.map((e) => (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
            to={e.to}
          >
            {e.title || e.html}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
