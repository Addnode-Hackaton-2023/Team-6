import React, { Dispatch, SetStateAction } from 'react'
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

export interface TableData {
  mottagare: string
  datum: string
  vikt: string
  status: string
}

export interface ChartData {
  datum: string
  vikt: number
}

interface Props {
  value: DateRangePickerValue
  setValue: Dispatch<SetStateAction<DateRangePickerValue>>
  chartData: ChartData[]
  tableData: TableData[]
}
const Dashboard = ({ value, setValue, chartData, tableData }: Props) => {
  return (
    <>
      <Flex justifyContent="between">
        <div className="w-20 h-20 relative">
          <Image src="/Allwin_Logo_round_03.png" alt="logo" fill />
        </div>
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
                  data={chartData}
                  index="Datum"
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
                    {tableData.map((item, index) => (
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
    </>
  )
}

export default Dashboard
