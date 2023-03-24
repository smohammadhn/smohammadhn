import { NavLink } from 'react-router-dom'
import './NavigationMenu.scss'

export default function Test() {
  const navItems = [
    {
      title: 'Who am I?',
      to: '/',
    },
    {
      title: 'What can I do?',
      to: '/expertise',
    },
    {
      title: 'Projects',
      to: '/projects',
    },
    {
      title: 'Work Experience',
      to: '/work-experience',
    },
    {
      title: 'Contact me',
      to: '/work-experience',
    },
  ]

  return (
    <ul className="NavigationMenu">
      <li className="filler"></li>
      {navItems.map((e) => (
        <li key={e.title}>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={e.to}
          >
            <h2>{e.title}</h2>
          </NavLink>
        </li>
      ))}
      <li className="filler"></li>
    </ul>
  )
}
