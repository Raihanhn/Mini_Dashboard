'use client'


import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'


type Props = {
open: boolean
onClose: () => void
title?: string
children?: React.ReactNode
}


export default function Modal({ open, onClose, title, children }: Props) {
return (
<AnimatePresence>
{open && (
<motion.div
className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
onClick={onClose}
>
<motion.div
className="bg-white rounded-xl max-w-lg w-full p-6 mx-4"
initial={{ scale: 0.9, opacity: 0 }}
animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 28 } }}
exit={{ scale: 0.95, opacity: 0 }}
onClick={(e) => e.stopPropagation()}
>
{title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
<div className="mt-2">{children}</div>
<div className="mt-4 text-right">
<button onClick={onClose} className="px-3 py-2 rounded bg-slate-800 text-white">Close</button>
</div>
</motion.div>
</motion.div>
)}
</AnimatePresence>
)
}