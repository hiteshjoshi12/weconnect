import { motion } from "framer-motion";
import { ArrowUpRight, ClipboardCheck, Vote } from "lucide-react";

export function QuizSurvey() {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="group relative flex min-h-[480px] w-full flex-col justify-between overflow-hidden rounded-[28px] bg-[#0c2444] shadow-lg"
    >
      {/* Subtle Background Pattern/Image */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
          alt="Team Collaboration"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Header Area */}
      <div className="relative z-10 p-8 md:p-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C79A43]">
          Engage & Participate
        </p>
        <h2 className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-white md:text-[38px]">
          Make yourself count.
        </h2>
        <p className="mt-3 max-w-[420px] text-[15px] leading-relaxed text-white/70">
          Share your voice, shape our culture, and participate in the latest workplace quizzes and surveys.
        </p>
      </div>

      {/* Interactive Action Cards */}
      <div className="relative z-10 grid gap-4 p-8 pt-0 sm:grid-cols-2 md:p-10 md:pt-0">
        
        {/* Primary Action Card (Gold) */}
        <button className="group/btn flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#D8B96A] to-[#9E742B] p-6 text-left shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(199,154,67,0.3)]">
          <div className="flex w-full items-center justify-between">
            <ClipboardCheck size={28} className="text-[#0c1420]" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[#0c1420] transition-colors group-hover/btn:bg-white">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </div>
          <p className="mt-8 text-[18px] font-bold text-[#0c1420]">
            Take a Quiz
          </p>
        </button>

        {/* Secondary Action Card (Glass) */}
        <button className="group/btn flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md transition-transform hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
          <div className="flex w-full items-center justify-between">
            <Vote size={28} className="text-[#C79A43]" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white transition-colors group-hover/btn:bg-[#C79A43] group-hover/btn:text-[#0c1420]">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </div>
          <p className="mt-8 text-[18px] font-bold text-white">
            Take a Survey
          </p>
        </button>

      </div>
    </motion.article>
  );
}