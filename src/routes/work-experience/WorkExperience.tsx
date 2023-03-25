import Button from '~/components/Button/Button'
import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import SkillBadge from '~/components/SkillBadge/SkillBadge'
import './WorkExperience.scss'

export default function WorkExperience() {
  return (
    <LayoutDefault>
      <div className="work-experience-page">
        {/* <!-- bazarkhodro --> */}
        <div className="work-exp">
          <div className="work-exp--icon">
            <img src="icons/suitcase.svg" alt="suitcase" />
          </div>
          <div className="work-exp--title">
            <div>Lead Front-end Developer at Bazarkhodro</div>
            <span>Sep. 2021 - present (~2 yrs.)</span>
          </div>

          <p className="work-exp--description">
            Working on five repositories including two websites and three admin
            panels.
          </p>

          <ul className="work-exp--tech">
            {[
              'Vue.js',
              'Nuxt.js',
              'Vuetify.js',
              'SEO',
              'I18n',
              'API calls',
              'Responsive design',
              'Web Performance',
            ].map((e) => (
              <li>
                <SkillBadge text={e} />
              </li>
            ))}
          </ul>

          <ul className="work-exp--products">
            <li>
              <img src="logos/rentifa.png" alt="bazarkhodro fav icon" />
              <span>
                <a href="https://rentifa.com/" target="_blank">
                  Rentifa.com
                </a>
                is a bilingual website providing car rental service in the
                country and neighboring countries.
              </span>
            </li>

            <li>
              <img src="logos/tafrihnet.png" alt="bazarkhodro fav icon" />
              <span>
                <a href="https://tafrihnet.com/" target="_blank">
                  Tafrihnet.com
                </a>
                is an intuitive website for travellers to check out, compare and
                reserve attraction tickets.
              </span>
            </li>

            <li>
              <img src="logos/bazarkhodro.svg" alt="bazarkhodro fav icon" />
              <span>
                <a href="https://bazarkhodro.ir/" target="_blank">
                  Bazarkhodro.ir
                </a>
                is a feature-rich website enabling users to buy/sell cars in the
                country.
              </span>
            </li>
          </ul>
        </div>

        {/* <!-- Ryca --> */}
        <div className="work-exp">
          <div className="work-exp--icon">
            <img src="icons/suitcase.svg" alt="suitcase" />
          </div>

          <div className="work-exp--title">
            <div>Front-end Developer at Ryca</div>
            <span>Jun. 2021 - Sep. 2021 (4 mos.)</span>
          </div>

          <p className="work-exp--description">
            My internship job which I worked on two admin panels. I worked with
            awesome people there!
          </p>

          <ul className="work-exp--tech">
            {[
              'Vue.js',
              'Nuxt.js',
              'Vuetify.js',
              'SCSS',
              'GIT',
              'API calls',
            ].map((e) => (
              <li>
                <SkillBadge text={e} />
              </li>
            ))}
          </ul>

          <ul className="work-exp--products">
            <li>
              <img
                src="logos/ryca.svg"
                alt="bazarkhodro fav icon"
                className="square"
              />
              <span>
                <a href="https://msmarket.ir/" target="_blank">
                  Msmarket.ir
                </a>
                is a convenient admin panel for managing stockholders'
                information of a particular company.
              </span>
            </li>
          </ul>
        </div>

        {/* <!-- freelance --> */}
        <div className="work-exp">
          <div className="work-exp--icon">
            <img src="icons/suitcase.svg" alt="suitcase" />
          </div>

          <div className="work-exp--title">
            <div>Freelance Front-end Developer</div>
            <span>Feb 2020 - Jun. 2021 (~1.5 yr.)</span>
          </div>

          <ul className="work-exp--tech">
            {['HTML5', 'CSS3', 'JAVASCRIPT'].map((e) => (
              <li>
                <SkillBadge text={e} />
              </li>
            ))}
          </ul>

          <ul className="work-exp--products">
            <li>
              <img
                src="logos/nutrica.png"
                alt="bazarkhodro fav icon"
                className="square"
              />
              <span>
                <a href="https://nutricasteel.com/" target="_blank">
                  Nutricasteel.com
                </a>
                is a website belonging to a start-up called "Nutricasteel" to
                introduce their products to their customers from various
                countries.
              </span>
            </li>

            <li>
              <img
                src="logos/hivasls.png"
                alt="bazarkhodro fav icon"
                className="square"
              />
              <span>
                <a href="https://hivasls2.ir/" target="_blank">
                  Hivasls.ir
                </a>
                was a single-page website for students of "Shokuh-e-hiva"
                language institute to enter their online learning platform
                panel. (BigBlueButton)
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="action-links">
        I swear to GOD you gotta
        <Button to="/contact">Contact Me</Button>
        right now :)
      </div>
    </LayoutDefault>
  )
}
