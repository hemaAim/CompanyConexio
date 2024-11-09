"use client"
import Image from "next/image";
import React from "react";

interface TestimonialProps {
  stars: number;
  text: string;
  name: string;
  position: string;
  contato: string
}

const Testimonial: React.FC<TestimonialProps> = ({
  stars,
  text,
  name,
  position,
  contato
}) => { 
  const handleClick = () => {
    window.open("https://wa.me/55946565484?text=Oi%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20a%20plataforma%20de%20gest%C3%A3o", "_blank");
  };


  return (
    <div className="flex flex-col items-center justify-center bg-gray-10 p-10"> 
     <h2 className="text-3xl font-semibold mb-6 text-primary">
      O Que Nossos Clientes Dizem 
      </h2>
      <div className=" shadow-md  rounded-3xl overflow-hidden w-full max-w-6xl md:flex bg-primary ">
        {/* Image Section */}
        <div className="w-full  md:w-1/2 flex items-center justify-center">
        <Image
  src="/assets/ImgTestemonial.svg" // Caminho da imagem
  alt="Testimonial"
  className="object-cover p-6 w-9/12"
  width={400} // Ajuste o tamanho necessário
  height={300} // Ajuste o tamanho necessário
/>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2   text-white py-8 pt-20 flex flex-col gap-6 px-10"> 
          <div className="relative z-0">
            {/* Quote Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="absolute  -z-30 -top-12 left-0 w-40 h-40  opacity-20"
              viewBox="0 0 24 24"
            >
              <path d="M21 10.59V10A8 8 0 0013 2h-1a1 1 0 00-1 1v6.18a1 1 0 001.64.78l1.82-1.18A6 6 0 0117 10v.59a6.54 6.54 0 01-1.72 4.34 6.76 6.76 0 00-.41.44A1 1 0 0015 16h2a8 8 0 004-1.41zM11 12.59V12a8 8 0 00-8-8H2a1 1 0 00-1 1v6.18a1 1 0 001.64.78l1.82-1.18A6 6 0 017 12v.59a6.54 6.54 0 01-1.72 4.34 6.76 6.76 0 00-.41.44A1 1 0 005 18h2a8 8 0 004-1.41z" />
            </svg>
            {/* Testimonial Text */}
            <p className="text-lg leading-relaxed z-20">{text}
            </p>
          </div>
          {/* Author Section */}
          <div className="mt-6">
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-sm text-gray-400">{position}</p>
          </div>

          <button className=" cta-button flex mt-7  justify-center items-center " 
           onClick={handleClick}>
            {contato}
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
