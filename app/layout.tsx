import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gourmet Chicken Hero Showcase',
  description: 'Hyper-realistic commercial showcase of gourmet fried chicken',
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
