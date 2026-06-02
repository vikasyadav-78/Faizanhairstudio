"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Wind, Droplets, Palette, Sparkles, ShieldCheck, Smile, Gift, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Precision Haircut",
    category: "hair",
    icon: Scissors,
    description: "Expert, shape-tailored haircut designed to match your face structure and personality.",
    duration: "30-45 mins"
  },
  {
    id: 2,
    name: "Modern Hair Styling",
    category: "hair",
    icon: Wind,
    description: "Premium blowouts, setting, and elegant hair styling for special events or daily style.",
    duration: "20-30 mins"
  },
  {
    id: 3,
    name: "Beard Design & Trim",
    category: "grooming",
    icon: Sparkles,
    description: "Clean hot towel shaving, shaping, razor lineup, and organic beard oil treatment.",
    duration: "25-40 mins"
  },
  {
    id: 4,
    name: "Deep Conditioning Spa",
    category: "treatment",
    icon: Droplets,
    description: "Nutrient-rich, therapeutic steam treatment to restore shine, root strength, and scalp health.",
    duration: "45-60 mins"
  },
  {
    id: 5,
    name: "Premium Hair Coloring",
    category: "hair",
    icon: Palette,
    description: "Global highlights, balayage, and root touch-ups using certified ammonia-free premium colors.",
    duration: "60-90 mins"
  },
  {
    id: 6,
    name: "Smoothening & Keratin",
    category: "treatment",
    icon: Sparkles,
    description: "Professional Keratin or smoothening treatment to eliminate frizz and deliver silky, straight locks.",
    duration: "120-180 mins"
  },
  {
    id: 7,
    name: "Therapeutic Treatments",
    category: "treatment",
    icon: ShieldCheck,
    description: "Targeted anti-dandruff, anti-hairfall, and bespoke scalp therapies for optimal hair growth.",
    duration: "45 mins"
  },
  {
    id: 8,
    name: "Facial Cleanup & Glow",
    category: "skin",
    icon: Smile,
    description: "Luxury facial scrub, golden hydration masks, and blackhead removal for glowing skin.",
    duration: "40 mins"
  },
  {
    id: 9,
    name: "Signature Grooming Packages",
    category: "packages",
    icon: Gift,
    description: "All-in-one grooming bundles including haircut, beard styling, spa, and cleanup at a premium price.",
    duration: "90-120 mins"
  }
];

const categories = [
  { id: "all", name: "All Services" },
  { id: "hair", name: "Hair Styling" },
  { id: "grooming", name: "Beard & Grooming" },
  { id: "treatment", name: "Treatments" },
  { id: "skin", name: "Skincare" },
  { id: "packages", name: "Packages" }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter(service => service.category === activeCategory);

  const handleBookClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Dark Luxury Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold text-secondary uppercase tracking-[0.25em] mb-3 inline-block">
            Menu of Artistry
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white mb-6">
            Our Luxury Services
          </h2>
          <div className="w-20 h-[1px] bg-secondary mx-auto mb-6" />
          <p className="font-inter text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Explore our premium grooming, hair styling, and professional salon services. Each session is tailored with high-end techniques and premium products.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2.5 font-poppins text-xs uppercase tracking-wider transition-all duration-300 relative ${
                activeCategory === category.id
                  ? "text-primary font-bold"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="relative z-10">{category.name}</span>
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-gold-gradient shadow-gold-glow"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Services Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={service.id}
                  className="group bg-richCharcoal/30 border border-white/5 hover:border-secondary/30 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-gold-glow relative overflow-hidden h-[260px]"
                >
                  {/* Decorative Background Hover Glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 group-hover:bg-secondary/10 rounded-full blur-2xl transition-all duration-500" />
                  
                  <div>
                    {/* Header: Icon & Duration */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-none border border-secondary/20 flex items-center justify-center text-secondary bg-secondary/5 group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                        <IconComponent size={20} className="stroke-[1.5]" />
                      </div>
                      <span className="font-poppins text-[10px] uppercase tracking-widest text-accent/60">
                        {service.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-xs text-white/60 leading-relaxed font-light line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Booking CTA Link inside card */}
                  <button
                    onClick={handleBookClick}
                    className="flex items-center space-x-2 text-[10px] font-poppins uppercase tracking-widest text-secondary group-hover:text-white transition-colors duration-300 focus:outline-none mt-4 w-fit"
                  >
                    <span>Book Service</span>
                    <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
