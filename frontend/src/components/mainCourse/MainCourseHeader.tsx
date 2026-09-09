import { ChevronDown, LogOut, Menu, Search, Settings, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../../assets/images/itc_logo.png";

const menus = [
  { label: "Home", items: [] },
  { label: "F&B Ideas", items: ["F & B Ideas", "Food For Thought", "The New Brew", "F & B Trends", "Competition & Marketing News"] },
  { label: "F&B Brands", items: ["Pavilion", "Bukhara / Peshawri", "Dum Pukht", "Kebabs & Kurries", "Dakshin", "Avartana", "Royal Vega", "Ottimo", "Pan Asian", "Yi Jing", "Edo"] },
  { label: "Operating Equipments", items: ["Kitchen Supplies", "Food Safety", "Table Top", "Restaurant Ware", "Buffets"] },
  { label: "Beverages", items: ["Alcoholic", "Non Alcoholic", "Beverage Dossiers / Wine Selections"] },
  { label: "F&B Events", items: ["Food Festivals & Promotions", "Beverages & Bar Promotions"] },
  { label: "RL Culinary Initiatives", items: [] },
  { label: "ARCs", items: [] },
  { label: "WPs", items: [] },
  { label: "Recipe Archive", items: [] },
];

export function MainCourseHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  return <header className="sticky top-0 z-50 bg-white/95 shadow-[0_1px_0_rgba(29,29,29,0.1)] backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:h-[76px] md:px-8 xl:px-12">
      <Link to="/home" className="flex shrink-0 items-center"><img src={logoImage} alt="ITC Hotels Limited" className="h-5 w-auto object-contain sm:h-6" /></Link>
      <div className="relative hidden lg:block">
        <button onClick={() => setProfileOpen((isOpen) => !isOpen)} className={`group flex items-center gap-2 rounded-full border p-1 pr-3 transition-colors ${profileOpen ? "border-gray-300 bg-gray-50" : "border-transparent hover:bg-gray-100"}`}>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0c2444] text-[11px] font-semibold text-white">HJ</div>
          <motion.div animate={{ rotate: profileOpen ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown size={14} className="text-gray-500" /></motion.div>
        </button>
        <AnimatePresence>
          {profileOpen && <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.15 }} className="absolute right-0 top-full mt-2 w-56 origin-top-right rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg">
            <div className="mb-1 px-3 pb-3 pt-2"><p className="text-[14px] font-semibold text-gray-900">Hitesh Joshi</p><p className="text-[12px] text-gray-500">hitesh.joshi@itchotels.in</p></div>
            <div className="flex flex-col gap-0.5 border-t border-gray-100 pt-1">
              <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"><User size={15} /> My Profile</button>
              <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"><Settings size={15} /> Account Settings</button>
              <button onClick={() => navigate("/")} className="mt-1 flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-red-600 transition-colors hover:bg-red-50"><LogOut size={15} /> Sign Out</button>
            </div>
          </motion.div>}
        </AnimatePresence>
      </div>
      <button onClick={() => setMobileOpen(true)} className="flex h-9 w-9 items-center justify-center text-gray-500 lg:hidden" aria-label="Open menu"><Menu size={20} /></button>
    </div>
    <nav className="hidden border-t border-gray-100 lg:block">
      <div className="mx-auto flex max-w-[1600px] items-center justify-center gap-1 overflow-visible px-4 md:px-8 xl:px-12">
        {menus.map((menu) => <div key={menu.label} className="group relative" onMouseEnter={() => setActiveMenu(menu.label)} onMouseLeave={() => setActiveMenu(null)}>
          <button onClick={() => menu.label === "Home" && navigate("/main-course")} className={`relative flex items-center gap-1 px-3 py-4 text-[11px] font-semibold uppercase tracking-[0.01em] text-gray-700 transition-colors hover:text-[#9E742B] ${menu.label === "Home" ? "text-[#171717]" : ""}`}>
            {menu.label}{menu.items.length > 0 && <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />}<span className={`absolute inset-x-3 bottom-0 h-0.5 origin-left bg-[#C79A43] transition-transform duration-300 ${menu.label === "Home" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
          </button>
          {menu.items.length > 0 && <AnimatePresence>{activeMenu === menu.label && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.16 }} className="absolute left-0 top-full z-50 min-w-64 border-t-2 border-[#C79A43] bg-white py-2 shadow-xl">{menu.items.map((item) => <button key={item} className="block w-full px-5 py-2.5 text-left text-[12px] font-medium text-gray-600 transition-colors hover:bg-[#faf8f2] hover:pl-6 hover:text-[#9E742B]">{item}</button>)}</motion.div>}</AnimatePresence>}
        </div>)}
        <Search size={17} className="ml-2 text-gray-600" />
      </div>
    </nav>
    <AnimatePresence>{mobileOpen && <><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/25 lg:hidden" /><motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-y-0 right-0 z-10 w-full max-w-[320px] overflow-y-auto bg-white p-5 shadow-xl lg:hidden"><div className="flex items-center justify-between border-b border-gray-100 pb-4"><span className="text-xs font-bold uppercase tracking-[0.2em]">F&amp;B Knowledge</span><button onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={20} /></button></div><div className="mt-4">{menus.map((menu) => <div key={menu.label} className="border-b border-gray-100 py-3"><button onClick={() => menu.label === "Home" && navigate("/main-course")} className="flex w-full items-center justify-between text-left text-xs font-semibold uppercase text-[#2f3a46]">{menu.label}{menu.items.length > 0 && <ChevronDown size={14} />}</button>{menu.items.length > 0 && <div className="mt-2 grid gap-1 pl-3">{menu.items.map((item) => <button key={item} className="py-1.5 text-left text-[11px] text-gray-500 transition-colors hover:text-[#9E742B]">{item}</button>)}</div>}</div>)}</div></motion.aside></>}</AnimatePresence>
  </header>;
}
