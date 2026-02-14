"use client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    /* 1. Changed h-screen to min-h-screen.
       2. Added pt-[80px] (adjust this value to match your Navbar's height).
       3. This ensures the 'relative' container starts below the navbar.
    */
    <section className="relative min-h-screen w-full bg-black flex flex-col pt-[80px] md:pt-[100px] overflow-hidden">
      
      {/* 1. Background Video Layer - Now constrained to the section below navbar */}
      <div className="absolute inset-0 top-[80px] md:top-[100px] z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/re-explainer.mp4" type="video/mp4" />
        </video>

        {/* 2. Overlays */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10" />
      </div>

      {/* 3. Central Content */}
      <div className="relative z-20 flex-grow flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <span className="text-brand-red font-mono text-xs md:text-sm uppercase tracking-[0.5em] mb-6 block font-bold drop-shadow-md">
            Juba - South Sudan
          </span>
          
          <h1 className="text-4xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
            Rammed Earth Construction<br />
            <span className="text-transparent" 
                  style={{ WebkitTextStroke: '1.5px white' }}>
              Co.Ltd
            </span>
          </h1>

          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto uppercase tracking-widest leading-relaxed mb-12 font-medium drop-shadow-md">
            Pioneering <span className="text-white font-bold">Sustainable Structural Engineering</span> through 
            high-density rammed earth technology.
          </p>

          <div className="flex justify-center">
            <Link href="/services">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-brand-red text-white px-12 py-6 font-black uppercase tracking-widest text-xs transition-all shadow-2xl"
              >
                Explore Our Services
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 4. Scroll Indicator */}
      <div className="relative z-20 pb-10 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/70 vertical-text font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-brand-red"
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>

      {/* Structural Border - Also pushed down to avoid navbar overlap */}
      <div className="absolute inset-0 top-[80px] md:top-[100px] pointer-events-none border-[10px] md:border-[20px] border-white/5 z-30" />
    </section>
  );
}