import { useState, useEffect } from "react";
import { 
  Bell, 
  ChevronDown, 
  Menu, 
  X,
  LogOut, 
  Settings, 
  User 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Ensure this path matches your project structure
import logoImage from "../../assets/images/itc_logo.png";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";



const navigation = [
  { label: "My Unit", path: "/home" },
  { label: "Knowledge Portal", path: "/knowledge" },
  { label: "Main Course", path: "/main-course" },
  { label: "Information Technology", path: "#" },
  { label: "HR Services", path: "#" },
  { label: "Preferential Rate Program", path: "#" },
];

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Shrink and blur the header on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isMobileMenuOpen]);

  

  return (
    <>
      <header 
        className={`fixed left-0 right-0 top-0 z-[100] w-full transition-all duration-300 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm" 
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div 
          className={`mx-auto flex w-full max-w-[1800px] items-center justify-between px-4 transition-all duration-300 md:px-8 xl:px-12 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-[76px]"
          }`}
        >
          {/* BRANDING */}
          <Link to={"/home"}>
          <div className="flex shrink-0 items-center">
            <img
              src={logoImage}
              alt="ITC Hotels Limited"
              className="h-5 sm:h-6 w-auto object-contain"
              />
          </div>
          </Link>

          {/* CENTER NAVIGATION (App-like pills instead of underlines) */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => item.path !== "#" && navigate(item.path)}
                className={`group relative cursor-pointer px-3 py-5 text-[12px] font-semibold tracking-[0.02em] transition-colors ${location.pathname === item.path ? "text-[#171717]" : "text-gray-600 hover:text-gray-900"}`}
              >
                {item.label}
                <span className={`absolute inset-x-3 bottom-0 h-0.5 origin-left bg-[#B89045] transition-transform duration-300 ${location.pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </button>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            
            <div className="hidden sm:block">
              <button className="relative flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
                <Bell size={18} strokeWidth={2} />
                <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-[#C79A43]" />
              </button>
            </div>

            <div className="hidden h-5 w-px bg-gray-200 sm:block" />

            {/* Clean Profile Pill */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                  if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                }}
                className={`group flex items-center gap-2 rounded-full border p-1 pr-3 transition-colors ${
                  isProfileOpen 
                    ? "border-gray-300 bg-gray-50" 
                    : "border-transparent hover:bg-gray-100"
                }`}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0c2444] text-[11px] font-semibold text-white">
                  HJ
                </div>
                <motion.div animate={{ rotate: isProfileOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} className="text-gray-500" />
                </motion.div>
              </button>

              {/* Minimalist Dropdown */}
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg"
                  >
                    <div className="mb-1 px-3 pb-3 pt-2">
                      <p className="text-[14px] font-semibold text-gray-900">Hitesh Joshi</p>
                      <p className="text-[12px] text-gray-500">hitesh.joshi@itchotels.in</p>
                    </div>
                    <div className="flex flex-col gap-0.5 border-t border-gray-100 pt-1">
                      <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900">
                        <User size={15} /> My Profile
                      </button>
                      <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900">
                        <Settings size={15} /> Account Settings
                      </button>
                      <button onClick={() => {
                        navigate("/");

                      }} className="cursor-pointer mt-1 flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-red-600 transition-colors hover:bg-red-50">
                        <LogOut size={15} /> Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(true);
                if (isProfileOpen) setIsProfileOpen(false);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE RIGHT-SIDE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[110] bg-black/20 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-[120] flex w-full max-w-[280px] flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
                <span className="text-[13px] font-semibold tracking-wider text-gray-900 uppercase">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-colors hover:bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col overflow-y-auto p-3 gap-1">
                {navigation.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      if (item.path !== "#") navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full border-b border-gray-100 px-4 py-3.5 text-left text-[14px] font-medium transition-colors hover:bg-[#faf8f2] hover:text-gray-900 ${location.pathname === item.path ? "text-[#9E742B]" : "text-gray-700"}`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}