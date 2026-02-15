"use client";
import { motion } from "framer-motion";
import React from "react";
// Import the new icons
import { Landmark, DraftingCompass, HardHat } from "lucide-react";

const services = [
  {
    title: "Rammed Earth Construction",
    desc: "Sustainable, thermal-efficient wall systems using local South Sudanese soil.",
    icon: <Landmark className="w-12 h-12" />
  },
  {
    title: "Architectural Design",
    desc: "Modern aesthetics blended with traditional sustainable practices.",
    icon: <DraftingCompass className="w-12 h-12" />
  },
  {
    title: "General Construction",
    desc: "End-to-end project management for residential and commercial sites.",
    icon: <HardHat className="w-12 h-12" />
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITLE HEADING */}
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-red font-mono text-xs uppercase tracking-[0.5em] block mb-4"
          >
            Engineering Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-4xl font-black capitalize tracking-tighter text-black"
          >
            Our Services
          </motion.h2>
        </div>

        {/* UPDATED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                backgroundColor: "#1A1A1A", 
                color: "#fff",
                y: -10 
              }}
              className="p-12 border border-black transition-all duration-300 group cursor-default text-center flex flex-col items-center"
            >
              {/* Modern SVG Icon - Colored Red on White, turns White on Hover */}
              <div className="mb-8 text-brand-red group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 capitalize leading-tight">
                {s.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}