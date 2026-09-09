import { Archive, BarChart3, ClipboardCheck, FileCheck2, GitBranch, Scale, Wrench } from "lucide-react";

const categories = [
  ["Welcom Procedure", GitBranch], ["Brand Standards", ClipboardCheck], ["IDM Policy", FileCheck2], ["Compliance Management", Scale], ["Knowledge Archive", Archive], ["Maintenance", Wrench], ["Reports & Analytics", BarChart3],
] as const;

export function KnowledgeCategoryNav() {
  return (
    <nav aria-label="Knowledge categories" className="border-b border-[#e8e2d7] bg-white">
      <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-8">
        {categories.map(([label, Icon], index) => (
          <a key={label} href="#resources" className={`group flex shrink-0 items-center gap-2 border-b-2 py-5 text-[12px] font-semibold transition-colors ${index === 0 ? "border-[#B89045] text-[#171717]" : "border-transparent text-[#77716a] hover:border-[#d8c39a] hover:text-[#171717]"}`}>
            <Icon size={15} strokeWidth={1.7} className={index === 0 ? "text-[#B89045]" : "text-[#999187] group-hover:text-[#B89045]"} />
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
