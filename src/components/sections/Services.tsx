// 1. MUST HAVE "use client" at the very top for Framer Motion to work
"use client";

// 2. IMPORT motion from framer-motion
import { motion } from "framer-motion";
import React from "react";

const services = [
  {
    title: "Rammed Earth Construction",
    desc: "Sustainable, thermal-efficient wall systems using local South Sudanese soil.",
    icon: "🏗️"
  },
  {
    title: "Architectural Design",
    desc: "Modern aesthetics blended with traditional sustainable practices.",
    icon: "📐"
  },
  {
    title: "General Construction",
    desc: "End-to-end project management for residential and commercial sites.",
    icon: "🏢"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITLE HEADING */}
        <div className="mb-16">
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
            className="text-4xl md:text-4xl font-black uppercase tracking-tighter text-black"
          >
            Our Services
          </motion.h2>
        </div>

        {/* UPDATED GRID: 
          - gap-8 separates the cards
          - Removed the global border-t and border-l 
        */}
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
              /* CARD STYLING:
                - text-center aligns all content to the middle
                - border-black on all sides for individual separation
              */
              className="p-12 border border-black transition-all duration-300 group cursor-default text-center flex flex-col items-center"
            >
              {/* Centered Icon */}
              <span className="text-5xl mb-8 block">{s.icon}</span>
              
              {/* Lowercased Title: 
                - Removed uppercase class
                - Capitalized first letter via standard text
              */}
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