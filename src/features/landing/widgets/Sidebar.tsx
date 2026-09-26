import Logo from "@/assets/images/logo.svg";
import CloseIcon from "@/assets/images/icon-close.svg";
import { Menu } from "./Menu";
import { WeatherCard } from "../components/WeatherCard";

export function SideBar() {
  return (
    <div className="hidden min-h-screen flex-col border-r border-r-neutral-400 bg-neutral-100 p-4 md:px-6 md:py-4 xl:flex xl:px-4 xl:py-5">
      <div className="flex flex-1 flex-col gap-y-4">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="cursor-pointer">
            <img src={Logo} alt="Logo" />
          </a>
          <button className="rounded-4 flex h-8 w-8 cursor-pointer items-center justify-center border border-neutral-400 outline-none hover:bg-neutral-200 focus:bg-neutral-100 focus:shadow-[0_0_0_3px_var(--color-neutral-100),0_0_0_5px_var(--color-terracotta-600)]">
            <img src={CloseIcon} alt="Close icon" />
          </button>
        </div>
        <div className="h-px w-full bg-neutral-400"></div>

        <Menu />

        <div className="mt-auto">
          <WeatherCard />
          <div className="mt-5 flex flex-col gap-y-2.5 border-t border-dashed border-neutral-400 pt-4">
            <p className="text-preset-10 font-dm-mono text-neutral-600 uppercase">
              Est. 1987
            </p>
            <p className="text-preset-10 font-dm-mono text-neutral-600 uppercase">
              Maison Soleil · 12 Rue des Oliviers · Cassis
            </p>
            <p className="text-preset-10 font-dm-mono text-neutral-600 uppercase">
              © 2026 Maison Soleil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
