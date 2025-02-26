import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import Link from 'next/link'
import { getAdjacentPosts } from '../../../utils/posts'

interface PostData {
  title: string
  date?: string
  content: string
}

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

function getPostContent(slug: string): PostData | null {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    return null
  }
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const htmlContent = md.render(content)
  return {
    title: data.title || '',
    date: data.date,
    content: htmlContent
  }
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostContent(params.slug)

  if (!post) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold mb-4">404</h1>
        <p className="text-gray-500">文章不存在</p>
      </div>
    )
  }

  return (
    <article className="prose mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-8">
        {post.date ? new Date(post.date).toLocaleDateString('zh-CN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : '暂无日期'}
      </div>
      <div
        className="markdown-body prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <nav className="mt-8 flex justify-between border-t pt-4">
        {(() => {
          const { prev, next } = getAdjacentPosts(params.slug)
          return (
            <>
              <div className="flex-1">
                {prev && (
                  <Link href={`/posts/${prev.slug}`} className="text-gray-600 hover:text-gray-900">
                    <span className="block text-sm text-gray-500">上一篇</span>
                    {prev.title}
                  </Link>
                )}
              </div>
              <div className="flex-1 text-right">
                {next && (
                  <Link href={`/posts/${next.slug}`} className="text-gray-600 hover:text-gray-900">
                    <span className="block text-sm text-gray-500">下一篇</span>
                    {next.title}
                  </Link>
                )}
              </div>
            </>
          )
        })()}
      </nav>
      <div className="mt-8 text-center">
        <a
          href="https://www.xiaowuleyi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          小吴乐意个人主页
        </a>
      </div>
    </article>
  )
}