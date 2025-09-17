'use client'
import { useAuthRedirect } from '../../../hooks/useAuthRedirect'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  const { status } = useAuthRedirect()

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  )
}
