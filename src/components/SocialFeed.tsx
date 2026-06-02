"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, ExternalLink, Play } from "lucide-react";

export default function SocialFeed() {
  const instagramProfileUrl = "https://www.instagram.com/faizanhairstudio1?utm_source=qr";

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative border-t border-secondary/15">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold text-secondary uppercase tracking-[0.25em] mb-3 inline-block">
            Social Connection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white mb-6">
            Follow Our Journey
          </h2>
          <div className="w-20 h-[1px] bg-secondary mx-auto mb-6" />
          <p className="font-inter text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Stay inspired by daily styling releases, before-after makeovers, hair design tips, and premier grooming styles directly on our active feed.
          </p>
        </div>

        {/* Instagram Profile Card Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-richCharcoal/40 border border-secondary/20 p-6 md:p-8 mb-16 shadow-gold-glow rounded-xl backdrop-blur-md"
        >
          {/* Main profile row */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-white/10">
            {/* Avatar & Username */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <div className="relative w-20 h-20 rounded-full border-2 border-secondary p-0.5 overflow-hidden flex-shrink-0 shadow-lg bg-black">
                <Image
                  src="/images/logo.jpg"
                  alt="Faizan Hair Studio Instagram Profile"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center pt-1">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <span className="font-poppins text-lg font-bold text-white tracking-wide">
                    faizanhairstudio1
                  </span>
                  {/* Verified Gold Tick */}
                  <div className="w-4 h-4 rounded-full bg-secondary flex items-center justify-center text-primary scale-90">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                </div>
                <p className="font-inter text-xs text-white/50 mt-1">Faizan ali</p>
              </div>
            </div>

            {/* Stats count */}
            <div className="flex items-center space-x-8 py-2">
              <div className="flex flex-col items-center">
                <span className="font-poppins text-base md:text-lg font-bold text-secondary">111</span>
                <span className="font-poppins text-[10px] text-white/50 uppercase tracking-wider">Posts</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="font-poppins text-base md:text-lg font-bold text-secondary">1,338</span>
                <span className="font-poppins text-[10px] text-white/50 uppercase tracking-wider">Followers</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-poppins text-base md:text-lg font-bold text-secondary">304</span>
                <span className="font-poppins text-[10px] text-white/50 uppercase tracking-wider">Following</span>
              </div>
            </div>
          </div>

          {/* Bio area & Button row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-6 text-left">
            <div className="space-y-1.5 max-w-md">
              <p className="font-inter text-xs text-accent font-semibold">Artist</p>
              <p className="font-inter text-xs text-white/80 font-medium">[ HAIR | BEAUTY | NIAL | MAKEUP ]</p>
              <p className="font-inter text-xs text-white/70 leading-relaxed font-light">
                Best hair & Beauty transformation Faizan hair studio
              </p>
              <p className="font-inter text-xs text-white/60 flex items-center space-x-1 font-light">
                <span>Book for appointment,</span>
                <span className="animate-bounce">👇</span>
              </p>
            </div>

            <div className="flex items-center space-x-3 w-full md:w-auto">
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial px-6 py-2.5 bg-gold-metallic text-primary hover:text-white font-poppins font-bold text-[10px] uppercase tracking-widest border border-secondary transition-colors duration-300 text-center flex items-center justify-center space-x-2 rounded"
              >
                <span>Follow Page</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Posts Feed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Post 1: Live Instagram Reel Custom Video Poster Card */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="https://www.instagram.com/p/DYzlj4Vz641/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full bg-richCharcoal/20 border border-white/5 shadow-premium overflow-hidden group"
          >
            <div className="relative w-full h-[450px] overflow-hidden bg-black">
              <Image
                src="/images/reel-thumbnail.png"
                alt="Faizan Hair Studio Instagram Reel Cover"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/50 transition-colors duration-500" />
              
              {/* Play Video Icon Overlay on Hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 shadow-gold-glow">
                  <Play size={24} className="fill-current ml-1" />
                </div>
                
                <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-white font-bold">
                  Watch Reel Video
                </span>

                <div className="flex items-center space-x-6 text-white/80 pt-2">
                  <div className="flex items-center space-x-2">
                    <Heart className="fill-secondary stroke-secondary w-4 h-4" />
                    <span className="font-poppins font-bold text-xs">489</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="fill-white stroke-white w-4 h-4" />
                    <span className="font-poppins font-bold text-xs">34</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-white/5 text-left bg-primary">
              <span className="font-poppins text-[8px] uppercase tracking-widest text-secondary font-bold block mb-1">
                Featured Reel Video
              </span>
              <p className="font-inter text-xs text-white/60 font-light leading-relaxed">
                Watch our latest hair transformation and classic razor styling live on set.
              </p>
            </div>
          </motion.a>

          {/* Post 2: MD Faizan Hair Specialist Certificate Card */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            href="https://www.instagram.com/p/CsIYkGZpNza/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full bg-richCharcoal/20 border border-white/5 shadow-premium overflow-hidden group"
          >
            <div className="relative w-full h-[450px] overflow-hidden bg-[#151515]">
              <Image
                src="/images/cert-1.png"
                alt="MD Faizan Hair Specialist Certificate Post"
                fill
                quality={100}
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/60 transition-colors duration-500" />
              
              {/* Instagram Like & Comment Stat Hover Indicator */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 shadow-gold-glow">
                  <ExternalLink size={24} />
                </div>
                
                <span className="font-poppins text-[10px] uppercase tracking-[0.25em] text-white font-bold">
                  View Instagram Post
                </span>

                <div className="flex items-center space-x-6 text-white/80 pt-2">
                  <div className="flex items-center space-x-2">
                    <Heart className="fill-secondary stroke-secondary w-4 h-4" />
                    <span className="font-poppins font-bold text-xs">489</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="fill-white stroke-white w-4 h-4" />
                    <span className="font-poppins font-bold text-xs">34</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 border-t border-white/5 text-left bg-primary">
              <span className="font-poppins text-[8px] uppercase tracking-widest text-secondary font-bold block mb-1">
                Academy Certification
              </span>
              <h3 className="font-playfair text-base font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                Hair Specialist Certificate
              </h3>
              <p className="font-inter text-xs text-white/60 font-light leading-relaxed">
                Certified in Dialectic Grooming and structural hair artistry, validating advanced hair architecture and salon styling.
              </p>
            </div>
          </motion.a>

          {/* Post 3: Faizan Academy Achievement Certificate Card */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="https://www.instagram.com/p/CrGuOOQpa8m/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full bg-richCharcoal/20 border border-white/5 shadow-premium overflow-hidden group"
          >
            <div className="relative w-full h-[450px] overflow-hidden bg-[#151515]">
              <Image
                src="/images/cert-2.png"
                alt="Faizan Academy Achievement Certificate Post"
                fill
                quality={100}
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/60 transition-colors duration-500" />

              {/* Instagram Like & Comment Stat Hover Indicator */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 shadow-gold-glow">
                  <ExternalLink size={24} />
                </div>
                
                <span className="font-poppins text-[10px] uppercase tracking-[0.25em] text-white font-bold">
                  View Instagram Post
                </span>

                <div className="flex items-center space-x-6 text-white/80 pt-2">
                  <div className="flex items-center space-x-2">
                    <Heart className="fill-secondary stroke-secondary w-4 h-4 animate-pulse" />
                    <span className="font-poppins font-bold text-xs">421</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="fill-white stroke-white w-4 h-4" />
                    <span className="font-poppins font-bold text-xs">28</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 border-t border-white/5 text-left bg-primary">
              <span className="font-poppins text-[8px] uppercase tracking-widest text-secondary font-bold block mb-1">
                Professional Accolade
              </span>
              <h3 className="font-playfair text-base font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                Certificate of Achievement
              </h3>
              <p className="font-inter text-xs text-white/60 font-light leading-relaxed">
                Awarded by premier styling institutions, confirming certified styling credentials and structural salon layering.
              </p>
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
}
