import { getPostMetadata } from '../../utils/posts'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  description?: string
  tags?: string[]
}

function getArchives() {
  const posts = getPostMetadata()
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return sortedPosts.reduce((acc: Record<string, Post[]>, post: Post) => {
    const date = new Date(post.date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const key = `${year}-${month.toString().padStart(2, '0')}`
    
    if (!acc[key]) acc[key] = []
    acc[key].push(post)
    return acc
  }, {})
}

export default function Archives() {
  const monthGroups = getArchives()
  const yearGroups = Object.entries(monthGroups).reduce((acc: Record<number, any>, [key, posts]) => {
    const year = Number(key.split('-')[0])
    if (!acc[year]) {
      acc[year] = {}
    }
    acc[year][key] = posts
    return acc
  }, {})

  return (
    <div className="space-y-12">
      {Object.entries(yearGroups)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, months]) => (
          <div key={year} className="space-y-4">
            <h2 className="text-2xl font-bold">{year}</h2>
            {Object.entries(months)
              .sort(([a], [b]) => b.localeCompare(a))
              .map(([key, posts]) => (
                <div key={key} className="mb-8">
                  <h3 className="text-lg font-medium text-gray-500 mb-4">
                    {key.split('-')[1]}月
                  </h3>
                  <div className="space-y-3">
                    {(posts as Post[]).map(post => (
                      <div key={post.slug} className="flex items-baseline">
                        <span className="text-gray-400 w-12 flex-shrink-0">
                          {new Date(post.date).getDate().toString().padStart(2, '0')}
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
        ))}
    </div>
  )
}