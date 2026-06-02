import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-primary border-t border-b border-secondary/15 relative overflow-hidden">
      {/* Dark metallic gradient background */}
      <div className="absolute inset-0 bg-dark-gradient opacity-95" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="font-poppins text-xs font-semibold text-secondary uppercase tracking-[0.3em] mb-4 inline-block animate-pulse">
          Elevate Your Style
        </span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white mb-6 tracking-wide">
          Ready for Your Next Look?
        </h2>

        <p className="font-inter text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Experience premium cuts, hot towel shaves, refreshing spas, and expert styling by Greater Noida West&apos;s elite hair experts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <a
            href="#reservations"
            className="w-full sm:w-auto px-8 py-4 bg-gold-metallic hover:shadow-gold-glow-hover text-primary font-poppins font-bold text-xs uppercase tracking-widest border border-secondary transition-all duration-300 relative overflow-hidden group text-center"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white font-semibold">Book Appointment</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>

          <a
            href="tel:8171885432"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-secondary text-white hover:text-secondary font-poppins font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 bg-black/40 backdrop-blur-sm text-center"
          >
            <Phone size={14} />
            <span>Call 8171885432</span>
          </a>
        </div>
      </div>
    </section>
  );
}
