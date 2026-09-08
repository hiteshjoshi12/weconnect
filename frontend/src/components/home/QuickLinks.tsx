import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  HeartPulse,
} from "lucide-react";

// Integrated premium Unsplash imagery matching the context
const links = [
  {
    title: "Career Opportunities",
    description:
      "Discover internal opportunities and explore the next chapter of your journey.",
    icon: BriefcaseBusiness,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Health & Wellbeing",
    description:
      "Explore benefits, wellness initiatives and employee assistance programmes.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Recognition",
    description:
      "Celebrate outstanding contributions and recognize exceptional colleagues.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
];

export function QuickLinks() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAF8] py-24 lg:py-32">
      
      {/* Subtle Background Elements for Depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-20 h-[500px] w-[500px] rounded-full bg-[#C79A43]/5 blur-[120px]" />
        <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0c2444]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 xl:px-10">
        
        {/* HEADER */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#C79A43]">
              Explore WeConnect
            </p>
            <div className="mx-auto mt-4 h-[2px] w-12 bg-[#C79A43]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-[32px] font-bold leading-[1.15] tracking-tight text-[#222] md:text-[40px]"
          >
            Quick access. <br className="sm:hidden" />
            <span className="text-[#A57C35]">Thoughtfully organised.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-[15px] leading-relaxed text-[#777777]"
          >
            Everything you need to explore opportunities, access employee
            services and stay connected across ITC Hotels.
          </motion.p>
        </div>

        {/* 3D CARDS GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:gap-10">
          {links.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -12 }}
                className="group relative flex min-h-[480px] w-full flex-col justify-end overflow-hidden rounded-[32px] bg-[#1D1D1D] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_30px_60px_rgba(12,36,68,0.15)]"
              >
                {/* Background Image with Parallax Hover */}
                <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
                  />
                  {/* Heavy gradient to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/50 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                </div>

                {/* 3D Floating Content Box */}
                <div className="relative z-10 m-5 rounded-[24px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/15">
                  
                  {/* Floating Z-Index Badge */}
                  <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D8B96A] to-[#9E742B] text-white shadow-[0_10px_20px_rgba(199,154,67,0.4)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  <h3 className="mt-4 text-[20px] font-bold text-white transition-colors duration-300 group-hover:text-[#D8B96A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-relaxed text-gray-300 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Modern Animated Button */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[13px] font-bold tracking-wider text-white">
                      EXPLORE
                    </span>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[#C79A43] group-hover:text-[#1D1D1D]">
                      <ArrowUpRight
                        size={18}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}