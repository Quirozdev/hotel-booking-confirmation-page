import Logo from "@/assets/images/logo.svg";
import CloseIcon from "@/assets/images/icon-close.svg";
import { Menu } from "./Menu";

export function SideBar() {
  return (
    <div className="bg-neutral-100 p-4 md:py-4 md:px-6 xl:py-5 xl:px-4">
      <div className="flex flex-col gap-y-4">
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
      </div>
    </div>
  );
}
