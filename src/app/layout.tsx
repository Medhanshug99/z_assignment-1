import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google"; // Added this import for Inter font

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanguard Art Gallery",
  description: "Curators of modern, abstract, and digital aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <CartProvider>
          <Navbar />
          <div className="min-h-screen pt-16 flex flex-col">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
