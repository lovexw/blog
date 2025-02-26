import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  // 生成要显示的页码数组
  const getVisiblePages = () => {
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // 如果结束页超出总页数，调整起始页
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // 如果起始页小于1，调整结束页
    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    }
    
    return Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Link
          href={currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`}
          className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
        >
          上一页
        </Link>
      )}
      
      {visiblePages[0] > 1 && (
        <>
          <Link
            href={basePath}
            className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            1
          </Link>
          {visiblePages[0] > 2 && (
            <span className="px-2 text-gray-400">...</span>
          )}
        </>
      )}

      {visiblePages.map((number) => (
        <Link
          key={number}
          href={number === 1 ? basePath : `${basePath}?page=${number}`}
          className={`px-3 py-1.5 rounded-md text-sm transition-colors duration-200 ${currentPage === number ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
        >
          {number}
        </Link>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-2 text-gray-400">...</span>
          )}
          <Link
            href={`${basePath}?page=${totalPages}`}
            className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
        >
          下一页
        </Link>
      )}
    </div>
  )
}