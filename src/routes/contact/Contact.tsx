import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import './Contact.scss'

export default function Contact() {
  const items = [
    {
      iconName: 'phone',
      link: {
        text: '(+98)9021211074',
        href: 'tel:+989021211074',
      },
    },
    {
      iconName: 'email',
      link: {
        text: 'smohammadhnd@gmail.com',
        href: 'mailto:smohammadhnd@gmail.com',
      },
    },
    {
      iconName: 'github',
      link: {
        text: 'github.com/smohammadhn',
        href: 'https://github.com/smohammadhn',
      },
    },
    {
      iconName: 'linkedin',
      link: {
        text: 'linkedin.com/in/smohammadhn',
        href: 'https://www.linkedin.com/in/smohammadhn/',
      },
    },
  ]

  return (
    <LayoutDefault>
      <div className="contact-page">
        <ul>
          {items.map((e) => (
            <li key={e.iconName}>
              <div>
                <img
                  src={`icons/${e.iconName}.svg`}
                  alt={`${e.iconName} logo`}
                />
              </div>
              <h3>
                <a href={e.link.href}>{e.link.text}</a>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </LayoutDefault>
  )
}
