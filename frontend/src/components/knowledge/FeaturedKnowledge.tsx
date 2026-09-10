import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/itchotel.png";

export function FeaturedKnowledge() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="order-2 lg:order-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9E742B]">A trusted source of truth</p>
          <h2 className="mt-5 max-w-lg text-3xl font-medium leading-tight tracking-[-0.03em] text-[#171717] md:text-4xl">Welcome to the Knowledge Portal</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#69645d]">The ITC Knowledge Portal is a centralized destination for key organizational information, helping colleagues access trusted resources and make informed business decisions.</p>
          <button className="group mt-8 inline-flex items-center gap-3 border border-[#171717] px-5 py-3 text-[13px] font-semibold text-[#171717] transition-colors hover:border-[#B89045] hover:bg-[#B89045] hover:text-white">Explore Knowledge <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="order-1 aspect-[4/3] overflow-hidden rounded-sm bg-[#eee9df] lg:order-2">
          <img src={heroImage} alt="Knowledge and collaboration at ITC Hotels" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
