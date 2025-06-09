import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meu Portfólio | Desenvolvedor Full Stack',
  description: 'Portfólio pessoal showcasing projetos e habilidades em desenvolvimento web',
  keywords: ['portfólio', 'desenvolvedor', 'web development', 'next.js', 'react'],
  authors: [{ name: 'Raul' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 