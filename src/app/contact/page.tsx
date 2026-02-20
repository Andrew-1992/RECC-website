"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Inquiry received. Our engineering team will contact you shortly.");
  };

  return (
    <main className="pt-20 bg-white">
      {/* Hero Header */}
      <section className="bg-black py-20 text-white">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black capitalize mb-4"
          >
            Connect with us <span className="text-red-600">Today</span>
          </motion.h1>
          <p className="text-gray-400 uppercase tracking-widest text-sm">
            Partner with South Sudan's leader in earth engineering.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border border-black overflow-hidden my-12">
        {/* Left Column: Contact Info */}
        <div className="bg-black text-white p-12 md:p-20 space-y-12">
          <div>
            <h2 className="text-3xl font-black capitalize mb-8 border-b border-red-600 pb-4 inline-block">
              Juba headquarters
            </h2>
            <div className="space-y-6">
              <ContactDetail 
                icon={<MapPin className="text-red-600" />} 
                title="Location" 
                detail="Cyierdit Building, Juba town, South Sudan" 
              />
              <ContactDetail 
                icon={<Phone className="text-red-600" />} 
                title="Direct Line" 
                detail="+211 923 228 220" 
              />
              <ContactDetail 
                icon={<Mail className="text-red-600" />} 
                title="Email" 
                detail="inquiry@rammedearth-ss.com" 
              />
              <ContactDetail 
                icon={<Clock className="text-red-600" />} 
                title="Operating Hours" 
                detail="Mon — Fri: 8:00 AM - 5:00 PM" 
              />
            </div>
          </div>

          <div className="pt-12 border-t border-white/10">
            <h3 className="font-bold capitalize mb-4 tracking-tighter">Project locations</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              While based in Juba, our mobile compaction teams are equipped for deployment to 
              Central Equatoria, Jonglei, and the Bahr el Ghazal regions.
            </p>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="p-12 md:p-20 bg-gray-50">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Full Name" placeholder="Deng Ibrahim" required />
              <InputField label="Email" type="email" placeholder="deng@example.com" required />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Phone Number" placeholder="+211 ..." />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Service Required</label>
                <select className="p-4 bg-white border-b-2 border-transparent focus:border-red-600 outline-none transition-all font-bold capitalize text-sm">
                  <option>Rammed earth wall systems</option>
                  <option>Architectural design</option>
                  <option>Civil infrastructure</option>
                  <option>General contracting</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500">Project Brief</label>
              <textarea 
                rows={5} 
                placeholder="Describe your site location and project scale..." 
                className="p-4 bg-white border-b-2 border-transparent focus:border-red-600 outline-none transition-all"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full bg-black text-white py-6 font-black capitalize tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-3 overflow-hidden"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Submit inquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Map Placeholder */}
      <div className="w-full h-[400px] bg-gray-200 grayscale relative">
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black text-white p-6 shadow-2xl text-center">
            <h4 className="font-black capitalize mb-2">Visit our office</h4>
            <p className="text-xs text-gray-400">Juba town, South Sudan — Cyierdit Building</p>
          </div>
        </div>
        <div className="w-full h-full bg-gray-300 bg-center opacity-50" />
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

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function InputField({ label, ...props }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-black uppercase tracking-widest text-gray-500">{label}</label>
      <input 
        {...props} 
        className="p-4 bg-white border-b-2 border-transparent focus:border-red-600 outline-none transition-all"
      />
    </div>
  );
}