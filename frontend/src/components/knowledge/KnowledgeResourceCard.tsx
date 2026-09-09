import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { KnowledgeResource } from "../../types";

export function KnowledgeResourceCard({ resource }: { resource: KnowledgeResource }) {
  const Icon = resource.icon;
  return (
    <motion.a href="#recent" whileHover={{ y: -3 }} transition={{ duration: 0.2 }} className="group relative flex min-h-52 flex-col border-t border-[#ddd6ca] py-6 transition-colors hover:border-[#B89045]">
      <div className="flex items-start justify-between"><Icon size={23} strokeWidth={1.5} className="text-[#B89045]" /><ArrowUpRight size={18} className="text-[#aaa39a] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#171717]" /></div>
      <h3 className="mt-8 text-xl font-medium tracking-[-0.02em] text-[#171717]">{resource.title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-[#706a62]">{resource.description}</p>
    </motion.a>
  );
}
