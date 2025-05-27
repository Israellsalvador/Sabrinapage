"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
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
    <section id="contato" className="py-20 px-4 bg-bege" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-verde-escuro mb-4 transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Entre em Contato
          </h2>
          <div
            className={`h-1 bg-roxo mx-auto mb-6 transition-all duration-1000 ${
              isInView ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
          <p
            className={`text-verde-tipografia max-w-2xl mx-auto transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Agende sua avaliação e comece seu tratamento com quem entende de cuidado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <Card
            className={`bg-white/80 border-none shadow-lg transition-all duration-800 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <CardHeader>
              <CardTitle className="text-verde-escuro">Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-roxo/10 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-roxo" />
                </div>
                <div>
                  <p className="font-medium text-verde-escuro">Telefone</p>
                  <p className="text-verde-tipografia">(34) 99958-2089</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-roxo/10 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-roxo" />
                </div>
                <div>
                  <p className="font-medium text-verde-escuro">E-mail</p>
                  <p className="text-verde-tipografia">sabrinamborges16@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-roxo/10 p-2 rounded-full">
                  <Instagram className="w-5 h-5 text-roxo" />
                </div>
                <div>
                  <p className="font-medium text-verde-escuro">Instagram</p>
                  <p className="text-verde-tipografia">@sabrina.magalhaes.fisio</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-roxo/10 p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-roxo" />
                </div>
                <div>
                  <p className="font-medium text-verde-escuro">Endereço</p>
                  <p className="text-verde-tipografia">Clínica Ativa, Patos de Minas - MG</p>
                  <Link href="#" className="text-roxo text-sm hover:underline">
                    Ver no mapa
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulário de Contato */}
          <Card
            className={`bg-white/80 border-none shadow-lg transition-all duration-800 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <CardHeader>
              <CardTitle className="text-verde-escuro">Agende sua Consulta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-verde-escuro">Nome Completo</label>
                  <Input placeholder="Seu nome" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-verde-escuro">Telefone</label>
                  <Input placeholder="(00) 00000-0000" className="mt-1" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-verde-escuro">E-mail</label>
                <Input placeholder="seu@email.com" className="mt-1" />
              </div>

              <div>
                <label className="text-sm font-medium text-verde-escuro">Serviço de Interesse</label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="domiciliar">Fisioterapia Domiciliar</SelectItem>
                    <SelectItem value="pilates">Pilates Terapêutico</SelectItem>
                    <SelectItem value="ortopedica">Reabilitação Ortopédica</SelectItem>
                    <SelectItem value="neurologica">Fisioterapia Neurológica</SelectItem>
                    <SelectItem value="eletroterapia">FES, TENS e Corrente Russa</SelectItem>
                    <SelectItem value="avaliacao">Avaliação Personalizada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-verde-escuro">Mensagem</label>
                <Textarea placeholder="Descreva brevemente sua necessidade" className="mt-1" rows={4} />
              </div>

              <Link
                href="https://wa.me/5534999582089?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20horário"
                target="_blank"
                className="w-full"
              >
                <Button className="w-full bg-roxo hover:bg-roxo/90 text-white">Enviar Mensagem</Button>
              </Link>
              <p className="text-center text-sm text-verde-tipografia">Ou entre em contato diretamente pelo WhatsApp</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
