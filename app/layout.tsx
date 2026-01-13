import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
