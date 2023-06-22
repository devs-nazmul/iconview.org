import './globals.css'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iconview.org',
  description: 'Get Thousands of SGV icons for Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <main> {children} </main>
      </body>
    </html>
  )
}
