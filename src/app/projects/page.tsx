"use client";
import { useState } from 'react';
import { PROJECTS, Project } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsPage() {
  // Ensure the filter state is correctly typed to match your data.ts categories
  const [filter, setFilter] = useState<Project['category'] | 'All'>('All');

  const filtered = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Updated Heading: Changed text and casing */}
        <h1 className="text-5xl font-black text-white mb-8 tracking-tighter">
          Our Projects.
        </h1>
        
        {/* Animated Filter Box */}
        <div className="flex gap-6 mb-12 border-b border-white/10 pb-4 overflow-x-auto no-scrollbar">
          {['All', 'Residential', 'Commercial', 'Public'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`text-[10px] uppercase tracking-[0.3em] transition-all whitespace-nowrap ${
                filter === cat ? 'text-red-600 font-black' : 'text-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-zinc-900/50 border border-white/5 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                  <Image
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    // Removed 'grayscale' to showcase the actual earth colors of the project
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={project.id === '01'} // Priority for the first item
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[8px] font-black px-2 py-1 uppercase tracking-tighter z-10">
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-1 group-hover:text-red-600 transition-colors uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-red-600"></span>
                    <p className="text-gray-400 text-xs font-medium tracking-wide">
                      {project.location} • {project.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}