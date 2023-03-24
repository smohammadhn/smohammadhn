import './Projects.scss'

import Button from '~/components/Button/Button'
import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import CardProject from '~/components/CardProject/CardProject'

export default function Projects() {
  return (
    <LayoutDefault>
      <div className="projects-page">
        <div className="grid">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>

        <div className="action-links">
          Isn't it time to
          <Button to="/contact">Contact Me?</Button>
        </div>
      </div>
    </LayoutDefault>
  )
}
