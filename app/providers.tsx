'use client'

import Image from 'next/image'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}

      {/* background image */}
      <Image
        id="main-background-image"
        src={'/main-background.jpeg'}
        alt="Background image"
        fill
        sizes="100vw"
      />
    </NextUIProvider>
  )
}
