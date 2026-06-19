"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function KineticAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const text = "I engineer digital experiences that sit precisely at the intersection of stark minimalism and explosive interactive motion. I am currently scaling my logic toward full-stack architecture.";
  const words = text.split(" ");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax background blob
    gsap.to(blobRef.current, {
      y: 150,
      rotation: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Elegant text fade in
    gsap.fromTo(
      ".fade-up-element",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );

    // Scrub Text Reveal Animation
    if (textRef.current) {
      const wordElements = textRef.current.querySelectorAll('.reveal-word');
      gsap.to(wordElements, {
        color: "#ffffff",
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "bottom 50%",
          scrub: true,
        }
      });
    }
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative py-24 md:py-32 px-6 md:px-16 border-t border-white/5 overflow-hidden">
      
      {/* Background Kinetic Blob */}
      <div 
        ref={blobRef}
        className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-[40%_60%_70%_30%] blur-[80px] z-0 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Details */}
        <div className="flex flex-col items-start gap-12 w-full max-w-sm">
          
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          `}</style>

          <div className="fade-up-element w-full">
            <h2 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-6">The Architect</h2>
            <MagneticButton href="https://drive.google.com/file/d/1_p6IZYX0Dvxc7syt-gCNBXOnbPuCdjUq/view?usp=sharing" className="group">
              <div className="flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors">
                <span>Download CV</span>
                <span className="w-6 h-[1px] bg-black group-hover:w-10 transition-all duration-300" />
              </div>
            </MagneticButton>
          </div>

          <div className="fade-up-element w-full py-2">
            <span className="block font-mono text-sm text-white/50 uppercase tracking-widest mb-6">Tech Stack</span>
            
            <div className="flex flex-wrap gap-3">
              {["React", "JavaScript", "Tailwind", "CSS3", "HTML5"].map((tech, i) => (
                <MagneticButton key={i} className="group">
                  <div className="px-5 py-3 bg-white/[0.03] rounded-full text-xs font-mono text-white/80 uppercase border border-white/10 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/30">
                    {tech}
                  </div>
                </MagneticButton>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <div className="fade-up-element relative pl-6 border-l border-white/10 hover:border-white/40 transition-colors duration-500">
              <span className="absolute left-[-4px] top-1 w-[7px] h-[7px] rounded-full bg-white/20" />
              <span className="block font-mono text-sm text-white/50 uppercase tracking-widest mb-3">Focus</span>
              <p className="text-white/80 font-inter text-sm md:text-base leading-relaxed">
                Liquid interfaces, architectural grid systems, and performance-first physics.
              </p>
            </div>
            <div className="fade-up-element relative pl-6 border-l border-white/10 hover:border-white/40 transition-colors duration-500">
              <span className="absolute left-[-4px] top-1 w-[7px] h-[7px] rounded-full bg-white/20" />
              <span className="block font-mono text-sm text-white/50 uppercase tracking-widest mb-3">Mantra</span>
              <p className="text-white/80 font-inter text-sm md:text-base leading-relaxed">
                Code is poetry meant to be felt, not just seen. Every interaction must possess weight and friction.
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Typography */}
        <div className="flex flex-col pt-4 lg:pt-8">
          <h3 ref={textRef} className="font-inter text-3xl md:text-5xl lg:text-[4rem] leading-[1.2] font-bold tracking-tight text-white">
            {words.map((word, i) => (
              <span key={i} className="reveal-word text-white/20" style={{ transition: "color 0.1s" }}>
                {word}{" "}
              </span>
            ))}
          </h3>
        </div>
      </div>

    </section>
  );
}
