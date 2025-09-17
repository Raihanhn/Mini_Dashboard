'use client'
import { useEffect, useState } from 'react'

export default function useFetch<T = any>(
  url: string | null,
  deps: any[] = [],
  options?: { forceError?: boolean }
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!url) return // ✅ ensures url is not null
    let cancelled = false

    async function fetchData() {
      setLoading(true)
      setError(null)
      try {
        if (options?.forceError) {
          throw new Error('Forced error (demo)')
        }

        // ✅ TS now knows url is string, not null
        const res = await fetch(url as string)  
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const json = await res.json()
        if (!cancelled) setData(json)
      } catch (err: any) {
        if (!cancelled) setError(err?.message ?? 'Unknown error')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading, error }
}
