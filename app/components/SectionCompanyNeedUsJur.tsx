// FinanceControl.tsx
import React from "react";
import Image from "next/image";

export default function CompanyNeedUsJur() {
  return (
    <div className="bg-white  py-16 px-6 flex flex-col gap-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
         
        <h1 className="text-3xl font-bold">Escritórios Jurídicos</h1>
        <p className="text-base font-normal max-w-xl text-left text-gray-600 ">
  Sistema de Controle Jurídico para advogados da Comarca de Barueri: com um simples cadastro das diligências, o sistema envia automaticamente o evento para o Google Agenda e, no dia da audiência, o advogado recebe um alerta. Após a realização, o status é atualizado para &quot;Concluído&quot; e a contagem para o pagamento da empresa é iniciada.
</p>
<ul className="space-y-2">
  <li className="flex items-center space-x-2 mt-8">
    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
    <span>Agendamento de audiência no Google Calendar</span>
  </li>
  <li className="flex items-center space-x-2">
    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
    <span>Alerta de pagamento</span>
  </li>
  <li className="flex items-center space-x-2">
    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
    <span>Dashboard interativo e dinâmico</span>
  </li>
  <li className="flex items-center space-x-2">
    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
    <span>Controle de preposto</span>
  </li> 
</ul>
<p className="text-gray-900 italic">
  Simplificando processos, otimizando resultados.
</p>

        </div>
        {/* Right Section (Image Placeholder) */}
        <div className="md:w-1/2 flex justify-center">
          {/* Replace the src with your image path */}
          <Image
            src="/assets/hero-homepage.svg" // Replace with your image path
            alt="App Screenshot"
            width={588} // Adjust width as needed
            height={512} // Adjust height as needed
            className=""
          />
        </div>
      </div>

      {/* Right Section (Image Placeholder) */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row  justify-between space-y-10 md:space-y-0">
      
        <div className="md:w-1/2 flex  justify-center">
          {/* Replace the src with your image path */}
          <Image
            src="/assets/Group 9.svg" // Replace with your image path
            alt="App Screenshot"
            width={358} // Adjust width as needed
            height={512} // Adjust height as needed
            className=""
          />
        </div>
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">Automação para Pequenos Negócios</h1>
        <p className="text-base font-normal mb-6 max-w-xl text-left  text-gray-600">
  Nosso sistema facilita o gerenciamento de tarefas e processos para pequenas empresas. Com automações inteligentes, ele organiza compromissos, agiliza o fluxo de trabalho e permite que você e sua equipe economizem tempo em tarefas repetitivas, aumentando a produtividade.
</p>
<ul className="space-y-2">
  <li className="flex items-center space-x-2 mt-8">
    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
    <span>Agendamento automático de compromissos</span>
  </li>
  <li className="flex items-center space-x-2">
    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
    <span>Notificações de tarefas e prazos para a equipe</span>
  </li>
  <li className="flex items-center space-x-2">
    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
    <span>Gestão de estoque e pedidos </span>
  </li>
 
</ul>
<p className="text-gray-900  italic">
  Simplifique sua operação e foque no crescimento do seu negócio!
</p>

        </div>
      </div>
    </div>
  );
}
