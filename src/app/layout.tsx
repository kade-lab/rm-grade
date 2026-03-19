import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The RM Grade — Professional Color Grading Power Grade by Visuals by RM',
  description:
    'The RM Grade is a professional DaVinci Resolve power grade built for automotive and commercial cinematographers. Save 2-3 hours per project. $50 — yours forever.',
  openGraph: {
    title: 'The RM Grade — Professional Color Grading by Visuals by RM',
    description:
      'A DaVinci Resolve power grade that makes every frame look cinematic. Battle-tested by real automotive filmmakers.',
    siteName: 'Visuals by RM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The RM Grade by @visualsbyrm_',
    description: 'Professional DaVinci Resolve power grade — $50, yours forever.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#050a14] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
