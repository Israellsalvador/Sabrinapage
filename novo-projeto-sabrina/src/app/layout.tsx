import './globals.css';

export const metadata = {
  title: 'Clínica de Fisioterapia Sabrina',
  description: 'Fisioterapia e osteopatia personalizadas para uma vida mais saudável e ativa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
