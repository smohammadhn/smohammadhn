import { NavLink } from 'react-router-dom'
import './NavigationMenu.scss'

export default function Test() {
  const navItems = [
    {
      title: 'Introduction',
      to: '/',
    },
    {
      title: 'WhoAmI',
      to: '/whoAmI',
    },
    {
      title: 'Projects',
      to: '/projects',
    },
    {
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
