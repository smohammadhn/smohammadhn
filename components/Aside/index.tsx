import './index.scss'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { FaBeer } from 'react-icons/fa'

export default function Aside() {
  const color = 'secondary'

  return (
    <aside className="aside">
      <div className="aside__heading">
        <span className="aside__heading--logo">SMHN</span>
        <span className="aside__heading--role">
          FullStack Software
          <br />
          developer
        </span>
      </div>

      <Image
        className="aside__avatar"
        src={'/profile-square@500px.jpg'}
        alt="Picture of the author"
        width={500}
        height={500}
      />

      <div className="aside__text-primary">
        Seyed Mohammad Hosseininejad smohammadhnd@gmail.com
      </div>

      <div className="aside__text-secondary">@2023 feel free to copy</div>

      <div className="aside__icons">
        <span>
          <FaBeer size={30} color="red" />
        </span>
      </div>

      <Button color="success" radius="full" fullWidth endContent={<FaBeer />}>
        Take a photo
      </Button>
    </aside>
  )
}
