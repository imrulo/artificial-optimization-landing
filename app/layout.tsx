import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ArtificialOptimization.com - Premium AI & Optimization Domain',
  description: 'Acquire ArtificialOptimization.com - The definitive digital asset for AI optimization, machine learning, and business intelligence. Premium domain with exceptional SEO value and brand authority.',
  keywords: 'artificial optimization, AI optimization, machine learning, business intelligence, premium domain, SEO domain, AI consulting',
  authors: [{ name: 'imrulo.eth' }],
  openGraph: {
    title: 'ArtificialOptimization.com - Premium AI & Optimization Domain',
    description: 'Acquire the definitive digital asset for AI optimization and machine learning. Premium domain with exceptional SEO value.',
    url: 'https://artificialoptimization.com',
    siteName: 'ArtificialOptimization.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'ArtificialOptimization.com - Premium AI Domain',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArtificialOptimization.com - Premium AI & Optimization Domain',
    description: 'Acquire the definitive digital asset for AI optimization and machine learning.',
    images: ['https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
