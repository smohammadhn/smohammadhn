import { RandomizeText } from '../RandomizeText/RandomizeText'
import SkillBadge from '../SkillBadge/SkillBadge'
import './CardProject.scss'

interface Props {
  data: {
    imgName?: string
    title?: string
    description?: string
    techStack?: string[]
    website?: string
    repository?: string
  }
}

export default function CardProject({ data }: Props) {
  return (
    <div className="CardProject elevate-1">
      <img
        src={`/project-images/${data.imgName || 'placeholder.svg'}`}
        alt=""
      />
      <RandomizeText
        className="title accent-color inline-padding block-padding"
        text={data.title || 'Project Title'}
        tagName="h3"
        callOnMounted
        intervalDuration={30}
      />
      <p className="description inline-padding block-padding">
        {data.description || 'Project description'}
      </p>

      {Array.isArray(data.techStack) && data.techStack.length > 0 && (
        <div className="tech-list inline-padding block-padding">
          {data.techStack.map((e) => (
            <SkillBadge text={e} key={e} />
          ))}
        </div>
      )}

      {data.website && (
        <div className="website inline-padding block-padding">
          <span className="accent-color">WEBSITE:</span>
          <a href={data.website}>{data.website}</a>
        </div>
      )}

      {data.repository && (
        <div className="website inline-padding block-padding">
          <span className="accent-color">REPOSITORY:</span>
          <a href={data.repository} target="_blank">
            {data.repository}
          </a>
        </div>
      )}
    </div>
  )
}
