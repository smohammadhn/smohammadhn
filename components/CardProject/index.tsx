import './index.scss'
import SkillBadge from '@/components/SkillBadge'
import Image from 'next/image'

interface Props {
  data: {
    imgName?: string
    title?: string
    description?: string
    techStack?: string[]
    website?: string
    repository?: string
    fullWidth?: boolean
  }
}

export default function CardProject({ data }: Props) {
  let classNameLi = 'CardProject'
  if (data.fullWidth) classNameLi += ' full-width'

  let classNameImageContainer = 'CardProject--image-container'
  if (!data.imgName) classNameImageContainer += ' bordered'

  return (
    <li className={classNameLi}>
      <a
        href={data.website || data.repository}
        className={classNameImageContainer}
        target="_blank"
      >
        <Image
          src={`/project-images/${data.imgName || 'placeholder.svg'}`}
          alt={data.title || 'Project Image'}
          fill
          sizes="100%"
        />

        {Array.isArray(data.techStack) && data.techStack.length > 0 && (
          <div className="tech-list">
            {data.techStack.map((e) => (
              <SkillBadge light text={e} key={e} />
            ))}
          </div>
        )}
      </a>
      <h3 className="CardProject--title font-color-accent">
        {data.title || 'Project Title'}
      </h3>{' '}
      &mdash;{' '}
      <p className="CardProject--description">
        {data.description || 'Project description'}
      </p>
    </li>
  )
}
