"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/layout/Section";

const values = [
  { title: "Sustainability", desc: "Utilizing local raw materials to reduce carbon footprints in South Sudan." },
  { title: "Durability", desc: "Our structures are built to withstand the unique climate of the Nile basin." },
  { title: "Innovation", desc: "Modernizing ancient earth-building techniques with 21st-century engineering." },
];

const team = [
  { name: "Eng. Deng Kuol", role: "Founder & Lead Architect", img: "/team1.jpg" },
  { name: "Sarah Laku", role: "Project Manager", img: "/team2.jpg" },
  { name: "John Okech", role: "Head of Earth Engineering", img: "/team3.jpg" },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Sub-Section */}
      <section className="bg-brand-black py-24 text-white">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase mb-6"
          >
            Building for <br /> <span className="text-brand-red">Generations.</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Rammed Earth Construction Co. Ltd (RECL) is Juba’s pioneer in high-performance, 
            eco-friendly building solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square bg-gray-100">
          <Image 
            src="/images/rammed-earth-texture.jpg" 
            alt="Rammed Earth Detail" 
            fill 
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl font-black uppercase mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Founded in 2015, RECL emerged from a desire to address the housing 
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
      </Section>

      

      {/* Values Grid */}
      <Section dark>
        <h2 className="text-3xl font-black uppercase mb-12 text-center text-brand-red">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="border border-white/10 p-8 hover:border-brand-red transition-colors">
              <h3 className="text-xl font-bold uppercase mb-4">{v.title}</h3>
              <p className="text-gray-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase mb-4">The Leadership</h2>
          <p className="text-gray-500">The experts behind Juba's most sustainable structures.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-brand-offWhite mb-6 overflow-hidden">
                 <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors z-10" />
                 {/* <Image src={member.img} alt={member.name} fill className="object-cover" /> */}
              </div>
              <h4 className="text-xl font-black uppercase">{member.name}</h4>
              <p className="text-brand-red font-bold text-sm tracking-widest uppercase">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mission/Vision Split */}
      <Section className="bg-brand-offWhite">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-black/10">
          <div className="p-12">
            <h3 className="text-2xl font-black uppercase mb-4 text-brand-red">Our Mission</h3>
            <p className="text-gray-600 italic">"To provide South Sudan with innovative, climate-appropriate construction that empowers local communities and preserves our environment."</p>
          </div>
          <div className="p-12">
            <h3 className="text-2xl font-black uppercase mb-4 text-brand-red">Our Vision</h3>
            <p className="text-gray-600 italic">"To become the Pan-African benchmark for sustainable architecture and soil-based engineering."</p>
          </div>
        </div>
      </Section>
    </main>
  );
}