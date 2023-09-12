'use client'

import './index.scss'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { FaTelegramPlane } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiOutlinePhone, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { CSSProperties, useState } from 'react'

interface interfaceAsideParentStyles extends CSSProperties {}

export default function Aside() {
  const { scrollY } = useScroll()
  const [asideParentStyles, setAsideParentStyles] =
    useState<interfaceAsideParentStyles>({})

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    if (window.innerWidth > 900) return

    let scrollPosition = 1 - latest / 300
    if (scrollPosition < 0.2) scrollPosition = 0.21

    const result: interfaceAsideParentStyles = {
      gridTemplateRows: scrollPosition.toFixed(2) + 'fr',
    }

    if (scrollPosition < 0.5) {
      result.backgroundColor = 'var(--clr-background)'
      result.paddingBlock = (scrollPosition * 2).toFixed(2) + 'rem'
      result.paddingInline = (scrollPosition * 4).toFixed(2) + 'rem'
    }

    setAsideParentStyles(result)
  })

  return (
    <aside className="aside">
      <div className="aside--parent" style={asideParentStyles}>
        <div className="aside--container">
          <div className="aside__heading">
            <Link href="/" className="aside__heading--logo">
              SMHN
            </Link>
            <span className="aside__heading--role">
              Full-stack Software
              <br />
              Developer
            </span>

            <Image
              className="aside__heading--avatar"
              src={'/profile-square@500px.jpg'}
              alt="avatar"
              width={50}
              height={50}
            />
          </div>

          <Image
            className="aside__avatar"
            src={'/profile-square@500px.jpg'}
            alt="avatar"
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
            <a href="https://t.me/smohammadhn" target="_blank">
              <FaTelegramPlane />
            </a>
            <a href="tel:+989021211074">
              <AiOutlinePhone />
            </a>
            <a href="https://www.linkedin.com/in/smohammadhn/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/smohammadhn" target="_blank">
              <AiOutlineGithub />
            </a>
          </ul>

          <a href="mailto:smohammadhnd@gmail.com" target="_blank">
            <Button
              color="success"
              radius="full"
              fullWidth
              endContent={<MdEmail />}
            >
              Email me
            </Button>
          </a>
        </div>
      </div>
    </aside>
  )
}
