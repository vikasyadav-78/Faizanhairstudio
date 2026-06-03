"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
        >
          <div className="relative flex flex-col items-center">
            {/* Elegant Golden Circle Ring */}
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              }}
              className="w-24 h-24 border-t-2 border-r-2 border-secondary rounded-full absolute -top-4 -left-4"
            />
            
            {/* Shimmering Logo */}
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold font-playfair bg-gold-metallic bg-clip-text text-transparent tracking-widest relative z-10"
            >
              FHS
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className="w-[120px] h-[1px] bg-secondary mt-4 origin-center"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-accent font-poppins text-xs tracking-[0.2em] mt-3 uppercase"
            >
              Faizan Hair Studio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
