"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Reset window scroll on mount of new route
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".page-transition-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2, clearProps: "all" }
      );

      // We animate the transition curtain OUT on enter
      gsap.to(".transition-curtain", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.8,
        ease: "power4.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* The curtain that covers the screen initially and shrinks away */}
      <div 
        className="transition-curtain fixed inset-0 z-[9999] bg-[#0c0c0d] origin-bottom pointer-events-none"
        style={{ transform: "scaleY(1)" }}
      />
      
      <div className="page-transition-content w-full">
        {children}
      </div>
    </div>
  );
}
