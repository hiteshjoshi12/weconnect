import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function HRCalendar() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: firstDay + daysInMonth }, (_, index) => index < firstDay ? null : index - firstDay + 1);
  const isToday = (day: number) => day === today.getDate() && viewDate.getMonth() === today.getMonth() && viewDate.getFullYear() === today.getFullYear();
  const changeMonth = (offset: number) => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));

  return <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-8"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A57C35]">Planning ahead</p><h2 className="mt-3 text-2xl font-semibold text-[#222]">{viewDate.toLocaleString("en-US", { month: "long", year: "numeric" })}</h2></div><div className="flex gap-2"><button type="button" aria-label="Previous month" onClick={() => changeMonth(-1)} className="flex h-9 w-9 items-center justify-center border border-gray-200 text-gray-500 transition-colors hover:border-[#C79A43] hover:text-[#A57C35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A43]"><ChevronLeft size={17} /></button><button type="button" aria-label="Next month" onClick={() => changeMonth(1)} className="flex h-9 w-9 items-center justify-center border border-gray-200 text-gray-500 transition-colors hover:border-[#C79A43] hover:text-[#A57C35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A43]"><ChevronRight size={17} /></button></div></div><div className="mt-7 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-400">{weekdays.map((day) => <div key={day} className="py-2">{day}</div>)}{days.map((day, index) => <div key={`${day}-${index}`} className="py-1"><span className={`mx-auto flex h-9 w-9 items-center justify-center text-sm ${day && isToday(day) ? "bg-[#C79A43] font-semibold text-white" : day ? "text-[#444] hover:bg-[#F8F7F4]" : "text-transparent"}`}>{day ?? "-"}</span></div>)}</div></motion.section>;
}
