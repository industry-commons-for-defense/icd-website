import Hero from "@/components/home/Hero";
import WhyDefenseCommons from "@/components/home/WhyDefenseCommons";
import RoleSpecificHooks from "@/components/home/RoleSpecificHooks";
import ImpactStats from "@/components/home/ImpactStats";
import HowItWorks from "@/components/home/HowItWorks";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyDefenseCommons />
      <RoleSpecificHooks />
      <ImpactStats />
      <HowItWorks />
      <ClosingCTA />
    </>
  );
}