import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Settings() {
  const router = useRouter()

  const clearData = () => {
    localStorage.clear()
    router.push('/login')
  }

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <button
        onClick={clearData}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Clear All Data & Logout
      </button>
    </Layout>
  )
}
