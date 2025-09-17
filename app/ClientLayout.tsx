'use client'
import { SessionProvider } from 'next-auth/react'
import Sidebar from '../components/Sidebar'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="flex gap-6">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </SessionProvider>
  )
}
