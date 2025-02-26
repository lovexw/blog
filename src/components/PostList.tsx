import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  description?: string
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <article key={post.slug} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-gray-200">
          <Link href={`/posts/${post.slug}`} className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-wechat-link">{post.title}</h2>
              {post.description && (
                <p className="text-gray-600 mb-2 line-clamp-2">{post.description}</p>
              )}
            </div>
            <div className="text-sm text-gray-500 flex-shrink-0 ml-4">
              {new Date(post.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}