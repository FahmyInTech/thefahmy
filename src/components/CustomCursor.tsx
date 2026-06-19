"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const dot = cursorDot.current;
    const ring = cursorRing.current;

    if (!dot || !ring) return;

    // Center the cursor initially out of sight
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const onMouseMove = (e: MouseEvent) => {
      // Fade in on first move
      gsap.to([dot, ring], { opacity: 1, duration: 0.3, overwrite: "auto" });

      // Move instantly for dot, trail for ring
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
    };

    const addHoverEffect = () => {
      gsap.to(dot, { scale: 0, duration: 0.2 });
      gsap.to(ring, { scale: 1.5, borderColor: "rgba(255, 255, 255, 0.8)", backgroundColor: "rgba(255, 255, 255, 0.1)", duration: 0.3 });
    };

    const removeHoverEffect = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, borderColor: "rgba(255, 255, 255, 0.3)", backgroundColor: "transparent", duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add event delegation for hover states
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest("input") || target.closest("textarea")) {
        addHoverEffect();
      }
    };
    
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest("input") || target.closest("textarea")) {
        removeHoverEffect();
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    
    const onMouseLeave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    document.addEventListener("mouseleave", onMouseLeave);

    const onScroll = () => {
      const scrollY = window.scrollY;
      const bodyHeight = document.body.clientHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollY / bodyHeight));
      
      const circle = document.querySelector(".progress-circle") as SVGCircleElement;
      if (circle) {
        const circumference = 2 * Math.PI * 18;
        const offset = circumference - progress * circumference;
        gsap.to(circle, { strokeDashoffset: offset, duration: 0.1 });
      }
    };
    
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorDot} 
        className="cursor-dot hidden md:block fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
      />
      <div 
        ref={cursorRing} 
        className="cursor-ring hidden md:flex fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] items-center justify-center mix-blend-difference"
      >
        <svg className="absolute w-12 h-12 -top-1 -left-1" viewBox="0 0 40 40">
          <circle 
            cx="20" cy="20" r="18" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.2)" 
            strokeWidth="1" 
          />
          <circle 
            className="progress-circle"
            cx="20" cy="20" r="18" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeDasharray={2 * Math.PI * 18}
            strokeDashoffset={2 * Math.PI * 18}
            strokeLinecap="round"
            transform="rotate(-90 20 20)"
          />
        </svg>
      </div>
    </>
  );
}
