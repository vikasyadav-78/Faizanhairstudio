"use client";

import { motion } from "framer-motion";
import { Award, Sparkles, ShieldCheck, Heart, User, Tag } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Skilled Stylists",
    icon: Award,
    description: "Our artists stay updated with the latest international hair trends and precision grooming techniques."
  },
  {
    id: 2,
    title: "Premium Products",
    icon: Sparkles,
    description: "We use globally certified, premium hair care brands to ensure nourishing, safe, and elite results."
  },
  {
    id: 3,
    title: "Hygienic Environment",
    icon: ShieldCheck,
    description: "Rigorous sanitation standards, single-use disposables, and fully sterilized tools for your safety."
  },
  {
    id: 4,
    title: "Personalized Styling",
    icon: User,
    description: "Detailed shape and style consultations to match hair treatments perfectly to your distinct features."
  },
  {
    id: 5,
    title: "Transparent Pricing",
    icon: Tag,
    description: "Affordable, luxury-tier services priced transparently. Elevate your look without hidden costs."
  },
  {
    id: 6,
    title: "Absolute Satisfaction",
    icon: Heart,
    description: "We are committed to delivering a relaxing, top-tier salon experience. Your happiness is our metric."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-bgIvory overflow-hidden relative">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-poppins text-xs font-semibold text-secondary uppercase tracking-[0.25em] mb-3 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
            The Faizan Distinction
          </h2>
          <div className="w-20 h-[1px] bg-secondary mx-auto mb-6" />
          <p className="font-inter text-sm sm:text-base text-richCharcoal/70 leading-relaxed font-light">
            We offer more than just a haircut. We provide a luxurious salon journey designed entirely around your comfort, styling goals, and absolute safety.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                key={feature.id}
                className="group bg-white p-8 border border-secondary/10 hover:border-secondary transition-all duration-500 hover:shadow-premium relative overflow-hidden"
              >
                {/* Accent Top Border Hover Reveal */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-metallic scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                
                {/* Feature Icon */}
                <div className="w-14 h-14 rounded-full bg-bgIvory flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-primary transition-all duration-500 border border-secondary/15">
                  <Icon size={24} className="stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-xs text-richCharcoal/70 leading-relaxed font-light">
                  {feature.description}
                </p>

                {/* Micro hover shadow block */}
                <div className="absolute inset-0 bg-secondary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
