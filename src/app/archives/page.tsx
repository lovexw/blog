import { getPostMetadata } from '../../utils/posts'
import Link from 'next/link'

function getArchives() {
  const posts = getPostMetadata()
  const yearGroups = posts.reduce((acc: any, post: any) => {
    const date = new Date(post.date)
    const year = date.getFullYear()
    
    if (!acc[year]) {
      acc[year] = []
    }
    
    acc[year].push(post)
    return acc
  }, {})
  
  return yearGroups
}

export default function Archives() {
  const yearGroups = getArchives()

  return (
    <div className="space-y-12">
      {Object.entries(yearGroups)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, posts]: [string, any[]]) => (
          <div key={year} className="space-y-4">
            <h2 className="text-2xl font-bold">{year}</h2>
            <div className="space-y-4">
              {posts
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map(post => (
                  <div key={post.slug} className="flex items-baseline">
                    <span className="text-gray-400 w-20 flex-shrink-0">
                      {new Date(post.date).toLocaleDateString('zh-CN', {
                        month: '2-digit',
                        day: '2-digit'
                      })}
                    </span>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-gray-600 hover:text-wechat-link transition-colors"
                    >
                      {post.title}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  )
}