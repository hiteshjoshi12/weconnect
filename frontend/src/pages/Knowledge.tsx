import { Header } from "../components/layout/Header";
import { ExplorePortalPanel } from "../components/knowledge/ExplorePortalPanel";
import { FeaturedKnowledge } from "../components/knowledge/FeaturedKnowledge";
import { KnowledgeCategoryNav } from "../components/knowledge/KnowledgeCategoryNav";

import { KnowledgeHero } from "../components/knowledge/KnowledgeHero";
import { KnowledgeResources } from "../components/knowledge/KnowledgeResources";
import { RecentlyAdded } from "../components/knowledge/RecentlyAdded";

export default function Knowledge() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#171717]">
      <Header />
      <main>
        <KnowledgeHero />
        <KnowledgeCategoryNav />
        <FeaturedKnowledge />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 lg:grid-cols-[1fr_320px] lg:px-8">
          <KnowledgeResources />
          <ExplorePortalPanel />
        </div>
        <RecentlyAdded />
      </main>
      
    </div>
  );
}
