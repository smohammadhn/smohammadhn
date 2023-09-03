import './index.scss'
import { Button } from '@nextui-org/button'
import { Tooltip } from '@nextui-org/tooltip'

export default function Aside() {
  const color = 'secondary'

  return (
    <aside className="aside">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Tooltip
        key={color}
        color={color}
        content={color}
        className="capitalize"
        closeDelay={0}
      >
        <Button variant="flat" color={color} className="capitalize">
          {color}
        </Button>
      </Tooltip>
    </aside>
  )
}
