"use client";
import { useRef } from "react";
import gsap from "gsap";

interface ProjectCardProps {
  index: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({ index, title, description, tags, liveUrl, githubUrl }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !contentRef.current) return;
    
    // 3D Tilt Effect
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const xRot = (y / rect.height) * -15; // Max 15deg rotation
    const yRot = (x / rect.width) * 15;

    gsap.to(contentRef.current, {
      rotationX: xRot,
      rotationY: yRot,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4
    });
  };

  const handleMouseLeave = () => {
    if (!contentRef.current) return;
    gsap.to(contentRef.current, {
      rotationX: 0,
      rotationY: 0,
      ease: "power3.out",
      duration: 0.6
    });
  };

  return (
    <div 
      ref={cardRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-card relative w-full border border-white/10 rounded-2xl p-6 md:p-10 mb-8 bg-[#111317] group overflow-hidden" // Deep slate background
    >
      <div 
        ref={contentRef} 
        style={{ transformStyle: "preserve-3d" }}
        className="relative z-10 w-full h-full flex flex-col md:flex-row gap-8 items-start md:items-center"
      >
        <span className="text-5xl md:text-7xl font-mono text-white/10 font-bold group-hover:text-blue-500/20 transition-colors duration-500">
          {index}
        </span>
        
        <div className="flex-1">
          <h3 className="text-2xl md:text-4xl font-inter font-bold tracking-tight text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[#a0a0a0] mb-6 max-w-xl text-sm md:text-base leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs font-mono font-bold uppercase tracking-widest text-[#666] bg-black/50 px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="relative text-sm font-semibold text-white uppercase tracking-wider group/link flex items-center gap-2">
              <span className="relative z-10">Live Demo</span>
              <span className="w-6 h-[1px] bg-white group-hover/link:w-10 transition-all duration-300" />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="relative text-sm font-semibold text-[#888] hover:text-white uppercase tracking-wider flex items-center gap-2 transition-colors duration-300">
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
}
