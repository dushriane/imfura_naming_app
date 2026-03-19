import type { Metadata } from 'next'
import './globals.css'
import HeroUIProvider from './providers'
import { Nunito_Sans, Poppins } from 'next/font/google'

// Load fonts with CSS variables
const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Imfura Name Oracle',
  description: 'Rwandan naming app with AI-powered name generation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${poppins.variable}`}>
      <head>
        {/* Remove external Google Fonts <link> tags; next/font handles loading */}
      </head>
      <body className={`${nunito.variable} ${poppins.variable}`}>
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  )
}