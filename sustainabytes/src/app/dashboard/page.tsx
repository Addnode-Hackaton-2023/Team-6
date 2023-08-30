'use client'

import { DateRangePickerValue } from '@tremor/react'
import { useState } from 'react'
import Dashboard, { ChartData, TableData } from './Dashboard'

export default function DashboardExample() {
  const [value, setValue] = useState<DateRangePickerValue>({
    from: new Date(2023, 1, 1),
    to: new Date(),
  })

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
      <Dashboard
        value={value}
        setValue={setValue}
        chartData={chartData}
        tableData={tableData}
      />
    </main>
  )
}
