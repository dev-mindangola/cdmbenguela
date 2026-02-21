import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { TestemonialCard } from './TestemonialCard'

import { createClient } from '@/prismicio'

export async function TestemonialSection() {
  const client = createClient()
  const { testemonial } = (
    await client.getSingle('testemonials', {
      fetchOptions: {
        next: {
          revalidate: 0,
        },
      },
    })
  ).data

  return (
    <section className="w-full py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto flex flex-col items-center gap-14">
        <div>
          <h3 className="text-primary text-lg mb-5 text-center uppercase">
            Testemunhos
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold leading-0 mb-5 text-center">
            Nossos alunos falam
          </h2>
          <p className="max-w-[518px] text-sm md:text-base text-gray-600 text-center">
            Conheça os testemunhos de alunos que passaram pela Casa da Música de
            Benguela e descubra o impacto real da nossa missão.
          </p>
        </div>
      </div>

      <div className="max-w-6xl px-8 xl:px-0 mx-auto mt-10 ">
        <Carousel>
          <CarouselContent className="py-10">
            {testemonial.map((testemonial) => {
              return (
                <CarouselItem
                  key={testemonial.avatar.id}
                  className="flex items-center justify-center"
                >
                  <TestemonialCard testemonial={testemonial} />
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
