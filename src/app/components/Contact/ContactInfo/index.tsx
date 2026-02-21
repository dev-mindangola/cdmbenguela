import { createClient } from '@/prismicio'
import {
  LucideClock,
  LucideMail,
  LucideMapPin,
  LucidePhone,
} from 'lucide-react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export async function LeftSection() {
  const client = createClient()
  const {
    data: { section },
  } = await client.getSingle('contact', {
    fetchOptions: {
      next: {
        revalidate: 0,
      },
    },
  })

  return (
    <div className="w-full">
      <div className="flex-1 flex flex-col gap-8">
        <div>
          <h3 className="text-primary text-lg mb-5">Contacte-nos</h3>
          <h2 className="text-4xl font-bold leading-0 mb-5">
            Nós adoraríamos ajudar
          </h2>

          <p className="max-w-[518px] text-gray-600">
            Fale connosco — estamos sempre disponíveis para apoiar, orientar e
            colaborar no que for preciso.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex-none rounded-full bg-primary text-white flex items-center justify-center">
            <LucideMapPin />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-base text-[#37393F] mb-2">
              {section[0]?.sectionName}
            </h3>

            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[0]?.item_1}
            </p>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[0]?.item_2}
            </p>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[0]?.item_4}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex-none rounded-full bg-primary text-white flex items-center justify-center">
            <LucidePhone />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-base text-[#37393F] mb-2">
              {section[1]?.sectionName}
            </h3>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[1]?.item_1}
            </p>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[1]?.item_2}
            </p>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[1]?.item_4}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex-none rounded-full bg-primary text-white flex items-center justify-center">
            <LucideMail />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-base text-[#37393F] mb-2">
              {section[2]?.sectionName}
            </h3>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[2]?.item_1}
            </p>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[2]?.item_2}
            </p>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[2]?.item_4}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex-none rounded-full bg-primary text-white flex items-center justify-center">
            <LucideClock />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-base text-[#37393F] mb-2">
              {section[3]?.sectionName}
            </h3>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[3]?.item_1}
            </p>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[3]?.item_2}
            </p>
            <p className="text-[#7D7D7D] text-sm sm:text-[15px]">
              {section[3]?.item_4}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4  items-center justify-between mt-8 border-t py-8">
        <h5 className="font-semibold text-lg">Redes Sociais</h5>
        <div className="flex gap-4 text-muted-foreground ">
          <Link href="https://www.facebook.com/cdm.benguela/">
            <FaFacebook
              size={24}
              className="hover:text-primary"
              target="_blank"
            />
          </Link>

          <Link href="https://www.instagram.com/cdmbenguela/" target="_blank">
            <FaInstagram size={24} className="hover:text-primary" />
          </Link>

          <Link
            href="https://www.youtube.com/@casadamusicadebenguelacdm7791"
            target="_blank"
          >
            <FaYoutube size={24} className="hover:text-primary" />
          </Link>
        </div>
      </div>
    </div>
  )
}
