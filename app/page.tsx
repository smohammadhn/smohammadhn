import CardExpertise from '@/components/CardExpertise'
import Introduction from '@/components/Pages/Introduction'
import About from '@/components/Pages/About'

export default function Home() {
  return (
    <main>
      <Introduction bottomSpacer />
      <About bottomSpacer />

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
    </main>
  )
}
