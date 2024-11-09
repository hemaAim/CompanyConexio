'use client'

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "O que exatamente essas automações podem fazer pelo meu escritório?",
    answer: "As automações ajudam a organizar e gerenciar processos no seu escritório de forma eficiente e personalizada. Desde o acompanhamento de leads até a organização de tarefas e gestão de documentos, essa tecnologia é ideal para transformar a produtividade do seu negócio, garantindo que nada escape e que sua equipe trabalhe de forma organizada e focada no cliente.",
  },
  {
    question: "Preciso migrar tudo para essa nova plataforma ou posso usar com o que já tenho?",
    answer: "Não é necessário reformular tudo! Nosso sistema integra-se com as ferramentas que você já utiliza, como Google Drive, Slack, entre outras. Ele permite automatizar processos, conectando-se com seus sistemas atuais para uma adoção sem complicações. O objetivo é complementar e fortalecer sua estrutura, e não substituí-la completamente.",
  },
  {
    question: "Como essa solução pode ajudar a aumentar meus leads e vendas?",
    answer: "Com automações e fluxos de trabalho que facilitam o acompanhamento dos leads e oportunidades, você consegue organizar todas as interações e etapas do funil de vendas. Isso permite que sua equipe gerencie cada lead de forma personalizada, economizando tempo e aumentando a conversão. Menos esforço, mais resultados!",
  },
  {
    question: "Como é o processo de implementação e quanto tempo leva?",
    answer: "O processo de implementação é rápido e personalizado de acordo com as necessidades do seu escritório. Em média, leva de 2 a 4 semanas, dependendo da complexidade das integrações e automações desejadas. Nossa equipe acompanha cada etapa, treinando você e sua equipe para que comecem a ver resultados o quanto antes.",
  },
  // Adicione mais itens ao FAQ conforme necessário
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="  bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto  -3xl p-6"> 
     
        <h2 className="text-3xl font-extrabold text-center text-primary mb-6">FAQ</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[#37beb0] rounded-lg p-4 transition-all duration-300 hover:shadow-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                <FiChevronDown
                  className={`transform transition-transform duration-300 text-[#fad038] ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className=" text-gray-700 mt-8 text">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
