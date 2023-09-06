import './index.scss'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { FaBeer } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'

export default function Aside() {
  const color = 'secondary'

  return (
    <aside className="aside">
      <div className="aside__heading">
        <Link href="/" className="aside__heading--logo">
          SMHN
        </Link>
        <span className="aside__heading--role">
          FullStack Software
          <br />
          Developer
        </span>
      </div>

      <Image
        className="aside__avatar"
        src={'/profile-square@500px.jpg'}
        alt="Picture of the author"
        width={500}
        height={500}
      />

      <h1 className="aside__text-primary">
        Seyed Mohammad Hosseininejad
        <br />
        smohammadhnd@gmail.com
      </h1>

      <div className="aside__text-secondary">
        @2023 No copyright, make yourself at home 😁
      </div>

      <ul className="aside__icons">
        <a>
          <MdOutlineAlternateEmail />
        </a>
        <a>
          <AiOutlinePhone />
        </a>
        <a>
          <AiFillLinkedin />
        </a>
        <a>
          <AiOutlineGithub />
        </a>
      </ul>

      <Button color="success" radius="full" fullWidth endContent={<FaBeer />}>
        Let&apos;s talk
      </Button>
    </aside>
  )
}
