import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('token', username)
      router.push('/dashboard')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          className="border p-2 w-full rounded mb-4"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded w-full hover:bg-indigo-700"
          onClick={handleLogin}
        >
          Enter
        </button>
      </div>
    </div>
  )
}
