import {
  Archive,
  BarChart3,
  ClipboardCheck,
  FileCheck2,
  GitBranch,
  Scale,
} from "lucide-react";
import type { KnowledgeResource } from "../types";

export const knowledgeResources: KnowledgeResource[] = [
  { title: "Welcom Procedure", description: "A guide to standard operating procedures designed to support compliance with industry regulations.", icon: GitBranch },
  { title: "Brand Standards", description: "Standards for using core brand elements while ensuring consistency and effectiveness.", icon: ClipboardCheck },
  { title: "IDM Policy", description: "Information on IT security and service delivery for regulatory and organizational security requirements.", icon: FileCheck2 },
  { title: "Compliance Management", description: "An integrated framework covering regulatory requirements, policies, procedures, and compliance programs.", icon: Scale },
  { title: "Reports and Analytics", description: "Access reports and insights to support informed business decisions.", icon: BarChart3 },
  { title: "Knowledge Archive", description: "Explore organizational knowledge and resources through a centralized archive.", icon: Archive },
];
