import React from 'react';
import { legacyItems } from '../mock';

const Legacy = () => {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="font-display text-black tracking-[-0.03em] leading-none font-light mb-16" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}>
          Legacy In The Making
        </h2>

        <div className="space-y-20">
          {legacyItems.map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="font-display text-black text-[44px] md:text-[64px] tracking-tight font-light mb-6 leading-none">{item.title}</h3>
                <p className="text-black/80 text-[16px] md:text-[18px] leading-relaxed whitespace-pre-line max-w-lg">{item.body}</p>
              </div>
              <div className={`rounded-3xl overflow-hidden aspect-square ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy;
