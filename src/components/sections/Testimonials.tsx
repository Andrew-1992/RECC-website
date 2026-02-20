"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "REC Co.Ltd renovated  and transformed the Ministry building into a master piece work",
    author: "Mrs. Nadia Arop",
    role: "Former, Minister of Culture & Heritage"
  },
  {
    quote: "Professionalism and local expertise. They understand the South Sudanese climate better than any international firm we've worked with.",
    author: "Health Forum Organization",
    role: "National NGO"
  }
];

export default function TestimonialsSlider() {
  return (
    <section className="py-24 bg-brand-offWhite overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-brand-red mb-16 text-center">
          Client Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-brand-black p-8 bg-white shadow-sm"
            >
              <p className="text-xl italic text-brand-black mb-6">"{t.quote}"</p>
              <div>
                <p className="font-black uppercase text-sm">{t.author}</p>
                <p className="text-brand-red text-xs uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}