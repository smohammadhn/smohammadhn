import './index.scss'
import CardProject from '@/components/CardProject'
import SectionStarterBadge from '@/components/SectionStarterBadge'
import { BsGrid1X2 } from 'react-icons/bs'

interface Props {
  bottomSpacer?: boolean
}

export default function Projects(props: Props) {
  const listOfProjects = [
    {
      order: 1,
      fullWidth: true,
      title: 'Rentifa',
      description:
        'A bilingual website providing car rental service in the country and neighboring countries.',
      techStack: [
        'Vue.js / Nuxt.js / Vuetify.js',
        'SEO',
        'I18n',
        'Responsive design',
        'Web Performance',
      ],
      website: 'https://rentifa.com',
      imgName: 'Rentifa.jpg',
    },
    {
      order: 3,
      title: 'Bazarkhodro',
      description:
        'A feature-rich website enabling users to buy/sell cars in the country.',
      techStack: [
        'SEO',
        'Chart.js',
        'Web Performance',
        'Vue.js / Nuxt.js / Vuetify.js',
      ],
      website: 'https://bazarkhodro.ir',
      imgName: 'Bazarkhodro.jpg',
    },
    {
      order: 2,
      title: 'Tafrihnet',
      description:
        'An intuitive website for travellers to check out, compare and reserve attraction tickets.',
      techStack: [
        '@nuxt/auth',
        '@nuxt/axios',
        'Quill',
        'Vue.js / Nuxt.js / Vuetify.js',
      ],
      website: 'https://tafrihnet.com',
      imgName: 'tafrihnet.jpg',
    },
    {
      order: 6,
      title: 'My Vidly',
      description:
        'A Node.js project of a video rental website service which I learned RESTfull apis and CRUD operations.',
      techStack: [
        'Node.js',
        'Express.js',
        'MongoDb',
        'Mongoose',
        'Data Validation',
        'Logging & Error Handling',
      ],
      repository: 'https://github.com/smohammadhn/my-vidly',
    },
    {
      order: 4,
      title: 'NutricaSteel',
      fullWidth: true,
      description:
        "A multilingual website used to introduce the company's products to their customers from all over the world.",
      techStack: [
        'Vue.js / Nuxt.js / Vuetify.js',
        'Internationalization',
        'SSG',
      ],
      website: 'https://nutricasteel.com',
      imgName: 'NutricaSteel.jpg',
    },
    {
      order: 5,
      title: 'This Website :)',
      description: 'My first React project you are exploring right now!!',
      techStack: ['React / Next.js', 'Typescript', 'NextUi', 'React Icons'],
      website: 'https://smohammadhn.com/',
      repository: 'https://github.com/smohammadhn/smohammadhn',
      imgName: 'smohammadhn.jpg',
    },
  ]

  return (
    <section
      id="section-projects"
      className={props.bottomSpacer ? 'bottom-spacer' : ''}
    >
      <SectionStarterBadge text="projects" icon={<BsGrid1X2 />} bottomSpacer />

      <p className="section__primary-title">
        Featured <span className="font-color-accent">Projects</span>
      </p>

      <ul className="projects__grid">
        {listOfProjects
          .sort((a, b) => a.order - b.order)
          .map((e) => (
            <CardProject data={e} key={e.title} />
          ))}
      </ul>
    </section>
  )
}
