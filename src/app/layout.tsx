import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";

// Font for body text
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

// Font for bold construction headings
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["700", "900"], 
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: {
    default: "Rammed Earth Construction Co. Ltd | Juba, South Sudan",
    template: "%s | Rammed Earth Construction"
  },
  description: "Premier sustainable construction company in Juba, South Sudan. Specialists in Rammed Earth technology, modern architectural design, and civil engineering.",
  keywords: ["Construction Juba", "South Sudan Building", "Rammed Earth Africa", "Sustainable Architecture Juba", "RECL South Sudan"],
  openGraph: {
    title: "Rammed Earth Construction Co. Ltd",
    description: "Building a sustainable future for South Sudan.",
    url: "https://rammedearth-ss.com",
    siteName: "RECL",
    locale: "en_SS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-white text-brand-black`}>
        {/* Persistent Navigation */}
        <Navbar />
        
        {/* Page Content */}
        {children}
        
        {/* Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}