import SunIcon from "@/assets/images/icon-sun.svg";

export function WelcomeCard() {
  return (
    <div
      className="rounded-20 flex w-[400px] flex-col gap-y-5 p-6 shadow-[0_20px_40px_-20px_rgba(194,90,46,0.55),0_50px_80px_-30px_rgba(169,66,31,0.45),inset_0_0_0_1px_rgba(255,244,220,0.12)]"
      style={{
        backgroundImage:
          "radial-gradient(var(--color-terracotta-400) 0%, var(--color-terracotta-500) 50%, var(--color-terracotta-700) 100%)",
      }}
    >
      <div className="border-terracotta-400 flex justify-between border-t border-dashed">
        <p className="text-preset-10 text-sun-50 font-dm-mono pt-4 uppercase">
          Welcome Card
        </p>
        <img src={SunIcon} alt="Sun icon" className="pt-4" />
      </div>
      <div className="flex flex-col gap-y-6 pb-14.5">
        <div className="flex flex-col gap-y-2">
          <p className="text-preset-4 text-sun-200 italic">
            A note from your host,
          </p>
          <h4 className="text-preset-1 text-sun-50 italic">Margaux.</h4>
        </div>
        <p className="text-preset-5 text-sun-50">
          We're so glad you're coming. The shutters will be open, the lemonade
          cold, and the cat - Poivre - pretending not to notice you.
        </p>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="text-preset-10 text-sun-50 font-dm-mono uppercase">
          Room
        </p>
        <p className="text-preset-4 text-sun-50">La Garrigue</p>
      </div>
    </div>
  );
}
