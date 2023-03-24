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
          skills={['MongoDb', 'Mongoose', 'Jest', 'Winston', 'Joi', 'Config']}
          links={['https://github.com/smohammadhn/my-vidly']}
        />
        <CardExpertise
          level="Junior"
          technology="React.js"
          duration="1 Months"
          skills={['React-router-dom', 'Function-based Components', 'Vite']}
          links={['https://smohammadhn.com']}
        />
      </div>
    </LayoutDefault>
  )
}
