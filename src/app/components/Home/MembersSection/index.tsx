import { createClient } from '@/prismicio'
import Image from 'next/image'

export async function MembersSection() {
  const client = createClient()

  const { professor: teachers } = (
    await client.getSingle('teachers', {
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
        <div className="flex flex-col items-center">
          <h3 className="text-primary text-lg mb-5 text-center uppercase">
            Docentes
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold leading-0 mb-5 text-center">
            Nossa Equipe de especialistas
          </h2>
          <p className="max-w-[518px] text-sm sm:text-base text-gray-600 text-center">
            Nossa Equipe, está preparada para oferecer-lhe a melhor experiência.
          </p>
        </div>
      </div>

      <div className="max-w-6xl px-5 sm:px-8 xl:px-0 mx-auto gap-8 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teachers
          .filter((teacher, index) => index < 3 && teacher)
          .map((teacher) => {
            return (
              <div key={teacher.role} className="shadow-lg rounded-md">
                <div
                  className={`object-cover relactive rounded-xl overflow-hidden`}
                >
                  <Image
                    src={String(teacher.avatar.url)}
                    width={1000}
                    height={1200}
                    alt={String(teacher.avatar.alt)}
                    className="object-cover relative"
                  />
                </div>

                <div className="flex flex-col gap-4 p-8 items-center">
                  <h4 className={'font-bold text-xl text-center'}>
                    {teacher.name}
                  </h4>
                  <p className="text-center text-sm line-clamp-3">
                    {teacher.description}
                  </p>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
