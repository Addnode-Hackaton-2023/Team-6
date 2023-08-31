import Dashboard from '../../Dashboard'

export default function DashboardExample({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="p-12">
      <Dashboard
        apiEndpoint={`drives/getdrivesbygiver/?giverId=${params.slug}&`}
      />
    </main>
  )
}
