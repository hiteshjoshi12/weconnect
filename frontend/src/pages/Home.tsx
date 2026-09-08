import { Header } from "../components/layout/Header";

import { HeroSection } from "../components/home/HeroSection";
import { ChairmanMessage } from "../components/home/ChairmanMessage";
import { LeadershipSection } from "../components/home/LeadershipSection";

import { QuickLinks } from "../components/home/QuickLinks";
import { GuestStory } from "../components/home/GuestStory";
import { QuizSurvey } from "../components/home/QuizSurvey";
import { NewsSection } from "../components/home/NewsSection";
import { Footer } from "../components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F7F4] text-[#1D1D1D]">
      <Header />

      <main>
        <HeroSection />

        <ChairmanMessage />

        <LeadershipSection />

        <QuickLinks />

        <section className="mx-auto w-full max-w-[1600px] px-4 py-16 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <GuestStory />
            <QuizSurvey />
          </div>
        </section>

        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
