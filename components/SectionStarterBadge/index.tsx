import { ReactNode } from 'react'
import './index.scss'
import { Button } from '@nextui-org/button'

interface Props {
  text: string
  icon?: ReactNode
  bottomSpacer?: boolean
}

export default function SectionStarterBadge(props: Props) {
  return (
    <Button
      className="SectionStarterBadge"
      radius="full"
      size="sm"
      variant="bordered"
      startContent={props.icon}
      style={{ marginBottom: props.bottomSpacer ? '4rem' : '0' }}
    >
      {props.text.toUpperCase()}
    </Button>
  )
}
