"use client";

import Link from "next/link";
import { Scissors } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white px-6 relative overflow-hidden select-none">
      {/* Decorative Gold Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center max-w-md">
        {/* Golden Shimmering Scissors */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full border border-secondary/30 flex items-center justify-center text-secondary mb-8 shadow-gold-glow bg-primary/80"
        >
          <Scissors size={28} className="stroke-[1.5]" />
        </motion.div>

        {/* 404 Header */}
        <h1 className="font-playfair text-6xl sm:text-7xl font-extrabold bg-gold-metallic bg-clip-text text-transparent mb-4 tracking-widest leading-none">
          404
        </h1>

        <h2 className="font-playfair text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-4">
          Style Not Found
        </h2>

        <p className="font-inter text-xs sm:text-sm text-white/60 leading-relaxed mb-8 font-light">
          The grooming page or styling destination you are looking for does not exist. Let&apos;s get you back to luxury.
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="px-8 py-3.5 bg-gold-metallic text-primary hover:text-white font-poppins font-bold text-xs uppercase tracking-widest border border-secondary transition-all duration-300 relative overflow-hidden group rounded shadow-gold-glow"
        >
          <span className="relative z-10 transition-colors duration-300">Return to Home</span>
          <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </Link>
      </div>
    </div>
  );
}
