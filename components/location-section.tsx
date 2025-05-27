"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Clock, Phone, Car, Bus, Accessibility, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"

export function LocationSection() {
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

  const locationInfo = {
    address: "Rua das Flores, 123 - Centro",
    city: "Uberlândia - MG",
    cep: "38400-000",
    phone: "(34) 99958-2089",
    coordinates: "-18.9113,-48.2622", // Coordenadas de Uberlândia
  }

  const scheduleInfo = [
    { day: "Segunda a Sexta", hours: "07:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 12:00" },
    { day: "Domingo", hours: "Fechado" },
  ]

  const features = [
    { icon: Car, title: "Estacionamento Gratuito", description: "Vagas disponíveis em frente à clínica" },
    { icon: Accessibility, title: "Acessibilidade Total", description: "Rampa de acesso e banheiro adaptado" },
    { icon: Shield, title: "Protocolos de Segurança", description: "Ambiente higienizado e seguro" },
    { icon: Bus, title: "Transporte Público", description: "Próximo a pontos de ônibus principais" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white/50 to-verde-escuro/5" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-verde-escuro mb-4 transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Nossa <span className="text-roxo">Localização</span>
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
            Estamos estrategicamente localizados no centro de Uberlândia, com fácil acesso e todas as comodidades para
            seu atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Location Info */}
          <div
            className={`transition-all duration-800 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-roxo/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-roxo" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-verde-escuro">Endereço</h3>
                    <Badge className="bg-verde-tipografia/10 text-verde-tipografia border-verde-tipografia/20">
                      Fácil Acesso
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-roxo mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-verde-escuro">{locationInfo.address}</p>
                      <p className="text-verde-tipografia">
                        {locationInfo.city} - {locationInfo.cep}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-roxo flex-shrink-0" />
                    <div>
                      <p className="font-medium text-verde-escuro">{locationInfo.phone}</p>
                      <p className="text-sm text-verde-tipografia">WhatsApp e Ligações</p>
                    </div>
                  </div>
                </div>

                {/* Map Buttons */}
                <div className="space-y-3">
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${locationInfo.coordinates}`}
                    target="_blank"
                    className="w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <Navigation className="w-5 h-5 mr-2" />
                      Abrir no Google Maps
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                  <Link
                    href={`https://waze.com/ul?q=${locationInfo.address}, ${locationInfo.city}`}
                    target="_blank"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-2 border-roxo text-roxo hover:bg-roxo/10 font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      Abrir no Waze
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Schedule and Features */}
          <div
            className={`space-y-6 transition-all duration-800 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {/* Schedule */}
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-verde-tipografia/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-verde-tipografia" />
                  </div>
                  <h3 className="text-xl font-bold text-verde-escuro">Horários de Funcionamento</h3>
                </div>

                <div className="space-y-3">
                  {scheduleInfo.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-verde-escuro font-medium">{schedule.day}</span>
                      <span className="text-verde-tipografia font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-roxo/5 rounded-lg">
                  <p className="text-sm text-verde-escuro">
                    <strong>Atendimento domiciliar:</strong> Disponível 24h mediante agendamento prévio
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`bg-white/60 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${1000 + index * 100}ms` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="bg-roxo/10 p-3 rounded-full w-fit mx-auto mb-3">
                      <feature.icon className="w-5 h-5 text-roxo" />
                    </div>
                    <h4 className="font-semibold text-verde-escuro text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-verde-tipografia">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <Card className="bg-gradient-to-r from-verde-escuro to-verde-tipografia text-white border-none shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Pronto para sua consulta?</h3>
              <p className="mb-6 text-bege/90 max-w-2xl mx-auto">
                Agende agora mesmo seu horário e dê o primeiro passo para uma vida mais saudável e sem dores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/5534999582089?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20horário"
                  target="_blank"
                >
                  <Button className="bg-roxo hover:bg-roxo/90 text-white px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300">
                    <Phone className="w-4 h-4 mr-2" />
                    Agendar Consulta
                  </Button>
                </Link>
                <Link href={`tel:${locationInfo.phone}`}>
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar Agora
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
