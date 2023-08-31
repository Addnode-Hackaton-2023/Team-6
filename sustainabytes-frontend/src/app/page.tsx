'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, Flex, Metric } from '@tremor/react'
import { useEffect, useState } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function MainExample() {
  const [data, setData] = useState<any>({})

  useEffect(() => {
    timeFrameCallback()
  }, [])
  const timeFrameCallback = async () => {
    fetch(
      'https://hackaddthon2023-webapi.azurewebsites.net/api/statistics/gettotalstatistics',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response.weight)
        setData(response)
      })
  }

  return (
    <div>
      <div
        className="bg-slate-700"
        style={{
          backgroundImage: 'url(/Allwin_Matsvinn__8757_JPG.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="backdrop-blur-sm w-screen h-[70vh] flex justify-center items-center"
          style={{
            backgroundColor: 'rgba(0,0,0, 0.5)',
          }}
        >
          <div className="mx-auto w-[75vw]">
            <div className="w-20 h-20 relative mx-auto">
              <Image src="/Allwin_Logo_round_03.png" alt="logo" fill />
            </div>
            <div className="text-center">
              <p className="mt-6 text-2xl leading-8 text-white">
                Vi brinner för att minska matsvinn och tar starkt avstånd från
                den onödiga slöseri med mat som pågår idag. Vår verksamhet
                fokuserar på att överlämna överskottsmat till de som behöver den
                mest, samtidigt som vi erbjuder en hållbar och samvetsgrann
                lösning. Genom vårt arbete strävar vi efter att inte bara
                bekämpa matsvinn, utan även att göra en positiv skillnad i
                samhället genom att hjälpa dem i behov. - Allwin enligt ChatGPT
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/dashboard"
                  className="rounded-md bg-red-700 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-700 h-[30vh] py-11">
        <div className="tracking-tight text-white text-center mb-6">
          <h1 className="order-first text-2xl font-semibold">
            Motverkat matsvinn
          </h1>
          <ExpandMoreIcon />
        </div>
        <div className="flex items-center justify-center">
          <div className="mx-auto max-w-full px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-52 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-lg flex-col gap-y-4">
                <dt className="text-base leading-7 text-white">
                  Total vikt räddad mat
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {data.weight} kg
                  <LocalPizzaIcon className="absolute" />
                </dd>
              </div>
              <div className="mx-auto flex max-w-lg flex-col gap-y-4">
                <dt className="text-base leading-7 text-white">
                  Antal utdelade matkassar
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {data.foodBags} st
                  <ShoppingBagIcon className="absolute" />
                </dd>
              </div>
              <div className="mx-auto flex max-w-lg flex-col gap-y-4">
                <dt className="text-base leading-7 text-white">
                  Sparat utsläpp (CO<sub>2</sub>)
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {data.co2} kg
                  <EnergySavingsLeafIcon className="absolute" />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
