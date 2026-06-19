"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function StackedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] py-24 px-4 md:px-16 text-white pb-32 md:pb-64">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 relative z-10">
          <h2 className="font-inter text-5xl md:text-[8rem] font-bold uppercase tracking-tighter leading-[0.85]">
            Selected<br />Work
          </h2>
          <p className="font-mono text-[#a0a0a0] max-w-sm mt-8 md:mt-0 text-sm md:text-base pr-4">
            A curated collection of digital experiences, products, and platforms engineered for maximum impact.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative w-full flex flex-col mt-12">
          {projectsData.filter(p => !['fitness-hub', 'nike-market'].includes(p.slug)).map((project, index) => {
            // Calculate a slight top offset for each card so they stack visibly like a deck of cards
            // On mobile we give them less overlap
            
            return (
              <div 
                key={project.id}
                className="sticky w-full mb-16 md:mb-40 overflow-hidden rounded-[2rem] md:rounded-[3rem] top-[calc(5vh+calc(var(--stack-offset)*20px))] md:top-[calc(8vh+calc(var(--stack-offset)*40px))]"
                style={{ "--stack-offset": index } as React.CSSProperties}
              >
                {/* The Card Container */}
                <div className="relative w-full h-auto min-h-[80vh] md:h-[80vh] flex flex-col md:flex-row rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/80 transform origin-top transition-transform group/card bg-[#050505]">
                  
                  {/* =========================================
                      DESKTOP LAYOUT (Hidden on Mobile)
                      ========================================= */}
                  <div className="hidden md:flex absolute inset-0 w-full h-full z-0 overflow-hidden">
                    {/* Desktop Image */}
                    {project.images.length > 0 ? (
                      <Image 
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-[2s] group-hover/card:scale-105 opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/10 font-inter font-bold text-4xl uppercase tracking-tighter">
                        Coming Soon
                      </div>
                    )}
                    {/* Desktop Glass Gradient */}
                    <div 
                      className="absolute top-0 left-0 w-[65%] h-full z-10 bg-gradient-to-r from-[#0c0c0d]/90 via-[#0c0c0d]/60 to-transparent backdrop-blur-md pointer-events-none"
                      style={{ WebkitMaskImage: "linear-gradient(to right, black 60%, transparent 100%)", maskImage: "linear-gradient(to right, black 60%, transparent 100%)" }}
                    />
                  </div>

                  <div className="hidden md:flex w-[55%] h-full p-16 flex-col justify-center gap-16 z-20 relative pointer-events-none">
                    {/* Top Meta & Text (Desktop) */}
                    <div className="pointer-events-auto flex flex-col gap-8">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 border border-white/20 rounded-full">{project.category}</span>
                        <span className="font-mono text-xs text-[#a0a0a0]">{project.metadata.year}</span>
                      </div>
                      
                      <h3 className="font-inter text-[5rem] font-bold uppercase tracking-tighter leading-[1.1]">
                        {project.title}
                      </h3>
                      
                      <p className="font-inter text-xl text-gray-300 max-w-md leading-relaxed">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Actions (Desktop) */}
                    <div className="flex flex-col gap-10 pointer-events-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.metadata.techStack.map(tech => (
                          <span key={tech} className="text-xs font-mono uppercase tracking-wider text-[#e0e0e0] bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link href={`/work/${project.slug}`} className="group inline-flex items-center gap-4 w-fit mt-2">
                        <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 bg-black/20 backdrop-blur-sm">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="font-mono uppercase tracking-widest text-sm font-bold group-hover:pl-2 transition-all duration-500 drop-shadow-md">View Case Study</span>
                      </Link>
                    </div>
                  </div>

                  {/* =========================================
                      MOBILE WOW LAYOUT (Hidden on Desktop)
                      ========================================= */}
                  <div className="md:hidden flex flex-col w-full h-full relative z-0">
                    
                    {/* Ambient Blurred Background for extreme premium feel */}
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0c0c0d]">
                      {project.images.length > 0 && (
                        <>
                          <Image 
                            src={project.images[0]}
                            alt="ambient background"
                            fill
                            className="object-cover blur-[40px] opacity-50 scale-125 saturate-150"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0d]/20 via-[#0c0c0d]/60 to-[#0c0c0d] z-10" />
                        </>
                      )}
                    </div>

                    {/* Uncropped Crisp Image in a gorgeous frame */}
                    <div className="relative z-10 w-full p-4 pt-6 sm:p-6 sm:pt-8 flex justify-center">
                      <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-black/20 backdrop-blur-sm">
                        {project.images.length > 0 ? (
                          <Image 
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-contain"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#111] text-white/20 font-inter font-bold text-2xl uppercase">
                            Soon
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section perfectly floating over the ambient background */}
                    <div className="relative z-20 w-full px-6 pb-10 flex-1 flex flex-col justify-end gap-6 mt-auto">
                      
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-white/20 rounded-full bg-black/20 backdrop-blur-md">{project.category}</span>
                        <span className="font-mono text-[10px] text-[#a0a0a0]">{project.metadata.year}</span>
                      </div>
                      
                      <h3 className="font-inter text-5xl font-bold uppercase tracking-tighter leading-[1.1] text-white drop-shadow-2xl">
                        {project.title}
                      </h3>
                      
                      <p className="font-inter text-sm text-gray-300 leading-relaxed max-w-sm">
                        {project.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.metadata.techStack.map(tech => (
                          <span key={tech} className="text-[10px] font-mono uppercase tracking-wider text-[#e0e0e0] bg-black/30 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link href={`/work/${project.slug}`} className="group inline-flex items-center gap-4 w-fit mt-4">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md active:bg-white active:text-black transition-all">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform">
                            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="font-mono uppercase tracking-widest text-xs font-bold drop-shadow-md">View Case Study</span>
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
