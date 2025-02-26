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
    <html lang="zh">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-white border-b border-gray-200 mb-8">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              小吴乐意的博客
            </Link>
            <nav className="flex gap-4">
              <Link href="/archives" className="text-gray-600 hover:text-gray-900 transition-colors">
                归档
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}