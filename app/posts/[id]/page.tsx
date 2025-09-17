'use client'

import { useParams } from 'next/navigation'
import useFetch from '@/hooks/useFetch'

type Post = {
  id: number
  title: string
  body: string
}

export default function SinglePostPage() {
  const { id } = useParams<{ id: string }>()
  
  // fetch single post
  const { data: post, loading, error } = useFetch<Post>(
    id ? `/api/posts/${id}` : null, // 👈 adjust API route
    [id]
  )

  if (loading) {
    return <p className="text-gray-500">Loading post...</p>
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>
  }

  if (!post) {
    return <p className="text-gray-500">No post found.</p>
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  )
}
