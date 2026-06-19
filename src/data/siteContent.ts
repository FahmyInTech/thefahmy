export const navigation = [
  { label: "Manifesto", href: "#hero" },
  { label: "Archives", href: "#archive" },
  { label: "Profile", href: "#profile" },
  { label: "System", href: "#system" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "JavaScript / React / Khamsat / Damanhour, Egypt",
  title: [
    "I build premium websites",
    "that earn trust",
    "before the sales call.",
  ],
  description:
    "Frontend engineer focused on turning complex design requirements into responsive, high-performance interfaces for direct clients, agencies, and premium service buyers.",
  primaryCta: {
    label: "Open the Project Archives",
    href: "#archive",
  },
  secondaryCta: {
    label: "Download CV",
    href: "/cv.pdf",
  },
  facts: [
    {
      label: "Current Role",
      value: "Freelance Frontend Developer on Khamsat since October 2024.",
    },
    {
      label: "Delivery Signal",
      value: "100% client satisfaction with repeated 5-star delivery.",
    },
    {
      label: "Growth Direction",
      value: "Strong JavaScript and React base, progressing toward Node.js and full-stack architecture.",
    },
  ],
};

export const liveProof = [
  {
    label: "Khaled SAAP",
    title: "Premium positioning",
    signal: "30% faster performance / 90+ Lighthouse",
    detail:
      "A creative director portfolio built to feel expensive without becoming visually heavy.",
  },
  {
    label: "To-Do List",
    title: "Interaction discipline",
    signal: "Full CRUD / priority / deadlines / dark mode",
    detail:
      "A tiny product surface used to prove that utility interfaces can feel fluid, not mechanical.",
  },
  {
    label: "Previous Portfolio",
    title: "Brand conversion",
    signal: "Filters / modal system / contact flow",
    detail:
      "The site that converted personal positioning into inbound opportunities and led to the next client.",
  },
];

export const projectArchives = [
  {
    id: "khaled",
    tabLabel: "Khaled SAAP",
    eyebrow: "Hero Project / Premium Brand Portfolio",
    title: "Khaled SAAP",
    summary:
      "A premium portfolio for a creative director where hierarchy, brand trust, and restraint had to work harder than effects.",
    role: "Creative frontend engineering and interface implementation",
    stack: ["HTML5", "CSS3", "JavaScript", "Performance Optimization"],
    liveUrl: "https://khaledsaap-portfolio-liart.vercel.app/",
    proof: [
      "Enhanced site performance by 30% through semantic HTML and image optimization.",
      "Reached a 90+ Lighthouse score while preserving the premium visual language.",
      "Delivered with 100% client satisfaction after multiple complex revisions.",
    ],
    inspect: {
      hierarchy:
        "The layout leans on typography, spacing, and sectional pacing instead of noisy motion.",
      logic:
        "Credibility is modularized through trust stats, philosophy, and controlled calls to action.",
      engineering:
        "Performance work sits underneath the luxury aesthetic so the experience feels expensive and stable at the same time.",
    },
    entries: [
      {
        id: "01",
        stage: "Constraint",
        title: "Luxury needed to feel controlled, not overloaded.",
        summary:
          "The brief demanded a high-end visual presence, but the interface still needed to stay fast, readable, and usable for premium visitors.",
        decision:
          "Typography, spacing, and visual cadence became the primary luxury signals instead of constant decoration.",
        result:
          "The hero lands authority quickly without exhausting the user before the rest of the page can sell the brand.",
        rationale:
          "This is where visual hierarchy replaced trend-driven motion as the main differentiator.",
        image: "/projects/khaled/hero.png",
        alt: "Khaled SAAP hero section with strong typography and premium blue palette",
        pins: [
          { label: "Primary message", x: "18%", y: "42%" },
          { label: "Trust stats", x: "74%", y: "56%" },
          { label: "Dual CTA logic", x: "27%", y: "70%" },
        ],
      },
      {
        id: "02",
        stage: "System",
        title: "Trust had to be converted into repeatable interface blocks.",
        summary:
          "A premium brand cannot rely on mood alone. Visitors need repeated evidence that the person behind the site is established and credible.",
        decision:
          "Philosophy, quantified proof, and restrained card systems were used as repeatable trust modules.",
        result:
          "The page starts to read like a clear brand system rather than a collection of polished screens.",
        rationale:
          "This step turns branding into an interface language the rest of the site can reuse.",
        image: "/projects/khaled/about.png",
        alt: "Khaled SAAP philosophy section with statement card and credibility metrics",
        pins: [
          { label: "Philosophy anchor", x: "54%", y: "24%" },
          { label: "Metric cluster", x: "41%", y: "73%" },
          { label: "Conversion CTA", x: "52%", y: "94%" },
        ],
      },
      {
        id: "03",
        stage: "Refinement",
        title: "The hardest work was hierarchy, not animation.",
        summary:
          "Several revisions were required to make the composition feel inevitable and premium instead of merely decorative.",
        decision:
          "Section weights, text emphasis, and spacing were refined repeatedly until the eye moved naturally across the page.",
        result:
          "The layout feels deliberate, which is what gives the project its expensive tone.",
        rationale:
          "A premium interface usually wins through restraint and sequence, not through effect count.",
        image: "/projects/khaled/experience.png",
        alt: "Khaled SAAP brand trust section with global partners showcase",
        pins: [
          { label: "Trust headline", x: "47%", y: "29%" },
          { label: "Brand proof rail", x: "50%", y: "72%" },
        ],
      },
      {
        id: "04",
        stage: "Delivery",
        title: "Consistency had to survive every detail screen and revision.",
        summary:
          "A premium build is only real if the visual logic survives deeper sections, client feedback, and smaller content blocks.",
        decision:
          "A coherent component language kept the project stable even as priorities shifted during revision rounds.",
        result:
          "The finished delivery stayed pixel-accurate, high-performance, and client-approved through the full iteration cycle.",
        rationale:
          "The system had to be revision-resistant, not just good-looking in a single hero frame.",
        image: "/projects/khaled/detail.png",
        alt: "Khaled SAAP detail section showing refined card system and consistent soft luxury styling",
        pins: [
          { label: "Card language", x: "28%", y: "48%" },
          { label: "Consistency layer", x: "67%", y: "58%" },
        ],
      },
    ],
  },
  {
    id: "todo",
    tabLabel: "To-Do List",
    eyebrow: "UX Logic Project / Utility Interface",
    title: "Enhanced To-Do List",
    summary:
      "A small productivity surface used to prove interaction judgment: speed, clarity, persistence, and low-friction state changes.",
    role: "Vanilla JavaScript interface logic, persistent state, and UX refinement",
    stack: ["Vanilla JS", "LocalStorage API", "Tailwind CSS", "Responsive Layout"],
    liveUrl: "https://fahmyintech.github.io/To-Do-List-/",
    githubUrl: "https://github.com/FahmyInTech/To-Do-List-",
    proof: [
      "Programmed a full CRUD task manager with priority categorization and deadline management.",
      "Implemented dark mode and persistent state with zero data loss across sessions.",
      "Reduced interaction friction through inline editing, visual status coding, and live task counting.",
    ],
    inspect: {
      hierarchy:
        "The input row, task list, and remaining-count footer create a tight productivity loop with no wasted chrome.",
      logic:
        "Priority color, due date, completion state, and edit controls are surfaced at the moment of use instead of hidden behind extra screens.",
      engineering:
        "Theme preference and tasks are both persisted in localStorage so the tool keeps continuity between visits.",
    },
    entries: [
      {
        id: "01",
        stage: "Constraint",
        title: "A CRUD app had to feel fluid instead of form-driven.",
        summary:
          "The risk with a simple task app is mechanical interaction: add a row, submit a form, forget the interface.",
        decision:
          "The layout was compressed around one fast task loop: input, deadline, priority, add, update, and immediate feedback.",
        result:
          "The interface feels closer to a lightweight product than a basic demo.",
        rationale:
          "Good utility design removes the sense of ceremony around routine actions.",
        image: "/projects/todo/main.png",
        alt: "To-Do List interface with input, deadline, priority and live tasks",
        pins: [
          { label: "Fast input loop", x: "37%", y: "27%" },
          { label: "Theme + clear controls", x: "79%", y: "12%" },
          { label: "Live task rail", x: "41%", y: "62%" },
        ],
      },
      {
        id: "02",
        stage: "System",
        title: "Task state needed to be visible at a glance.",
        summary:
          "A task manager becomes frictional when status is hidden or when every row looks identical.",
        decision:
          "Priority color coding, due-date placement, and inline controls were kept inside the row itself.",
        result:
          "Users can scan urgency, due dates, and available actions without opening secondary views.",
        rationale:
          "Visual state is part of the product logic, not a decorative layer on top of it.",
        image: "/projects/todo/tasks.png",
        alt: "To-Do List tasks with low medium and high priority color coding",
        pins: [
          { label: "Priority color state", x: "18%", y: "59%" },
          { label: "Due date visibility", x: "50%", y: "62%" },
          { label: "Inline edit/delete", x: "86%", y: "63%" },
        ],
      },
      {
        id: "03",
        stage: "Persistence",
        title: "Utility trust depends on state surviving the session break.",
        summary:
          "A to-do list loses credibility immediately if tasks or preferences disappear after reload.",
        decision:
          "Tasks and theme preference were stored in localStorage and restored on page load before interaction resumes.",
        result:
          "The app keeps continuity across sessions and feels dependable rather than disposable.",
        rationale:
          "Persistence is the minimum contract for a productivity tool, even when the stack is intentionally simple.",
        image: "/projects/todo/main.png",
        alt: "To-Do List interface showing persisted tasks and theme controls",
        pins: [
          { label: "Theme persistence", x: "72%", y: "12%" },
          { label: "Session memory", x: "31%", y: "62%" },
        ],
      },
      {
        id: "04",
        stage: "Interaction",
        title: "Editing and cleanup had to stay low friction.",
        summary:
          "Users should be able to update or clear state quickly without modal overhead or broken focus patterns.",
        decision:
          "Inline text editing, checkbox completion, and a visible Clear All control keep maintenance actions immediate.",
        result:
          "The task flow remains light even after the list fills up with multiple states.",
        rationale:
          "Small products earn quality through the absence of unnecessary resistance.",
        image: "/projects/todo/compact.png",
        alt: "Compact To-Do List state with quick edit and delete controls",
        pins: [
          { label: "Inline edit", x: "84%", y: "58%" },
          { label: "Bulk clear", x: "84%", y: "12%" },
          { label: "Remaining count", x: "18%", y: "91%" },
        ],
      },
    ],
  },
  {
    id: "portfolio",
    tabLabel: "Previous Portfolio",
    eyebrow: "Foundation Project / Personal Brand System",
    title: "Previous Portfolio",
    summary:
      "The site that proved a structured personal brand could generate real opportunities and become the base for this upgrade.",
    role: "Personal brand architecture, frontend implementation, and conversion flow design",
    stack: ["HTML5", "CSS3", "JavaScript", "Cloudinary", "Formspree"],
    liveUrl: "https://fahmyintech.github.io/Fahmy-Omara",
    proof: [
      "Constructed a fully responsive showcase site using modern CSS for a mobile-first experience.",
      "Integrated interactive UI elements, filters, project modals, and scroll-based motion to raise engagement.",
      "Converted the portfolio into a working lead-generation asset that helped secure client work such as Khaled SAAP.",
    ],
    inspect: {
      hierarchy:
        "The hero, stats, section navigation, and contact flow were used to compress credibility into a one-page structure.",
      logic:
        "Filtering, project details, modal expansion, and direct contact options turned the site from brochure to working sales surface.",
      engineering:
        "Vanilla JS handled scroll state, filtering, modal behavior, carousel logic, form validation, and reduced-motion support.",
    },
    entries: [
      {
        id: "01",
        stage: "Foundation",
        title: "The first job was building a personal brand from zero.",
        summary:
          "The portfolio needed to introduce your value clearly while still feeling modern enough to signal design sensitivity.",
        decision:
          "A one-page structure with a visible hero, stats, and direct CTAs kept the narrative simple for first-time visitors.",
        result:
          "The site immediately communicated who you are, what you do, and where to act next.",
        rationale:
          "The project had to function as a selling surface before it could function as a creative statement.",
        image: "/projects/portfolio/hero.png",
        alt: "Previous portfolio hero section with personal image and call to action",
        pins: [
          { label: "Identity headline", x: "37%", y: "42%" },
          { label: "Primary CTA", x: "33%", y: "63%" },
          { label: "Credibility stats", x: "31%", y: "77%" },
        ],
      },
      {
        id: "02",
        stage: "Narrative",
        title: "Trends had to be balanced with usability.",
        summary:
          "Creative-dev styling can help, but it becomes noise if it buries the message or slows the scan path.",
        decision:
          "The design stayed clean and readable while using motion, icons, and sections only where they strengthened communication.",
        result:
          "The about and skills content stayed approachable instead of looking like a style exercise.",
        rationale:
          "This project is the bridge between generic portfolio trends and the more authored Interface Architect direction.",
        image: "/projects/portfolio/about.png",
        alt: "Previous portfolio about section with image, text, and feature highlights",
        pins: [
          { label: "Readable bio block", x: "67%", y: "45%" },
          { label: "Value highlights", x: "67%", y: "80%" },
        ],
      },
      {
        id: "03",
        stage: "System",
        title: "Projects had to carry more detail than static thumbnails.",
        summary:
          "A portfolio grid without filtering or deeper detail often forces users to leave before they understand the work.",
        decision:
          "Filtering, stats, project cards, and detail modals were added so the project section could behave like a browsable archive.",
        result:
          "Visitors could inspect more work, faster, without getting trapped in a flat gallery.",
        rationale:
          "This section directly influenced the archive-driven logic now being used in the new site.",
        image: "/projects/portfolio/projects.png",
        alt: "Previous portfolio projects section with cards and project statistics",
        pins: [
          { label: "Project stats", x: "52%", y: "28%" },
          { label: "Featured work grid", x: "49%", y: "68%" },
          { label: "Detail modal trigger", x: "60%", y: "88%" },
        ],
      },
      {
        id: "04",
        stage: "Conversion",
        title: "The site needed to finish with a real contact path.",
        summary:
          "A portfolio without a clear conversion layer turns interest into friction.",
        decision:
          "Formspree form handling, direct contact details, and social links were all surfaced in the final section.",
        result:
          "The site could act as a usable lead-generation tool instead of a passive gallery.",
        rationale:
          "This is the functional line connecting the old portfolio to the new high-ticket positioning.",
        image: "/projects/portfolio/contact.png",
        alt: "Previous portfolio contact section with form and contact information cards",
        pins: [
          { label: "Contact details", x: "29%", y: "42%" },
          { label: "Conversion form", x: "67%", y: "52%" },
          { label: "Social proof paths", x: "29%", y: "76%" },
        ],
      },
    ],
  },
];

export const profileLedger = {
  summary:
    "High-performing frontend developer with a strong foundation in JavaScript and React, recognized for delivering scalable, user-centric web solutions for international clients. Expert at translating complex design requirements into responsive, high-performance interfaces.",
  cards: [
    {
      title: "Current Delivery",
      meta: "Khamsat / Remote / Oct 2024 - Present",
      points: [
        "Spearheaded end-to-end delivery of custom web solutions for international clients.",
        "Maintained repeated 5-star ratings and 100% satisfaction.",
        "Reduced average project turnaround time by 20% while protecting code quality.",
      ],
    },
    {
      title: "Team Environment",
      meta: "Codveda Technologies / Apr 2025 - May 2025",
      points: [
        "Engineered modular React components from Figma mockups.",
        "Worked in Agile with daily standups and code reviews.",
        "Handled Git-based collaboration and stable production deployment flow.",
      ],
    },
    {
      title: "Training",
      meta: "DEPI / Rowad Masr / Nov 2024 - May 2025",
      points: [
        "Completed a 6-month React Frontend Development track.",
        "Covered advanced React, ES6+, and modern development workflows.",
      ],
    },
    {
      title: "Education and Language",
      meta: "Damanhour University / 2023 - 2027",
      points: [
        "Bachelor's Degree in Business Administration, English Section.",
        "Arabic: Native.",
        "English: Professional working proficiency.",
      ],
    },
  ],
  stack: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Tailwind CSS",
    "Responsive Web Design",
    "Git",
    "GitHub",
    "npm",
    "Vercel",
    "Cloudinary",
    "RESTful APIs",
    "Node.js (Learning)",
  ],
};

