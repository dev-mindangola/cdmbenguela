import { LeftSection } from './ContactInfo'
import { Form } from './Form'

export function Contact() {
  return (
    <section id="contactos" className="bg-white mb-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-5 sm:px-8 gap-14 sm:gap-16 xl:px-0">
        <LeftSection />

        <div className="w-full shadow-lg">
          <Form />
        </div>
      </div>
    </section>
  )
}
