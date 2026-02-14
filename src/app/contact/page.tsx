"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Inquiry received. Our engineering team will contact you shortly.");
  };

  return (
    <main className="pt-20 bg-white">
      {/* Hero Header */}
      <section className="bg-brand-black py-20 text-white">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase mb-4"
          >
            Start Your <span className="text-brand-red">Build.</span>
          </motion.h1>
          <p className="text-gray-400 uppercase tracking-widest text-sm">
            Partner with South Sudan's leader in earth engineering.
          </p>
        </div>
      </section>

      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-black overflow-hidden !p-0">
        {/* Left Column: Contact Info */}
        <div className="bg-brand-black text-white p-12 md:p-20 space-y-12">
          <div>
            <h2 className="text-3xl font-black uppercase mb-8 border-b border-brand-red pb-4 inline-block">
              Juba Headquarters
            </h2>
            <div className="space-y-6">
              <ContactDetail 
                icon={<MapPin className="text-brand-red" />} 
                title="Location" 
                detail="Plot 42, Hai Malakal, Near Nile River, Juba, South Sudan" 
              />
              <ContactDetail 
                icon={<Phone className="text-brand-red" />} 
                title="Direct Line" 
                detail="+211 920 000 000 / +211 915 000 000" 
              />
              <ContactDetail 
                icon={<Mail className="text-brand-red" />} 
                title="Email" 
                detail="inquiry@rammedearth-ss.com" 
              />
              <ContactDetail 
                icon={<Clock className="text-brand-red" />} 
                title="Operating Hours" 
                detail="Mon — Fri: 8:00 AM - 5:00 PM" 
              />
            </div>
          </div>

          <div className="pt-12 border-t border-white/10">
            <h3 className="font-bold uppercase mb-4 tracking-tighter">Project Locations</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              While based in Juba, our mobile compaction teams are equipped for deployment to 
              Central Equatoria, Jonglei, and the Bahr el Ghazal regions.
            </p>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="p-12 md:p-20 bg-white">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Full Name" placeholder="Deng Ibrahim" required />
              <InputField label="Email" type="email" placeholder="deng@example.com" required />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Phone Number" placeholder="+211 ..." />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Service Required</label>
                <select className="p-4 bg-brand-offWhite border-b-2 border-transparent focus:border-brand-red outline-none transition-all font-bold uppercase text-sm">
                  <option>Rammed Earth Wall Systems</option>
                  <option>Architectural Design</option>
                  <option>Civil Infrastructure</option>
                  <option>General Contracting</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500">Project Brief</label>
              <textarea 
                rows={5} 
                placeholder="Describe your site location and project scale..." 
                className="p-4 bg-brand-offWhite border-b-2 border-transparent focus:border-brand-red outline-none transition-all"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full bg-brand-black text-white py-6 font-black uppercase tracking-widest hover:bg-brand-red transition-all flex items-center justify-center gap-3 overflow-hidden"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </Section>

      {/* Map Placeholder */}
      <div className="w-full h-[400px] bg-gray-200 grayscale relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-brand-black text-white p-6 shadow-2xl z-10 text-center">
            <h4 className="font-black uppercase mb-2">Visit Our Office</h4>
            <p className="text-xs text-gray-400">Juba, South Sudan — Hai Malakal District</p>
          </div>
        </div>
        {/* In production, embed Google Maps iframe here */}
        <div className="w-full h-full bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Juba,South+Sudan&zoom=14&size=1200x400&key=YOUR_API_KEY')] bg-cover bg-center opacity-50" />
      </div>
    </main>
  );
}

// Reusable Sub-components
function ContactDetail({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{title}</h4>
        <p className="font-bold">{detail}</p>
      </div>
    </div>
  );
}

function InputField({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-black uppercase tracking-widest text-gray-500">{label}</label>
      <input 
        {...props} 
        className="p-4 bg-brand-offWhite border-b-2 border-transparent focus:border-brand-red outline-none transition-all"
      />
    </div>
  );
}