"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center md:items-start px-6 md:px-16 pt-20 md:pt-24 pb-20 md:pb-12 overflow-hidden">
      
      {/* Interactive ASCII Portrait Background */}
      <div className="absolute inset-0 flex items-end pb-[15vh] md:pb-0 md:items-center justify-center md:justify-end md:right-0 opacity-40 md:opacity-80 pointer-events-none z-0">
        <div className="w-[120vw] h-[60vh] md:w-[50vw] md:h-[90vh] relative">
          <AsciiPortrait />
        </div>
      </div>

      {/* Option 3: Floating Badge (Hidden) */}
      {/* <div className="absolute top-32 right-6 md:right-16 z-50 hidden sm:block">
        <FloatingBadge />
      </div> */}

      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 max-w-7xl mx-auto w-full z-10 pointer-events-none mt-8 md:mt-0 relative">
        
        <p ref={roleRef} className="font-mono text-xs uppercase tracking-widest text-[#a0a0a0] mb-6 pl-0 md:pl-1 pointer-events-auto">
          Hello, I'm
        </p>

        <h1 className="font-inter text-[15vw] md:text-[9rem] lg:text-[12rem] font-bold tracking-tighter leading-[0.85] uppercase text-white flex flex-col items-center md:items-start pointer-events-auto mix-blend-difference relative z-20">
          <span className="overflow-hidden block py-2">
            <span ref={text1Ref} className="block hero-line-inner origin-bottom md:origin-bottom-left">
              Fahmy
            </span>
          </span>
          <span className="overflow-hidden block py-2">
            <span ref={text2Ref} className="block hero-line-inner origin-bottom md:origin-bottom-left text-transparent" style={{ WebkitTextStroke: "2px white" }}>
              Omara
            </span>
          </span>
        </h1>
        
        <p className="mt-6 font-mono text-sm md:text-base text-[#a0a0a0] max-w-md pl-0 md:pl-1 mx-auto md:mx-0 pointer-events-auto">
          A frontend developer dedicated to designing and building sophisticated, high-performance web experiences.
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
