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
  title: "Fahmy >_",
  description: "Fahmy Omara — Creative Frontend Developer & Interactive Experiences.",
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
