import type { Metadata } from "next";
import { Sora, Mallanna } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const mallanna = Mallanna({
  variable: "--font-mallanna",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hireginie — Tech-Enabled Recruitment & Staffing Partner",
  description:
    "Helping startups and enterprises hire top talent across technology, non-tech, leadership, and volume hiring domains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${mallanna.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <CtaBanner />
        <Footer />
      </body>
    </html>
  );
}
