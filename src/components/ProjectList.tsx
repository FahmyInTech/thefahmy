"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

interface Project {
  title: string;
  category: string;
  liveUrl: string;
  githubUrl: string;
  imageColor: string; // Placeholder for media
}

const PROJECTS: Project[] = [
  { title: "Khaled Saab", category: "Brand Portfolio", liveUrl: "https://khaledsaap-portfolio-liart.vercel.app/", githubUrl: "https://github.com/FahmyInTech/khaledsaap-portfolio", imageColor: "#171719" },
  { title: "To-Do List", category: "Utility App", liveUrl: "https://fahmyintech.github.io/To-Do-List-/", githubUrl: "https://github.com/FahmyInTech/To-Do-List-", imageColor: "#0a0a0b" },
  { title: "Income Calc", category: "Finance Tool", liveUrl: "https://fahmyintech.github.io/income-statement-demo/", githubUrl: "https://github.com/FahmyInTech", imageColor: "#1a1b1e" },
  { title: "Fitness Hub", category: "Gym Website", liveUrl: "https://fahmyintech.github.io/Gym-Website-/", githubUrl: "https://github.com/FahmyInTech/Gym-Website-", imageColor: "#141518" },
  { title: "Nike Market", category: "E-Commerce", liveUrl: "https://fahmyintech.github.io/Nike-shop/", githubUrl: "https://github.com/FahmyInTech/Nike-shop", imageColor: "#0d0e12" },
];

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorLabelRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power3.out",
        });
        gsap.to(cursorLabelRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.45,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null) {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.to(cursorLabelRef.current, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" });
      // Dim background
      gsap.to(".project-row", { opacity: 0.2, duration: 0.3 });
      gsap.to(`.project-row-${hoveredIndex}`, { opacity: 1, x: 20, duration: 0.3 });
    } else {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      gsap.to(cursorLabelRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      // Restore background
      gsap.to(".project-row", { opacity: 1, x: 0, duration: 0.3 });
    }
  }, [hoveredIndex]);

  return (
    <div ref={containerRef} className="relative w-full border-t border-white/10 mt-16" onMouseLeave={() => setHoveredIndex(null)}>
      {/* Floating Media Cursor */}
      <div 
        ref={cursorRef} 
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[300px] -ml-[200px] -mt-[150px] z-40 rounded-xl overflow-hidden flex items-center justify-center opacity-0 scale-0"
        style={{ backgroundColor: hoveredIndex !== null ? PROJECTS[hoveredIndex].imageColor : "#000" }}
      >
        {hoveredIndex !== null && (
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl flex items-center justify-center">
            <span className="text-white/20 font-mono text-xl tracking-widest uppercase rotate-12">
              {PROJECTS[hoveredIndex].category}
            </span>
          </div>
        )}
      </div>

      <div 
        ref={cursorLabelRef} 
        className="pointer-events-none fixed top-0 left-0 w-[80px] h-[80px] -ml-[40px] -mt-[40px] z-50 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold uppercase text-xs tracking-widest opacity-0 scale-0 mix-blend-difference"
      >
        View
      </div>

      {PROJECTS.map((proj, i) => (
        <a 
          key={i} 
          href={proj.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIndex(i)}
          className={`project-row project-row-${i} group block w-full py-12 md:py-20 border-b border-white/10 relative z-10 transition-colors hover:bg-white/[0.02] cursor-none px-6 md:px-16`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h3 className="text-4xl md:text-7xl lg:text-[7rem] font-inter font-bold tracking-tighter uppercase text-white m-0 pointer-events-none">
              {proj.title}
            </h3>
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#666] group-hover:text-white transition-colors duration-300 pointer-events-none text-right">
              {proj.category}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
