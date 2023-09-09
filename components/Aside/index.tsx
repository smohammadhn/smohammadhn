'use client'

import './index.scss'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { FaBeer } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { AiOutlinePhone, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { BiSolidChevronsLeft } from 'react-icons/bi'
import Link from 'next/link'
import { useState } from 'react'

export default function Aside() {
  const [classNameAside, setClassNameAside] = useState('aside invisiblee')

  const toggleAsideVisbility = () => {
    console.log('reached hre')
    if (classNameAside.includes('invisiblee')) setClassNameAside('aside')
    else setClassNameAside('aside invisiblee')
  }

  return (
    <aside className={classNameAside}>
      <div className="aside--container">
        <div className="aside__heading">
          <Link
            href="/"
            className="aside__heading--logo"
            onClick={toggleAsideVisbility}
          >
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
      </div>

      <div className="aside--toggler">
        <Button
          isIconOnly
          radius="full"
          variant="light"
          onClick={toggleAsideVisbility}
          size="sm"
        >
          <BiSolidChevronsLeft />
        </Button>
      </div>
    </aside>
  )
}
