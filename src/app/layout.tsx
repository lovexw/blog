import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '小吴乐意的博客',
  description: '一个基于 Next.js 构建的现代化个人博客系统，分享技术、生活和思考。',
  keywords: ['博客', '技术博客', 'Next.js', 'React', '前端开发', '编程'],
  authors: [{ name: '小吴乐意' }],
  creator: '小吴乐意',
  publisher: '小吴乐意',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://blog.example.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <script defer src="https://a.xiaowuleyi.com/tracker.min.js" data-website-id="小吴乐意清爽版博客"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2726670321929378" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">小吴乐意的博客</Link>
              <nav>
                <Link href="/archives" className="text-gray-600 hover:text-wechat-link">归档</Link>
              </nav>
            </div>
          </header>
          <main className="flex-1 max-w-4xl mx-auto px-6 py-8 w-full">{children}</main>
          <footer className="py-8 text-center text-sm text-gray-500 border-t">
            <p>© {new Date().getFullYear()} 小吴乐意的博客. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}