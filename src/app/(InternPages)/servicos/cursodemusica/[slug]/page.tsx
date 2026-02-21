import { Header } from '@/app/components/Shared/Header'
import { Button } from '@/components/ui/button'
import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'
import { LucideClock, LucideDollarSign } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type tParams = Promise<{ slug: string }>

export default async function ServicePage(props: { params: tParams }) {
  const slug = (await props.params).slug

  const client = createClient()

  const course = await client.getByUID('curso_de_musica', slug, {
    fetchOptions: {
      next: {
        revalidate: 0,
      },
    },
  })

  console.log(course.data.instrutores[0])

  return (
    <div>
      <Header
        title="Curso de Bateria"
        subTitle="Este site está em desenvolvimento pela Mind Creative."
      />
      <main>
        <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto w-full py-24 md:py-28">
          <div className="flex flex-col lg:flex-row gap-10">
            <div>
              <div className="w-full h-96 mb-10 rounded-xl overflow-hidden">
                <Image
                  src={String(course.data.cover.url)}
                  width={1200}
                  height={1200}
                  alt={String(course.data.cover.alt)}
                  className="object-cover h-full"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-bold">{course.data.name}</h3>
                <div className="space-y-4">
                  <PrismicRichText field={course.data.description} />
                </div>
              </div>

              {/* <div className="mt-10">
                <h4 className="font-bold mb-4">Horários</h4>

                <div>
                  <Table>
                    <TableCaption className="sr-only">
                      A list of your recent invoices.
                    </TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Horas</TableHead>
                        <TableHead>Segunda</TableHead>
                        <TableHead>Terça</TableHead>
                        <TableHead className="text-right">Quinta</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {horarios.map((horario) => {
                        return (
                          <TableRow key={horario.id}>
                            <TableCell className="font-medium">
                              {horario.hora}
                            </TableCell>
                            <TableCell>{horario.segunda}</TableCell>
                            <TableCell>{horario.terça}</TableCell>
                            <TableCell className="text-right">
                              {horario.quinta}
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div> */}
            </div>
            <div className="lg:max-w-96 flex flex-col md:flex-row lg:flex-col w-full gap-8">
              <div className="w-full md:min-w-1/2 lg:w-full">
                <div className="w-full rounded-lg shadow-xl p-8 space-y-4">
                  <div>
                    <p className="text-primary">Mensalidade</p>
                    <h3 className="text-2xl font-bold mb-4">
                      {course.data.investimento} kz/
                      <span className="text-muted-foreground text-xl">Mês</span>
                    </h3>
                  </div>

                  <Button className="w-full mb-4" size="lg" asChild>
                    <Link href="/secretaria/inscricoes">
                      Inscrever-se agora
                    </Link>
                  </Button>

                  <div className="flex gap-2">
                    <LucideClock className="text-primary" />
                    <p>Duração: {course.data.duracao}</p>
                  </div>

                  <div className="flex gap-2">
                    <LucideDollarSign className="text-primary" />
                    <p>Inscrição: {course.data.valor_da_inscricao} kz</p>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-lg shadow-xl p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Instrutores</h3>
                </div>

                <div>
                  <div className="flex w-full h-auto">
                    <Image
                      src={String(course.data.instrutores[0]?.avatar.url)}
                      width={1200}
                      height={1200}
                      alt={String(course.data.instrutores[0]?.avatar.alt)}
                    />
                  </div>

                  <div className="pt-8">
                    <h4 className="mb-4 font-bold">
                      {course.data.instrutores[0]?.nome}
                    </h4>

                    <div className="space-y-4">
                      {course.data.instrutores[0]?.descricao
                        ?.split('\n')
                        .map((textpart, index) => {
                          return (
                            <p
                              key={textpart + index}
                              className="text-sm text-muted-foreground"
                            >
                              {textpart}
                            </p>
                          )
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
