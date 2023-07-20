import './globals.css'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iconview.org',
  description: 'Get Access to 25k+ Svg High Quality Vector Icons for web & desktop, Unlimited Download For Free.\n',
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
