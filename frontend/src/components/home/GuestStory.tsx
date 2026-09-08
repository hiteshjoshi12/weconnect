import { motion } from "framer-motion";
import { ArrowRight} from "lucide-react";



export function GuestStory() {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative flex min-h-[480px] w-full flex-col justify-end overflow-hidden rounded-[28px] bg-[#0c1420] shadow-lg"
    >
      {/* High-quality hospitality background image */}
      <img
        src="https://images.unsplash.com/photo-1542314831-c53cd4b85ca4?auto=format&fit=crop&q=80&w=1200"
        alt="Guest Story"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/50 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#C79A43]" />
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C79A43]">
            Guest Story
          </p>
        </div>

        <h2 className="max-w-[400px] text-[32px] font-bold leading-tight tracking-tight text-white md:text-[38px]">
          Moments that define hospitality.
        </h2>

        <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-gray-300">
          Real stories. Genuine experiences. Discover the people behind every
          memorable stay and the magic they create.
        </p>

        {/* Minimalist Action Button */}
        <button className="mt-8 flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[13px] font-semibold text-white backdrop-blur-md transition-all hover:bg-[#C79A43] hover:text-[#0c1420]">
          Read the latest story
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}

