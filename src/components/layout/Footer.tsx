"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Subsection 1: Core Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-brand-red">Core Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Rammed Earth Construction</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Architectural Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">General Construction</Link></li>
              
            </ul>
          </div>

          {/* Subsection 2: Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-brand-red">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Featured Works</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Subsection 3: Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-brand-red">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red shrink-0" />
                <span>Cyierdit Building Juba town<br />Juba, South Sudan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red shrink-0" />
                <span>+211 923 228 220</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red shrink-0" />
                <span>info@rammedearth.ss</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Socials */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="order-2 md:order-1 text-center md:text-left flex flex-col md:flex-row items-center gap-6 md:gap-8">
            
            {/* COLOR LOGO: Removed grayscale and increased opacity */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 opacity-100 transition-transform duration-500 hover:scale-110">
              <Image 
                src="/logo.png" 
                alt="RECL Logo" 
                fill 
                className="object-contain" 
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                © 2026 Rammed Earth Co. Ltd. All rights reserved.
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-700 mt-2">
                Developed by Faida Technologies Ltd
              </p>
            </div>
          </div>

          <div className="flex gap-6 order-1 md:order-2">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></Link>
          </div>

        </div>
      </div>
    </footer>
  );
}