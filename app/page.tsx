import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { AboutSection } from "@/components/about-section"
import { EnhancedServicesSection } from "@/components/enhanced-services-section"
import { EnhancedTestimonials } from "@/components/enhanced-testimonials"
import { LocationSection } from "@/components/location-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen bg-bege">
      <ScrollProgress />
      <Navbar />

      <EnhancedHeroSection />

      <AboutSection />

      <EnhancedServicesSection />

      <EnhancedTestimonials />

      <ContactSection />

      <LocationSection />

      <Footer />

      <ScrollToTop />

      {/* WhatsApp Float Button */}
     <Link
  href="https://wa.me/5534999582089?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20horário"
  target="_blank"
  className="fixed bottom-6 right-6 p-2 rounded-full shadow-2xl z-50 hover:scale-105 transition-all duration-300 group"
  aria-label="Contato via WhatsApp"
>
  <div className="animate-[bounce_2s_infinite] group-hover:animate-none">
    <Image
      src="/whatsapp.png"
      alt="WhatsApp"
      width={50}
      height={50}
      className="w-8 h-8 transition-transform duration-300"
    />
  </div>
  <div className="absolute -top-12 right-0 bg-verde-escuro text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    Fale conosco!
  </div>
</Link>

    </main>
  )
}
