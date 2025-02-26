import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '我的博客',
  description: '一个简洁的个人博客',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
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