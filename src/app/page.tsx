import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

// Dynamically import below-the-fold components to reduce initial JS bundle size and Total Blocking Time (TBT)
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), { ssr: true });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const SocialFeed = dynamic(() => import("@/components/SocialFeed"), { ssr: true });
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const FloatingWidgets = dynamic(() => import("@/components/FloatingWidgets"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      {/* Premium Shimmer Preloader */}
      <LoadingScreen />

      {/* Sticky Glass Navigation Header */}
      <Header />

      {/* Main Content Layout */}
      <main>
        {/* Full-screen Hero section */}
        <Hero />

        {/* Brand story, rating, and counter stats section */}
        <About />

        {/* List of filterable services */}
        <Services />

        {/* Customer trust, differentiators, and features */}
        <WhyChooseUs />

        {/* Gallery showcase with modern lightbox */}
        <Gallery />

        {/* Sliding Google reviews and ratings */}
        <Testimonials />

        {/* Real Live Instagram Reel & Social stat cards */}
        <SocialFeed />

        {/* Strong conversion CTA banner */}
        <CTA />

        {/* Booking reservations, address, phone & maps */}
        <Contact />
      </main>

      {/* Custom styled footer */}
      <Footer />

      {/* Scroll widgets: floating WhatsApp & Scroll-To-Top */}
      <FloatingWidgets />
    </>
  );
}
