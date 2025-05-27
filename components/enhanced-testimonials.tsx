"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  name: string
  image: string
  rating: number
  text: string
  service: string
  date: string
}

export function EnhancedTestimonials() {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      name: "Maria Silva",
      image: "/sabrina1.jpeg",
      rating: 5,
      text: "Excelente profissional! O atendimento domiciliar foi fundamental para minha recuperação. Sabrina é muito atenciosa e competente.",
      service: "Fisioterapia Domiciliar",
      date: "Dezembro 2024",
    },
    {
      name: "João Santos",
      image: "/sabrina2.jpeg",
      rating: 5,
      text: "As sessões de Pilates transformaram minha postura e aliviaram completamente minhas dores nas costas. Recomendo muito!",
      service: "Pilates Terapêutico",
      date: "Novembro 2024",
    },
    {
      name: "Ana Costa",
      image: "/sabrina3.jpeg",
      rating: 5,
      text: "Após minha cirurgia no joelho, a Sabrina me ajudou a recuperar totalmente os movimentos. Profissional excepcional!",
      service: "Reabilitação Ortopédica",
      date: "Outubro 2024",
    },
    {
      name: "Carlos Oliveira",
      image: "/sabrina4.jpeg",
      rating: 5,
      text: "O tratamento neurológico pós-AVC foi essencial para minha recuperação. Sabrina é muito dedicada e carinhosa.",
      service: "Fisioterapia Neurológica",
      date: "Setembro 2024",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-bege/30 to-white/50" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-verde-escuro mb-4 transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            O que nossos <span className="text-roxo">pacientes dizem</span>
          </h2>
          <div
            className={`h-1 bg-roxo mx-auto mb-6 transition-all duration-1000 ${
              isInView ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
          <p
            className={`text-verde-tipografia max-w-2xl mx-auto transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Depoimentos reais de pacientes que transformaram suas vidas com nossos tratamentos especializados.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div
            className={`transition-all duration-800 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-roxo/20 shadow-lg">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:w-2/3 text-center md:text-left">
                    <Quote className="w-8 h-8 text-roxo/30 mb-4 mx-auto md:mx-0" />
                    <p className="text-lg md:text-xl text-verde-escuro mb-6 leading-relaxed italic">
                      "{testimonials[currentIndex].text}"
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[currentIndex].rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <div>
                      <h4 className="font-bold text-verde-tipografia text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-verde-escuro/70">{testimonials[currentIndex].service}</p>
                      <p className="text-sm text-verde-escuro/50">{testimonials[currentIndex].date}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-roxo/30 hover:bg-roxo/10 hover:border-roxo"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-roxo scale-125" : "bg-roxo/30 hover:bg-roxo/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-roxo/30 hover:bg-roxo/10 hover:border-roxo"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-verde-escuro/60 hover:text-verde-escuro transition-colors"
            >
              {isAutoPlaying ? "⏸️ Pausar" : "▶️ Reproduzir"} rotação automática
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          {[
            { number: "500+", label: "Pacientes Atendidos", icon: "👥" },
            { number: "98%", label: "Satisfação dos Pacientes", icon: "⭐" },
            { number: "10+", label: "Anos de Experiência", icon: "🏆" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-roxo mb-2">{stat.number}</div>
              <div className="text-verde-escuro font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
