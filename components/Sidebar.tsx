'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'


export default function Sidebar() {
const [open, setOpen] = useState(true)
return (
<div className="flex">
<motion.div
animate={{ width: open ? 220 : 72 }}
className="h-[calc(100vh-32px)] bg-white rounded-2xl shadow p-3 border border-slate-100"
>
<div className="flex items-center justify-between mb-4">
<div className="font-bold">Zettabyte</div>
<button onClick={() => setOpen(o => !o)} className="p-1 rounded hover:bg-slate-100">
{open ? '◀' : '▶'}
</button>
</div>


<nav className="space-y-2">
{[
{ label: 'Dashboard', href: '/' },
{ label: 'Posts', href: '/posts' },
{ label: 'Users', href: '/users' },
].map((item) => (
<Link key={item.href} href={item.href} className="block">
<motion.div
whileHover={{ scale: 1.02 }}
className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50"
>
<div className="w-8 h-8 bg-slate-100 rounded" />
{open && <div>{item.label}</div>}
</motion.div>
</Link>
))}
</nav>
</motion.div>
</div>
)
}