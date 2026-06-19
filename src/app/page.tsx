"use client";
import { useEffect } from "react";
import gsap from "gsap";
import HeroText from "@/components/HeroText";
import KineticAbout from "@/components/KineticAbout";
import StackedProjects from "@/components/StackedProjects";
import MagneticButton from "@/components/MagneticButton";
import WebglBackground from "@/components/WebglBackground";

const KHAMSAT_TESTIMONIALS = [
  { 
    name: "Khaled F.", 
    role: "Client", 
    text: "شاب خلوق ومحترف، أنجز المطلوب بدقة واحترافية عالية تفوق التوقعات. من النادر أن تجد في هذا الزمن من يجمع بين الرقي في التعامل والتميز في الأداء التقني. شكراً جزيلاً أستاذ فهمي، وأتمنى لك دوام التوفيق.",
    rating: 5
  },
  { 
    name: "Ahmed A.", 
    role: "Client", 
    text: "هذا ثاني تعامل لي مع الفنان الأستاذ فهمي. وهو يستحق لقب الأستاذية بجدارة. لن اكثر في الإطراء، ولكن لكل من يبحث عن التميز في عالم شديد التنافسية فسيجده لدى هذا الفنان.",
    rating: 5
  },
  { 
    name: "Fadia A.", 
    role: "Client", 
    text: "I had a great experience working with him! He created a well-designed and professional portfolio for me. He was very helpful, responsive, and easy to work with. Highly recommended.",
    rating: 5
  }
];

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Testimonials reveal
      gsap.from(".testimonial-item", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#testimonials",
          start: "top 70%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full text-white selection:bg-white selection:text-black">
      <WebglBackground />
      <HeroText />

      <KineticAbout />

      {/* Accordion Work Section */}
      <section id="work" className="py-24 border-t border-white/5">
        <div className="px-6 md:px-16 max-w-7xl mx-auto mb-4">
          <h2 className="text-sm font-mono text-[#a0a0a0] uppercase tracking-widest flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/30" /> Selected Work
          </h2>
        </div>
        {/* <AccordionProjects /> */}
        <StackedProjects />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono text-[#a0a0a0] uppercase tracking-widest mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/30" /> Client Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {KHAMSAT_TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-item p-10 bg-[#111317] border border-white/5 rounded-2xl flex flex-col justify-between" dir={i !== 2 ? "rtl" : "ltr"}>
                <p className={`text-white/80 ${i !== 2 ? "text-xl leading-relaxed" : "font-inter leading-relaxed"} mb-8`}>
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <h4 className="text-white font-bold mb-1">{t.name}</h4>
                    <span className="text-[#666] font-mono text-[10px] uppercase tracking-widest">Khamsat Client</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-[#e8572a]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
