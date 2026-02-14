"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import ProjectsSection from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import TestimonialsSlider from "@/components/sections/Testimonials";

// Reusable Reveal Wrapper for consistency
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      
      {/* 1. Hero */}
      <Hero />

      {/* 2. Services Reveal */}
      <section id="services" className="py-10">
        <Reveal>
          <ServicesSection />
        </Reveal>
      </section>

      {/* 3. UPDATED: Unique Selling Point (USP) - White Theme + Image */}
      <section className="py-32 bg-white text-black border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <Reveal delay={0.2}>
            <div className="space-y-8">
              <span className="text-brand-red font-mono text-xs uppercase tracking-[0.5em] block font-bold">
                The RECL Advantage
              </span>
              <h2 className="text-4xl md:text-4xl font-black uppercase mb-8 leading-[0.9] tracking-tighter">
                Who We Are 
              </h2>
              <p className="text-gray-600 text-lg max-w-lg leading-relaxed border-l-4 border-brand-red pl-6 normal">
                <strong>Rammed Earth Construction Co.Ltd</strong> is dedicated to delivering sustainable, durable, and innovative building solutions. Specializing in rammed earth construction, architectural design, and general construction, the company blends eco-friendly techniques with modern engineering to create functional and visually striking spaces. With a strong commitment to quality, efficiency, and client satisfaction, Rammed Earth Construction Company partners with clients to bring projects from concept to completion—building structures that stand the test of time.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {["100% Sustainable", "Thermal Regulation", "Low Carbon Footprint"].map((text, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-4 font-black uppercase tracking-widest text-[10px] text-gray-800"
                  >
                    <span className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold">✓</span> 
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Image Side: Finished Building Upload */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
            {/* Visual Frame Decor */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-brand-red z-0" />
            
            <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden shadow-2xl z-10">
              <Image 
                src="/rammed-earth.jpg" // Ensure this file exists in your /public folder
                alt="Finished Rammed Earth Building"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-0 right-0 bg-black text-white p-6 min-w-[200px]">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 mb-1">Structural Tech</p>
                <p className="text-lg font-black uppercase tracking-tighter text-brand-red">High-Density Earth</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Portfolio & Social Proof */}
      <section className="py-20">
        <Reveal>
          <ProjectsSection />
        </Reveal>
      </section>

      <Reveal delay={0.1}>
        <TestimonialsSlider />
      </Reveal>

      {/* 5. Contact Zone */}
      <section id="contact" className="py-20 bg-gray-50">
        <Reveal>
          <Contact />
        </Reveal>
      </section>
      
    </main>
  );
}