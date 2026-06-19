"use client";

import MagneticButton from "@/components/MagneticButton";
import { usePathname } from "next/navigation";

export default function RevealFooter() {
  const pathname = usePathname();

  // Hide the global footer on Case Study pages since they have their own "Next Project" footer
  if (pathname.startsWith('/work/') && pathname !== '/work') {
    return null;
  }

  return (
    <footer 
      className="relative h-[65vh] md:h-[90vh] w-full overflow-hidden bg-black"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 left-0 w-full h-[65vh] md:h-[90vh] flex flex-col justify-center p-6 md:p-16 z-0 bg-[#050505] border-t border-white/5">
        
        <div className="max-w-7xl mx-auto w-full flex flex-col justify-center h-full relative">
          <h2 className="text-sm font-mono text-[#a0a0a0] uppercase tracking-widest mb-12 block flex items-center gap-4">
             <span className="w-8 h-[1px] bg-white/20" /> Got an idea?
          </h2>
          
          <div className="w-full flex justify-center md:justify-start">
            <MagneticButton href="https://wa.me/201012663485" className="inline-block hover:opacity-80 transition-opacity">
              <h3 className="text-[15vw] md:text-[12rem] lg:text-[14rem] font-inter font-bold tracking-tighter text-white leading-none mb-16 uppercase text-center md:text-left">
                Let's <span className="text-transparent" style={{ WebkitTextStroke: "2px #4b7bec" }}>Talk</span>
              </h3>
            </MagneticButton>
          </div>

          <div className="flex flex-wrap gap-8 items-center justify-between border-t border-white/10 pt-10">
            <div className="flex flex-wrap gap-4">
              <MagneticButton href="https://wa.me/201012663485" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full text-[10px] md:text-xs">
                WhatsApp
              </MagneticButton>
              <MagneticButton href="mailto:fahmyomara.eng@gmail.com" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full text-[10px] md:text-xs hover:bg-white/5 transition-colors">
                Email
              </MagneticButton>
            </div>
            
            <div className="flex flex-wrap gap-6 font-mono text-[10px] tracking-widest uppercase text-[#888]">
              <MagneticButton href="https://github.com/FahmyInTech" className="hover:text-white transition-colors py-2 px-4 border border-transparent hover:border-white/20 rounded-full">
                GitHub
              </MagneticButton>
              <MagneticButton href="https://linkedin.com/in/fahmy-omara" className="hover:text-white transition-colors py-2 px-4 border border-transparent hover:border-white/20 rounded-full">
                LinkedIn
              </MagneticButton>
            </div>
          </div>
          
          <div className="absolute bottom-[-1rem] md:bottom-0 right-0 font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/50 hidden md:block">
            © {new Date().getFullYear()} FAHMY OMARA
          </div>
        </div>

      </div>
    </footer>
  );
}
