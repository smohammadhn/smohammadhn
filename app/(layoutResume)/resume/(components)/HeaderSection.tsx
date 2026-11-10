import { contacts } from '../utils/constants'

export default function HeaderSection() {
  return (
    <header id="resume-header" className="resume-header">
      <h1 className="resume-header__name">
        <span className="resume-header__first-name">Mohammad</span>
        <span className="resume-header__last-name">Hosseininejad</span>
      </h1>

      <p className="resume-header__title">Senior Full-Stack Engineer</p>

      <p className="resume-header__focus">
        Full-stack engineering · Production AI systems · Real-time interactive
        experiences
      </p>

      <ul className="resume-header__contacts">
        {contacts.map((contact, index) => (
          <li key={contact.label}>
            {index > 0 && <span className="resume-header__sep">/</span>}
            <a href={contact.href} target="_blank">
              {contact.label}
            </a>
          </li>
        ))}
        <li>
          <span className="resume-header__sep">/</span>
          Remote
        </li>
      </ul>
    </header>
  )
}
