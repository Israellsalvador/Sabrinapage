"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  image: string
  description: string
  index: number
}

export function ServiceCard({ title, image, description, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="overflow-hidden bg-white border-none shadow-lg h-full flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transform hover:scale-110 transition-transform duration-700"
          />
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
            <Button
              variant="outline"
              className="w-full border-roxo text-roxo hover:bg-roxo/10 transform hover:scale-105 transition-all duration-300"
            >
              Saiba Mais
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
