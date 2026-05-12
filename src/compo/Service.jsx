import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../mock';

const Services = () => {
  return (
    <section id="services" className="bg-[#f3f3f1] py-24 px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <h2 className="font-display text-black tracking-[-0.03em] leading-none font-light" style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}>
            Our
            <span className="inline-block align-middle mx-3 w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" alt="" className="w-full h-full object-cover"/>
            </span>
            Services
          </h2>
          <a href="#services-all" className="inline-flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 text-[15px] font-medium hover:bg-[#9DF5D2] hover:text-black transition-colors">
            View All Services <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2">
  {services.map((s, i) => (
    <a key={i} href="#" className="group relative w-150 h-15 flex items-end p-6 rounded-4xl overflow-hidden aspect-4/5 bg-gray-100">
      
      {/* 1. Background Image - Absolute so it doesn't affect size */}
      <img 
        src={s.image} 
        alt={s.title} 
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-0"
      />
      
      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t transition-opacity z-10"/>

      {/* 3. Content Layer - Relative to sit on top of image */}
      <div className="relative z-20 flex flex-row justify-self-center-safe h-full w-full m-4 gap pointer-events-none">
        {/* Arrow at the top right */}
        <div className="">
          <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Text at the bottom */}
        <h3 className="text-black text-[24px] md:text-[30px] tracking-tight leading-tight">
          {s.title}
        </h3>
      </div>

    </a>
  ))}
</div>

      </div>
    </section>
  );
};

export default Services;
