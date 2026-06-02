"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section intersection detection for active state styling
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md border-b border-secondary/20 py-4 shadow-gold-glow"
            : "bg-transparent border-b border-white/10 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with round image icon */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex items-center space-x-3 select-none group"
          >
            <div className="relative w-10 h-10 rounded-full border border-secondary/30 overflow-hidden bg-primary/80 flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Faizan Hair Studio Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-playfair text-xl md:text-2xl font-bold tracking-widest bg-gold-metallic bg-clip-text text-transparent leading-none">
                FAIZAN
              </span>
              <span className="font-poppins text-[8px] tracking-[0.35em] text-accent uppercase mt-0.5">
                Hair Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-poppins text-xs uppercase tracking-widest transition-colors duration-300 relative py-1 ${
                  activeSection === link.href
                    ? "text-secondary font-semibold"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:8171885432"
              className="flex items-center space-x-2 text-xs font-poppins uppercase tracking-widest text-white hover:text-secondary transition-colors duration-300 mr-2"
            >
              <Phone size={14} className="text-secondary animate-pulse" />
              <span>8171885432</span>
            </a>
            
            {/* Instagram Profile Icon in Navbar */}
            <a
              href="https://www.instagram.com/faizanhairstudio1?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 hover:border-secondary rounded-full flex items-center justify-center text-white/70 hover:text-secondary bg-white/5 transition-all duration-300 mr-1"
              aria-label="Follow Faizan Hair Studio on Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="px-6 py-2.5 bg-gold-metallic hover:shadow-gold-glow-hover text-primary font-poppins font-semibold text-xs uppercase tracking-widest border border-secondary transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Book Now</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-secondary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.05, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-40 bg-primary/95 border-l border-secondary/20 p-8 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <a
                    href="#"
                    onClick={(e) => handleLinkClick(e, "#")}
                    className="flex items-center space-x-3 select-none"
                  >
                    <div className="relative w-10 h-10 rounded-full border border-secondary/30 overflow-hidden bg-primary/80 flex-shrink-0">
                      <Image
                        src="/images/logo.jpg"
                        alt="Faizan Hair Studio Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-playfair text-xl font-bold tracking-widest bg-gold-metallic bg-clip-text text-transparent leading-none">
                        FAIZAN
                      </span>
                      <span className="font-poppins text-[8px] tracking-[0.35em] text-accent uppercase mt-0.5">
                        Hair Studio
                      </span>
                    </div>
                  </a>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-secondary transition-colors focus:outline-none"
                    aria-label="Close Menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`font-poppins text-sm uppercase tracking-widest transition-colors py-1 border-b border-white/5 ${
                        activeSection === link.href
                          ? "text-secondary font-semibold border-secondary/20"
                          : "text-white/80 hover:text-secondary"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex space-x-2 w-full">
                  <a
                    href="tel:8171885432"
                    className="flex items-center justify-center space-x-2 w-[80%] py-3 border border-white/10 text-white font-poppins text-xs uppercase tracking-widest hover:border-secondary transition-colors"
                  >
                    <Phone size={14} className="text-secondary" />
                    <span>Call 8171885432</span>
                  </a>
                  
                  {/* Mobile Instagram shortcut button */}
                  <a
                    href="https://www.instagram.com/faizanhairstudio1?utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[20%] border border-white/10 hover:border-secondary flex items-center justify-center text-white/70 hover:text-secondary bg-white/5 transition-all duration-300"
                    aria-label="Follow on Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  </a>
                </div>
                
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="w-full py-3 bg-gold-metallic text-primary font-poppins font-semibold text-xs uppercase tracking-widest text-center shadow-gold-glow"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
