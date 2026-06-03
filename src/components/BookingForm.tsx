"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Precision Haircut",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate premium booking request API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const servicesList = [
    "Precision Haircut",
    "Modern Hair Styling",
    "Beard Design & Trim",
    "Deep Conditioning Spa",
    "Premium Hair Coloring",
    "Smoothening & Keratin",
    "Therapeutic Treatments",
    "Facial Cleanup & Glow",
    "Signature Grooming Package"
  ];

  return (
    <section id="reservations" className="py-24 bg-bgIvory overflow-hidden relative">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-poppins text-xs font-semibold text-secondary-dark uppercase tracking-[0.25em] mb-3 inline-block">
            Online Reservations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
            Book Your Session
          </h2>
          <div className="w-20 h-[1px] bg-secondary mx-auto mb-6" />
          <p className="font-inter text-sm sm:text-base text-richCharcoal/70 leading-relaxed font-light">
            Select your preferred premium grooming services, date, and time. Our coordinator will contact you shortly to confirm your slot.
          </p>
        </div>

        {/* Booking Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-secondary/15 p-8 sm:p-12 shadow-premium rounded-2xl flex flex-col justify-center relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="font-poppins text-xs uppercase tracking-widest text-richCharcoal/70 mb-2 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-bgIvory/50 border border-secondary/20 px-4 h-12 text-sm font-inter text-primary focus:border-secondary focus:ring-1 focus:ring-secondary/30 focus:outline-none transition-colors duration-300 rounded-lg"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="font-poppins text-xs uppercase tracking-widest text-richCharcoal/70 mb-2 font-semibold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="8171885432"
                        className="w-full bg-bgIvory/50 border border-secondary/20 px-4 h-12 text-sm font-inter text-primary focus:border-secondary focus:ring-1 focus:ring-secondary/30 focus:outline-none transition-colors duration-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Service Select */}
                    <div className="flex flex-col sm:col-span-1">
                      <label htmlFor="service" className="font-poppins text-xs uppercase tracking-widest text-richCharcoal/70 mb-2 font-semibold">
                        Select Service
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-bgIvory/50 border border-secondary/20 px-4 text-xs font-inter text-primary focus:border-secondary focus:outline-none transition-colors duration-300 h-12 rounded-lg"
                      >
                        {servicesList.map((service, idx) => (
                          <option key={idx} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date Input */}
                    <div className="flex flex-col">
                      <label htmlFor="date" className="font-poppins text-xs uppercase tracking-widest text-richCharcoal/70 mb-2 font-semibold">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-bgIvory/50 border border-secondary/20 px-4 text-sm font-inter text-primary focus:border-secondary focus:outline-none transition-colors duration-300 h-12 rounded-lg"
                      />
                    </div>

                    {/* Time Input */}
                    <div className="flex flex-col">
                      <label htmlFor="time" className="font-poppins text-xs uppercase tracking-widest text-richCharcoal/70 mb-2 font-semibold">
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        id="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-bgIvory/50 border border-secondary/20 px-4 text-sm font-inter text-primary focus:border-secondary focus:outline-none transition-colors duration-300 h-12 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="font-poppins text-xs uppercase tracking-widest text-richCharcoal/70 mb-2 font-semibold">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your style goals..."
                      className="w-full bg-bgIvory/50 border border-secondary/20 p-4 text-sm font-inter text-primary focus:border-secondary focus:ring-1 focus:ring-secondary/30 focus:outline-none transition-colors duration-300 resize-none rounded-lg"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gold-metallic text-primary font-poppins font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-gold-glow flex items-center justify-center space-x-2 border border-secondary disabled:opacity-50 group hover:shadow-gold-glow-hover rounded-lg"
                  >
                    <Send size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>{isSubmitting ? "Requesting..." : "Send Request"}</span>
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center text-secondary-dark border border-secondary/30 mb-6"
                >
                  <CheckCircle2 size={36} className="stroke-[1.5]" />
                </motion.div>
                
                <h3 className="font-playfair text-3xl font-bold text-primary mb-3">
                  Booking Request Received!
                </h3>
                <p className="font-inter text-sm text-richCharcoal/80 max-w-md mb-8 leading-relaxed font-light">
                  Thank you, <strong className="font-semibold text-primary">{formData.name}</strong>. Our reservations coordinator will contact you shortly on <strong className="font-semibold text-primary">{formData.phone}</strong> to confirm your slot for <strong className="font-semibold text-secondary-dark">{formData.service}</strong>.
                </p>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      service: "Precision Haircut",
                      date: "",
                      time: "",
                      message: ""
                    });
                  }}
                  className="px-6 py-3 border border-secondary-dark hover:bg-secondary-dark hover:text-primary transition-all duration-300 font-poppins text-[10px] uppercase tracking-widest font-bold text-secondary-dark rounded-lg"
                >
                  Book Another Session
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
