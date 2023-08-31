'use client'

import React, { useEffect, useState } from 'react'
import {
  Flex,
  DateRangePicker,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
  Card,
  Metric,
  Title,
  Text,
  LineChart,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
  DateRangePickerValue,
} from '@tremor/react'
import Image from 'next/image'
import { sv } from 'date-fns/locale'

export interface DriveData {
  mottagare: string
  datum: string
  vikt: string
  status: string
}

interface Props {
  apiEndpoint: string
}
const Dashboard = ({ apiEndpoint }: Props) => {
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  const [selectedTimeFrame, setSelectedTimeFrame] =
    useState<DateRangePickerValue>({
      from: oneWeekAgo,
      to: new Date(),
    })

  const [driveData, setDriveData] = useState<DriveData[]>([])

  useEffect(() => {
    const timeFrameCallback = async (timeframe: DateRangePickerValue) => {
      const fromDate =
        selectedTimeFrame.from && new Date(selectedTimeFrame.from).toISOString()
      const toDate =
        selectedTimeFrame.to && new Date(selectedTimeFrame.to).toISOString()

      console.log(fromDate, toDate)
      fetch(
        `https://hackaddthon2023-webapi.azurewebsites.net/api/${apiEndpoint}fromDate=${fromDate}&toDate=${toDate}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((response) => {
          const results = response.map((result: any) => {
            const weight = result.pickups.reduce(function (a: any, b: any) {
              return a + b.weight
            }, 0)
            return {
              mottagare: 'test',
              datum: result.startTime,
              vikt: weight,
              status: result.endTime ? 'levererad' : 'pågående',
            }
          })

          setDriveData(results)
        })
    }

    timeFrameCallback(selectedTimeFrame)
  }, [apiEndpoint, selectedTimeFrame])

  const totalPeriodWeight = driveData.reduce(function (a: any, b: any) {
    return a + b.vikt
  }, 0)

  return (
    <>
      <Flex justifyContent="between">
        <div className="w-20 h-20 relative">
          <Image src="/Allwin_Logo_round_03.png" alt="logo" fill />
        </div>
        <DateRangePicker
          value={selectedTimeFrame}
          onValueChange={setSelectedTimeFrame}
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
                    <Metric>{totalPeriodWeight} kg</Metric>
                  </div>
                </Flex>
              </Card>
              <Card className="h-auto">
                <Flex alignItems="start">
                  <div>
                    <Text>Total antal matkassar</Text>
                    <Metric>{totalPeriodWeight / 5} st</Metric>
                  </div>
                </Flex>
              </Card>
              <Card>
                <Flex alignItems="start">
                  <div>
                    <Text>Totalt utsläpp (CO2)</Text>
                    <Metric>
                      {totalPeriodWeight * 2} CO<sub>2</sub>
                    </Metric>
                  </div>
                </Flex>
              </Card>
              <Card>
                <Flex alignItems="start">
                  <div>
                    <Text>Totalt antal körningar</Text>
                    <Metric>{driveData.length} st</Metric>
                  </div>
                </Flex>
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <Title>Vikt över tid</Title>
                <LineChart
                  className="mt-6 h-96"
                  data={driveData}
                  index="datum"
                  categories={['vikt']}
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
                    {driveData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.mottagare}</TableCell>
                        <TableCell>{item.datum}</TableCell>
                        <TableCell>{item.vikt}kg</TableCell>
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
    </>
  )
}

export default Dashboard
