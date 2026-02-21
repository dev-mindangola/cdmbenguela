import { createClient } from '@/prismicio'

export async function OurNumberSection() {
  const client = createClient()
  const {
    data: { numbers },
  } = await client.getSingle('ourNumbers', {
    fetchOptions: {
      next: {
        revalidate: 0,
      },
    },
  })

  return (
    <section className="w-full  bg-[url('/images/5.jpg')] bg-no-repeat bg-bottom bg-cover relative">
      <div className="w-full h-full bg-[#00112C6E] z-0 absolute" />
      <div className="max-w-6xl px-8 xl:px-0 py-20  md:py-28 lg:py-36 z-10 relative mx-auto mt-10 grid grid-cols-1 gap-8 lg:gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {numbers?.map((number, index) => {
          return (
            <div
              key={number.name}
              className={`flex flex-col items-center justify-start
                 ${index === 3 ? 'border-none text-right' : 'lg:border-r-4'}`}
            >
              <div>
                <h3 className="text-5xl md:text-6xl text-white">
                  {number.value}+
                </h3>
                <p className="font-2xl text-white mt-4 text-center">
                  {number.name}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
