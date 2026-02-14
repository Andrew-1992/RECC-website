"use client";
import { motion } from "framer-motion";
import { Layers, TestTube2, Hammer, Droplets } from "lucide-react";

const steps = [
  {
    phase: "01",
    title: "Geotechnical Analysis",
    icon: <TestTube2 className="w-8 h-8" />,
    desc: "Not all soil is equal. We analyze local Juba sub-soils to determine the perfect ratio of clay, sand, and gravel before adding a minimal 5-10% cement stabilizer.",
    details: ["Sieve Analysis", "Moisture Content Proving", "Proctor Testing"]
  },
  {
    phase: "02",
    title: "Architectural Formwork",
    icon: <Hammer className="w-8 h-8" />,
    desc: "Precision-engineered steel or plywood shutters are erected. These form the 'mold' for the structure, capable of withstanding extreme compaction pressures.",
    details: ["Steel Reinforcement", "Embedded Conduits", "Wall Ties"]
  },
  {
    phase: "03",
    title: "Pneumatic Compaction",
    icon: <Layers className="w-8 h-8" />,
    desc: "Earth is poured in 150mm 'lifts' and compacted using pneumatic rammers. This process mimics the natural creation of sedimentary rock in minutes.",
    details: ["Layer Stratification", "98% Density Goal", "Thermal Mass Creation"]
  },
  {
    phase: "04",
    title: "Stripping & Curing",
    icon: <Droplets className="w-8 h-8" />,
    desc: "The formwork is removed immediately, revealing the raw, stratified beauty of the earth. The walls then undergo a controlled curing process to reach peak strength.",
    details: ["Formwork Stripping", "Surface Sealing", "Hydration Monitoring"]
  }
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-32 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Added viewport once to fix re-triggering bug */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-red-600 font-mono text-xs uppercase tracking-[0.5em] font-bold"
          >
            Our Methodology // The Lift Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4"
          >
            Turning Soil into <br /> <span className="text-gray-300">Permanent Stone.</span>
          </motion.h2 >
        </div>

        {/* Timeline/Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              {/* Visual Box - Changed bg-gray-50 to a more modern neutral-50 */}
              <div className="relative mb-8 h-64 bg-neutral-50 border-t-2 border-black flex items-center justify-center overflow-hidden transition-colors group-hover:bg-neutral-100">
                <div className="absolute top-4 left-4 text-red-600 font-black text-4xl opacity-10 group-hover:opacity-40 transition-opacity">
                  {step.phase}
                </div>
                
                <div className="text-black group-hover:scale-110 group-hover:text-red-600 transition-all duration-500">
                  {step.icon}
                </div>
                
                {/* Decorative Grid Line - Architectural aesthetic */}
                <div className="absolute inset-0 border border-black/5 pointer-events-none" />
              </div>

              <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>

              {/* Technical Detail Pills */}
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {step.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-red-600">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" />
                    {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}