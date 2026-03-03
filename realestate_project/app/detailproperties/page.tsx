import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PropertiesSection } from "@/components/properties-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { PropertiesSection2 } from "@/components/ppd"

export default function Home() {
  return (
    <main>
      <Navigation />
      <PropertiesSection2 />
      <ContactSection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
