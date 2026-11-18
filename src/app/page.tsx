import { TopBar } from "@/components/TopBar";
import { PromptOpening } from "@/components/PromptOpening";
import { FlowSection } from "@/components/FlowSection";
import { BrandSection } from "@/components/BrandSection";
import { Contact, NotesOnNow, SpecsCallout, WorkTeaser } from "@/components/StaticSections";

// The story, in order. Reorder sections here.
export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <PromptOpening />
        <FlowSection />
        <BrandSection />
        <SpecsCallout />
        <WorkTeaser />
        <NotesOnNow />
        <Contact />
      </main>
    </>
  );
}
