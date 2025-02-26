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

export default function PostListWithSearch({ 
  initialPosts,
  currentPage,
  basePath 
}: { 
  initialPosts: Post[]
  currentPage: number
  basePath: string
}) {
  const [searchKeyword, setSearchKeyword] = useState('')
  
  const filteredPosts = initialPosts.filter(post => 
    post.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    post.description?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    false
  )
  
  const totalPages = Math.ceil(filteredPosts.length / 10)
  
  const paginatedPosts = filteredPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice((currentPage - 1) * 10, currentPage * 10)

  return (
    <div>
      <Search onSearch={setSearchKeyword} />
      <PostList posts={paginatedPosts} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={basePath}
        />
      )}
    </div>
  )
}