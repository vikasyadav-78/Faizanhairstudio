"use client";

import Image from "next/image";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countRef.current) {
          countRef.current = true;
          let start = 0;
          const end = value;
          const totalMiliseconds = duration * 1000;
          const stepTime = 30; // 30ms intervals
          const totalSteps = totalMiliseconds / stepTime;
          const increment = end / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-bgIvory overflow-hidden relative">
      {/* Decorative Subtle Background Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image with premium frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[4/5] max-w-lg mx-auto lg:mx-0"
          >
            {/* Background gold border decorative box */}
            <div className="absolute -inset-4 border border-secondary/30 translate-x-4 translate-y-4 pointer-events-none z-0" />
            
            {/* Premium glass block behind */}
            <div className="absolute -inset-4 bg-primary/5 -translate-x-4 -translate-y-4 pointer-events-none z-0 backdrop-blur-sm" />

            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden shadow-premium border border-secondary/15 z-10">
              <Image
                src="/images/87ac41c2-b5d4-45b3-a521-0a275ec08bb1.jfif"
                alt="Faizan Hair Studio Luxury Grooming Experience"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Image dark overlay */}
              <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Floating Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-8 right-8 z-20 bg-primary border border-secondary/30 p-4 shadow-gold-glow backdrop-blur-md flex items-center space-x-3 text-left"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                <Star className="fill-secondary stroke-secondary w-6 h-6" />
              </div>
              <div>
                <p className="font-playfair text-xl font-bold text-white leading-none">4.8★</p>
                <p className="font-poppins text-[10px] uppercase tracking-wider text-accent mt-1">Google Rated</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Text details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col text-left"
          >
            {/* Small Header */}
            <span className="font-poppins text-xs font-semibold text-secondary uppercase tracking-[0.25em] mb-3">
              About The Studio
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-primary leading-tight mb-6">
              About Faizan Hair Studio
            </h2>

            {/* Main description */}
            <p className="font-inter text-base text-richCharcoal/80 leading-relaxed mb-6 font-light">
              Welcome to <strong className="text-primary font-medium">Faizan Hair Studio</strong>, the pinnacle of luxury hair styling and premium grooming in Greater Noida. We combine modern artistry with timeless grooming traditions to deliver a personalized experience tailored uniquely to you.
            </p>

            <p className="font-inter text-sm text-richCharcoal/70 leading-relaxed mb-8 font-light">
              Our salon prides itself on sterile, ultra-hygienic practices, the use of globally certified premium grooming products, and an inviting, sophisticated environment. Whether you are looking for a complete makeover, precision beard styling, refreshing hair therapies, or expert smoothening, our studio is dedicated to elevating your style.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Highly Skilled Professionals",
                "100% Hygienic & Safe",
                "Premium Hair Products Only",
                "Custom Personalized Styling",
                "Warm Elegant Ambiance",
                "High Customer Satisfaction",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="font-poppins text-xs text-primary font-medium tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>

            {/* Animated Counters Block */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-secondary/20">
              <div className="flex flex-col">
                <span className="font-playfair text-3xl sm:text-4xl font-bold text-secondary">
                  <Counter value={10} suffix="+" />
                </span>
                <span className="font-poppins text-[10px] uppercase tracking-wider text-richCharcoal/60 mt-1">
                  Years of Excellence
                </span>
              </div>
              
              <div className="flex flex-col">
                <span className="font-playfair text-3xl sm:text-4xl font-bold text-secondary">
                  <Counter value={5} suffix="+" />
                </span>
                <span className="font-poppins text-[10px] uppercase tracking-wider text-richCharcoal/60 mt-1">
                  Expert Stylists
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-playfair text-3xl sm:text-4xl font-bold text-secondary">
                  <Counter value={14} suffix="+" />
                </span>
                <span className="font-poppins text-[10px] uppercase tracking-wider text-richCharcoal/60 mt-1">
                  Five-Star Reviews
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
