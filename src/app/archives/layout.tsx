export default function ArchivesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="flex max-w-4xl mx-auto px-6 gap-8 py-8">
        <div className="flex-1">{children}</div>
        <div className="w-60 flex-shrink-0">
          <h2 className="text-xl font-bold mb-4">搜索</h2>
          <input
            type="search"
            placeholder="搜索文章..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-wechat-link"
          />
        </div>
      </div>
    </div>
  )
}