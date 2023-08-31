export default function Page({ params }: { params: { slug: string } }) {
  console.log(params)

  return <main className="p-12">test</main>
}
