import { cn } from "../lib/cn";

interface Props {
  text: string;
  variant?: "primary" | "secondary";
}

export function Button({ ...props }: Props) {
  const variant = props.variant ?? "primary";

  return (
    <button
      className={cn(
        "text-preset-5-semibold font-dm-sans cursor-pointer rounded-full border px-4 py-2.5 focus:shadow-[0_0_0_3px_var(--color-neutral-100),0_0_0_5px_var(--color-terracotta-600)]",
        {
          "border-neutral-400 text-neutral-900 hover:bg-neutral-200":
            variant === "primary",
          "text-sun-50 bg-neutral-900 hover:bg-neutral-800":
            variant === "secondary",
        },
      )}
    >
      {props.text}
    </button>
  );
}
