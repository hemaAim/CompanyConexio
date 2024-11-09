// IntegrationSection.tsx
import React from 'react';
import Image from 'next/image';


export default function IntegrationSection() {

  return (
    <div className=" text-center py-24 px-4 md:px-8 rounded-3xl shadow-sm mx-auto  w-5/6 max-w-6xl my-12 bg-slate-50 border-2 border-[#37beb0]" >
      {/* Header Section */}
      <div className="space-y-4 mb-8">
      
        <h2 className="text-3xl font-bold text-gray-800">
        Integração fluida com algumas tecnologia
        </h2>
        <p className="text-gray-700">
          Nossa implementação permite criar automações personalizadas e realizar integrações eficazes com as ferramentas e sistemas que você já utiliza
        </p>
     
      </div>
      
      {/* Icons Section */}
      <div className="flex flex-wrap  gap-5 justify-center space-x-6 mb-12">
        {/* Icon Wrappers with Borders */}
        <div className="p-4 border flex justify-center  w-16 h-16 sm:w-28 sm:h-28 sm:rounded-2xl border-[#fad038] rounded-lg shadow-xl">
          <Image src="/assets/iconIntegration/google-calendar.svg" alt="Google Calendar" width={64} height={64} />
        </div>
        <div className="p-4 border flex justify-center  w-16 h-16 sm:w-28 sm:h-28 sm:rounded-2xl border-[#fad038] rounded-lg shadow-xl">
          <Image src="/assets/iconIntegration/google-drive.svg" alt="Google Drive" width={64} height={64} />
        </div>
        <div className="p-4 border flex justify-center w-16 h-16 sm:w-28 sm:h-28 sm:rounded-2xl border-[#fad038] rounded-lg shadow-xl">
          <Image src="/assets/iconIntegration/zapier-2.svg" alt="Zapier" width={64} height={64} />
        </div>
        <div className="p-4 border flex justify-center  w-16 h-16 sm:w-28 sm:h-28 sm:rounded-2xl border-[#fad038] rounded-lg shadow-xl">
          <Image src="/assets/iconIntegration/official-gmail-icon-2020-.svg" alt="Slack" width={64} height={64} />
        </div>
        <div className="p-4 border flex justify-center  w-16 h-16 sm:w-28 sm:h-28 sm:rounded-2xl border-[#fad038]rounded-lg shadow-xl">
          <Image src="/assets/iconIntegration/slack-new-logo.svg" alt="Slack" width={64} height={64} />
        </div>
        <div className="p-4 border flex justify-center w-16 h-16 sm:w-28 sm:h-28 sm:rounded-2xl border-[#fad038] rounded-lg shadow-xl">
          <Image src="/assets/iconIntegration/google-sheets-logo-icon.svg" alt="Slack" width={44} height={64} />
        </div>
      </div> 
     
     
      {/* Features Section */}
    
    </div>
  );
};


