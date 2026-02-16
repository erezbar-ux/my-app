import { Header } from '@/components/custom/Header'
import { HeroSection } from '@/components/custom/HeroSection'
import { PricingSection } from '@/components/custom/PricingSection'
import { AccordionSection } from '@/components/custom/AccordionSection'
import { Footer } from '@/components/custom/Footer'

function App() {
  return (
    <div className="mx-auto w-full max-w-[1200px] bg-white">
      <Header />
      <HeroSection />
      <PricingSection />
      <AccordionSection />
      <Footer />
    </div>
  )
}

export default App
