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
  PiGithubLogo,
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
    year: "2026",
    title: "AI Engineer Intern",
    subtitle: "ongoing - innofarms.ai",
    description:
      "partnering with stakeholders to architect multi-agentic ai systems. managing end-to-end lifecycles, from fine-tuning llms to robust fastapi backend execution, backed by scalable python and langgraph architectures.",
    link: null,
  },
  {
    icon: PiGithubLogo,
    year: "2025",
    title: "open source developer",
    subtitle: "logger",
    description:
      "built and maintaining a privacy-first android app for local call log analysis managing everything from flutter and kotlin native integration to complex data visualization, with secure on-device processing and support for 15+ languages worldwid.",
    link: {
      text: "view logger",
      href: "/build/logger",
    },
  },
  {
    icon: PiTrophy,
    year: "2024",
    title: "founder & developer",
    subtitle: "InkScribe / self-employed / independent project",
    description:
      "engineered a scalable blogging platform with a custom orm, role-based dashboards, sentiment moderation, personalized recommendations, and text-to-speech accessibility.",
    link: { text: "view inkscribe", href: "/build/inkscribe" },
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
    degree: "Master of Computer Applications (MCA)",
    institution: "Thapar Institute of Engineering & Technology, Patiala",
    grade: "CGPA: 9.6",
    period: "2024 – 2026",
    current: true,
    blurb:
      "survived the lectures, maintained the merit scholarship, and somehow put more logic into logs than into my own life",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Chandigarh Group of Colleges (CGC), Landran",
    grade: "CGPA: 8.4",
    period: "2024 – 2026",
    current: false,
    blurb:
      "graduated with distinction yeah ! seriously, thrived in hackathons and long answers; my real growth {coding_one} happened off the syllabus.",
  },
  {
    degree: "12th Grade · Science Stream",
    institution: "Ryan International School, Chandigarh · CBSE",
    grade: "Classified",
    period: "2018–2020",
    current: false,
    blurb:
      "the PCB grind, only to realize i was secretly training my logic for debugging code instead of becoming a doctor",
  },
  {
    degree: "10th Grade",
    institution: "Ryan International School, Chandigarh · CBSE",
    grade: "85%",
    period: "2017–2018",
    current: false,
    blurb:
      "the starter pack era. decent grades, questionable screwdriver access, and a laptop that didn’t survive my first cleaning",
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
    name: "Chess",
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
      { label: "JavaScript", hi: true },
      { label: "Dart", hi: true },
      { label: "SQL", hi: false },
      { label: "C / C++", hi: false },
    ],
  },
  {
    icon: Monitor,
    name: "Frontend",
    hint: "what users see",
    chips: [
      { label: "Flutter", hi: true },
      { label: "Next.js", hi: true },
      { label: "React", hi: true },
      { label: "MUI", hi: true },
      { label: "Tailwind CSS", hi: false },
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
      { label: "Langgraph", hi: true },
      { label: "Express.js", hi: false },
      { label: "Firebase", hi: false },
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
      { label: "MySQL", hi: false },
      { label: "CosmoDB", hi: false },
      { label: "Redis", hi: false },
    ],
  },
  {
    icon: Sun,
    name: "AI / ML",
    hint: "intelligence",
    chips: [
      { label: "Torch", hi: true },
      { label: "TensorFlow", hi: true },
      { label: "Scikit-learn", hi: true },
      { label: "Keras", hi: false },
      { label: "Pandas", hi: false },
      { label: "NumPy", hi: false },
      { label: "Matplotlib", hi: false },
      { label: "Gemini API", hi: false },
      { label: "Groq API", hi: false },
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
      { label: "Azure", hi: false },
      { label: "Vercel", hi: false },
      { label: "Linux / Unix", hi: false },
      { label: "VS Code", hi: false },
      { label: "Bash", hi: false },
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
    value: "Sanmeet007",
    href: "https://github.com/Sanmeet007",
  },
  {
    icon: PiEnvelopeSimple,
    label: "email",
    value: "ssanmeet007@gmail.com",
    href: "mailto:ssanmeet007@gmail.com",
  },
  {
    icon: Linkedin,
    label: "linkedin",
    value: "sanmeet007",
    href: "https://linkedin.com/in/sanmeet007",
  },
];

export const CONTACT_CONFIG = {
  BASIN_URL: "https://usebasin.com/f/05300f711df3",
  SCHEDULING_URL: "https://cal.com/sanmeet007/30min",
};
