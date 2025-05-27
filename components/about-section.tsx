"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Heart, Users } from "lucide-react"

export function AboutSection() {
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

  return (
    <section id="sobre" className="py-20 px-4 bg-bege/50" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-verde-escuro mb-4 transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Sobre Sabrina Magalhães
          </h2>
          <div
            className={`h-1 bg-roxo mx-auto mb-6 transition-all duration-1000 ${
              isInView ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div
            className={`lg:w-1/2 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/sabrina3.jpeg"
                alt="Sabrina Magalhães em atendimento"
                width={600}
                height={400}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-escuro/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">Fisioterapeuta CREFITO 422034-F</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`lg:w-1/2 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-2xl font-bold text-verde-tipografia mb-4">Experiência e Dedicação</h3>
            <p className="text-verde-escuro mb-6 text-lg">
              Fisioterapeuta com mais de 10 anos de experiência em reabilitação física e bem-estar. Especializada em
              atendimentos personalizados, com foco na humanização, no cuidado e no uso de tecnologias como FES, TENS e
              Pilates para promover funcionalidade e qualidade de vida.
            </p>
            <p className="text-verde-escuro mb-8 text-lg">
              Formada pela Universidade Federal de Uberlândia, com especializações em Fisioterapia Neurológica e
              Ortopédica, além de certificações em Pilates Clínico e técnicas avançadas de reabilitação.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, title: "+10 Anos", subtitle: "de Experiência", delay: "600ms" },
                { icon: Users, title: "+500", subtitle: "Pacientes Atendidos", delay: "700ms" },
                { icon: Award, title: "5 Especializações", subtitle: "Certificadas", delay: "800ms" },
                { icon: Heart, title: "Atendimento", subtitle: "Humanizado", delay: "900ms" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`bg-white/80 border-none shadow-md transform hover:scale-105 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: item.delay }}
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="bg-roxo/10 p-2 rounded-full">
                      <item.icon className="h-5 w-5 text-roxo" />
                    </div>
                    <div>
                      <h4 className="font-medium text-verde-escuro">{item.title}</h4>
                      <p className="text-sm text-verde-tipografia">{item.subtitle}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
