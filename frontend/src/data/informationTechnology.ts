import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  ClipboardList,
  Cloud,
  FileText,
  FolderKanban,
  Headphones,
  Laptop,
  Lightbulb,
  MessageSquare,
  Network,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

export type ITService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ITResource = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ITUpdate = {
  date: string;
  month: string;
  title: string;
  description: string;
};

export const itServices: ITService[] = [
  { title: "IT Infrastructure", description: "Reliable technology infrastructure supporting seamless business operations.", icon: Network },
  { title: "Digital Workplace", description: "Technology solutions that empower colleagues to collaborate, communicate and work efficiently.", icon: Laptop },
  { title: "Cyber Security", description: "Security practices and technologies designed to protect information, systems and digital assets.", icon: ShieldCheck },
  { title: "Applications & Systems", description: "Enterprise applications and systems that support business processes and operational efficiency.", icon: Boxes },
  { title: "Data & Analytics", description: "Technology-enabled insights that help teams make informed and effective business decisions.", icon: BarChart3 },
  { title: "IT Support", description: "Technology assistance and support for colleagues across the organisation.", icon: Headphones },
];

export const itFocusAreas = [
  { number: "01", title: "Connect", description: "Creating seamless digital connections across our organisation.", icon: Cloud },
  { number: "02", title: "Protect", description: "Keeping information, systems and digital assets secure.", icon: ShieldCheck },
  { number: "03", title: "Innovate", description: "Using technology to continuously improve the way we work.", icon: Lightbulb },
];

export const itResources: ITResource[] = [
  { title: "IT Policies", description: "Guidance for working securely and responsibly with technology.", icon: FileText },
  { title: "IT Applications", description: "Find the business applications and systems available to you.", icon: PanelsTopLeft },
  { title: "Knowledge Centre", description: "Practical information about IT products, services and trends.", icon: BookOpen },
  { title: "User Guides", description: "Step-by-step support for everyday technology needs.", icon: Search },
  { title: "IT Projects", description: "Explore current technology initiatives across ITC Hotels.", icon: FolderKanban },
  { title: "Forms & Requisitions", description: "Access requests and forms for IT services.", icon: ClipboardList },
];

export const itUpdates: ITUpdate[] = [
  { date: "01", month: "SEP", title: "Technology Updates", description: "Stay updated with the latest technology initiatives and developments." },
  { date: "28", month: "AUG", title: "Security Awareness", description: "Important information and reminders for maintaining digital security." },
  { date: "21", month: "AUG", title: "Digital Workplace", description: "Discover new tools and improvements across the digital workplace." },
];

export const legacyITLinks = [
  { title: "Message Boards", description: "Online discussion forums for IT.", icon: MessageSquare },
  { title: "Groups", description: "Work-groups for discussion forums.", icon: Users },
  { title: "CITPC", description: "Approvals for rates of IT software, hardware and services.", icon: BriefcaseBusiness },
];
