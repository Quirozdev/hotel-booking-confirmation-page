import { CardsSection } from "./CardsSection";
import { WelcomeCardsSection } from "./WelcomeCardsSection";
import { WelcomeHeader } from "./WelcomeHeader";

export function MainSection() {
  return (
    <main className="flex flex-col gap-y-12 px-4 py-5 md:gap-y-10 md:p-6 xl:px-10 xl:py-8">
      <WelcomeHeader />
      <WelcomeCardsSection />
      <CardsSection />
    </main>
  );
}
