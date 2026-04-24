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
  description: string;
}

export const projects: Project[] = [
  {
    slug: "logger",
    name: "Logger",
    tagline: "hackathon-winning media verification platform",
    year: "2024",
    stack: [
      "NextJs",
      "TypeScript",
      "FastAPI",
      "Python",
      "Gemini API",
      "Appwrite",
    ],
    github: "https://github.com/Sanmeet007/logger",
    fdroid: "https://f-droid.org/en/packages/com.logger.app/",
    featured: true,
    image: "/projects/logger.png",
    description:
      "built during the gen ai exchange hackathon (won the network 18 track). tackles misinformation through creator verification with secure identity auth, blockchain-inspired hashing for tamper-proof content attribution, and advanced forgery detection via machine learning models. integrates google gemini for real-time ai-powered fact-checking.",
  },
  {
    slug: "inkscribe",
    name: "Inkscribe",
    tagline: "query any github repository in plain english",
    year: "2025",
    stack: [
      "NextJs",
      "TypeScript",
      "FastAPI",
      "Python",
      "Pinecone",
      "PostgreSQL",
      "Appwrite",
      "Stripe",
    ],
    live: "https://inkscrib-azure.vercel.app",
    featured: true,
    image: "/projects/inkscribe.png",
    description:
      "a hybrid rag system for code intelligence. upload a github url and the backend clones it, chunks the code, generates 384-dim embeddings locally via sentencetransformer (all-minilm-l6-v2), stores full content in postgresql (neon), and indexes vectors in pinecone with repo-scoped namespaces. chat queries hit pinecone for top-5 semantic matches, join against postgresql for full code context, then feed into gemini 2.0 flash for cited answers. features appwrite auth, stripe subscriptions with tiered quotas (10/30 repos per month), and conversation history with json citations.",
  },

  {
    slug: "transcript-chatbot",
    name: "Transcripty",
    tagline: "ai-powered conversational football assistant",
    year: "2026",
    stack: ["NextJs", "TypeScript", "Gemini API", "Supabase"],
    github: "https://github.com/Sanmeet007/transcript-chatbot",
    live: "https://maestro-opal-psi.vercel.app",
    image: "/projects/transcripty.png",
    description:
      "an llm-orchestrated football assistant with 19 function declarations. users ask questions in natural language; gemini 2.5 flash decides which live-data apis to call across football-data.org, api-football, thesportsdb, and newsapi, executes them concurrently via promise.all, and returns combined text + visualization responses through 19 typed ui components. features in-memory ttl caching (30s-3600s), fuzzy team name resolution with ufd normalization, 3-tier personalized fixture recommendations, and multi-turn conversations stored in supabase.",
  },
  {
    slug: "visionate",
    name: "Visionate",
    tagline: "full-stack task manager with jwt auth and dark ui",
    year: "2026",
    stack: [
      "React",
      "JavaScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Supabase",
    ],
    github: "https://github.com/Sanmeet007/Taskflow",
    live: "https://taskflow-delta-three.vercel.app",
    image: "/projects/visionate.png",
    description:
      "a full-stack todo application with 14 restful endpoints across 4 modular route handlers. features jwt auth via oauth2 password flow with hs256 tokens (20-min ttl), bcrypt password hashing, role-based access control (user vs admin), per-user data isolation via owner_id constraints, alembic database migrations, and a three.js pixelsnow webgl background animation. built with fastapi backend, react frontend, and postgresql on supabase.",
  },
  {
    slug: "pacman",
    name: "Pacman",
    tagline: "minimal weather app with multi-provider fallback",
    year: "2026",
    stack: ["React", "TypeScript", "Vite", "Zustand"],
    github: "https://github.com/Sanmeet007/pacman",
    image: "/projects/pacman.png",
    description:
      "a weather dashboard with 3-provider sequential fallback (openweathermap, weatherapi, open-meteo) and freshness-aware result selection (30-min threshold). each provider wrapped in isolated adapter with canonical schema translation. features dual geocoding (owm primary, open-meteo keyless fallback), react query caching (5-min stale, 10-min refetch), zustand state persistence, 8s request timeouts via abortcontroller, and theme flicker prevention with inline script.",
  },
  {
    slug: "planetry",
    name: "Planetry",
    tagline: "event discovery platform for dev communities",
    year: "2026",
    stack: ["NextJs", "TypeScript", "MongoDB", "Cloudinary"],
    github: "https://github.com/Sanmeet007/planetry",
    live: "https://sanmeet007.github.io/planetry/",
    image: "/projects/planetry.png",
    description:
      "a platform for discovering developer events, hackathons, and conferences. features a public event catalog with seo-friendly slug-based routing, an admin dashboard with full crud behind cookie-based session middleware, tag-based related event recommendations, email-only booking with compound unique index enforcement, cloudinary streaming image uploads, and posthog analytics instrumentation across 6 tracked events.",
  },
  {
    slug: "grid-rush",
    name: "Grid Rush",
    tagline: "ai-powered medical symptom analysis platform",
    year: "2025",
    stack: [
      "NextJs",
      "TypeScript",
      "FastAPI",
      "Python",
      "MongoDB",
      "Clerk",
      "Stripe",
    ],
    github: "https://github.com/Sanmeet007/ai-game",
    live: "https://sanmeet007.github.io/ai-game/",
    image: "/projects/grid-rush.png",
    description:
      "a medical symptom analysis platform with two analysis modes: holistic health assessment and anatomical precision analysis via body region mapping. uses gemini 2.5-flash with structured json schema injection for 10+ nested response fields. features redis-backed daily rate limiting (5/day free tier with midnight utc auto-expiry), stripe subscription management with webhook sync to mongodb, clerk auth, and a 3-tier feature gating system (basic/professional/clinical).",
  },
  {
    slug: "secure",
    name: "Secure",
    tagline: "music recommender using clustering algorithms",
    year: "2024",
    stack: ["NextJs", "TypeScript", "FastAPI", "Python", "scikit-learn"],
    github: "https://github.com/Sanmeet007/Revibe-Remastered",
    live: "https://revibe-audio.vercel.app",
    image: "/projects/secure.png",
    description:
      "an ml-powered music recommendation engine over a 170k+ song dataset. uses k-means clustering as a pre-filtering mechanism to reduce the search space from 170k songs to cluster-local subsets, then ranks by euclidean distance across 9 audio features (acousticness, danceability, energy, etc). integrates itunes api for 30-second audio previews and metadata enrichment. features client-side session caching, 300ms debounced search, and a singleton audio playback controller.",
  },
  {
    slug: "cosmic-share",
    name: "Cosmic Share",
    tagline: "file sharing with secure, auto-expiring links",
    year: "2024",
    stack: ["NextJs", "TypeScript", "FastAPI", "Python", "Appwrite"],
    github: "https://github.com/Sanmeet007/CosmicShare",
    live: "https://cosmic-share.vercel.app",
    image: "/projects/cosmic.png",
    description:
      "an anonymous file sharing platform with auto-expiring links (30 seconds to 1 week). supports 15 file types up to 50mb. uses appwrite storage with expiration metadata encoded directly in filenames (no separate database needed). features a 1-minute apscheduler cleanup job that parses iso8601 timestamps from filenames to delete expired files, and a space-themed ui with simplex noise-driven vortex particle animation.",
  },

  {
    slug: "inklore",
    name: "InkLore",
    tagline: "ai story generator trained on custom models",
    year: "2024",
    stack: [
      "NextJs",
      "TypeScript",
      "FastAPI",
      "Python",
      "PyTorch",
      "Gemini API",
    ],
    github: "https://github.com/Sanmeet007/InkLore",
    live: "https://ink-lore.vercel.app",
    image: "/projects/inklore.png",
    description:
      "a hybrid ai story generator combining local pytorch inference with cloud-based refinement. runs a custom lightweight gpt-2 variant (4 layers, 8 heads, 256 embedding dim) for initial generation with controllable temperature (0.1-1.0), then applies a two-pass gemini refinement pipeline (grammar normalization followed by narrative polish). features unicode-safe text processing with nfkd normalization, quantized creativity slider, and character-by-character typewriter animation at 1ms per character.",
  },
  {
    slug: "sumitup",
    name: "SumItUp",
    tagline: "document summarization via nlp",
    year: "2024",
    stack: ["Python", "Streamlit", "HuggingFace"],
    github: "https://github.com/Sanmeet007/SumItUp",
    live: "https://huggingface.co/spaces/garvitcpp/Sum-it-up",
    image: "/projects/sumitup.png",
    description:
      "a document summarization tool using large language models via huggingface transformers. supports multi-format ingestion (txt, pdf via pypdf2, docx via python-docx) with configurable summary length controls (100-400 tokens, dynamic min/max). offloads inference to a remote huggingface space endpoint, keeping the streamlit frontend lightweight. features slider-based summary length control and inline file parsing with error recovery.",
  },
  {
    slug: "pmsss-portal",
    name: "PMSSS Portal",
    tagline: "scholarship application and upload management",
    year: "2024",
    stack: ["NextJs", "TypeScript", "Appwrite"],
    github: "https://github.com/binge-coder/pmsss-website",
    live: "https://pramanik.vercel.app",
    image: "/projects/pmsss.png",
    description:
      "a scholarship application portal for the prime minister's special scholarship scheme (pmsss), built for the smart india hackathon (internal winner, aicte id: 1728). streamlines document uploads and application tracking for students from jammu & kashmir and ladakh applying for undergraduate studies. features appwrite authentication, responsive design with magic ui components, and a structured application workflow.",
  },
  {
    slug: "reciperover",
    name: "Recipe Rover",
    tagline: "recipe discovery based on available ingredients",
    year: "2024",
    stack: [
      "NextJs",
      "TypeScript",
      "Flask",
      "Python",
      "MongoDB",
      "scikit-learn",
    ],
    github: "https://github.com/Sanmeet007/RecipeRover-Production",
    live: "https://recipe-rover-fun.vercel.app",
    image: "/projects/recipe.png",
    description:
      "a multi-modal recipe recommendation platform over 20k+ recipes. supports text search, food image analysis (gemini vision), and form-based filters. uses tf-idf embeddings (5k ingredient + 3k keyword features), one-hot category encoding, and 7 binary dietary flags combined into an 11k-dimension sparse matrix for cosine similarity scoring. features soft penalty-based ranking for calorie/time constraints, 5 concurrent async image scrapers with 60s timeout, and appwrite auth with mongodb search history.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
