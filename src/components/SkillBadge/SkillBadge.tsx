import './SkillBadge.scss'

interface Props {
  text: string
}

export default function SkillBadge(props: Props) {
  return <div className="SkillBadge">{props.text}</div>
}
