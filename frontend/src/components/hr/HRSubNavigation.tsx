import { motion } from "framer-motion";

export function HRSubNavigation() {
  return <nav aria-label="HR Services sections" className="border-b border-gray-200 bg-white"><div className="mx-auto flex max-w-[1400px] gap-8 overflow-x-auto px-6 xl:px-10"><motion.a href="#policies" whileHover={{ y: -2 }} className="shrink-0 border-b-2 border-[#C79A43] px-1 py-5 text-sm font-semibold text-[#222]">HR Policies</motion.a><motion.a href="#conduct" whileHover={{ y: -2 }} className="shrink-0 border-b-2 border-transparent px-1 py-5 text-sm font-semibold text-gray-500 transition-colors hover:border-[#C79A43] hover:text-[#A57C35]">Code of Conduct</motion.a></div></nav>;
}
