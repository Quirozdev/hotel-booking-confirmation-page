import Logo from "@/assets/images/logo.svg";
import HamburgerIcon from "@/assets/images/icon-menu.svg";

interface Props {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: Props) {
  return (
    <header className="relative flex flex-col gap-y-4 xl:hidden">
      <div className="flex items-center justify-between gap-4 border-b border-b-neutral-400 px-4 py-4 md:px-6">
        <a href="/" className="cursor-pointer">
          <img src={Logo} alt="Logo" />
        </a>
        <button
          className="rounded-4 flex h-8 w-8 cursor-pointer items-center justify-center border border-neutral-400 outline-none hover:bg-neutral-200 focus:bg-neutral-100 focus:shadow-[0_0_0_3px_var(--color-neutral-100),0_0_0_5px_var(--color-terracotta-600)]"
          onClick={onMenuToggle}
        >
          <img src={HamburgerIcon} alt="Hamburger icon" />
        </button>
      </div>
    </header>
  );
}
