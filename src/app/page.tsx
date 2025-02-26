import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

function getPostMetadata() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  const files = fs.readdirSync(postsDirectory)
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(postsDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      return {
        ...data,
        slug: file.replace('.md', ''),
      }
    })
    .sort((a: any, b: any) => (a.date > b.date ? -1 : 1))
  return posts
}

function getArchives(posts: any[]) {
  const archives = posts.reduce((acc: any, post: any) => {
    const date = new Date(post.date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const key = `${year}-${month.toString().padStart(2, '0')}`
    
    if (!acc[key]) {
      acc[key] = {
        year,
        month,
        count: 0,
        posts: []
      }
    }
    
    acc[key].count++
    acc[key].posts.push(post)
    return acc
  }, {})
  
  return Object.entries(archives)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([key, value]) => value)
}

export default function Home() {
  const posts = getPostMetadata()
  const archives = getArchives(posts)

  return (
    <div className="flex gap-8">
      <div className="flex-1 space-y-8">
        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-8">暂无文章</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post: any) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="block p-6 bg-white rounded-lg border border-wechat-border hover:border-wechat-link transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                      {post.description && (
                        <p className="text-gray-600">{post.description}</p>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 ml-4 whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="w-64 shrink-0">
        <div className="bg-white rounded-lg border border-wechat-border p-6">
          <h2 className="text-xl font-bold mb-4">归档</h2>
          <div className="space-y-2">
            {archives.map((archive: any) => (
              <div key={`${archive.year}-${archive.month}`} className="flex justify-between items-center">
                <span className="text-gray-600">
                  {archive.year}年{archive.month}月
                </span>
                <span className="text-sm text-gray-500">
                  {archive.count}篇
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}