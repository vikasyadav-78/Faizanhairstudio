"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 0,
    src: "/images/precision-haircut.jfif",
    title: "Precision Haircut",
    subtitle: "Artistic Scissor Design",
    aspect: "aspect-[3/4]"
  },
  {
    id: 1,
    src: "/images/razor-lineup.jfif",
    title: "Razor Detail Lineup",
    subtitle: "Bespoke Beard Artistry",
    aspect: "aspect-[4/5]"
  },
  {
    id: 2,
    src: "/images/hair-coloring.jfif",
    title: "Premium Hair Coloring",
    subtitle: "Luxury Color & Highlights",
    aspect: "aspect-[3/4]"
  },
  {
    id: 3,
    src: "/images/hot-towel-shave.jfif",
    title: "Classic Hot Towel Shave",
    subtitle: "Traditional Razor Styling",
    aspect: "aspect-[4/3]"
  },
  {
    id: 4,
    src: "/images/hair-smoothening.jfif",
    title: "Silk Smoothening Therapy",
    subtitle: "Keratin & Steam Treatment",
    aspect: "aspect-[3/4]"
  },
  {
    id: 5,
    src: "/images/luxury-lounge.jfif",
    title: "Signature Grooming Experience",
    subtitle: "Executive Styling Lounge",
    aspect: "aspect-[16/10]"
  },
  {
    id: 6,
    src: "/images/facial-skincare.jfif",
    title: "Bespoke Facial Skincare",
    subtitle: "Nourishing Cleanup Treatment",
    aspect: "aspect-[3/4]"
  }
];

export default function Gallery() {
  const [activeImageId, setActiveImageId] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageId === null) return;
      if (e.key === "Escape") setActiveImageId(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageId]);

  const handleNext = () => {
    setActiveImageId((prev) => {
      if (prev === null) return null;
      return (prev + 1) % galleryImages.length;
    });
  };

  const handlePrev = () => {
    setActiveImageId((prev) => {
      if (prev === null) return null;
      return (prev - 1 + galleryImages.length) % galleryImages.length;
    });
  };

  const activeImage = activeImageId !== null ? galleryImages[activeImageId] : null;

  return (
    <section id="gallery" className="py-24 bg-primary overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold text-secondary uppercase tracking-[0.25em] mb-3 inline-block">
            Grooming Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white mb-6">
            Our Studio Gallery
          </h2>
          <div className="w-20 h-[1px] bg-secondary mx-auto mb-6" />
          <p className="font-inter text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Step inside our visual realm. Explore our refined cuts, beard architectures, and premium treatments crafted by the experts at Faizan Hair Studio.
          </p>
        </div>

        {/* Masonry-Style Column Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {galleryImages.map((image) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              key={image.id}
              onClick={() => setActiveImageId(image.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveImageId(image.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.title} - ${image.subtitle} in Lightbox`}
              className={`relative break-inside-avoid w-full ${image.aspect} overflow-hidden group border border-white/5 cursor-pointer shadow-premium mb-6 focus:outline-none focus:ring-2 focus:ring-secondary/50 rounded-xl`}
            >
              {/* Photo */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Dark Radial Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6" />

              {/* Zoom Indicator Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary/70 backdrop-blur-sm flex items-center justify-center text-secondary border border-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={16} />
              </div>

              {/* Card Label Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-left z-10">
                <span className="font-poppins text-[9px] uppercase tracking-widest text-accent font-semibold block mb-1">
                  {image.subtitle}
                </span>
                <h3 className="font-playfair text-lg font-bold text-white tracking-wide">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Viewer Dialog */}
      <AnimatePresence>
        {activeImageId !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between text-white py-4 px-6 relative z-10 w-full">
              <div className="flex flex-col text-left">
                <p className="font-playfair text-lg font-bold text-secondary">{activeImage.title}</p>
                <p className="font-poppins text-[10px] uppercase tracking-widest text-white/50">{activeImage.subtitle}</p>
              </div>
              <button
                onClick={() => setActiveImageId(null)}
                className="w-12 h-12 bg-white/5 hover:bg-secondary hover:text-primary transition-all rounded-full flex items-center justify-center text-white outline-none"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Picture Screen */}
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-4 z-10 w-12 h-12 bg-black/50 border border-white/10 hover:border-secondary hover:text-secondary rounded-full flex items-center justify-center text-white transition-all outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image Frame */}
              <motion.div
                key={activeImageId}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl h-full aspect-[4/5] sm:aspect-auto"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-4 z-10 w-12 h-12 bg-black/50 border border-white/10 hover:border-secondary hover:text-secondary rounded-full flex items-center justify-center text-white transition-all outline-none"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Status Counter */}
            <div className="py-6 px-6 text-center">
              <span className="font-poppins text-xs uppercase tracking-widest text-white/40">
                {activeImageId + 1} / {galleryImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
