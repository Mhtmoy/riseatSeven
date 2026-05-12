import React from 'react';

const ReadyToRise = () => {
  const text = 'Ready to Rise at Seven?';
  const letters = text.split('');
  return (
    <section className=" text-black py-20 px-6 lg:px-10 overflow-hidden">
      <a href="#contact" className="block max-w-[1600px] mx-auto">
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 font-display font-light tracking-[-0.04em] leading-[0.85]" style={{ fontSize: 'clamp(3rem, 14vw, 16rem)' }}>
          {letters.map((l, i) => (
            <span key={i} className={`inline-block transition-transform hover:scale-110 hover:text-[#9DF5D2] ${l === ' ' ? 'w-4 md:w-10' : ''}`}>
              {l === ' ' ? '\u00A0' : l}
            </span>
          ))}
        </div>
      </a>
    </section>
  );
};

export default ReadyToRise;
