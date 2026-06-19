import { getProjectBySlug, projectsData } from "@/data/projectsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CaseStudyGallery from "@/components/CaseStudyGallery";
import CaseStudyHero from "@/components/CaseStudyHero";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Determine next project
  const currentIndex = projectsData.findIndex(p => p.slug === resolvedParams.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* 1. Immersive Parallax Hero */}
      <CaseStudyHero project={project} />

      {/* 2. Glass Metadata Bar */}
      <div className="relative z-50 w-full px-4 md:px-16 mt-8 md:-mt-8 mb-16 md:mb-32 pointer-events-none">
        <div className="max-w-7xl mx-auto w-full">
          <div className="pointer-events-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 shadow-2xl">
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-8 md:gap-24 w-full md:w-auto">
              <div>
                <span className="block font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2">Role</span>
                <span className="font-inter text-sm md:text-base font-medium">{project.metadata.role}</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2">Client</span>
                <span className="font-inter text-sm md:text-base font-medium">{project.metadata.client}</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2">Year</span>
                <span className="font-inter text-sm md:text-base font-medium">{project.metadata.year}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-colors flex-1 md:flex-none justify-center">
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Live Site</span>
                <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </div>
              </a>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex-1 md:flex-none justify-center">
                  <span className="font-mono text-xs uppercase tracking-widest">GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>      {/* 3. The Narrative (Sticky Cards on Mobile) */}
      <section className="py-16 md:py-32 px-4 md:px-16 max-w-7xl mx-auto relative">

        {/* The Challenge Card */}
        <div className="sticky top-24 md:relative md:grid md:grid-cols-12 md:gap-8 bg-[#0c0c0d] md:bg-transparent rounded-[2rem] md:rounded-none p-8 md:p-0 shadow-[0_20px_50px_rgba(0,0,0,0.8)] md:shadow-none border border-white/10 md:border-none z-10 min-h-[50vh] md:min-h-0 flex flex-col justify-center mb-8 md:mb-0">
          {/* Editorial Background Number */}
          <div className="absolute top-4 -right-4 md:-top-24 md:-left-12 text-[12rem] md:text-[20rem] font-bold font-inter text-white/[0.02] md:text-white/[0.03] select-none pointer-events-none leading-none z-0">01</div>

          <div className="md:col-span-4 relative z-10">
            <div className="relative">
              <h2 className="text-[10px] md:text-xs font-mono text-[#a0a0a0] uppercase tracking-widest flex items-center gap-3 md:gap-4 mb-4">
                <span className="w-6 md:w-8 h-[1px] bg-white/30" /> The Challenge
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-5xl font-inter font-bold tracking-tighter leading-[1.1] text-white">Navigating the Complexity</h3>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6 relative z-10 mt-8 md:mt-0">
            <p className="text-white/80 md:text-white/90 font-inter text-base sm:text-xl md:text-[1.75rem] leading-[1.8] md:leading-[1.6] font-light">
              {project.challenge}
            </p>
          </div>
        </div>

        <div className="hidden md:block w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-24 md:my-40" />

        {/* The Solution Card */}
        <div className="sticky top-28 md:relative md:grid md:grid-cols-12 md:gap-8 bg-[#080809] md:bg-transparent rounded-[2rem] md:rounded-none p-8 md:p-0 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] md:shadow-none border border-white/10 md:border-none z-20 min-h-[60vh] md:min-h-0 flex flex-col justify-center">
          {/* Editorial Background Number */}
          <div className="absolute top-4 -right-4 md:-top-24 md:-left-12 text-[12rem] md:text-[20rem] font-bold font-inter text-white/[0.02] md:text-white/[0.03] select-none pointer-events-none leading-none z-0">02</div>

          <div className="md:col-span-4 relative z-10">
            <div className="relative">
              <h2 className="text-[10px] md:text-xs font-mono text-[#a0a0a0] uppercase tracking-widest flex items-center gap-3 md:gap-4 mb-4">
                <span className="w-6 md:w-8 h-[1px] bg-white/30" /> The Solution
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-5xl font-inter font-bold tracking-tighter leading-[1.1] text-white">Engineered for Impact</h3>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6 relative z-10 mt-8 md:mt-0">
            <p className="text-white/80 md:text-white/90 font-inter text-base sm:text-xl md:text-[1.75rem] leading-[1.8] md:leading-[1.6] font-light mb-12 md:mb-16">
              {project.solution}
            </p>

            <div className="relative bg-[#0c0c0d] md:bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[2rem] p-6 md:p-12 shadow-2xl overflow-hidden group">
              {/* Subtle ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-blue-500/20 transition-colors duration-700 pointer-events-none" />

              <div className="relative z-10">
                <span className="flex items-center gap-3 font-mono text-[10px] md:text-xs text-white md:text-blue-400 uppercase tracking-widest mb-6 md:mb-8 bg-white/5 md:bg-transparent px-3 py-1.5 md:p-0 rounded-full w-fit">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                  Technical Architecture
                </span>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {project.metadata.techStack.map(tech => (
                    <span key={tech} className="px-3 py-2 md:px-5 md:py-3 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 cursor-default rounded-xl text-[10px] md:text-sm font-mono text-white uppercase tracking-wider border border-white/10 hover:border-white hover:-translate-y-1 shadow-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Parallax Gallery */}
      {project.images.length > 0 && (
        <section className="py-12 md:py-24 overflow-hidden bg-[#0a0a0b] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-16 mb-8 md:mb-16">
            <h2 className="text-xs font-mono text-[#a0a0a0] uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-[1px] bg-white/30" /> Visual Showcase
            </h2>
          </div>
          <CaseStudyGallery images={project.images} />
        </section>
      )}

      {/* 5. Next Project Immersive Reveal */}
      <Link href={`/work/${nextProject.slug}`} className="block group cursor-pointer mt-16 md:mt-0">
        <section className="h-auto min-h-[50vh] py-16 md:py-0 md:h-[70vh] flex flex-col items-center justify-center relative overflow-hidden bg-[#0c0c0d]">

          {/* Desktop Next Project Background Image */}
          <div className="hidden md:block absolute inset-0 z-0">
            {nextProject.images.length > 0 && (
              <Image
                src={nextProject.images[0]}
                alt={nextProject.title}
                fill
                className="object-cover opacity-40 mix-blend-luminosity grayscale-[50%] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[1.5s] ease-out"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-[#0c0c0d]/60 to-transparent z-10 pointer-events-none" />
          </div>

          {/* Mobile Next Project Cinematic Layout */}
          <div className="md:hidden absolute inset-0 z-0 overflow-hidden bg-[#0c0c0d]">
            {nextProject.images.length > 0 && (
              <>
                <Image src={nextProject.images[0]} alt="ambient bg" fill className="object-cover blur-[50px] opacity-60 scale-150 saturate-200" />
                <div className="absolute inset-0 bg-[#0c0c0d]/70 z-10 pointer-events-none" />
              </>
            )}
          </div>

          <div className="relative z-20 flex flex-col items-start text-left px-6 md:px-16 w-full max-w-7xl mx-auto">
            {/* Mobile Image Thumbnail */}
            {nextProject.images.length > 0 && (
              <div className="md:hidden relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-white/20 mb-8 group-hover:-translate-y-2 transition-transform duration-700">
                <Image src={nextProject.images[0]} alt={nextProject.title} fill className="object-cover" />
              </div>
            )}

            {/* Project Name */}
            <h2 className="text-5xl sm:text-7xl md:text-[8rem] font-inter font-bold uppercase tracking-tighter text-white group-hover:-translate-y-2 transition-all duration-700 drop-shadow-2xl mb-4">
              {nextProject.title}
            </h2>

            {/* The Bar Below It */}
            <span className="text-white/90 md:text-white/70 font-mono text-[10px] md:text-sm uppercase tracking-widest group-hover:-translate-y-2 transition-transform duration-700 flex items-center gap-4">
              Next Project <span className="w-12 md:w-24 h-[1px] bg-white/50 inline-block group-hover:w-32 transition-all duration-700" />
            </span>
          </div>
        </section>
      </Link>
    </main>
  );
}
