import { OurNumberSection } from '@/app/components/Home/OurNumberSection'
import { ServiceSection } from '@/app/components/Home/ServiceSection'
import { Header } from '@/app/components/Shared/Header'
import { createClient } from '@/prismicio'
import { LucideStar } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function ServicePage() {
  const client = createClient()

  // const services = await client.getAllByType('services')

  const whyChooseUs = await client.getSingle('whychooseus', {
    fetchOptions: {
      next: {
        revalidate: 0,
      },
    },
  })

  return (
    <div>
      <Header
        title="Serviços"
        subTitle="Este site está em desenvolvimento pela Mind Creative."
      />
      <main>
        <ServiceSection />
        {/* <section className="w-full py-20 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-14">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-0 mb-5 text-center">
                O que fazemos
              </h2>
              <p className="max-w-[518px] text-gray-600 text-center">
                A Casa da Música de Benguela (CDM) é um centro formação,
                produção e difusão musical fundado pelo Padre Moisés Rafael em
                setembro de 2018.
              </p>
            </div>
          </div>

          <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto gap-8 mt-10 grid md:grid-cols-2">
            {services.map((service) => {
              return (
                <div
                  key={service.id}
                  className="w-full gap-4 group hover:bg-primary shadow-lg rounded-lg p-8 flex flex-col items-center justify-center"
                >
                  <div className="w-full rounded-tl-lg overflow-hidden">
                    <Image
                      src={String(service.data.image.url)}
                      alt="Icon"
                      width={1200}
                      height={1200}
                    />
                  </div>

                  <h4 className="font-bold mt-4 text-2xl group-hover:text-white">
                    {service.data.name}
                  </h4>
                  <p className="line-clamp-3 text-center text-muted group-hover:text-white">
                  
                    {service.data.description[0].text}
                  </p>

                  <Button
                    asChild
                    variant="ghost"
                    className="text-base bg-transparent hover:bg-transparent text-primary underline group-hover:text-white"
                  >
                    <Link href={`servicos/others/${service.uid}`}>
                      Saber mais
                    </Link>
                  </Button>
                </div>
              )
            })}
          </div>
        </section> */}
        <OurNumberSection />
        <section className="w-full bg-[#DEE5EF]">
          <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto flex items-center justify-between gap-8 py-20 md:py-24 lg:py-32">
            <div className=" w-full">
              <div>
                <h3 className="text-primary sm:text-lg mb-5">
                  PORQUÊ NOS ESCOLHER
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold leading-0 mb-5">
                  Porquê devia nos escolher
                </h2>

                <p className="max-w-[718px] text-gray-600 text-sm sm:text-base">
                  A Casa da Música de Benguela é a escolha perfeita para todos
                  aqueles que buscam excelência e qualidade nos serviços
                  musicais. Somos uma empresa consolidada, com uma vasta
                  experiência no setor, oferecendo um portfólio completo de
                  soluções para músicos, bandas, produtores e empresas do setor
                  de entretenimento.
                </p>

                <p className="max-w-[718px] text-gray-600 mt-4 text-sm sm:text-base">
                  Aqui estão algumas razões pelas quais você deve escolher a
                  Casa da Música de Benguela
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {whyChooseUs.data.whys.map((why) => {
                    return (
                      <div key={why.title} className="flex gap-4">
                        <div className="w-10 flex-none h-10 flex items-center justify-center rounded-full bg-primary">
                          <LucideStar className="text-white" />
                        </div>
                        <div>
                          <h5 className="font-bold mb-2"> {why.title} </h5>
                          <p className="text-sm sm:text-base">
                            {why.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* <div className="flex gap-8 items-center">
              <div className="flex flex-col gap-8">
                <div className="bg-[url('/choose2.png')] bg-cover bg-no-repeat w-[289px] h-[310px] rounded-xl"></div>
                <div className="bg-[url('/choose3.png')] w-[289px] bg-cover bg-no-repeat h-[361px] rounded-xl"></div>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  )
}
