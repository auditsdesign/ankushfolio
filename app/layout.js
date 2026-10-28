import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = DM_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "AnkushFolio",
  description: "I believe design is not about pixels, it’s about how people feel when they use a product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
