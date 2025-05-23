import Image from "next/image"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-verde-escuro text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/sabrinapage (cópia)/logo.png"
              alt="Sabrina Magalhães Fisioterapia"
              width={150}
              height={90}
              className="mb-4"
            />
            <p className="text-bege/80 max-w-xs">
              Fisioterapia especializada com atendimento humanizado para promover saúde, bem-estar e qualidade de vida.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-bege/70" />
                <a href="tel:+5534999582089" className="text-bege/80 hover:text-bege transition-colors">
                  (34) 99958-2089
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-bege/70" />
                <a href="mailto:sabrinamborges16@gmail.com" className="text-bege/80 hover:text-bege transition-colors">
                  sabrinamborges16@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-bege/70" />
                <a
                  href="https://instagram.com/sabrina.magalhaes.fisio"
                  target="_blank"
                  className="text-bege/80 hover:text-bege transition-colors"
                  rel="noreferrer"
                >
                  @sabrina.magalhaes.fisio
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-bege/70" />
                <span className="text-bege/80">Clínica Ativa, Patos de Minas - MG</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-bege/80 hover:text-bege transition-colors">
                  Fisioterapia Domiciliar
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-bege/80 hover:text-bege transition-colors">
                  Pilates Terapêutico
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-bege/80 hover:text-bege transition-colors">
                  Reabilitação Ortopédica
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-bege/80 hover:text-bege transition-colors">
                  Fisioterapia Neurológica
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-bege/80 hover:text-bege transition-colors">
                  FES, TENS e Corrente Russa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-bege/60 text-sm">
            &copy; {new Date().getFullYear()} Sabrina Magalhães - Fisioterapeuta. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
