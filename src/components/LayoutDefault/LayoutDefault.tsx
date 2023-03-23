import './LayoutDefault.scss'
import { ReactNode } from 'react'
import NavigationMenu from '~/components/NavigationMenu/NavigationMenu'

interface Props {
  children: ReactNode
}

const LayoutDefault = ({ children }: Props) => {
  return (
    <main className="application">
      <NavigationMenu />
      <div className="pages-container">{children}</div>
    </main>
  )
}

export default LayoutDefault
