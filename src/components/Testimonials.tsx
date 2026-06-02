"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Check } from "lucide-react";

const testimonials = [
  {
    id: 0,
    name: "Amit Sharma",
    role: "Premium Styling Client",
    rating: 5,
    text: "The best hair studio in Greater Noida West! Faizan's styling expertise is unmatched. I got a precision haircut and keratin treatment, and the results are stunning. Highly professional and clean environment.",
    date: "2 weeks ago"
  },
  {
    id: 1,
    name: "Rohit Verma",
    role: "Grooming Client",
    rating: 5,
    text: "Faizan Hair Studio offers premium services at very fair prices. The hot towel razor shave and beard styling are incredibly relaxing. The staff values hygiene and safety. Definitely my new regular spot!",
    date: "1 month ago"
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Hair Spa & Color Client",
    rating: 5,
    text: "Amazing experience! The styling team really listens to your preferences. The organic hair spa treatment made my hair feel completely restored and shiny. 5 stars for customer service!",
    date: "3 weeks ago"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Signature Package Client",
    rating: 5,
    text: "Extremely hygienic, high-end styling chairs, and friendly expert stylists. The grooming packages are an absolute steal. Clean tools, relaxing environment, and perfect attention to detail.",
    date: "2 months ago"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay carousel every 8 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="reviews" className="py-24 bg-bgIvory overflow-hidden relative">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold text-secondary uppercase tracking-[0.25em] mb-3 inline-block">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
            What Our Clients Say
          </h2>
          <div className="w-20 h-[1px] bg-secondary mx-auto mb-6" />
          <p className="font-inter text-sm sm:text-base text-richCharcoal/70 leading-relaxed font-light">
            Read first-hand reviews from our satisfied clients highlighting our hygiene standards, haircuts, and elite styling.
          </p>
        </div>

        {/* Google Reviews Trust Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto bg-white border border-secondary/15 p-6 mb-16 shadow-premium text-center flex flex-col items-center justify-center relative"
        >
          <div className="flex items-center space-x-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-secondary stroke-secondary" />
            ))}
          </div>
          <p className="font-playfair text-2xl font-bold text-primary mb-1">
            4.8 Rating
          </p>
          <div className="flex items-center space-x-2">
            <span className="font-poppins text-[10px] uppercase tracking-widest text-richCharcoal/60">
              Based on 14+ Google Reviews
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-green-600 flex items-center justify-center text-white scale-90">
              <Check size={8} className="stroke-[4]" />
            </div>
            <span className="font-poppins text-[9px] uppercase tracking-wider text-green-700 font-semibold">
              Verified
            </span>
          </div>
        </motion.div>

        {/* Slider Box */}
        <div className="relative max-w-4xl mx-auto min-h-[380px] sm:min-h-[300px]">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-white border border-secondary/10 p-8 sm:p-12 shadow-premium flex flex-col justify-between"
            >
              <div>
                {/* Quotation Header Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-secondary opacity-30">
                    <Quote size={40} className="transform scale-x-[-1]" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-secondary stroke-secondary" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="font-playfair text-lg sm:text-xl text-primary font-medium italic leading-relaxed text-left mb-8">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </blockquote>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between border-t border-secondary/10 pt-6">
                <div className="flex flex-col text-left">
                  <cite className="font-poppins text-xs font-bold text-primary uppercase tracking-widest not-italic">
                    {testimonials[activeIndex].name}
                  </cite>
                  <span className="font-inter text-[10px] text-richCharcoal/60 mt-0.5">
                    {testimonials[activeIndex].role}
                  </span>
                </div>
                
                <span className="font-poppins text-[9px] uppercase tracking-widest text-richCharcoal/40">
                  {testimonials[activeIndex].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Slider Navigation Controls */}
        <div className="flex items-center justify-center space-x-6 mt-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 border border-secondary/20 hover:border-secondary hover:text-secondary rounded-full flex items-center justify-center text-primary transition-all focus:outline-none"
            aria-label="Previous Review"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6 bg-secondary" : "w-1.5 bg-secondary/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 border border-secondary/20 hover:border-secondary hover:text-secondary rounded-full flex items-center justify-center text-primary transition-all focus:outline-none"
            aria-label="Next Review"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
