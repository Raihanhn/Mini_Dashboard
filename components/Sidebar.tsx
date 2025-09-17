'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaHome, FaFileAlt, FaUsers, FaSignOutAlt } from 'react-icons/fa'
import { useSession, signOut } from 'next-auth/react'

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const { data: session, status } = useSession()

  if (status === 'loading' || !session) return null // hide while loading

  const navItems = [
    { label: 'Dashboard', href: '/', icon: FaHome },
    { label: 'Posts', href: '/posts', icon: FaFileAlt },
    { label: 'Users', href: '/users', icon: FaUsers },
  ]

  return (
    <div className="flex">
      <motion.div
        animate={{ width: open ? 220 : 72 }}
        className="h-[calc(100vh-32px)] bg-white rounded-2xl shadow p-3 border border-slate-100 flex flex-col justify-between"
      >
        <div>
          {/* Brand / Logo */}
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold text-lg">{open ? 'Zettabyte' : 'Z'}</div>
            <button
              onClick={() => setOpen(o => !o)}
              className="p-1 rounded hover:bg-slate-100"
            >
              {open ? '◀' : '▶'}
            </button>
          </div>

          {/* User Info */}
          {open && (
            <div className="flex items-center gap-3 mb-4 p-2 rounded-md bg-slate-50">
              <Image
                src={session.user?.image || '/placeholder.png'}
                alt={session.user?.name || 'User'}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{session.user?.name}</p>
                <p className="text-xs text-gray-500">{session.user?.email}</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map(item => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href} className="block">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50"
                  >
                    <div className="w-8 h-8 flex items-center justify-center text-gray-700">
                      <Icon size={20} />
                    </div>
                    {open && <div>{item.label}</div>}
                  </motion.div>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex items-center gap-3 p-2 mt-4 rounded-md hover:bg-red-100 text-red-600"
        >
          <FaSignOutAlt size={20} />
          {open && <span>Logout</span>}
        </button>
      </motion.div>
    </div>
  )
}
 