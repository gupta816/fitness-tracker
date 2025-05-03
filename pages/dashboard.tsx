import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

type Workout = {
  id: number
  type: string
  duration: number
}

export default function Dashboard() {
  const router = useRouter()
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [type, setType] = useState('')
  const [duration, setDuration] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) router.push('/login')
    const saved = localStorage.getItem('workouts')
    if (saved) setWorkouts(JSON.parse(saved))
  }, [])

  const addWorkout = () => {
    setError('')
    if (!type.trim()) {
      setError('Workout type is required.')
      return
    }
    const durationNum = Number(duration)
    if (!duration || isNaN(durationNum) || durationNum <= 0) {
      setError('Duration must be a positive number.')
      return
    }
    const newWorkout = { id: Date.now(), type, duration: durationNum }
    const updated = [...workouts, newWorkout]
    setWorkouts(updated)
    localStorage.setItem('workouts', JSON.stringify(updated))
    setType('')
    setDuration('')
  }

  const deleteWorkout = (id: number) => {
    const updated = workouts.filter(w => w.id !== id)
    setWorkouts(updated)
    localStorage.setItem('workouts', JSON.stringify(updated))
  }

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Workout Log</h2>
      <div className="flex gap-2 mb-2">
        <input className="border p-2 rounded w-1/3" placeholder="Type" value={type} onChange={e => setType(e.target.value)} />
        <input className="border p-2 rounded w-1/3" placeholder="Duration (min)" value={duration} onChange={e => setDuration(e.target.value)} />
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={addWorkout}>Add</button>
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <ul>
        {workouts.map(w => (
          <li key={w.id} className="flex justify-between p-2 border-b">
            <span>{w.type} - {w.duration} min</span>
            <button onClick={() => deleteWorkout(w.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
