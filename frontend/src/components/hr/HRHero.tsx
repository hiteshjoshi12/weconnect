import { motion } from "framer-motion";
import heroImage from "../../assets/images/itcgardenia.png";

export function HRHero() {
  return (
    <section className="relative flex min-h-[390px] items-center overflow-hidden bg-[#0c1420] pt-16 md:pt-[76px]">
      <div className="absolute inset-0">
        <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: "easeOut" }} src={heroImage} alt="ITC Hotels team and workplace" className="h-full w-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1420]/95 via-[#0c1420]/75 to-[#0c1420]/35" />
      </div>
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-24 xl:px-10">
        <div className="flex items-center gap-3"><span className="h-px w-12 bg-[#C79A43]" /><span className="text-[11px] font-bold tracking-[0.3em] text-[#D8B96A]">PEOPLE &amp; CULTURE</span></div>
        <h1 className="mt-6 text-[clamp(46px,7vw,82px)] font-semibold leading-none tracking-[-0.04em] text-white">HR <span className="text-[#D8B96A]">Services</span></h1>
      </motion.div>
    </section>
  );
}
