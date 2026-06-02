import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import SocialFeed from "@/components/SocialFeed";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FloatingWidgets from "@/components/FloatingWidgets";
import Footer from "@/components/Footer";

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
