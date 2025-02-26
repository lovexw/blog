import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostContainer from '../components/PostContainer'

interface Post {
  slug: string
  title: string
  date: string
  description?: string
}

function getPostMetadata(): Post[] {
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
      } as Post
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts
}

export default function Home({
  searchParams
}: {
  searchParams: { page?: string }
}) {
  const posts = getPostMetadata()
  const currentPage = Number(searchParams.page) || 1

  return (
    <PostContainer
      initialPosts={posts}
      currentPage={currentPage}
    />
  )
}
