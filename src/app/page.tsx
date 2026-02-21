import { Header } from './components/Header'
import { AboutSection } from './components/Home/AboutSection'
import { MembersSection } from './components/Home/MembersSection'
import { OurNumberSection } from './components/Home/OurNumberSection'
import { Partners } from './components/Home/Partners'
import { ServiceSection } from './components/Home/ServiceSection'
import { TestemonialSection } from './components/Home/TestemonialsSection'
import WhyChooseUsSection from './components/Home/WhyChooseUsSection'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Partners />
        <AboutSection />
        <ServiceSection />
        <OurNumberSection />
        <TestemonialSection />
        <WhyChooseUsSection />
        <MembersSection />
      </main>
    </div>
  )
}
