"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function CaseStudyGallery({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !scrollRef.current) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const sections = gsap.utils.toArray(".horizontal-item");
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (scrollRef.current?.offsetWidth || 0),
        }
      });
    });

    return () => mm.revert();
  }, [images]);

  return (
    <div ref={containerRef} className="relative w-full h-auto py-16 lg:py-0 lg:h-screen flex flex-col justify-center bg-[#050505] overflow-hidden">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.04] via-[#050505] to-[#050505] pointer-events-none" />

      <div className="relative z-10 px-6 lg:px-16 mb-8 w-full">
        <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest">Interface Gallery</h2>
      </div>
      
      <div 
        ref={scrollRef} 
        className="relative z-10 flex w-full lg:w-max h-auto py-8 lg:py-0 lg:h-[80vh] pl-6 lg:pl-16 gap-6 lg:gap-16 pr-6 lg:pr-16 overflow-x-auto lg:overflow-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden items-center"
      >
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="horizontal-item relative w-[90vw] lg:w-[75vw] h-auto lg:h-full shrink-0 overflow-hidden rounded-xl lg:rounded-3xl border border-white/[0.05] snap-center shadow-[0_0_100px_rgba(255,255,255,0.03)] flex items-center bg-[#050505] group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
            <Image 
              src={src}
              alt={`Screenshot ${idx + 1}`}
              width={1920}
              height={1080}
              className="w-full h-auto lg:h-full object-cover relative z-10 scale-[1.01] group-hover:scale-100 transition-transform duration-1000 ease-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
