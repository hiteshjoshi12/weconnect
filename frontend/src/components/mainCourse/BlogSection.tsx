import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import { blogPosts } from "../../data/mainCourse";
import { SectionTitle } from "./SectionTitle";

export function BlogSection() {
  return (
    <motion.section className="relative w-full overflow-hidden bg-[#fafaf8] py-16 md:py-20">
      
      {/* Subtle 3D Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-[500px] w-[500px] rounded-full bg-[#C79A43]/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0c2444]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 xl:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <SectionTitle 
            title="F&B Blog" 
            subtitle="Good Food... Good Life!" 
          />
        </div>

        {/* Blog Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              // 3D Lift on Hover
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(199,154,67,0.2)] sm:flex-row"
            >
              {/* Image Section */}
              <div className="relative h-60 shrink-0 overflow-hidden sm:h-auto sm:w-[40%]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient overlay to smoothly blend the image edge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2444]/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20 sm:bg-gradient-to-r" />
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                
                {/* Meta Info (Date & Author) */}
                <div className="mb-4 flex flex-wrap items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-gray-400 md:text-[12px]">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#C79A43]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-[#C79A43]" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-[18px] font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#0c2444] md:text-[20px]">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-[14px] leading-relaxed text-gray-500">
                  {post.description}
                </p>

                {/* Interactive Footer & Action Button */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-[13px] font-bold text-[#C79A43] transition-colors group-hover:text-[#9E742B]">
                    Read Article
                  </span>
                  
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-[#C79A43] group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(199,154,67,0.3)]">
                    <ArrowUpRight 
                      size={18} 
                      strokeWidth={2} 
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
                    />
                  </div>
                </div>
                
              </div>
            </motion.article>
          ))}
        </div>
        
      </div>
    </motion.section>
  );
}