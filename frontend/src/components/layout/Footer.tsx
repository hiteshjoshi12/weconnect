import { 
  HelpCircle,
  
} from "lucide-react";

export function Footer({ showHelp = true }: { showHelp?: boolean }) {
  return (
    <footer className="relative w-full bg-[#0c1420]">
      {/* Top Gold Accent Line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#9E742B] via-[#D8B96A] to-[#9E742B]" />

      <div className="mx-auto w-full max-w-[1600px] px-4 py-8 md:px-8 xl:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Left: Branding & Powered By */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-[13px] font-medium text-gray-400">
              Powered by <span className="font-bold text-white">We1Next</span>
            </p>
            <p className="text-[11px] text-gray-500">
              © {new Date().getFullYear()} ITC Hotels Limited. All rights reserved.
            </p>
          </div>

          {/* Right: Help Links */}
          <div className="flex items-center gap-6">
            {showHelp && <a 
              href="/home" 
              className="group flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[13px] font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <HelpCircle size={16} className="text-[#C79A43] transition-transform group-hover:scale-110" />
              Intranet Help
            </a>}
            
            <a 
              href="/home" 
              className="text-[13px] font-medium text-gray-400 transition-colors hover:text-[#C79A43]"
            >
              Privacy Policy
            </a>
            <a 
              href="/admin" 
              className="text-[13px] font-medium text-gray-400 transition-colors hover:text-[#C79A43]"
            >
              Admin
            </a>
            
          </div>

        </div>
      </div>
    </footer>
  );
}