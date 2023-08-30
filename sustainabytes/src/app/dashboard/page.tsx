"use client";

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
} from "@tremor/react";
import { sv } from "date-fns/locale";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { LocalShipping } from "@mui/icons-material";
import { useState } from "react";

export default function DashboardExample() {
  const [value, setValue] = useState<DateRangePickerValue>({
    from: new Date(2023, 1, 1),
    to: new Date(),
  });
  return (
    <main className="p-12">
      <Title>Dashboard</Title>
      <DateRangePicker
        className="max-w-md mx-auto"
        value={value}
        onValueChange={setValue}
        locale={sv}
        selectPlaceholder="Välj"
        color="rose"
      >
      </DateRangePicker>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Överblick</Tab>
          <Tab>Historik</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card className="h-auto">
                <Flex alignItems="start">
                  <div>
                    <Text>Vikt</Text>
                    <Metric>2000kg</Metric>
                  </div>
                  <Badge icon={CheckCircleIcon}>delivered</Badge>
                </Flex>
                <Flex className="mt-4">
                  <Text className="truncate">68% ($ 149,940)</Text>
                  <Text>$ 220,500</Text>
                </Flex>
              </Card>
              <Card className="h-auto">
                <Flex alignItems="start">
                  <div>
                    <Text>Sales</Text>
                    <Metric>$ 12,699</Metric>
                  </div>
                  <Badge icon={LocalShipping}>delivered</Badge>
                </Flex>
                <Flex className="mt-4">
                  <Text className="truncate">68% ($ 149,940)</Text>
                  <Text>$ 220,500</Text>
                </Flex>
                <ProgressBar value={15.9} className="mt-2" />
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <div className="h-80" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
