import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logoImage from "../../assets/images/itc_logo.png"; // Adjust path as needed

const platformLinks = [
  "Home",
  "Beverages",
  "WPs",
  "F&B Ideas",
  "F&B Events",
  "Recipe Archive",
  "F&B Brands",
  "RL Culinary Initiatives",
  "Operating Equipments",
  "ARCs",
];

export function KnowledgePlatformDirectory() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0c1420] to-[#050b14] py-16 md:py-24">
      {/* Subtle Ambient Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C79A43]/5 blur-[120px]" />
      </div>

      {/* Top Gold Accent Border */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#C79A43]/50 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* LEFT COLUMN: Brand & Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start lg:col-span-5 xl:col-span-4"
          >
            {/* Logo in a frosted pill for contrast against dark background */}
            <div className="inline-flex h-12 items-center justify-center rounded-full bg-white/95 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <img
                src={logoImage}
                alt="ITC Hotels Limited"
                className="h-5 w-auto object-contain sm:h-6"
              />
            </div>

            <p className="mt-8 text-[14px] leading-relaxed text-gray-400 md:text-[15px]">
              The <span className="font-semibold text-white">F & B Knowledge Platform</span> aims 
              to place the rich knowledge and invaluable experience of our teams 
              in F&B Production.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: Categories Directory */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 xl:col-span-8"
          >
            {/* Header with Gold Accent Line */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-5 w-[3px] rounded-full bg-[#C79A43]" />
              <h3 className="text-[14px] font-bold tracking-[0.15em] text-white uppercase">
                Category
              </h3>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:gap-x-8 lg:gap-y-5">
              {platformLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="group relative flex items-center justify-between rounded-xl border border-transparent px-4 py-3 transition-all hover:border-white/10 hover:bg-white/5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
                >
                  <span className="text-[14px] font-medium text-gray-400 transition-colors group-hover:text-[#D8B96A]">
                    {link}
                  </span>
                  
                  {/* Sliding Arrow Indicator */}
                  <ArrowRight 
                    size={16} 
                    className="text-[#C79A43] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" 
                  />
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}