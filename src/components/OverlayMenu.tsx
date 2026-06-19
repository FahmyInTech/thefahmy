"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

export default function OverlayMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!bgRef.current || !linksRef.current || !containerRef.current) return;

    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";
      containerRef.current.style.pointerEvents = "all";

      const tl = gsap.timeline();
      
      // Federico style circular clip-path reveal
      tl.to(bgRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.8,
        ease: "power3.inOut"
      });

      // Stagger link characters
      tl.to(linksRef.current.querySelectorAll(".char"), {
        y: "0%",
        rotateY: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        ease: "power4.out"
      }, "-=0.4");

      // Footer reveal
      if (footerRef.current) {
        tl.to(footerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out"
        }, "-=0.6");
      }
      
    } else {
      document.body.style.overflow = "";
      
      const tl = gsap.timeline({
        onComplete: () => {
          if (containerRef.current) containerRef.current.style.pointerEvents = "none";
        }
      });

      tl.to(linksRef.current.querySelectorAll(".char"), {
        y: "100%",
        opacity: 0,
        duration: 0.4,
        stagger: 0.01,
        ease: "power2.in"
      });

      if (footerRef.current) {
        tl.to(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        }, "-=0.4");
      }

      tl.to(bgRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.6,
        ease: "power3.inOut"
      }, "-=0.2");
    }
  }, [isOpen]);

  const LINKS = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/work" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-[100] w-12 h-12 flex flex-col items-center justify-center gap-2 group mix-blend-difference"
      >
        <span className={`h-[2px] bg-white transition-all duration-300 w-8 ${isOpen ? "rotate-45 translate-y-[10px]" : "group-hover:w-10"}`} />
        <span className={`h-[2px] bg-white transition-all duration-300 w-8 ${isOpen ? "-rotate-45 -translate-y-[10px]" : "group-hover:w-6"}`} />
      </button>

      <div ref={containerRef} className="fixed inset-0 z-[90] pointer-events-none">
        <style>{`
          @keyframes menuMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-menu-marquee {
            animation: menuMarquee 30s linear infinite;
          }
        `}</style>
        
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-[#060607] menu-overlay overflow-hidden"
        >
          {/* Massive Kinetic Background Marquee */}
          <div className="absolute top-[20%] left-0 -translate-y-1/2 w-max -rotate-3 pointer-events-none opacity-[0.02] flex z-0 mix-blend-screen">
            <span className="text-[25vw] md:text-[16vw] font-inter font-black uppercase tracking-tighter whitespace-nowrap animate-menu-marquee leading-none">
               FAHMY OMARA • FRONTEND ARCHITECT • FAHMY OMARA • FRONTEND ARCHITECT • 
            </span>
          </div>
        </div>
        
        <nav className="relative z-10 w-full h-full flex items-center justify-center">
          <ul ref={linksRef} className="flex flex-col items-center md:items-start gap-6 md:gap-8 max-w-4xl w-full px-8">
            {LINKS.map((link, i) => (
              <li key={i} className="p-2">
                <a 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    
                    setTimeout(() => {
                      if (link.href === "/") {
                        if (pathname === "/") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          router.push("/");
                        }
                      } else if (link.href.startsWith("/#")) {
                        const targetId = link.href.replace("/", "");
                        if (pathname === "/") {
                          document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
                        } else {
                          router.push(link.href);
                        }
                      } else {
                        router.push(link.href);
                      }
                    }, 800);
                  }}
                  className="group flex items-center gap-6"
                >
                  <span className="block overflow-hidden text-5xl md:text-8xl lg:text-[7rem] font-bold font-inter tracking-tighter text-white uppercase flex">
                    {link.name.split('').map((char, index) => (
                      <span 
                        key={index} 
                        className="char inline-block translate-y-[120%] opacity-0 origin-bottom group-hover:text-white/40 transition-colors duration-300"
                        style={{ transform: "translateY(120%) rotateY(45deg)" }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>
                  <span className="text-3xl md:text-5xl text-white opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Footer */}
        <div ref={footerRef} className="absolute bottom-12 left-0 w-full flex flex-col items-center justify-center opacity-0 translate-y-5 z-20">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/50 mb-3">Available for freelance</p>
          <div className="flex items-center gap-4 md:gap-6 font-inter text-sm md:text-base text-white">
            <a href="mailto:fahmyomara.eng@gmail.com" className="hover:text-white/70 transition-colors pointer-events-auto">Email</a>
            <span className="text-white/30">•</span>
            <a href="https://linkedin.com/in/fahmy-omara" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors pointer-events-auto">LinkedIn</a>
            <span className="text-white/30">•</span>
            <a href="https://wa.me/201012663485" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors pointer-events-auto">WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  );
}
