import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { featuredArticles } from "../../data/mainCourse";
import { SectionTitle } from "./SectionTitle";

export function FeaturedArticles() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll logic for the premium carousel
  const scroll = (direction: "left" | "right"): void => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 1.5;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fafaf8] py-16 md:py-20">
      {/* Subtle 3D Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C79A43]/5 blur-[120px]" />
        <div className="absolute -right-20 bottom-10 h-[600px] w-[600px] rounded-full bg-[#0c2444]/5 blur-[120px]" />
      </div>

      {/* Reduced max-width from 1400px to 1100px for a more proportionate layout */}
      <div className="relative mx-auto max-w-[1100px] px-4 md:px-8 xl:px-12">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row md:mb-12">
          <SectionTitle
            title="Featured Articles"
            subtitle="Our Hand-Picked Collection"
          />

          {/* Premium Glass Navigation Arrows */}
          <div className="flex shrink-0 gap-3">
            <button
              onClick={() => scroll("left")}
              className="group flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#C79A43] hover:bg-[#C79A43] hover:text-white hover:shadow-[0_8px_16px_rgba(199,154,67,0.2)] text-gray-500"
              aria-label="Previous article"
            >
              <ArrowLeft size={18} strokeWidth={1.5} className="transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#C79A43] hover:bg-[#C79A43] hover:text-white hover:shadow-[0_8px_16px_rgba(199,154,67,0.2)] text-gray-500"
              aria-label="Next article"
            >
              <ArrowRight size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* 3D Carousel Container */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-10 pt-4 perspective-[1200px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              // 3D Hover Tilt Effect
              whileHover={{ 
                scale: 1.03, 
                rotateX: 2, 
                rotateY: -2,
                z: 20
              }}
              // Fixed, proportionate sizes instead of scaling percentages
              className="group relative flex h-[340px] w-[260px] sm:h-[380px] sm:w-[280px] md:h-[400px] md:w-[300px] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(199,154,67,0.25)]"
            >
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                
                {/* Floating "Read" Badge */}
                <div className="absolute right-4 top-4 flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <ArrowUpRight size={18} strokeWidth={2} />
                </div>

                {/* Glassmorphic Text Panel */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-end rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/20">
                  <span className="mb-2.5 h-[2px] w-6 bg-[#C79A43] transition-all duration-500 group-hover:w-10" />
                  <h3 className="text-[15px] font-bold leading-snug text-white md:text-[17px] drop-shadow-md">
                    {article.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-[11px] font-medium leading-relaxed text-gray-300 md:text-[12px] drop-shadow-sm">
                    {article.subtitle}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}