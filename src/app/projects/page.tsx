"use client"; // Must be at the very top
import { useState } from 'react';
import { PROJECTS, Project } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// The function name can be anything, but 'export default' is mandatory
export default function ProjectsPage() {
  const [filter, setFilter] = useState<Project['category'] | 'All'>('All');

  const filtered = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-8">PROJECTS.</h1>
        
        {/* Animated Filter Box */}
        <div className="flex gap-4 mb-12 border-b border-white/10 pb-4">
          {['All', 'Residential', 'Commercial', 'Public'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`text-xs uppercase tracking-widest transition-all ${
                filter === cat ? 'text-brand-red font-bold' : 'text-gray-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white/5 p-4 border border-white/10"
              >
                <div className="relative aspect-video mb-4 bg-zinc-800">
                  {/* Image goes here */}
                </div>
                <h3 className="text-white font-bold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.location}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}