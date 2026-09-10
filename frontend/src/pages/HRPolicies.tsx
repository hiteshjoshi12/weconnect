import {
  HRCalendar,
  HRHero,
  HRIntro,
  HRNewAdditions,
  HRPolicyCards,
  HRPolicyFeature,
  HRResources,
  HRSubNavigation,
} from "../components/hr";

export default function HRPolicies() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F7F4] text-[#1D1D1D]">
      <main>
        <HRHero />
        <HRSubNavigation />
        <HRIntro />
        <HRPolicyFeature />
        <section className="bg-white pb-20 md:pb-28">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] xl:px-10">
            <HRPolicyCards />
            <aside className="flex flex-col gap-8 lg:pt-0">
              <HRResources />
              <HRCalendar />
            </aside>
          </div>
        </section>
        <HRNewAdditions />
      </main>
    </div>
  );
}
