"use client"
import React from "react";





interface CTASectionProps {
    title: string;
    
    description: string; 
    btn: string;
  }
  
  const CTASection: React.FC<CTASectionProps> = ({ title, description, btn }) => {
    const handleClick = () => {
      window.open("https://wa.me/55946565484?text=Oi%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20a%20plataforma%20de%20gest%C3%A3o", "_blank");
    };
  

  return (
    <div className="relative w-5/6 max-w-6xl py-10 bg-primary rounded-3xl z-0 flex items-center  overflow-hidden shadow-lg justify-center">
      <div className="relative z-10 text-center flex gap-4 flex-col text-white px-8">
        <h1 className="text-4xl  z-0 text-left font-bold mb-2 w-[70%]">{title}</h1>
        <p className="text-base font-normal mb-6 max-w-xl text-left ">
          {description}
        </p>
        <div className="flex gap-4">
          <button className="cta-button flex justify-center items-center" 
           onClick={handleClick} >{btn}  
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
      <div className="absolute right-0 top-4 w-[700px] h-[700px] bg-gradient-radial from-white/50 via-[#37beb0] to-[#37beb0] rounded-full transform translate-x-1/3" />
    </div>
  );
};

export default CTASection;
