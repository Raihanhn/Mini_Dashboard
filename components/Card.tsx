'use client'


import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'


type Props = {
title: string
subtitle?: string
href?: string
children?: React.ReactNode
}


export default function Card({ title, subtitle, href, children }: Props) {
return (
<motion.article
layout
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -6 }}
whileHover={{ y: -6 }}
className="bg-white p-4 rounded-2xl shadow-sm border"
>
<h3 className="font-semibold text-lg">{title}</h3>
{subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
{children}
{href && (
<div className="mt-3">
<Link href={href} className="text-sm font-medium text-blue-600">
Read more →
</Link>
</div>
)}
</motion.article>
)
}