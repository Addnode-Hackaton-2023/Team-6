'use client'

import { Loading } from '@/app/dashboard/Dashboard'
import {
  Card,
  CategoryBar,
  CategoryBarProps,
  Color,
  Flex,
  ProgressBar,
  Text,
} from '@tremor/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { slug: string } }) {
  const [driveData, setDriveData] = useState<any>(null)

  useEffect(() => {
    fetch(
      `https://hackaddthon2023-webapi.azurewebsites.net/api/drives/getdrive/?id=${params.slug}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then(async (response) => {
        fetch(
          `https://hackaddthon2023-webapi.azurewebsites.net/api/receivers/getreceiver/?id=${response.receiverId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
          .then((recRes) => recRes.json())
          .then(async (recResponse) => {
            setDriveData({ drive: response, receiver: recResponse })
          })
      })
  }, [params])

  if (driveData && driveData.drive && driveData.receiver) {
    const totalPeriodWeight =
      driveData.drive &&
      driveData.drive.pickups.reduce(function (a: any, b: any) {
        return a + b.weight
      }, 0)

    const step = 100 / driveData.drive.totalNumberOfPickups
    let steps = []
    let stepsEmerald: Color[] = []
    for (let i = 1; i <= driveData.drive.totalNumberOfPickups; i++) {
      steps.push(step)
    }
    for (let i = 1; i <= driveData.drive.pickups.length; i++) {
      stepsEmerald.push('emerald' as unknown as Color)
    }

    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Card className="max-w-lg h-72 mx-auto flex items-center justify-center flex-col">
          <h1 className="absolute top-5 left-5">
            Mottagare: {driveData.receiver.name}
          </h1>
          <Image
            className="absolute top-5 right-5"
            src="/Allwin_Logo_round_03.png"
            alt="logo"
            width={40}
            height={40}
          />
          {driveData.drive.endTime ? (
            <h1>Levererad</h1>
          ) : (
            <>
              <h1>
                Estimerad leverans:{' '}
                {new Date(driveData.drive.estimatedDeliveryTime).getHours() +
                  ':' +
                  new Date(driveData.drive.estimatedDeliveryTime).getMinutes()}
              </h1>
              <h1>
                Upphämtningar innan utlämning:{' '}
                {driveData.drive.totalNumberOfPickups -
                  driveData.drive.pickups.length}{' '}
                av {driveData.drive.totalNumberOfPickups}
              </h1>
            </>
          )}
          <h1 className="mb-5">Total vikt: {totalPeriodWeight}kg</h1>
          <CategoryBar
            showLabels={false}
            values={steps}
            colors={stepsEmerald}
            markerValue={
              (100 / driveData.drive.totalNumberOfPickups) *
              driveData.drive.pickups.length
            }
            className="mt-3 w-full"
          />
        </Card>
      </div>
    )
  }
  return <Loading />
}
