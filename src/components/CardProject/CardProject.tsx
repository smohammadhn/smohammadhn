import SkillBadge from '../SkillBadge/SkillBadge'
import './CardProject.scss'

export default function CardProject() {
  return (
    <div className="CardProject elevate-1">
      <img src="profile-square@500px.jpg" alt="" />
      <h3 className="title accent-color inline-padding block-padding">
        Rentifa
      </h3>
      <p className="description inline-padding block-padding">
        A bilingual website providing car rental service in the country and
        neighboring countries.
      </p>
      <div className="tech-list inline-padding block-padding">
        <SkillBadge text="Vuetify" />
        <SkillBadge text="Vuetify" />
        <SkillBadge text="Vuetify" />
      </div>
      <div className="website inline-padding block-padding">
        <span className="accent-color">WEBSITE:</span>
        <a href="https://rentifa.com">https://rentifa.com</a>
      </div>
      <div className="website inline-padding block-padding">
        <span className="accent-color">REPOSITORY:</span>
        <a href="https://github.com/smohammadhn/NutricaSteel">
          https://github.com/smohammadhn/NutricaSteellllllllllll
        </a>
      </div>
    </div>
  )
}
