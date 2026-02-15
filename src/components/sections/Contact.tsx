"use client";
import React from "react";
import { MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          {/* Casing changed: Sentence case per request */}
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-black leading-tight">
            Let's build South Sudan.
          </h2>
          <p className="text-gray-600 mb-12 max-w-md text-lg">
            Ready to start your sustainable construction journey? Visit our headquarters or send us a message.
          </p>
          
          <div className="space-y-8">
            {/* Headquarters */}
            <div className="flex gap-6">
              <div className="h-12 w-12 bg-black flex items-center justify-center text-white shrink-0">
                <MapPin size={20} className="text-red-600" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm text-gray-500 mb-1">Headquarters</h4>
                <p className="text-black font-bold">Cyierdit Building, Juba Town, South Sudan</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6">
              <div className="h-12 w-12 bg-black flex items-center justify-center text-white shrink-0">
                <Phone size={20} className="text-red-600" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm text-gray-500 mb-1">Phone</h4>
                <p className="text-black font-bold">+211 923 228 220</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="bg-gray-50 p-10 space-y-6 border border-gray-100 shadow-sm">
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-tighter text-gray-400">Personal details</label>
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full p-4 bg-white border-b-2 border-transparent focus:border-red-600 outline-none transition-all" 
              required
            />
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full p-4 bg-white border-b-2 border-transparent focus:border-red-600 outline-none transition-all" 
              required
            />
          </div>

          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-tighter text-gray-400">Inquiry type</label>
            <select className="w-full p-4 bg-white border-b-2 border-transparent focus:border-red-600 outline-none transition-all appearance-none cursor-pointer">
              <option>Select service</option>
              <option>Rammed earth construction</option>
              <option>Architectural design</option>
              <option>Civil infrastructure</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-tighter text-gray-400">Project brief</label>
            <textarea 
              placeholder="Tell us about your project site..." 
              rows={4} 
              className="w-full p-4 bg-white border-b-2 border-transparent focus:border-red-600 outline-none transition-all resize-none" 
              required
            />
          </div>

          <button className="group w-full bg-black text-white py-5 font-bold uppercase tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-3">
            <span>Send inquiry</span>
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}