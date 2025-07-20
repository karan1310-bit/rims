import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Panesar Motorsports",
  description: "Explore premium wheels, rims, racing seats, and performance tires at Panesar Motorsports. Designed for car enthusiasts who demand style, speed, and precision. Shop top-quality aftermarket upgrades for your build.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
