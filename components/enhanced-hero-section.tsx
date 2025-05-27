"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Star, Users, Award } from "lucide-react"

export function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const stats = [
    { icon: Users, value: "500+", label: "Pacientes" },
    { icon: Award, value: "10+", label: "Anos" },
    { icon: Star, value: "5.0", label: "Avaliação" },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-verde-escuro via-verde-tipografia to-verde-escuro text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-roxo/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-bege/10 rounded-full blur-2xl animate-pulse"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            transition: "all 0.5s ease-out",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-bege/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-roxo/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">Fisioterapeuta Especializada</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-bege bg-clip-text text-transparent">Fisioterapia</span>
                <br />
                <span className="text-roxo">Especializada</span>
                <br />
                <span className="text-bege">para sua Saúde</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 text-bege/90 max-w-xl leading-relaxed">
                Tratamentos personalizados com foco na humanização, no cuidado e no uso de tecnologias modernas para
                promover funcionalidade e qualidade de vida.
              </p>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-8 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full mb-2 mx-auto w-fit">
                      <stat.icon className="w-6 h-6 text-roxo" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-bege/80">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://wa.me/5534999582089?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20horário"
                  target="_blank"
                >
                  <Button className="group bg-roxo hover:bg-roxo/90 text-white px-8 py-6 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span>Agende sua Consulta</span>
                    <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-bege/50 text-bege hover:bg-white/20 px-8 py-6 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById("servicos")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Conheça os Serviços</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div
              className={`relative transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-3"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                {/* Decorative rings */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-bege/30 animate-spin"
                  style={{ animationDuration: "20s" }}
                />
                <div
                  className="absolute inset-4 rounded-full border border-roxo/40 animate-spin"
                  style={{ animationDuration: "15s", animationDirection: "reverse" }}
                />

                {/* Main image */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/fisioterapeutasabrina.jpeg"
                    alt="Fisioterapeuta Sabrina Magalhães"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: 'center 3%' }}
                    priority
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-verde-escuro/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-roxo text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                  CREFITO Ativo
                </div>
                <div
                  className="absolute -bottom-4 -left-4 bg-verde-tipografia text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  10+ Anos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-bege/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-bege/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
