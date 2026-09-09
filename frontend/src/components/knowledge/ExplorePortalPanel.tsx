import { ArrowUpRight } from "lucide-react";

const additions = ["Updated Brand Standards", "Compliance Framework 2026", "Knowledge Archive Resources"];

export function ExplorePortalPanel() {
  return (
    <aside className="bg-[#202321] p-7 text-white md:p-9">
      <span className="block h-px w-10 bg-[#B89045]" />
      <h2 className="mt-6 text-2xl font-medium tracking-[-0.02em]">Explore the Portal</h2>
      <p className="mt-4 text-sm leading-6 text-white/65">Discover policies, standards, compliance resources, and organizational knowledge.</p>
      <button className="group mt-7 inline-flex items-center gap-3 border border-[#B89045] px-4 py-3 text-[12px] font-semibold text-[#e8c98e] transition-colors hover:bg-[#B89045] hover:text-[#202321]">Browse Knowledge <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
      <div className="mt-10 border-t border-white/15 pt-6"><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d3ae6b]">New additions</p><div className="mt-2">{additions.map((addition, index) => <div key={addition} className="border-b border-white/10 py-4 last:border-0"><p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{index === 1 ? "Updated" : "New"}</p><p className="mt-1 text-sm text-white/85">{addition}</p></div>)}</div></div>
    </aside>
  );
}
