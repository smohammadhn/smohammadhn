import './Button.scss'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  to: string
}

export default function Button(props: Props) {
  return (
    <Link className="button" to={props.to}>
      {props.children}
    </Link>
  )
}
