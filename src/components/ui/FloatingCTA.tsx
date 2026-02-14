"use client";
import { motion } from "framer-motion";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 5, duration: 0.5 }} // Appears after user has engaged with the site
      className="fixed bottom-10 right-10 z-[40] hidden md:block"
    >
      <Link href="/contact" className="relative group flex items-center justify-center">
        {/* Rotating Text Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-24 h-24"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[10px] font-black uppercase tracking-[0.2em] fill-gray-400">
              <textPath xlinkHref="#circlePath">
                Request a Quote • Build with Earth • 
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Central Icon Button */}
        <motion.div
          whileHover={{ scale: 1.1, backgroundColor: "#cc0000" }}
          className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center text-white shadow-2xl transition-colors"
        >
          <MessageSquareText size={20} />
        </motion.div>
      </Link>
    </motion.div>
  );
}