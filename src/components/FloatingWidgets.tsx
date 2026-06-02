"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function IoLogoWhatsapp({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
      <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.763 480 250.232 480 129.701 381.535 32 260.062 32zm0 439.117c-35.856 0-70.366-9.986-100.674-28.875l-7.23-4.512-74.908 23.826 20.03-72.768-4.706-7.556C71.328 335.79 60.134 294.025 60.134 250.232c0-109.839 89.445-199.117 199.928-199.117 110.485 0 199.929 89.278 199.929 199.117 0 109.837-89.444 199.117-199.929 199.117zm116.89-144.596c-6.402-3.201-37.818-18.667-43.682-20.801-5.864-2.134-10.131-3.201-14.398 3.201-4.267 6.402-16.533 20.801-20.267 25.068-3.733 4.267-7.466 4.801-13.867 1.6-6.402-3.201-27.026-9.957-51.498-31.797-19.035-16.974-31.916-37.939-35.65-44.341-3.733-6.402-.4-9.87 2.802-13.072 2.903-2.903 6.402-7.556 9.603-11.334 3.201-3.778 4.267-6.402 6.402-10.669 2.134-4.267 1.067-8.001-.533-11.202-1.6-3.201-14.398-34.667-19.732-47.401-5.201-12.334-10.534-10.669-14.398-10.889-3.733-.213-8.001-.267-12.267-.267-4.267 0-11.202 1.6-17.067 8.001-5.864 6.402-22.4 21.868-22.4 53.335 0 31.467 22.934 61.868 26.134 66.135 3.201 4.267 45.068 68.868 109.202 96.535 15.267 6.592 27.167 10.535 36.467 13.435 15.367 4.884 29.335 4.202 40.367 2.548 12.334-1.848 37.818-15.467 43.151-30.401 5.334-14.935 5.334-27.735 3.733-30.401-1.601-2.667-5.865-4.267-12.267-7.467z" />
    </svg>
  );
}

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Fixed Call pill button on bottom-left corner */}
      <motion.a
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        href="tel:8171885432"
        aria-label="Call Faizan Hair Studio directly at +91 8171885432"
        className="fixed bottom-6 left-6 z-30 px-5 sm:px-6 py-3 sm:py-3.5 bg-primary border border-secondary hover:border-accent hover:shadow-gold-glow text-secondary hover:text-white font-poppins font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-full flex items-center space-x-2.5 shadow-premium transition-all duration-300"
      >
        <Phone size={14} className="stroke-[2.5] animate-pulse" />
        <span>CALL 8171885432</span>
      </motion.a>

      {/* Fixed WhatsApp pill button on bottom-right corner */}
      <motion.a
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        href="https://wa.me/918171885432?text=Hi%20Faizan%20Hair%20Studio,%20I'd%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Faizan Hair Studio on WhatsApp"
        className="fixed bottom-6 right-6 z-30 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white hover:scale-105 font-poppins font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-full flex items-center space-x-2.5 shadow-gold-glow-hover transition-all duration-300"
      >
        <IoLogoWhatsapp className="w-4 h-4 fill-white" />
        <span>CHAT ON WHATSAPP</span>
      </motion.a>

      {/* Back To Top Action Button (floated slightly higher above WhatsApp pill on right) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.8 }}
            onClick={handleScrollTop}
            className="fixed bottom-24 right-6 z-30 w-12 h-12 bg-primary/80 hover:bg-secondary text-white hover:text-primary rounded-full flex items-center justify-center border border-secondary/25 shadow-premium backdrop-blur-sm transition-all focus:outline-none"
            aria-label="Back To Top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
