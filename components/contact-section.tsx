"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [showMap, setShowMap] = useState(false)

  return (
    <section id="contato" className="py-20 px-4 bg-bege/30" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-verde-escuro mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Entre em Contato
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-roxo mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-verde-tipografia max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Agende sua avaliação e comece seu tratamento com quem entende de cuidado. Atendimento em domicílio, com
            flexibilidade e atenção completa ao paciente.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-verde-tipografia mb-6">Informações de Contato</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-roxo/10 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-roxo" />
                      </div>
                      <div>
                        <h4 className="font-medium text-verde-escuro">Telefone</h4>
                        <p className="text-verde-tipografia">
                          <a href="tel:+5534999582089" className="hover:underline">
                            (34) 99958-2089
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-roxo/10 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-roxo" />
                      </div>
                      <div>
                        <h4 className="font-medium text-verde-escuro">E-mail</h4>
                        <p className="text-verde-tipografia">
                          <a href="mailto:sabrinamborges16@gmail.com" className="hover:underline">
                            sabrinamborges16@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-roxo/10 p-3 rounded-full">
                        <Instagram className="h-5 w-5 text-roxo" />
                      </div>
                      <div>
                        <h4 className="font-medium text-verde-escuro">Instagram</h4>
                        <p className="text-verde-tipografia">
                          <a
                            href="https://instagram.com/sabrina.magalhaes.fisio"
                            target="_blank"
                            className="hover:underline"
                            rel="noreferrer"
                          >
                            @sabrina.magalhaes.fisio
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-roxo/10 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-roxo" />
                      </div>
                      <div>
                        <h4 className="font-medium text-verde-escuro">Endereço</h4>
                        <p className="text-verde-tipografia">Clínica Ativa, Patos de Minas - MG</p>
                        <Button
                          variant="link"
                          className="text-roxo p-0 h-auto mt-1"
                          onClick={() => setShowMap(!showMap)}
                        >
                          {showMap ? "Ocultar mapa" : "Ver no mapa"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {showMap && (
                  <div className="w-full h-[300px] relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.77921686754!2d-46.530843723911886!3d-18.58398988252201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94aef52691177883%3A0x74a0932ea7361801!2sAtiva%20N%C3%BAcleo%20Integrado%20de%20Sa%C3%BAde!5e0!3m2!1spt-BR!2sbr!4v1746628685227!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white border-none shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-verde-tipografia mb-6">Agende sua Consulta</h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-verde-escuro">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        className="border-verde-escuro/20 focus-visible:ring-roxo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-verde-escuro">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        placeholder="(00) 00000-0000"
                        className="border-verde-escuro/20 focus-visible:ring-roxo"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-verde-escuro">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="border-verde-escuro/20 focus-visible:ring-roxo"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-verde-escuro">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-md border border-verde-escuro/20 p-2 focus:outline-none focus:ring-2 focus:ring-roxo"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="fisioterapia-domiciliar">Fisioterapia Domiciliar</option>
                      <option value="pilates">Pilates Terapêutico</option>
                      <option value="ortopedica">Reabilitação Ortopédica</option>
                      <option value="neurologica">Fisioterapia Neurológica</option>
                      <option value="eletroestimulacao">FES, TENS e Corrente Russa</option>
                      <option value="avaliacao">Avaliação Personalizada</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-verde-escuro">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Descreva brevemente sua necessidade"
                      className="min-h-[120px] border-verde-escuro/20 focus-visible:ring-roxo"
                    />
                  </div>

                  <div className="pt-2">
                    <Link
                      href="https://wa.me/5534999582089?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20horário"
                      target="_blank"
                    >
                      <Button className="w-full bg-roxo hover:bg-roxo/90 text-white py-6">Enviar Mensagem</Button>
                    </Link>
                    <p className="text-sm text-verde-escuro/60 mt-3 text-center">
                      Ou entre em contato diretamente pelo WhatsApp
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
