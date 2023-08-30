'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function MainExample() {
  return (
    <div className="bg-slate-100 min-h-[70vh] flex justify-center items-center">
      <div className="mx-auto max-w-2xl">
        <div className="w-20 h-20 relative mx-auto">
          <Image src="/Allwin_Logo_round_03.png" alt="logo" fill />
        </div>
        <div className="text-center">
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vi brinner för att minska matsvinn och tar starkt avstånd från den
            onödiga slöseri med mat som pågår idag. Vår verksamhet fokuserar på
            att överlämna överskottsmat till de som behöver den mest, samtidigt
            som vi erbjuder en hållbar och samvetsgrann lösning. Genom vårt
            arbete strävar vi efter att inte bara bekämpa matsvinn, utan även
            att göra en positiv skillnad i samhället genom att hjälpa dem i
            behov. - Allwin enligt ChatGPT
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/dashboard"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
