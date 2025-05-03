import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <nav className="bg-indigo-600 text-white px-6 py-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl">FitTrack</h1>
          <div className="space-x-4">
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            <Link href="/progress" className="hover:underline">Progress</Link>
            <Link href="/settings" className="hover:underline">Settings</Link>
          </div>
        </div>
      </nav>
      <main className="p-4 fade-in">{children}</main>
    </div>
  )
}
