"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Paciente de Fisioterapia Ortopédica",
      content:
        "A Sabrina transformou minha recuperação após a cirurgia no joelho. Seu atendimento personalizado e técnicas eficazes me ajudaram a voltar às atividades muito mais rápido do que eu esperava.",
      stars: 5,
    },
    {
      name: "João Pereira",
      role: "Paciente de Pilates",
      content:
        "Sofria com dores crônicas nas costas há anos. Após começar o Pilates com a Sabrina, notei melhoras significativas em apenas um mês. Sua atenção aos detalhes faz toda a diferença.",
      stars: 5,
    },
    {
      name: "Ana Oliveira",
      role: "Paciente de Fisioterapia Neurológica",
      content:
        "Meu pai teve um AVC e a Sabrina foi fundamental em sua recuperação. Ela não apenas aplicou técnicas eficientes, mas também nos ensinou como ajudá-lo em casa. Profissional excepcional!",
      stars: 5,
    },
  ]

  return (
    <section id="depoimentos" className="py-20 px-4 bg-gradient-to-b from-bege/30 to-white" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-verde-escuro mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            O Que Dizem Nossos Pacientes
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
            Histórias reais de pessoas que transformaram sua saúde e qualidade de vida com nossos tratamentos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full bg-white border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-verde-escuro/80 italic mb-6">"{testimonial.content}"</blockquote>
                </CardContent>
                <CardFooter className="border-t border-gray-100 pt-4">
                  <div>
                    <h4 className="font-semibold text-verde-tipografia">{testimonial.name}</h4>
                    <p className="text-sm text-verde-escuro/60">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
