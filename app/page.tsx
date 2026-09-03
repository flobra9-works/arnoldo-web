import { Hero } from "@/components/home/Hero";
import { SignatureFlavors } from "@/components/home/SignatureFlavors";
import { CraftMoment } from "@/components/home/CraftMoment";
import { SalonTease } from "@/components/home/SalonTease";
import { VisitBlock } from "@/components/home/VisitBlock";
import { FamilyWhisper } from "@/components/home/FamilyWhisper";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SignatureFlavors />
      <CraftMoment />
      <SalonTease />
      <VisitBlock />
      <FamilyWhisper />
    </main>
  );
}
