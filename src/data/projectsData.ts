export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  liveUrl: string;
  githubUrl: string;
  bgGradient: string;
  metadata: {
    role: string;
    client: string;
    year: string;
    techStack: string[];
  };
  challenge: string;
  solution: string;
  images: string[];
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "00",
    slug: "sara-alshikha",
    title: "Sara Alshikha",
    category: "PERSONAL BRANDING",
    shortDesc: "THIS ISN'T A CV. IT'S A PRESENCE. 19 YEARS OF LEADERSHIP distilled into a minimal luxury visual identity.",
    liveUrl: "https://sara-alshikha-portfolio.vercel.app/",
    githubUrl: "Private",
    bgGradient: "bg-[#0A1628]", // Navy blue from the brand palette
    metadata: {
      role: "Personal Branding Designer & Developer",
      client: "Sara Alshikha",
      year: "2026",
      techStack: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind"],
    },
    challenge: "Sara Alshikha arrived with a 19-year career spanning journalism, editorial leadership, media management, and C-suite executive support at Saad Group. She brought 16 institutional media projects, an international photography award (EPA Gold Winner 2025), and a deeply earned professional identity. The challenge wasn't a lack of content—it was abundance. The real task was strategic: deciding what to frame and how to tell a single, coherent story that communicates the weight of her experience to decision-makers in minutes, not hours.",
    solution: "We didn't start with design; we started with decisions. We curated her 16 media projects across three axes: Media, Management, and Digital. We defined a Minimal Luxury visual identity (Navy, Gold, White) that feels executive without feeling cold. From there, we engineered a fully bilingual (AR/EN) multi-page portfolio in React + Tailwind, featuring dedicated Case Studies, a standalone Photography gallery, and an interactive Career Timeline. Ultimately, the site wasn't the deliverable—the brand was. Sara received a complete Personal Branding Package (Website, CV, LinkedIn) speaking a unified language. The result is a digital presence truly worthy of 19 years of work.",
    images: [
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806139/Screenshot_2026-06-16_213516_tuf7ix.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806140/Screenshot_2026-06-16_214255_js08iw.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806140/Screenshot_2026-06-16_213620_xibcmc.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806141/Screenshot_2026-06-16_213713_nniore.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806137/Screenshot_2026-06-16_213805_tyau6h.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806137/Screenshot_2026-06-16_213821_nknlzh.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806138/Screenshot_2026-06-16_213914_somx0x.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806140/Screenshot_2026-06-16_214024_n6t2vk.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806140/Screenshot_2026-06-16_214047_n89wvb.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806137/Screenshot_2026-06-16_214150_pd9ycc.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806138/Screenshot_2026-06-16_214223_uy3juu.png"
    ]
  },
  {
    id: "01",
    slug: "khaled-saab",
    title: "Khaled Saab",
    category: "Brand Portfolio",
    shortDesc: "A highly visual portfolio tailored for a creative director, with an emphasis on fluid imagery and stark typography.",
    liveUrl: "https://khaledsaap-portfolio-liart.vercel.app/",
    githubUrl: "https://github.com/FahmyInTech/khaledsaap-portfolio",
    bgGradient: "bg-[#3498DB]", // Vibrant blue requested by user
    metadata: {
      role: "Frontend Developer",
      client: "Khaled Saab",
      year: "2025",
      techStack: ["HTML5", "CSS3", "JavaScript"],
    },
    challenge: "The client required an ultra-premium digital presence that mirrored their creative direction in the physical world. The site needed to balance heavy visual assets with flawless performance, requiring meticulous attention to layout shifts and image loading.",
    solution: "Engineered a custom vanilla JavaScript framework focusing on intersection observers and raw CSS performance. The result is a butter-smooth layout that highlights stark typography and fluid imagery without relying on heavy frontend libraries.",
    images: [
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806957/Screenshot_2026-04-01_124128_zf5mgp.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806955/Screenshot_2026-04-01_124233_aamc7d.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806955/Screenshot_2026-04-01_124300_vr9qtx.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806958/Screenshot_2026-04-01_124341_zld2ac.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781806956/Screenshot_2026-04-01_124441_z9dntt.png"
    ]
  },
  {
    id: "02",
    slug: "to-do-list",
    title: "To-Do List",
    category: "Utility App",
    shortDesc: "A streamlined, minimal task management application focusing on hyper-fast interactions and local persistence.",
    liveUrl: "https://fahmyintech.github.io/To-Do-List-/",
    githubUrl: "https://github.com/FahmyInTech/To-Do-List-",
    bgGradient: "bg-gradient-to-r from-[#18181b] to-[#27272a]", // Neutral dark to blend with light UI
    metadata: {
      role: "Frontend Developer",
      client: "Personal Utility",
      year: "2024",
      techStack: ["JavaScript", "TailwindCSS", "LocalStorage"],
    },
    challenge: "Task management apps often suffer from feature bloat. The challenge was to create a hyper-minimalist tool where the time between thought and action is virtually zero, demanding instant state updates and a distraction-free UI.",
    solution: "Built with pure JavaScript for maximum performance without library overhead. Implemented robust LocalStorage syncing to provide a database-free experience that feels instantaneous. The UI was stripped down to raw typography and structural lines.",
    images: [
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807141/Screenshot_2025-05-03_202003_e4ruph.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807142/Screenshot_2025-05-03_202026_kioeme.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807142/Screenshot_2025-05-03_202043_kovpwp.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807141/Screenshot_2025-05-03_202112_azjids.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807141/Screenshot_2025-05-03_202123_mtwgy6.png"
    ]
  },
  {
    id: "03",
    slug: "personal-portfolio",
    title: "Legacy Portfolio",
    category: "Developer Profile",
    shortDesc: "An earlier iteration of my personal digital presence focused on displaying technical depth and core competencies.",
    liveUrl: "https://fahmyintech.github.io/Fahmy-Omara/",
    githubUrl: "https://github.com/FahmyInTech/Fahmy-Omara",
    bgGradient: "bg-gradient-to-r from-[#022c22] to-[#064e3b]", // Dark emerald to match the green text
    metadata: {
      role: "Frontend Developer",
      client: "Self",
      year: "2025",
      techStack: ["HTML5", "CSS3", "JavaScript"],
    },
    challenge: "Creating a standout developer portfolio requires balancing technical braggadocio with genuine usability. The challenge was structuring a large amount of project data without overwhelming the user.",
    solution: "Designed a clean, grid-based layout prioritizing scannability. Custom CSS animations were used sparingly to draw attention to key interactive elements, establishing a strong foundation for future, more complex iterations.",
    images: [
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807279/Screenshot_2026-02-27_004948_jyoszb.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807280/Screenshot_2026-02-27_005013_sxnvzu.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807280/Screenshot_2026-02-27_005056_okamfl.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807277/Screenshot_2026-02-27_005139_nkz26u.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807276/Screenshot_2026-02-27_005113_ciwaid.png"
    ]
  },
  {
    id: "04",
    slug: "fitness-hub",
    title: "Fitness Hub",
    category: "Gym Website",
    shortDesc: "A high-energy marketing site featuring aggressive typography, dark themes, and dynamic scheduling integrations.",
    liveUrl: "https://fahmyintech.github.io/Gym-Website-/",
    githubUrl: "https://github.com/FahmyInTech/Gym-Website-",
    bgGradient: "bg-gradient-to-br from-orange-950 to-zinc-900",
    metadata: {
      role: "Frontend Engineer",
      client: "Self-Directed Learning",
      year: "2023",
      techStack: ["HTML5", "CSS3", "JavaScript"],
    },
    challenge: "As part of my early frontend development journey, I wanted to step away from basic layouts and tackle something with high dynamic energy. The challenge was to build a site that felt as aggressive and high-octane as a workout, serving as a sandbox to apply advanced CSS styling, complex layouts, and responsive design techniques.",
    solution: "This project became a crucial milestone in my learning phase. I implemented a brutalist dark theme accented with high-contrast neon highlights. By relying on massive typography and skewed angles, I learned how to create a sense of motion even when static, significantly improving my grasp of CSS architecture and layout structuring.",
    images: [
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807561/home_y2uo32.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807560/about_mzyj8n.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807560/services_jir8sy.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807561/pricing_huqthj.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807557/review_uqdmfc.png"
    ]
  },
  {
    id: "05",
    slug: "nike-market",
    title: "Nike Market",
    category: "E-Commerce",
    shortDesc: "Conceptual storefront focusing on premium sneaker drops, utilizing 3D-like product views and swift checkout flows.",
    liveUrl: "https://fahmyintech.github.io/Nike-shop/",
    githubUrl: "https://github.com/FahmyInTech/Nike-shop",
    bgGradient: "bg-gradient-to-br from-purple-950 to-zinc-900",
    metadata: {
      role: "UI Engineer",
      client: "Self-Directed Learning",
      year: "2024",
      techStack: ["HTML5", "CSS3", "JavaScript"],
    },
    challenge: "E-commerce for high-end sneakers requires an interface that elevates the product. Rather than taking on a client, I created this project as a personal technical challenge during my learning phase to master modern UI/UX principles, specifically focusing on building interaction models that feel premium and tactile.",
    solution: "This conceptual storefront was instrumental in my development as an engineer. I focused entirely on product photography, wrapping it in an invisible UI that only appears when needed. Building the custom hover states and micro-interactions gave me hands-on experience in turning static designs into a physical, premium digital experience.",
    images: [
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807755/home_tqe4v4.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807754/Screenshot_2026-06-17_005140_l1hsey.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807746/Screenshot_2026-06-17_005157_zmppu2.png",
      "https://res.cloudinary.com/dgqequjgk/image/upload/v1781807749/Screenshot_2026-06-17_005234_gd9as6.png"
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((p) => p.slug === slug);
}
