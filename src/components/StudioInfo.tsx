"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import Image from "next/image";


export default function StudioInfo() {
  const instagramProfileUrl = "https://www.instagram.com/faizanhairstudio1?utm_source=qr";

  return (
    <section id="studio-details" className="py-24 bg-primary text-white overflow-hidden relative border-t border-secondary/15">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-semibold text-secondary uppercase tracking-[0.25em] mb-3 inline-block">
            Find The Studio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white mb-6">
            Location & Details
          </h2>
          <div className="w-20 h-[1px] bg-secondary mx-auto mb-6" />
          <p className="font-inter text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Visit our state-of-the-art luxury salon lounge. We are easily accessible with dedicated parking and a warm, inviting ambiance.
          </p>
        </div>

        {/* Side-by-Side balanced layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Glassmorphism Studio Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#151515]/60 backdrop-blur-md border border-secondary/20 p-8 sm:p-10 shadow-premium rounded-2xl flex flex-col justify-between text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Salon Name Header Block with Avatar */}
              <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-white/10">
                <div className="relative w-12 h-12 rounded-full border border-secondary/30 overflow-hidden bg-black flex-shrink-0">
                  <Image
                    src="/images/logo.webp"
                    alt="Faizan Hair Studio Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-playfair text-2xl font-bold bg-gold-metallic bg-clip-text text-transparent leading-none">
                    FAIZAN
                  </h3>
                  <span className="font-poppins text-[9px] tracking-[0.3em] text-accent uppercase mt-1">
                    Hair Studio
                  </span>
                </div>
              </div>

              {/* Detailed Lists */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/20 mt-1 flex-shrink-0 rounded-lg">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="font-poppins text-[10px] uppercase tracking-widest text-accent font-semibold">Call & Contact</h4>
                    <a href="tel:8171885432" className="font-poppins text-xl font-bold tracking-wider hover:text-secondary transition-colors block mt-1">
                      8171885432
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/20 mt-1 flex-shrink-0 rounded-lg">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-poppins text-[10px] uppercase tracking-widest text-accent font-semibold">Location Address</h4>
                    <p className="font-inter text-xs text-white/80 leading-relaxed mt-1.5 font-light">
                      Shop no. UGF-18, Greater Noida W Rd,<br />
                      Sector 2 Market, Patwari,<br />
                      Greater Noida, Uttar Pradesh 201306
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/20 mt-1 flex-shrink-0 rounded-lg">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="font-poppins text-[10px] uppercase tracking-widest text-accent font-semibold">Operating Hours</h4>
                    <p className="font-inter text-xs text-white/80 leading-relaxed mt-1.5 font-light">
                      Monday &ndash; Sunday<br />
                      09:00 AM &ndash; 09:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Call Pills */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col space-y-4">
              {/* Direct Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:8171885432"
                  className="py-3 px-4 bg-gold-metallic hover:shadow-gold-glow-hover text-primary font-poppins font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 rounded-lg transition-all duration-300"
                >
                  <Phone size={14} className="stroke-[2.5]" />
                  <span>Call Now</span>
                </a>
                
                <a
                  href="https://www.google.com/maps/place/Shop+no.UGF-18,+Faizan+hair+studio,+Greater+Noida+W+Rd,+Sector+2,+market,+Patwari,+Greater+Noida,+Uttar+Pradesh+201306/data=!4m2!3m1!1s0x390cef77b30440cd:0x83c6bfe9a46290cd!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjIxLjEYACCIJyqVASw5NDI2NzcyNyw5NDI5MjE5NSw5NDI5OTUzMiwxMDA3OTY0OTgsMTAwNzk3NzYxLDEwMDc5NjUzNSw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSwxMDA4MDg6NTksOTQyNzUxNjgsOTQyNzk2MTksMTAwNzkyNTY4QgJJTg%3D%3D&skid=8b55cd67-f7d6-4424-acf8-469cd3484eed&g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 border border-white/20 hover:border-secondary text-white hover:text-secondary font-poppins font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 rounded-lg transition-all duration-300"
                >
                  <Navigation size={14} className="transform rotate-45" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Social Channels row */}
              <div className="flex justify-center space-x-4 pt-2">
                {[
                  {
                    name: "Instagram",
                    href: instagramProfileUrl,
                    svg: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                      </svg>
                    )
                  },
                  {
                    name: "Facebook",
                    href: "https://facebook.com",
                    svg: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  {
                    name: "Youtube",
                    href: "https://youtube.com",
                    svg: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 hover:border-secondary rounded-full flex items-center justify-center text-white/70 hover:text-secondary bg-white/5 transition-all duration-300 shadow-sm"
                    aria-label={social.name}
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Map embedded inside a balanced glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#151515]/60 backdrop-blur-md border border-secondary/20 p-2 shadow-premium rounded-2xl overflow-hidden h-[400px] lg:h-auto lg:flex-1"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.226388484196!2d77.4504791763175!3d28.59964967568165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef77b30440cd%3A0x83c6bfe9a46290cd!2sShop+no.UGF-18%2C+Faizan+hair+studio!5e0!3m2!1sen!2sin!4v1716942000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Faizan Hair Studio Location Map"
              className="filter grayscale contrast-125 rounded-xl h-full w-full"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
