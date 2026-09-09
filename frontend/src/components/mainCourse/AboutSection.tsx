import { motion } from "framer-motion";
import { ArrowRight, ChefHat } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafaf8] py-20 md:py-28">
      {/* Subtle 3D Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-[#C79A43]/5 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0c2444]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Golden Subheader */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#C79A43]" />
              <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C79A43] md:text-[12px]">
                About Us
              </h2>
            </div>

            {/* Main Headline */}
            <h3 className="text-[32px] font-bold leading-[1.15] tracking-tight text-[#0c2444] md:text-[42px] lg:text-[48px]">
              Preserving our rich culinary heritage.
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-gray-500 md:text-[16px] md:leading-8">
              The <span className="font-semibold text-gray-800">F & B Knowledge Platform</span> aims to place the rich knowledge and invaluable experience of our teams in F&B Production, F&B Service and F&B Support into a common pool that is accessible to F&B teams across ITC Hotels through AD integrated access.
            </p>

            {/* Premium Action Button */}
            <button className="group mt-10 flex h-12 items-center gap-3 rounded-full bg-[#0c2444] px-6 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(12,36,68,0.15)] transition-all duration-300 hover:bg-[#1a3a68] hover:shadow-[0_12px_25px_rgba(12,36,68,0.25)]">
              Read More
              <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* RIGHT: 3D Floating Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto flex w-full max-w-[440px] justify-center perspective-[1200px]"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02, 
                rotateX: 2, 
                rotateY: -2,
                y: -5
              }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(199,154,67,0.25)]"
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=85&w=800"
                alt="Chef preparing a dish"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              
              {/* Overlapping Glassmorphic Badge for 3D Depth */}
              <div className="absolute -left-2 bottom-8 rounded-2xl border border-white/20 bg-white/20 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-xl md:-left-6">
                <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f5f0] text-[#C79A43]">
                    <ChefHat size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Standard of
                    </p>
                    <p className="text-[14px] font-bold text-[#0c2444]">
                      Culinary Excellence
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}