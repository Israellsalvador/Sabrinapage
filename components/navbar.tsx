"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-verde-escuro/95 backdrop-blur-sm text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-roxo rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold">Sabrina Magalhães</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="hover:text-bege transition-colors">
              Início
            </Link>
            <Link href="#sobre" className="hover:text-bege transition-colors">
              Sobre
            </Link>
            <Link href="#servicos" className="hover:text-bege transition-colors">
              Serviços
            </Link>
            <Link href="#depoimentos" className="hover:text-bege transition-colors">
              Depoimentos
            </Link>
            <Link href="#contato" className="hover:text-bege transition-colors">
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <Link href="#inicio" className="hover:text-bege transition-colors" onClick={() => setIsOpen(false)}>
                Início
              </Link>
              <Link href="#sobre" className="hover:text-bege transition-colors" onClick={() => setIsOpen(false)}>
                Sobre
              </Link>
              <Link href="#servicos" className="hover:text-bege transition-colors" onClick={() => setIsOpen(false)}>
                Serviços
              </Link>
              <Link href="#depoimentos" className="hover:text-bege transition-colors" onClick={() => setIsOpen(false)}>
                Depoimentos
              </Link>
              <Link href="#contato" className="hover:text-bege transition-colors" onClick={() => setIsOpen(false)}>
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
