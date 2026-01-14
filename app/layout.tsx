import type { Metadata } from 'next'
import './globals.css'
import { HeroUIProvider } from './providers'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  )
}
