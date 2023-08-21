import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export const metadata: Metadata = {
  title: 'Andrea Cardinale - Web Enginner',
  description: 'Andrea Cardinale Personal Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont`}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
