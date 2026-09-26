import type { ComponentType } from "react";

interface Props {
  Icon: ComponentType<{ className?: string }>;
  text: string;
  count?: number;
}

export function MenuItem({ Icon, text, count }: Props) {
  return (
    <button className="rounded-8 px-3 py-2.5  group flex items-center outline-none gap-x-2 focus:z-10 cursor-pointer focus:bg-neutral-0 focus:shadow-[0_0_0_3px_var(--color-neutral-100),0_0_0_5px_var(--color-terracotta-600)] hover:bg-neutral-0 w-full hover:drop-shadow-[0_1px_0_rgba(62,44,30,0.03)] hover:shadow-[inset_0_0_0_1px_rgba(62,44,30,0.08)]">
      <Icon className="group-active:text-neutral-900 text-neutral-700" />
      <p className="text-preset-5-medium text-neutral-700 font-dm-sans group-active:text-neutral-900">
        {text}
      </p>
      {!!count && (
        <span className="rounded-full  bg-terracotta-600 flex justify-center items-center w-4 h-4 text-preset-11 text-neutral-100">
          {count}
        </span>
      )}
    </button>
  );
}
