import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import buildingImage from "../assets/images/itcroyalbengal.webp";
import logoImage from "../assets/images/itc_logo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Handle the login button click
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission reload
    
    // You can add your authentication logic here later (e.g., API calls)
    // For now, simply redirect to the Home page:
    navigate("/home"); 
  };

  return (
    <main className="h-screen bg-[#f7f6f3] p-4 lg:p-5 overflow-hidden">
      <div className="mx-auto flex h-full max-w-[1800px] overflow-hidden rounded-[28px] border border-[#e5e1d8] bg-white shadow-[0_20px_70px_rgba(20,20,20,0.08)] lg:grid lg:grid-cols-[1fr_1.05fr]">
        
        {/* ================= LEFT PANEL ================= */}
        <section className="flex h-full flex-col overflow-y-auto bg-[#fcfcfb] px-8 py-4 sm:px-12 lg:px-16 lg:py-6 xl:px-20 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          
          {/* MAIN CONTENT */}
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-[650px]">
              
              {/* HEADING & LOGO */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* ITC HOTELS LOGO */}
                <div className="mb-4">
                  <img
                    src={logoImage}
                    alt="ITC Hotels Limited"
                    className="h-9 lg:h-7 w-auto object-contain"
                  />
                </div>

                {/* GOLDEN LINE */}
                <div className="mb-3 h-[2px] w-10 bg-[#b88a2d]" />

                {/* HEADING */}
                <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#222222] xl:text-[40px] lg:text-[34px]">
                  Welcome back.
                </h2>
                <p className="mt-2 max-w-[590px] text-[13px] lg:text-[14px] leading-6 text-[#737373]">
                  Sign in to access your workspace and stay connected with
                  everything that matters.
                </p>
              </motion.div>

              {/* FORM */}
              <motion.form
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-5 lg:mt-5"
                onSubmit={handleLogin} 
              >
                {/* EMAIL */}
                <div className="mb-4 lg:mb-3">
                  <label htmlFor="email" className="mb-1.5 block text-[13px] lg:text-[14px] font-semibold text-[#2c2c2c]">
                    Email address
                  </label>
                  <div className="group relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999690] transition-colors group-focus-within:text-[#b88a2d]" />
                    <input id="email" type="email" placeholder="Enter your email address" className="h-[46px] lg:h-[50px] w-full rounded-xl border border-[#ddd9d1] bg-white pl-11 pr-5 text-[14px] text-[#222] outline-none transition-all placeholder:text-[#a5a29d] focus:border-[#b88a2d] focus:ring-4 focus:ring-[#b88a2d]/10" />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label htmlFor="password" className="text-[13px] lg:text-[14px] font-semibold text-[#2c2c2c]">
                      Password
                    </label>
                    <button type="button" className="text-[12px] lg:text-[13px] font-semibold text-[#9b762f] transition-colors hover:text-[#222]">
                      Forgot password?
                    </button>
                  </div>
                  <div className="group relative">
                    <LockKeyhole size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999690] transition-colors group-focus-within:text-[#b88a2d]" />
                    <input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="h-[46px] lg:h-[50px] w-full rounded-xl border border-[#ddd9d1] bg-white pl-11 pr-12 text-[14px] text-[#222] outline-none transition-all placeholder:text-[#a5a29d] focus:border-[#b88a2d] focus:ring-4 focus:ring-[#b88a2d]/10" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#898680] transition-colors hover:text-[#222]">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* REMEMBER */}
                <div className="mt-4 lg:mt-3 flex items-center gap-2.5">
                  <button type="button" onClick={() => setRememberMe(!rememberMe)} className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${rememberMe ? "border-[#b88a2d] bg-[#b88a2d]" : "border-[#d6d2cb] bg-white"}`}>
                    {rememberMe && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                    )}
                  </button>
                  <span className="text-[13px] lg:text-[14px] text-[#66635e]">Remember me</span>
                </div>

                {/* BUTTON (No change needed here as long as type="submit" and form handles onSubmit) */}
                <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }} type="submit" className="group mt-5 lg:mt-4 flex h-[46px] lg:h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-[#202020] text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#b88a2d]">
                  Sign in to WeConnect
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </motion.form>
             
            </div>
          </div>

          {/* FOOTER */}
          <div className="pt-2 shrink-0 text-center text-[11px] text-[#a09c95]">
            © {new Date().getFullYear()} WeConnect. All rights reserved.
          </div>
        </section>

        {/* ================= RIGHT PANEL ================= */}
        <section className="relative hidden h-full overflow-hidden lg:block">
          
          {/* IMAGE */}
          <motion.img
            initial={{ scale: 1.03 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            src={buildingImage}
            alt="WeConnect workplace"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          />

          {/* PROFESSIONAL OVERLAY */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/35 to-[#111111]/10" />

          {/* TOP BRAND LABEL */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute right-10 top-10 flex items-center gap-3 xl:right-14 xl:top-12"
          >
            <span className="h-px w-10 bg-[#c9a55a]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-white/90">
              CONNECTED WORKPLACE
            </span>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="absolute bottom-0 left-0 right-0 px-10 pb-10 xl:px-14 xl:pb-12"
          >
            <div className="mb-6 h-[2px] w-12 bg-[#c9a55a]" />

            <h3 className="max-w-[650px] text-[38px] font-semibold leading-[1.12] tracking-[-0.035em] text-white xl:text-[46px]">
              Everything your workplace needs.
            </h3>
            <p className="mt-2 text-[38px] font-medium leading-[1.12] tracking-[-0.035em] text-[#d4af55] xl:text-[46px]">
              One connected experience.
            </p>
            <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-white/70">
              A unified digital workplace designed to simplify work, improve
              collaboration, and keep your organization moving forward.
            </p>

            {/* DIVIDER */}
            <div className="mt-8 border-t border-white/20 pt-6">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-[26px] font-semibold text-white">One</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/50">
                    Workplace
                  </p>
                </div>
                <div>
                  <p className="text-[26px] font-semibold text-white">One</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/50">
                    Experience
                  </p>
                </div>
                <div>
                  <p className="text-[26px] font-semibold text-[#d4af55]">
                    WeConnect
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/50">
                    Together
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}