import Link from "next/link"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-verde-escuro text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Sabrina Magalhães</h3>
            <p className="text-bege/90 mb-6 leading-relaxed">
              Fisioterapeuta especializada em reabilitação e bem-estar, oferecendo atendimento personalizado e
              humanizado.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-bege/90">
              <li>
                <Link href="#servicos" className="hover:text-bege transition-colors">
                  Fisioterapia Domiciliar
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-bege transition-colors">
                  Pilates Terapêutico
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-bege transition-colors">
                  Reabilitação Ortopédica
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-bege transition-colors">
                  Fisioterapia Neurológica
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-bege transition-colors">
                  FES, TENS e Corrente Russa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4 text-bege/90">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-roxo" />
                <span>WhatsApp: (34) 99958-2089</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-roxo" />
                <span>Email: sabrinamborges16@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-roxo" />
                <span>Patos de Minas - MG</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <Link
                href="https://wa.me/5534999582089"
                className="bg-roxo p-3 rounded-full hover:bg-roxo/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/sabrina.magalhaes.fisio"
                className="bg-roxo p-3 rounded-full hover:bg-roxo/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:sabrinamborges16@gmail.com"
                className="bg-roxo p-3 rounded-full hover:bg-roxo/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-bege/70">
            &copy; {new Date().getFullYear()} Sabrina Magalhães - Fisioterapeuta. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
