import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F0F0F",
};

export const metadata: Metadata = {
  title: "Faizan Hair Studio | Premium Luxury Salon & Hair Styling in Greater Noida",
  description: "Experience premium grooming and hair styling at Faizan Hair Studio, Greater Noida. Luxury haircuts, hair spa, beard styling, smoothening & facial treatments by skilled professionals.",
  keywords: [
    "Salon in Greater Noida",
    "Hair Studio in Greater Noida",
    "Best Hair Salon",
    "Hair Styling Services",
    "Beard Styling",
    "Hair Spa",
    "Hair Treatment",
    "Premium Salon Greater Noida",
    "Faizan Hair Studio",
    "Barber Greater Noida",
    "Greater Noida West Salon"
  ],
  authors: [{ name: "Faizan Hair Studio" }],
  openGraph: {
    title: "Faizan Hair Studio | Premium Luxury Salon in Greater Noida",
    description: "Transform your look with expert haircuts, styling, grooming, and luxury salon services at Faizan Hair Studio.",
    url: "https://faizanhairstudio.com",
    siteName: "Faizan Hair Studio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Faizan Hair Studio",
    "image": "/images/hero-bg.jpg",
    "url": "https://faizanhairstudio.com",
    "telephone": "+918171885432",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no. UGF-18, Greater Noida W Rd, Sector 2 Market, Patwari",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201306",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.599645,
      "longitude": 77.452668
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "14"
    },
    "sameAs": [
      "https://www.instagram.com/faizanhairstudio1?utm_source=qr"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${poppins.variable} font-inter antialiased bg-bgIvory text-richCharcoal overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
