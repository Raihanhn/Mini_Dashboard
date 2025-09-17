'use client'


import { motion } from 'framer-motion'
import React from 'react'


export default function Header() {
return (
<header className="mb-6 flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold">Welcome back, Developer 👋</h1>
<p className="text-sm text-gray-600 mt-1">A small UI-focused dashboard built for Zettabyte Tech</p>
</div>


<motion.div
initial={{ opacity: 0, y: -6 }}
animate={{ opacity: 1, y: 0 }}
className="bg-white p-3 rounded-2xl shadow-md flex items-center gap-4"
>
<div className="flex flex-col">
<span className="text-sm text-gray-500">Active</span>
<span className="font-semibold">1,248</span>
</div>


{/* simple sparkline using SVG & framer-motion path animation */}
<svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path
d="M2 28 L12 20 L22 24 L32 10 L42 16 L52 8 L62 14 L72 6"
stroke="#22C55E"
strokeWidth="2"
fill="transparent"
initial={{ pathLength: 0 }}
animate={{ pathLength: 1 }}
transition={{ duration: 1.2 }}
/>
</svg>
</motion.div>
</header>
)
}