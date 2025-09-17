'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useAuthRedirect() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      // Redirect logged-in users away from auth pages
      router.replace('/') // or dashboard route
    }
  }, [status, router])

  return { session, status }
}
