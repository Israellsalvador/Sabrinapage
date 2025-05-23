"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Heart, Users } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="sobre" className="py-20 px-4 bg-bege/50" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-verde-escuro mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Sobre Sabrina Magalhães
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-roxo mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/sabrinapage (cópia)/sabrina3.jpeg"
                alt="Sabrina Magalhães em atendimento"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-escuro/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">Fisioterapeuta CREFITO-X XXXXX-F</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
              <Card className="bg-white/80 border-none shadow-md">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-roxo/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-roxo" />
                  </div>
                  <div>
                    <h4 className="font-medium text-verde-escuro">+10 Anos</h4>
                    <p className="text-sm text-verde-tipografia">de Experiência</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-none shadow-md">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-roxo/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-roxo" />
                  </div>
                  <div>
                    <h4 className="font-medium text-verde-escuro">+500</h4>
                    <p className="text-sm text-verde-tipografia">Pacientes Atendidos</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-none shadow-md">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-roxo/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-roxo" />
                  </div>
                  <div>
                    <h4 className="font-medium text-verde-escuro">5 Especializações</h4>
                    <p className="text-sm text-verde-tipografia">Certificadas</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-none shadow-md">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-roxo/10 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-roxo" />
                  </div>
                  <div>
                    <h4 className="font-medium text-verde-escuro">Atendimento</h4>
                    <p className="text-sm text-verde-tipografia">Humanizado</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
