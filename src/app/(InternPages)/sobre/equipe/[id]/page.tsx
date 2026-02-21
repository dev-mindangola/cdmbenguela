import { createClient } from '@/prismicio'
import Image from 'next/image'

type tParams = Promise<{ id: string }>

export default async function MemberDetailPage(props: { params: tParams }) {
  const id = (await props.params).id

  const client = createClient()

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

  const memberData = await client.getSingle('membros')

  const member = memberData.data.membro.find(
    (m) => slugify(String(m.name)) === id,
  )

  return (
    <div className=" flex">
      <div className="max-w-2xl w-full mx-auto">
        <div key={member?.name} className="border-4 border-white rounded-sm ">
          <div className="rounded-sm p-1 overflow-hidden ">
            <Image
              src={String(member?.avatar.url)}
              width={1200}
              height={2000}
              alt={String(member?.avatar?.alt)}
              className="w-full object-cover max-h-96 object-top"
            />
          </div>

          <div className="p-4 flex flex-col items-center">
            <h3 className="font-bold text-center text-xl">{member?.name}</h3>
            <p className="text-muted-foreground mb-4 text-center">
              {member?.cargo}
            </p>
            <div className="space-y-4">
              {member?.descricao?.split('\n').map((value) => {
                return (
                  <p key={value} className="text-muted-foreground text-justify">
                    {value}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
