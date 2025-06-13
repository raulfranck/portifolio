import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raul Franck | Desenvolvedor Full Stack & IA',
  description: 'Desenvolvedor Full Stack especializado em soluções inteligentes com IA, React, Next.js, Node.js e Machine Learning',
  keywords: ['Raul Franck', 'desenvolvedor', 'full stack', 'IA', 'machine learning', 'react', 'next.js', 'node.js'],
  authors: [{ name: 'Raul Franck' }],
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