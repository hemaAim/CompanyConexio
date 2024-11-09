// app/layout.tsx
import "./globals.css"; // Arquivo de estilos globais
import { ReactNode } from "react";

export const metadata = {
  title: "Transforme a Gestão do Seu Negócio",
  description: "Serviço de implementação de fluxo de controle para seu negócio",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
      
      </head>
      <body className="font-sans bg-background text-primary">{children}</body>
    </html>
  );
}
