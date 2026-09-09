import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { beverageCategories, beverageGallery } from "../../data/mainCourse";
import { SectionTitle } from "./SectionTitle";

export function BeverageGallery() {
  const [active, setActive] = useState("Show All");
  
  const visible = active === "Show All"
    ? beverageGallery
    : beverageGallery.filter((item) => item.category === active);

  return (
    <section className="relative w-full overflow-hidden bg-[#fafaf8]">
      {/* Subtle Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-40 h-[400px] w-[400px] rounded-full bg-[#C79A43]/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#0c2444]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 xl:px-12">
        <div className="flex flex-col items-center text-center">
          <SectionTitle
            title="Discover Our Beverages"
            subtitle="The Watering Hole"
          />

          {/* Premium Filter Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
            {beverageCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`relative overflow-hidden rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300 md:text-[14px] ${
                  active === category
                    ? "text-white shadow-[0_8px_16px_rgba(199,154,67,0.3)]"
                    : "bg-white text-gray-500 shadow-sm border border-gray-100 hover:border-gray-200 hover:text-gray-900 hover:shadow-md"
                }`}
              >
                {active === category && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 z-0 bg-gradient-to-r from-[#D8B96A] to-[#C79A43]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Animated Grid */}
        <motion.div 
          layout
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, index) => (
              <motion.div
                key={`${item.image}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-[24px] bg-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_20px_40px_rgba(199,154,67,0.15)]"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={`${item.category} beverage`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1420]/90 via-[#0c1420]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* 3D Glassmorphic Info Panel (Slides up on hover) */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-5 md:left-5 md:right-5">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                    <div>
                      <span className="block h-0.5 w-6 bg-[#C79A43] mb-2 transition-all duration-500 group-hover:w-10" />
                      <p className="text-[14px] font-bold text-white tracking-wide">
                        {item.category}
                      </p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C79A43] text-white">
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Fallback */}
        {visible.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-20 text-center text-gray-500"
          >
            No beverages found in this category.
          </motion.div>
        )}
      </div>
    </section>
  );
}