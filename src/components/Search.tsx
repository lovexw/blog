'use client'

import { useState } from 'react'

interface SearchProps {
  onSearch: (keyword: string) => void
}

export default function Search({ onSearch }: SearchProps) {
  const [keyword, setKeyword] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setKeyword(value)
    onSearch(value)
  }

  return (
    <div className="mb-8">
      <input
        type="search"
        placeholder="搜索文章..."
        value={keyword}
        onChange={handleSearch}
        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-wechat-link"
      />
    </div>
  )
}