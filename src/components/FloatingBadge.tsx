"use client";

import Image from "next/image";

export default function FloatingBadge() {
  return (
    <div className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-full group cursor-pointer z-50 pointer-events-auto">
      {/* Rotating Text Layer */}
      <div className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] transition-all duration-700 ease-in-out">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white/40 group-hover:text-white/80 transition-colors duration-500">
          <path id="badgeCirclePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74, 0 a 37,37 0 1,1 -74, 0" fill="transparent" />
          <text className="font-mono text-[8.2px] uppercase tracking-[0.2em] fill-current">
            <textPath href="#badgeCirclePath" startOffset="0%">
              FAHMY OMARA • FRONTEND ARCHITECT • 
            </textPath>
          </text>
        </svg>
      </div>
      
      {/* Center Image Layer */}
      <div className="absolute inset-0 m-auto w-[60%] h-[60%] rounded-full overflow-hidden border border-white/10 group-hover:border-white/40 transition-colors duration-500 bg-[#0c0c0d]">
        <Image 
          src="/images/portrait.jpeg" 
          alt="Fahmy Omara"
          fill
          className="object-cover grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
        />
      </div>
    </div>
  );
}
