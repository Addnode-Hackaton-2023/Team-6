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
  driveId: string
}

interface Props {
  apiEndpoint: string
}

export const Loading = () => (
  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
    <h2 className="text-center text-white text-xl font-semibold">Laddar...</h2>
  </div>
)

const Dashboard = ({ apiEndpoint }: Props) => {
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  const [selectedTimeFrame, setSelectedTimeFrame] =
    useState<DateRangePickerValue>({
      from: oneWeekAgo,
      to: new Date(),
    })
  const [loading, setLoading] = useState(true)
  const [driveData, setDriveData] = useState<DriveData[]>([])

  const driveDataReversed = [...driveData].reverse()

  useEffect(() => {
    const timeFrameCallback = async (timeframe: DateRangePickerValue) => {
      setLoading(true)
      const fromDate =
        selectedTimeFrame.from &&
        new Date(selectedTimeFrame.from).toLocaleDateString()
      const toDate =
        selectedTimeFrame.to &&
        new Date(selectedTimeFrame.to).toLocaleDateString()

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
        .then(async (response) => {
          const results = response.map(async (result: any) => {
            const receiver = await fetch(
              `https://hackaddthon2023-webapi.azurewebsites.net/api/receivers/getreceiver/?id=${result.receiverId}`,
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            ).then((recResult) => recResult.json())

            const weight = result.pickups.reduce(function (a: any, b: any) {
              return a + b.weight
            }, 0)
            return {
              mottagare: receiver.name,
              datum: result.startTime,
              vikt: weight,
              status: result.endTime ? 'levererad' : 'pågående',
              driveId: result.id,
            }
          })
          Promise.all(results).then((promise) => {
            setLoading(false)
            setDriveData(promise)
          })
        })
    }

    timeFrameCallback(selectedTimeFrame)
  }, [apiEndpoint, selectedTimeFrame])

  const totalPeriodWeight = Math.round(
    driveData.reduce(function (a: any, b: any) {
      return a + b.vikt
    }, 0)
  )

  return (
    <>
      {loading ? <Loading /> : null}
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
                    <Metric>{Math.round(totalPeriodWeight / 5)} st</Metric>
                  </div>
                </Flex>
              </Card>
              <Card>
                <Flex alignItems="start">
                  <div>
                    <Text>Totalt utsläpp (CO2)</Text>
                    <Metric>
                      {Math.round(totalPeriodWeight * 2)} CO<sub>2</sub>
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
                    {driveDataReversed.map((item, index) => (
                      <TableRow
                        key={index}
                        onClick={() =>
                          (window.location.href = `/leverans/${item.driveId}`)
                        }
                        className="hover:cursor-pointer"
                      >
                        <TableCell>{item.mottagare}</TableCell>
                        <TableCell>{item.datum}</TableCell>
                        <TableCell>{item.vikt}kg</TableCell>
                        <TableCell className="max-w-fit">
                          <Badge
                            color={
                              item.status === 'levererad' ? 'blue' : 'green'
                            }
                          >
                            {item.status}
                          </Badge>
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
