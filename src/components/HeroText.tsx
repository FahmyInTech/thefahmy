"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import AsciiPortrait from "./AsciiPortrait";
// import FloatingBadge from "./FloatingBadge";

export default function HeroText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-line-inner", {
        y: "110%",
        rotateZ: 4,
        duration: 1.4,
        stagger: 0.1,
      })
        .from(roleRef.current, {
          opacity: 0,
          x: -20,
          duration: 0.8
        }, "-=0.8")
        .from(".scroll-hint", {
          opacity: 0,
          duration: 1
        }, "-=0.4");

      // Mobile Scroll-Triggered ASCII Reveal using MatchMedia
      const mm = gsap.matchMedia();
      
      mm.add("(max-width: 1023px)", () => {
        gsap.to(".cinematic-photo", {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=300",
            scrub: true,
          }
        });
        
        gsap.to(".ascii-matrix", {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=300",
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative w-full min-h-[100dvh] flex flex-col justify-start lg:justify-center px-6 md:px-16 pt-20 lg:pt-24 pb-12 overflow-hidden">

      {/* Immersive Portrait with Cinematic Vignette Fade -> Ascii Reveal */}
      <div 
        className="group absolute bottom-0 lg:top-1/2 left-0 right-0 lg:left-auto lg:right-0 lg:-translate-y-1/2 h-[45vh] md:h-[55vh] lg:h-[90vh] lg:w-[50vw] z-0 opacity-60 lg:opacity-100 pointer-events-auto overflow-hidden cursor-crosshair"
        style={{ 
          maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 100%)", 
          WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 100%)" 
        }}
      >
        
        {/* State 1: The Cinematic Photo (Fades out on hover or scroll) */}
        <div className="cinematic-photo absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out group-hover:opacity-0">
          <Image 
            src="/images/portrait.jpeg" 
            alt="Fahmy Omara" 
            fill 
            className="object-cover object-[center_25%]"
          />
        </div>

        {/* State 2: The ASCII Matrix (Fades in on hover or scroll) */}
        <div className="ascii-matrix absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
          <AsciiPortrait />
        </div>
      </div>

      {/* Option 3: Floating Badge (Hidden) */}
      {/* <div className="absolute top-32 right-6 md:right-16 z-50 hidden sm:block">
        <FloatingBadge />
      </div> */}

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 max-w-7xl mx-auto w-full z-10 pointer-events-none mt-8 lg:mt-0 relative">

        <p ref={roleRef} className="font-mono text-xs uppercase tracking-widest text-[#a0a0a0] mb-6 pl-0 lg:pl-1 pointer-events-auto">
          Hello, I'm
        </p>

        <h1 className="font-inter text-[15vw] md:text-[9rem] lg:text-[12rem] font-bold tracking-tighter leading-[0.85] uppercase text-white flex flex-col items-center lg:items-start pointer-events-auto mix-blend-difference relative z-20">
          <span className="overflow-hidden block py-2">
            <span ref={text1Ref} className="block hero-line-inner origin-bottom lg:origin-bottom-left">
              Fahmy
            </span>
          </span>
          <span className="overflow-hidden block py-2">
            <span ref={text2Ref} className="block hero-line-inner origin-bottom lg:origin-bottom-left text-transparent" style={{ WebkitTextStroke: "2px white" }}>
              Omara
            </span>
          </span>
        </h1>

        <p className="mt-6 font-mono text-sm md:text-base text-[#a0a0a0] max-w-md pl-0 lg:pl-1 mx-auto lg:mx-0 pointer-events-auto">
          Where bold identity meets flawless execution. I create interactive web experiences for individuals and brands who want to be seen, not scrolled past.
        </p>
      </div>

      <div className="scroll-hint absolute bottom-8 right-6 md:right-16 flex items-center justify-center w-24 h-24">
        <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74, 0 a 37,37 0 1,1 -74, 0" fill="transparent" />
          <text className="text-[10px] uppercase tracking-widest fill-[#a0a0a0]">
            <textPath href="#circlePath">
              Scroll to explore • Scroll to explore •
            </textPath>
          </text>
        </svg>
        <span className="text-[#a0a0a0] animate-bounce">↓</span>
      </div>
    </section>
  );
}
