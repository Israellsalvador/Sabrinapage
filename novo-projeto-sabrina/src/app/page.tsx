export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Clínica de Fisioterapia Sabrina</h1>
      
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-blue-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Bem-vindo à nossa clínica</h2>
          <p className="mb-4">Oferecemos tratamentos personalizados para suas necessidades.</p>
          <img 
            src="/fisioterapeutasabrina.jpeg" 
            alt="Fisioterapeuta Sabrina" 
            className="w-full max-w-md mx-auto rounded-lg shadow-md"
          />
        </div>
      </section>
      
      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            title="Fisioterapia Ortopédica" 
            description="Tratamento para lesões musculoesqueléticas e recuperação pós-cirúrgica."
            image="/sabrina1.jpeg"
          />
          <ServiceCard 
            title="Pilates Terapêutico" 
            description="Fortalecimento, flexibilidade e equilíbrio com exercícios personalizados."
            image="/sabrina4.jpeg"
          />
          <ServiceCard 
            title="Atendimento Domiciliar" 
            description="Tratamento no conforto da sua casa com a mesma qualidade."
            image="/sabrina5.jpeg"
          />
        </div>
      </section>
      
      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
        <p className="mb-4">Agende sua consulta ou tire suas dúvidas:</p>
        <div className="flex items-center mb-2">
          <img src="/WhatsApp.svg.png" alt="WhatsApp" className="w-6 h-6 mr-2" />
          <span>(19) 99123-4567</span>
        </div>
        <div className="flex items-center">
          <img src="/Gmail_icon.svg.png" alt="Email" className="w-6 h-6 mr-2" />
          <span>contato@fisiosabrina.com.br</span>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-600">
        <p>© 2024 Clínica de Fisioterapia Sabrina. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

// Componente ServiceCard
function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img 
        src={image || "/placeholder.svg"} 
        alt={title} 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
