import type { LucideIcon } from "lucide-react";
import { BookOpen, FileCheck2, Files, FolderOpen } from "lucide-react";

export type HRItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const hrPolicies = [
  {
    title: "Code of Conduct",
    description:
      "Provides ITC Code of Conduct , that is derived from three interlinked fundamental principles, viz good corporate governance , good corporate citizenship and exemplary personal conduct",
    icon: FileCheck2,
  },
  { title: "HR Policies", description: "Cover all the HR policies", icon: Files },
] satisfies HRItem[];

export const hrResources = [
  { title: "Forms & Templates", description: "Useful forms and templates for everyday HR needs.", icon: FolderOpen },
  { title: "HR WPs", description: "Access HR work practices and supporting documents.", icon: BookOpen },
] satisfies HRItem[];

export const hrNewAdditions = [
  "ITC Hotels Preferential Rate - Signature Connections",
  "HIV and AIDS Workplace Policy",
  "Ready Reckoner - Leave and Attendance",
  "FAQs - Leave and Attendance",
];
