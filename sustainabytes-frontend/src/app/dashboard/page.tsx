import Dashboard, { ChartData, TableData } from './Dashboard'

export default function DashboardExample() {
  const tableData: TableData[] = [
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
    {
      mottagare: 'En kyrka',
      datum: '30/08-23',
      vikt: '200kg',
      status: 'levererad',
    },
  ]

  const chartData: ChartData[] = [
    {
      datum: '10-08-23',
      vikt: 2.04,
    },
    {
      datum: '12-08-23',
      vikt: 1.96,
    },
    {
      datum: '15-08-23',
      vikt: 1.96,
    },
    {
      datum: '21-08-23',
      vikt: 1.93,
    },
    {
      datum: '24-08-23',
      vikt: 1.88,
    },
  ]

  return (
    <main className="p-12">
      <Dashboard chartData={chartData} tableData={tableData} />
    </main>
  )
}
