import { Button } from '@/components/ui/button'
import { createClient } from '@/prismicio'
import Image from 'next/image'
import Link from 'next/link'

export async function AboutSection() {
  const client = createClient()
  const about = (
    await client.getSingle('about', {
      fetchOptions: {
        next: {
          revalidate: 0,
        },
      },
    })
  ).data.quem_somos

  return (
    <section className="w-full sm:pt-24 md:pt-32">
      <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14">
        <div>
          <div className="md:max-w-[547px] w-full md:h-[414px]">
            <Image
              src="/about_img.jpg"
              width={2000}
              height={2000}
              className="rounded-xl"
              alt="about cover image"
            />
          </div>
        </div>
        <div>
          <h3 className="text-primary text-lg mb-5 leading-none">SOBRE NÓS</h3>
          <h2 className="text-4xl md:text-5xl font-bold leading-none mb-5">
            Um pouco sobre nós
          </h2>

          <p className="max-w-[518px] text-sm sm:text-base text-gray-600 mb-4">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {about[0]?.description[0].text}
          </p>

          <p className="max-w-[518px] text-sm sm:text-base text-gray-600 line-clamp-2">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {about[0]?.description[1].text}
          </p>

          <div className="flex gap-10 mt-8">
            <Link href="/sobre">
              <Button className="">Saber mais</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
