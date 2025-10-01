import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lanson Johnson — Portfolio",
    template: "%s | Lanson Johnson",
  },
  description: "Full‑stack developer portfolio showcasing projects in Next.js, Node.js, and cloud.",
  keywords: [
    "Lanson Johnson",
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Lanson Johnson" }],
  openGraph: {
    title: "Lanson Johnson — Portfolio",
    description:
      "Full‑stack developer portfolio showcasing projects in Next.js, Node.js, and cloud.",
    url: "https://your-domain.example/",
    siteName: "Lanson Johnson Portfolio",
    images: [
      {
        url: "/CardImage.png",
        width: 1200,
        height: 630,
        alt: "Lanson Johnson Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanson Johnson — Portfolio",
    description:
      "Full‑stack developer portfolio showcasing projects in Next.js, Node.js, and cloud.",
    images: ["/CardImage.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden `}
      >
        <StarCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
