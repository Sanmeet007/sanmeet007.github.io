export interface Project {
  slug: string
  name: string
  tagline: string
  year: string
  category: string
  stack: string[]
  github?: string
  live?: string
  featured?: boolean
  description: string
}

export const projects: Project[] = [
  {
    slug: 'qodex',
    name: 'Qodex',
    tagline: 'ask your github repo anything in plain english.',
    year: '2025',
    category: 'ai / ml',
    stack: ['Next.js 15', 'FastAPI', 'Pinecone', 'Docker'],
    github: 'https://github.com/Garvit-Nag/qodex',
    live: 'https://qodex.vercel.app',
    featured: true,
    description: 'qodex is an ai-powered tool that lets you query your github repositories using natural language. it uses rag (retrieval-augmented generation) with pinecone vector database to understand your codebase semantically. the system indexes your repository, creates embeddings for all code files, and allows you to ask questions like "where is the authentication logic?" or "how does the payment flow work?" — getting accurate, context-aware answers instantly.'
  },
  {
    slug: 'credify',
    name: 'Credify',
    tagline: 'detecting tampered media and tracking attribution at scale.',
    year: '2024',
    category: 'ai / ml',
    stack: ['Python', 'Gemini', 'FastAPI'],
    github: 'https://github.com/Garvit-Nag/credify',
    live: 'https://credify-demo.vercel.app',
    featured: true,
    description: 'built during the gen ai exchange hackathon (google & devfolio), credify won the network 18 track. the project tackles misinformation through three core features: perceptual fingerprinting that survives format changes and compression, hierarchical content attribution tracking to trace media origins, and gemini api integration for real-time media fact enrichment. worked with a team of four to deliver a complete solution in 48 hours.'
  },
  {
    slug: 'pramanik',
    name: 'Pramanik',
    tagline: 'paperless scholarship disbursement for pmsss.',
    year: '2024',
    category: 'full-stack',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
    github: 'https://github.com/Garvit-Nag/pramanik',
    description: 'designed for the smart india hackathon (internal winner, aicte id: 1728). pramanik is a paperless scholarship disbursement platform for pmsss that automates document validation for transparent fund allocation. features include digital document verification, automated eligibility checking, real-time status tracking, and secure fund disbursement workflows. the system reduces manual processing time significantly while ensuring transparency.'
  },
  {
    slug: 'medisage',
    name: 'MediSage',
    tagline: 'ai-powered medical diagnosis assistant.',
    year: '2024',
    category: 'ai / ml',
    stack: ['Next.js', 'Python', 'Gemini', 'Medical NLP'],
    github: 'https://github.com/Garvit-Nag/medisage',
    description: 'medisage is an ai assistant that helps patients understand their symptoms through natural language. using gemini and medical nlp, it analyzes symptoms and provides contextual health information. built with privacy in mind, all data is encrypted and never stored.'
  },
  {
    slug: 'reciperover',
    name: 'RecipeRover',
    tagline: 'recipe discovery based on ingredients you have.',
    year: '2024',
    category: 'full-stack',
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Garvit-Nag/recipeRover',
    live: 'https://recipeRover.vercel.app',
    description: 'input ingredients you have on hand and discover recipes you can make. the app uses smart matching to find recipes with ingredients you already have, reducing food waste. features include nutritional info, cooking time estimates, and ingredient substitution suggestions.'
  },
  {
    slug: 'revibe',
    name: 'Revibe',
    tagline: 'music recommendation engine with mood detection.',
    year: '2024',
    category: 'ai / ml',
    stack: ['React', 'Node.js', 'Spotify API', 'ML'],
    github: 'https://github.com/Garvit-Nag/revibe',
    description: 'revibe analyzes your listening habits and mood to generate personalized music recommendations. uses spotify api and machine learning to understand music preferences and predict songs you\'ll love. features playlist generation, mood-based discovery, and social sharing.'
  },
  {
    slug: 'cosmic-share',
    name: 'Cosmic Share',
    tagline: 'decentralized file sharing with blockchain verification.',
    year: '2024',
    category: 'full-stack',
    stack: ['Next.js', 'Web3', 'IPFS', 'Ethereum'],
    github: 'https://github.com/Garvit-Nag/cosmic-share',
    description: 'a decentralized file sharing platform built on ipfs and ethereum. users can share files securely with blockchain-verified ownership and access control. features include end-to-end encryption, permanent storage options, and smart contract-based permissions.'
  },
  {
    slug: 'taskflow',
    name: 'TaskFlow',
    tagline: 'ai-powered task management with smart prioritization.',
    year: '2024',
    category: 'ai / ml',
    stack: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Garvit-Nag/taskflow',
    description: 'a task management app that uses ai to automatically prioritize and categorize tasks. features include natural language task input, smart deadline suggestions, workload balancing, and productivity analytics. the ai learns from user behavior to improve suggestions over time.'
  },
  {
    slug: 'devevent',
    name: 'DevEvent',
    tagline: 'hackathon discovery and team formation platform.',
    year: '2024',
    category: 'saas',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/Garvit-Nag/devevent',
    description: 'a platform for discovering hackathons and forming teams. developers can browse events, build profiles, and connect with teammates based on skills and interests. features include team matching algorithms, timeline tracking, and result sharing.'
  },
  {
    slug: 'inklore',
    name: 'InkLore',
    tagline: 'ai-powered blog platform with intelligent content recommendations.',
    year: '2023',
    category: 'full-stack',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'OpenAI'],
    github: 'https://github.com/Garvit-Nag/inklore',
    description: 'a blogging platform powered by ai for content recommendations and SEO optimization. writers can publish articles and reach readers interested in similar topics. features include markdown support, reading time estimates, and AI-suggested related articles.'
  },
  {
    slug: 'aodv-propt',
    name: 'AODV-PROPT',
    tagline: 'novel routing protocol for enhanced network performance.',
    year: '2024',
    category: 'research',
    stack: ['C++', 'NS3', 'Network Simulation'],
    github: 'https://github.com/Garvit-Nag/aodv-propt',
    description: 'published research (ijnrd, doi: 10.1729/journal.40670) introducing a novel routing protocol that enhances network performance through relational parameter indexing. the protocol improves upon aodv by considering multiple routing parameters simultaneously, resulting in better packet delivery ratios and reduced end-to-end delay in mobile ad-hoc networks.'
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects
  return projects.filter(p => p.category === category)
}

export const categories = ['all', 'ai / ml', 'saas', 'full-stack', 'research']
