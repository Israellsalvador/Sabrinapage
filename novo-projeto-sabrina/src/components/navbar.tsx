"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const scrollToSection = (id: string) => {
    closeMenu()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-verde-escuro/95 shadow-md py-2" : "bg-verde-escuro py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/sabrinapage (cópia)/logo.png"
            alt="Sabrina Magalhães Fisioterapia"
            width={130}
            height={80}
            className="h-[80px] w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-white font-medium hover:text-bege transition-colors"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-white font-medium hover:text-bege transition-colors"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-white font-medium hover:text-bege transition-colors"
              >
                Depoimentos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-white font-medium hover:text-bege transition-colors"
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-verde-escuro absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-white font-medium hover:text-bege transition-colors w-full text-left py-2"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-white font-medium hover:text-bege transition-colors w-full text-left py-2"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-white font-medium hover:text-bege transition-colors w-full text-left py-2"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-white font-medium hover:text-bege transition-colors w-full text-left py-2"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
