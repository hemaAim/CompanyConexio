import Header from "./components/header";

import "./globals.css"; // Arquivo de estilos globais
import CompanyNeedUsJur from "./components/SectionCompanyNeedUsJur";
import IntegrationSection from "./components/IntegrationSection";
import Timeline from "./components/Timeline";
import CTASection from "./components/CTAcomponent";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Image from "next/image";
// app/page.tsx
export default function Home() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <Header /> 

      <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
  src="/assets/sps-universal-MnPF-0DTQ5c-unsplash.jpg"
  alt=""
  className="absolute inset-0 -z-10 h-full bg-gray-700 opacity-20 w-full object-cover object-right md:object-center"
  width={1600} // Ajuste o tamanho necessário
  height={900} // Ajuste o tamanho necessário
/>
        <div className="py-8 px-16 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl  dark:text-white">
          Descomplique a Gestão do Seu Negócio com Soluções Inteligentes e Personalizadas
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Liberte-se das tarefas repetitivas e foque no que realmente importa: crescimento e inovação.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="https://wa.me/55946565484?text=Oi%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20a%20plataforma%20de%20gest%C3%A3o"
  target="_blank"
              className="inline-flex justify-center items-center py-4 sm:text-base mt-4 px-5 text-xs font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-300 bg-secondary"
            >
             Transforme Seu Negócio Agora
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          
          </div>
        </div>
      </section>
      <section className="isolate overflow-hidden flex flex-col  gap-16 items-center  py-24 sm:py-20 px-16">
        <h2 className="text-3xl font-semibold mb-6 text-primary">
        Seu Caminho para Automatização e Eficiente em 3 Etapas
        </h2>
        <Timeline />
      </section>

      <section className="">
        <IntegrationSection />
      </section>

      <section className="flex items-center py-8 h-auto justify-center bg-gray-100">
        <CTASection btn="Entrar em Contato" description="Nossa equipe de especialistas está aqui para entender suas necessidades e criar uma solução que eleve a eficiência da sua operação. Entre em contato e veja como transformar a gestão do seu negócio." title="Pronto para Atingir um Novo Nível de Gestão? Vamos Conversar!" />
      </section>
     
      {/* Sobre o Serviço */}

      <section className="flex flex-col justify-center items-center pt-10" > 
      <h2 className="text-3xl font-semibold mb-6 text-primary">
      Casos de Sucesso
          </h2> 
       
        <CompanyNeedUsJur />
      </section>
     
     

     
      <section className=" bg-slate-200"> 
     
       <TestimonialsSection  
       contato="Falar com um especialista"
         
         text="'Antes da implementação, minha rotina era cheia de tarefas manuais. Com a automação dos processos, agora conseguimos organizar e agilizar o fluxo de trabalho de forma muito mais eficiente, proporcionando uma gestão de clientes e demandas muito mais assertiva!'"
         name="Hacmoni Assis."
         position="Advogado"
       /> 
      
      </section> 
      <section> 
        <FAQ/>

      </section>

<Footer/>

    
 
   
    
    </div>
  );
}
