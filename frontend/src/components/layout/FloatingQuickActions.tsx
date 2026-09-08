import {
  Award,
  BellRing,
  Building2,
  FileText,
  UsersRound,
} from "lucide-react";

const actions = [
  {
    icon: Building2,
    label: "My Unit",
  },
  {
    icon: UsersRound,
    label: "People",
  },
  {
    icon: BellRing,
    label: "Updates",
  },
  {
    icon: Award,
    label: "Recognition",
  },
  {
    icon: FileText,
    label: "Resources",
  },
];

export function FloatingQuickActions() {
  return (
    <aside className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.12)] xl:block">

      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            key={action.label}
            title={action.label}
            className="group relative flex h-[58px] w-[58px] items-center justify-center border-b border-black/[0.06] last:border-none hover:bg-[#1D1D1D]"
          >
            <Icon
              size={21}
              className="text-[#A57C35] transition group-hover:text-[#D3A94F]"
            />

            {/* TOOLTIP */}

            <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-lg bg-[#1D1D1D] px-3 py-2 text-xs text-white opacity-0 shadow-lg transition group-hover:opacity-100">
              {action.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}