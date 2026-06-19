"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function MagneticButton({ children, className = "", href }: MagneticButtonProps) {
  const boundingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boundingRef.current || !contentRef.current) return;
    
    // Check for touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const bounding = boundingRef.current;
    const content = contentRef.current;

    const moveEvent = (e: MouseEvent) => {
      const rect = bounding.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(content, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.8,
        ease: "power3.out"
      });
    };

    const leaveEvent = () => {
      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)"
      });
    };

    bounding.addEventListener("mousemove", moveEvent);
    bounding.addEventListener("mouseleave", leaveEvent);

    return () => {
      bounding.removeEventListener("mousemove", moveEvent);
      bounding.removeEventListener("mouseleave", leaveEvent);
    };
  }, []);

  const content = (
    <div ref={contentRef} className="w-full h-full flex flex-col items-center justify-center">
      {children}
    </div>
  );

  return (
    <div ref={boundingRef} className={`relative flex items-center justify-center cursor-pointer ${className}`}>
      {href ? (
        <a 
          href={href} 
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="w-full h-full flex items-center justify-center"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
