import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: 'KV Launch | Free Websites for Young Entrepreneurs in Quispamsis & Rothesay',
  description: 'KV Launch builds free websites for entrepreneurs aged 19 and under in the Kennebecasis Valley. Plus free resources, funding guides, and tools to help you start your business.',
  openGraph: {
    title: 'KV Launch | Free Websites for Young Entrepreneurs',
    description: 'We build free websites for entrepreneurs aged 19 and under in Quispamsis & Rothesay.',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'KV Launch',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KV Launch | Free Websites for Young Entrepreneurs',
    description: 'We build free websites for entrepreneurs aged 19 and under in Quispamsis & Rothesay.',
    images: ['/Logo.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
