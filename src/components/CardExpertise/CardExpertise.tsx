import './CardExpertise.scss'
import SkillBadge from '../SkillBadge/SkillBadge'

interface Props {
  level: 'Senior' | 'Junior'
  technology: string
  duration: string
  skills: string[]
  links: string[]
}

export default function CardExpertise(props: Props) {
  return (
    <div className="CardExpertise elevate-1">
      <div className="row1">
        <h3>
          {props.level}
          <span className="accent">{props.technology}</span>
          <span className="small">developer</span>
        </h3>
        <p>~ {props.duration}</p>
      </div>
      <div className="skills">
        {props.skills.map((e) => (
          <SkillBadge text={e} key={e} />
        ))}
      </div>
      <div className="links">
        {props.links.map((e) => (
          <a href={e} target="_blank" key={e}>
            {e}
          </a>
        ))}
      </div>
    </div>
  )
}
