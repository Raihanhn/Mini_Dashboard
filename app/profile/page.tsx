'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import Image from 'next/image'

export default function ProfilePage() {
  const { session, status } = useProtectedPage()

  if (status === 'loading') return <div>Loading...</div>
  if (!session) return null

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto bg-white rounded-2xl shadow p-6"
      >
        {/* User Avatar */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src={session.user?.image || '/placeholder.png'}
            alt={session.user?.name || 'User'}
            width={120}
            height={120}
            className="rounded-full"
          />
          <h2 className="mt-4 text-2xl font-bold">{session.user?.name}</h2>
          <p className="text-gray-500">{session.user?.email}</p>
        </div>

        {/* Additional Info (optional) */}
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-700">Name:</span>
            <span>{session.user?.name}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-700">Email:</span>
            <span>{session.user?.email}</span>
          </div>
          {/* Add more fields here if needed */}
        </div>
      </motion.div>
    </div>
  )
}
