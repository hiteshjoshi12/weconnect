import {
  ITAnnouncements,
  ITFooterCTA,
  ITHero,
  ITHighlights,
  ITIntro,
  ITResources,
  ITServices,
} from "../components/informationTechnology";

export default function InformationTechnology() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F7F4] text-[#1D1D1D]">
      <main>
        <ITHero />
        <ITIntro />
        <ITServices />
        <ITHighlights />
        <ITResources />
        <ITAnnouncements />
        <ITFooterCTA />
      </main>
    </div>
  );
}
