import 'assets/styles/global.scss'
import './layout.scss'

import type { Metadata } from 'next'
import { Providers } from './providers'

import localFont from 'next/font/local'

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
  description: 'Say Hi from Mohammad, FullStack Software Developer',
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
            <div className="container">
              <Aside />

              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
