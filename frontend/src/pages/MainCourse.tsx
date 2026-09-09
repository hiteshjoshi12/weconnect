import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/home/Footer";
import { MainCourseHeader } from "../components/mainCourse/MainCourseHeader";
import { AboutSection } from "../components/mainCourse/AboutSection";
import { BeverageGallery } from "../components/mainCourse/BeverageGallery";
import { BlogSection } from "../components/mainCourse/BlogSection";
import { FeaturedArticles } from "../components/mainCourse/FeaturedArticles";
import { StatisticsSection } from "../components/mainCourse/StatisticsSection";
import { TeamSection } from "../components/mainCourse/TeamSection";

export default function MainCourse() { return <div id="top" className="min-h-screen overflow-x-hidden bg-[#F8F7F4] text-[#1D1D1D]"><MainCourseHeader /><div className="relative h-[150px] overflow-hidden bg-[#9a6c34] pt-20 md:h-[185px] md:pt-24"><img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=85&w=1800" alt="Food and beverage table" className="h-full w-full object-cover opacity-80" /><div className="absolute inset-0 bg-[#523417]/25" /></div><div className="mx-auto max-w-[1100px] px-6 pt-6 md:px-8"><Link to="/home" className="group inline-flex items-center gap-2 border-b border-transparent pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#5E6268] transition-colors hover:border-[#C79A43] hover:text-[#9E742B]"><ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />Back to My Unit</Link></div><button className="fixed left-0 top-1/2 z-40 flex h-14 w-5 -translate-y-1/2 items-center justify-center bg-[#C79A43] text-white transition-colors hover:bg-[#9E742B]" aria-label="Open side panel"><ArrowRight size={16} /></button><main><AboutSection /><FeaturedArticles /><BeverageGallery /><BlogSection /><StatisticsSection /><TeamSection /></main><Footer showHelp={false} /></div>; }
