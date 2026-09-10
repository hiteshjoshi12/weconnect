import { motion } from "framer-motion";
import heroImage from "../../assets/images/itcgrandbharat.webp";

export function KnowledgeHero() {
  return (
    <section className="border-b border-[#e8e2d7] bg-[#faf9f6] pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B89045]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9E742B]">Knowledge Portal</p>
          </div>
          <h1 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.035em] text-[#171717] md:text-5xl lg:text-6xl">Knowledge that moves the organization forward.</h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-[#66615a]">A centralized space to access policies, procedures, standards, compliance resources, reports, and organizational knowledge.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative aspect-[16/9] overflow-hidden rounded-sm bg-[#e9e3d7]">
          <img src={heroImage} alt="Colleagues sharing knowledge around a workspace" className="h-full w-full object-cover" />
          <div className="absolute inset-0 border border-white/25" />
        </motion.div>
      </div>
    </section>
  );
}
