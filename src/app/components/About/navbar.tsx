'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavBar() {
  const pathname = usePathname()

  const links = [
    { href: '/sobre', name: 'Quem somos?' },
    { href: '/sobre/oquefazemos', name: 'O que fazemos?' },
    { href: '/sobre/missao', name: 'Missão e valores da CDM' },
    { href: '/sobre/historia', name: 'Nossa história' },
    { href: '/sobre/motivodeescolha', name: 'Porquê estudar na CDM?' },
    { href: '/sobre/parcerias', name: 'Colaborações e parcerias' },
    { href: '/sobre/equipe', name: 'Membros' },
  ]
  return (
    <aside>
      <nav className="bg-[#DEE5EF] flex-none">
        <ul className="md:max-w-60 w-full">
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                className="h-full  w-full hover:text-white"
                href={link.href}
              >
                <li
                  className={`${pathname === link.href && 'bg-primary text-white'} w-full py-4 px-4 group border-b-2 hover:bg-primary border-white`}
                >
                  {link.name}
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
