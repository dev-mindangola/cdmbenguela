import { Button } from '@/components/ui/button'
import { createClient } from '@/prismicio'
import Image from 'next/image'
import Link from 'next/link'

export default async function MembersPage() {
  const client = createClient()

  const members = (
    await client.getSingle('membros', {
      fetchOptions: {
        next: {
          revalidate: 0,
        },
      },
    })
  ).data

  const categoriesMap = members.membro.map((member) => {
    return member.category
  })

  const categoriesSet = new Set(categoriesMap)

  const categories = Array.from(categoriesSet)

  function slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD') // Remove acentos
      .replace(/[\u0300-\u036f]/g, '') // Remove caracteres diacríticos
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .trim()
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove múltiplos hífens
  }

  return (
    <div className="space-y-8">
      {categories.map((category) => {
        return (
          <div key={category}>
            <div className="w-full px-4  py-2  bg-primary mb-2 text-white">
              <h2 className="text-xl font-bold"> {category} </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.membro
                .filter((member) => member.category === category)
                .map((member) => {
                  return (
                    <div
                      key={member.name}
                      className="border-4 border-white shadow-lg rounded-sm "
                    >
                      <div className="rounded-sm p-1 overflow-hidden ">
                        <Image
                          src={String(member?.avatar.url)}
                          width={1200}
                          height={2000}
                          alt={String(member?.avatar?.alt)}
                          className="w-full object-cover object-top h-72"
                        />
                      </div>

                      <div className="p-4 flex flex-col items-center">
                        <h3 className="font-bold text-center">{member.name}</h3>
                        <p className="text-muted-foreground mb-4 text-center">
                          {member.cargo}
                        </p>
                        <p className="text-muted-foreground text-sm line-clamp-4  text-center">
                          {member.descricao}
                        </p>

                        <Link
                          href={`/sobre/equipe/${slugify(String(member?.name))}`}
                        >
                          <Button
                            variant="outline"
                            className="mt-4 text-primary"
                          >
                            Saber mais
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
