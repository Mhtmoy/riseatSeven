import React from 'react';

const Marquee = () => {
  const items = [
    { text: 'Chasing Consumers', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80' },
    { text: 'Not Algorithms', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&q=80' },
  ];
  const repeated = Array(6).fill(items).flat();
  return (
    <a href="#contact" className="block bg-black py-10 overflow-hidden border-y border-white/10 group">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {repeated.map((it, i) => (
          <div key={i} className="flex items-center gap-6 px-8">
            <span className="font-display text-white text-[60px] md:text-[90px] font-light tracking-[-0.02em] leading-none">{it.text}</span>
            <span className="inline-block w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0">
              <img src={it.img} alt="" className="w-full h-full object-cover"/>
            </span>
          </div>
        ))}
      </div>
    </a>
  );
};

export default Marquee;
