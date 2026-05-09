import dynamic from 'next/dynamic'

const DashboardContent = dynamic(() => import('./DashboardContent'), { ssr: false })

export default function Dashboard() {
  return <DashboardContent />
}