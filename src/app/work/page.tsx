import ArchiveTable from "@/components/ArchiveTable";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive - Fahmy Omara",
  description: "A comprehensive collection of selected works, experiments, and professional projects.",
};

export default function WorkArchivePage() {
  return (
    <main className="min-h-screen bg-[#0c0c0d] text-white pt-32 md:pt-48 pb-24 overflow-x-hidden relative">
      
      {/* Creative Background: The Moodboard Glass */}
      <div className="absolute top-0 left-0 w-full h-[70vh] overflow-hidden pointer-events-none z-0">
        {/* Ambient base */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-white/[0.02] rounded-full blur-[100px] z-0" />
        
        {/* Floating Project Glimpses */}
        <div className="absolute w-full h-full opacity-[0.1] md:opacity-[0.15] mix-blend-luminosity grayscale">
           {projectsData[0]?.images[0] && <Image src={projectsData[0].images[0]} alt="glimpse" width={400} height={250} className="absolute top-[-5%] left-[-20%] md:left-[-5%] rounded-3xl blur-[6px] -rotate-12 object-cover" />}
           {projectsData[1]?.images[0] && <Image src={projectsData[1].images[0]} alt="glimpse" width={600} height={400} className="absolute top-[10%] right-[-30%] md:right-[-10%] rounded-3xl blur-[10px] rotate-12 object-cover" />}
           {projectsData[2]?.images[0] && <Image src={projectsData[2].images[0]} alt="glimpse" width={350} height={200} className="absolute bottom-0 left-[10%] md:left-1/4 rounded-3xl blur-[4px] -rotate-6 object-cover" />}
        </div>
        
        {/* Glass Overlay to blend it nicely into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0d]/40 via-[#0c0c0d]/80 to-[#0c0c0d] z-10" />
      </div>

      {/* Header (Classic Huge Design) */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 md:px-8 mb-16 md:mb-32">
        <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-inter font-bold uppercase tracking-tighter leading-[0.8] text-white drop-shadow-2xl">
          INDEX
        </h1>
        <p className="font-mono text-xs md:text-sm text-white/50 uppercase tracking-widest mt-8 max-w-lg">
          A comprehensive collection of selected works, experiments, and professional projects spanning my career.
        </p>
      </div>

      {/* The Interactive Table */}
      <div className="max-w-[90rem] mx-auto mb-32">
        <ArchiveTable />
      </div>

      {/* Back to Home */}
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 flex justify-center">
        <Link href="/" className="group flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
          <span className="font-mono text-sm uppercase tracking-widest font-bold">Back to Home</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>

    </main>
  );
}
