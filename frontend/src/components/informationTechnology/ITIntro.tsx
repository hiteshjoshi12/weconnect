import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion } from "framer-motion";
import cioImage from "../../assets/images/sanjiv_puri.jpg";

const fullMessage = [
  "As we continue to navigate the ever-evolving landscape of modern business, it is imperative that we remain agile and proactive in our approach to technology. In today's digital age, the pace of innovation is relentless, and staying ahead requires not only adaptation but also a commitment to embracing change.",
  "At ITC, we recognize that digital transformation is not merely a buzzword but a strategic imperative for long-term success. More than just implementing new technologies, it is about reimagining our processes, empowering our people, and delighting our customers in new and innovative ways.",
  "Over the past year, we have made significant strides in our digital journey. From enhancing our online presence to streamlining internal operations, we have leveraged cutting-edge technologies to drive efficiency, productivity, and growth across all aspects of our organization. However, our journey is far from over. As we look to the future, we must continue to innovate and evolve, embracing emerging technologies such as Generative Artificial Intelligence and Machine Learning to unlock new opportunities and drive sustainable competitive advantage.",
  "To achieve this, we are committed to fostering a culture of innovation and collaboration, where every team member is empowered to contribute ideas, experiment with new technologies, and challenge the status quo. Together, we will not only navigate the challenges of today but also seize the opportunities of tomorrow. Together, let us continue to embrace digital transformation, driving positive change and delivering value to our customers, our employees, and our stakeholders.",
];

export function ITIntro() {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  useEffect(() => {
    if (!isMessageOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMessageOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMessageOpen]);

  return (
    <section className="bg-[#F8F7F4] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:px-10">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-[360px] lg:mx-0">
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-[#C79A43]" />
          <img src={cioImage} alt="Chief Digital Information Officer" className="relative aspect-square w-full object-cover" />
          <div className="absolute bottom-0 left-0 bg-[#1D1D1D] px-6 py-4"><p className="text-xs uppercase tracking-[0.2em] text-[#C79A43]">Information Technology</p><p className="mt-2 text-base text-white">Chief Digital Information Officer</p></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A57C35]">A message from our leadership</p>
          <h2 className="mt-5 text-[clamp(36px,4.5vw,60px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#222]">Enabling a connected <span className="block text-[#A57C35]">organisation.</span></h2>
          <div className="mt-8 h-px w-full bg-black/[0.08]" />
          <p className="mt-8 text-base leading-8 text-[#656565]">Dear Colleagues,</p>
          <p className="mt-5 text-base leading-8 text-[#656565]">{fullMessage[0]}</p>
          <p className="mt-5 text-base leading-8 text-[#656565]">{fullMessage[1]}</p>
          <button type="button" onClick={() => setIsMessageOpen(true)} className="group mt-8 flex items-center gap-3 text-sm font-semibold text-[#222] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A43] focus-visible:ring-offset-4"><span>Read More</span><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C79A43] text-[#A57C35] transition group-hover:bg-[#C79A43] group-hover:text-white"><ArrowUpRight size={16} /></span></button>
        </motion.div>
      </div>
      {isMessageOpen && <div role="presentation" className="fixed inset-0 z-[150] flex items-center justify-center bg-[#0c1420]/70 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsMessageOpen(false); }}><motion.div role="dialog" aria-modal="true" aria-labelledby="cio-message-title" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-[#F8F7F4] p-7 shadow-2xl md:p-12"><button type="button" aria-label="Close message" onClick={() => setIsMessageOpen(false)} className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center text-[#777] transition-colors hover:bg-white hover:text-[#222] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A43]"><X size={20} /></button><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A57C35]">Chief Digital Information Officer</p><h2 id="cio-message-title" className="mt-4 pr-8 text-3xl font-semibold tracking-[-0.03em] text-[#222] md:text-4xl">A message to our colleagues</h2><div className="mt-7 h-px w-16 bg-[#C79A43]" /><p className="mt-8 text-base font-semibold leading-8 text-[#222]">Dear Colleagues,</p>{fullMessage.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-[#656565]">{paragraph}</p>)}</motion.div></div>}
    </section>
  );
}
