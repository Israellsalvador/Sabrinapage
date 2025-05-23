"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  image: string
  description: string
}

export function ServiceCard({ title, image, description }: ServiceCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden bg-white border-none shadow-lg h-full flex flex-col">
        <div className="relative h-56 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-verde-escuro/70 to-transparent" />
        </div>
        <CardHeader className="relative -mt-8 bg-white rounded-t-3xl pt-6">
          <CardTitle className="text-xl font-bold text-verde-tipografia">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-verde-escuro/80">{description}</p>
        </CardContent>
        <CardFooter className="pt-0 pb-6">
          <Link
            href="https://wa.me/5534999582089?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20fisioterapia"
            target="_blank"
            className="w-full"
          >
            <Button variant="outline" className="w-full border-roxo text-roxo hover:bg-roxo/10">
              Saiba Mais
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
