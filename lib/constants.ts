import {
  Terminal,
  Monitor,
  ArrowRight,
  Database,
  Sun,
  Code2,
  Gamepad2,
  Film,
  BookOpen,
  PenLine,
  Activity,
  Mountain,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import {
  PiTrophy,
  PiBriefcase,
  PiCode,
  PiStarFour,
  PiEnvelopeSimple,
} from "react-icons/pi";
import type { ElementType } from "react";

export interface NavLinkType {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLinkType[] = [
  { href: "/", label: "~/home" },
  { href: "/about", label: "~/root" },
  { href: "/build", label: "~/builds" },
  { href: "/contact", label: "~/ping" },
];

export interface ExperienceType {
  icon: ElementType;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  link: { text: string; href: string } | null;
}

export const EXPERIENCES: ExperienceType[] = [
  {
    icon: PiCode,
    year: "2025",
    title: "freelance web developer",
    subtitle: "ongoing",
    description:
      "partnering closely with founders and businesses to architect full-stack web applications. managing end-to-end lifecycles, from initial ui/ux system design to robust next.js frontend execution, backed by scalable architectures.",
    link: null,
  },
  {
    icon: PiBriefcase,
    year: "2025",
    title: "software development intern",
    subtitle: "stardom",
    description:
      "architected an ssr-first admin cms using next.js and appwrite, eliminating static redeploy cycles. bypassed serverless payload limits via direct client-to-storage media uploads, and heavily optimized backend bandwidth while enforcing strict mime-type validation.",
    link: null,
  },
  {
    icon: PiTrophy,
    year: "2024",
    title: "google genai exchange hackathon",
    subtitle: "winner, network 18 track · google & devfolio",
    description:
      "won first place in the network 18 track. developed an innovative solution to combat video misinformation by engineering a robust media attribution and tampering detection system, running multiple pre-trained models concurrently for real-time analysis.",
    link: { text: "view credify", href: "/build/credify" },
  },
];

export interface EducationType {
  degree: string;
  institution: string;
  grade: string;
  period: string;
  current: boolean;
  blurb: string;
}

export const EDUCATION: EducationType[] = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution:
      "Chandigarh College of Engineering & Technology · Panjab University",
    grade: "CGPA: 8.04",
    period: "2021 – 2025",
    current: true,
    blurb:
      "survived the lectures, thrived in the hackathons. my best code was definitely written outside the syllabus.",
  },
  {
    degree: "12th Grade · Science Stream",
    institution: "Ryan International School, Chandigarh · CBSE",
    grade: "92.4%",
    period: "2018–2020",
    current: false,
    blurb:
      "the pcm grind. pushed through the syllabus, unknowingly building the raw logic i'd need for everything that came next.",
  },
  {
    degree: "10th Grade",
    institution: "Ryan International School, Chandigarh · CBSE",
    grade: "95%",
    period: "2017–2018",
    current: false,
    blurb:
      "the starter pack era. decent grades, but spent way too much time breaking and fixing the home pc.",
  },
];

export interface HobbyType {
  icon: ElementType;
  name: string;
  description: string;
  tags: string[];
}

export const HOBBIES: HobbyType[] = [
  {
    icon: PiTrophy,
    name: "football",
    description: "watching, arguing tactics, praying barça holds it together",
    tags: ["la liga", "premier league", "tactics"],
  },
  {
    icon: Gamepad2,
    name: "gaming",
    description: "the other debugging session",
    tags: ["strategy", "open world"],
  },
  {
    icon: Film,
    name: "cinema",
    description:
      "hacksaw ridge, interstellar, the dark knight, taste certified",
    tags: ["drama", "sci-fi", "thriller"],
  },
  {
    icon: BookOpen,
    name: "reading",
    description: "inputs that shape the outputs",
    tags: ["tech", "fiction", "philosophy"],
  },
  {
    icon: PiStarFour,
    name: "astronomy",
    description: "scale that makes your problems feel tiny",
    tags: ["cosmos", "physics"],
  },
  {
    icon: PenLine,
    name: "sketching",
    description: "thinking with a pen",
    tags: ["design", "creative"],
  },
  {
    icon: Activity,
    name: "volleyball",
    description: "the non-digital sport",
    tags: ["outdoor", "sports"],
  },
  {
    icon: Mountain,
    name: "trekking",
    description: "touching grass, literally",
    tags: ["outdoor", "nature"],
  },
];

export interface SkillChipType {
  label: string;
  hi: boolean;
}

export interface SkillRowType {
  icon: ElementType;
  name: string;
  hint: string;
  chips: SkillChipType[];
}

