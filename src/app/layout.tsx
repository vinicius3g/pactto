import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import '@/../styles/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'clone page',
  title: 'Pactto',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
