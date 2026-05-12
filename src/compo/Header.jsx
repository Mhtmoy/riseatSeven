import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks } from '../mock';

const Logo = () => (
  <a href="#\" className="flex items-center font-display text-[22px] font-medium tracking-tight text-white\">
    <span>Rise at Seve</span>
    <span className="inline-block ml-1px">
      <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2H14L2 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"/>
      </svg>
    </span>
    <sup className="text-10px ml-0.5 -mt-2">®</sup>
  </a>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed rounded-4xl top-30px left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white/70 text-black backdrop-blur-md' : ''}`}>
      <div className="px-4 lg:px-6 py-5 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-4 text-white text-15px">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="relative flex items-center gap-1 hover:opacity-70 transition-opacity">
              <span>{link.label}</span>
              {link.hasPlus && <span className="text-15px">+</span>}
              {link.count && (
                <span className="absolute -top-2 -right-3 w-4 h-4 rounded-full bg-[#9DF5D2] text-black text-9px font-semibold flex items-center justify-center">{link.count}</span>
              )}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-2.5 text-14px font-medium hover:bg-[#9DF5D2] transition-colors">
          Get In Touch <ArrowUpRight className="w-4 h-4" />
        </a>
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu className="w-7 h-7" /></button>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black z-60 flex flex-col p-8">
          <div className="flex justify-between items-center">
            <Logo />
            <button onClick={() => setMobileOpen(false)} className="text-white"><X className="w-7 h-7" /></button>
          </div>
          <nav className="flex flex-col gap-6 mt-12 text-white text-3xl font-display">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2">{l.label}{l.hasPlus && '+'}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
export { Logo };