export const SKILL_ROWS: SkillRowType[] = [
  {
    icon: Terminal,
    name: "Languages",
    hint: "foundation",
    chips: [
      { label: "Python", hi: true },
      { label: "TypeScript", hi: true },
      { label: "JavaScript", hi: true },
      { label: "SQL", hi: false },
      { label: "C / C++", hi: false },
    ],
  },
  {
    icon: Monitor,
    name: "Frontend",
    hint: "what users see",
    chips: [
      { label: "Next.js", hi: true },
      { label: "React", hi: true },
      { label: "Tailwind CSS", hi: true },
      { label: "Framer Motion", hi: false },
    ],
  },
  {
    icon: ArrowRight,
    name: "Backend & APIs",
    hint: "what powers it",
    chips: [
      { label: "FastAPI", hi: true },
      { label: "Flask", hi: true },
      { label: "Express.js", hi: false },
      { label: "Appwrite", hi: false },
      { label: "Firebase", hi: false },
      { label: "Clerk", hi: false },
      { label: "Stripe", hi: false },
    ],
  },
  {
    icon: Database,
    name: "Data & Storage",
    hint: "persistence layer",
    chips: [
      { label: "PostgreSQL", hi: true },
      { label: "MongoDB", hi: true },
      { label: "Pinecone", hi: true },
      { label: "Redis", hi: false },
      { label: "Supabase", hi: false },
    ],
  },
  {
    icon: Sun,
    name: "AI / ML",
    hint: "intelligence",
    chips: [
      { label: "TensorFlow", hi: true },
      { label: "Scikit-learn", hi: true },
      { label: "Keras", hi: false },
      { label: "Pandas", hi: false },
      { label: "NumPy", hi: false },
      { label: "Matplotlib", hi: false },
      { label: "Gemini API", hi: false },
    ],
  },
  {
    icon: Code2,
    name: "DevOps & Tooling",
    hint: "ship it",
    chips: [
      { label: "Docker", hi: true },
      { label: "Git / GitHub", hi: true },
      { label: "AWS", hi: false },
      { label: "Vercel", hi: false },
      { label: "Linux / Unix", hi: false },
      { label: "VS Code", hi: false },
      { label: "PowerShell", hi: false },
    ],
  },
];

export interface SkillStepType {
  philosophy: string;
  description: string;
  chips: string[];
  label: string;
}

export const SKILL_STEPS: SkillStepType[] = [
  {
    philosophy: "it all starts with the right language.",
    description:
      "the ones i actually think in. python for ai and scripting, typescript/js for the web side of everything.",
    chips: ["Python", "TypeScript", "JavaScript", "SQL", "C / C++"],
    label: "languages",
  },
  {
    philosophy: "if the interface needs explaining, it's broken.",
    description:
      "i obsess over the small stuff so users don't have to think. pixel-level attention, smooth interactions.",
    chips: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    label: "frontend",
  },
  {
    philosophy: "fast apis don't need apologies.",
    description:
      "quiet, reliable, no drama. i pick the right tool rather than the popular one.",
    chips: [
      "FastAPI",
      "Flask",
      "Express.js",
      "Appwrite",
      "Firebase",
      "Clerk",
      "Stripe",
    ],
    label: "backend & apis",
  },
  {
    philosophy: "data that isn't structured isn't useful.",
    description:
      "relational or not, structure it right from the start. lately deep in vector search and rag.",
    chips: ["PostgreSQL", "MongoDB", "Pinecone", "Redis", "Supabase"],
    label: "data & storage",
  },
  {
    philosophy: "real ml. from training to deployment.",
    description:
      "shipped actual ai-native apps, not just wrappers. rag pipelines, model integrations. done the work.",
    chips: [
      "TensorFlow",
      "Scikit-learn",
      "Keras",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Gemini API",
    ],
    label: "ai / ml",
  },
];

export interface SnapshotType {
  label: string;
  value: string;
}

export const SNAPSHOTS: SnapshotType[] = [
  { label: "building", value: "something new" },
  { label: "into lately", value: "agents & llm tooling" },
  { label: "fueled by", value: "football & late nights" },
];

export interface ContactLinkType {
  icon: ElementType;
  label: string;
  value: string;
  href: string;
}

export const CONTACT_LINKS: ContactLinkType[] = [
  {
    icon: Github,
    label: "github",
    value: "Garvit-Nag",
    href: "https://github.com/Garvit-Nag",
  },
  {
    icon: PiEnvelopeSimple,
    label: "email",
    value: "garvit1505@gmail.com",
    href: "mailto:garvit1505@gmail.com",
  },
  {
    icon: Linkedin,
    label: "linkedin",
    value: "garvit-nag",
    href: "https://linkedin.com/in/garvit-nag",
  },
  {
    icon: Instagram,
    label: "instagram",
    value: "@garwiitt",
    href: "https://instagram.com/garwiitt",
  },
];
