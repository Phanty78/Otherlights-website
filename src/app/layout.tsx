import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const MorrisRoman = localFont({
  src: './fonts/MorrisRomanBlack.woff2',
  variable: '--font-morris-roman',
  weight: '100 900',
  fallback: ['serif'],
})
const ParmaPetit = localFont({
  src: './fonts/ParmaPetit-Normal.woff2',
  variable: '--font-parma-petit',
  weight: '100 900',
  fallback: ['serif'],
})

export const metadata: Metadata = {
  title: {
    default:
      'Otherlights - Action/RPG Roguelite for 1 to 4 Players in Local Co-op',
    template: '%s | Otherlights',
  },
  description:
    'Otherlights is an Action/RPG Roguelite designed for 1 to 4 players in local co-op. Explore a dark fantasy universe with unique art style and captivating gameplay.',
  metadataBase: new URL('https://www.otherlights.fr'),
  openGraph: {
    type: 'website',
    url: 'https://www.otherlights.fr/',
    title:
      'Otherlights - Action/RPG Roguelite for 1 to 4 Players in Local Co-op',
    description:
      'Otherlights is an Action/RPG Roguelite designed for 1 to 4 players in local co-op. Explore a dark fantasy universe with unique art style and captivating gameplay.',
    images: [
      {
        url: 'https://www.otherlights.fr/store_capsule_main2.webp',
        width: 1200,
        height: 630,
        alt: 'Otherlights Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Otherlights - Action/RPG Roguelite for 1 to 4 Players in Local Co-op',
    description:
      'Otherlights is an Action/RPG Roguelite designed for 1 to 4 players in local co-op. Explore a dark fantasy universe with unique art style and captivating gameplay.',
    images: ['https://www.otherlights.fr/store_capsule_main2.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico?v=2',
  },
  alternates: {
    canonical: 'https://www.otherlights.fr/',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${MorrisRoman.variable} ${ParmaPetit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
