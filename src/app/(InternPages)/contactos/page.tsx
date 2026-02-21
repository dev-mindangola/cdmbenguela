import { Contact } from '@/app/components/Contact'
import { Header } from '@/app/components/Shared/Header'

export default function Page() {
  return (
    <div>
      <Header
        title="Contactos"
        subTitle="Site em desenvolvimento pela Mind creative"
      />
      <main className="py-20 md:py-28">
        <div className="max-w-6xl px-5 sm:px-8 xl:px-0  mx-auto w-full">
          <div className="">
            <Contact />
          </div>
          <div className="w-full rounded-xl border-2 overflow-hidden border-primary border-spacing-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.1830613575585!2d13.435419789688096!3d-12.570177893471545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bafd17ba9efb053%3A0x8b4b43ae82d0a715!2sCasa%20da%20M%C3%BAsica%20de%20Benguela!5e0!3m2!1spt-PT!2sao!4v1731659327613!5m2!1spt-PT!2sao"
              width="800"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  )
}
