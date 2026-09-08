import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";

// Ensure this path matches your project structure
import bgImage from "../../assets/images/itchotel.webp";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] w-full items-center overflow-hidden bg-[#111]">
      
      {/* ================= BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={bgImage}
          alt="ITC Hotel Background"
          className="h-full w-full object-cover object-[center_30%]"
        />
        {/* Gradients for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1420]/95 via-[#0c1420]/75 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] xl:gap-20 xl:px-12">
        
        {/* LEFT: MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* GOLD ACCENT LINE */}
          <div className="absolute -left-6 top-0 h-full w-[3px] bg-gradient-to-b from-[#C79A43] to-transparent xl:-left-12" />

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#C79A43]" />
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#C79A43]">
              YOUR DIGITAL WORKPLACE
            </span>
          </div>

          <h1 className="max-w-[700px] text-[clamp(40px,4.5vw,72px)] font-bold leading-[1.05] tracking-tight text-white drop-shadow-lg">
            Welcome to your
            <span className="mt-2 block bg-gradient-to-r from-[#D3A94F] to-[#FFF4D4] bg-clip-text text-transparent">
              connected workplace.
            </span>
          </h1>

          <p className="mt-6 max-w-[580px] text-[16px] leading-relaxed text-white/75 drop-shadow-md">
            Everything you need to stay informed, connected and empowered —
            thoughtfully brought together in one unified workplace experience.
          </p>

          {/* 3D GLASS SEARCH BAR */}
          <motion.div 
            whileHover={{ y: -2, scale: 1.01 }}
            className="mt-10 flex max-w-[620px] items-center rounded-2xl border border-white/20 bg-white/10 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          >
            <Search size={22} className="ml-4 text-white/60" />
            <input
              placeholder="Search across WeConnect..."
              className="h-12 flex-1 bg-transparent px-4 text-[15px] text-white outline-none placeholder:text-white/50"
            />
            <button className="group flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-[#C79A43] to-[#D9B660] px-6 text-sm font-bold text-[#1D1D1D] shadow-lg transition-all hover:shadow-[#C79A43]/40">
              Search
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: 3D STATS GRID */}
        {/* perspective-[1000px] enables the 3D tilting effect on children */}
        <div className="relative hidden w-full perspective-[1200px] lg:block">
          <motion.div
            initial={{ opacity: 0, rotateY: 15, x: 50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-5"
          >
            {/* Staggered arrangement for a 3D structural feel */}
            <div className="flex flex-col gap-5 pt-12">
              <HeroStat value="One" label="Unified Workplace" floatDelay={0} />
              <HeroStat value="ITC" label="Hospitality Excellence" floatDelay={1.5} />
            </div>
            
            <div className="flex flex-col gap-5 pb-12">
              <HeroStat value="24/7" label="Always Connected" floatDelay={0.7} />
              <HeroStat value="∞" label="Possibilities" floatDelay={2.2} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// Sub-component for the 3D Cards
function HeroStat({ value, label, floatDelay }: { value: string; label: string; floatDelay: number }) {
  return (
    <motion.div
      // Floating animation loop
      animate={{ y: [0, -8, 0] }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut", 
        delay: floatDelay 
      }}
      // 3D Tilt on Hover
      whileHover={{ 
        scale: 1.05, 
        rotateX: 5, 
        rotateY: -5,
        z: 30, // Pushes the element forward in 3D space
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-md transition-colors hover:border-[#D3A94F]/50 hover:bg-white/15"
    >
      {/* Subtle glare effect on hover */}
      <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:animate-shine" />

      <p className="relative z-10 text-4xl font-bold tracking-tight text-[#D3A94F] drop-shadow-md">
        {value}
      </p>
      
      <p className="relative z-10 mt-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">
        {label}
      </p>
    </motion.div>
  );
}