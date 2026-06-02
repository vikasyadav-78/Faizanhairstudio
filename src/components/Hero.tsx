"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

const headlines = [
  "Premium Hair Styling & Grooming Experience",
  "Bespoke Beard Artistry & Hot Towel Shaves",
  "Silky Smoothening & Keratin Hair Spa"
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  
  // Custom Typewriter States
  const [typedText, setTypedText] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Parallax transform mappings
  const backgroundY = useTransform(scrollY, [0, 800], ["0%", "15%"]);
  const textY = useTransform(scrollY, [0, 800], [0, 120]);
  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Character-by-character typewriter loop matching arts-of-salon exactly
  useEffect(() => {
    const fullText = headlines[headlineIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        // Backspacing character-by-character
        setTypedText(fullText.substring(0, typedText.length - 1));
        
        if (typedText === "") {
          setIsDeleting(false);
          setHeadlineIndex((prev) => (prev + 1) % headlines.length);
          setTypingSpeed(400); // Pause before starting to type the next headline
        } else {
          setTypingSpeed(40); // Fast backspacing speed
        }
      } else {
        // Typing character-by-character
        setTypedText(fullText.substring(0, typedText.length + 1));
        
        if (typedText === fullText) {
          setTypingSpeed(2500); // 2.5 seconds pause when fully typed to let user read
          setIsDeleting(true);
        } else {
          // Randomized realistic organic typing speed
          setTypingSpeed(80 + 40 * Math.random());
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, headlineIndex, typingSpeed]);

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 scale-110 origin-bottom"
      >
        <Image
          src="/images/hero-bg.webp"
          alt="Faizan Hair Studio Premium Salon Interior"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Luxury Dark radial and gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_80%)]" />

      {/* Hero Content Container */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center w-full"
      >
        {/* Shimmering Top Accent Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex items-center space-x-2 border border-secondary/30 px-5 py-2 bg-secondary/5 rounded-full backdrop-blur-sm shadow-gold-glow"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="text-[10px] font-poppins uppercase tracking-[0.25em] text-accent font-semibold">
            Premium Grooming Studio
          </span>
        </motion.div>

        {/* Dynamic Typewriter Heading with Flashing Gold Cursor */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-playfair tracking-wide leading-tight mb-6 min-h-[160px] sm:min-h-[200px] md:min-h-[260px] flex items-center justify-center w-full overflow-hidden text-center select-none">
          <span className="bg-gold-metallic bg-clip-text text-transparent font-extrabold pb-2">
            {typedText}
          </span>
          <span className="animate-[pulse_1s_infinite] text-secondary font-light ml-1 relative -top-1">
            |
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-sm sm:text-base md:text-lg font-inter text-white/80 max-w-2xl mb-10 leading-relaxed font-light"
        >
          Transform Your Look with Expert Haircuts, Styling, Grooming, and Professional Salon Services.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-gold-metallic hover:shadow-gold-glow-hover text-primary font-poppins font-bold text-xs uppercase tracking-widest border border-secondary transition-all duration-300 relative overflow-hidden group text-center"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Book Appointment
            </span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>

          <a
            href="tel:8171885432"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-secondary text-white hover:text-secondary font-poppins font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 bg-black/20 backdrop-blur-sm text-center"
          >
            <Phone size={14} />
            <span>Call 8171885432</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Animated Scroll Down Mouse Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 0.6 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer hidden md:flex"
      >
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center space-y-2 group focus:outline-none"
          aria-label="Scroll to About Section"
        >
          <span className="text-[9px] font-poppins uppercase tracking-[0.2em] text-white/50 group-hover:text-secondary transition-colors">
            Discover Studio
          </span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center p-1.5 group-hover:border-secondary transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-secondary"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
