"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

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

  const testimonials = [
    {
      name: "Maria Silva",
      text: "A Sabrina transformou minha recuperação após a cirurgia no joelho. Seu atendimento personalizado e técnicas eficazes me ajudaram a voltar às atividades muito mais rápido do que eu esperava.",
      delay: "200ms",
    },
    {
      name: "João Santos",
      text: "As sessões de Pilates terapêutico melhoraram muito minha postura e aliviaram as dores nas costas. Recomendo muito o trabalho da Sabrina!",
      delay: "400ms",
    },
    {
      name: "Ana Costa",
      text: "Profissional dedicada e muito humana. O tratamento neurológico tem ajudado muito na recuperação do meu pai. Gratidão!",
      delay: "600ms",
    },
  ]

  return (
    <section id="depoimentos" className="py-20 px-4 bg-verde-escuro text-white" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Depoimentos de Pacientes
          </h2>
          <div
            className={`h-1 bg-roxo mx-auto mb-6 transition-all duration-1000 ${
              isInView ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
          <p
            className={`text-bege/90 max-w-2xl mx-auto transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Veja o que nossos pacientes falam sobre os tratamentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white/10 border-none backdrop-blur-sm transform hover:scale-105 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: testimonial.delay }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-bege font-semibold">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
