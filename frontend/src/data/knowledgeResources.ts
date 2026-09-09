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
  {
    id: "welcome-procedure",
    title: "Welcom Procedure",
    description:
      "A guide to standard operating procedures designed to support compliance with industry regulations.",
    icon: GitBranch,
    href: "/knowledge-resources/welcome-procedure",
  },
  {
    id: "brand-standards",
    title: "Brand Standards",
    description:
      "Standards for using core brand elements while ensuring consistency and effectiveness.",
    icon: ClipboardCheck,
    href: "/knowledge-resources/brand-standards",
  },
  {
    id: "idm-policy",
    title: "IDM Policy",
    description:
      "Information on IT security and service delivery for regulatory and organizational security requirements.",
    icon: FileCheck2,
    href: "/knowledge-resources/idm-policy",
  },
  {
    id: "compliance-management",
    title: "Compliance Management",
    description:
      "An integrated framework covering regulatory requirements, policies, procedures, and compliance programs.",
    icon: Scale,
    href: "/knowledge-resources/compliance-management",
  },
  {
    id: "reports-and-analytics",
    title: "Reports and Analytics",
    description:
      "Access reports and insights to support informed business decisions.",
    icon: BarChart3,
    href: "/knowledge-resources/reports-and-analytics",
  },
  {
    id: "knowledge-archive",
    title: "Knowledge Archive",
    description:
      "Explore organizational knowledge and resources through a centralized archive.",
    icon: Archive,
    href: "/knowledge-resources/knowledge-archive",
  },
];
