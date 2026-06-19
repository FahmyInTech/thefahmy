"use client";
import { useState } from "react";
import MagneticButton from "./MagneticButton";
import { projectsData } from "@/data/projectsData";
import Image from "next/image";

export default function AccordionProjects() {
  const [hovered, setHovered] = useState<number>(0);

  return (
    <div className="w-full h-[85vh] flex flex-col md:flex-row overflow-hidden border-y border-white/10 mt-16 rounded-3xl mx-4 md:mx-auto max-w-[96vw]">
      {projectsData.map((proj, i) => {
        const isActive = hovered === i;

        return (
          <div
            key={proj.id}
            onMouseEnter={() => setHovered(i)}
            className={`relative flex flex-col justify-end transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group border-b md:border-b-0 md:border-r border-white/5 last:border-0 ${
              isActive 
                ? "h-[45vh] w-full md:h-full md:w-[60vw]" 
                : "h-[10vh] w-full md:h-full md:w-[10vw]"
            }`}
          >
            {/* Background Layer: Photographic Image (Cover) */}
            <div className={`absolute inset-0 z-0 overflow-hidden transition-all duration-[1200ms] ${isActive ? "opacity-100" : "opacity-0"}`}>
              {proj.images && proj.images.length > 0 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[60vw] h-full">
                  <Image
                    src={proj.images[0]}
                    alt={proj.title}
                    fill
                    className={`object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? "scale-105" : "scale-100"
                      }`}
                  />
                </div>
              )}
            </div>

            {/* Background Layer: Book Spine (Code Design) */}
            <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${proj.bgGradient} ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              {/* Noise Texture for Book Material */}
              <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

              {/* Spine Header Details */}
              <div className="absolute inset-0 flex flex-row md:flex-col items-center justify-start px-6 md:px-0 md:py-8">
                <span className="font-mono text-xl md:text-2xl font-bold text-white">{proj.id}</span>
                <div className="h-[1px] w-6 md:w-[1px] md:h-12 bg-white/30 ml-4 md:ml-0 md:mt-6" />
                <div className="ml-4 md:ml-0 md:mt-24 md:rotate-90 origin-center whitespace-nowrap">
                  <span className="font-mono text-[10px] md:text-[10px] uppercase tracking-widest text-white/60">{proj.category}</span>
                </div>
                {/* Mobile-only inactive title on the spine */}
                <span className="md:hidden ml-auto font-inter font-bold text-sm uppercase tracking-tighter text-white">
                  {proj.title}
                </span>
              </div>
            </div>

            {/* Gradient Overlay for Text Legibility (Only on Cover) */}
            <div className={`absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-[#0c0c0d]/60 to-transparent transition-opacity duration-700 z-10 ${isActive ? "opacity-90" : "opacity-0 pointer-events-none"}`} />

            <div className="relative z-20 w-full h-full p-4 md:p-8 flex flex-col justify-end overflow-hidden">
              <div className="flex flex-col h-full justify-between">

                {/* Top Section: ID & Action */}
                <div className={`hidden md:flex justify-between items-start transition-all duration-700 delay-100 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
                  <span className="font-mono text-2xl text-white/50">{proj.id}</span>
                  {isActive && (
                    <MagneticButton href={`/work/${proj.slug}`} className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 whitespace-nowrap">
                      View Case Study
                    </MagneticButton>
                  )}
                </div>

                {/* Bottom Section: Vertical Title or Expanded Info */}
                <div className="relative w-full">
                  {/* Vertical layout for inactive (Book Spine Title) - Desktop Only */}
                  <div className={`hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-700 h-[50%] flex-col justify-end pb-12 w-full ${isActive ? "opacity-0 translate-y-12 scale-90 pointer-events-none" : "opacity-100 translate-y-0 scale-100"}`}>
                    <div className="relative w-full h-full flex items-end justify-center">
                      <h3 className="text-4xl md:text-5xl font-inter font-bold uppercase tracking-tighter text-white -rotate-90 origin-bottom whitespace-nowrap mb-32">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  {/* Horizontal expanded layout */}
                  <div className={`flex flex-col transition-all duration-700 pl-0 md:pl-2 lg:pl-8 ${isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90 pointer-events-none"}`}>
                    <span className="text-blue-400 font-mono text-[10px] md:text-sm uppercase tracking-widest mb-2 md:mb-4">
                      {proj.category}
                    </span>
                    <h3 className="text-3xl sm:text-5xl md:text-[6rem] lg:text-[8rem] font-inter font-bold uppercase tracking-tighter text-white leading-none mb-2 md:mb-6 shrink-0 md:whitespace-nowrap truncate md:max-w-[50vw]">
                      {proj.title}
                    </h3>
                    <p className="text-white/70 max-w-lg font-inter text-sm md:text-lg leading-relaxed mb-4 hidden md:block opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards]">
                      {proj.shortDesc}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
