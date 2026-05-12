import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { featuredWork } from '../mock';

const FeaturedWork = () => {
  const [hovered, setHovered] = useState(featuredWork[0]);

  return (
    <section id="work" className="bg-black text-white rounded-4xl m-8 py-24 px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto">
        <p className="text-[14px] mb-10 text-white/70">Featured Work</p>

        <div className="grid lg:grid-cols-[1fr_520px] gap-12 items-start">
          {/* Left: list */}
          <ul className="flex flex-col">
            {featuredWork.map((item) => (
              <li
                key={item.id}
                onMouseEnter={() => setHovered(item)}
                className="group border-t border-white/15 last:border-b py-5 cursor-pointer transition-colors"
              >
                <a href="#" className="flex items-baseline justify-between gap-4">
                  <span className={`font-display tracking-[-0.02em] leading-none transition-colors ${hovered.id === item.id ? 'text-white' : 'text-white/35'}`} style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
                    {item.client}
                  </span>
                  <span className="text-[12px] text-white/60 whitespace-nowrap pl-4">{item.years}</span>
                </a>
                <div className="text-[13px] text-white/55 mt-1">{item.description}</div>
              </li>
            ))}
          </ul>

          {/* Right: sticky preview */}
          <div className="hidden lg:block sticky top-32 space-y-5">
            <div className="rounded-3xl overflow-hidden bg-white/5 aspect-4/3 relative">
              <img src={hovered.image} alt={hovered.client} className="w-full h-full object-cover transition-all duration-500" />
              <div className="absolute bottom-4 right-4 bg-white text-black rounded-full px-4 py-2 text-[13px] font-medium flex items-center gap-2">
                {hovered.category}
                <span className="opacity-60">↗</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#work" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3.5 text-[15px] font-medium hover:bg-[#9DF5D2] transition-colors">
            Explore Our Work <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
