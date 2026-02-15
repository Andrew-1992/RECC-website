"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import ProjectsSection from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import TestimonialsSlider from "@/components/sections/Testimonials";

// Reusable Reveal Wrapper with a smoother "Spring" transition
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.8, 
      delay, 
      ease: [0.21, 0.47, 0.32, 0.98] // Modern ease-out-expo
    }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const containerRef = useRef(null);
  
  // Parallax logic for the building image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      
      <Hero />

      <section id="services" className="py-10">
        <Reveal>
          <ServicesSection />
        </Reveal>
      </section>

      {/* 3. USP Section with Advanced Interactivity */}
      <section ref={containerRef} className="py-32 bg-white text-black border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <Reveal delay={0.2}>
            <div className="space-y-8">
              
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[0.9] tracking-tighter capitalize">
                Who we are 
              </h2>

              <p className="text-gray-600 text-lg max-w-lg leading-relaxed border-l-4 border-brand-red pl-6">
                <strong>Rammed Earth Construction Co.Ltd</strong> is dedicated to delivering sustainable, durable, and innovative building solutions. Specializing in rammed earth construction, architectural design, and general construction...
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {["100% Sustainable", "Thermal Regulation", "Low Carbon Footprint"].map((text, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + (i * 0.1),
                      type: "spring", 
                      stiffness: 100 
                    }}
                    className="flex items-center gap-4 font-black uppercase tracking-widest text-[10px] text-gray-800"
                  >
                    <motion.span 
                      whileInView={{ scale: [0, 1.2, 1] }}
                      className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold"
                    >
                      ✓
                    </motion.span> 
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Interactive Image Container */}
          <motion.div 
            style={{ y: yParallax }} // Dynamic Parallax Effect
            className="relative group"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-brand-red z-0 transition-all duration-500 group-hover:-top-6 group-hover:-right-6" />
            
            <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden shadow-2xl z-10 rounded-sm">
              <Image 
                src="/rammed-house.jpg"
                alt="Detailed Rammed Earth House South Sudan"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              
              <motion.div 
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-0 right-0 bg-black text-white p-6 min-w-[200px]"
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 mb-1">Structural Tech</p>
                <p className="text-lg font-black uppercase tracking-tighter text-brand-red">High-Density Earth</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <Reveal>
          <ProjectsSection />
        </Reveal>
      </section>

      <Reveal delay={0.1}>
        <TestimonialsSlider />
      </Reveal>

      <section id="contact" className="py-20 bg-gray-50">
        <Reveal>
          <Contact />
        </Reveal>
      </section>
      
    </main>
  );
}