"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-black py-3 border-b border-white/10 shadow-2xl" 
          : "bg-brand-red py-4 border-b border-black/10" // RESTORED RED BACKGROUND
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        
        {/* Left: Logo & Company Name */}
        <div className="z-10">
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative w-14 h-14 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png" 
                alt="RECL Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="flex flex-col leading-tight">
              <span className="text-white font-black tracking-tighter text-lg md:text-2xl uppercase">
                RAMMED <span className={isScrolled ? "text-brand-red" : "text-black transition-colors"}>EARTH</span>
              </span>
              <span className="text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-white font-bold">
                Construction Co. Ltd
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-300 ${
                isScrolled ? "text-gray-400 hover:text-white" : "text-white hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Inquiry Button */}
        <div className="flex items-center gap-4 z-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl transition-all duration-500 ${
              isScrolled 
                ? "bg-brand-red text-white hover:bg-white hover:text-black" 
                : "bg-white text-black hover:bg-black hover:text-white"
            }`}
          >
            Inquiry
            <ArrowUpRight size={14} />
          </motion.button>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-full left-0 w-full overflow-hidden md:hidden border-t border-white/10 ${
              isScrolled ? "bg-black" : "bg-brand-red"
            }`}
          >
            <div className="flex flex-col p-10 space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-white uppercase italic tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}