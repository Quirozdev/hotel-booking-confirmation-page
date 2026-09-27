import { ReceiptCard } from "../components/ReceiptCard";
import { WelcomeCard } from "../components/WelcomeCard";
import SunIllustrationIcon from "@/assets/images/illustration-sun.svg";
import SparkleIcon from "@/assets/images/icon-sparkle.svg";

export function WelcomeCardsSection() {
  return (
    <section className="flex flex-col gap-y-1">
      <div className="group relative flex flex-col items-center justify-center gap-y-1 md:flex-row-reverse md:items-stretch">
        <WelcomeCard className="z-10 w-full max-w-[400px] flex-1 rotate-2 md:rotate-[4deg] xl:transition-transform xl:duration-700 xl:ease-in-out xl:group-hover:translate-x-20 xl:group-hover:rotate-[-5deg]" />
        <img
          src={SunIllustrationIcon}
          alt="Sun illustration"
          className="absolute bottom-1/2 z-0 translate-y-1/2 opacity-0 transition-opacity duration-700 ease-in-out xl:group-hover:opacity-100"
        />
        <ReceiptCard className="z-10 w-full max-w-[400px] flex-1 -rotate-2 md:rotate-[-4deg] xl:transition-transform xl:duration-700 xl:ease-in-out xl:group-hover:-translate-x-20 xl:group-hover:rotate-[5deg]" />
      </div>
      <div className="hidden items-center justify-center gap-x-2 text-center xl:flex">
        <img src={SparkleIcon} alt="Sparkle icon" />
        <p className="text-preset-10 font-dm-mono text-neutral-600 uppercase">
          Hover to fan
        </p>
        <img src={SparkleIcon} alt="Sparkle icon" />
      </div>
    </section>
  );
}
