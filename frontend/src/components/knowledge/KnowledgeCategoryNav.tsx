import { useState } from "react";
import { motion } from "framer-motion";
import {
  Archive,
  BarChart3,
  ClipboardCheck,
  FileCheck2,
  GitBranch,
  Scale,
  Wrench,
} from "lucide-react";

const categories = [
  { label: "Welcom Procedure", icon: GitBranch },
  { label: "Brand Standards", icon: ClipboardCheck },
  { label: "IDM Policy", icon: FileCheck2 },
  { label: "Compliance Management", icon: Scale },
  { label: "Knowledge Archive", icon: Archive },
  { label: "Maintenance", icon: Wrench },
  { label: "Reports & Analytics", icon: BarChart3 },
];

export function KnowledgeCategoryNav() {
  const [active, setActive] = useState(categories[0].label);

  return (
    <nav 
      aria-label="Knowledge categories" 
      className="relative z-10 w-full border-b border-gray-200 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]"
    >
      <div className="mx-auto flex max-w-[1600px] overflow-x-auto px-4 md:px-8 xl:px-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        
        {/* Added lg:justify-center and reduced the gap to keep it compact */}
        <div className="flex w-full gap-1 py-3 sm:gap-2 md:py-4 lg:justify-center">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.label;

            return (
              <button
                key={cat.label}
                onClick={() => setActive(cat.label)}
                // Tightened px, py, and text size
                className={`group relative flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-[11px] font-semibold tracking-wide transition-colors duration-300 md:text-[12px] ${
                  isActive
                    ? "text-[#0c2444]"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon
                  size={14} // Scaled down icon
                  strokeWidth={isActive ? 2.5 : 1.5}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-[#C79A43]" : "text-gray-400 group-hover:text-[#C79A43]"
                  }`}
                />
                {cat.label}

                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 z-[-1] rounded-lg bg-[#C79A43]/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBorder"
                    // Adjusted bottom offset to match the tighter padding
                    className="absolute -bottom-[13px] left-0 right-0 h-[3px] rounded-t-full bg-[#C79A43] md:-bottom-[17px]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-12 bg-gradient-to-l from-white to-transparent lg:hidden" />
    </nav>
  );
}