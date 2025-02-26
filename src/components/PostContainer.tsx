'use client'

import { useState } from 'react'
import Search from './Search'
import PostList from './PostList'
import Pagination from './Pagination'

interface Post {
  slug: string
  title: string
  date: string
  description?: string
}

interface PostContainerProps {
  initialPosts: Post[]
  currentPage: number
}

export default function PostContainer({ initialPosts, currentPage }: PostContainerProps) {
  const [searchKeyword, setSearchKeyword] = useState('')
  const POSTS_PER_PAGE = 10
  
  const filteredPosts = initialPosts.filter(post => 
    post.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    post.description?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    false
  )
  
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  
  const paginatedPosts = filteredPosts
    .slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <Search onSearch={setSearchKeyword} />
      </div>
      <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-100">
        <PostList posts={paginatedPosts} />
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/"
          />
        )}
      </div>
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
    </div>
  )
}