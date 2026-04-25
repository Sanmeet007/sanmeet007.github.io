export interface Project {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  stack: string[];
  github?: string;
  live?: string;
  fdroid?: string;
  featured?: boolean;
  image?: string;
  confidential?: boolean;
  description: string;
  npm?: string;
}

export const projects: Project[] = [
  {
    slug: "logger",
    name: "Logger",
    tagline: "open-source, privacy-first analytics",
    year: "2022",
    stack: ["Dart", "Flutter", "Kotlin", "FL Charts", "Call Logs"],
    github: "https://github.com/Sanmeet007/logger",
    fdroid: "https://f-droid.org/en/packages/com.logger.app/",
    featured: true,
    image: "/projects/logger.png",
    description:
      "a privacy-first android application engineered for secure local call log analysis and management. built with flutter and kotlin native integrations, it delivers advanced call summarization, interactive visualizations, and seamless csv/json import-export capabilities. with complete on-device data processing and multilingual support across 15+ languages, it ensures global accessibility while maintaining user privacy and performance.",
  },
  {
    slug: "inkscribe",
    name: "Inkscribe",
    tagline: "scalable content platform engineering",
    year: "2024",
    stack: [
      "NextJs",
      "JavaScript",
      "MySQL",
      "Custom ORM",
      "MUIv5",
      "Cloudinary",
      "EJS",
    ],
    live: "https://inkscrib-azure.vercel.app",
    featured: true,
    image: "/projects/inkscribe.png",
    description:
      "a scalable full-stack blogging platform engineered for modern content creation and management. built with a custom orm for efficient query handling and flexible schema design, it features role-based dashboards for admins, moderators, publishers, and subscribers. integrated ai-powered functionalities such as personalized content recommendations, sentiment-based comment moderation, and text-to-speech accessibility enhance engagement, accessibility, and operational efficiency.",
  },
  {
    slug: "transcript-chatbot",
    name: "Transcripty",
    tagline: "conversational insights from video transcripts",
    year: "2026",
    stack: ["FastAPI", "RAG", "Gemini API", "Chroma DB", "HuggingFace"],
    github: "https://github.com/Sanmeet007/transcript-chatbot",
    image: "/projects/transcripty.png",
    description:
      "a rag-powered conversational video assistant that ingests youtube transcripts and enables users to ask natural language questions about video content. built using gemini for response generation, langchain for orchestration, and chromadb for semantic retrieval—delivering fast, context-aware, human-like answers with memory-efficient vector search and multi-turn conversational support.",
  },
  {
    slug: "visionate",
    name: "Visionate",
    tagline: "accessibility through computer vision",
    year: "2025",
    stack: [
      "NextJs",
      "TypeScript",
      "FastAPI",
      "Python",
      "PyTorch",
      "Redis",
      "Razorpay",
    ],
    github: "https://github.com/Sanmeet007/visionate",
    image: "/projects/visionate.png",
    description:
      "chrome extension that enhances web accessibility by automatically generating ai-powered captions for images lacking alt text. it identifies such images on any webpage and delivers meaningful, context-aware descriptions in real time, backed by a scalable next.js and python-powered infrastructure",
  },
  {
    slug: "grid-rush",
    name: "Grid Rush",
    tagline: "real-time multi-grid puzzle solving",
    year: "2025",
    stack: ["ReactJs", "JavaScript", "Heuristic Algorithm"],
    github: "https://github.com/Sanmeet007/ai-game",
    live: "https://sanmeet007.github.io/ai-game/",
    image: "/projects/grid-rush.png",
    description:
      "a browser-based sliding puzzle game featuring real-time 3x3, 4x4, and 5x5 solvers powered by the a algorithm. built with react, it offers dynamic difficulty levels, intelligent move optimization, and local performance tracking for a competitive puzzle-solving experience",
  },

  {
    slug: "planetry",
    name: "Planetry",
    tagline: "solar system weight analytics",
    year: "2022",
    stack: ["NextJs", "TypeScript", "MongoDB", "Cloudinary"],
    github: "https://github.com/Sanmeet007/planetry",
    live: "https://sanmeet007.github.io/planetry/",
    image: "/projects/planetry.png",
    description:
      "an interactive planetary weight calculator that lets users explore how gravity affects their weight across the solar system. built to combine fun with learning, it delivers real-time weight calculations, detailed planetary information, and engaging visual insights to create an educational and immersive user experience while showcasing the effects of varying gravitational forces beyond earth.",
  },
  {
    slug: "simple-express",
    name: "Simple Express",
    tagline: "custom backend framework architecture",
    year: "2023",
    stack: ["NodeJs", "JavaScript"],
    github: "https://github.com/Sanmeet007/simple-express",
    npm: "https://www.npmjs.com/package/@sanmeet007/simple-express",
    image: "/projects/simple-express.png",
    description:
      "a beginner-friendly node.js framework inspired by express.js, designed with simplicity and clean architecture in mind. it features built-in body parsing, file extraction, streamlined middleware handling, and ejs-based server-side rendering—making it ideal for learning backend fundamentals while building web apps and apis. powered by lightweight dependencies like busboy for file handling and ejs for dynamic views.",
  },
  {
    slug: "pacman",
    name: "Pacman",
    tagline: "reconstructing retro logic, one frame at a time",
    year: "2023",
    stack: ["Java", "Swing"],
    github: "https://github.com/Sanmeet007/pacman",
    image: "/projects/pacman.png",
    description:
      "a high-fidelity recreation of the 1980 arcade classic, featuring multithreaded ghost movement driven by hardcoded matrix logic, real-time thread simulation, frame-perfect collision detection, authentic movement mechanics, synchronized sound effects, and retro gameplay logic built within the java swing framework.",
  },

  {
    slug: "pyrix",
    name: "Pyrix",
    tagline: "cross-platform streaming, built for performance",
    year: "2022",
    stack: ["Dart", "Flutter", "Firebase", "Leanback"],
    confidential: true,
    image: "/projects/pyrix.png",
    description:
      "an android streaming platform built for all-in-one entertainment—featuring movies, series, anime, and more. engineered with flutter and android leanback support, with a custom-built video player implementation to ensure smooth playback across various android platforms and tv devices",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
