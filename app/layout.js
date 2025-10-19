import { Inter } from 'next/font/google'
import './globals.css'
import ParticlesBackground from './components/ParticlesBackground' // <-- Import

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rangga Arya Pradana - Portfolio',
  description: 'Portofolio pribadi dibuat dengan Next.js dan CSS Modules',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackground /> {/* <-- Tambahkan di sini */}
        {children}
      </body>
    </html>
  )
}