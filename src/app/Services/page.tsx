"use client";
import { motion } from "framer-motion";
import { HardHat, Compass, Mountain, Ruler, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Rammed Earth Construction",
    icon: <Mountain className="w-10 h-10" />,
    desc: "Our flagship specialized service. We use locally sourced sub-soil, stabilized and mechanically compacted to create load-bearing walls.",
    features: ["Natural Temperature Control", "Fire & Termite Proof", "Acoustic Insulation"],
    specs: "Compressive Strength: 2-3 MPa"
  },
  {
    title: "Architectural Design",
    icon: <Compass className="w-10 h-10" />,
    desc: "Modern design meets indigenous technology. We create blueprints that maximize natural ventilation and light.",
    features: ["3D Rendering", "Climate-Responsive Design", "Sustainable Urbanism"],
    specs: "BIM Integrated"
  },
  {
    title: "General Contracting",
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
    // Increased padding-top to ensure content isn't under the Navbar
    <main className="pt-32 bg-white min-h-screen">
      
      {/* 1. Header Section */}
      <section className="bg-black py-24 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase text-white mb-4"
          >
            Our <span className="text-red-600">Solutions</span>
          </motion.h1>
          <p className="text-gray-400 max-w-xl uppercase tracking-[0.2em] text-sm">
            Engineering excellence for Juba's evolving skyline.
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-32">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-16 items-start`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-6 w-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-600/10 text-red-600 rounded-lg">
                    {service.icon}
                  </div>
                  <span className="text-6xl font-black text-black/5">0{index + 1}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
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

                <div className="inline-block mt-8 px-4 py-2 bg-gray-100 text-[10px] font-mono font-bold uppercase text-gray-500">
                  Technical Spec: {service.specs}
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full aspect-[4/3] bg-neutral-900 relative overflow-hidden group shadow-2xl">
                 <div className="absolute inset-0 bg-red-600/10 group-hover:bg-transparent transition-all duration-700 z-10" />
                 
                 <div className="w-full h-full flex items-center justify-center font-black text-white/5 text-9xl tracking-tighter transition-transform duration-700 group-hover:scale-110">
                   RECL
                 </div>
                 
                 <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-600 flex items-center justify-center text-white font-bold text-2xl">
                   +
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. CTA Section */}
      <section className="py-24 bg-red-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">
            Ready to Build <br /> Sustainably?
          </h2>
          <button className="bg-black text-white px-12 py-5 font-black uppercase hover:bg-white hover:text-red-600 transition-all duration-300 shadow-2xl">
            Download Service Brochure
          </button>
        </div>
      </section>
    </main>
  );
}