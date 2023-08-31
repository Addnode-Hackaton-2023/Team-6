import { useRouter } from 'next/router'

export default function LeveransExample() {
  const router = useRouter()
  console.log(router)

  return <main className="p-12">test</main>
}
