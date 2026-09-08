import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import sanjivPuriImage from "../../assets/images/sanjiv_puri.jpg";

export function ChairmanMessage() {
  return (
    <section className="bg-[#F8F7F4] py-24">

      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] xl:px-10">

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-[#C79A43]" />

          <img
            src= {sanjivPuriImage}
            alt="Chairman's Message"
            className="relative h-[480px] w-full object-cover grayscale-[10%]"
          />

          <div className="absolute bottom-0 left-0 bg-[#1D1D1D] px-8 py-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C79A43]">
              ITC Hotels
            </p>

            <p className="mt-2 text-lg text-white">
              Leadership & Vision
            </p>
          </div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A57C35]">
            Leadership Message
          </p>

          <h2 className="mt-5 text-[clamp(38px,4vw,58px)] font-semibold tracking-[-0.04em] text-[#222]">
            A message from
            <span className="block text-[#A57C35]">
              our Chairman.
            </span>
          </h2>

          <div className="mt-8 h-px w-full bg-black/[0.08]" />

          <p className="mt-8 text-base leading-8 text-[#656565]">
            Together today, we witness history in the making. As we embark
            on this transformative chapter, our collective commitment to
            excellence continues to shape the future of ITC Hotels.
          </p>

          <p className="mt-6 text-base leading-8 text-[#656565]">
            This new journey represents strength, innovation and the
            opportunity to create an even more distinguished hospitality
            experience.
          </p>

          <button className="group mt-9 flex items-center gap-3 text-sm font-semibold text-[#222]">
            Read the full message

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C79A43] text-[#A57C35] transition group-hover:bg-[#C79A43] group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}