import Button from '~/components/Button/Button'
import CardExpertise from '~/components/CardExpertise/CardExpertise'
import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import './Expertise.scss'

export default function Expertise() {
  return (
    <LayoutDefault>
      <div className="expertise-page">
        <CardExpertise
          level="Senior"
          technology="Vue.js / Nuxt.js"
          duration="2.5 Years"
          skills={[
            'Vuetify',
            'VueX',
            'I18n',
            'Sass',
            'SSR',
            'Schema Ratings',
            'Lodash',
          ]}
          links={[
            'https://rentifa.com',
            'https://tafrihnet.com',
            'https://nutricasteel.com',
            'https://bazarkhodro.ir',
          ]}
        />
        <CardExpertise
          level="Junior"
          technology="Node.js / Express.js"
          duration="3 Months"
          skills={[
            'Typescript',
            'MongoDb',
            'Mongoose',
            'Jest',
            'Winston',
            'Joi',
            'Config',
          ]}
          links={['https://github.com/smohammadhn/my-vidly']}
        />
        <CardExpertise
          level="Junior"
          technology="React.js"
          duration="1 Months"
          skills={[
            'Typescript',
            'React-router-dom',
            'Vite',
            'Function-based Components',
          ]}
          links={['https://smohammadhn.com']}
        />

        <div className="action-links">
          Click to see full list and description of
          <Button to="/projects">My Projects</Button>
          or
          <Button to="/work-experience">My Work Experience</Button>
        </div>
      </div>
    </LayoutDefault>
  )
}
