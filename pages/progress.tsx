import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale)

type Workout = {
  id: number
  type: string
  duration: number
}

export default function Progress() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const raw = localStorage.getItem('workouts')
    if (!raw) return
    const workouts: Workout[] = JSON.parse(raw)
    const summary: { [key: string]: number } = {}
    workouts.forEach(w => {
      summary[w.type] = (summary[w.type] || 0) + w.duration
    })
    const chartData = {
      labels: Object.keys(summary),
      datasets: [{
        label: 'Total Duration (min)',
        data: Object.values(summary),
        backgroundColor: '#6366f1'
      }]
    }
    setData(chartData)
  }, [])

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Progress</h2>
      {data ? <Bar data={data} /> : <p>No workout data to display.</p>}
    </Layout>
  )
}
