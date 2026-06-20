"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ASCII_CHARS = " .:-=+*#%@$801";

interface AsciiPortraitProps {
  src?: string;
  className?: string;
}

export default function AsciiPortrait({ src = "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806385/portrait_b81bbr.jpg", className = "" }: AsciiPortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.src = src;
    img.crossOrigin = "Anonymous";

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    
    // Higher internal resolution for a more detailed, sharper portrait
    const cols = 130;
    const rows = 160;

    const renderCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Ensure canvas fills container but keeps aspect ratio or covers
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      
      return { w: rect.width, h: rect.height };
    };

    img.onload = () => {
      // Create offscreen canvas for image processing
      const offCanvas = document.createElement("canvas");
      const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      offCanvas.width = cols;
      offCanvas.height = rows;

      const updateImgData = (w: number, h: number) => {
        const canvasAspect = w / h;
        const imgAspect = img.width / img.height;

        let sx = 0, sy = 0, sWidth = img.width, sHeight = img.height;

        if (canvasAspect > imgAspect) {
          // Canvas is wider than image. Crop top/bottom.
          sWidth = img.width;
          sHeight = img.width / canvasAspect;
          sy = window.innerWidth < 1024 ? 0 : (img.height - sHeight) / 2;
        } else {
          // Canvas is taller than image. Crop sides.
          sHeight = img.height;
          sWidth = img.height * canvasAspect;
          sx = (img.width - sWidth) / 2;

        }

        offCtx.clearRect(0, 0, cols, rows);
        offCtx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, cols, rows);
        return offCtx.getImageData(0, 0, cols, rows).data;
      };

      let currentImgData: Uint8ClampedArray | null = null;
      let lastW = 0;
      let lastH = 0;

      const render = () => {
        const dims = renderCanvas();
        if (!dims) return;
        
        if (dims.w !== lastW || dims.h !== lastH || !currentImgData) {
          currentImgData = updateImgData(dims.w, dims.h);
          lastW = dims.w;
          lastH = dims.h;
        }
        
        ctx.clearRect(0, 0, dims.w, dims.h);
        
        const cellW = dims.w / cols;
        const cellH = dims.h / rows;
        const isMobile = window.innerWidth < 768;
        
        ctx.font = `bold ${Math.max(cellW * 1.2, 8)}px "Space Mono", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const i = (y * cols + x) * 4;
            const r = currentImgData[i];
            const g = currentImgData[i + 1];
            const b = currentImgData[i + 2];
            const a = currentImgData[i + 3];

            if (a < 10) continue; // Skip transparent pixels

            const brightness = (r + g + b) / 3;
            
            // Cut out very dark pixels completely to blend the background perfectly
            if (brightness < 15) continue;
            const charIndex = Math.floor((brightness / 255) * (ASCII_CHARS.length - 1));
            let char = ASCII_CHARS[charIndex];

            if (char === " ") continue; // Don't draw empty spaces to save performance

            const px = x * cellW + cellW / 2;
            const py = y * cellH + cellH / 2;
            
            // Calculate distance from mouse for interactive effect
            const dist = Math.sqrt(Math.pow(px - mouse.x, 2) + Math.pow(py - mouse.y, 2));
            
            // Base color is a crisp white/grey
            let opacity = Math.max(0.15, brightness / 255);
            
            // Subtle brightness boost for mobile only
            if (isMobile) {
              opacity = Math.max(0.25, (brightness / 255) * 1.4);
            }

            let color = `rgba(255, 255, 255, ${opacity * 0.5})`;
            
            // Interactive glow effect around mouse
            if (dist < 300) {
              const intensity = 1 - (dist / 300);
              color = `rgba(255, 255, 255, ${Math.min(1, opacity + (intensity * 0.8))})`;
              
              // Random digital glitch / flash near mouse
              if (Math.random() < 0.04) {
                char = ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
                color = "#ffffff"; // Pure white flash
              }
            }

            ctx.fillStyle = color;
            ctx.fillText(char, px, py);
          }
        }

        animationFrameId = requestAnimationFrame(render);
      };

      // Entrance animation
      gsap.fromTo(canvas, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 2, ease: "power3.out" });
      render();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return; // Disable hover glow on mobile
      
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Calculate mouse position relative to the canvas internal drawing coordinates
      mouse.x = (e.clientX - rect.left) * dpr;
      mouse.y = (e.clientY - rect.top) * dpr;
    };

    const handleMouseLeave = () => {
      // Smoothly move mouse away
      gsap.to(mouse, { x: -1000, y: -1000, duration: 1 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [src]);

  return (
    <div ref={containerRef} className={`relative w-full h-full pointer-events-auto ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
