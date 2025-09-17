'use client'
import { usePathname } from 'next/navigation'
import { SessionProvider } from 'next-auth/react'
import Sidebar from '../components/Sidebar'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Show Sidebar only on non-auth pages
  const showSidebar = !pathname.startsWith('/auth')

  return (
    <SessionProvider>
      <div className="flex gap-6">
        {showSidebar && <Sidebar />}
        <main className="flex-1">{children}</main>
      </div>
    </SessionProvider>
  )
}
