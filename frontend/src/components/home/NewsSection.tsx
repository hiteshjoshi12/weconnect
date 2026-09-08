import { useRef } from "react";
import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  HelpCircle,
  ShieldCheck,
  Building2,
  Newspaper
} from "lucide-react";

// --- MOCK DATA ---
const newsItems = [
  {
    id: 1,
    date: "Aug 13, 2026 at 01:23 AM",
    title: "Leading by Example in Sustainable Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400",
    icon: Building2
  },
  {
    id: 2,
    date: "Aug 13, 2026 at 01:38 AM",
    title: "Rude Food by Vir Sanghvi: At home with luxury dining",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=400",
    icon: Newspaper
  },
  {
    id: 3,
    date: "Jun 21, 2026 at 15:16 PM",
    title: "ITC Hotels receives Platinum certification under DNV's My Care Infection Risk Management",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400",
    icon: ShieldCheck
  }
];

// --- NEWS SECTION COMPONENT ---
export function NewsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 1.5;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full bg-[#fafaf8] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between border-b border-gray-200 pb-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[22px] font-bold tracking-tight text-[#0c2444] md:text-[28px]">
              ITC Hotels News
            </h2>
            <div className="mt-4 h-[3px] w-16 bg-[#C79A43]" />
          </motion.div>

          {/* Navigation Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-2"
          >
            <button 
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0c2444] shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all hover:bg-[#0c2444] hover:text-white"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0c2444] text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all hover:bg-[#1a3a68]"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </motion.div>
        </div>

        {/* News Cards Carousel */}
        <div 
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {newsItems.map((news, idx) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative flex w-full min-w-[300px] shrink-0 snap-start flex-col gap-5 rounded-[20px] border border-gray-100 bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:min-w-[400px] md:min-w-[450px] lg:flex-row lg:items-center"
            >
              {/* Thumbnail Container */}
              <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-[14px] lg:h-[120px] lg:w-[140px]">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
                <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md lg:hidden">
                  <news.icon size={16} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center py-2 lg:py-0 pr-2">
                <p className="text-[12px] font-bold text-[#C79A43] md:text-[13px]">
                  {news.date}
                </p>
                <h3 className="mt-2 text-[15px] font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#0c2444] md:text-[16px] line-clamp-3">
                  {news.title}
                </h3>
                
                <button className="mt-4 flex items-center gap-2 text-[13px] font-semibold text-gray-500 transition-colors group-hover:text-[#C79A43] lg:mt-3">
                  Read Article
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

