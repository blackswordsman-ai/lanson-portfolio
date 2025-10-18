import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
// import Profile from "@/components/main/Profile";
import LenisProvider from "@/components/sub/LenisProvider";
import IntrestedSection from "@/components/sub/IntrestedSection";
import  ContactForm  from "@/components/main/ContactForm";
import Footer from "@/components/main/Footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Comprehensive React DevTools semver error suppression
              (function() {
                // Override console.error to filter out semver errors
                const originalConsoleError = console.error;
                console.error = function(...args) {
                  const message = args.join(' ');
                  if (message.includes('not valid semver') || 
                      message.includes('Invalid argument not valid semver') ||
                      message.includes('activateBackend')) {
                    return; // Suppress the error
                  }
                  originalConsoleError.apply(console, args);
                };
                
                // Override console.warn to filter out semver warnings
                const originalConsoleWarn = console.warn;
                console.warn = function(...args) {
                  const message = args.join(' ');
                  if (message.includes('not valid semver') || 
                      message.includes('Invalid argument not valid semver')) {
                    return; // Suppress the warning
                  }
                  originalConsoleWarn.apply(console, args);
                };
                
                // Catch all errors including extension errors
                window.addEventListener('error', function(e) {
                  if (e.message && (
                    e.message.includes('not valid semver') ||
                    e.message.includes('Invalid argument not valid semver') ||
                    e.message.includes('validateAndParse') ||
                    e.message.includes('activateBackend')
                  )) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                });
                
                // Catch unhandled promise rejections
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && e.reason.message && (
                    e.reason.message.includes('not valid semver') ||
                    e.reason.message.includes('Invalid argument not valid semver')
                  )) {
                    e.preventDefault();
                    return false;
                  }
                });
                
                // Override React DevTools version checking
                if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
                  const originalRegisterRenderer = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.registerRendererInterface;
                  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.registerRendererInterface = function(...args) {
                    try {
                      return originalRegisterRenderer.apply(this, args);
                    } catch (error) {
                      if (error.message && error.message.includes('not valid semver')) {
                        return;
                      }
                      throw error;
                    }
                  };
                }
                
                // Override the specific activateBackend function that's causing the error
                const originalSetTimeout = window.setTimeout;
                window.setTimeout = function(callback, delay, ...args) {
                  return originalSetTimeout(function() {
                    try {
                      callback.apply(this, args);
                    } catch (error) {
                      if (error.message && error.message.includes('not valid semver')) {
                        return;
                      }
                      throw error;
                    }
                  }, delay);
                };
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${roboto.className} ${roboto.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden `}
      >
        <LenisProvider />
        <StarCanvas />
        <Navbar />
        {children}
        <IntrestedSection />
        <ContactForm />
        {/* <Profile /> */}
        <Footer />
      </body>
    </html>
  );
}
