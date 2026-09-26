import type { ComponentType } from "react";

interface Props {
  Icon: ComponentType<{ className?: string }>;
  text: string;
  count?: number;
}

export function MenuItem({ Icon, text, count }: Props) {
  return (
    <button className="rounded-8 group focus:bg-neutral-0 hover:bg-neutral-0 flex w-full cursor-pointer items-center gap-x-2 px-3 py-2.5 outline-none hover:shadow-[inset_0_0_0_1px_rgba(62,44,30,0.08)] hover:drop-shadow-[0_1px_0_rgba(62,44,30,0.03)] focus:z-10 focus:shadow-[0_0_0_3px_var(--color-neutral-100),0_0_0_5px_var(--color-terracotta-600)]">
      <Icon className="text-neutral-700 group-active:text-neutral-900" />
      <p className="text-preset-5-medium font-dm-sans text-neutral-700 group-active:text-neutral-900">
        {text}
      </p>
      {!!count && (
        <span className="bg-terracotta-600 text-preset-11 flex h-4 w-4 items-center justify-center rounded-full text-neutral-100">
          {count}
        </span>
      )}
    </button>
  );
}
