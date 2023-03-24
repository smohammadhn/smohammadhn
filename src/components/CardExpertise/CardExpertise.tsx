import './CardExpertise.scss'

interface Props {
  title: string
  duration: string
}

export default function CardExpertise(props: Props) {
  return (
    <div className="CardExpertise">
      <div className="row1">
        <h3>
          {props.title}
          <span>developer</span>
        </h3>
        <p>~ {props.duration}</p>
      </div>
      <div className="row2"></div>
    </div>
  )
}
