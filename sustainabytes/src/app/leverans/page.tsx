'use client'

import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Flex,
  Metric,
  ProgressBar,
  Badge,
  DateRangePicker,
  DateRangePickerValue,
  LineChart,
  Table,
  TableBody,
  TableCell,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'
import { sv } from 'date-fns/locale'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { LocalShipping } from '@mui/icons-material'
import { useState } from 'react'
import { TableHead } from '@mui/material'
import { data } from 'autoprefixer'

export default function LeveransExample() {
  const data = [
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

  const chartdata = [
    {
      year: 1970,
      Vikt: 2.04,
    },
    {
      year: 1971,
      Vikt: 1.96,
    },
    {
      year: 1972,
      Vikt: 1.96,
    },
    {
      year: 1973,
      Vikt: 1.93,
    },
    {
      year: 1974,
      Vikt: 1.88,
    },
  ]

  const [value, setValue] = useState<DateRangePickerValue>({
    from: new Date(2023, 1, 1),
    to: new Date(),
  })

  return (
    <main className="p-12">
      <Flex justifyContent="between">
        <Title>Dashboard</Title>
        <DateRangePicker
          value={value}
          onValueChange={setValue}
          locale={sv}
          selectPlaceholder="Välj"
          color="rose"
        ></DateRangePicker>
      </Flex>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Överblick</Tab>
          <Tab>Historik</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={4} className="gap-6 mt-6">
              <Card className="h-auto">
                <Flex alignItems="start">
                  <div>
                    <Text>Total vikt</Text>
                    <Metric>200000kg</Metric>
                  </div>
                </Flex>
              </Card>
              <Card className="h-auto">
                <Flex alignItems="start">
                  <div>
                    <Text>Total antal matkassar</Text>
                    <Metric>5400000</Metric>
                  </div>
                </Flex>
              </Card>
              <Card>
                <Flex alignItems="start">
                  <div>
                    <Text>Totalt utsläpp (CO2)</Text>
                    <Metric>???</Metric>
                  </div>
                </Flex>
              </Card>
              <Card>
                <Flex alignItems="start">
                  <div>
                    <Text>Totalt antal körningar</Text>
                    <Metric>400000000000000</Metric>
                  </div>
                </Flex>
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <Title>Vikt över tid</Title>
                <LineChart
                  className="mt-6 h-96"
                  data={chartdata}
                  index="year"
                  categories={['Vikt']}
                  colors={['emerald']}
                  yAxisWidth={40}
                />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <Title>Tidigare leveranser</Title>
                <Table className="mt-5 max-h-[60vh]">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell className="bg-dark-tremor-background">
                        Mottagare
                      </TableHeaderCell>
                      <TableHeaderCell className="bg-dark-tremor-background">
                        Datum
                      </TableHeaderCell>
                      <TableHeaderCell className="bg-dark-tremor-background">
                        Vikt
                      </TableHeaderCell>
                      <TableHeaderCell className="bg-dark-tremor-background">
                        Status
                      </TableHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.mottagare}</TableCell>
                        <TableCell>{item.datum}</TableCell>
                        <TableCell>{item.vikt}</TableCell>
                        <TableCell className="max-w-fit">
                          <Badge color="emerald">{item.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  )
}
