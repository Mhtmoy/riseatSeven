import React from 'react';
import { heroCollageImages, awardLogos, platforms } from '../mock';

const PlatformPill = ({ name, style }) => {
  const styles = {
    google: 'text-[26px]',
    chatgpt: 'text-[20px] flex items-center gap-1.5',
    gemini: 'text-[22px] italic font-light',
    tiktok: 'text-[22px] font-semibold',
    youtube: 'flex items-center gap-2 text-[20px]',
    pinterest: 'flex items-center gap-1.5 text-[20px]',
    giphy: 'text-[22px] font-bold tracking-tighter',
    reddit: 'flex items-center gap-1.5 text-[20px]',
    amazon: 'text-[22px] font-semibold',
  };
  const renderInner = () => {
    if (style === 'google') return (
      <span className="font-medium">
        <span style={{color:'#4285F4'}}>G</span><span style={{color:'#EA4335'}}>o</span><span style={{color:'#FBBC05'}}>o</span><span style={{color:'#4285F4'}}>g</span><span style={{color:'#34A853'}}>l</span><span style={{color:'#EA4335'}}>e</span>
      </span>
    );
    if (style === 'chatgpt') return (<><span className="w-5 h-5 rounded-full bg-white border border-white/40 flex items-center justify-center"><span className="w-2.5 h-2.5 rounded-full bg-black"/></span><span>ChatGPT</span></>);
    if (style === 'gemini') return <span className="text-white">✦ Gemini</span>;
    if (style === 'tiktok') return <span>TikTok</span>;
    if (style === 'youtube') return (<><span className="bg-white text-black rounded-md px-1.5 text-[12px] font-bold">▶</span><span>YouTube</span></>);
    if (style === 'pinterest') return (<><span className="w-5 h-5 rounded-full bg-white text-red-600 flex items-center justify-center text-[12px] font-bold">P</span><span>Pinterest</span></>);
    if (style === 'giphy') return <span>GIPHY</span>;
    if (style === 'reddit') return (<><span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px]">R</span><span>reddit</span></>);
    if (style === 'amazon') return <span>amazon</span>;
    return name;
  };
  return <div className={`text-white ${styles[style] || ''} px-3`}>{renderInner()}</div>;
};

const Hero = () => {
  return (
    <section className="relative rounded-4xl m-1 min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-3 gap-2 opacity-40 blur-md scale-110">
        <img src="src/assets/RedBull-Instagram-Post-45.jpg" className="w-fit h-fit"></img>
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black" />

      <div className="relative z-10 pt-40 pb-20 px-6 lg:px-10 max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center text-center text-white">
          <p className="text-[12px] tracking-[0.18em] uppercase mb-6 font-medium">#1 Most Recommended<br/>Content Marketing Agency</p>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16 opacity-90">
            {awardLogos.map((a, i) => (
              <div key={i} className="flex items-center gap-2 text-white text-[10px] font-semibold">
                <span className="opacity-60">❮</span>
                <span className="whitespace-pre-line text-center leading-tight">{a.text}</span>
                <span className="opacity-60">❯</span>
              </div>
            ))}
          </div>
        </div>

        <h1 className="font-display text-white text-center font-light leading-[0.9] tracking-[-0.03em]" style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}>
          <span className="inline-block">We Create</span><br/>
          <span className="inline-flex items-center justify-center gap-3 flex-wrap">
            <span>Category</span>
            <span className="inline-block align-middle rounded-2xl overflow-hidden" style={{ width: 'clamp(60px, 9vw, 130px)', height: 'clamp(60px, 9vw, 130px)' }}>
              <img src="src/assets/RedBull-Instagram-Post-45.jpg" alt="" className="w-full h-full object-cover" />
            </span>
            <span>Leaders</span>
          </span>
        </h1>
        <p className="text-center text-white/85 mt-8 text-[18px] md:text-[20px] font-light">on every searchable platform</p>

        <div className="mt-12 mx-auto max-w-5xl bg-black/40 backdrop-blur-sm rounded-full py-5 px-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 border border-white/10">
          {platforms.map((p) => <PlatformPill key={p.name} {...p} />)}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-10 text-white">
          <p className="text-[20px] md:text-[26px] font-light leading-tight max-w-xl">
            Organic media planners creating, distributing & optimising <span className="font-semibold">search-first</span> content for SEO, Social, PR, Ai and LLM search
          </p>
          <div className="md:text-right">
            <p className="text-[20px] md:text-[26px] font-light leading-tight"><span className="font-semibold">4 Global Offices serving</span></p>
            <p className="text-[20px] md:text-[26px] font-light"><span className="font-semibold">UK, USA (New York) & EU</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
