'use client'
import useFetch from '../../hooks/useFetch'
import Card from '../../components/Card'
import Loading from '../../components/Loading'
import { motion } from 'framer-motion'

type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export default function PostsPage() {
  const { data, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts', [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      <div className="mb-4">
        <button
          onClick={() => {
            alert('Use the "Simulate Error" button in the UI section for real UX.')
          }}
          className="px-3 py-1 bg-red-50 text-red-600 rounded"
        >
          Simulate Error
        </button>
      </div>

      {loading && <Loading />}
      {error && <div className="p-4 bg-red-50 text-red-700 rounded">Failed to load posts: {error}</div>}

      <motion.div
        className="grid md:grid-cols-2 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } }
        }}
      >
        {Array.isArray(data) &&
          data.map((post: Post) => (
            <Card key={post.id} title={post.title} href={`/posts/${post.id}`}>
              {post.body.slice(0, 120)}...
            </Card>
          ))}
      </motion.div>
    </div>
  )
}
