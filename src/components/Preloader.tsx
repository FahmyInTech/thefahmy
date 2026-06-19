"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const tl = gsap.timeline();
      
      tl.to(".preloader-text", {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.inOut"
      })
      .to(".preloader-bg", {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          document.body.style.overflow = "";
        }
      });
    }
  }, [progress]);

  return (
    <div className="preloader-bg fixed inset-0 z-[99999] bg-[#0c0c0d] flex flex-col items-center justify-center pointer-events-none">
      <div className="preloader-text flex flex-col items-center">
        <span className="text-8xl md:text-[12rem] font-inter font-bold tracking-tighter text-white">
          {progress > 100 ? 100 : progress}%
        </span>
        <div className="w-48 md:w-64 h-[2px] bg-white/20 mt-4 overflow-hidden rounded-full">
          <div 
            className="h-full bg-white transition-all duration-75 ease-out"
            style={{ width: `${progress > 100 ? 100 : progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
