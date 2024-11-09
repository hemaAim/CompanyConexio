import Image from 'next/image';
import React from 'react';

interface TimelineItemProps {
  title: string;
  date: string;
  description: string; 
  Img?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, description, Img }) => {
  return (
    <li className="relative mb-6 mt-10 sm:mb-0 flex-1  w-6/6 max-w-6xl  sm:max-w-[400px] items-center justify-center"> 
      {/* Centraliza a imagem */}
      <div className="flex items-center justify-center max-h-80 h-40">
        <Image src={`/assets/${Img}`} width={170} height={170} alt='' />
      </div>
      
      <div className="mt-3 sm:pe-8  min-w-[280px] sm:w-96 sm:h-48">
        <h3 className="text-lg font-semibold text-[#003366] mb-2">{title}</h3>
        <time className="block mb-6 text-sm font-normal leading-none w-11/12 text-gray-700">{date}</time>
        <p className="text-base font-normal text-gray-700  w-11/12 ">{description}</p>
      </div>
    </li>
  );
};

export default TimelineItem;
