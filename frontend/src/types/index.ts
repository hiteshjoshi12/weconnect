import type { LucideIcon } from "lucide-react";

export interface KnowledgeResource {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;                  // For routing
  accentColor?: string;          // Useful for dynamic hover states or gradients (e.g., "#C79A43")
}

export interface RecentKnowledge {
  id: string;
  label: string;                 // e.g., "Brand Standards", "IDM Policy"
  title: string;
  description: string;
  date: string;
  
  // Added for the modern UI cards:
  author?: string;               // E.g., "Sanjay Bose"
  image?: string;                // URL for the card thumbnails
  readTime?: string;             // e.g., "5 min read"
  isFeatured?: boolean;          // To easily filter items for hero sections
}

// You can also export your category types here for the nav bar we just built:
export interface KnowledgeCategory {
  label: string;
  icon: LucideIcon;
}