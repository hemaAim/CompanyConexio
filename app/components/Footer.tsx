import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-primary px-2">
      <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
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
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="" className="hover:underline">Conexio™</a>. Todos direitos são reservados.
        </span>
        <ul className="flex items-center justify-center  mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-6">
  <li>
    <a href="#" className="hover:underline"></a>
  </li>
  <li>
    <a href="#" className="hover:underline">Privacy Policy</a>
  </li>
  <li>
    <a href="https://www.instagram.com/elo.jur/?hl=pt" className="hover:underline bg-red-500">
      <Image
        src="/assets/insta.svg"
        alt="Instagram Icon"
        width={20}
        height={20}
        priority 
      />
    </a>
  </li>
  <li>
    <a href="https://wa.me/5511946565484?text=Oi%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20a%20plataforma%20de%20gest%C3%A3o" className="">
      <Image
        src="/assets/whatsapp.svg"
        alt="WhatsApp Icon"
        width={20}
        height={20}
        priority
      />
    </a>
  </li>
</ul>

      </div>
    </footer>
  );
};

export default Footer;
