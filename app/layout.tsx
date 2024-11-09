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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-background text-primary">{children}</body>
    </html>
  );
}
