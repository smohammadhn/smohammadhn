import 'assets/styles/global.scss'
import './layout.scss'

import type { Metadata } from 'next'
import { Providers } from './providers'

import localFont from 'next/font/local'
import Image from 'next/image'

import Aside from '@/components/Aside'

// global fonts
const lato = localFont({
  src: [
    {
      path: '../assets/fonts/Lato/Lato-Bold.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Lato/Lato-Black.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
})

// global metadata
export const metadata: Metadata = {
  title: 'S.Mohammad Hn. - Portfolio',
  description: 'Say Hi from Mohammad, a full-stack Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={lato.className + ' dark'}>
      <body>
        <Providers>
          <div className="root" id="scroller">
            <Aside />

            {children}
          </div>
        </Providers>

        {/* background image */}
        <Image
          id="main-background-image"
          src={'/main-background.jpeg'}
          alt="Background image"
          fill
          sizes="100vw"
        />
      </body>
    </html>
  )
}
