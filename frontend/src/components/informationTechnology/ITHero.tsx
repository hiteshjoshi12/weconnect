import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/itchotel.webp";

export function ITHero() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-[#0c1420] pt-16 md:pt-[76px]">
      <div className="absolute inset-0">
        <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: "easeOut" }} src={heroImage} alt="Connected ITC Hotels workplace" className="h-full w-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1420] via-[#0c1420]/90 to-[#0c1420]/35" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-center gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] xl:px-12">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>
          <div className="mb-7 flex items-center gap-3"><span className="h-px w-12 bg-[#C79A43]" /><span className="text-[11px] font-bold tracking-[0.3em] text-[#D8B96A]">INFORMATION TECHNOLOGY</span></div>
          <h1 className="max-w-[680px] text-[clamp(44px,6vw,78px)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">Technology that <span className="block text-[#D8B96A]">connects, enables &amp; evolves.</span></h1>
          <p className="mt-7 max-w-[570px] text-[16px] leading-8 text-white/72">Technology enables our people, strengthens our operations and helps us create better experiences across ITC Hotels.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="group flex items-center gap-3 bg-[#C79A43] px-6 py-3 text-sm font-semibold text-[#1D1D1D] transition-colors hover:bg-[#D8B96A]">Explore IT Services <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a>
            <Link to="#resources" className="group flex items-center gap-3 border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D8B96A] hover:text-[#D8B96A]">IT Resources <BookOpen size={16} /></Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="hidden justify-end lg:flex">
          <div className="max-w-[330px] border-l border-[#D8B96A]/60 pl-7 text-white/75"><p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#D8B96A]">Our digital workplace</p><p className="mt-5 text-[23px] leading-relaxed text-white">A connected foundation for the people, places and experiences that define ITC Hotels.</p></div>
        </motion.div>
      </div>
    </section>
  );
}
