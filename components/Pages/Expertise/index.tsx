import './index.scss'
import SectionStarterBadge from '@/components/SectionStarterBadge'
import SkillBadge from '@/components/SkillBadge'
import { BsHddStack } from 'react-icons/bs'
import { SiNuxtdotjs, SiNodedotjs, SiNextdotjs } from 'react-icons/si'

interface Props {
  bottomSpacer?: boolean
}

export default function Expertise(props: Props) {
  const cardsData = [
    {
      technology: 'Vue.js / Nuxt.js',
      icon: <SiNuxtdotjs />,
      duration: '2.5 Years',
      skills: [
        'Vuetify',
        'VueX',
        'I18n',
        'Sass',
        'SSR',
        'Schema Ratings',
        'Lodash',
      ],
      links: [
        'https://rentifa.com',
        'https://tafrihnet.com',
        'https://nutricasteel.com',
        'https://bazarkhodro.ir',
      ],
    },
    {
      technology: 'React.js / Next.js',
      icon: <SiNextdotjs />,
      duration: '6 Months',
      skills: [
        'Typescript',
        'React-router-dom',
        'Vite',
        'Function-based Components',
      ],
      links: ['https://smohammadhn.com'],
    },
    {
      technology: 'Node.js / Express.js',
      icon: <SiNodedotjs />,
      duration: '6 Months',
      skills: [
        'Typescript',
        'MongoDb',
        'Mongoose',
        'Jest',
        'Winston',
        'Joi',
        'Config',
      ],
      links: ['https://github.com/smohammadhn/my-vidly'],
    },
  ]

  return (
    <section
      id="section-expertise"
      className={props.bottomSpacer ? 'bottom-spacer' : ''}
    >
      <SectionStarterBadge
        text="expertise"
        icon={<BsHddStack />}
        bottomSpacer
      />

      <p className="section__primary-title">
        My <span className="font-color-accent">Specializations</span>
      </p>

      {cardsData.map((card) => (
        <div className="CardExpertise elevate-1" key={card.technology}>
          <div className="row1">
            <h3>
              {card.icon}
              <span className="accent">{card.technology}</span>
              <span className="small">development</span>
            </h3>
            <p>~ {card.duration}</p>
          </div>
          <div className="skills">
            {card.skills.map((e) => (
              <SkillBadge text={e} key={e} />
            ))}
          </div>
          <div className="links">
            {card.links.map((e) => (
              <a href={e} target="_blank" key={e}>
                {e}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
