import { MainCourseHeader } from "../components/mainCourse/MainCourseHeader";
import { AboutSection } from "../components/mainCourse/AboutSection";
import { BeverageGallery } from "../components/mainCourse/BeverageGallery";
import { BlogSection } from "../components/mainCourse/BlogSection";
import { FeaturedArticles } from "../components/mainCourse/FeaturedArticles";
import { StatisticsSection } from "../components/mainCourse/StatisticsSection";
import { TeamSection } from "../components/mainCourse/TeamSection";
import { KnowledgePlatformDirectory } from "../components/mainCourse/KnowledgePlatformDirectory";

export default function MainCourse() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#F8F7F4] text-[#1D1D1D]"
    >
      <MainCourseHeader />
      <main>
        <AboutSection />
        <FeaturedArticles />
        <BeverageGallery />
        <BlogSection />
        <StatisticsSection />
        <TeamSection />
        <KnowledgePlatformDirectory />
      </main>
    </div>
  );
}
