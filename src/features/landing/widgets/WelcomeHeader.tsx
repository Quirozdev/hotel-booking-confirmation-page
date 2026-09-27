import { Button } from "@/shared/components/Button";

export function WelcomeHeader() {
  return (
    <div className="flex flex-col justify-between gap-y-4 md:flex-row md:items-center">
      <div>
        <p className="text-preset-8 font-dm-mono text-neutral-600">
          Booking · Confirmed
        </p>
        <h1 className="text-preset-1 text-neutral-900">
          Bienvenue,{" "}
          <span className="text-preset-1 text-terracotta-600 italic">
            Lucia.
          </span>
        </h1>
      </div>
      <div className="flex items-center gap-x-4">
        <Button text="Print receipt" />
        <Button text="Add to calendar" variant="secondary" />
      </div>
    </div>
  );
}
