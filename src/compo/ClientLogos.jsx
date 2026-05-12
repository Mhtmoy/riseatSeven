import React from 'react';
import { clientLogos } from '../mock';

const ClientLogos = () => {
  const repeated = [...clientLogos, ...clientLogos];
  return (
    <section className="bg-[#f3f3f1] py-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <h3 className="text-[34px] md:text-[44px] font-display tracking-tight text-black mb-10">The agency behind …</h3>
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((c, i) => (
          <div key={i} className="px-12 flex items-center justify-center" style={{ minWidth: 200 }}>
            <span className="text-black text-[28px] font-bold tracking-tight opacity-90">{c}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;