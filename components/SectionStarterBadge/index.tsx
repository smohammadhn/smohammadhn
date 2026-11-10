import './index.scss'
import { ReactNode } from 'react'
import { Button } from '@heroui/react'
import Link from 'next/link'

interface Props {
  text: string
  icon?: ReactNode
  bottomSpacer?: boolean
}

export default function SectionStarterBadge(props: Props) {
  return (
    <Link href={`/${props.text.toLowerCase()}`}>
      <Button
        className="SectionStarterBadge rounded-full"
        size="sm"
        variant="outline"
        style={{ marginBottom: props.bottomSpacer ? 'min(4rem, 12vw)' : '0' }}
      >
        {props.icon}
        <h2>{props.text.toUpperCase()}</h2>
      </Button>
    </Link>
  )
}
