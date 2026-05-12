import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const DrivingDemand = () => {
  return (
    <section className="bg-[#f3f3f1] py-24 px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-12 items-start">
        <p className="text-[18px] md:text-[22px] text-black leading-snug max-w-md">
          A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
        </p>
        <div>
          <h2 className="font-display text-black tracking-[-0.03em] leading-[0.95] font-light" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}>
            Driving<br/>Demand &amp;<br/>
            <span className="inline-flex items-center gap-3 flex-wrap">
              Discovery
              <span className="inline-block w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=80" alt="" className="w-full h-full object-cover"/>
              </span>
            </span>
          </h2>
          <div className="flex gap-3 mt-10 flex-wrap">
            <a href="#about" className="inline-flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 text-[15px] font-medium hover:bg-[#9DF5D2] hover:text-black transition-colors">
              Our Story <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border border-black text-black rounded-full px-6 py-3 text-[15px] font-medium hover:bg-black hover:text-white transition-colors">
              Our Services <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingDemand;
