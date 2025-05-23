import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-bege">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <section id="servicos" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-verde-escuro mb-4">Serviços Especializados</h2>
            <p className="text-verde-tipografia max-w-2xl mx-auto">
              Tratamentos personalizados para cada necessidade, com técnicas modernas e abordagem humanizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Fisioterapia Domiciliar"
              image="/sabrinapage (cópia)/sabrina1.jpeg"
              description="Tratamentos individualizados no conforto do lar. Indicado para pacientes com dificuldade de locomoção, idosos ou em recuperação pós-cirúrgica."
            />

            <ServiceCard
              title="Pilates Terapêutico"
              image="/sabrinapage (cópia)/sabrina2.jpeg"
              description="Aulas de Pilates personalizadas com foco em reeducação postural, fortalecimento muscular e alívio de dores crônicas."
            />

            <ServiceCard
              title="Reabilitação Ortopédica"
              image="/sabrinapage (cópia)/sabrina3.jpeg"
              description="Atuação em lesões musculares, articulares e reabilitação pós-fraturas ou cirurgias ortopédicas."
            />

            <ServiceCard
              title="Fisioterapia Neurológica"
              image="/sabrinapage (cópia)/sabrina4.jpeg"
              description="Reabilitação para pacientes com AVC, Parkinson, Alzheimer e esclerose múltipla, com técnicas específicas para cada caso."
            />

            <ServiceCard
              title="FES, TENS e Corrente Russa"
              image="/sabrinapage (cópia)/sabrina5.jpeg"
              description="Terapias com eletroestimulação para alívio da dor, fortalecimento e recuperação muscular."
            />

            <ServiceCard
              title="Avaliação Personalizada"
              image="/sabrinapage (cópia)/fisioterapeutasabrina.jpeg"
              description="Avaliação completa para identificar as necessidades específicas de cada paciente e desenvolver um plano de tratamento individualizado."
            />
          </div>
        </div>
      </section>

      <Testimonials />

      <ContactSection />

      <Footer />

      <Link
        href="https://wa.me/5534999582089?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20horário"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Contato via WhatsApp"
      >
        <Image src="/sabrinapage (cópia)/whatsapp.png" alt="WhatsApp" width={40} height={40} className="min-w-[40px]" />
      </Link>
    </main>
  )
}
