'use client'
import Card from '../components/Card'
import { motion } from 'framer-motion'


export default function Dashboard() {
return (
<div className="space-y-6">
<motion.header
initial={{ x: -20, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ type: 'spring' }}
className="flex items-center justify-between"
>
<div>
<h1 className="text-2xl font-bold">Welcome to Zettabyte Dashboard</h1>
<p className="text-sm text-slate-600">UI-focused test demo</p>
</div>


<motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8 }} className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">
<div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-full" />
</motion.div>
</motion.header>


<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<Card title="Stat 1">Placeholder stat</Card>
<Card title="Stat 2">Placeholder stat</Card>
<Card title="Stat 3">Placeholder stat</Card>
</div>
</div>
)
}