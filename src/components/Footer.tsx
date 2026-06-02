"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "#" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Studio", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Photo Gallery", href: "#gallery" },
    { name: "Client Reviews", href: "#reviews" },
    { name: "Contact & Booking", href: "#contact" }
  ];

  const servicesList = [
    "Precision Haircut",
    "Modern Hair Styling",
    "Beard Design & Trim",
    "Deep Conditioning Spa",
    "Premium Hair Coloring",
    "Keratin & Smoothening"
  ];

  return (
    <footer className="bg-primary text-white border-t border-secondary/20 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Gold Glows */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/15">
          
          {/* Column 1: Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, "#")}
              className="flex items-center space-x-3 select-none mb-6 group"
            >
              <div className="relative w-12 h-12 rounded-full border border-secondary/30 overflow-hidden bg-primary/80 flex-shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="Faizan Hair Studio Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-playfair text-2xl md:text-3xl font-bold tracking-widest bg-gold-metallic bg-clip-text text-transparent leading-none">
                  FAIZAN
                </span>
                <span className="font-poppins text-[9px] tracking-[0.3em] text-accent uppercase mt-1">
                  Hair Studio
                </span>
              </div>
            </a>
            
            <p className="font-inter text-xs text-white/60 leading-relaxed mb-6 font-light max-w-sm">
              Greater Noida West&apos;s premier hair studio and styling lounge. We fuse modern aesthetics with classic grooming traditions to provide customized, luxury hair, beard, spa, and beauty services.
            </p>

            {/* Social media icons */}
            <div className="flex space-x-3">
              {[
                { 
                  name: "Instagram", 
                  href: "https://www.instagram.com/faizanhairstudio1?utm_source=qr", 
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
                  className="w-10 h-10 border border-white/10 hover:border-secondary rounded-full flex items-center justify-center text-white/70 hover:text-secondary bg-white/5 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-playfair text-lg font-bold text-secondary mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-poppins text-xs uppercase tracking-wider text-white/70 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Highlights (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-playfair text-lg font-bold text-secondary mb-6 tracking-wide">
              Studio Services
            </h4>
            <ul className="space-y-3.5">
              {servicesList.map((service, idx) => (
                <li key={idx} className="font-inter text-xs text-white/70 hover:text-accent transition-colors duration-300 font-light cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Contact Details (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-playfair text-lg font-bold text-secondary mb-6 tracking-wide">
              Visit Studio
            </h4>
            <ul className="space-y-5">
              {/* Phone */}
              <li className="flex items-start space-x-3">
                <Phone size={14} className="text-secondary mt-1 flex-shrink-0" />
                <a href="tel:8171885432" className="font-poppins text-xs font-bold uppercase tracking-wider text-white/80 hover:text-secondary transition-colors">
                  8171885432
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start space-x-3">
                <MapPin size={14} className="text-secondary mt-1 flex-shrink-0" />
                <address className="font-inter text-xs text-white/75 leading-relaxed not-italic font-light">
                  Shop no. UGF-18,<br />
                  Greater Noida W Rd,<br />
                  Sector 2 Market, Patwari,<br />
                  Greater Noida, UP 201306
                </address>
              </li>

              {/* Clock */}
              <li className="flex items-start space-x-3">
                <Clock size={14} className="text-secondary mt-1 flex-shrink-0" />
                <div className="font-inter text-xs text-white/75 font-light leading-relaxed">
                  Open Everyday<br />
                  09:00 AM &ndash; 09:00 PM
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Area */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-inter text-[10px] text-white/40 tracking-wider">
          <p className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Faizan Hair Studio. All Rights Reserved.
          </p>
          <p className="flex items-center">
            Designed for &nbsp;
            <span className="text-secondary font-semibold font-playfair tracking-wide text-xs">
              Luxury Grooming Excellence
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
