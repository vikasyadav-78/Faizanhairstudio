import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0F0F0F",
        secondary: "#D4AF37",
        'secondary-dark': "#906B0F",
        accent: "#F5E6A9",
        bgIvory: "#FAF8F5",
        richCharcoal: "#222222",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FAF8F5 50%, #D4AF37 100%)',
        'gold-metallic': 'linear-gradient(135deg, #B38728 0%, #FBF5B7 25%, #DAA520 50%, #FBF5B7 75%, #AA771C 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0F0F0F 0%, #1E1E1E 50%, #0F0F0F 100%)',
      },
      boxShadow: {
        'gold-glow': '0 4px 20px rgba(212, 175, 55, 0.15)',
        'gold-glow-hover': '0 10px 30px rgba(212, 175, 55, 0.3)',
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        'premium-hover': '0 20px 50px -10px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;
