import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-tr from-blue-100 to-purple-200 p-8">
      <h1 className="text-5xl font-bold mb-4">Welcome to FitTrack</h1>
      <p className="text-xl mb-6">Your personal fitness companion</p>
      <Link href="/login" className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition">
        Get Started
      </Link>
    </div>
  )
}
