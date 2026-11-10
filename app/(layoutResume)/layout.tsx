import '@/assets/styles/reset.css'
import '@/assets/styles/variables.scss'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/global.scss'
import './layout.scss'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'

const lato = localFont({
  src: [
    {
      path: '../../assets/fonts/Lato/Lato-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Lato/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Lato/Lato-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Resume — S.Mohammad Hn.',
  description: 'Resume of Seyed Mohammad Hosseininejad',
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={lato.className + ' dark'}>
      <body>
        {children}

        <Image
          id="main-background-image"
          src="/main-background.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </body>
    </html>
  )
}
