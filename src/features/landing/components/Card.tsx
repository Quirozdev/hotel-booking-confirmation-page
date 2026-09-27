import type { ReactNode } from "react";

interface Props {
  topComponent: ReactNode;
  title: string;
  subtitle: string;
  bottomComponent: ReactNode;
}

export function Card({
  topComponent,
  title,
  subtitle,
  bottomComponent,
}: Props) {
  return (
    <article className="rounded-16 border border-neutral-400 px-4 py-5 shadow-[0_1px_0px_0px_rgba(0,0,0,0.02),0_1px_1px_0px_rgba(62,44,30,0.04),0_18px_40px_-28px_rgba(62,44,30,0.25)] md:px-5 md:py-6">
      <div className="flex flex-col gap-y-5 md:gap-y-6">
        {topComponent}
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="text-preset-3 text-neutral-900">{title}</p>
            <p className="text-preset-7 font-dm-sans text-neutral-600">
              {subtitle}
            </p>
          </div>
          {bottomComponent}
        </div>
      </div>
    </article>
  );
}
