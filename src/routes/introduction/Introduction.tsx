import './Introduction.scss'

import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import Button from '~/components/Button/Button'

export default function Introduction() {
  return (
    <LayoutDefault>
      <div className="introduction-page">
        <img className="avatar" src="profile-square@500px.jpg" alt="avatar" />
        <h1 className="main-title">S.MOHAMMAD HOSSEININEJAD</h1>
        <p className="about-me">
          Result-oriented front-end developer with 2+ years of professional
          experience with Vue.js and other frameworks on top, such as Nuxt.js
          and Vuetify.js. Collaborated in and designed 10+ feature-rich admin
          panels, websites and services used by wide range of customers in the
          country. Skilled in front-end best-practices and concepts including
          SSR, SEO techniques, UI/UX, and performance optimizations.
        </p>

        <Button to="/WhoAmI">What can I do?</Button>
      </div>
    </LayoutDefault>
  )
}
