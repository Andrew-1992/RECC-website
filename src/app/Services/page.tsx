"use client";

import React from "react";
import { motion } from "framer-motion";
import { HardHat, Compass, Mountain, Ruler, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Rammed earth construction",
    icon: <Mountain className="w-8 h-8" />,
    desc: "Our flagship specialized service using locally sourced sub-soil, stabilized and mechanically compacted.",
    features: ["Natural Temp Control", "Fire Proof", "Acoustic Insulation"],
    specs: "2-3 MPa Strength"
  },
  {
    title: "Architectural design",
    icon: <Compass className="w-8 h-8" />,
    desc: "Modern design meets indigenous technology. Blueprints that maximize natural ventilation.",
    features: ["3D Rendering", "Climate-Responsive", "Sustainable"],
    specs: "BIM Integrated"
  },
  {
    title: "General Construction",
    icon: <HardHat className="w-8 h-8" />,
    desc: "Full-scale project management for residential and commercial ventures across South Sudan.",
    features: ["Project Management", "Site Supervision", "Quality Control"],
    specs: "ISO 9001 Standards"
  },
  {
    title: "Civil Engineering",
    icon: <Ruler className="w-8 h-8" />,
    desc: "Infrastructure solutions including road networks, drainage, and foundation engineering.",
    features: ["Soil Testing", "Structural Analysis", "Drainage"],
    specs: "SS Building Code"
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-black pt-32 pb-24 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black capitalize text-white mb-4"
          >
            Our <span className="text-red-600">solutions</span>
          </motion.h1>
          <p className="text-gray-400 max-w-xl mx-auto uppercase tracking-[0.2em] text-sm">
            Engineering excellence for Juba's evolving skyline.
          </p>
        </div>
      </section>

      {/* 2. Grid Cards Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-gray-50 p-8 border border-gray-100 flex flex-col items-center text-center justify-between hover:bg-black transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-full flex flex-col items-center">
                {/* Icon and Numbering aligned center */}
                <div className="relative mb-8 flex justify-center w-full">
                  <div className="p-4 bg-white text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500 shadow-sm z-10">
                    {service.icon}
                  </div>
                  <span className="absolute -top-4 text-5xl font-black text-gray-200 group-hover:text-white/10 transition-colors z-0">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-black capitalize mb-4 text-black group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 group-hover:text-gray-400 transition-colors leading-relaxed">
                  {service.desc}
                </p>

                {/* Features aligned center */}
                <div className="flex flex-col items-center gap-3 mb-8">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-red-500 transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full">
                <div className="pt-6 border-t border-gray-200 group-hover:border-white/20 flex flex-col items-center gap-4">
                  <span className="text-[10px] font-mono font-bold uppercase text-gray-400 group-hover:text-gray-500 transition-colors">
                    {service.specs}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-24 bg-red-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black capitalize mb-8 tracking-tighter">
            Ready to build <br /> sustainably?
          </h2>
          <button className="bg-black text-white px-12 py-5 font-black uppercase hover:bg-white hover:text-red-600 transition-all duration-300">
            Download service brochure
          </button>
        </div>
      </section>
    </main>
  );
}