import { MembersSection } from '@/app/components/Home/MembersSection'
import { Header } from '@/app/components/Shared/Header'
import { Button } from '@/components/ui/button'
import { createClient } from '@/prismicio'
import Image from 'next/image'
import Link from 'next/link'

export default async function MusicCousePage() {
  const client = createClient()

  const courses = await client.getAllByType('curso_de_musica', {
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
        <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto w-full pt-24 md:pt-28">
          <div>
            <div className="mb-10 flex flex-col items-center">
              <h3 className="text-primary text-base sm:text-lg mb-5 text-center uppercase">
                Curso de música
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold leading-0 mb-5 text-center">
                Organização do nosso programa do curso
              </h2>
              <p className="max-w-[618px] text-sm sm:text-base text-gray-600 text-center">
                Proporcionamos cursos e workshops personalizados para músicos de
                todos os níveis, desde iniciantes até profissionais. Nosso
                objetivo é capacitar talentos, desenvolvendo habilidades
                técnicas e artísticas em instrumentos, canto, teoria musical e
                produção
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course) => {
                return (
                  <div key={course.uid} className="w-full  rounded-xl relative">
                    <div className="w-full absolute h-96 -z-10 rounded-xl overflow-hidden">
                      <Image
                        src={String(course.data.cover.url)}
                        width={1200}
                        height={1200}
                        alt={String(course.data.cover.alt)}
                      />
                    </div>

                    <div className="flex justify-center p-4 lg:p-8">
                      <div className="h-auto">
                        <div className="z-20 max-w-md mt-48 left-1/2 rounded-xl shadow-xl p-8 bg-gray-100 space-y-4">
                          <h3 className="font-bold">{course.data.name}</h3>
                          <p className="text-sm lg:text-base">
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            {/* @ts-ignore */}
                            {course.data.description[0].text}
                          </p>

                          <div className="mt-4">
                            <Button asChild size="sm" variant="outline">
                              <Link
                                href={`/servicos/cursodemusica/${course.uid}`}
                                className="text-primary hover:underline"
                              >
                                Ver Detalhes
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <MembersSection />
        </div>
      </main>
    </div>
  )
}
