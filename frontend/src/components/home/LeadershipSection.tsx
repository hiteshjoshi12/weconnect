import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  ChevronRight, 
  ArrowRight, 
  Bell,
  User,
  ChevronLeft,
  Gift
} from "lucide-react";
import anil from "../../assets/images/anil.jpg";
import sanjay from "../../assets/images/sanjay.jpg";
import ashish from "../../assets/images/Ashish.jpeg"

// --- MOCK DATA ---
const semcMembers = [
    { name: "Anil Chadha", role: "Managing Director", image: anil },
    { name: "Sanjay Bose", role: "Exec. V P - HR and Learning and Dev.", image: sanjay },
    { name: "Ashish Thakar", role: "Chief Financial Officer, ITC Hotels Limited", image: ashish }
];

// Expanded to 4 employees to demonstrate the carousel
const employees = [
  { name: "PREMIKA TIRKEY", role: "GUEST SERVICE ASSOCIATE (COMPETENT)" },
  { name: "ASHISH BAJPAYEE", role: "FRONT OFFICE MANAGER" },
  { name: "ROHIT SHARMA", role: "EXECUTIVE CHEF" },
  { name: "NEHA GUPTA", role: "SPA MANAGER" }
];

const announcements = [
  "Career Enrichment Programs @ ITC Hotels in 'Learning & Development'",
  "FAQs for connecting to 'WeConnect' Portal.",
  "New guidelines for the Preferential Rate Program updated."
];

// --- MAIN COMPONENT ---
export function LeadershipSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafaf8] py-16 md:py-24">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C79A43]/5 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-[600px] w-[600px] rounded-full bg-[#0c2444]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8 xl:px-12">
        {/* SEMC Section */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#0c2444] md:text-[13px]">
              Talk to your SEMC Members
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-10 bg-[#C79A43]" />
          </motion.div>
          
          <SEMCGrid />
        </div>

        {/* Dashboard Bottom Section */}
        {/* `items-stretch` guarantees both columns strictly match heights */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          
          {/* Left Column: Carousel */}
          <div className="w-full lg:col-span-7 xl:col-span-8">
            <EmployeeHighlightsCarousel />
          </div>
          
          {/* Right Column: Announcements */}
          <div className="w-full lg:col-span-5 xl:col-span-4">
            <AnnouncementsBoard />
          </div>

        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function SEMCGrid() {
  return (
    <div className="mx-auto mt-12 grid w-full max-w-[1000px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-12">
      {semcMembers.map((member, idx) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group relative flex flex-col items-center"
        >
          <div className="relative mb-5 h-28 w-28 perspective-[1000px] md:h-32 md:w-32">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-[4px] border-white bg-white shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)]"
            >
              {member.image ? (
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-300">
                  <User size={40} strokeWidth={1.5} />
                </div>
              )}
              <div className="absolute inset-0 rounded-full border border-[#C79A43]/30" />
            </motion.div>
            
            <button className="absolute -bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#0c2444] text-white shadow-md transition-colors hover:bg-[#15345e] md:h-10 md:w-10">
              <MessageSquare size={16} />
            </button>
          </div>

          <h3 className="text-[16px] font-bold text-[#1D1D1D] transition-colors group-hover:text-[#C79A43] md:text-[18px]">
            {member.name}
          </h3>
          <p className="mt-1 max-w-[200px] text-[12px] font-medium leading-relaxed text-[#777777] md:text-[13px]">
            {member.role}
          </p>
          <div className="mt-4 h-1.5 w-1.5 rotate-45 border-r border-t border-[#C79A43] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
}

function EmployeeHighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive check for cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else setCardsToShow(2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = employees.length - cardsToShow;

  // Auto-scroll every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex h-full w-full items-center gap-2 lg:gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Navigation */}
      <button 
        onClick={prevSlide}
        className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition-colors hover:border-gray-300 hover:text-[#0c2444] md:flex xl:h-14 xl:w-14"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>

      {/* Carousel Track Container */}
      <div className="w-full overflow-hidden px-1 py-4 -my-4">
        <motion.div
          className="flex h-full -mx-3"
          animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.35, 1] }} // Smooth premium easing
        >
          {employees.map((emp, idx) => (
            // width scales automatically depending on standard breakpoints
            <div key={idx} className="flex-none h-full w-full px-3 sm:w-1/2">
              <EmployeeCard name={emp.name} role={emp.role} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Navigation */}
      <button 
        onClick={nextSlide}
        className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition-colors hover:border-gray-300 hover:text-[#0c2444] md:flex xl:h-14 xl:w-14"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>
    </motion.div>
  );
}

function EmployeeCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="group flex h-full w-full flex-col items-center rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:p-8">
      {/* Avatar */}
      <div className="mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-300 ring-1 ring-gray-100 transition-colors duration-300 group-hover:text-[#C79A43] group-hover:ring-[#C79A43]/20 md:h-24 md:w-24">
        <User size={32} strokeWidth={1.5} />
      </div>
      
      <h4 className="text-[14px] font-bold tracking-wide text-gray-900 md:text-[15px]">
        {name}
      </h4>
      <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400 md:text-[11px]">
        {role}
      </p>

      {/* mt-auto forces this block to the very bottom, guaranteeing identical card heights */}
      <div className="mt-auto flex w-full flex-col gap-3 pt-8 xl:flex-row">
        <button className="flex h-10 flex-1 items-center justify-center rounded-xl border border-gray-200 bg-transparent text-[12px] font-semibold text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 md:h-11">
          Read More
        </button>
        <button className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#C79A43] text-[12px] font-semibold text-white transition-colors hover:bg-[#b58b38] md:h-11">
          <Gift size={14} strokeWidth={2} />
          Send Wishes
        </button>
      </div>
    </div>
  );
}

function AnnouncementsBoard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex h-full w-full flex-col rounded-[24px] border border-white/5 bg-[#0f1522] p-6 shadow-xl md:p-8"
    >
      {/* Header */}
      <div className="mb-8 flex shrink-0 items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#C79A43] backdrop-blur-md md:h-11 md:w-11">
          <Bell size={18} strokeWidth={2} />
        </div>
        <h3 className="text-[16px] font-bold uppercase tracking-wider text-white md:text-[17px]">
          Announcements
        </h3>
      </div>

      {/* List - flex-1 allows it to take up middle space */}
      <div className="flex flex-1 flex-col gap-5">
        {announcements.map((text, i) => (
          <div key={i} className="group/item flex items-start gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0">
            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#C79A43] opacity-80" />
            <p className="text-[13px] leading-relaxed text-gray-400 transition-colors group-hover/item:text-gray-200 md:text-[14px]">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Button - mt-auto forces it to align exactly with the bottom buttons of the employee cards */}
      <button className="group/btn mt-auto flex h-11 w-full shrink-0 items-center justify-between rounded-xl border border-white/10 bg-transparent px-5 text-[13px] font-semibold text-white transition-colors hover:bg-white/5 md:h-12">
        VIEW ALL
        <ArrowRight size={16} className="text-gray-500 transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-white" />
      </button>
    </motion.div>
  );
}