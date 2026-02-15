"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Import the Next.js Image component

const categories = ["All", "Residential", "Commercial", "Infrastructure"];

// 1. ADD IMAGE PATHS TO YOUR DATA
const projects = [
  { 
    id: 1, 
    title: "Peace Garden Arts Center", 
    cat: "Residential", 
    size: "md:col-span-2", 
    image: "/peace.jpg" // Path relative to the public folder
  },
  { 
    id: 2, 
    title: "Ayendit Bilyang Hospital", 
    cat: "Commercial", 
    size: "md:col-span-1", 
    image: "/ayen.jpg" 
  },
  { 
    id: 3, 
    title: "Thongpiny Apartments", 
    cat: "Residential", 
    size: "md:col-span-1", 
    image: "/thong.jpg" 
  },
  { 
    id: 4, 
    title: "Entrepreneurship Hub Juba", 
    cat: "Infrastructure", 
    size: "md:col-span-2", 
    image: "/ent.jpg" 
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* UPDATED: Red decorative bar removed, centering maintained */}
        <div className="flex flex-col items-center justify-center mb-16 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-black capitalize mb-4 text-black">Our work</h2>
          </div>
          
          <div className="flex gap-4 flex-wrap justify-center">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm font-bold uppercase tracking-widest px-4 py-2 transition-all ${filter === cat ? "text-brand-red underline decoration-2 underline-offset-8" : "text-gray-400 hover:text-black"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {projects.filter(p => filter === "All" || p.cat === filter).map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={p.id}
                className={`${p.size} relative aspect-[16/10] bg-neutral-900 group overflow-hidden`}
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-red/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 p-8 flex flex-col justify-end">
                  <p className="text-white/80 text-sm uppercase tracking-widest mb-2">{p.cat}</p>
                  <h3 className="text-white text-2xl font-black uppercase">{p.title}</h3>
                </div>

                {/* 2. THE IMAGE COMPONENT */}
                <Image 
                  src={p.image} 
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}