import './Projects.scss'

import Button from '~/components/Button/Button'
import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import CardProject from '~/components/CardProject/CardProject'

export default function Projects() {
  const listOfProjects = [
    {
      order: 3,
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
      order: 100,
      title: 'Bazarkhodro',
      description:
        'A feature-rich website enabling users to buy/sell cars in the country.',
      techStack: [
        'Vue.js / Nuxt.js / Vuetify.js',
        'SEO',
        'Chart.js',
        'Web Performance',
      ],
      website: 'https://bazarkhodro.ir',
      imgName: 'Bazarkhodro.jpg',
    },
    {
      order: 1,
      title: 'Tafrihnet',
      description:
        'An intuitive website for travellers to check out, compare and reserve attraction tickets.',
      techStack: [
        'Vue.js / Nuxt.js / Vuetify.js',
        '@nuxt/auth',
        '@nuxt/axios',
        'Quill',
      ],
      website: 'https://tafrihnet.com',
      imgName: 'tafrihnet.jpg',
    },
    {
      order: 5,
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
      order: 2,
      title: 'NutricaSteel',
      description:
        "A multilingual website used to introduce the company's products to their customers from all over the world.",
      techStack: [
        'Vue.js / Nuxt.js / Vuetify.js',
        'Mongoose',
        'Data Validation',
        'Logging & Error Handling',
      ],
      website: 'https://nutricasteel.com',
      imgName: 'NutricaSteel.jpg',
    },
    {
      order: 4,
      title: 'This Website :)',
      description: 'My first React project you are exploring right now!!',
      techStack: ['React', 'Typescript', 'React-router-dom'],
      website: 'https://smohammadhn.com/',
      repository: 'https://github.com/smohammadhn/smohammadhn',
      imgName: 'smohammadhn.jpg',
    },
  ]

  return (
    <LayoutDefault>
      <div className="projects-page">
        <div className="grid">
          {listOfProjects
            .sort((a, b) => a.order - b.order)
            .map((e) => (
              <CardProject data={e} key={e.title} />
            ))}
        </div>

        <div className="action-links">
          Isn't it time to
          <Button to="/contact">Contact Me?</Button>
        </div>
      </div>
    </LayoutDefault>
  )
}
