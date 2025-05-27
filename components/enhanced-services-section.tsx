"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Star, ArrowRight, Zap, Heart, Shield } from "lucide-react"

interface ServiceCardProps {
  title: string
  image: string
  description: string
  features: string[]
  duration: string
  location: string
  rating: number
  index: number
  isPopular?: boolean
}

function EnhancedServiceCard({
  title,
  image,
  description,
  features,
  duration,
  location,
  rating,
  index,
  isPopular,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className={`relative overflow-hidden bg-white border-none shadow-lg h-full flex flex-col group hover:shadow-2xl transition-all duration-500 ${isHovered ? "scale-105" : ""}`}
      >
        {isPopular && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-roxo text-white font-semibold px-3 py-1">
              <Star className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          </div>
        )}

        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-verde-escuro/80 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-60"}`}
          />

          {/* Floating info */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-white text-sm mb-2">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
              <MapPin className="w-4 h-4 ml-2" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
              ))}
              <span className="text-white text-sm ml-2">{rating}.0</span>
            </div>
          </div>
        </div>

        <CardHeader className="relative -mt-8 bg-white rounded-t-3xl pt-6 z-10">
          <CardTitle className="text-xl font-bold text-verde-tipografia flex items-center gap-2">
            {title}
            <ArrowRight
              className={`w-5 h-5 text-roxo transition-transform duration-300 ${isHovered ? "translate-x-2" : ""}`}
            />
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow px-6">
          <p className="text-verde-escuro/80 mb-4 leading-relaxed">{description}</p>

          <div className="space-y-2">
            <h4 className="font-semibold text-verde-tipografia text-sm mb-2">Principais benefícios:</h4>
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-verde-escuro/70">
                <div className="w-1.5 h-1.5 bg-roxo rounded-full" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0 pb-6 px-6">
          <Link
            href="https://wa.me/5534999582089?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20fisioterapia"
            target="_blank"
            className="w-full"
          >
            <Button
              className={`w-full bg-gradient-to-r from-roxo to-roxo/80 hover:from-roxo/90 hover:to-roxo/70 text-white font-semibold py-3 rounded-xl transition-all duration-300 ${isHovered ? "shadow-lg shadow-roxo/25" : ""}`}
            >
              <span>Saiba Mais</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export function EnhancedServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Fisioterapia Domiciliar",
      image: "/sabrina1.jpeg",
      description:
        "Tratamentos individualizados no conforto do lar. Indicado para pacientes com dificuldade de locomoção, idosos ou em recuperação pós-cirúrgica.",
      features: ["Atendimento personalizado", "Conforto do lar", "Equipamentos portáteis", "Flexibilidade de horários"],
      duration: "60 min",
      location: "Domicílio",
      rating: 5,
      isPopular: true,
    },
    {
      title: "Pilates Terapêutico",
      image: "/sabrina2.jpeg",
      description:
        "Aulas de Pilates personalizadas com foco em reeducação postural, fortalecimento muscular e alívio de dores crônicas.",
      features: ["Reeducação postural", "Fortalecimento core", "Alívio de dores", "Melhora da flexibilidade"],
      duration: "50 min",
      location: "Clínica",
      rating: 5,
    },
    {
      title: "Reabilitação Ortopédica",
      image: "/sabrina3.jpeg",
      description: "Atuação em lesões musculares, articulares e reabilitação pós-fraturas ou cirurgias ortopédicas.",
      features: [
        "Recuperação pós-cirúrgica",
        "Tratamento de lesões",
        "Fortalecimento muscular",
        "Mobilidade articular",
      ],
      duration: "45 min",
      location: "Clínica/Domicílio",
      rating: 5,
    },
    {
      title: "Fisioterapia Neurológica",
      image: "/sabrina4.jpeg",
      description:
        "Reabilitação para pacientes com AVC, Parkinson, Alzheimer e esclerose múltipla, com técnicas específicas para cada caso.",
      features: [
        "Reabilitação neurológica",
        "Técnicas especializadas",
        "Melhora da coordenação",
        "Estimulação cognitiva",
      ],
      duration: "60 min",
      location: "Clínica/Domicílio",
      rating: 5,
    },
    {
      title: "Eletroterapia Avançada",
      image: "/sabrina5.jpeg",
      description: "Terapias com FES, TENS e Corrente Russa para alívio da dor, fortalecimento e recuperação muscular.",
      features: ["Alívio da dor", "Fortalecimento muscular", "Tecnologia avançada", "Resultados rápidos"],
      duration: "40 min",
      location: "Clínica",
      rating: 5,
    },
    {
      title: "Avaliação Personalizada",
      image: "/fisioterapeutasabrina.jpeg",
      description:
        "Avaliação completa para identificar as necessidades específicas de cada paciente e desenvolver um plano de tratamento individualizado.",
      features: ["Avaliação completa", "Plano personalizado", "Diagnóstico preciso", "Acompanhamento contínuo"],
      duration: "90 min",
      location: "Clínica",
      rating: 5,
    },
  ]

  const highlights = [
    { icon: Zap, title: "Tecnologia Avançada", description: "Equipamentos modernos para resultados eficazes" },
    { icon: Heart, title: "Atendimento Humanizado", description: "Cuidado personalizado e acolhedor" },
    { icon: Shield, title: "Segurança Total", description: "Protocolos rigorosos de higiene e segurança" },
  ]

  return (
    <section id="servicos" className="py-20 px-4 bg-gradient-to-b from-white/50 to-bege/30" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="bg-roxo/10 text-roxo border-roxo/20 mb-4">Serviços Especializados</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-verde-escuro mb-6">
              Tratamentos que <span className="text-roxo">Transformam Vidas</span>
            </h2>
            <p className="text-verde-tipografia max-w-3xl mx-auto text-lg leading-relaxed">
              Oferecemos uma gama completa de serviços fisioterapêuticos com técnicas modernas e abordagem humanizada,
              sempre focando no bem-estar e na recuperação completa de nossos pacientes.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-verde-escuro/10 transition-all duration-800 hover:scale-105 hover:shadow-xl ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="bg-roxo/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <highlight.icon className="w-6 h-6 text-roxo" />
                </div>
                <h3 className="font-semibold text-verde-escuro mb-2">{highlight.title}</h3>
                <p className="text-verde-tipografia text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <EnhancedServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="bg-gradient-to-r from-verde-escuro to-verde-tipografia p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">Não encontrou o que procura?</h3>
            <p className="mb-6 text-bege/90">Entre em contato conosco para uma consulta personalizada</p>
            <Link
              href="https://wa.me/5534999582089?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20uma%20consulta%20personalizada"
              target="_blank"
            >
              <Button className="bg-roxo hover:bg-roxo/90 text-white px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300">
                Fale Conosco
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
