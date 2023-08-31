import Dashboard from './Dashboard'

export default function DashboardExample() {
  return (
    <main className="p-12">
      <Dashboard apiEndpoint="drives/getdrives/?" />
    </main>
  )
}
