"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-verde-escuro to-verde-tipografia text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div
            className={`md:w-1/2 text-center md:text-left transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fisioterapia Especializada para sua Saúde e Bem-estar
            </h1>
            <p className="text-lg md:text-xl mb-8 text-bege/90 max-w-xl">
              Tratamentos personalizados com foco na humanização, no cuidado e no uso de tecnologias modernas para
              promover funcionalidade e qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="https://wa.me/5534999582089?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20horário"
                target="_blank"
              >
                <Button className="bg-roxo hover:bg-roxo/90 text-white px-8 py-6 rounded-lg text-lg transform hover:scale-105 transition-all duration-300">
                  Agende sua Consulta
                </Button>
              </Link>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-bege text-bege hover:bg-bege/10 px-8 py-6 rounded-lg text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("servicos")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Conheça os Serviços
              </Button>
            </div>
          </div>

          <div
            className={`md:w-1/2 flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            
          </div>
        </div>
      </div>
    </section>
  )
}
