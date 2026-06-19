"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ProjectCaseStudy } from "@/data/projectsData";

export default function CaseStudyHero({ project }: { project: ProjectCaseStudy }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !imageRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Image Parallax (Moves slower than the scroll, creating depth)
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Text Parallax & Fade (Moves faster and fades out)
      gsap.to(textRef.current, {
        yPercent: 50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Entry Animation
      gsap.fromTo(
        ".hero-reveal-text",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.5 }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const coverImage = project.images.length > 0 ? project.images[0] : null;

  return (
    <section ref={containerRef} className="relative w-full h-auto min-h-[75vh] md:min-h-0 md:h-[75vh] lg:h-[80vh] flex flex-col justify-center md:justify-end p-0 md:p-16 overflow-hidden bg-[#0c0c0d]">
      
      {/* Back Button */}
      <Link href="/#work" className="absolute top-6 left-6 md:top-12 md:left-12 group flex items-center gap-3 z-50">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform duration-300">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">Back</span>
      </Link>

      {/* =======================
          MOBILE LAYOUT (Cinematic Float)
          ======================= */}
      <div className="md:hidden absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0c0c0d]">
        {/* Ambient Blur Background (Brighter & More Colorful) */}
        {coverImage && (
          <>
            <Image 
              src={coverImage} 
              alt="ambient bg" 
              fill 
              className="object-cover blur-[60px] opacity-80 scale-150 saturate-200" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0d]/20 via-[#0c0c0d]/60 to-[#0c0c0d] z-10 pointer-events-none" />
          </>
        )}
      </div>

      <div className="md:hidden relative z-20 flex flex-col items-center justify-center w-full h-full px-6 pt-24 pb-12">
        
        {/* Floating Uncropped Image Frame (TOP) */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/20 z-10 mb-8 mt-auto">
          {coverImage && (
            <Image 
              src={coverImage} 
              alt="Cover" 
              width={1920} 
              height={1080} 
              className="w-full h-auto object-cover" 
            />
          )}
        </div>

        {/* Floating Text (BOTTOM) */}
        <div className="relative z-30 flex flex-col items-center text-center mb-auto drop-shadow-2xl">
          <span className="hero-reveal-text inline-block font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-white/20 rounded-full bg-black/40 backdrop-blur-xl text-white/90 shadow-2xl mb-4">
            {project.category}
          </span>
          <h1 className="hero-reveal-text text-[3.5rem] sm:text-[4.5rem] font-inter font-bold tracking-tighter leading-[1.1] text-white drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] mix-blend-normal pb-2">
            {project.title}
          </h1>
        </div>
      </div>

      {/* =======================
          DESKTOP LAYOUT (Full Cover)
          ======================= */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div ref={imageRef} className="relative w-full h-[120%] -top-[10%] flex items-center">
          {coverImage ? (
            <Image 
              src={coverImage}
              alt={project.title}
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover object-center opacity-70 mix-blend-luminosity grayscale-[30%]"
            />
          ) : (
            <div className={`w-full h-full ${project.bgGradient} opacity-50`} />
          )}
        </div>
      </div>

      {/* Desktop Gradients */}
      <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-t from-[#0c0c0d] via-[#0c0c0d]/80 to-transparent pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#0c0c0d] to-transparent backdrop-blur-[2px] z-10 pointer-events-none" style={{ maskImage: "linear-gradient(to top, black 20%, transparent)", WebkitMaskImage: "linear-gradient(to top, black 20%, transparent)" }} />
      
      {/* Desktop Text */}
      <div ref={textRef} className="hidden md:flex relative z-20 w-full max-w-7xl mx-auto flex-col items-start px-0 py-0">
        <div className="overflow-hidden mb-6">
          <span className="hero-reveal-text inline-block font-mono text-xs uppercase tracking-widest px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-md text-white/90 shadow-xl">
            {project.category}
          </span>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-reveal-text text-[6rem] md:text-[8rem] lg:text-[10rem] font-inter font-bold tracking-tighter leading-[1.1] md:leading-none text-white">
            {project.title}
          </h1>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-[-2rem] right-0 md:right-8 flex flex-col items-center gap-4 opacity-50 hidden md:flex">
          <span className="font-mono text-[10px] uppercase tracking-widest rotate-90 origin-right translate-x-4">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
