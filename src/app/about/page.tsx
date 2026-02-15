"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  { title: "Sustainability", desc: "Utilizing local raw materials to reduce carbon footprints in South Sudan." },
  { title: "Durability", desc: "Our structures are built to withstand the unique climate of the Nile basin." },
  { title: "Innovation", desc: "Modernizing ancient earth-building techniques with 21st-century engineering." },
];

const team = [
  { name: "Eng. Chatim Gai Chatiem", role: "Founder & Lead Engineer", img: "/chatim.jpg" },
  { name: "Adhar Machar Malok", role: "Lead Architect", img: "/adhar.jpg" },
  { name: "Thereza Aloung", role: "Head Logistics & Procurement", img: "/aloung.jpg" },
];

export default function AboutPage() {
  return (
    <main className="pt-20 bg-white">
      {/* 1. Hero Sub-Section */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black capitalize mb-6 leading-tight"
          >
            Building for <br /> <span className="text-red-600">Generations</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Rammed Earth Construction Co. Ltd (RECL) is Juba’s pioneer in high-performance, 
            eco-friendly building solutions.
          </p>
        </div>
      </section>

      {/* 2. Story Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square min-h-[400px] bg-gray-50 overflow-hidden border border-black shadow-xl">
          <Image 
            src="/about1.jpg" 
            alt="Rammed earth wall texture" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority 
          />
          <div className="absolute inset-0 -z-10 flex items-center justify-center text-gray-200 font-black text-2xl uppercase">
            RECL Texture
          </div>
        </div>

        <div>
          {/* Decorative bar removed here */}
          <h2 className="text-4xl font-black capitalize mb-6 text-black">
            Our story
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              Rammed Earth Construction Co.Ltd was founded in 2022, emerging from a desire to address the housing 
              shortage in South Sudan using sustainable, locally-sourced materials. 
              We realized that the very soil beneath our feet in Juba offered 
              the best protection against the region's heat.
            </p>
            <p>
              Today, we have grown into a full-service firm, handling everything from 
              government infrastructure to luxury residential eco-villas.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Values Grid */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black capitalize mb-12 text-center text-red-600">
            Our core values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="border border-white/10 p-8 hover:border-red-600 transition-colors group">
                <h3 className="text-xl font-bold capitalize mb-4 text-white group-hover:text-red-600 transition-colors">
                  {v.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black capitalize mb-4 text-black">
            The leadership
          </h2>
          <p className="text-gray-500">The technical experts driving sustainable engineering in Juba.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-gray-50 mb-6 overflow-hidden border border-gray-200 shadow-md">
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover z-0 transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-200 font-black text-4xl -z-10">
                  RECL
                </div>
              </div>
              <h4 className="text-xl font-black capitalize text-black">{member.name}</h4>
              <p className="text-red-600 font-bold text-xs tracking-widest uppercase mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Mission/Vision Split */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="p-12 md:p-20">
            <h3 className="text-2xl font-black capitalize mb-6 text-red-600">Our mission</h3>
            <p className="text-gray-600 italic text-lg leading-relaxed">
              "To provide South Sudan with innovative, climate-appropriate construction that empowers local communities and preserves our environment."
            </p>
          </div>
          <div className="p-12 md:p-20">
            <h3 className="text-2xl font-black capitalize mb-6 text-red-600">Our vision</h3>
            <p className="text-gray-600 italic text-lg leading-relaxed">
              "To become the Pan-African benchmark for sustainable architecture and soil-based engineering."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}