export const operatingSystem = [
  {
    title: "Hierarchy Before Decoration",
    description:
      "If the value proposition and next action do not land quickly, the animation budget is already wasted.",
    index: "01",
  },
  {
    title: "Motion Must Explain",
    description:
      "Movement should direct focus, reveal sequence, and support comprehension. If it only decorates, it gets cut.",
    index: "02",
  },
  {
    title: "Performance Is Part of Luxury",
    description:
      "A premium interface has to feel fast and stable. Load quality is part of the brand signal, not just a technical metric.",
    index: "03",
  },
  {
    title: "Systems Survive Revisions",
    description:
      "Client work changes under pressure. The design only counts if the component logic still holds after feedback and expansion.",
    index: "04",
  },
];

export const testimonials = [
  {
    name: "Khaled F.",
    source: "Khamsat Client",
    quote:
      "تصميم portfolio احترافي بتقنيات حديثة لعرض مهاراتك بشكل مميز. جودة الخدمة والتواصل والتسليم كلها ممتازة.",
    direction: "rtl" as const,
  },
  {
    name: "Ahmed A.",
    source: "Khamsat Client",
    quote:
      "هذا ثاني تعامل لي مع الفنان الأستاذ فهمي. وهو يستحق لقب الأستاذية بجدارة. لن اكثر في الإطراء، ولكن لكل من يبحث عن التميز في عالم شديد التنافسية فسيجده لدى هذا الفنان.",
    direction: "rtl" as const,
  },
  {
    name: "Fadia A.",
    source: "Direct Client",
    quote:
      "I had a great experience working with him. He created a well-designed and professional portfolio, stayed responsive, and delivered with care.",
    direction: "ltr" as const,
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: "fahmyomara.eng@gmail.com",
    href: "mailto:fahmyomara.eng@gmail.com",
  },
  {
    label: "Phone",
    value: "+20 1012663485",
    href: "tel:+201012663485",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/fahmy-omara",
    href: "https://linkedin.com/in/fahmy-omara",
  },
  {
    label: "GitHub",
    value: "github.com/FahmyInTech",
    href: "https://github.com/FahmyInTech",
  },
];
