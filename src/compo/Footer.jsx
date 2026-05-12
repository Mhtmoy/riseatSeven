import React, { useState } from 'react';

import { footerLinks } from '../mock';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3500);
    }
  };

  return (
    <footer className="bg-black text-white rounded-4xl pt-16 pb-6 px-6 lg:px-10 overflow:hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          <div>
            <p className="text-[14px] mb-4">Stay updated with Rise news</p>
            <form onSubmit={submit} className="relative bg-white/5 rounded-full border border-white/15 flex items-center pr-1.5">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="bg-transparent flex-1 px-5 py-3.5 text-[14px] outline-none text-white placeholder:text-white/50"
              />
              <button type="submit" className="w-10 h-10 rounded-full bg-[#9DF5D2] text-black flex items-center justify-center hover:scale-105 transition-transform" aria-label="Subscribe">
                
              </button>
            </form>
            {submitted && <p className="text-[#9DF5D2] text-[12px] mt-2">Thanks! You're subscribed.</p>}
            <div className="flex gap-3 mt-6">
              
            </div>
          </div>

          <ul className="space-y-3 text-[18px]">
            {footerLinks.col1.map(l => <li key={l}><a href="#" className="hover:text-[#9DF5D2] transition-colors">{l}</a></li>)}
          </ul>
          <ul className="space-y-3 text-[18px]">
            {footerLinks.col2.map(l => <li key={l}><a href="#" className="hover:text-[#9DF5D2] transition-colors">{l}</a></li>)}
          </ul>
          <ul className="space-y-3 text-[18px]">
            {footerLinks.col3.map(l => <li key={l}><a href="#" className="hover:text-[#9DF5D2] transition-colors">{l}</a></li>)}
          </ul>
        </div>

        <div className="py-10 max-w-full overflow-hidden flex justify-center">
  <div 
    className="font-display font-light tracking-[-0.04em] leading-[0.85] text-white whitespace-nowrap" 
    style={{ fontSize: '8.1vw' }} 
  >
    <span>
      Rise at Seve
      <span className="inline-block">
        <svg width="0.55em" height="0.75em" viewBox="0 0 16 22" fill="none">
          <path transform="rotate(-90 10 10)" d="M1 3H13L3 20" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
        </svg>
      </span>
      <sup className="text-[0.18em] ml-1">®</sup>
    </span>
  </div>
</div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-white/60 pt-4 border-t border-white/10">
          <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
          <span>•</span>
          <span>Company Number 11955187</span>
          <span>•</span>
          <span>VAT Registered GB 322402945</span>
          <span>•</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Terms & conditions</a>
          <span className="ml-auto">Website MadeByShape</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
