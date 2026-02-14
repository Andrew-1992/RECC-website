"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return Math.min(oldProgress + Math.random() * 15, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center"
        >
          {/* Background Texture Effect */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Logo Syntax in Loader */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-1 text-3xl font-black tracking-tighter text-white mb-12"
            >
              <span className="bg-brand-red text-white px-2 py-0.5">RAMMED</span>
              <span>EARTH.</span>
            </motion.div>

            {/* Progress Counter */}
            <div className="overflow-hidden h-[1px] w-64 bg-white/10 relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-brand-red"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="mt-4 flex justify-between w-64 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
              <span>Compacting Layers</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Decorative "Layer" effect at bottom */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: `${progress / 2}%` }}
            className="absolute bottom-0 w-full bg-brand-red/5"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}