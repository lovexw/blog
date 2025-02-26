import { Metadata } from 'next'
import { getPost as getPostData, getAllPostIds } from '../../../utils/posts'

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData(params.id)
  return {
    title: `${postData.title} - 小吴乐意的博客`,
    description: postData.description || `${postData.title} - 小吴乐意的博客`,
    openGraph: {
      title: postData.title,
      description: postData.description || postData.title,
      type: 'article',
      publishedTime: postData.date,
      authors: ['小吴乐意'],
    },
    twitter: {
      card: 'summary',
      title: postData.title,
      description: postData.description || postData.title,
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPostIds()
  return posts.map((id) => ({
    id,
  }))
}

export default async function Post({ params }: Props) {
  const postData = await getPostData(params.id)
  
  return (
    <article className="prose prose-slate max-w-none">
      <h1>{postData.title}</h1>
      <div className="text-gray-500 mb-4">{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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