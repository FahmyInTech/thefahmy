"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import gsap from "gsap";

export default function ArchiveTable() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    // Use GSAP quickTo for buttery smooth 60fps cursor following
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.6, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      // Center the floating box on the mouse
      // For a 400x300 box on desktop, offset by 200x150
      xTo(e.clientX - 200);
      yTo(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full">
      
      {/* Floating Image Cursor Tracker */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:flex items-center justify-center"
      >
        {/* Inner container handles hover animations independently from GSAP tracking */}
        <div 
          className="relative w-[400px] h-[300px] overflow-hidden rounded-2xl shadow-2xl transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: hoveredIndex !== null ? 1 : 0,
            transform: hoveredIndex !== null ? "scale(1) rotate(0deg)" : "scale(0.8) rotate(-5deg)",
          }}
        >
          {projectsData.map((project, index) => (
            project.images.length > 0 && (
              <Image
                key={project.id}
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-contain transition-opacity duration-500 absolute inset-0"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  zIndex: hoveredIndex === index ? 10 : 0
                }}
              />
            )
          ))}
        </div>
      </div>

      {/* The Table */}
      <div className="flex flex-col border-t border-white/10 w-full">
        {/* Table Header (Desktop Only) */}
        <div className="hidden md:grid grid-cols-12 gap-4 py-6 px-8 text-xs font-mono text-white/40 uppercase tracking-widest border-b border-white/10">
          <div className="col-span-5">Project</div>
          <div className="col-span-3">Client</div>
          <div className="col-span-3">Role</div>
          <div className="col-span-1 text-right">Year</div>
        </div>

        {/* Table Rows */}
        {projectsData.map((project, index) => (
          <Link 
            href={`/work/${project.slug}`} 
            key={project.id}
            className="group block md:grid md:grid-cols-12 md:gap-4 py-6 md:py-12 px-4 md:px-8 border-b border-white/5 md:hover:bg-white/[0.03] transition-colors items-center cursor-pointer relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Mobile Visual Row */}
            <div className="flex md:hidden items-center justify-between w-full relative z-10">
              <div className="flex items-center gap-4">
                {project.images.length > 0 && (
                  <div className="w-24 h-14 shrink-0 rounded-lg overflow-hidden relative shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-white/10 bg-[#0c0c0d]">
                    <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl leading-none font-inter font-bold uppercase tracking-tighter text-white group-active:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    {project.metadata.role}
                  </div>
                </div>
              </div>
              
              <div className="font-mono text-[10px] text-white/30 shrink-0 ml-4">
                {project.metadata.year}
              </div>
            </div>

            {/* Desktop Row */}
            <div className="hidden md:block col-span-5 relative z-10">
              <h3 className="text-6xl lg:text-[5rem] font-inter font-bold uppercase tracking-tighter text-white/50 group-hover:text-white transition-all duration-500 group-hover:translate-x-4">
                {project.title}
              </h3>
            </div>
            
            <div className="hidden md:block col-span-3 relative z-10">
              <span className="font-mono text-sm text-white/40 group-hover:text-white/80 transition-colors duration-500">
                {project.metadata.client}
              </span>
            </div>

            <div className="hidden md:flex col-span-3 flex-wrap gap-2 relative z-10">
              <span className="font-mono text-sm text-white/40 group-hover:text-blue-400 transition-colors duration-500">
                {project.metadata.role}
              </span>
            </div>

            <div className="hidden md:block col-span-1 text-right relative z-10">
              <span className="font-mono text-sm text-white/30 group-hover:text-white transition-colors duration-500">
                {project.metadata.year}
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
