import { ReactNode } from 'react'
import './index.scss'
import { Button } from '@nextui-org/button'
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
        className="SectionStarterBadge"
        radius="full"
        size="sm"
        variant="bordered"
        startContent={props.icon}
        style={{ marginBottom: props.bottomSpacer ? 'min(4rem, 12vw)' : '0' }}
      >
        <h2>{props.text.toUpperCase()}</h2>
      </Button>
    </Link>
  )
}
