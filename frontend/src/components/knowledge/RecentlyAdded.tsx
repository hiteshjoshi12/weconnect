import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { recentKnowledge } from "../../data/recentKnowledge";

export function RecentlyAdded() {
  return (
    <section id="recent" className="py-20 md:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="flex flex-col justify-between gap-4 border-b border-[#ddd6ca] pb-6 md:flex-row md:items-end"><div><p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9E742B]">Stay current</p><h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#171717] md:text-4xl">Recently added</h2></div><p className="max-w-sm text-sm leading-6 text-[#706a62]">Fresh guidance and useful references for the work ahead.</p></div><div className="grid gap-8 pt-8 md:grid-cols-3">{recentKnowledge.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="border-b border-[#ddd6ca] pb-7 md:border-b-0 md:border-r md:pr-7 md:last:border-r-0"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B89045]">{item.label}</p><h3 className="mt-4 text-lg font-medium text-[#171717]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#706a62]">{item.description}</p><a href="#resources" className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-[#171717] transition-colors hover:text-[#9E742B]">{item.date}<ArrowRight size={14} /></a></motion.article>)}</div></div></section>
  );
}
