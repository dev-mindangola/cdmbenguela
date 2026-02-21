import { Button } from '@/components/ui/button'
import { createClient } from '@/prismicio'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ServiceCards } from './ServiceCard'

export async function ServiceSection() {
  const client = createClient()

  const services = await client.getAllByType('services', {
    fetchOptions: {
      next: {
        revalidate: 0,
      },
    },
  })

  return (
    <section className="w-full py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto flex flex-col items-center gap-14">
        <div>
          <h3 className="text-primary text-lg mb-5 text-center uppercase">
            Serviços
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold leading-0 mb-5 text-center">
            O que fazemos
          </h2>
          <p className="max-w-[518px] text-gray-600 text-sm md:text-base text-center">
            Fornecemos soluções integradas e especializadas para quem vive,
            aprende e trabalha com música.
          </p>
        </div>
      </div>

      <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto gap-8 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          className={clsx(
            'w-full gap-4 group hover:bg-primary shadow-lg rounded-lg p-8 flex flex-col items-center justify-center',
            {
              'bg-primary': true,
            },
          )}
        >
          <div>
            <Image
              src={String(services[0].data.image.url)}
              alt={String(services[0].data.image.alt)}
              className="fill-white"
              width={80}
              height={80}
            />
          </div>

          <h4
            className={clsx(
              'font-bold text-xl text-center group-hover:text-white',
              {
                'text-white': true,
              },
            )}
          >
            Curso de musica
          </h4>
          <p
            className={clsx(
              'line-clamp-3 text-center text-sm md:text-base text-muted group-hover:text-white',
              {
                'text-white': true,
              },
            )}
          >
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {services[0].data.description[0].text}
          </p>

          <Button
            asChild
            variant="ghost"
            className="text-base bg-transparent hover:bg-transparent text-white underline group-hover:text-white"
          >
            <Link href={`servicos/cursodemusica`}>Saber mais</Link>
          </Button>
        </div>
        {services?.map((service) => {
          return (
            <ServiceCards active={false} service={service} key={service.id} />
          )
        })}
      </div>
    </section>
  )
}
