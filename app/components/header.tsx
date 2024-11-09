'use client';
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => { 
  const handleClick = () => {
    window.open("https://wa.me/55946565484?text=Oi%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20a%20plataforma%20de%20gest%C3%A3o", "_blank");
  };

  return (
    <header className="w-full z-10 ">
    <nav className="w-full min-w-[320px]  flex justify-between  shadow p-3  bg-[#003366]">
     
    <div className="flex justify-center items-center">
    <a href="" className="flex items-center ">
    <Image
        src="/assets/LogoOficial.svg"
        alt="WhatsApp Icon"
        width={24}
        height={24}
        priority
      />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
           Conexio
          </span>
        </a>
    </div>

  
      <div className=" flex flex-wrap items-center justify-between  px-4">
        
     
          <button 
    onClick={handleClick} 
    type="button"
           
    className="px-2 py-2 sm:px-6 text-xs sm:text-sm font-medium text-white bg-secondary rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-center"
>
           Entrar em Contato
          </button>
     
      </div>
    </nav>
    </header>
  );
};

export default Header;
/** 
 * 
 */