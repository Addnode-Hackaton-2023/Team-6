import { Card, CategoryBar, Flex, ProgressBar, Text } from '@tremor/react'
import Image from 'next/image'

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params)
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="max-w-lg h-72 mx-auto flex items-center justify-center flex-col">
        <h1 className="absolute top-5 left-5">Mottagare: Equmeniakyrkan</h1>
        <Image
          className="absolute top-5 right-5"
          src="/Allwin_Logo_round_03.png"
          alt="logo"
          width={40}
          height={40}
        />
        <h1>Estimerad leverans om: 5min</h1>
        <h1>Upphämtningar innan utlämning: 1</h1>
        <h1 className="mb-5">Total vikt: 471.5kg</h1>
        <CategoryBar
          values={[25, 25, 25, 25]}
          colors={['emerald', 'emerald', 'emerald']}
          markerValue={75}
          className="mt-3 w-full"
        />
      </Card>
    </div>
  )
}
