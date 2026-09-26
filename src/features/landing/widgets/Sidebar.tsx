import Logo from "@/assets/images/logo.svg";
import CloseIcon from "@/assets/images/icon-close.svg";
import { Menu } from "./Menu";
import { WeatherCard } from "../components/WeatherCard";

export function SideBar() {
  return (
    <div className="bg-neutral-100 p-4 md:py-4 flex flex-col md:px-6 xl:py-5 xl:px-4 w-full min-h-screen">
      <div className="flex flex-col gap-y-4 flex-1">
        <div className="flex items-center gap-4 justify-between">
          <a href="/" className="cursor-pointer">
            <img src={Logo} alt="Logo" />
          </a>
          <button className="cursor-pointer outline-none focus:shadow-[0_0_0_3px_var(--color-neutral-100),0_0_0_5px_var(--color-terracotta-600)] hover:bg-neutral-200 border-neutral-400 border focus:bg-neutral-100 rounded-4 w-8 h-8 flex justify-center items-center">
            <img src={CloseIcon} alt="Close icon" />
          </button>
        </div>
        <div className="h-px w-full bg-neutral-400"></div>

        <Menu />

        <div className="mt-auto">
          <WeatherCard />
          <div className="flex flex-col mt-5 border-t border-dashed border-neutral-400 pt-4 gap-y-2.5">
            <p className="uppercase text-preset-10 text-neutral-600 font-dm-mono">
              Est. 1987
            </p>
            <p className="uppercase text-preset-10 text-neutral-600 font-dm-mono">
              Maison Soleil · 12 Rue des Oliviers · Cassis
            </p>
            <p className="uppercase text-preset-10 text-neutral-600 font-dm-mono">
              © 2026 Maison Soleil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
