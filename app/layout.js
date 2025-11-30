import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ParticlesBackground from './components/ParticlesBackground'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata = {
  title: 'Rangga Arya Pradana - Portofolio',
  description: 'Portofolio Pribadi',
  icons: {
    icon: '/profil.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  )
}