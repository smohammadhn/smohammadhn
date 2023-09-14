import 'assets/styles/global.scss'

import type { Metadata } from 'next'

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
    <html lang="en" dir="ltr" className="dark">
      <body>
        <div className="root">{children}</div>
      </body>
    </html>
  )
}
