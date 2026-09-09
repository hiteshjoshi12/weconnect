import { Tag, Trophy, UserRound, UsersRound } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { statistics } from "../../data/mainCourse";

const icons = { user: UserRound, tag: Tag, trophy: Trophy, users: UsersRound };

// Framer Motion variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

export function StatisticsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c1420] py-20 md:py-28">
      
      {/* 3D Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#C79A43]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/2 rounded-full bg-[#D8B96A]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 xl:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {statistics.map((stat) => {
            const Icon = icons[stat.icon];
            
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_20px_50px_-10px_rgba(199,154,67,0.15)] sm:p-10"
              >
                {/* 3D Icon Sphere */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#D8B96A] to-[#9E742B] shadow-[0_10px_20px_rgba(158,116,43,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_15px_30px_rgba(199,154,67,0.6),inset_0_2px_4px_rgba(255,255,255,0.5)] md:h-20 md:w-20">
                  <Icon
                    size={32}
                    strokeWidth={2}
                    className="text-[#0c1420] md:scale-110"
                  />
                </div>

                {/* Glowing Value Text */}
                <h4 className="text-4xl font-bold tracking-tight text-white drop-shadow-md transition-colors duration-500 group-hover:text-[#D8B96A] md:text-5xl">
                  {stat.value}
                </h4>
                
                {/* Label */}
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 md:text-[12px]">
                  {stat.label}
                </p>

                {/* Subtle bottom edge highlight on hover */}
                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C79A43] to-transparent opacity-0 transition-all duration-500 group-hover:w-1/2 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}