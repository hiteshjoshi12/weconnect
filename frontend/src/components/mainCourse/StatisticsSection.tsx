import { Tag, Trophy, UserRound, UsersRound } from "lucide-react";
import { statistics } from "../../data/mainCourse";

const icons = { user: UserRound, tag: Tag, trophy: Trophy, users: UsersRound };

export function StatisticsSection() { return <section className="bg-white py-12 md:py-16"><div className="mx-auto grid max-w-[900px] grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-8">{statistics.map((stat) => { const Icon = icons[stat.icon]; return <div key={stat.label} className="text-center"><Icon size={38} strokeWidth={1.5} className="mx-auto text-[#d3a34b]" /><p className="mt-4 text-3xl font-medium text-[#263544]">{stat.value}</p><p className="mt-2 text-xs text-[#263544]">{stat.label}</p></div>; })}</div></section>; }
