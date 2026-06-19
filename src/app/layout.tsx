import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroller from "@/components/SmoothScroller";
import Preloader from "@/components/Preloader";
import NoiseOverlay from "@/components/NoiseOverlay";
import OverlayMenu from "@/components/OverlayMenu";
import RevealFooter from "@/components/RevealFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Not Just a Portfolio. An Interactive Manifesto.",
  description: "Code is poetry meant to be felt. Step into my digital sandbox where high-performance physics, GSAP animations, and strict architectural grids merge into one seamless experience.",
  metadataBase: new URL("https://thefahmy.vercel.app"),
  openGraph: {
    title: "Not Just a Portfolio. An Interactive Manifesto.",
    description: "Code is poetry meant to be felt. Step into my digital sandbox where high-performance physics, GSAP animations, and strict architectural grids merge into one seamless experience.",
    url: "https://thefahmy.vercel.app",
    siteName: "Fahmy Omara Portfolio",
    images: [
      {
        url: "/images/portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Fahmy Omara - Frontend Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Not Just a Portfolio. An Interactive Manifesto.",
    description: "Code is poetry meant to be felt. Step into my digital sandbox where high-performance physics, GSAP animations, and strict architectural grids merge.",
    images: ["/images/portrait.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden selection:bg-white selection:text-black" suppressHydrationWarning>
        <Preloader />
        <NoiseOverlay />
        <CustomCursor />
        <OverlayMenu />
        <SmoothScroller>
          {children}
          <RevealFooter />
        </SmoothScroller>
      </body>
    </html>
  );
}
