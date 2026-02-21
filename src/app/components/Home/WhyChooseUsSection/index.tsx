import { createClient } from '@/prismicio'
import Image from 'next/image'
import Link from 'next/link'

export default async function WhyChooseUsSection() {
  const client = createClient()

  const whyChooseUs = await client.getSingle('whychooseus', {
    fetchOptions: {
      next: {
        revalidate: 0,
      },
    },
  })

  return (
    <section className="w-full bg-[#DEE5EF]">
      <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto md:flex items-center justify-between gap-16 py-20 sm:py-24 md:py-32">
        <div className="md:w-1/2 lg:max-w-1/2 w-full mb-10 md:mb-0">
          <div>
            <h3 className="text-primary sm:text-lg mb-5">
              POR QUE NOS ESCOLHER
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-0 mb-5">
              Por que devia nos escolher?
            </h2>

            <p className="lg:max-w-[518px] text-sm sm:text-base text-gray-600">
              A Casa da Música de Benguela é a escolha perfeita para todos
              aqueles que buscam excelência e qualidade nos serviços musicais.
              Somos uma empresa consolidada, com uma vasta experiência no setor,
              oferecendo um portfólio completo de soluções para músicos, bandas,
              produtores e empresas do setor de entretenimento.
            </p>

            <div className="flex flex-col gap-8 mt-8">
              {/* <div className="flex gap-4">
                <div className="w-16 flex-none h-16 flex items-center justify-center rounded-full bg-primary">
                  <Image
                    src="/icons/guitar.svg"
                    width={32}
                    height={32}
                    alt="guitar icon"
                  />
                </div>
                <div>
                  <h5 className="font-bold">Equipamento Gratis</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et.
                  </p>
                </div>
              </div> */}
              {whyChooseUs.data.whys
                .filter((why, index) => index < 3 && why)
                .map((why) => {
                  return (
                    <div key={why.title} className="flex gap-4">
                      <div className="w-10 h-10 sm:w-16 flex-none sm:h-16 flex items-center justify-center rounded-full bg-primary">
                        <Image
                          src="/icons/guitar.svg"
                          width={32}
                          height={32}
                          alt="guitar icon"
                          className="w-4 h-4 sm:h-8 sm:w-8"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold"> {why.title} </h5>
                        <p className="line-clamp-3 text-sm sm:text-base">
                          {why.description}
                        </p>
                      </div>
                    </div>
                  )
                })}

              <div className="w-full flex justify-end text-primary underline">
                <Link href="/servicos">Saber Mais</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 items-center md:w-1/2">
          <div>
            <div className="bg-[url('/images/2.jpg')] w-full h-[500px] bg-center  xl:h-[620px] rounded-xl bg-cover bg-no-repeat"></div>
          </div>

          <div className="grid lg:flex flex-col grid-cols-1 grid-rows-2 gap-8">
            <div className="bg-[url('/images/4.jpg')] bg-cover bg-center bg-no-repeat w-full h-[280px]  lg:h-[310px] rounded-xl"></div>
            <div className="bg-[url('/images/5.jpg')]  bg-cover bg-center bg-no-repeat h-[300px] lg:h-[361px] rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
