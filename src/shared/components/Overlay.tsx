import { useEffect } from "react";
import { cn } from "../lib/cn";

interface Props extends React.ComponentProps<"div"> {
  isVisible: boolean;
  onOverlayClick: () => void;
}

export function Overlay({
  isVisible,
  onOverlayClick,
  className,
  ...props
}: Props) {
  useEffect(() => {
    function onKeyUp(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onOverlayClick();
      }
    }

    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keyup", onKeyUp);
    };
  });

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-10 min-h-screen w-full bg-neutral-900 opacity-80",
        className,
      )}
      onClick={onOverlayClick}
      {...props}
    ></div>
  );
}
