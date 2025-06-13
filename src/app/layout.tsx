import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raul Franck | Desenvolvedor Full Stack & IA',
  description: 'Desenvolvedor Full Stack especializado em soluções inteligentes com IA, React, Next.js, Node.js e Machine Learning',
  keywords: ['Raul Franck', 'desenvolvedor', 'full stack', 'IA', 'machine learning', 'react', 'next.js', 'node.js'],
  authors: [{ name: 'Raul Franck' }],
  openGraph: {
    title: 'Raul Franck | Desenvolvedor Full Stack & IA',
    description: 'Desenvolvedor Full Stack especializado em soluções inteligentes com IA, React, Next.js, Node.js e Machine Learning',
    url: 'https://raulfranck.dev',
    siteName: 'Raul Franck Portfolio',
    images: [
      {
        url: 'https://www.raulfranck.com/logo-minimalista.png?v=2025-06-13',
        width: 1200,
        height: 630,
        alt: 'Raul Franck - Desenvolvedor Full Stack & IA',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raul Franck | Desenvolvedor Full Stack & IA',
    description: 'Desenvolvedor Full Stack especializado em soluções inteligentes com IA, React, Next.js, Node.js e Machine Learning',
    images: ['https://www.raulfranck.com/logo-minimalista.png?v=2025-06-13'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo-minimalista.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 