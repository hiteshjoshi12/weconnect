import { motion } from "framer-motion";
import { knowledgeResources } from "../../data/knowledgeResources";
import { KnowledgeResourceCard } from "./KnowledgeResourceCard";

export function KnowledgeResources() {
  return (
    <section id="resources" className="bg-[#faf9f6] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9E742B]">Browse the library</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#171717] md:text-4xl">Knowledge resources</h2>
        </motion.div>
        <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">{knowledgeResources.map((resource, index) => <motion.div key={resource.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }}><KnowledgeResourceCard resource={resource} /></motion.div>)}</div>
      </div>
    </section>
  );
}
