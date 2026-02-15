"use client";

import React from "react";
import { motion } from "framer-motion";
import { HardHat, Compass, Mountain, Ruler, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Rammed earth construction",
    icon: <Mountain className="w-10 h-10" />,
    desc: "Our flagship specialized service. We use locally sourced sub-soil, stabilized and mechanically compacted to create load-bearing walls.",
    features: ["Natural Temperature Control", "Fire & Termite Proof", "Acoustic Insulation"],
    specs: "Compressive Strength: 2-3 MPa"
  },
  {
    title: "Architectural design",
    icon: <Compass className="w-10 h-10" />,
    desc: "Modern design meets indigenous technology. We create blueprints that maximize natural ventilation and light.",
    features: ["3D Rendering", "Climate-Responsive Design", "Sustainable Urbanism"],
    specs: "BIM Integrated"
  },
  {
    title: "General Construction",
    icon: <HardHat className="w-10 h-10" />,
    desc: "Full-scale project management for residential and commercial ventures across South Sudan.",
    features: ["Project Management", "Site Supervision", "Quality Control"],
    specs: "ISO 9001 Standards"
  },
  {
    title: "Civil Engineering",
    icon: <Ruler className="w-10 h-10" />,
    desc: "Infrastructure solutions including road networks, drainage systems, and foundation engineering.",
    features: ["Soil Testing", "Structural Analysis", "Drainage Design"],
    specs: "South Sudan Building Code"
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-black pt-32 pb-24 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black capitalize text-white mb-4"
          >
            Our <span className="text-red-600">solutions</span>
          </motion.h1>
          <p className="text-gray-400 max-w-xl uppercase tracking-[0.2em] text-sm">
            Engineering excellence for Juba's evolving skyline.
          </p>
        </div>
      </section>

      {/* 2. Services List */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="flex flex-col gap-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-600/10 text-red-600 rounded-lg">
                  {service.icon}
                </div>
                <span className="text-6xl font-black text-gray-100">0{index + 1}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black capitalize tracking-tighter text-black">
                {service.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-red-600 pl-6">
                {service.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-800">
                    <ShieldCheck className="w-4 h-4 text-red-600" />
                    {feat}
                  </div>
                ))}
              </div>

              <div className="inline-block mt-4 px-4 py-2 bg-gray-100 text-[10px] font-mono font-bold uppercase text-gray-500">
                Technical Spec: {service.specs}
              </div>
              
              {/* Divider between services */}
              {index !== services.length - 1 && (
                <div className="pt-16 border-b border-gray-100 w-full" />
              )}
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