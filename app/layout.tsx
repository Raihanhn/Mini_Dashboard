import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from './ClientLayout' // client wrapper

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zettabyte Test',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-6`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
