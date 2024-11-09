import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline: React.FC = () => {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
      <TimelineItem 
      Img='AnaliseEDiagnostico.svg'
        title="Análise e Diagnóstico"
        date="Compreender as necessidades do seu negócio e mapear processos."
        description="Realizamos um diagnóstico detalhado das suas operações, identificando pontos de automação e integração para aprimorar a eficiência."
      />
      <TimelineItem 
      Img='PlanejamentoEImplementacao.svg'
        title="Planejamento e Implementação"
        date="Definir e estruturar os fluxos de trabalho, ajustando o fluxo para atender às suas demandas específicas."
        description="Configuramos o sistema, adaptamos a ferramenta ao seu ambiente e realizamos testes iniciais para garantir um fluxo eficiente e sem interrupções."
      />
      <TimelineItem 
      Img='Treinamento.svg'
        title="Otimização e Treinamento"
        date="Aperfeiçoar e otimizar os processos já implementados."
        description="Ajustamos fluxos conforme a resposta do seu time, oferecemos treinamento personalizado e suporte contínuo para maximizar o uso da plataforma."
      />
    </ol>
  );
};

export default Timeline;
