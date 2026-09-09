import type { LucideIcon } from "lucide-react";

export interface KnowledgeResource {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface RecentKnowledge {
  label: string;
  title: string;
  description: string;
  date: string;
}
